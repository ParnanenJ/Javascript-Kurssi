// Tehtävä 1

let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", function() {
    let ots1 = document.querySelector("h2");
    ots1.innerHTML = "Muokattu otsikko!";
});

document.getElementById("btn2").addEventListener("click",function(){
    let ots2 = document.querySelectorAll("h2");
    ots2[1].style.fontSize = "50px";
    ots2[1].style.color = "red";
    ots2[1].style.backgroundColor = "gray";
    ots2[1].style.fontFamily = "Arial";
});

document.getElementById("btn3").addEventListener("click", function(){
    document.querySelectorAll("em") [0].innerHTML = "Suomen "
    document.querySelectorAll("em") [1].innerHTML = "kuunnelluimman radiokanavan Yle Radio Suomen lähetyksissä on ollut tänään maanlaajuisia häiriöitä, kertoo Digita tiedotteessa. Asiasta kertoi myös Yle."
//bonus
    document.querySelectorAll("em") [1].innerHTML += " Tämä on bonus lisäys teksti"
    
})
//Bonus
//document.body.style.backgroundColor = "pink"

// Tehtävä 2
const kuva = document.getElementById("carimage");
const valikko = document.getElementById("mySelect");
//let kuva = document.getElementById("kuva")
valikko.addEventListener("change", function(){
   let malli = valikko.value;
        if (malli === "BMW"){
            kuva.src="https://cdn.motor1.com/images/mgl/pbYnbW/s3/2025-bmw-m4-gt3-evo.webp";
        } else if (malli === "Audi"){
            kuva.src="https://mb.cision.com/Public/12765/3270413/ae31a6bb11a34b0c_800x800ar.jpg";
        } else if (malli === "Mercedes"){
            kuva.src="https://www.topgear.com/sites/default/files/2023/12/1%20Mercedes%20E-Class%20review.jpg?w=422&h=237";
        } else if (malli === "Volvo"){
            kuva.src="https://amklassiek.nl/wp-content/uploads/2024/03/4.-De-eerste-generatie-Volvo-240-onderscheidde-zich-met-een-imposant-front-1320x969.jpg.webp";
        }
});
kuva.addEventListener("mouseover", function(){
    kuva.style.border = "5px solid green";
})
kuva.addEventListener("mouseout", function() {
  kuva.style.border = "none";
});

// Tehtävä 3
const insert = document.getElementById("Insert");

insert.addEventListener("click", function(){
    const nimiArvo = document.getElementById("nimi").value.trim();
    const tehtavaArvo = document.getElementById("tehtava").value.trim();
    const palkkaArvo = Number(document.getElementById("palkka").value);

    if (nimiArvo.length < 5 || tehtavaArvo === "" || (isNaN(palkkaArvo)) || palkkaArvo <= 0){
        alert("Virheelliset tiedot!");
    }
    else {
        let taulukko = document.getElementById("data");
        var rivi = taulukko.insertRow(1);
        var solu1 = rivi.insertCell(0);
        var solu2 = rivi.insertCell(1);
        var solu3 = rivi.insertCell(2);

        solu1.innerHTML = nimiArvo;
        solu2.innerHTML = tehtavaArvo;
        solu3.innerHTML = "$"+palkkaArvo;

    }
})

// Bonus
document.getElementById("siirräN").addEventListener("click", function(){
    kuva.style.transform = "translate(200px, 500px)"; 
})
let x = 0;
let suunta = 1;

function doMove() {
    x += 50 * suunta;
    kuva.style.transform = `translateX(${x}px)`
    const maxX = window.innerWidth - kuva.width;
    if (x >= maxX || x <= 0) {
        suunta *= -1;
    }
}
let haivytys = 1.0;

function fadeOut() {
    if (opacity > 0) {
        opacity -= 0.05;
        kuva.style.opacity = haivytys;
    } else {
        clearInterval();
        kuva.style.display = "none"; 
    }
}
function remove(){
    kuva.style.display = "none";
}