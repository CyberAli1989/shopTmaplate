$('#Product-Slider .owl-carousel').owlCarousel({
    rtl:true,
    loop:false,
    margin:10,
    nav:true,
    dots:false,

    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})