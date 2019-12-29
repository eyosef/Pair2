const axios = require("axios");
const cheerio = require("cheerio");

const site1 = "http://868estatevineyards.orderport.net/wines/New-Releases";
const site2 = "(https://www.arterrawines.com/wine-store/)";
const site3 = "https://www.bluestonevineyard.com/wine.html";

const fetchData = async siteURL => {
  const result = await axios.get(siteURL);
  return cheerio.load(result.data);
};

const setResults = async () => {
  const data = await fetchData(site1);
  const data1 = await fetchData(site2);
  const data2 = await fetchData(site3);

  const bottleNames = data(".prod-name")
    .text()
    .trim()
    .split("  ")
    .filter(name => name.length > 0);

  const test = data(".prod-summary");

  // debugger;

  //   return $(".prod-summary").map(node => {
  //     debugger;

  //     const postJobButton = $(".top > .action-post-job").text();
  //   });

  return bottleNames.map(async name => {
    const bottleName = name.trim();

    const data = await fetchData();
    const desc = data(".prod-summary div").map;
  });
  //   bottleNames.trim().split("  ").filter(name => name !== " " || "" )
  //bottleNames.trim()
  //   const bottleDescription = data(".prod-content")
  //     .text()
  //     .split("  ")
  //     .filter(name => name.length > 2);
};

setResults();
