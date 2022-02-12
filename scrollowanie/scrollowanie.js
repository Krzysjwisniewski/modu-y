document.addEventListener("DOMContentLoaded", ()=>{

    let topBtn = document.querySelector("#top");
    topBtn.addEventListener("click", ()=>{
        //window.scrollTo(0, 0); // przeskok do pozycji(0,0)
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
    
});

document.addEventListener("scroll", ()=>{
    //console.log("Przewijanie: " + window.scrollY);
    let topBtn = document.querySelector("#top");
    if(window.scrollY > 300){
        document.querySelector("#top").classList.add("show");
    }
    else{
        document.querySelector("#top").classList.remove("show");
    }
});