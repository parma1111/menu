// Add the coffee to local storage with key "coffee"

async function getData() {
    try {
        let response = await fetch(
            `https://masai-mock-api.herokuapp.com/coffee/menu`
        );
        let data = await response.json();
        console.log(data.menu.data)

        displaydata(data.menu.data);
    } catch (error) {
        console.log("Error", error);
    }
}

getData();


// countDiv.innerText=count.length;
function displaydata(data) {
    let store = JSON.parse(localStorage.getItem("coffee")) || [];
    // displaydata(store);
    var counterDiv = document.getElementById("coffee_count");
    counterDiv.innerText = store.length;
    let itemsdiv = document.getElementById("menu");

    data.map(({ title, price, image }) => {
        let chotediv = document.createElement("div");
        let Itemname = document.createElement("h4");
        let Itemprice = document.createElement("h4");
        let Itemimage = document.createElement("img");
        let cartbutton = document.createElement("button");

        Itemname.innerText = title;
        Itemprice.innerText = price;
        Itemimage.setAttribute("src", image);
        chotediv.setAttribute("id", "chotediv");
        cartbutton.innerText = "ADD To BUCKET";
        cartbutton.setAttribute("id", "add_to_bucket");

        let cartobj = {
            productimg: image,
            productname: title,
            productprice: price,
        };

        cartbutton.addEventListener("click", () => {
            addToCart(cartobj);


        });


        // arr.push(cartobj);

        chotediv.append(
            Itemimage,
            Itemname,
            Itemprice,
            cartbutton
        );

        itemsdiv.append(chotediv);
    });
}

let arr = JSON.parse(localStorage.getItem("coffee")) || [];

const addToCart = (data) => {

    arr.push(data);
    localStorage.setItem("coffee", JSON.stringify(arr));
    displaydata(data.data)

}
