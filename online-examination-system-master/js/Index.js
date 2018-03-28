/* Comment
Tiina - tegin aga segane */

$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
    var $this = $(this),
        label = $this.prev('label');
  
        if (e.type === 'keyup') {
              if ($this.val() === '') {
            label.removeClass('active highlight');
          } else {
            label.addClass('active highlight');
          }
      } else if (e.type === 'blur') {
          if( $this.val() === '' ) {
              label.removeClass('active highlight'); 
              } else {
              label.removeClass('highlight');   
              }   
      } else if (e.type === 'focus') {
        
        if( $this.val() === '' ) {
              label.removeClass('highlight'); 
              } 
        else if( $this.val() !== '' ) {
              label.addClass('highlight');
              }
      }
  
  });
  

  $('.tab a').on('click', function (e) {
  
    e.preventDefault();
    
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
    
    target = $(this).attr('href');
  
    $('.tab-content > div').not(target).hide();
    
    $(target).fadeIn(600);
    
  });



// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Tiina FQA questions - klikid tekstile ja sõidab alla. Kas ma peaks selle funktsiooni kuidagi lõpetama, et oleks kaks eraldi funktsiooni - st algul klikid lahti ja siis klikid kinni (aga nii, et see toimuks su enda valikul, mitte delay abil). see näide on ilusamhttps://codyhouse.co/demo/faq-template/index.html

$(document).ready(function(){
    $("#ShowText").click(function(){
        $("#FAQ").slideDown("slow");
    });
});

// Tiina FQA questions - klikid tekstile ja sõidab üles. peaks tegema nii, et kasutaja saab ise valida, millal ülesa läheb. Hetkel on Delay peal. 

$(document).ready(function(){
    $("#ShowText").click(function(){
        $("#FAQ").delay(5000).slideUp("500");
    });
});


// Tiina FQA questions - klikid tekstile ja sõidab alla. Kas ma peaks selle funktsiooni kuidagi lõpetama, et oleks kaks eraldi funktsiooni - st algul klikid lahti ja siis klikid kinni (aga nii, et see toimuks su enda valikul, mitte delay abil). see näide on ilusamhttps://codyhouse.co/demo/faq-template/index.html

$(document).ready(function(){
    $("#ShowText1").click(function(){
        $("#FAQ1").slideDown("slow");
    });
});

// Tiina FQA questions - klikid tekstile ja sõidab üles. peaks tegema nii, et kasutaja saab ise valida, millal ülesa läheb. Hetkel on Delay peal. 

$(document).ready(function(){
    $("#ShowText1").click(function(){
        $("#FAQ1").delay(5000).slideUp("500");
    });
});


// Tiina FQA questions - klikid tekstile ja sõidab alla. Kas ma peaks selle funktsiooni kuidagi lõpetama, et oleks kaks eraldi funktsiooni - st algul klikid lahti ja siis klikid kinni (aga nii, et see toimuks su enda valikul, mitte delay abil). see näide on ilusamhttps://codyhouse.co/demo/faq-template/index.html

$(document).ready(function(){
    $("#ShowText2").click(function(){
        $("#FAQ2").slideDown("slow");
    });
});

// Tiina FQA questions - klikid tekstile ja sõidab üles. peaks tegema nii, et kasutaja saab ise valida, millal ülesa läheb. Hetkel on Delay peal. 

$(document).ready(function(){
    $("#ShowText2").click(function(){
        $("#FAQ2").delay(5000).slideUp("500");
    });
});


// Tiina FQA questions - klikid tekstile ja sõidab alla. Kas ma peaks selle funktsiooni kuidagi lõpetama, et oleks kaks eraldi funktsiooni - st algul klikid lahti ja siis klikid kinni (aga nii, et see toimuks su enda valikul, mitte delay abil). see näide on ilusamhttps://codyhouse.co/demo/faq-template/index.html

$(document).ready(function(){
    $("#ShowText3").click(function(){
        $("#FAQ3").slideDown("slow");
    });
});

// Tiina FQA questions - klikid tekstile ja sõidab üles. peaks tegema nii, et kasutaja saab ise valida, millal ülesa läheb. Hetkel on Delay peal. 

$(document).ready(function(){
    $("#ShowText3").click(function(){
        $("#FAQ3").delay(5000).slideUp("500");
    });
});
