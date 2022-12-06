var slider = document.querySelector('.slide')
var btnNext = document.querySelector('.next')
var btnPrev = document.querySelector('.prev')
var slideMain = document.querySelector('.slide-main')
var slideItems=document.querySelectorAll('.slide-item')
var slideDots=document.querySelectorAll('.slide-dots li')

//Lấy độ rộng của 1 phần tử * số lượng phần
// tử để có thể lấy chiều rộng tối đa 
var itemWidth=slideItems[0].offsetWidth
var slideLength=slideItems.length
var stepX=0
var index=0


function stepImg(value){
    if(value==='next'){
        index++
        if(index>slideLength-1){
            index=0
            stepX=itemWidth
        }
        stepX=stepX-itemWidth
        console.log(stepX,index)
        slideMain.style.transform='translateX('+stepX+'px)'
        clearInterval(timer)
        timerAuto()
    }
    else if(value==='prev'){
        index--
        if(index<0){
            index=slideLength-1
            stepX=-itemWidth*slideLength-1
        }
        stepX=stepX+itemWidth
        console.log(stepX,index)
        slideMain.style.transform='translateX('+stepX+'px)'
        clearInterval(timer)
        timerAuto()
    }
    slideDots.forEach(function(buttonRemove){
        buttonRemove.classList.remove("active")
    })
    slideDots[index].classList.add("active")
}

slideDots.forEach((button) =>
    button.addEventListener('click', function(event){
        slideDots.forEach(function(buttonRemove){
            buttonRemove.classList.remove("active")
        })
        event.target.classList.add("active")
        var dotIndex = parseInt(event.target.dataset.index)
        index=dotIndex
        stepX=-1*index*itemWidth
        slideMain.style.transform='translateX('+stepX+'px)'
    })
)

btnNext.addEventListener("click",function(){
    stepImg('next')
})

btnPrev.addEventListener("click",function(){
    stepImg('prev')
})

var timer
function timerAuto(){
    timer = setInterval(function(){
        btnNext.click()
    },5000)
}
timerAuto()

