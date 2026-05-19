// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

function init() {
  document.addEventListener("DOMContentLoaded", () => {
  const likeBtns = document.getElementsByClassName("like-glyph")
  const errBanner = document.getElementById("modal")
  for (const btn of likeBtns) {
    btn.addEventListener("click", () => {
      mimicServerCall()
      .then(resp => {
        if(btn.classList.contains('activated-heart')) {
          btn.textContent = EMPTY_HEART
          btn.classList.remove('activated-heart')
        } else {
          btn.textContent = FULL_HEART
          btn.classList.add('activated-heart')
        }
      })
      .catch(err => {
        errBanner.classList.remove("hidden")
        setTimeout(() => {
          errBanner.classList.add("hidden")
        }, 3000);
      })
    })
  }
})
}

init()

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
