for (var i = 1; i < 101; i++) {

    console.log(i)

    

    if((i % 3 == 0) && (i % 5 != 0)) {
        document.getElementById("contenitore").innerHTML += `<div class="elemento"><p>fizz</p></div>`;
    } else if((i % 5 == 0) && (i % 3 != 0)) {
        document.getElementById("contenitore").innerHTML += `<div class="elemento"><p>buzz</p></div>`;
    } else if ((i % 3 == 0) && (i % 5 == 0)) {
        document.getElementById("contenitore").innerHTML += `<div class="elemento"><p>fizzBuzz</p></div>`;
    } else {
        document.getElementById("contenitore").innerHTML += `<div class="elemento"><p>${i}</p></div>`;
    }

}


