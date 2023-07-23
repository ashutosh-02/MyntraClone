var productData = [{
    image_url: "imgm/product1.jpg",
    brand: "U.S. Polo Assn.",
    para: "Men Colourblocked Sneakers",
    price: "Rs. 1799",
    rs: 1799,
    strikedoffprice: "Rs 2999",
    offer: "(40% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Casual Shoes",

}, {
    image_url: "imgm/product2.jpg",
    brand: "U.S. Polo Assn.",
    para: "Men Printed Sliders",
    price: "Rs. 674",
    rs: 674,
    strikedoffprice: "Rs 1499",
    offer: "(55% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Slippers",
}, {
    image_url: "imgm/product3.jpg",
    brand: "U.S. Polo Assn.",
    para: "Printed Polo Collar Pure Cotton T-Shirt",
    price: "Rs. 1259",
    rs: 1259,
    strikedoffprice: "Rs 2099",
    offer: "(40% OFF)",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Tshirts",
}, {
    image_url: "imgm/product4.jpg",
    brand: "U.S. Polo Assn.",
    para: "Men Sneakers",
    price: "Rs. 1949",
    rs: 1949,
    strikedoffprice: "Rs 2999 ",
    offer: "(35% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Casual Shoes",
}, {
    image_url: "imgm/product5.jpg",
    brand: "U.S. Polo Assn.",
    para: "Men Printed Thong Flip-Flops ",
    price: "Rs. 599 ",
    rs: 599,
    strikedoffprice: "Rs 999 ",
    offer: "(40% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Flip Flops",
}, {
    image_url: "imgm/product6.jpg",
    brand: "Roadster",
    para: "Men Colourblocked Sneakers ",
    price: "Rs. 1649 ",
    rs: 1649,
    strikedoffprice: "Rs 2999 ",
    offer: "(45% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Casual Shoes",
}, {
    image_url: "imgm/product7.jpg",
    brand: "Roadster",
    para: "Men Colourblocked Sneakers ",
    price: "Rs. 1799 ",
    rs: 1799,
    strikedoffprice: "Rs 2999 ",
    offer: "(40% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Casual Shoes",
}, {
    image_url: "imgm/product8.jpg",
    brand: "Roadster",
    para: "Men Colourblocked Sneakers ",
    price: "Rs. 1799 ",
    rs: 1799,
    strikedoffprice: "Rs 2999 ",
    offer: "(40% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Casual Shoes",
}, {
    image_url: "imgm/product9.jpg",
    brand: "Roadster",
    para: "Men LEBRON 2.0 Walking Shoes ",
    price: "Rs. 1999 ",
    rs: 1999,
    strikedoffprice: "Rs 3999 ",
    offer: "(50% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Casual Shoes",
}, {
    image_url: "imgm/product10.jpg",
    brand: "KLOTTHE",
    para: "Men AARON 2.0 Driving Shoes ",
    price: "Rs. 1799 ",
    rs: 1799,
    strikedoffprice: "Rs 2999 ",
    offer: "(40% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Casual Shoes",
}, {
    image_url: "imgm/product11.jpg",
    brand: "KLOTTHE",
    para: "Men Solid CARLIN Sneakers ",
    price: "Rs. 1559 ",
    rs: 1559,
    strikedoffprice: "Rs 2599 ",
    offer: "(40% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Casual Shoes",
}, {
    image_url: "imgm/product12.jpg",
    brand: "Mast & Harbour",
    para: "Men Solid Slip-On Sneakers ",
    price: "Rs. 1559 ",
    rs: 1559,
    strikedoffprice: "Rs 2599 ",
    offer: "(40% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Casual Shoes",
}, {
    image_url: "imgm/product13.jpg",
    brand: "Mast & Harbour",
    para: "Men Brand Logo Print Sliders ",
    price: "Rs. 824 ",
    rs: 824,
    strikedoffprice: "Rs 1499 ",
    offer: "(45% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Slippers",
}, {
    image_url: "imgm/product14.jpg",
    brand: "Mast & Harbour",
    para: "Men LEBRON 2.0 Walking Shoes ",
    price: "Rs. 2399 ",
    rs: 2399,
    strikedoffprice: "Rs 3999 ",
    offer: "(40% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Casual Shoes",
}, {
    image_url: "imgm/product15.jpg",
    brand: "PUMA",
    para: "Men Slip-On Sneakers ",
    price: "Rs. 1999 ",
    rs: 1999,
    strikedoffprice: "Rs 3999 ",
    offer: "(50% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Casual Shoes",
}, {
    image_url: "imgm/product16.jpg",
    brand: "PUMA",
    para: "Men Printed Thong Flip-Flops ",
    price: "Rs. 999 ",
    rs: 999,
    strikedoffprice: "Rs 1999 ",
    offer: "(50% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Flip Flops",
}, ];


