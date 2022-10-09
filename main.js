$(document).ready(() => {
  const activeCircle = $(".activeCircle");
  const scrollTracker1 = $("#scrollTracker__menu_1");
  const scrollTracker2 = $("#scrollTracker__menu_2");
  const scrollTracker3 = $("#scrollTracker__menu_3");
  const scrollTracker4 = $("#scrollTracker__menu_4");
  let scrollY = window.scrollY;
  scrollTracker1.click(() => {
    console.log("click");
    activeCircle.css("top", "0");
    window.location.href = "#main";
  });
  scrollTracker2.click(() => {
    activeCircle.css("top", "150px");
    window.location.href = "#about";
  });
  scrollTracker3.click(() => {
    activeCircle.css("top", "310px");
    window.location.href = "#work";
  });
  scrollTracker4.click(() => {
    console.log("click");
    activeCircle.css("top", "475px");
    window.location.href = "#contact";
  });

  window.scroll(() => {
    activeCircle.css("top", `100px`);
    scrollY = window.scrollY;
    console.log(window.scrollY);
  });
});

// const circle = (clickedCircle, circleActive) =>{
// clickedCircle.click(() =>{
//   ci
// })
// };
