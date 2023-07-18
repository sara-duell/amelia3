var txt;
function preload() {
    txt = loadStrings("test.txt");
  }

  function setup () {
noCanvas();
    // console.log(txt);
let elt = document.getElementById('text');
let intro = createDiv(join (txt, "<br/>"));
intro.parent(elt);
    
  }
