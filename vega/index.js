define(["https://bundle.run/vega-embed@3"], function(VegaEmbed) {
  var style = document.createElement("style")
  style.innerHTML = ".vega-embed .vega-actions > a { visibility: hidden; font-size: 0.9em; margin-right: 0.6em; } " + 
    ".vega-embed:hover .vega-actions > a { visibility: visible; }"
  document.getElementsByTagName("head")[0].appendChild(style)

  return function vegalite(spec, options) {
    var div = document.createElement("div");
    return VegaEmbed.default(div, spec, Object.assign(options || {}, {mode: "vega"}))
      .then(function(result) {
        div.value = result.view;
        return div;
      });
  };
});
