let myName = document.querySelector("#myName")
let userName = prompt("Adınızı Giriniz.")
myName.innerHTML = `${userName}`

let myClock = document.querySelector("#myClock")
let d = new Date().toLocaleString();
myClock.innerHTML= `${d}`
