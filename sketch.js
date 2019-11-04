let capture;
let bg;
let temperature = 0;
let weather = "";
let json;
let newscount=0;
var url = "https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=Mz5EYmmoVke1VRLkQGgdNbSRUfvZjwa5";
let q_data;

// Mouseclick offset

function preload() {
// The URL for the JSON data (replace "imperial" with "metric" for celsius)
let url = "https://api.openweathermap.org/data/2.5/weather?q=lubbock&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141";

json = loadJSON(url);

}

function setup() {
createCanvas(1000, 850);
capture = createCapture(VIDEO);
capture.size(900, 600);
capture.hide();
bg = loadImage('bathroom2.jpg');
temperature = json.main.temp;
weather = json.weather[0].description;
  
    // code to get the news data
  loadJSON(url, gotData); 
  nextnews = createButton('Next');
  nextnews.position(750,500);
  nextnews.mousePressed(changeText)


}
function changeText(){
    let i = newscount;
    let div = createElement('div');
    div.id('articleHolder'+i);
    div.class('article')
  var articles = q_data;
  console.log(newscount);
    // let time = createElement('h5',articles[i].updated_date);
    // time.parent('articleHolder'+i);
    let title = createElement('textarea', articles[i].title+"  Abstract:-  "+articles[i].abstract );
    title.attribute('readonly','');
    title.attribute('rows','11');
    title.attribute('cols','22');

    title.position(850,350)
    // title.parent('articleHolder'+i);
    // //title.color(0);
    // //title.background(255)
    // 
    // let abstract = createP(articles[i].abstract);
    // abstract.parent('articleHolder'+i);
  newscount++;
}


function draw() {

let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);


function next() {
currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
currentMonth = (currentMonth + 1) % 12;
showCalendar(currentMonth, currentYear);
}

function previous() {
currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
showCalendar(currentMonth, currentYear);
}

function jump() {
currentYear = parseInt(selectYear.value);
currentMonth = parseInt(selectMonth.value);
showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {

let firstDay = (new Date(year, month)).getDay();
let daysInMonth = 32 - new Date(year, month, 32).getDate();

let tbl = document.getElementById("calendar-body"); // body of the calendar

// clearing all previous cells
tbl.innerHTML = "";

// filing data about month and in the page via DOM.
monthAndYear.innerHTML = months[month] + " " + year;
selectYear.value = year;
selectMonth.value = month;

// creating all cells
let date = 1;
for (let i = 0; i < 6; i++) {
// creates a table row
let row = document.createElement("tr");

//creating individual cells, filing them up with data.
for (let j = 0; j < 7; j++) {
if (i === 0 && j < firstDay) {
let cell = document.createElement("td");
let cellText = document.createTextNode("");
cell.appendChild(cellText);
row.appendChild(cell);
} else if (date > daysInMonth) {
break;
} else {
let cell = document.createElement("td");
let cellText = document.createTextNode(date);
if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
cell.classList.add("bg-info");
} // color today's date
cell.appendChild(cellText);
row.appendChild(cell);
date++;
}


}

tbl.appendChild(row); // appending each row into calendar body.
}
}

background(bg);
var d = day();
var h = hour();
var m = minute();
var s = second();


image(bg, 1000, 700);

button1 = createImg('facebook.png');
button1.position(100, 850);
//button.mousePressed(webpage());
button = createImg('messanger.jpg');
button.position(100, 910);
button2 = createImg('youtube.png');
button2.position(170, 850);
button3 = createImg('whatsapp.jpg');
button3.position(170 , 910);

 image(capture, 90, 100, 750, 650);

fill(0, 0, 0);

// Display all the stuff we want to display
text("City: Lubbock", 100, 130);
text("Current temperature: " + temperature, 100, 160);
text("Forecast: " + weather, 100, 190);

fill(0, 0, 0);
textSize(25);
text("" + h, width / 1.5, height / 5.5);
text(":" + m, width / 1.45, height / 5.5);
text(":" + s, width / 1.38, height / 5.5);
textSize(25);

text(month() + "/" + day() + "/" + year(), width / 1.5, height / 7);

// filter(INVERT);

// Is mouse over object


}

if (weather) {
var temp = weather.list[0].main.temp;
var humidity = weather.list[0].main.humidity;
var pressure = weather.list[0].main.pressure;
var wind = weather.list[0].wind.speed;
comment = weather.list[0].weather.description;


push();

fill(255, 162, 10);
var tempbar = rect(40, 50, temp * 15, 10, 5);
pop();

push();
fill(69, 251, 0);
var humiditybar = rect(40, 100, humidity * 2, 10, 5);
pop();

push();
fill(0, 219, 216);
var pressurebar = rect(40, 150, pressure / 5, 10, 5);
pop();

push();
fill(248, 231, 28);
var windbar = rect(40, 200, wind * 20, 10, 5);
pop();


headtext();


}


function headtext() {
textSize(13);
fill(255);
text('Temperature', 40, 40);
text('Humidity', 40, 90);
text('Pressure', 40, 140);
text('WindSpeed', 40, 190);

}

function description() {
textSize(10);
fill(255);
text('temp', 200, 40);
text('Humidity', 40, 90);
text('Pressure', 40, 140);
}


function mouseClicked() {
webpage();
}


function webpage() {
if (mouseX > button1.x && mouseX < (button1.x + button1.width) &&
mouseY > button1.y && mouseY < (button1.y + button1.height)) {

window.open("https://www.facebook.com/");
console.log("here in the webpage");
} else if (mouseX > button.x && mouseX < (button.x + button.width) &&
mouseY > button.y && mouseY < (button.y + button.height)) {

window.open("https://www.messenger.com/");
console.log("here in the webpage");

} else if (mouseX > button2.x && mouseX < (button2.x + button2.width) &&
mouseY > button2.y && mouseY < (button2.y + button2.height)) {

window.open("https://www.youtube.com/");
console.log("here in the webpage");
} else if (mouseX > button3.x && mouseX < (button3.x + button3.width) &&
mouseY > button3.y && mouseY < (button3.y + button3.height)) {

window.open("https://www.whatsapp.com/");
console.log("here in the webpage");
} 


console.log(mouseX, mouseY)


}
  function gotData(data) {
  console.log(data)
  var articles = data.results; // data json result
  q_data =data.results;
  let i = newscount;
    let div = createElement('div');
    div.id('articleHolder'+i);
    div.class('article')
    // let time = createElement('h5',articles[i].updated_date);
    // time.parent('articleHolder'+i);
    let title = createElement('textarea', articles[i].title+"  Abstract:-  "+articles[i].abstract );
    title.attribute('readonly','');
    title.attribute('rows','11');
    title.attribute('cols','22');

    title.position(600,530)
    // title.parent('articleHolder'+i);
    // //title.color(0);
    // //title.background(255)
    // 
    // let abstract = createP(articles[i].abstract);
    // abstract.parent('articleHolder'+i);
  newscount++;
  }
