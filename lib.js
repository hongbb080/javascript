function over2(obj) {
    obj.src = "./images/peng2.jpg";
}

function out2(obj) {
    obj.src = "./images/peng1.jpg";
}

//var img4 = document.getElementById("img4")
//img4.addEventListener("mouseover", function() {
//    this.src = "./images/peng2.jpg"
//});
//img4.addEventListener("mouseout", function() {
//    this.src = "./images/peng1.jpg"
//});

var img4 = document.getElementById("img4")
img4.addEventListener("mouseover", over3);

img4.addEventListener("mouseout", out3);

function over3() {
    img4.src = "./images/peng2.jpg";
}

function out3(obj) {
    img.src = "./images/peng1.jpg";
}