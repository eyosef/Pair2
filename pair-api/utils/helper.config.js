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

const getIndividualBottleDescription = (
  data,
  node,
  description,
  bottleName
) => {
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

  return bottleDescription;
};

const setDataByBottleName = (data, node, description, allNames) => {
  if (typeof allNames === "string" && allNames.length) {
    // if there's one bottle

    let bottleName = allNames;
    let bottleDescription = getIndividualBottleDescription(
      data,
      node,
      description,
      allNames
    );

    const bottleInfo = {
      name: bottleName,
      description: bottleDescription
    };
    return bottleInfo;
  }

  if (typeof allNames === "object") {
    // if there's an array of bottles

    let allBottles = [];
    allNames.map((i, name) => {
      const description = data(node)
        .text()
        .replace(name, "");

      allBottles.push({
        name,
        description
      });
    });
    return allBottles;
  }
};

module.exports = {
  getBottleNames,
  getIndividualBottleDescription,
  setDataByBottleName
};
