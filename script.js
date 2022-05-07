// Завдання 1
let elem1 = document.getElementById('third');
elem1.onclick = function (){
    if(this.style.backgroundColor == "rgb(0, 0, 255)"){
        this.style.backgroundColor = "#FFFF00"; //yellow
        this.style.color = "#000000";
    }
    else{
        this.style.backgroundColor = "#0000FF"; //blue
        this.style.color = "#FFFFFF";
        console.log(this.style.backgroundColor);
    }
};
let elem2 = document.querySelector("#fourth");
elem2.onclick = function () {
    if(this.style.backgroundColor == "rgb(0, 0, 255)"){
        this.style.backgroundColor = "#FFFF00"; //yellow
        this.style.color = "#000000";
    }
    else{
        this.style.backgroundColor = "#0000FF"; //blue
        this.style.color = "#FFFFFF";
        console.log(this.style.backgroundColor);
    }
};
// Завдання 2
let photo = document.getElementById('_image');
_add.onclick = function (){
    const block_of_photo = document.querySelector(".block_photo");
    const photoPLUS = document.createElement("img");
    let link = prompt("Insert image link:");
    if(link != null){
        photoPLUS.src = link;
    }
    const enter = document.createElement("br");
    block_of_photo.append(photoPLUS);
    block_of_photo.append(enter);
    console.log(document.body);
}
_increase.onclick = function (){
    let size = getComputedStyle(photo);
    let sizeH = parseInt(size.height);
    console.log(sizeH);
    sizeH += 50;
    photo.style.height = sizeH + "px";
}
_reduce.onclick = function (){
    let size = getComputedStyle(photo);
    let sizeH = parseInt(size.height);
    sizeH -= 50;
    photo.style.height = sizeH + "px";
}
_remove.onclick = function (){
    let remove_DIV = document.querySelector("div.block_photo");
    let remove_EL = document.querySelector("div.block_photo img");
    remove_DIV.remove(remove_EL);
}