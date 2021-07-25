
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

$(document).ready(function(){
    $("#development-img").click(function(){
     $("#development-img").slideDown('1400').hide('1000');
     $("#development").show('1400');
    });
    $("#development").click(function(){
        $("#development").slideUp('1400');
        $("#development-img").slideDown('1400');
    }); 
});

$(document).ready(function(){
    $("#product-img").click(function(){
     $("#product-img").slideDown('1400').hide('1000');
     $("#product").show('1400');
    });
    $("#product").click(function(){
        $("#product").slideUp('1400');
        $("#product-img").slideDown('1400');
    }); 
});

// overlay
$('#work1').hover(function(){
    $('#overlay1',this).slideToggle('slow');
 }, function(){
    $('#overlay1',this).slideToggle('slow');
 });
 $('#work2').hover(function(){
    $('#overlay2',this).slideToggle('slow');
 }, function(){
    $('#overlay2',this).slideToggle('slow');
 });
 $('#work3').hover(function(){
    $('#overlay3',this).slideToggle('slow');
 }, function(){
    $('#overlay3',this).slideToggle('slow');
 });
 $('#work4').hover(function(){
    $('#overlay4',this).slideToggle('slow');
 }, function(){
    $('#overlay4',this).slideToggle('slow');
 });
 $('#work5').hover(function(){
    $('#overlay5',this).slideToggle('slow');
 }, function(){
    $('#overlay5',this).slideToggle('slow');
 });
 $('#work6').hover(function(){
    $('#overlay6',this).slideToggle('slow');
 }, function(){
    $('#overlay6',this).slideToggle('slow');
 });
 $('#work7').hover(function(){
    $('#overlay7',this).slideToggle('slow');
 }, function(){
    $('#overlay7',this).slideToggle('slow');
 });
 $('#work8').hover(function(){
    $('#overlay8',this).slideToggle('slow');
 }, function(){
    $('#overlay8',this).slideToggle('slow');
 });

 $(document).ready(function(){
     
        $("#blanks form").submit(function(event){
            var nameInput = $("input#name").val();
            var emailInput = $("input#email").val();
            $(".naming").append(nameInput);
            
            $("#welcome").show();

        event.preventDefault();
        });

});

// function myFunction() {
//     document.getElementById("form34c").reset();
//   }