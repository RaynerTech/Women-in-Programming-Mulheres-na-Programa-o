$(function(){

    var delay = 3000
    var curIndex = 0
    var amt

    initSlider()
    autoPlay()

    function initSlider(){
        amt = $('.nomes').length
        var sizeContainer = 100 * amt
        var sizeBoxSingle = 100 / amt
        $('.nomes').css('width', sizeBoxSingle + '%')
        $('.wraper-scroll').css('width' ,sizeContainer + '%')

       
        for(var i = 0; i < amt; i++){
            if(i == 0 )
                $('.slider-bullets').append('<span style="background-color:rgb(255, 192, 203);" ></span>')
            else
                $('.slider-bullets').append('<span></span>')  
        }
    }

    function autoPlay(){
        setInterval(function(){
            curIndex++
            if(curIndex == amt)
                curIndex = 0
            goToSlider(curIndex)    
        
        },delay)
    }

    function goToSlider(curIndex){
        var offsetX = $('.nomes').eq(curIndex).offset().left - $('.wraper-scroll').offset().left
//ultilizar px quando estamos animando utilizar o scrollTop ou scrollLeft é opcional
        $('.slider-bullets span').css('background-color','rgb(200,200,200)')
        $('.slider-bullets span').eq(curIndex).css('background-color','rgb(255,192,203)')
        $('.scroll').stop().animate({'scrollLeft':offsetX + 'px'})
    }

    $(window).resize(function(){
        $('.scroll').stop().animate({'scrollLeft':0})
    })
})