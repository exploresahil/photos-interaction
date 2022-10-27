const listItems = document.querySelectorAll("li");
photos = document.querySelectorAll("img");

listItems.forEach((li, i) => {
  li.addEventListener("mouseenter", () => {
    photos[i].classList.add("intro");
  });
  li.addEventListener("mouseleave", () => {
    photos[i].classList.remove("intro");
  });
});

const listItemsa = document.querySelectorAll("li");
colors = document.querySelectorAll(".color");

listItemsa.forEach((li, i) => {
  li.addEventListener("mouseenter", () => {
    colors[i].classList.add("colorChange");
  });
  li.addEventListener("mouseleave", () => {
    colors[i].classList.remove("colorChange");
  });
});
