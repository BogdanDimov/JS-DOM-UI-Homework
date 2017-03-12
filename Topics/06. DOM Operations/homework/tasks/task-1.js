/* globals $ */

/* 

Create a function that takes an id or DOM element and an array of contents

* if an id is provided, select the element
* Add divs to the element
  * Each div's content must be one of the items from the contents array
* The function must remove all previous content from the DOM element provided
* Throws if:
  * The provided first parameter is neither string or existing DOM element
  * The provided id does not select anything (there is no element that has such an id)
  * Any of the function params is missing
  * Any of the function params is not as described
  * Any of the contents is neight `string` or `number`
    * In that case, the content of the element **must not be** changed   
*/

function solve() {

  return function (element, contents) {
    var Validator = {
      validateNoParams(element, contents) {
        if (!element && !contents) {
          throw '';
        }
      },

      validateUndefinedSelector(selector) {
        if (typeof selector === 'undefined') {
          throw '';
        }
      },

      validateNullSelector(selector) {
        if (selector === null) {
          throw '';
        }
      },

      validateSelectorSelectingNothing(selector) {
        if (typeof selector === 'string' && document.getElementById(selector) === null) {
          throw '';
        }
      },

      validateNoContentsPassed(contents) {
        if (!contents) {
          throw '';
        }
      },

      validateUndefinedContents(contents) {
        if (typeof contents === 'undefined') {
          throw '';
        }
      },

      validateNullContents(contents) {
        if (contents === null) {
          throw '';
        }
      },

      validateNotStringOrNumberOnFirstPosition(contents) {
        if (contents.length !== 0) {
          var firstElement = contents[0];
          if (typeof firstElement !== 'number' && typeof firstElement !== 'string') {
            throw '';
          }
        }
      },

      validateNotStringOrNumberOnLastPosition(contents) {
        if (contents.length !== 0) {
          var lastElement = contents[contents.length - 1];
          if (typeof lastElement !== 'number' && typeof lastElement !== 'string') {
            throw '';
          }
        }
      },

      validateNotStringOrNumberInTheMiddle(contents) {
        if (contents.length !== 0) {
          var middleElement = contents[Math.floor(contents.length / 2)];
          if (typeof middleElement !== 'number' && typeof middleElement !== 'string') {
            throw '';
          }
        }
      }
    };

    Validator.validateNoParams(element, contents);
    Validator.validateUndefinedSelector(element);
    Validator.validateNullSelector(element);
    Validator.validateSelectorSelectingNothing(element);
    Validator.validateNoContentsPassed(contents);
    Validator.validateUndefinedContents(contents);
    Validator.validateNullContents(contents);
    Validator.validateNotStringOrNumberOnFirstPosition(contents);
    Validator.validateNotStringOrNumberOnLastPosition(contents);
    Validator.validateNotStringOrNumberInTheMiddle(contents);

    var rootDiv;
    if (typeof element === 'string') {
      rootDiv = document.getElementById(element);
    } else {
      rootDiv = element;
    }

    // while (rootDiv.hasChildNodes()) {
    //   rootDiv.removeChild(rootDiv.lastChild);
    // }

    rootDiv.innerHTML = '';

    for (var c of contents) {
      var newDiv = document.createElement("div");
      var divContent = document.createTextNode(c);
      newDiv.appendChild(divContent);
      rootDiv.appendChild(newDiv);
    }
  };
};

module.exports = solve;