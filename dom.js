//const form = dpocument.querySelector("#form")
const DOMSelectors = {
    form: document.querySelector("#form"),
firstName: docuument.querySelector(".first-name"),
h2s:document.querySelectorAll("h2"),
    //select the textbox
//select all the h2s in one property
};
//console.log(DOMSelectors.h2s);
DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(DOMSelectors.firstName.value);
DOMSelectors.h2s.forEach((el)=> el.textContent = DOMSelectors.firstName.value)
})