/**********************************
PROGESS BARS
**********************************/

const skills = document.getElementById('skills');
const progressbar = document.getElementsByClassName('progress-bar');

console.log(skills);
console.log(progressbar);

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
