

gsap.from("#shirt .product", {
    y: -200,
    duration: 0.5,
    stagger: 0.2,
    scale:0,

    scrollTrigger:{
        trigger:"#shirt .product",
        scroller:"body",
        // markers:true,
        
        start:"top 500vw"
    }


});
gsap.from("#pants .product", {
    y: -200,
    duration: 0.5,
    stagger: 0.2,
    scale:0,

    scrollTrigger:{
        trigger:"#pants .product",
        scroller:"body",
        // markers:true,
        
        start:"top 510vw"
    }


});

gsap.from("#t-shirt .product", {
    y: -200,
    duration: 0.5,
    stagger: 0.2,
    scale:0,

    scrollTrigger:{
        trigger:"#t-shirt .product",
        scroller:"body",
        // markers:true,
      
        start:"top 700vw"
    }


});
gsap.from("#trouser .product", {
    y: -200,
    duration: 0.5,
    stagger: 0.2,
    scale:0,

    scrollTrigger:{
        trigger:"#trouser .product",
        scroller:"body",
        // markers:true,
   
        start:"top 700vw",
        
    }


});

