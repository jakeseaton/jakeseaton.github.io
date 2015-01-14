// Javascript for jakeseaton.net
var currently_open = "";
var opened = false;

$(document).ready(function(){
    // click on a circle  
    $(".box").click(function(){


      if ($(this).hasClass("box")){
        if (opened == false) {
          // it's no longer a box
          $(this).removeClass("box");
          $(this).addClass("open");

          // remove all boxes
          $(".box").css("display", "none");
        
          // add a partition
          $("#partition").removeClass("invisible");
          //$("#partition").html("<br><br><br><br>"); 

          // expand to the bottom
          expand(this);

          // reveal the content
          reveal(this.id);

          // set opened
          opened = true;

          // it's open
          // $(this).addClass("open");
          
          currently_open = this.id;


        }
      
      }
      
    });


  // contract when up-circle clicked
  $(".up-circle").click(function(){
    if (opened == true){
      restore();
      opened = false;
      currently_open = "";
      // opened = false;
    }
    
  });

  $("circle").hover(function(){
    if ($(this).css("opacity")==1){
      $(this).fadeTo("slow",.5);
      }
    }
  );
  $("circle").mouseleave(function(){
    if($(this).css("opacity")==.5){
      $(this).fadeTo("slow",1);
    }
  });
  

});

function restore()
{


  switch(currently_open){
    case "red":
      $("#about").addClass("invisible");
      break;
    case "yellow":
      $("#media").addClass("invisible");
      break;
    case "blue":
      $("#blog").addClass("invisible");
      break;
  }

  var current = "#" + currently_open;  

// reduce the height
  $(current).animate({
    height:"0px"
   }, 200,function(){
          // make it invisible for a sec
          $(current).addClass("invisible");

          $(current).css({
            'height':"80px",
            'width' :"80px",
            "border-radius":"40px",
            "opacity":".5"

          });

          // driver roll up the partition please
          $("#partition").addClass("invisible"); 

          // it's no longer open
          $(current).removeClass("open");

          // identify it as a box again
          $(current).addClass("box");

          $(".box").removeClass("invisible");

          // display boxes
          $(".box").css({"display":"inline-block"});
        
    });
}

function reveal(box_id){
  switch(box_id){
    case "red":
      $("#about").removeClass("invisible");
      break;
    case "yellow":
      $("#media").removeClass("invisible");
      break;
    case "blue":
      $("#blog").removeClass("invisible");
      break;
  }
}

function expand(element)
{
    $(element).removeAttr("style");
    // $(element).css({"width":"100%"});
    $(element).animate({
      height:"+=500px"
    });
    $(element).fadeTo("slow",1);
}

function fade(element){
  $(element).fadeTo("slow",.5);
}
function sharpen(element){
  $(element).fadeTo("slow",1);
}
