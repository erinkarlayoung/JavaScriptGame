// var vowels= ["A","E","I","O","U"];
// var consonants= ["B","C","D","F","G","H","J","K","L","M","N","P","Q","R","S","T","V","W","X","Y","Z"];

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    var elRandomLetters = document.getElementById("randomLetters")
    var elTimer = document.getElementById("timer")


    function jumbleLetters(){
      elRandomLetters.innerHTML ="";
      var vowels= ["A","E","I","O","U"];
      var consonants= ["B","C","D","F","G","H","J","K","L","M","N","P","Q","R","S","T","V","W","X","Y","Z"];
      var elSecond

      for(let i=0; i<2 ; i++){
        let [vowel] = vowels.splice(Math.floor(Math.random()*vowels.length),1);
        elRandomLetters.innerHTML += `<span>${vowel}</span>`;

      }

      for(let i=0; i<7 ; i++){

        let [consonant] = consonants.splice(Math.floor(Math.random()*consonants.length),1);
        elRandomLetters.innerHTML += `<span>${consonant}</span>`;
      }
      var x = 60;
      if (x > 0) {
        var interval = setInterval(function(){
          elTimer.innerText = x;
          x--;
          console.log(x)
          if (x === 0) {
            console.log("Game Over!")
            clearInterval(interval);
          }
        }, 1000);
      }
      
      
    }
    document.getElementById("start").addEventListener("click", jumbleLetters)




    document.getElementById("word").addEventListener("submit", function(event){
      event.preventDefault();

      console.log(elRandomLetters.textContent, event.target.word.value)
      event.target.word.value = ''

    })


});
