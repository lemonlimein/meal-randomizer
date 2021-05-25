function breakfastRun() {
    chrome.runtime.sendMessage({ 'message': 'start', "link": "https://www.seriouseats.com/breakfast-brunch-recipes-5117905" });
}

function mainsRun(){
    chrome.runtime.sendMessage({ 'message': 'start', "link": "https://www.seriouseats.com/main-recipes-5117839" });
}

function snacksRun(){
    chrome.runtime.sendMessage({ 'message': 'start', "link": "https://www.seriouseats.com/snack-appetizer-recipes-5117792" });
}

function saladsRun(){
    chrome.runtime.sendMessage({ 'message': 'start', "link": "https://www.seriouseats.com/salad-recipes-5117809" });
}

function sidesRun(){
    chrome.runtime.sendMessage({ 'message': 'start', "link": "https://www.seriouseats.com/side-recipes-5117798" });
}

function dessertsRun(){
    chrome.runtime.sendMessage({ 'message': 'start', "link": "https://www.seriouseats.com/dessert-recipes-5117878" });
}

function drinksRun(){
    chrome.runtime.sendMessage({ 'message': 'start', "link": "https://www.seriouseats.com/drink-recipes-5117861" });
}

function condimentsRun(){
    chrome.runtime.sendMessage({ 'message': 'start', "link": "https://www.seriouseats.com/condiment-sauce-recipes-5117888" });
}


document.addEventListener("DOMContentLoaded", function () {
    // document.getElementById("Breakfast").addEventListener("click", redirect);
    document.getElementById("breakfast").addEventListener("click", breakfastRun);
    document.getElementById("mains").addEventListener("click", mainsRun);
    document.getElementById("snacks").addEventListener("click", snacksRun);
    document.getElementById("salads").addEventListener("click", saladsRun);
    document.getElementById("sides").addEventListener("click", sidesRun);
    document.getElementById("desserts").addEventListener("click", dessertsRun);
    document.getElementById("drinks").addEventListener("click", drinksRun);
    document.getElementById("condiments").addEventListener("click", condimentsRun);
});