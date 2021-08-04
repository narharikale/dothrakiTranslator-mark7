var translate_btn = document.querySelector("#translate-btn");
var inputText = document.querySelector("#input-text");
var outputText = document.querySelector("#output-div");

var url = "https://api.funtranslations.com/translate/dothraki.json"

const constructURL = () => url + "?text=" + inputText.value ;

function errorHandler(error){
    console.log( "error occured",error);

}

function clickHandler(){
    
    fetch(constructURL())
        .then(response => response.json())
        .then(json => {
                         var translatedText = (json.contents.translated)
                         outputText.innerText = translatedText
                         console.log(translatedText) })
        .catch(errorHandler)


}
   

translate_btn.addEventListener("click",clickHandler)
