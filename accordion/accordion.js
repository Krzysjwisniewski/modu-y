window.addEventListener("DOMContentLoaded", function(){ /* DOMContentLoaded występuje wtedy gdy cała strona się załaduje */
   
    let marki = document.querySelectorAll("li");

    for(let item of marki){
        item.addEventListener("click", function(){
            let markiKlasa = document.querySelector(".fullDesc");
            let akapitZtekstem = item.querySelector("p");
            let nagłowek = item.querySelector("h2")
            let newHeight = akapitZtekstem.offsetHeight + 20 + nagłowek.offsetHeight;

            if(markiKlasa != null){
                if(item.classList.contains("fullDesc")){ // sprawdza czy obiekt posiada klasę
                    item.classList.remove("fullDesc"); // usuwa klasę z obiektu
                    item.style.height = "30px";
                }
                else{
                    markiKlasa.classList.remove("fullDesc");
                    markiKlasa.style.height = "30px";

                    item.classList.add("fullDesc");
                    item.style.height = newHeight + "px"
                }
            }
            else{
                item.classList.add("fullDesc");
                item.style.height = newHeight + "px"
            }
        });
    };
});