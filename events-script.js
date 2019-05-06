document.addEventListener("DOMContentLoaded", start);


function start() {
    document.querySelector(".location1 h3").addEventListener("click", visPopUpCatering);
    document.querySelector(".location3 h3").addEventListener("click", visPopUpSelskabsLokaler);
    document.querySelector(".location4 h3").addEventListener("click", visPopUpKontorAftaler);
    document.querySelector(".location5 h3").addEventListener("click", visPopUpFredagsBar);
    document.querySelector(".location2 h3").addEventListener("click", visPopUpFoodTruck);



    function visPopUpCatering() {
        document.querySelector(".location1 h3").removeEventListener("click", visPopUpCatering);
        console.log("Viser Pop up")
        document.querySelector(".catering").classList.toggle("hide");
        document.querySelector(".catering h1 ").addEventListener("click", fjernCateringPopup);
    }

    function fjernCateringPopup() {
        document.querySelector(".catering").removeEventListener("click", fjernCateringPopup);
        console.log("Viser Pop up");
        document.querySelector(".catering").classList.toggle("hide");
        document.querySelector(".location1 h3").addEventListener("click", visPopUpCatering);


    }

    function visPopUpKontorAftaler() {
        document.querySelector(".location4 h3").removeEventListener("click", visPopUpCatering);
        console.log("Viser Pop up")
        document.querySelector(".kontor-aftaler").classList.toggle("hide");
        document.querySelector(".kontor-aftaler h1").addEventListener("click", fjernPopUpKontorAftaler);
    }

    function fjernPopUpKontorAftaler() {
        document.querySelector(".kontor-aftaler h1").removeEventListener("click", fjernCateringPopup);

        console.log("Viser Pop up")
        document.querySelector(".kontor-aftaler").classList.toggle("hide");

        document.querySelector(".location4 h3").addEventListener("click", visPopUpCatering);


    }

    function visPopUpFoodTruck() {
        document.querySelector(".location2 h3").removeEventListener("click", visPopUpFoodTruck);
        console.log("Viser Pop up")
        document.querySelector(".food-truck").classList.toggle("hide");
        document.querySelector(".food-truck h1").addEventListener("click", fjernPopUpFoodTruck);
    }

    function fjernPopUpFoodTruck() {
        document.querySelector(".food-truck h1").removeEventListener("click", fjernPopUpFoodTruck);

        console.log("Viser Pop up")
        document.querySelector(".food-truck").classList.toggle("hide");

        document.querySelector(".location2 h3").addEventListener("click", visPopUpFoodTruck);


    }


    function visPopUpFredagsBar() {
        document.querySelector(".location5 h3").removeEventListener("click", visPopUpFredagsBar);
        console.log("Viser Pop up")
        document.querySelector(".fredags-bar").classList.toggle("hide");
        document.querySelector(".fredags-bar h1").addEventListener("click", fjernPopUpFredagsBar);
    }

    function fjernPopUpFredagsBar() {
        document.querySelector(".fredags-bar h1").removeEventListener("click", fjernPopUpFredagsBar);

        console.log("Viser Pop up")
        document.querySelector(".fredags-bar").classList.toggle("hide");

        document.querySelector(".location5 h3").addEventListener("click", visPopUpFredagsBar);


    }


    function visPopUpSelskabsLokaler() {
        document.querySelector(".location3 h3").removeEventListener("click", visPopUpSelskabsLokaler);
        console.log("Viser Pop up")
        document.querySelector(".selskabs-lokaler").classList.toggle("hide");
        document.querySelector(".selskabs-lokaler h1").addEventListener("click", fjernPopUpSelskabsLokaler);
    }

    function fjernPopUpSelskabsLokaler() {
        //        document.querySelector(".selskabs-lokale h1").removeEventListener("click", fjernPopUpSelskabsLokaler);

        console.log("Viser Pop up")
        document.querySelector(".selskabs-lokaler").classList.toggle("hide");

        document.querySelector(".location3 h3").addEventListener("click", visPopUpSelskabsLokaler);


    }


}document.addEventListener("DOMContentLoaded", start);


