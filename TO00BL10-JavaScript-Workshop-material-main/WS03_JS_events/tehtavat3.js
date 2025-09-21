// Tehtävä 1
let nappi1 = document.querySelector("#B1");
nappi1.addEventListener('click', function(){ 
    alert('Klikkasit minua!'); } );

document.getElementById("B2").addEventListener("click", showTable);

function showTable() {
  let tableHTML = `
      <table border="1">
      <thead>
        <tr><th>Nimi</th><th>Tehtävä</th><th>Palkka</th></tr>
      </thead>
      <tbody>
        <tr><td>Tiger Nixon</td><td>System Architect</td><td>$320,800</td></tr>
        <tr><td>Garrett Winters</td><td>Accountant</td><td>$170,750</td></tr>
        <tr><td>Ashton Cox</td><td>Junior Technical Author</td><td>$86,000</td></tr>
        <tr><td>Cedric Kelly</td><td>Senior Javascript Developer</td><td>$433,060</td></tr>
        <tr><td>Airi Satou</td><td>Accountant</td><td>$162,700</td></tr>
      </tbody>
    </table>
  `
  document.getElementById("taulukonPaikka").innerHTML = tableHTML;
}

// Tehtävä 2

document.getElementById("h2-harjoitus2").addEventListener('mouseover', function(){
    console.log("Stepped over my a mouse!")})

let otsikko1 = document.querySelector("h2");
otsikko1.addEventListener('click', function(){
    otsikko1.style.color ="red";
    console.log("Bye bye mouse!");
})

// Tehtävä 3
const laskija = document.getElementById("charcount");
const nappi = document.getElementById("button");
const textdata = document.getElementById("textdata");
textdata.addEventListener('focus', function() {
    textdata.value = "Please fill in the form with proper data.";
    textdata.style.backgroundColor = "gray";
    textdata.style.color = "black";

})
//let  clickyht = 0;
//textdata.addEventListener('keydown', function(){
    //clickyht += 1;
    //document.getElementById("charcount").textContent = clickyht;
//});
textdata.addEventListener('input', function(){
  let merkkeja = textdata.value.length;
  laskija.textContent = merkkeja + "/200";
});

function tarkistaKentta() {
  const merkkeja = textdata.value.length;

  if (!textdata.value || merkkeja > 200) {
    nappi.disabled = true;
    textdata.style.color = "red";
  } else {
    nappi.disabled = false;
    textdata.style.color = "black";
  }
}
textdata.addEventListener('input', tarkistaKentta);
nappi.addEventListener('click', tarkistaKentta);
tarkistaKentta();

// Tehtävä 4
const cord = document.getElementById("coordinates");
cord.addEventListener('mousemove', function(){
  let x = event.clientX;
  let y = event.clientY;
  cord.innerHTML = "X: " + x + ", Y: " + y;
})