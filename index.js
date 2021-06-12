function  myabillity() {
    alert('Do You Really Want To Do This ?')
    const para2 = document.getElementById('section1-para2');
    if(para2.classList.contains('invisible')){
        para2.classList.remove('invisible');
    }else {
        para2.classList.add('invisible');
    }
}
function myrelationship() {
    // alert('127.0.0.1:5500 says ');
    const para1 = document.getElementById('section1-para1');
    para1.innerHTML = ' Darsh is my younger brother , he is very naughty !!!';
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
}