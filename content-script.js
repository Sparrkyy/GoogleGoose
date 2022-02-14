
const bodytag = document.getElementsByTagName("body")[0]
const daGoose = document.createElement("img")
daGoose.id = "daGoose"
let count = 0
let distance = -23
daGoose.src = chrome.runtime.getURL("images/0-removebg-preview.png");
daGoose.style.position = "absolute"
daGoose.style.bottom ="0"
daGoose.style.right = "-100px"
bodytag.appendChild(daGoose)
const myInterval = setInterval(()=>{
    const filename = "images/" + String(count) + "-removebg-preview.png"
    const pixeldistance = distance * 3
    daGoose.src = chrome.runtime.getURL(filename)
    daGoose.style.right = String(pixeldistance) + "px"
    count++
    distance++
    if (pixeldistance > bodytag.clientWidth){
        distance = -23
    }
    count = count % 10
},125)

