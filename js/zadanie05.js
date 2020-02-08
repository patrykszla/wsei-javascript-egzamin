let myButtons = document.getElementsByTagName("button");
console.log(myButtons);
let arr = Array.from(myButtons).forEach( button => {
    button.addEventListener("click", () => {document.getElementById("container").innerHTML = button.getAttribute("data-text");
                      
    })
})
