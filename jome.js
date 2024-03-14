
'use strict';
$(document).ready(function() {

    // Accordion
    var all_panels = $('.accordion > li > ul').hide();

    $('.accordion > li > a').click(function() {
        console.log('Hello world!');
        var target =  $(this).next();
        if(!target.hasClass('active')){
            all_panels.removeClass('active').slideUp();
            target.addClass('active').slideDown();
        }
      return false;
    });
    // End accordion

    // Product detail
    $('.product-links-wap a').click(function(){
      var this_src = $(this).children('img').attr('src');
      $('#product-detail').attr('src',this_src);
      return false;
    });
    $('#btn-minus').click(function(){
      var val = $("#var-value").html();
      val = (val=='1')?val:val-1;
      $("#var-value").html(val);
      $("#product-quanity").val(val);
      return false;
    });
    $('#btn-plus').click(function(){
      var val = $("#var-value").html();
      val++;
      $("#var-value").html(val);
      $("#product-quanity").val(val);
      return false;
    });
    $('.btn-size').click(function(){
      var this_val = $(this).html();
      $("#product-size").val(this_val);
      $(".btn-size").removeClass('btn-secondary');
      $(".btn-size").addClass('btn-success');
      $(this).removeClass('btn-success');
      $(this).addClass('btn-secondary');
      return false;
    });
    // End roduct detail

});
function search() {
  const searchbox = document.getElementById('find').value.toUpperCase();
  const storeitems=document.getElementById("my-products")
  const product=document.querySelectorAll(".card-body")
  const pname= document.getElementsByClassName("p.text-c.mb-0")
      for (var index = 0; index<=pname.length; index++) {
          let match = product[index].pname;
          if (match) {
             
              if (match.innerText.toUpperCase().indexOf(searchbox)> -1) {
                 product[index].style.dispaly =""; 
              }
          else{
              product[index ].style.display="none"
          }
      }
          
      }
  }