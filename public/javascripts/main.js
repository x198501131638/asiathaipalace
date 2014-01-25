var myCodeMirror = CodeMirror(document.getElementById("editor1"), {
  value: store.data1,
  mode:  "clojure",
  theme: "default",
  readOnly: true
});

var myCodeMirror = CodeMirror(document.getElementById("editor2"), {
  value: store.data2,
  mode:  "clojure",
  theme: "default",
  readOnly: true
});
