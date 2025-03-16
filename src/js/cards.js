import clothesTemplate from "../templates/basket.hbs";
import clothesData from "../data/wardrobe.json";
import { setItem, getItem } from "./locale-storage.js";

const basketList = document.querySelector("#basket-list");
const clothesList = document.querySelector("#clothes-list");
const basketData = getItem("clothesData");

clothesList.addEventListener("click", (e) => {
  if (e.target.dataset.action === "add") {
    if (
      !basketData
        .map((item) => item.id)
        .includes(Number.parseInt(e.target.parentElement.parentElement.id))
    ) {
      basketData.push(
        clothesData[
          clothesData
            .map((item) => item.id)
            .indexOf(Number.parseInt(e.target.parentElement.parentElement.id))
        ]
      );
      setItem("clothesData", basketData);
    }
  }
});

basketList.addEventListener("click", (e) => {
  if (e.target.dataset.action === "delete") {
    basketData.splice(
      basketData
        .map((item) => item.id)
        .indexOf(Number.parseInt(e.target.parentElement.parentElement.id)),
      1
    );
    setItem("clothesData", basketData);
    const clothesLayout = getItem("clothesData").reduce(
      (string, item) => (string += clothesTemplate(item)),
      ""
    );
    basketList.innerHTML = clothesLayout;
    if (getItem("clothesData").length === 0) {
      basketList.innerHTML = `<p class="basket__result">There aren't any clothes</p>`;
    }
  }
});
