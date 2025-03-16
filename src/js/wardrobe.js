import clothesTemplate from "../templates/wardrobe.hbs";
import clothesData from "../data/wardrobe.json";

const list = document.querySelector("#clothes-list");
const clothesLayout = clothesData.reduce(
  (string, item) => (string += clothesTemplate(item)),
  ""
);
list.innerHTML = clothesLayout;
