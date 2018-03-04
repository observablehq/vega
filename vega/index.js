define(["vega@3/build/vega.min.js"], function(Vega) {
  return function vega(spec) {
    var div = document.createElement("div");
    var view = new Vega.View(Vega.parse(spec));
    return view.initialize(div).renderer("svg").runAsync().then(function() { return div; });
  };
});
