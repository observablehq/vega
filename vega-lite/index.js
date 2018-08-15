define(["vega", "vega-lite"], function(Vega, VegaLite) {
  return function vegalite(spec) {
    var div = document.createElement("div");
    var view = new Vega.View(Vega.parse(VegaLite.compile(spec).spec));
    return view.initialize(div).runAsync().then(function() { return div; });
  };
});
