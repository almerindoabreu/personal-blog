function effectHover() {
  const elements = document.querySelectorAll(".hover_effect");
  const elementsSpan = [];

  elements.forEach((element, index) => {

    // If The span element for this element does not exist in the array, add it.
    if (!elementsSpan[index])
      elementsSpan[index] = element.querySelector("span");

    element.addEventListener("mouseover", e => {
      elementsSpan[index].style.left = e.pageX - element.offsetLeft + "px";
      elementsSpan[index].style.top = e.pageY - element.offsetTop + "px";

    });

    element.addEventListener("mouseout", e => {
      elementsSpan[index].style.left = e.pageX - element.offsetLeft + "px";
      elementsSpan[index].style.top = e.pageY - element.offsetTop + "px";
    });
  });

}

export default effectHover;