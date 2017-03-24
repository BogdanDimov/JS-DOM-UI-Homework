function solve() {
  return function () {
    $.fn.listview = function (data) {
      var template = $("#" + this.attr('data-template')).html();
      var templateFunc = handlebars.compile(template);
      for (var item of data) {
        this.append(templateFunc(item));
      }

      return this;
    };
  };
}

module.exports = solve;