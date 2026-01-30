let btn1 = document.querySelector("#btn");
let currMode = "light";
let body1 = document.querySelector("body");
btn1.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
        body1.style.backgroundColor = "black";
    }
    else {
        
        currMode = "light";
        body1.style.backgroundColor = "white";
    }
    console.log(currMode);
    
})