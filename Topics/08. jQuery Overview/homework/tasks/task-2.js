/* globals $ */

/*
Create a function that takes a selector and:
* Finds all elements with class `button` or `content` within the provided element
  * Change the content of all `.button` elements with "hide"
* When a `.button` is clicked:
  * Find the topmost `.content` element, that is before another `.button` and:
    * If the `.content` is visible:
      * Hide the `.content`
      * Change the content of the `.button` to "show"       
    * If the `.content` is hidden:
      * Show the `.content`
      * Change the content of the `.button` to "hide"
    * If there isn't a `.content` element **after the clicked `.button`** and **before other `.button`**, do nothing
* Throws if:
  * The provided ID is not a **jQuery object** or a `string` 

*/
function solve() {
  return function (selector) {
    var element = $(selector);
    if (!element.length) throw Error();

    $(".button").each(function () {
      $(this).html('hide');
    });

    element.click(function (ev) {
      var clickedButton = $(ev.target);
      var nextContent = clickedButton.nextAll(".content").first();
      if (nextContent.css('display') === 'none') {
        nextContent.css('display', '');
        clickedButton.html('hide');
      } else {
        nextContent.css('display', 'none');
        clickedButton.html('show');
      }
    });
  };
};

module.exports = solve;