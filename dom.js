//const form = dpocument.querySelector("#form")\
//const pokemon = 


DOMSelectors.h2s.forEach((el) => el.textContent = DOMSelectors.firstName.value);
DOMSelectors.form.addEventListener("submit", function(event) {event.preventDefault()});
const card = DOMSelectors.button.addEventListener("click", function(){
    let input= DOMSelectors.input.value;
    let input2= DOMSelectors.input2.value;
    DOMSelectors.form.insertAdjacentHTML("beforeend",
    `<div class="gallery">
    <div class="card">
        <h2 class="card-header" id="column">${input}</h2>
        <h3 class="card-info" id="column">${input2}</h3>  
        </div>,
    <button type="submit" id="delete">Delete</button>`);
}

    const DOMSelectors = {
        form: document.querySelector("#form"),
       h2s: document.querySelectorAll("h2"),
        h3s: document.querySelectorAll("h3"),
        button: document.getElementById("btn"),
        input: document.querySelector(#input),
        input2: document.querySelector(#input2),
       delete: document.querySelector(#delete),
    });
    
    function backgroundAndText (background, text){
        background.style.backgroundColor = "red"
        text.innerHTML = "hi"
        text.style.fontSize = "40px"
    }
//document
 //   .querySelector("gallery")
  //  .insertAdjacentHTML (
 //       "afterbegin",

 //       <div class="card">${DOMSelectors.firstName.value}</div>
 //   )
//DOMSelectors.h2s.forEach((el)=> el.textContent = DOMSelectors.firstName.value)
//})