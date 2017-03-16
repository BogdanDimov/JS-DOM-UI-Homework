function solve() {
  return function (selector) {
    if (selector === null) throw Error();
    if (typeof selector === 'undefined') throw Error();
    if (document.getElementById(selector) === null) throw Error();

    var btns = document.getElementsByClassName('button');
    for (i = 0, len = btns.length; i < len; i += 1) {
      btns[i].innerHTML = 'hide';
    }

    var theButton = document.getElementById('the-button');
    if (theButton) {
      var theContent = theButton.nextElementSibling;
      while (theContent && theContent.className.indexOf('content') < 0) {
        theContent = theContent.nextElementSibling;
      }

      theButton.addEventListener('click', function () {
        if (theButton.innerHTML === 'hide') {
          theButton.innerHTML = 'show';
          theContent.style.display = 'none';
        } else {
          theButton.innerHTML = 'hide';
          theContent.style.display = '';
        }
      });
    }
  };
};

module.exports = solve;