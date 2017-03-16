function solve() {
  return function (selector) {
    var element = document.getElementById(selector);
    if (element === null) throw Error();

    var btns = document.getElementsByClassName('button');
    for (i = 0, len = btns.length; i < len; i += 1) {
      btns[i].innerHTML = 'hide';
    }

    element.addEventListener('click', function (event) {
      var theButton,
        theContent;

      if (event.target.className === 'button') {
        theButton = event.target;
        theContent = theButton.nextElementSibling;

        if (theButton.innerHTML === 'hide') {
          theButton.innerHTML = 'show';
          theContent.style.display = 'none';
        } else {
          theButton.innerHTML = 'hide';
          theContent.style.display = '';
        }
      }
    });
  };
};

module.exports = solve;