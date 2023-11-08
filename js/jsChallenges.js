function challenge1(checkboxElement){
console.log("In challenge 1")
if (checkboxElement.checked){
    document.querySelector("#emailDiv").style.display = "block"
}
else{
    document.querySelector("#emailDiv").style.display = "none"
}
}

function challenge2(checkboxElement){
    console.log("In Challenge 2")
    let bill = document.querySelector("#bill")
    console.log("The value in the bill is   " + bill.value)
    let home = document.querySelector("#home")
    console.log("The value in home is   " + home.value)
    

    if (checkboxElement.checked == true){
        home.value = bill.value
        home.disabled = true
    }

    else{
        home.value = ""
        home.disabled == false
    }
}


function update(checkboxElement){
    console.log("In Challenge 5")
    console.log(imageElement.src)
    console.log(imageElement.alt)


    displayImage = document.querySelector("#display")
    displayImage.innerHTML = imageElement.alt
    displayImage.style.backgroundImage = "url(" + imageElement.src+ ")"
    
}

function reset(){

}