var converter = new showdown.Converter();

window.onload = function() {
  renderNote();
};

function renderNote() {
  text = document.getElementById('pad').value;
  html = converter.makeHtml(text);
  document.getElementById('markdown').innerHTML = html;
}
