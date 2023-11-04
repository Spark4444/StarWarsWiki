// Define global variables
let sections = document.querySelector(".sections");
let data = document.querySelector(".data");
let actualData = document.querySelector(".actualData");
let resTemp = "https://swapi.dev/api/";
let type = "Application/json";
let pageCount = 1;
let count = 0;
let realCount = -1;
let resultsNum = 0;
let currentData;
let result;
let names;

// Function to fetch data from SWAPI by a name and a key
const getRecources = async (name, key) => {
    // Display loading animation
    const loadingHTML = `<div class='loading'>Loading<img src='img/loading.gif' class='loading${key}' alt='loadingGif'></div>`;
    (key == 1 ? sections : data).innerHTML = loadingHTML;

    // Fetch data from SWAPI
    let res = await fetch(name,{ type });
    let recources = await res.json();

    // If key is 1, display available data
    if(key == 1){
        names = recources;
        sections.innerHTML = "";
        Object.keys(recources).forEach(recource => {
            sections.innerHTML += `<div onclick="displayAvailableData('${recource}')" class="info">${recource}</div><br><br>`;
        });
    } 
    // If key is 2, display the results
    else if(key == 2){
        result = recources.results;
        resultsNum = 0;
        data.innerHTML = "";
        Object.keys(recources.results).forEach((recource, index) => {
            resultsNum++;
            count++;
            realCount++;
            data.innerHTML += `<div class="dataInside" onclick="displayObjectData('${realCount}')">${count + ". " + (name == "https://swapi.dev/api/films/" ? recources.results[index].title : recources.results[index].name)}</div><br><br>`;
        });
        // Add navigation buttons
        if(resultsNum == 10 && name !== "https://swapi.dev/api/planets/?page=6"){
            data.innerHTML += `<div onclick="nextPage('${name}')" class="nextPage">Next page</div>`;
        }
        if(pageCount !== 1 && pageCount !== 2){
            data.innerHTML += `<div onclick="previousPage('${decrementLastCharacter(name)}')" class="previousPage">Previous Page</div>`;
        }
        else if(pageCount == 2){
            data.innerHTML += `<div onclick="previousPage('${removePageParameter(name)}')" class="previousPage">Previous Page</div>`;
        }
    }
}

// Fetch data from SWAPI
getRecources(resTemp, 1);

// Function to display available data
function displayAvailableData(recource){
    pageCount = 1;
    count = 0;
    realCount = -1;
    actualData.innerHTML = "";
    getRecources(names[recource], 2);
    currentData = names[recource];
}

// Function to navigate to the next page
function nextPage(recource){
    pageCount++;
    realCount = -1;
    if(pageCount == 2){
        recource = recource + "?page=" + pageCount;
    }
    else{
        recource = replaceLastChar(recource,pageCount.toString());
    }
    getRecources(recource, 2);
}

// Function to navigate to the previous page
function previousPage(recource){
    count -= 20;
    realCount = -1;
    if(pageCount !== 2 && pageCount !== 1){
        recource = replaceLastChar(recource,(pageCount - 1).toString());
    }
    pageCount--;
    getRecources(recource, 2);
}

// Function to display object data
function displayObjectData(clickNum){
    let currentDataUsed = result[clickNum];
    actualData.innerHTML = "";
    for (let key in currentDataUsed) {
        if (currentDataUsed.hasOwnProperty(key) && !["url", "created", "edited", "films", "release_date"].includes(key)) {
            let key_new = key.replace(/_/g, ' ');
            let value = typeof currentDataUsed[key] == "object" ? (currentDataUsed[key].length !== 0 ? getNumbersFromString(currentDataUsed[key].join("")) : "Unknown") : currentDataUsed[key];
            actualData.innerHTML += `<div>${key_new} : ${value}</div><br><br>`;
        }
    }
}