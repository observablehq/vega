define(["vega-embed@3"], function(VegaEmbed) {
  var ID = 'vega-embed-style';
  if (!document.getElementById(ID)) {
    var style = document.createElement("style")
    style.id = ID
    style.innerHTML = ".vega-embed .vega-actions > a { opacity: 0.2; font-size: 0.9em; margin-right: 0.6em; } " + 
      ".vega-embed:hover .vega-actions > a { opacity: 1; }"
    document.getElementsByTagName("head")[0].appendChild(style)
  }

  return function vegalite(spec, options) {
    var div = document.createElement("div");
    return VegaEmbed.default(div, spec, Object.assign(
        options || {},
        {
          mode: "vega-lite",
          actions: Object.assign(
            {source: false},
            options ? options.actions || {} : {})
        })
      )
      .then(function(result) {
        div.value = result.view;
        return div;
      });
  };
});
