$( document ).ready(function() {
  console.log( "the html has loaded and my script file is properly loaded into my website code" );

  var videos =["tree.mp4","water.mp4"];
  var d = new Date();
  var n = d.getHours()
  
  console.log(n + "this is the hour of day that was detected")
  
  if(n <= 11)
  {console.log("It's the morning!")
    var yourElement = document.getElementById('videorotator');
  yourElement.setAttribute( 'src', "tree.mp4"); }

if(n >= 12 && n < 15)
{console.log("It's the afternoon!")
  var yourElement = document.getElementById('videorotator');
yourElement.setAttribute( 'src', "water.mp4"); }

if(n >= 15)
{console.log("the time that my code detected is what i am calling an evening time!")
var yourElement = document.getElementById('videorotator');
yourElement.setAttribute( 'src', "tree.mp4"); }

//   var morning = "tree.mp4";
//   var afternoon = "water.mp4";
//   var night = "night.gif";

//   function checkHour() {
//       var d = new Date();
//       var n = d.getHours()
//       // var n = 11;
//       // console.log(d.getHours);

// // var yourElement = document.getElementById('video_tag');
// // if(n >= 12 && n < 16)
// // {yourElement.setAttribute( 'src', 'water.mp4');  }

//       console.log(n + "this is the hour of day that was detected")
//     if(n <= 11){
//         console.log("It's the morning!")
//         $('body').css('background-image', 'url(' + morning + ')');
//       }
//       if(n >= 12 && n < 16){
//         console.log("It's the afternoon!")
//         $('body').css('background-image', 'url(' + afternoon + ')');
//       }
//       if(n >= 16){
//         console.log("the time that my code detected is what i am calling an evening time!")
//         $('body').css('background-image', 'url(' + night + ')');
//         console.log(night);
//       }

//   }


  // checkHour();
  // console.log($('body').css('background-image'));


});
