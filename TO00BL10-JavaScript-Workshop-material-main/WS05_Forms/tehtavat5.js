//Tehtävä 1

const lomake1 = document.getElementById("lomake1");

lomake1.addEventListener("submit", function(event) {
    event.preventDefault();
    const nimi = lomake1.elements["name"].value;
    const sposti = lomake1.elements["email"].value;
    const kommentti = lomake1.elements["comment"].value;

    if (nimi === ""){
        alert("Nimi ei voi olla tyhjä")
    }
    else if (sposti.length < 7 || sposti.length > 14){
        alert("Sähköposti on liian lyhyt tai liian pitkä")
    }
    else if (!sposti.includes("@")){
        alert("Sähköposti väärin")
    }
    else if (kommentti === "" || kommentti.length > 150){
        alert("Kommentti liian lyhyt tai liian pitkä")
    }
    else {
    alert(`Nimi: ${nimi}\nEmail: ${sposti}\nKommentti: ${kommentti}`);
    }
    
    // Tehtävä 3

    localStorage.setItem("nimi", nimi);
    localStorage.setItem("sposti", sposti);
    localStorage.setItem("kommentti", kommentti);
});

// Tehtävä 2

const lomake2 = document.getElementById("theForm");

lomake2.addEventListener("submit", function(event){
    event.preventDefault();
    const taso = document.getElementById("type").value;
    const vuosi = document.getElementById("years").value;
    const hinta = document.getElementById("cost");

    let lasku = taso * vuosi;
    const alennus = 0.20 * lasku;
    if (vuosi > 4){
        hinta.value = lasku - alennus - 5;
        alert("Saat -20% alennusta sekä 5€ yllätys alennuksen");
    }
    else if (vuosi > 2){
        hinta.value = lasku - alennus;
        alert("Saat -20% alennusta");
    }
    else{
        hinta.value = lasku
    };
});

// Tehtävä 4

window.addEventListener("DOMContentLoaded", () => {
  const stonimi = localStorage.getItem("nimi");
  const stosposti = localStorage.getItem("sposti");
  const stokomm = localStorage.getItem("kommentti");

  if (stonimi || stosposti || stokomm) {
    document.getElementById("sessiondata").innerHTML = `Nimi: ${stonimi || "-"}<br>Sähköposti: ${stosposti || "-"}<br>Kommentti: ${stokomm || "-"}`;
  }
});

