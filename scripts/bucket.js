// On clicking remove button the item should be removed from DOM as well as localstorage.
let data = JSON.parse(localStorage.getItem("coffee"))
var bucket = document.getElementById("bucket")
var sum = data.length;
var price = 0
data.map(function (el, index) {
    prices = prices+el.price
    console.log(prices)

    var countdiv = document.getElementById("total_amount")
    countdiv.innerText = prices

    var div1 = document.createElement("div")
    let img = document.createElement("img")
    img.src = el.image;
    let price = document.createElement("p")
    price.innerText = el.price;
    let title = document.createElement("p")
    title.innerText = el.title;

    let add = document.createElement("button")
    add.innerText = "remove"
    add.setAttribute("id", "remove_coffee")
    add.addEventListener("click", function() {
        remove(el, index)
        console.log(el)
    })
    div1.append(img, title, price, add)
    bucket.append(div1)
})
function remove (el, index){
    window.location.reload();
    data.splice(index, 1)
    localStorage.setItem("coffee", JSON.stringify(data))
}

