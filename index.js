let saveEl = document.getElementById("save")
let countEl = document.getElementById("count")
let parag = document.getElementById("parag")
let count = 0

function increment(){
    count++
    countEl.innerText = count
    console.log("Incremented", count)
}

function save(){
    let saveCount = count + " - "
    parag.textContent += saveCount
    count = 0
    countEl.innerText = count

}

function updateTime() {
    let now = new Date();
    document.getElementById("current-time").textContent = now.toLocaleTimeString();
  }

  updateTime();
  setInterval(updateTime, 1000); 