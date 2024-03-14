"use strict";$(document).ready(function(){var t=$(".accordion > li > ul").hide();
$(".accordion > li > a").click(function(){var a=$(this).next();return a.hasClass("active")||(t.removeClass("active").slideUp(),a.addClass("active").slideDown()),!1}),$(".product-links-wap a").click(function(){var t=$(this).children("img").attr("src");return $("#product-detail").attr("src",t),!1}),$("#btn-minus").click(function(){var t=$("#var-value").html();return t="1"==t?t:t-1,$("#var-value").html(t),$("#product-quanity").val(t),!1}),$("#btn-plus").click(function(){var t=$("#var-value").html();return t++,$("#var-value").html(t),$("#product-quanity").val(t),!1}),$(".btn-size").click(function(){var t=$(this).html();return $("#product-size").val(t),$(".btn-size").removeClass("btn-secondary"),$(".btn-size").addClass("btn-success"),$(this).removeClass("btn-success"),$(this).addClass("btn-secondary"),!1})});
const cardsPerPage = 6;
const dataContainer = document.getElementById('my-products');
const pagination = document.getElementById('pagination');
const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('Next');
const pageNumbers= document.getElementById('page-numbers')
const pagelinks = document.querySelectorAll('.page-link');
const cards=
    Array.from(my-products.getElementByClassName('card'));
const totalpages = math.ceil(cars.length/cardsPerPage);
let currentpage = 1;
function display(page) {
    const startIndex = (page -1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    cards.forEach((card,index)=>{
        if (index>= startIndex && index <endIndex) {
            card.style.display = 'block';
        }else{
            cards.style.display='none';
        }
    });
}
function updatePagination() {
    previousButton.disabled = currentpage ==1;
    nextButton.disabled=currentpage==totalpages;
    pagelinks.forEach((link)=>{
        const   page= parseInt(link.getAttribute('data-page'));
        link.classList.toggle('active',page==currentpage);
    });
}
nextButton.addEventListener('click',()=>{
    if (currentpage<totalpages){
        currentpage++;
        displayPage(currentPage);
        updatePagination();
    }
});
pagelinks.forEach((link) => {
    link.addEventListener('click', (e) =>{
        e.preventDefault();
        const page = parseInt(link.getAttribute('data-page'));
        if (page !== currentpage) {
            currentpage=page;
            displayPage(currentpage);
            updatePagination();
            
        }
    });
});
displayPage(currentpage);
updatePagination();