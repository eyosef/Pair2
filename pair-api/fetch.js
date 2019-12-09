const axios = require("axios");
const cheerio = require("cheerio");

const siteUrl = "http://868estatevineyards.orderport.net/wines/New-Releases";

const fetchData = async () => {
  const result = await axios.get(siteUrl);
  return cheerio.load(result.data);
};

const setResults = async () => {
  const $ = await fetchData();
  const bottleNames = $(".prod-name")
    .text()
    .trim()
    .split("  ")
    .filter(name => name.length > 0);

  const test = $(".prod-summary");

  debugger;

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
