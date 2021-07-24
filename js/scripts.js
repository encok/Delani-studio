
$(document).ready(function(){
    $("#design-img").click(function(){
     $("#design-img").slideDown('1400').hide('1000');
     $("#design").show('1400');
    });
    $("#design").click(function(){
        $("#design").slideUp('1400');
        $("#design-img").slideDown('1400');
    }); 
});

// $(document).ready(function(){
//     $("#development-img").click(function(){
//      $("#development-img").slideDown('1400').hide('1000');
//      $("#development").show('1400');
//     });
//     $("#development").click(function(){
//         $("#development").slideUp('1400');
//         $("#development-img").slideDown('1400');
//     }); 
// });

// $(document).ready(function(){
//     $("#product-img").click(function(){
//      $("#product-img").slideDown('1400').hide('1000');
//      $("#product").show('1400');
//     });
//     $("#product").click(function(){
//         $("#product").slideUp('1400');
//         $("#product-img").slideDown('1400');
//     }); 
// });
