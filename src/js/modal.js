const backdrop = document.querySelector("#backdrop");
const closeBtn = document.querySelector("#basket-close");
const openBtn = document.querySelector("#basket-open");
const page = document.querySelector("body");

const toggleModal = () => {
  backdrop.classList.toggle("is-hidden");
  page.classList.toggle("no-scroll");
};

openBtn.addEventListener("click", toggleModal);
closeBtn.addEventListener("click", toggleModal);
