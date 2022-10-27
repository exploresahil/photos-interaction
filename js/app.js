const listItems = document.querySelectorAll("li");
photos = document.querySelectorAll("img");

listItems.forEach((li, i) => {
  li.addEventListener("mouseenter", () => {
    photos[i].classList.add("intro");
  });
  li.addEventListener("mouseleave", () => {
    photos[i].classList.remove("intro");
  });
  /*
  li.addEventListener("mousemove", (e) => {
    photos[i].style.left = -e.clientX * 0.5 + 80 + "px";
    photos[i].style.top = -e.clientY * 0.5 + 100 + "px";
  });
  */
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

/*const x = document.querySelectorAll("li");
bgcolor = document.getElementsByClassName("bgcolor");

x.forEach((li, i) => {
  li.addEventListener("mouseenter", () => {
    bgcolor[i].classList.add("bgcolorselector");
  });
  li.addEventListener("mouseleave", () => {
    bgcolor[i].classList.remove("bgcolorselector");
  });
});
*/
