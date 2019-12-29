const axios = require("axios");
const cheerio = require("cheerio");

const urls = require("./utils/url.config");
const helper = require("./utils/helper.config");

const { arterra, blueStone, chateauMorrisette, eightSixEight } = urls;
const { getBottleNames, setDataByBottleName } = helper;

const fetchData = async siteURL => {
  const result = await axios.get(siteURL);
  return cheerio.load(result.data);
};

const setFetchResults = async scrapeData => {
  const { website, elements } = scrapeData;
  const { wrapper, name, description } = elements;

  if (typeof website === "object") {
    // if website is an array of strings
    website.forEach(async url => {
      const data = await fetchData(url).catch(e =>
        console.log("error in setFetchResults()", e)
      );

      debugger;

      const bottles = data(wrapper).map((index, node) => {
        const allNames = getBottleNames(data, node, name);
        const results = setDataByBottleName(data, node, description, allNames);

        return results;
      });

      return bottles;
    });
  }

  if (typeof website === "string") {
    // if website is a string
    const data = await fetchData(website).catch(e =>
      console.log("error in setFetchResults()", e)
    );

    const bottles = data(wrapper).map((index, node) => {
      const allNames = getBottleNames(data, node, name);
      const results = setDataByBottleName(data, node, description, allNames);

      return results;
    });

    return bottles;
  }
};

const getAllWineInfo = async () => {
  /**
   * TODO:
   * use Promise.all() to resolve all of these promises!
   */
  const allResults = await Promise.all([
    // setFetchResults({
    //   website: arterra,
    //   elements: {
    //     wrapper: ".wine-card-wrapper.clearfix > .wine-card.clearfix",
    //     name: ".wine-info > h2",
    //     description: ".wine-info > .wine-detail"
    //   }
    // }),
    // setFetchResults({
    //   website: blueStone,
    //   elements: {
    //     wrapper: ".wsite-elements .paragraph > font",
    //     name: "strong",
    //     description: ""
    //   }
    // }),
    // setFetchResults({
    //   website: cardinalPoint,
    //   elements: {
    //     wrapper: ".wrapper > .clearfix > table > tbody > tr",
    //     name: ".WineName",
    //     description: ".WineDescription"
    //   }
    // }),
    setFetchResults({
      website: chateauMorrisette,
      elements: {
        wrapper: "",
        name: "",
        description: ""
      }
    })
    // setFetchResults({
    //   website: eightSixEight,
    //   elements: {
    //     wrapper: ".shop-holder > .data > .productItem",
    //     name: ".prod-name",
    //     description: ".prod-content"
    //   }
    // })
  ]).then(([// arterra,
    // blueStone,
    // cardinalPoint,
    chateauMorrisette]) => ({
    // eightSixEight,
    // arterra,
    // blueStone,
    // cardinalPoint,
    chateauMorrisette
    // eightSixEight,
  }));

  return allResults;
};

getAllWineInfo();
