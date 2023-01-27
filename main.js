
    let acc = document.getElementsByClassName("questions");
    let i;


let clicked = () => {
  for (i = 0; i < acc.length; i++)
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      let panel = this.nextElementSibling;
      let change_arrow = this.children[0];
    //   let color_change = this.classList;
      console.log(change_arrow);
      if (panel.style.display === "block") {
        panel.style.display = "none";
        // change_arrow.style.transform = "rotate(90deg)";
      } else {
        panel.style.display = "block";
        // change_arrow.style.transform = "rotate(0deg)";
      }
    });
};
clicked();



