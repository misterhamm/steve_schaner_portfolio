/* There are different ways to do this but you should make sure your javascript doesn't run until your markup loads.  Sometimes things can get out of sync and if your javascript runs before an element has loaded it will think it doesn't exist and throw an error.  

In jQuery it looks like this
$(document).ready(function () { 
    YOUR CODE HERE 
});

vanilla javascript would be something like
document.addEventListener("DOMContentLoaded", function() {
  YOUR CODE HERE
});
*/

/**********************************
PROGESS BARS
**********************************/

const skills = document.getElementById('skills');
const progressbar = document.getElementsByClassName('progress-bar');

console.log(skills);
console.log(progressbar);
/* Uh oh!  Left some console.logs in your code! */

for (i = 0; i < progressbar.length; i += 1) {
  skills.addEventListener('mouseover', () => {
    progressbar[0].style.width = "80%";
    progressbar[0].innerHTML = "80%";
    progressbar[1].style.width = "75%";
    progressbar[1].innerHTML = "75%";
    progressbar[2].style.width = "50%";
    progressbar[2].innerHTML = "50%";
    progressbar[3].style.width = "10%";
    progressbar[3].innerHTML = "10%";
    progressbar[4].style.width = "10%";
    progressbar[4].innerHTML = "10%";
    progressbar[5].style.width = "10%";
    progressbar[5].innerHTML = "10%";
  })
}


/* Try this function out.  I like it when you are navigating with anchors

//Smooth Scrolling Anchors
$(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    var topOffset = target.offset().top;
                    var finalOffset = topOffset - 150;

                    $('html, body').animate({
                        scrollTop: finalOffset
                    }, 1000);
                    return false;
                }
            }
        });
    });

*/