
/************************ Menuresiaze **************************/
    $(".links li.have-sub a").click(function (b) {
        var c = $(this).parent("li").hasClass("noSub");
        if (!c) { b.preventDefault() } $(this).parent("li").siblings("li").children("ul").slideUp("fast");
        $(this).parent("li").siblings("li").removeClass("open-li");
        $(this).parent("li").toggleClass("open-li");
        var a = $(this).parent().children("ul:first"); a.slideToggle("down");
    });

//select sort list
    $('.sort-list span').click(function(){
        $(this).addClass('selected').siblings().removeClass('selected');
    });
/************************ limit character **************************/


$(" .caption .back .matn").text(function (index, currentText) {
    return currentText.substr(0, 200);
});

/******************** list-grid ********************/
$('.grid').click(function (e) {
    e.preventDefault();
    $('.grid').addClass('activeBtn');
    $('.list').removeClass('activeBtn');
    $('.products-list .col-md-3').removeClass('listItem');
});
$('.list').click(function (e) {
    e.preventDefault();
    $('.list').addClass('activeBtn');
    $('.grid').removeClass('activeBtn');
    $('.products-list .col-md-3').addClass('listItem');
});
/*********************select number of news to show******************/
$('.show-filter .select-num').click(function () {
    $(this).toggleClass('active').next().slideToggle('fast');
});
$('.show-filter > ul > li').click(function () {
    var thisValue = $(this).text();
    var htmlCode = thisValue + '<i class="mdi mdi-chevron-down"></i>';
    $(this).addClass('selected').siblings().removeClass('selected');
    $('.show-filter .select-num').html(htmlCode);
    $('.show-filter > ul').slideUp('fast');
    $('.show-filter .select-num').removeClass('active');
});
$(document).click(function (e) {
    if (!$('.show-filter').is(e.target) && !$('.show-filter *').is(e.target)) {
        $('.show-filter > ul').slideUp('fast');
        $('.show-filter .select-num').removeClass('active');
    }
});

/************************ search box **************************/


$(document).ready(function(){
            var submitIcon = $('.searchbox-icon');
            var inputBox = $('.searchbox-input');
            var searchBox = $('.searchbox');
            var isOpen = false;
            submitIcon.click(function(){
                if(isOpen == false){
                    searchBox.addClass('searchbox-open');
                    inputBox.focus();
                    isOpen = true;
                } else {
                    searchBox.removeClass('searchbox-open');
                    inputBox.focusout();
                    isOpen = false;
                }
            });  
             submitIcon.mouseup(function(){
                    return false;
                });
            searchBox.mouseup(function(){
                    return false;
                });
            $(document).mouseup(function(){
                    if(isOpen == true){
                        $('.searchbox-icon').css('display','block');
                        submitIcon.click();
                    }
                });
        });
            function buttonUp(){
                var inputVal = $('.searchbox-input').val();
                inputVal = $.trim(inputVal).length;
                if( inputVal !== 0){
                    $('.searchbox-icon').css('display','none');
                } else {
                    $('.searchbox-input').val('');
                    $('.searchbox-icon').css('display','block');
                }
            }

/************************ language box **************************/
/*$(function(){
    $('.selectpicker').selectpicker();
});*/

/*----------Language-------------------*/
$('.Language').click(function () {
    $(this).find('ul').slideToggle();
})
$(document).click(function (e) {
    if (!$('.Language').is(e.target) && !$('.Language *').is(e.target)) {
        $('.Language ul').slideUp();

    }
});

/************************ category **************************/
 $(".category li a").click(function (b) { var c = $(this).parent("li").hasClass("noSub"); $(this).parent("li").siblings("li").removeClass("open"); if (!c) { b.preventDefault() } $(this).parent("li").siblings("li").children("ul").slideUp("fast"); $(this).parent("li").toggleClass("open"); var a = $(this).parent().children("ul:first"); a.slideToggle("down") }); $(".sidebar-widget-title").click(function (a) { a.preventDefault(); $("ul.category").slideToggle("down"); $(".search-result-list").slideToggle("down"); $(".toggleCategori").toggleClass("rotate") });

/************************ tabbar **************************/

 function opentab(evt, tabname) {
     try {
         var i, tabcontent, tablinks;
         tabcontent = document.getElementsByClassName("tabcontent");
         for (i = 0; i < tabcontent.length; i++) {
             tabcontent[i].style.display = "none";
         }
         tablinks = document.getElementsByClassName("tablinks");
         for (i = 0; i < tablinks.length; i++) {
             tablinks[i].className = tablinks[i].className.replace(" active", "");
         }
         document.getElementById(tabname).style.display = "block";
         evt.currentTarget.className = " active";
     } catch (err) {
         
     }
 }

// Get the element with id="defaultOpen" and click on it
    $(document).ready(function () {
        $('#defaultOpen').trigger('click');
    });



