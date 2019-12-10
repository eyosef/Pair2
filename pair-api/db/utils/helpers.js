module.exports.filterByWineType = (bottles, type) => {
  /**
   * TODO:
   * Make sure this returns filtered data for
   * MD and VA. I.e;
   
   [
       ...virginiaWine.filter(wine => wine.wineType === "red"), 
       ...marylandWine.filter(wine => wine.wineType === "red"), 
    ]
   */
  if (bottles) {
    return bottles.filter(wine => wine.wineType === type);
  }
  return;
};

// module.exports.filterByWineType = filterByWineType();
