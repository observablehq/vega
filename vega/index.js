define(["vega@5/build/vega.min.js"], function(Vega) {
  return function vega(spec) {
    var div = document.createElement("div");
    var view = new Vega.View(Vega.parse(spec));
    return view.initialize(div).runAsync().then(function() { return div; });
  };
});