var wishListData = JSON.parse(localStorage.getItem("wishListObj")) || []

var bagData = JSON.parse(localStorage.getItem("BagListObj")) || []

window.addEventListener('load', function() {
    displayPage(productData)
})

document.getElementById('nameSort').addEventListener('change', sortNames);

function sortNames() {
    var selected = document.getElementById('nameSort').value;
    if (selected == 'asc') {
        productData.sort(function(a, b) {
            if (a.brand > b.brand) return 1
            if (a.brand < b.brand) return -1
            return 0;
        })

        displayPage(productData);
    } else {
        productData.sort(function(a, b) {
            if (a.brand > b.brand) return -1
            if (a.brand < b.brand) return 1
            return 0
        })

        displayPage(productData)
    }
}

document.getElementById('priceSort').addEventListener('change', sortPrice);

function sortPrice() {
    var selected = document.getElementById('priceSort').value;
    if (selected == 'lth') {
        productData.sort(function(a, b) {
            return a.rs - b.rs;
        })
        displayPage(productData);
    } else {
        productData.sort(function(a, b) {
            return b.rs - a.rs;
        })
        displayPage(productData)
    }
}

document.getElementById('brandFilter').addEventListener('change', filterBrand);

function filterBrand() {
    var selected = document.getElementById('brandFilter').value
    var newArray = productData.filter(function(element) {
        if (element.brand == selected) {
            return element;
        }
    })
    displayPage(newArray);
}


function displayPage(productData) {

    document.getElementById("container").innerHTML = "";

    productData.map(function(elem) {
        var box = document.createElement("div")
        box.style.cursor = "pointer"

        var img = document.createElement("img")
        img.src = elem.image_url

        var contentBox = document.createElement('div');
        contentBox.setAttribute('class', 'contentBox')

        var brand = document.createElement("h4")
        brand.textContent = elem.brand

        var productname = document.createElement("p")
        productname.textContent = elem.para


        var mix = document.createElement("div")
        mix.setAttribute("class", "mixbox")


        var price = document.createElement("p")
        price.textContent = elem.price

        var strprice = document.createElement("p")
        strprice.textContent = elem.strikedoffprice
        strprice.setAttribute("class", "strikep")


        var offer = document.createElement("p")
        offer.textContent = elem.offer
        offer.setAttribute("class", "offerp")

        mix.append(price, strprice, offer)

        

        var atw = document.createElement("p")
        atw.setAttribute("class", "wishListp")
        atw.textContent = elem.atw;
        atw.style.cursor = "pointer"

        atw.addEventListener("click", function() {
            addToWishlist(elem)
            atw.style.color = "green"
            atw.innerText = "ADDED TO WISHLIST"
        })


      
        var atc = document.createElement("p")
        atc.setAttribute("class", "addToBagp")
        atc.textContent = elem.atc;
        atc.style.cursor = "pointer"


        atc.addEventListener("click", function() {
            addToBag(elem)
            atc.innerText = "ADDED TO BAG"
        })

        contentBox.append(brand, productname, mix, atw, atc)

        box.append(img, contentBox)

        document.querySelector("#container").append(box);



    });

}



function addToWishlist(element) {
    // console.log(element)
    wishListData.push(element)
    localStorage.setItem("wishListObj", JSON.stringify(wishListData))
}

function addToBag(element) {
    // console.log(element)
    bagData.push(element)
    localStorage.setItem("BagListObj", JSON.stringify(bagData))
}

document.getElementById('landingPage').addEventListener('click', function() {
window.location.href = "../Landingpage/index.html"
}) 