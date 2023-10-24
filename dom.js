//const form = dpocument.querySelector("#form")
const DOMSelectors = {
    form: document.querySelector("#form"),
firstName: document.querySelector(".first-name"),
h2s:document.querySelectorAll("h2"),
};


DOMSelectors.form.addEventListener("submit", function(event) {
    event.preventDefault();
});
    //document
   // .querySelector("gallery")
  //  .insertAdjacentHTML (
  //      "afterbegin",

 //       <div class="card">${DOMSelectors.firstName.value}</div>
 //   )
/////DOMSelectors.h2s.forEach((el)=> el.textContent = DOMSelectors.firstName.value)
//})