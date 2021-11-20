// document.getElementById("count-el").innerText = 5

// let count = 6

// console.log(count)
let count  = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
console.log(saveEl)



function increment () {
    // console.log("clicked")
    // count = count + 1
    count += 1
     countEl.innerText = count 
    //  or countEl.textContent = count
}

function save () {
    let countStr = count + " - "
    saveEl.innerText += countStr
    //  or saveEl.textContent = countStr
    countEl.textContent = 0
    count = 0
}
