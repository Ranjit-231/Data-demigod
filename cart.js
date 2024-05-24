gsap.from("#featured-product .product", {
    y: -200,
    duration: 0.6,
    stagger: 0.2,
    scale:0,

    scrollTrigger:{
        trigger:" #featured-product .product",
        scroller:"body",
       
  
        start:"top 700vw",
        
    }


});


gsap.from("#new-arivals .product", {
    y: -200,
    duration: 0.6,
    stagger: 0.2,
    scale:0,

    scrollTrigger:{
        trigger:" #new-arivals .product",
        scroller:"body",
       
  
        start:"top 700vw",
        
    }

});

let navcart = document.getElementById("navcart");
let cartpopup = document.getElementById("cartpopup");



navcart.addEventListener("click", function () {
    cartpopup.style.visibility = "visible";


});

let colse3 = document.getElementById("colse3");
close3.addEventListener("click", function () {
    cartpopup.style.visibility = "hidden";


});
let add0=  document.getElementsByClassName("adding");
let he = document.getElementById("he");

add0[0].addEventListener("click", function () {
   
    let div2 = document.createElement("div");
    rat.append(div2);
   
    div2.innerHTML = cart1[0];

   
});
let add1=  document.getElementsByClassName("adding");


add1[1].addEventListener("click", function () {
    let div2 = document.createElement("div");
    rat.append(div2);
    div2.innerHTML = cart1[1];


   
});

let add2=  document.getElementsByClassName("adding");


add2[2].addEventListener("click", function () {
    let div2 = document.createElement("div");
    rat.append(div2);
    div2.innerHTML = cart1[2];


   
});
let add3=  document.getElementsByClassName("adding");


add3[3].addEventListener("click", function () {
    let div2 = document.createElement("div");
    rat.append(div2);
    div2.innerHTML = cart1[3];


   
});
let add4=  document.getElementsByClassName("adding");


add4[4].addEventListener("click", function () {
    let div2 = document.createElement("div");
    rat.append(div2);
    div2.innerHTML = cart1[4];


   
});
let add5=  document.getElementsByClassName("adding");


add5[5].addEventListener("click", function () {
    let div2 = document.createElement("div");
    rat.append(div2);
    div2.innerHTML = cart1[5];


   
});
let add6=  document.getElementsByClassName("adding");


add1[6].addEventListener("click", function () {
    let div2 = document.createElement("div");
    rat.append(div2);
    div2.innerHTML = cart1[6];


   
});
let add7=  document.getElementsByClassName("adding");


add7[7].addEventListener("click", function () {
    let div2 = document.createElement("div");
    rat.append(div2);
    div2.innerHTML = cart1[7];


   
});






