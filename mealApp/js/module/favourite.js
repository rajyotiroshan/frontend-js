function addClickEvtToFavBtn() {
  debugger;
  const favBtnList = document.querySelectorAll(".fav");

  favBtnList.forEach((el) => {
    el.addEventListener("click", (evt) => {
      console.log(evt.target.getAttribute("data-mealid"));
      //add id to fav
      if (!evt.target.classList.contains("selected")) {
        evt.target.classList.add("selected");
      } else {
        evt.target.classList.remove("selected");
      }
    });
  });
}

export { addClickEvtToFavBtn };
