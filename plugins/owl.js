  $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })





// Second slider with the correct ID selector
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3 // Set the number of items to 4 for screens larger than 600px
        },
        1000: {
            items: 4 // Set the number of items to 4 for screens larger than 1000px
        }
    }
});
// $('.carousel').owlCarousel({
//     loop: true,
//     margin: 10,
//     nav: true,
//     responsive: {
//         0: {
//             items: 1
//         },
//         600: {
//             items: 3 // Set the number of items to 4 for screens larger than 600px
//         },
//         1000: {
//             items: 4 // Set the number of items to 4 for screens larger than 1000px
//         }
//     }
// });