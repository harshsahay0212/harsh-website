
function myrelationship() {
     //alert('127.0.0.1:5500 says ');
    const para1 = document.getElementById('section1-para1');
    para1.innerHTML = ' Darsh is my younger brother , he is very naughty !!!';
    if(para1.classList.contains('invisible')){
    para1.classList.remove('invisible') 
    }else {
     para1.classList.add('invisible')
    }    
}

function loadComplete(){
    const imageContainer = document.getElementById('carousel-image-container');
    const slideList = imageContainer.querySelectorAll('.imgCls');
   
    const index = parseInt(slideList.length/2);
    console.log('slideList : ', index);
    const currentSlide = slideList[index];
    currentSlide.classList.add('current-slide');
    }

function slideOperation(typeOfOperation) {
    console.log('typeOfOperation => ', typeOfOperation);
    const imageContainer = document.getElementById('carousel-image-container');
    const slideList = imageContainer.querySelectorAll('.imgCls');
    const currentSlide = document.querySelectorAll('.current-slide')[0];
    currentSlide.classList.remove('rotateMe');
    let currentSLideIndex, nextSlide;
    let slideFoundFlag= false;
   
    for(i=0;i<slideList.length;i++){
        const thisSlide = slideList[i];
        if(thisSlide === currentSlide){
            currentSLideIndex = i;
            slideFoundFlag=true;
            break;
        }
    }

    if(slideFoundFlag) {
        if(typeOfOperation === 'next') {
            if(currentSLideIndex === slideList.length-1) {
                nextSlide = slideList[0];
            } else {
                nextSlide = slideList[currentSLideIndex +1];
            }
            nextSlide.classList.add('current-slide');
            currentSlide.classList.remove('current-slide');
        } else if(typeOfOperation === 'prev') {
            if(currentSLideIndex === 0) {
                prevSlide = slideList[slideList.length-1];
            } else {
                prevSlide = slideList[currentSLideIndex - 1];
            }
            prevSlide.classList.add('current-slide');
            currentSlide.classList.remove('current-slide');
        }
        
    }
    var newSlide = document.querySelectorAll('.current-slide')[0];
    console.log('newSlide : ', newSlide);
    newSlide.addEventListener("click", function() {
        console.log('clicked');
        newSlide.classList.add('rotateMe');
    });
}

