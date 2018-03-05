define(["vega@3/build/vega.min.js", "vega-lite@2/build/vega-lite.min.js"], function(Vega, VegaLite) {
  return function vegalite(spec, options) {
    var div = document.createElement("div");
    var view = new Vega.View(Vega.parse(VegaLite.compile(spec).spec)).initialize(div);

    if (options && options.renderer) {
      view = view.renderer(options.renderer);
    }

    return view.runAsync().then(function() { return div; });
  };
});