// add to cart section started
const cart1 = [`<div id="f1" class="product mb-[2vw] ">
<div class="img ">
<img class="w-[100%] " src="product/f1.jpg">
</div>
<div class="product-about sm:text-[1.5vw] text-[3vw]">
    <span>Gucci</span>
    <h5>Funky Shirts</h5>
</div>
<div class="totalprice sm:text-[1.5vw] text-[4vw]">
    $90
</div>
<div class="quantity">
    <span
        class="minus inline-block sm:w-[3vw] sm:h-[3vw] w-[6vw] h-[6vw] bg-[white] text-[#555] rounded-[50%] cursor-pointer sm:text-[2vw] text-[4vw]">
        < </span>
            <span class="sm:text-[1.5vw] text-[3vw] ">1</span>
            <span
                class="plus  inline-block sm:w-[3vw] w-[6vw] h-[6vw] sm:h-[3vw] bg-[white] text-[#555] rounded-[50%] cursor-pointer sm:text-[2vw] text-[4vw]">></span>
            <button type="button" id="remove"
                class=" bg-[red] sm:p-[0.6vw] p-[1vw] rounded-full sm:text-[1.5vw] text-[3vw] ml-[2vw]">Remove</button>
</div>

</div> `, `     <div class="product mb-[2vw] ">
<div class="img ">
    <img class="w-[100%] " src="product/f2.jpg">
</div>
<div class="product-about sm:text-[1.5vw] text-[3vw]">
    <span>Gucci</span>
    <h5>Funky Shirts</h5>
</div>
<div class="totalprice sm:text-[1.5vw] text-[4vw]">
    $90
</div>
<div class="quantity">
    <span
        class="minus inline-block sm:w-[3vw] sm:h-[3vw] w-[6vw] h-[6vw] bg-[white] text-[#555] rounded-[50%] cursor-pointer sm:text-[2vw] text-[4vw]">
        < </span>
            <span class="sm:text-[1.5vw] text-[3vw] ">1</span>
            <span
                class="plus  inline-block sm:w-[3vw] w-[6vw] h-[6vw] sm:h-[3vw] bg-[white] text-[#555] rounded-[50%] cursor-pointer sm:text-[2vw] text-[4vw]">></span>
            <button type="button"
                class="remove bg-[red] sm:p-[0.6vw] p-[1vw] rounded-full sm:text-[1.5vw] text-[3vw] ml-[2vw]">Remove</button>
</div>

</div>`,` <div class="product mb-[2vw] ">
<div class="img ">
    <img class="w-[100%] " src="product/f3.jpg">
</div>
<div class="product-about sm:text-[1.5vw] text-[3vw]">
    <span>Gucci</span>
    <h5>Funky Shirts</h5>
</div>
<div class="totalprice sm:text-[1.5vw] text-[4vw]">
    $99
</div>
<div class="quantity">
    <span
        class="minus inline-block sm:w-[3vw] sm:h-[3vw] w-[6vw] h-[6vw] bg-[white] text-[#555] rounded-[50%] cursor-pointer sm:text-[2vw] text-[4vw]">
        < </span>
            <span class="sm:text-[1.5vw] text-[3vw] ">1</span>
            <span
                class="plus  inline-block sm:w-[3vw] w-[6vw] h-[6vw] sm:h-[3vw] bg-[white] text-[#555] rounded-[50%] cursor-pointer sm:text-[2vw] text-[4vw]">></span>
            <button type="button"
                class="remove bg-[red] sm:p-[0.6vw] p-[1vw] rounded-full sm:text-[1.5vw] text-[3vw] ml-[2vw]">Remove</button>
</div>

</div>`,` <div class="product mb-[2vw] ">
<div class="img ">
    <img class="w-[100%] " src="product/f4.jpg">
</div>
<div class="product-about sm:text-[1.5vw] text-[3vw]">
    <span>Gucci</span>
    <h5>Funky Shirts</h5>
</div>
<div class="totalprice sm:text-[1.5vw] text-[4vw]">
    $96
</div>
<div class="quantity">
    <span
        class="minus inline-block sm:w-[3vw] sm:h-[3vw] w-[6vw] h-[6vw] bg-[white] text-[#555] rounded-[50%] cursor-pointer sm:text-[2vw] text-[4vw]">
        < </span>
            <span class="sm:text-[1.5vw] text-[3vw] ">1</span>
            <span
                class="plus  inline-block sm:w-[3vw] w-[6vw] h-[6vw] sm:h-[3vw] bg-[white] text-[#555] rounded-[50%] cursor-pointer sm:text-[2vw] text-[4vw]">></span>
            <button type="button"
                class="remove bg-[red] sm:p-[0.6vw] p-[1vw] rounded-full sm:text-[1.5vw] text-[3vw] ml-[2vw]">Remove</button>
</div>

</div>`,` <div class="product mb-[2vw] ">
<div class="img ">
    <img class="w-[100%] " src="product/f5.jpg">
</div>
<div class="product-about sm:text-[1.5vw] text-[3vw]">
    <span>Gucci</span>
    <h5>Funky Shirts</h5>
</div>
<div class="totalprice sm:text-[1.5vw] text-[4vw]">
    $80
</div>
<div class="quantity">
    <span
        class="minus inline-block sm:w-[3vw] sm:h-[3vw] w-[6vw] h-[6vw] bg-[white] text-[#555] rounded-[50%] cursor-pointer sm:text-[2vw] text-[4vw]">
        < </span>
            <span class="sm:text-[1.5vw] text-[3vw] ">1</span>
            <span
                class="plus  inline-block sm:w-[3vw] w-[6vw] h-[6vw] sm:h-[3vw] bg-[white] text-[#555] rounded-[50%] cursor-pointer sm:text-[2vw] text-[4vw]">></span>
            <button type="button"
                class="remove bg-[red] sm:p-[0.6vw] p-[1vw] rounded-full sm:text-[1.5vw] text-[3vw] ml-[2vw]">Remove</button>
</div>

</div>`,` <div class="product mb-[2vw] ">
<div class="img ">
    <img class="w-[100%] " src="product/f6.jpg">
</div>
<div class="product-about sm:text-[1.5vw] text-[3vw]">
    <span>Gucci</span>
    <h5>Funky Shirts</h5>
</div>
<div class="totalprice sm:text-[1.5vw] text-[4vw]">
    $90
</div>
<div class="quantity">
    <span
        class="minus inline-block sm:w-[3vw] sm:h-[3vw] w-[6vw] h-[6vw] bg-[white] text-[#555] rounded-[50%] cursor-pointer sm:text-[2vw] text-[4vw]">
        < </span>
            <span class="sm:text-[1.5vw] text-[3vw] ">1</span>
            <span
                class="plus  inline-block sm:w-[3vw] w-[6vw] h-[6vw] sm:h-[3vw] bg-[white] text-[#555] rounded-[50%] cursor-pointer sm:text-[2vw] text-[4vw]">></span>
            <button type="button"
                class="remove bg-[red] sm:p-[0.6vw] p-[1vw] rounded-full sm:text-[1.5vw] text-[3vw] ml-[2vw]">Remove</button>
</div>

</div>`,` <div class="product mb-[2vw] ">
<div class="img ">
    <img class="w-[100%] " src="product/f7.jpg">
</div>
<div class="product-about sm:text-[1.5vw] text-[3vw]">
    <span>Gucci</span>
    <h5>Funky Shirts</h5>
</div>
<div class="totalprice sm:text-[1.5vw] text-[4vw]">
    $90
</div>
<div class="quantity">
    <span
        class="minus inline-block sm:w-[3vw] sm:h-[3vw] w-[6vw] h-[6vw] bg-[white] text-[#555] rounded-[50%] cursor-pointer sm:text-[2vw] text-[4vw]">
        < </span>
            <span class="sm:text-[1.5vw] text-[3vw] ">1</span>
            <span
                class="plus  inline-block sm:w-[3vw] w-[6vw] h-[6vw] sm:h-[3vw] bg-[white] text-[#555] rounded-[50%] cursor-pointer sm:text-[2vw] text-[4vw]">></span>
            <button type="button"
                class="remove bg-[red] sm:p-[0.6vw] p-[1vw] rounded-full sm:text-[1.5vw] text-[3vw] ml-[2vw]">Remove</button>
</div>

</div>`,` <div class="product mb-[2vw] ">
<div class="img ">
    <img class="w-[100%] " src="product/f8.jpg">
</div>
<div class="product-about sm:text-[1.5vw] text-[3vw]">
    <span>Gucci</span>
    <h5>Funky Shirts</h5>
</div>
<div class="totalprice sm:text-[1.5vw] text-[4vw]">
    $90
</div>
<div class="quantity">
    <span
        class="minus inline-block sm:w-[3vw] sm:h-[3vw] w-[6vw] h-[6vw] bg-[white] text-[#555] rounded-[50%] cursor-pointer sm:text-[2vw] text-[4vw]">
        < </span>
            <span class="sm:text-[1.5vw] text-[3vw] ">1</span>
            <span
                class="plus  inline-block sm:w-[3vw] w-[6vw] h-[6vw] sm:h-[3vw] bg-[white] text-[#555] rounded-[50%] cursor-pointer sm:text-[2vw] text-[4vw]">></span>
            <button type="button"
                class="remove bg-[red] sm:p-[0.6vw] p-[1vw] rounded-full sm:text-[1.5vw] text-[3vw] ml-[2vw]">Remove</button>
</div>

</div>`]




// cart button







// cart button fnished