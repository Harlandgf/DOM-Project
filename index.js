
// document.addEventListener("click", function() {
//     var element = document.getElementById("button");
//     element.classList.add("notActive");
// })

function myFunction() {
    var element = document.getElementById("change");
    var form = document.getElementById("form");
    var button = document.getElementById("button");
    var pForm = document.getElementById("pForm");
    pForm.remove();
    element.classList.remove("notActive");
    button.classList.add("notActive");
    form.classList.add("notActive");
  }


function myFunction2() {
    var wrapper = document.getElementById("wrapper");
    if (wrapper.classList.contains("highContrast"))
        wrapper.classList.remove("highContrast")
    else
        wrapper.classList.add("highContrast")
}
