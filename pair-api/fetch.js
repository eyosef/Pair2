const axios = require("axios");
const cheerio = require("cheerio");

const urls = require("./utils/url.config");
const helper = require("./utils/helper.config");

const { arterra } = urls;
const { getBottleNames, setDataByBottleName } = helper;

const fetchData = async siteURL => {
  const result = await axios.get(siteURL);
  return cheerio.load(result.data);
};

const setFetchResults = async scrapeData => {
  const { website, elements } = scrapeData;
  const { wrapper, name, description } = elements;

  const data = await fetchData(website).catch(e =>
    console.log("error in setFetchResults()", e)
  );

  const bottles = data(wrapper).map((index, node) => {
    const allNames = getBottleNames(data, node, name);
    const results = setDataByBottleName(data, node, description, allNames);

    return results;
  });

  return bottles;
};

const getAllWineInfo = async () => {
  const allResults = await Promise.all([
    setFetchResults({
      website: arterra,
      elements: {
        wrapper: ".wine-card-wrapper.clearfix > .wine-card.clearfix",
        name: ".wine-info > h2",
        description: ".wine-info > .wine-detail"
      }
    })
  ]).then(([arterra]) => ({
    // blueStone,
    // cardinalPoint,
    // eightSixEight,
    arterra
    // blueStone,
    // cardinalPoint,
    // eightSixEight,
  }));

  return allResults;
};

getAllWineInfo();
