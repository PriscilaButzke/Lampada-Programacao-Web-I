
        var i = document.getElementById("lampada").src;
        var onoff = document.getElementById("on-off").src
        const imgLigado = "./img/on.png"
        const imgDesligado = "./img/off.png"




        function power(){
            i = document.getElementById("lampada").src;
            onoff=document.getElementById("on-off").src

            if(onoff.includes("off")){
                console.log("if")
                document.getElementById("lampada").src = "./img/branca.png"
                document.getElementById("on-off").src = imgLigado
            }else{
                console.log("else")
                document.getElementById("lampada").src = "./img/desligada.png"
                document.getElementById("on-off").src = imgDesligado
            }
        }

        function imgamarela() {
            onoff = document.getElementById("on-off").src
            i = document.getElementById("lampada").src;

            if(onoff.includes("on")){
                document.getElementById("lampada").src = "./img/amarela.png"
            }
        }

        function imgvermelha() {
            onoff = document.getElementById("on-off").src
            i = document.getElementById("lampada").src;

            if(onoff.includes("on")){
                document.getElementById("lampada").src = "./img/vermelha.png"
            }
        }

        function imgazul() {
            onoff = document.getElementById("on-off").src
            i = document.getElementById("lampada").src;

            if(onoff.includes("on")){
                document.getElementById("lampada").src ="./img/azul.png"
            }
        }

        function imgverde() {
            onoff = document.getElementById("on-off").src
            i = document.getElementById("lampada").src;

            if(onoff.includes("on")){
                document.getElementById("lampada").src ="./img/verde.png"
            }
        }

        function imglaranja() {
            onoff = document.getElementById("on-off").src
            i = document.getElementById("lampada").src;

            if(onoff.includes("on")){
                document.getElementById("lampada").src ="./img/laranja.png" 
            }
        }
        

        