
// <----- OBJECT DATAS -----> //
var dealsArr = [{
    img: "img/deal1.jpg"
},
{
    img: "img/deal2.jpg"
},
{
    img: "img/deal4.jpg"
},
{
    img: "img/deal7.jpg"
},
{
    img: "img/deal5.jpg"
},

{
    img: "img/deal3.jpg"
},
{
    img: "img/deal6.jpg"
},
];

dealsArr.map(function (el) {

    var box = document.createElement("div");
    var img = document.createElement("img")
    img.setAttribute("src", el.img)

    box.append(img);
    document.querySelector("#deals").append(box);
});

var bestArr = [{
    img: "imgdeal/bestarr1.jpg"
},
{
    img: "imgdeal/bestarr2.jpg"
},
{
    img: "imgdeal/bestarr4.jpg"
},
{
    img: "imgdeal/bestarr5.jpg"
},
{
    img: "imgdeal/bestarr3.jpg"
},
{
    img: "imgdeal/bestarr6.jpg"
},
{
    img: "imgdeal/bestarr8.jpg"
},
{
    img: "imgdeal/bestarr7.jpg"
},
{
    img: "imgdeal/bestarr9.jpg"
},
{
    img: "imgdeal/bestarr11.jpg"
},
{
    img: "imgdeal/bestarr10.jpg"
},
{
    img: "imgdeal/bestarr12.jpg"
},
{
    img: "imgdeal/bestarr14.jpg"
},
{
    img: "imgdeal/bestarr13.jpg"
},
{
    img: "imgdeal/bestarr15.jpg"
},
{
    img: "imgdeal/bestarr16.jpg"
},
];

bestArr.map(function (el) {

    var box = document.createElement("div");
    var img = document.createElement("img")
    img.setAttribute("src", el.img)

    box.append(img);
    document.querySelector("#best").append(box);
});


var categoriesArr = [{
    img: "imgdeal/catarr1.jpg"
},
{
    img: "imgdeal/catarr2.jpg"
},
{
    img: "imgdeal/catarr3.jpg"
},
{
    img: "imgdeal/catarr4.jpg"
},
{
    img: "imgdeal/catarr5.jpg"
},
{
    img: "imgdeal/catarr6.jpg"
},
{
    img: "imgdeal/catarr7.jpg"
},
{
    img: "imgdeal/catarr8.jpg"
},
{
    img: "imgdeal/catarr9.jpg"
},
{
    img: "imgdeal/catarr10.jpg"
},
{
    img: "imgdeal/catarr11.jpg"
},
{
    img: "imgdeal/catarr12.jpg"
},
{
    img: "imgdeal/catarr13.jpg"
},
{
    img: "imgdeal/catarr14.jpg"
},
{
    img: "imgdeal/catarr15.jpg"
},
{
    img: "imgdeal/catarr4.jpg"
},
];

categoriesArr.map(function (el) {

    var box = document.createElement("div");
    var img = document.createElement("img")
    img.setAttribute("src", el.img)

    box.append(img);
    document.querySelector("#categories").append(box);
});

var dealsTopArr = [{
    img: "imgdeal/dealtop1.jpg"
},
{
    img: "imgdeal/dealtop2.jpg"
},
{
    img: "imgdeal/dealtop3.jpg"
},
{
    img: "imgdeal/dealtop4.jpg"
},
{
    img: "imgdeal/dealtop5.jpg"
},
{
    img: "imgdeal/dealtop6.jpg"
},
{
    img: "imgdeal/dealtop7.jpg"
},
{
    img: "imgdeal/dealtop8.jpg"
},
{
    img: "imgdeal/dealtop9.jpg"
},
{
    img: "imgdeal/dealtop10.jpg"
},
{
    img: "imgdeal/dealtop11.jpg"
},
{
    img: "imgdeal/dealtop12.jpg"
},
{
    img: "imgdeal/dealtop3.jpg"
},
{
    img: "imgdeal/dealtop8.jpg"
},    
{
    img: "imgdeal/dealtop5.jpg"
},
{
    img: "imgdeal/dealtop10.jpg"
},
];

dealsTopArr.map(function (el) {

    var box = document.createElement("div");
    var img = document.createElement("img")
    img.setAttribute("src", el.img)

    box.append(img);
    document.querySelector("#dealsTop").append(box);
});

var coloursArr = [{
    img: "imgdeal/color1.jpg"
},
{
    img: "imgdeal/color2.jpg"
},
{
    img: "imgdeal/color3.jpg"
},
{
    img: "imgdeal/color4.jpg"
},
{
    img: "imgdeal/color5.jpg"
},
{
    img: "imgdeal/color6.jpg"
},
{
    img: "imgdeal/color7.jpg"
},
{
    img: "imgdeal/color8.jpg"
},

];

coloursArr.map(function (el) {

    var box = document.createElement("div");
    var img = document.createElement("img")
    img.setAttribute("src", el.img)

    box.append(img);
    document.querySelector("#colours").append(box);
});

var topInfluencersArr = [{
    img: "imgdeal/infu1.jpg"
},
{
    img: "imgdeal/infu2.jpg"
},
{
    img: "imgdeal/infu3.jpg"
},
{
    img: "imgdeal/infu4.jpg"
},
{
    img: "imgdeal/infu5.jpg"
},
{
    img: "imgdeal/infu6.jpg"
},
];

topInfluencersArr.map(function (el) {

    var box = document.createElement("div");
    var img = document.createElement("img")
    img.setAttribute("src", el.img)

    box.append(img);
    document.querySelector("#topInfluencers").append(box);
});

var budgetArr = [{
    img: "imgdeal/bug1.jpg"
},
{
    img: "imgdeal/bug2.jpg"
},
{
    img: "imgdeal/bug3.jpg"
},
{
    img: "imgdeal/bug4.jpg"
},
{
    img: "imgdeal/bug5.jpg"
},
{
    img: "imgdeal/bug6.jpg"
},
{
    img: "imgdeal/bug7.jpg"
},
{
    img: "imgdeal/bug8.jpg"
},
];

budgetArr.map(function (el) {

    var box = document.createElement("div");
    var img = document.createElement("img")
    img.setAttribute("src", el.img)

    box.append(img);
    document.querySelector("#budget").append(box);
});


//LANDING PAGE SCRIPT
document.getElementById('landingPage').addEventListener('click', function(){
    window.location.href = "index.html"
})
