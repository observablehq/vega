define(["vega@3/build/vega.min.js"], function(Vega) {
  return function vega(spec, options) {
    var div = document.createElement("div");
    var view = new Vega.View(Vega.parse(spec)).initialize(div);

    if (options && options.renderer) {
      view = view.renderer(options.renderer);
    }

    return view.runAsync().then(function() { return div; });
  };
});
