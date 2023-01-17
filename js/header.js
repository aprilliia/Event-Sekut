
function ubah() {
  var x = document.getElementById("samping");
  if (x.className === "tengah") {
    x.className += "garis";
  } else {
    x.className = "tengah";
  }
}
