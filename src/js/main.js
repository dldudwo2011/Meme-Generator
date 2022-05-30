/*      
*      Author: Youngjae Lee
*      
*      Last modified date: 2021 Oct 9
*/

//retrieving the DOM Objects 
const error = document.querySelector('.error');

const form = document.querySelector('.meme-form');

const inputMemeImage = document.querySelector('#meme-image');
const inputTopText = document.querySelector('#meme-top-text');
const inputBottomText = document.querySelector('#meme-bottom-text');

const p1 = document.querySelector('.top-text');
const p2 = document.querySelector('.bottom-text');
const img = document.querySelector('img');

//string literals for error message
const errorStringLiteral1 = '<p>Please choose an image</p>';
const errorStringLiteral2 = '<p>Please enter a text</p>';

//string literals for image path
const placeHolderImagePath = 'https://via.placeholder.com/550x300?text=Choose+an+image+from+the+dropdown';
const firstImagePath = 'img/fry-meme.png';
const secondImagePath = 'img/one-does-not-simply-meme.png';
const thirdImagePath = 'img/most-interesting-man-meme.png';

//string literals for alt attribute of image
const placeHolderImageAlt = 'Placeholder Image';
const firstImageAlt = 'FryMeme';
const secondImageAlt = 'OneDoesNotSimplyMeme';
const thirdImageAlt = 'MostInterestingManMeme';

//submit event listener
const submitEventListener = function(e){
    e.preventDefault();

    //custom method to clear the error message. It is specified in the very end of this document
    clearErrorMsg();

    //selected index
    const selectedIndex = inputMemeImage.selectedIndex;

    //if the user selects no image
    if(selectedIndex == 0) error.insertAdjacentHTML('afterbegin', errorStringLiteral1);
    
    //if the user enters nothing
    if(inputTopText.value.trim() == '' || inputBottomText.value.trim() == ''){
        error.insertAdjacentHTML('beforeend', errorStringLiteral2);
        return
    }

    //switch
    switch(selectedIndex){

        //if the user selects the first image
        case 1:

            //displays text and set the image. Methods are custom methods and they are specified in the very end
            displayTextInputs(inputTopText, p1, inputBottomText, p2);
            setImgAttributes(img, firstImagePath, firstImageAlt);
            break;
        
        //if the user selects the second image
        case 2:
    
            //displays text and set the image. Methods are custom methods and they are specified in the very end
            displayTextInputs(inputTopText, p1, inputBottomText, p2);
            setImgAttributes(img, secondImagePath, secondImageAlt);
            break;

        //if the user selects the third image
        case 3:

            //displays text and set the image. Methods are custom methods and they are specified in the very end
            displayTextInputs(inputTopText, p1, inputBottomText, p2);
            setImgAttributes(img, thirdImagePath, thirdImageAlt);
            break;
    }
}

//reset event listener 
const resetEventListener = function(){
    
    //clears error message & text
    clearErrorMsg();
    clearText(p1, p2);

    //set the img attribute back to default state
    setImgAttributes(img, placeHolderImagePath, placeHolderImageAlt);
}

//On init
const onAppInit = function(){

    //add the event listener for submit and reset
    form.addEventListener('submit', submitEventListener);
    form.addEventListener('reset', resetEventListener);
}

//adding load event listener
window.addEventListener('load', onAppInit);


//--------------------------------------------------------------------Custom methods--------------------------------------------------------------------//

//set the src and alt attribute of an img dom object
const setImgAttributes = function(img, src, alt){
    img.setAttribute('src', src);
    img.setAttribute('alt', alt);
}

//set the text from input. Arguments take the form of (input element object, text element object) and 
// indefinite number of argument is allowed.
const displayTextInputs = function(...InputandElement){
    InputandElement.forEach(function(val,i){
        if(typeof val.value == 'string') InputandElement[i+1].textContent = val.value; 
    })
}

//clear the text of elements. Argument is text element and indefinite number of argument is allowed
const clearText = function(...element){
    element.forEach(value => value.textContent = '');
}

//clears the error text in the error object
const clearErrorMsg = function(){
    error.textContent = '';
}