let div = document.querySelector("div");
document.addEventListener("scroll", ()=>{
    let przewijanie = window.scrollY;
    console.log("Przewijanie: " + przewijanie);
    let tekst = document.querySelector("main");
    let wysokość = tekst.offsetHeight;
    console.log("Wysokość: "+ wysokość);
    div.style.width = przewijanie*1/wysokość
});