console.log("iife-xhr loaded");
//Function that is passed as callback to Predator.loadCarnivores() which displays array on DOM
function showCarnivores () {
    console.log("showCarnivores running");
    document.getElementById("carnivores").innerHTML += `The Carnivores are: <br>`;
    for(var i = 0; i < Predator.getCarnivores().length; i++){
        document.getElementById("carnivores").innerHTML += `${i+1}: ${Predator.getCarnivores()[i]}<br>`;
    }
}


//Function that is passed as callback to Predator.loadHerbivores() which displays array on DOM
function showHerbivores () {
    console.log("showHerbivores running");
    document.getElementById("herbivores").innerHTML += `The Herbivores are: <br>`;
    for(var j = 0; j < Predator.getHerbivores().length; j++){
        document.getElementById("herbivores").innerHTML += `${j+1}: ${Predator.getHerbivores()[j]}<br>`;
    }
}

//Initial execution of entire sequence happens here:
Predator.loadCarnivores(showCarnivores);
Predator.loadHerbivores(showHerbivores);

