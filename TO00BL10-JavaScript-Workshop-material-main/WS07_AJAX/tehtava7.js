
// Tehtävä 1
var text = '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe" , "job":"Manager" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" , "job":"Marketing" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" , "job":"Developer" } ]}';

let data = JSON.parse(text);

const nappi1 = document.querySelectorAll("button")[0];
const nappi2 = document.querySelectorAll("button")[1];
const dataruutu = document.getElementById("jsondata");

nappi1.addEventListener("click", function() {
    dataruutu.innerHTML = ""
    data.employees.forEach(tyontekija => {
        dataruutu.innerHTML += tyontekija.firstName + "  " + tyontekija.lastName + "<br>";
    });
});

nappi2.addEventListener("click", function(){
    dataruutu.innerHTML = ""
    data.employees.forEach(tyontekija => {
        dataruutu.innerHTML    
            += tyontekija.firstName + "  " 
            + tyontekija.lastName 
            + " Työnimike: " + tyontekija.job + "<br>";
    });
});

// Tehtävä 2
const nappi3 = document.querySelectorAll("button")[2];
const nappi4 = document.querySelectorAll("button")[3];
const dataruutu2 = document.getElementById("rawdata");

nappi3.addEventListener("click", function(){
    var tieto = new XMLHttpRequest();
    tieto.open('GET', 'https://www.omdbapi.com/?s=star+wars&apikey=cbbc6750', true);
    tieto.onreadystatechange = function() {
        if (tieto.readyState === 4 && tieto.status === 200) {
            
            let data = JSON.parse(tieto.responseText);

            dataruutu2.textContent = ""
            dataruutu2.textContent = JSON.stringify(data);
        }
    };
    tieto.send();
});

nappi4.addEventListener("click", function(){
    var tieto = new XMLHttpRequest();
    tieto.open('GET', 'https://www.omdbapi.com/?s=star+wars&apikey=cbbc6750', true);
    tieto.onreadystatechange = function() {
        if (tieto.readyState === 4 && tieto.status === 200) {
            
            let data = JSON.parse(tieto.responseText);

            dataruutu2.textContent = ""
            const taulukko = document.createElement("table")
            data.Search.forEach(el => {
                const rivi = taulukko.insertRow();
                const solu1 = rivi.insertCell();
                const solu2 = rivi.insertCell();
                const solu3 = rivi.insertCell();
                const solu4 = rivi.insertCell();

                solu1.textContent = el.Title; 
                solu2.textContent = el.Year;
                solu3.textContent = el.Type;
                
                let kuva = document.createElement("img");
                kuva.src = el.Poster;
                kuva.width = 100;
                solu4.appendChild(kuva);
                dataruutu2.appendChild(taulukko);
            });
        };
    };
    tieto.send();
});

// Tehtävä 3

const dataruutu3 = document.getElementById("weatherdata");
const nappi5 = document.querySelectorAll("button")[4];

nappi5.addEventListener("click", function(){
    var tieto = new XMLHttpRequest();
    tieto.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=Helsinki&units=metric&mode=JSON&APPID=ff64c247a136f706923d1ee0d55d71e2', true);
    tieto.onreadystatechange = function() {
        if (tieto.readyState === 4 && tieto.status === 200){
            let data = JSON.parse(tieto.responseText);
            dataruutu3.textContent = "";
            dataruutu3.textContent = `Lämpötila: ${data.main.temp} °C |  Pilvisyys: ${data.clouds.all}% | Ilmankosteus: ${data.main.humidity}% `;
        };
    };
    tieto.send();
});

let city = document.getElementById("city");
city.addEventListener("change", function(){
    let kaupunki = city.value;
    tiedonhaku(kaupunki);
});

const haku = document.getElementById("search");
const hk = document.getElementById("citysearch");

haku.addEventListener("click", function(){
    let kaupunki = hk.value;
    hk.value = "";
    tiedonhaku(kaupunki);
})

function tiedonhaku(k){
    var tieto = new XMLHttpRequest();
    tieto.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${k}&units=metric&mode=JSON&APPID=ff64c247a136f706923d1ee0d55d71e2`, true);

    tieto.onreadystatechange = function() {
        if (tieto.readyState === 4 && tieto.status === 200) {
            let data = JSON.parse(tieto.responseText);
            dataruutu3.textContent = "";
            dataruutu3.textContent = `${k}\nLämpötila: ${data.main.temp} °C | Pilvisyys: ${data.clouds.all}% | Ilmankosteus: ${data.main.humidity}%`;
        }
    };
    tieto.send();
};