function start() {
    document.querySelector(".location1 h3").addEventListener("click", visPopUpCatering);
    document.querySelector(".location3 h3").addEventListener("click", visPopUpSelskabsLokaler);
    document.querySelector(".location4 h3").addEventListener("click", visPopUpKontorAftaler);
    document.querySelector(".location5 h3").addEventListener("click", visPopUpFredagsBar);
    document.querySelector(".location2 h3").addEventListener("click", visPopUpFoodTruck);



    function visPopUpCatering() {
        document.querySelector(".location1 h3").removeEventListener("click", visPopUpCatering);
        console.log("Viser Pop up")
        document.querySelector(".catering").classList.toggle("hide");
        document.querySelector(".catering h1 ").addEventListener("click", fjernCateringPopup);
    }

    function fjernCateringPopup() {
        document.querySelector(".catering").removeEventListener("click", fjernCateringPopup);
        console.log("Viser Pop up");
        document.querySelector(".catering").classList.toggle("hide");
        document.querySelector(".location1 h3").addEventListener("click", visPopUpCatering);


    }

    function visPopUpKontorAftaler() {
        document.querySelector(".location4 h3").removeEventListener("click", visPopUpCatering);
        console.log("Viser Pop up")
        document.querySelector(".kontor-aftaler").classList.toggle("hide");
        document.querySelector(".kontor-aftaler h1").addEventListener("click", fjernPopUpKontorAftaler);
    }

    function fjernPopUpKontorAftaler() {
        document.querySelector(".kontor-aftaler h1").removeEventListener("click", fjernCateringPopup);

        console.log("Viser Pop up")
        document.querySelector(".kontor-aftaler").classList.toggle("hide");

        document.querySelector(".location4 h3").addEventListener("click", visPopUpCatering);


    }

    function visPopUpFoodTruck() {
        document.querySelector(".location2 h3").removeEventListener("click", visPopUpFoodTruck);
        console.log("Viser Pop up")
        document.querySelector(".food-truck").classList.toggle("hide");
        document.querySelector(".food-truck h1").addEventListener("click", fjernPopUpFoodTruck);
    }

    function fjernPopUpFoodTruck() {
        document.querySelector(".food-truck h1").removeEventListener("click", fjernPopUpFoodTruck);

        console.log("Viser Pop up")
        document.querySelector(".food-truck").classList.toggle("hide");

        document.querySelector(".location2 h3").addEventListener("click", visPopUpFoodTruck);


    }


    function visPopUpFredagsBar() {
        document.querySelector(".location5 h3").removeEventListener("click", visPopUpFredagsBar);
        console.log("Viser Pop up")
        document.querySelector(".fredags-bar").classList.toggle("hide");
        document.querySelector(".fredags-bar h1").addEventListener("click", fjernPopUpFredagsBar);
    }

    function fjernPopUpFredagsBar() {
        document.querySelector(".fredags-bar h1").removeEventListener("click", fjernPopUpFredagsBar);

        console.log("Viser Pop up")
        document.querySelector(".fredags-bar").classList.toggle("hide");

        document.querySelector(".location5 h3").addEventListener("click", visPopUpFredagsBar);


    }


    function visPopUpSelskabsLokaler() {
        document.querySelector(".location3 h3").removeEventListener("click", visPopUpSelskabsLokaler);
        console.log("Viser Pop up")
        document.querySelector(".selskabs-lokaler").classList.toggle("hide");
        document.querySelector(".selskabs-lokaler h1").addEventListener("click", fjernPopUpSelskabsLokaler);
    }

    function fjernPopUpSelskabsLokaler() {
//        document.querySelector(".selskabs-lokale h1").removeEventListener("click", fjernPopUpSelskabsLokaler);

        console.log("Viser Pop up")
        document.querySelector(".selskabs-lokaler").classList.toggle("hide");

        document.querySelector(".location3 h3").addEventListener("click", visPopUpSelskabsLokaler);


    }


}

