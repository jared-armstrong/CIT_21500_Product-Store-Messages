let products = [
    {
        id:0,
        name:"Apples",
        price:"2.99",
        image:"https://banner2.kisspng.com/20180310/jyw/kisspng-plum-tomato-apple-fuji-vector-two-apples-5aa49732abbf96.2950483615207360507035.jpg",
        color:"red"
    },
    {
        id:1,
        name:"Bananas",
        price:"2.50",
        image:"https://icon2.kisspng.com/20180125/cyq/kisspng-banana-powder-fruit-cavendish-banana-banana-5a6a705e555d06.3110857015169250223497.jpg",
        color:"gold"
    },
    {
        id:2,
        name:"oranges",
        price:"3.50",
        image: "https://icon2.kisspng.com/20180308/wlw/kisspng-south-africa-blood-orange-mandarin-orange-tangelo-south-africa-imports-of-oranges-5aa10d936cc6c7.6226563815205042114456.jpg",
        color:"orange"
    }
];


function popUpMenu(id) {
    let that = this;
    this.ele = document.createElement("div");
    this.imageEle = document.createElement("img");
    this.productName = document.createElement("p");
    this.productPrice = document.createElement("p");

    this.imageEle.setAttribute("src", products[id].image);
    this.productName.innerHTML = "Name: " + products[id].name;
    this.productPrice.innerHTML = "Price: $" + products[id].price;
    this.ele.classList.add("popUp");

    this.ele.append(this.imageEle);
    this.ele.append(this.productName);
    this.ele.append(this.productPrice);

    this.ele.addEventListener("click", function(){
        that.ele.style.display = "none";
    })

    document.body.appendChild(this.ele);

}

function fruitDisplay() {
    let that = this;
    this.fruitArray = [];
    this.ele = document.createElement("div");
    this.ele.classList.add("products");

    for (let i = 0; i < products.length; i++) {
        this.fruitArray.push(new productDisplay(i));

        this.fruitArray[i].ele.addEventListener("click", function () {
            let newPopUp = new popUpMenu(i);
        })
        this.ele.appendChild(this.fruitArray[i].ele);

    }
    document.body.appendChild(this.ele);
}

function productDisplay(id){
    let that = this;
    this.ele = document.createElement("div");
    this.productImage = document.createElement("img");
    this.name = document.createElement("p");
    this.price = document.createElement("p");

    this.productImage.setAttribute("src", products[id].image);
    this.ele.classList.add("product");
    this.ele.append(this.productImage);

    this.name.innerHTML = "Name: " + products[id].name;
    this.price.innerHTML = "Price: $" + products[id].price;

    this.ele.append(this.name);
    this.ele.append(this.price);

    this.ele.addEventListener("mouseover", function(){
        that.ele.style.borderColor = products[id].color;
    });
    this.ele.addEventListener("mouseout", function(){
        that.ele.style.borderColor = "black";
    });

}

let newFruit = new fruitDisplay();




