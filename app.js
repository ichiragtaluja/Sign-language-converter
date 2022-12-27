var buttonTranslate = document.querySelector("#button-translate");
//var languageAPI = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var languageAPI = "https://api.funtranslations.com/translate/dothraki.json"

function errorHandler(error) {
    console.log("Error");
    alert("Something went wrong")
}

function whenClicked() {
    var textInput = document.querySelector("#textarea")
    var textOutput = document.querySelector("#output")
    var newAPI = languageAPI + "?text=" + textInput.value;
    console.log(newAPI)
    fetch(newAPI)
        .then(response => response.json())
        .then(json => textOutput.innerText = (json.contents.translated))
        .catch(errorHandler)

}

buttonTranslate.addEventListener("click", whenClicked)