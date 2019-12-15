const axios = require("axios");
const cheerio = require("cheerio");

const site1 = "http://868estatevineyards.orderport.net/wines/New-Releases";
const site2 = "https://www.arterrawines.com/wine-store/";
const site3 = "https://www.bluestonevineyard.com/wine.html";

const fetchData = async siteURL => {
  const result = await axios.get(siteURL);
  return cheerio.load(result.data);
};

const setResults = async scrapeData => {
  const { website, elements } = scrapeData;
  const { wrapper, name, description } = elements;
  const data = await fetchData(website);
  // const data1 = await fetchData(site2);
  // const data2 = await fetchData(site3);

  const bottles = data(wrapper).map((index, node) => {
    const bottleName = data(node)
      .find(name)
      .text()
      .trim();
    const bottleDescription = data(node)
      .find(description)
      .text()
      .trim();
    return { name: bottleName, description: bottleDescription };
  });
  return bottles;
};

setResults({
  website: site1,
  elements: {
    wrapper: ".shop-holder > .data > .productItem",
    name: ".prod-name",
    description: ".prod-content"
  }
});
