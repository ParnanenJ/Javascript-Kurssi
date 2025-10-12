const lomake = document.querySelector("#lomake");
const lista = document.querySelector("#lista")
// Luodaan localstorage avaimille muuttuja
let localid = 1;

//Heataan localstoragen avaimet
const keys = Object.keys(localStorage)
  .map(Number)          // muutetaan numeroksi
  .sort((a, b) => a - b); // järjestetään nousevasti

for (let key of keys) {
  const value = localStorage.getItem(key);
  lista.insertRow().insertCell().textContent = value;
  console.log(key, value);
}

// Jos localStoragessa on jotain: 
// niin tallennetaan se localstorageen ja lisätään siihen +1, jotta localstorage avaimet jatkuvat seuraavasta luvusta
if (localStorage.length > 0) {
  localid = localStorage.length + 1;
}

lomake.addEventListener("submit", function() {

  let tieto = lomake.elements["kentta1"].value;

  if (tieto.length < 3) {
    alert("väärin");
  } else {
    // Tallenna tieto ja kasvata id:tä
    localStorage.setItem(localid, tieto);
    localid++;
  }
});