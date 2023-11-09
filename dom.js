const DOMSelectors = {
    form: document.querySelector("#form"),
    button: document.getElementById("btn"),
    input: document.querySelector(`#input`),
    input2: document.querySelector(`#input2`),
    input3: document.querySelector(`#input3`),
    remove: document.querySelector(`#remove`),
};

DOMSelectors.form.addEventListener("submit", function(event){
   event.preventDefault();
   });
   const card = DOMSelectors.button.addEventListener("click", function(){
    let input= DOMSelectors.input.value;
    let input2= DOMSelectors.input2.value;
    let input3 = DOMSelectors.input3.value;
    DOMSelectors.form.insertAdjacentHTML("beforeend",
    `<div class="column">
    <div class="card">
        <h2 class="card-header" id="column">${input}</h2>
        <h3 class="card-info" id="column">Author: ${input2}</h3>
        <img src = "${input3}" alt = "" class = "img">
        <button type="click" class="remove">Remove</button>
    </div>
   
 `);
   DOMSelectors.input.value = "";
   DOMSelectors.input2.value ="";
   DOMSelectors.input3.value ="";
 
 
   document.querySelectorAll('.remove').forEach((button) => {
    button.addEventListener('click', function(event) {
        event.target.parentElement.parentElement.remove();
        });
    });
 });
 
