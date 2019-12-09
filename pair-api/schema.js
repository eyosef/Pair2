const mongoose = require("mongoose");

const WineBottle = mongoose.Schema({
  name: String,
  wineType: String,
  dry: Boolean,
  sweet: Boolean,
  imageLink: String,
  flavorProfile: Array,
  fruitFlavorProfile: Array,
  spiceFlavorProfile: Array,
  cerealGrassFlavorProfile: Array,
  barrelType: Array,
  winery: String,
  city: String,
  state: String,
  tags: Array,
  foodPair: Array
});

const Wine = mongoose.model("Wine", WineBottle);

module.exports = Wine;
