function addClickEvtToFavBtn() {
  debugger;
  const favBtnList = document.querySelectorAll(".fav");

  favBtnList.forEach((el) => {
    el.addEventListener("click", (evt) => {
      debugger;
      //console.log(evt.target.getAttribute("data-mealid"));
      const mealID = evt.target.getAttribute("data-mealid").trim();
      //add id to fav
      if (!evt.target.classList.contains("selected")) {
        let favListID = localStorage.getItem("favListID");
        if (favListID) {
          favListID = JSON.parse(favListID);
          favListID.push(mealID);
        } else {
          favListID = [];
          favListID.push(mealID);
        }
        localStorage.setItem("favListID", JSON.stringify(favListID));
        evt.target.classList.add("selected");
      } else {
        //remove from list.
        let favListID = localStorage.getItem("favListID");
        if (favListID) {
          favListID = JSON.parse(favListID);
          favListID = favListID.filter((id) => id != mealID);
          localStorage.setItem("favListID", JSON.stringify(favListID));
        }
        evt.target.classList.remove("selected");
      }
    });
  });
}

export { addClickEvtToFavBtn };
