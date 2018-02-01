define(["vega@3/build/vega.min.js", "vega-lite@2/build/vega-lite.min.js"], function(Vega, VegaLite) {
  return function vegalite(spec) {
    var div = document.createElement("div");
    await new Vega.View(Vega.parse(VegaLite.compile(spec).spec)).initialize(div).runAsync();
    return div;
  };
});
