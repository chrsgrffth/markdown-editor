document.addEventListener('DOMContentLoaded', function() {

  editor.init();

});

var editor = {

  editor: document.getElementById('editor'),
  output: document.getElementById('output'),

  init: function () {

    this.output.textContent = this.editor.innerHTML

    this.editor.contentEditable = true
    this.editor.focus()

    this.editor.addEventListener('keypress', (e) => {
      this.output.textContent = e.currentTarget.innerHTML
    })
  }

}
