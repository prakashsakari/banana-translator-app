var txtInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var txtOutput = document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/minion.json";

function getTranslationUrl(text) {
    return serverUrl + "?" + "text=" + text;
}

function errorHandler(error) {
    console.log("error msg: " + error);
    alert("something went wrong with the server, try again after some time");
}

function clickHandler() {
    var inputText = txtInput.value;

    fetch(getTranslationUrl(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;

            txtOutput.innerText = translatedText;
        })
        .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);
