import clothesTemplate from "../templates/basket.hbs";
import { setItem, getItem } from "./locale-storage.js";
const closeBtn = document.querySelector("#basket-close");
const openBtn = document.querySelector("#basket-open");

if (!Object.keys(localStorage).includes("clothesData")) {
  setItem("clothesData", []);
}
const list = document.querySelector("#basket-list");

openBtn.addEventListener("click", () => {
  if (getItem("clothesData").length !== 0) {
    const clothesLayout = getItem("clothesData").reduce(
      (string, item) => (string += clothesTemplate(item)),
      ""
    );
    list.innerHTML = clothesLayout;
  }
});
closeBtn.addEventListener("click", () => {});
