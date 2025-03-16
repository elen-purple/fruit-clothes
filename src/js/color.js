let color = "";
switch (Math.round(Math.random() * (3 - 1) + 1)) {
  case 1:
    color = "red";
    break;
  case 2:
    color = "blue";
    break;
  case 3:
    color = "green";
    break;
  default:
    color = "red";
}

document.querySelector(
  ".header__btn"
).style.backgroundColor = `var(--${color})`;

document.querySelector(".basket__btn").classList.add(color)
document.querySelector(".basket").classList.add(color);
document.querySelector("body").classList.add(color);