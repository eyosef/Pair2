const marylandWine = [
  {
    name: "Riesling",
    wineType: "white",
    dry: false,
    sweet: true,
    imageLink:
      "https://images.pexels.com/photos/1451474/pexels-photo-1451474.jpeg?cs=srgb&dl=abstract-architecture-art-1451474.jpg&fm=jpg",
    flavorProfile: ["acidity", "sweet"],
    winery: "612 Vineyard",
    city: "Berryville",
    state: "MD",
    tags: ["riesling"],
    foodPair: ["shellfish", "chicken", "spice", "asian dishes"]
    /** TODO:
     * fruitFlavorProfile
     * spiceFlavorProfile
     * cerealGrassFlavorProfile
     * barrelType
     */
  },
  {
    name: "2016 Antietam Reserve",
    wineType: "red",
    dry: true,
    sweet: false,
    imageLink:
      "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?cs=srgb&dl=abstract-art-artistic-1103970.jpg&fm=jpg",
    flavorProfile: ["graphite"],
    fruitFlavorProfile: ["berry"],
    spiceFlavorProfile: ["pepper", "spice"],
    barrelType: ["oak"],
    winery: "Antietam Creek Vineyards",
    city: "Sharpsburg",
    state: "MD",
    tags: ["bordeaux"],
    foodPair: []
    /** TODO:
     * cerealGrassFlavorProfile
     */
  },
  {
    name: "2016 Chardonnay",
    wineType: "red",
    dry: true,
    sweet: false,
    imageLink:
      "https://images.pexels.com/photos/370799/pexels-photo-370799.jpeg?cs=srgb&dl=abstract-art-background-370799.jpg&fm=jpg",
    flavorProfile: ["toast", "cream"],
    fruitFlavorProfile: ["pear"],
    cerealGrassFlavorProfile: ["hay"],
    barrelType: ["oak"],
    winery: "Antietam Creek Vineyards",
    city: "Sharpsburg",
    state: "MD",
    tags: ["chardonnay", "pinot noir"],
    foodPair: []
    /**TODO:
     * add wineType to 'tags'
     * add cheese to foodPair
     * spiceFlavorProfile
     */
  },
  {
    name: "2015 Antietam Reserve",
    wineType: "red",
    dry: true,
    sweet: false,
    imageLink:
      "https://images.pexels.com/photos/990826/pexels-photo-990826.jpeg?cs=srgb&dl=abstract-art-artistic-990826.jpg&fm=jpg",
    flavorProfile: [],
    fruitFlavorProfile: ["fruit", "tannin"],
    cerealGrassFlavorProfile: ["eucalyptus (wood)", "earth", "oak (wood)"],
    barrelType: ["oak"],
    winery: "Antietam Creek Vineyards",
    city: "Sharpsburg",
    state: "MD",
    tags: ["chardonnay", "merlot", "cabernet franc", "petit verdot"],
    foodPair: ["brie"]
    /**TODO:
     * add wineType to 'tags'
     * add cheese to foodPair
     * spiceFlavorProfile
     */
  }
];

export default marylandWine;
