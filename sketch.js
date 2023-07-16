var txt;
function preload() {
    txt = loadStrings("test.txt");
  }

  function setup () {
noCanvas();
    // console.log(txt);
    createP(join (txt, "<br/>"));
  
  }
