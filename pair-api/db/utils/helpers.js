module.exports = {
  filterByWineType: function(bottles, type) {
    /**
         * TODO:
         * Make sure this returns filtered data for
         * MD and VA. I.e;
         
            [
                ...virginiaWine.filter(wine => wine.wineType === "red"), 
                ...marylandWine.filter(wine => wine.wineType === "red"), 
            ]
            */
    return bottles.filter(wine => wine.wineType === type);
  }
};
