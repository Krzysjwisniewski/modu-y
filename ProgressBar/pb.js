document.addEventListener("DOMContentLoaded", ()=>{

    let contentHeight = document.querySelector("main").offsetHeight;
    console.log("Wysokość dokumentu: " + contentHeight);

    let pb = document.querySelector("#progressBar > div");

    let windowHeight = window.outerHeight;
    console.log("Wysokość okna: " + windowHeight)

    document.addEventListener("scroll", ()=>{

        let scrollSize = window.scrollY;
        console.log("Przewinięte: " + scrollSize);

        let procent = (scrollSize/(contentHeight-windowHeight))*100;
        console.log("Procent: " + procent + "%");

        pb.style.width = procent + "%";
        // obliczyć jaki % został przewinięty
        // i taki ustawić wew łaściwościach paska postępu
    });

});