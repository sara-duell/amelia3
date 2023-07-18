var txt;
function preload() {
    txt = loadStrings("test.txt");
  }

  function setup () {
noCanvas();
    // console.log(txt);
  let c = createP(join (txt, "<br/>"));
  c.parent('text');
    
  }
