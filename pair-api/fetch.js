const axios = require("axios");
const cheerio = require("cheerio");

const eightSixEight =
  "http://868estatevineyards.orderport.net/wines/New-Releases";
const arterra =
  "https://vinoshipper.com/iframe/v2/wine-list?css=&id=738&lid=&clubId=undefined&bustCache=false"; //arterra winery's wine API
const blueStone = "https://www.bluestonevineyard.com/wine.html";

const fetchData = async siteURL => {
  const result = await axios.get(siteURL);
  return cheerio.load(result.data);
};

const getBottleNames = (data, node, name) => {
  if (data(node).find(name).length > 1) {
    return data(node)
      .find(name)
      .map((i, n) =>
        data(n)
          .text()
          .trim()
      );
  } else {
    return data(node)
      .find(name)
      .text()
      .trim();
  }
};

const setDataByBottleName = (data, node, description, allNames) => {
  if (typeof allNames === "object") {
    // if there's > 1 bottle name
    return allNames.map((i, name) => {
      const description = data(node)
        .text()
        .replace(name, "");

      const bottleInfo = {
        name,
        description
      };
      return bottleInfo;
    });
  } else {
    let bottleName = allNames; // else we're using a specific bottle
    let bottleDescription;
    if (description.length) {
      bottleDescription = data(node)
        .find(description)
        .text()
        .trim();
    } else {
      bottleDescription = data(node)
        .text()
        .replace(bottleName, "");
    }

    const bottleInfo = {
      name: bottleName,
      description: bottleDescription
    };
    return bottleInfo;

    // if (data(node).find(description).length === 0) {
    //   return data(node)
    //     .text()
    //     .replace(allNames, "");
    // }
    // if (data(node).find(description).length === 1) {
    //   return data(node)
    //     .find(description)
    //     .text()
    //     .trim();
    // }
    // if (data(node).find(description).length > 1) {
    //   debugger;
    // }
  }
};

const setFetchResults = async scrapeData => {
  const { website, elements } = scrapeData;
  const { wrapper, name, description } = elements;

  const data = await fetchData(website);

  const bottles = data(wrapper).map((index, node) => {
    const allNames = getBottleNames(data, node, name);
    const results = setDataByBottleName(data, node, description, allNames);

    if (Object.keys(results).length > 2) {
      debugger;
    } else {
      return results;
    }

    return results;
  });
  debugger;
  return bottles;
};

const getAllWineInfo = async () => {
  // const eightSixEightWinery = await setFetchResults({
  //   website: eightSixEight,
  //   elements: {
  //     wrapper: ".shop-holder > .data > .productItem",
  //     name: ".prod-name",
  //     description: ".prod-content"
  //   }
  // });

  // const arterraWinery = await setFetchResults({
  //   website: arterra,
  //   elements: {
  //     wrapper: ".wine-card-wrapper.clearfix > .wine-card.clearfix",
  //     name: ".wine-info > h2",
  //     description: ".wine-info > .wine-detail"
  //   }
  // });

  const blueStoneWinery = await setFetchResults({
    website: blueStone,
    elements: {
      wrapper: ".wsite-elements .paragraph > font",
      name: "strong",
      description: ""
    }
  });

  return blueStoneWinery;
};

getAllWineInfo();
