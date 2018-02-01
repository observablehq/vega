define(["vega@3/build/vega.min.js", "vega-lite@2/build/vega-lite.min.js"], function(Vega, VegaLite) {
  return function vegalite(spec) {
    var div = document.createElement("div");
    var view = new Vega.View(Vega.parse(VegaLite.compile(spec).spec));
    return view.initialize(div).runAsync().then(function() { return div; });
  };
});
