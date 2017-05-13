/*
## Requirements

1. Create two JSON files. One should contain an array of carnivores, and the other should contain an array of herbivores.
2. Create an IIFE with the name of `Predator`.
3. Predator should have two private arrays to store carnivores and herbivores.
4. Predator should expose two public functions to load each JSON file and store the array of animals in the appropriate private array. Each of those functions should accept one argument that will store the callback function to be executed.
5. In the `iife-xhr.js` file, define two functions that will be executed after each type of animal is loaded then display those animals in your DOM. (Example given below)
6. In the Predator IIFE, invoke the callback function, passed in from `iife-xhr.js`, after each file is loaded.
*/
console.log("Predator.js loaded");
//Global object of Predator to hold IIFE
var Predator = (function () {
    //Private variables to hold arrays
    var pvtCarnivores = [];
    var pvtHerbivores = [];
    return {
        //Method loadCarnivores performs XMLHttpRequest data load, parses, and stores to private array
        loadCarnivores: function(callbackToInvoke){
            console.log("loadCarivores running");
            var dataRequest = new XMLHttpRequest();
            dataRequest.open("GET", "carnivores.json", true);
            dataRequest.onload = (function(){
              if(dataRequest.readyState === 4){
                if(dataRequest.status === 200){
                  console.log("dataRequest.responseText", dataRequest.responseText);
                  pvtCarnivores = JSON.parse(dataRequest.responseText);
                  console.log("pvtCarnivores after load: ", pvtCarnivores);
                  callbackToInvoke();
                }else {
                  console.error(dataRequest.statusText);
                }
              }
            });
            dataRequest.send();
        },
        //Method getCarnivores exposes private array as method on Predator
        getCarnivores: function(){
            return pvtCarnivores;
        },


        //Method loadCarnivores performs XMLHttpRequest data load, parses, and stores to private array
        loadHerbivores: function(callbackToInvoke){
            console.log("loadCarivores running");
            var dataRequest = new XMLHttpRequest();
            dataRequest.open("GET", "herbivores.json", true);
            dataRequest.onload = (function(){
              if(dataRequest.readyState === 4){
                if(dataRequest.status === 200){
                  console.log("dataRequest.responseText", dataRequest.responseText);
                  pvtHerbivores = JSON.parse(dataRequest.responseText);
                  console.log("pvtHerbivores after load: ", pvtHerbivores);
                  callbackToInvoke();
                }else {
                  console.error(dataRequest.statusText);
                }
              }
            });
            dataRequest.send();
        },
        //Method getCarnivores exposes private array as method on Predator
        getHerbivores: function(){
            return pvtHerbivores;
        }
    };
})();



//EXERCISE COMPLETE








/*Starter Code

var Predator = (function () {
  var carnivores = [];

  return {
    loadCarnivores: function (callbackToInvoke) {
      var loader = new XMLHttpRequest();

      loader.addEventListener("load", function () {
        // Set the value of the private array
        carnivores = JSON.parse(this.responseText);

        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the
        // carnivore array as an argument.

      });
    }
  }
})();

*/
