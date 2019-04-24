Module.register("googlemap", {
  // Default module config.
  defaults: {
    apikey: "AIzaSyCt_7Kc0Ot-ToTJGmIhjDCe_hFevoeviig",
    origin: "Mulund ",
    destination: "Nerul",
    baseurl: "https://www.google.com/maps/embed/v1/directions?key=",
    style: "border:0;"
    //	style: 'border:0;-webkit-filter: grayscale(100%);filter: grayscale(100%);',
  },

  getDom: function() {
    var fullyBuiltURL =
      this.config.baseurl +
      this.config.apikey +
      "&origin=" +
      this.config.origin +
      "&destination=" +
      this.config.destination;
    var iframe = document.createElement("IFRAME");
    iframe.style = this.config.style;
    iframe.width = 200;
    iframe.height = 400;
    iframe.src = fullyBuiltURL;
    return iframe;
  }
});
