let btn = document.querySelector(".btn1");

// btn.onclick = (evt) => {
//     console.dir("hello");
//     console.log(evt.type);
//     console.log(evt.target);
// }
const handler3 = () => {
    console.log("button was clicked-handler3");
}



btn.addEventListener("click", (evt) => {
    console.log("button was clicked1");
    console.log(evt.type);
})

btn.addEventListener("click", (evt) => {
  console.log("button was clicked2");
  console.log(evt.type);
});

btn.removeEventListener("click", handler3); 


