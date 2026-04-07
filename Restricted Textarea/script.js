//select the textarea element
const textarea = document.querySelector('#restricted-textarea');
//select the character count display element
const charCount = document.querySelector('#char-count');
//select the div container containing the textarea and character count
const container = document.querySelector('.divContainer');

/* 
create a textarea that tracks and displays the number of characters typed by the user, along with a maximum character limit. As the user types, the character count will update dynamically. Once the limit is reached, the textarea will prevent further input, and the border will turn red to visually indicate the limit has been hit.
*/

//set a maximum character limit
const maxChars = 250;

//add an event listener to the textarea to track input
textarea.addEventListener('input', () => {
    //get the current length of the input
    const currentLength = textarea.value.length;
    //update the character count display
    charCount.textContent = `${currentLength}/${maxChars}`;
    //check if the current length exceeds the maximum character limit and stop user from typing upon hitting the text limit
    if (currentLength > maxChars) {
        //trim the textarea value to the maximum character limit
        textarea.value = textarea.value.substring(0, maxChars);
        //update the character count display to reflect the trimmed value
        charCount.textContent = `${maxChars}/${maxChars}`;
        //add a red border to indicate the limit has been reached
        container.style.border = '2px solid red';
    } else {
        //restore the default border if the limit has not been reached
        container.style.border = '2px solid black';
    }
});




