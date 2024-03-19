// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Your JavaScript code goes here!

document.addEventListener('DOMContentLoaded', () => {
  const likeGlyphs = document.querySelectorAll('.like-glyph');

  likeGlyphs.forEach((likeGlyph) => {
    likeGlyph.addEventListener('click', (event) => {
      const errorModal = document.getElementById('modal');
      const errorMessage = document.getElementById('modal-message');

      mimicServerCall()
        .then(() => {
          if (likeGlyph.classList.contains('empty-heart')) {
            likeGlyph.innerHTML = FULL_HEART;
            likeGlyph.classList.remove('empty-heart');
            likeGlyph.classList.add('activated-heart');
          } else {
            likeGlyph.innerHTML = EMPTY_HEART;
            likeGlyph.classList.add('empty-heart');
            likeGlyph.classList.remove('activated-heart');
          }
        })
        .catch(() => {
          errorModal.classList.remove('hidden');
          errorMessage.textContent = 'Server Error';

          setTimeout(() => {
            errorModal.classList.add('hidden');
          }, 3000);
        });
    });
  });
});

function mimicServerCall() {
  return new Promise((resolve, reject) => {
    // Simulating a server response
    const randomNum = Math.random();
    setTimeout(() => {
      if (randomNum < 0.5) {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
}
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
