//script.js

window.onload = function() {
//vars
  var showdown =  require('showdown'),
      converter = new showdown.Converter(),
      markdownArea = document.getElementById('markdown'),
      pad = document.getElementById('pad');

//functions
  var textToMarkdown = function() {
    var text = pad.value();
    html = converter.makeHtml(text);
    markdownArea.html = html;
  };

//do:
  pad.addEventListener('text', textToMarkdown);
  textToMarkdown();
  console.log("HELLOOOO");
};
