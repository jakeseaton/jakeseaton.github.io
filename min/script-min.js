function lower_partition(){$("#partition").animate({height:"+=500px"},200)}function expand(e){switch(fade_out(e),lower_partition(),$("#partition").removeClass("invisible"),e.id){case"red":$("#abt").removeClass("invisible-abt");break;case"yellow":$("#media").removeClass("invisible-media");break;case"blue":$("#blog").removeClass("invisible-blog")}$("#mobile-space").addClass("invisible"),opened=!0,currently_open=e.id}function raise_partition(){$("#partition").addClass(currently_open),$("#partition").animate({height:"-=500px"},200,function(){$("#partition").removeClass(currently_open),currently_open=""})}function restore(){switch(fade(".box"),raise_partition(),currently_open){case"red":$("#abt").addClass("invisible-abt");break;case"yellow":$("#media").addClass("invisible-media");break;case"blue":$("#blog").addClass("invisible-blog")}$("#mobile space").removeClass("invisible"),opened=!1}function fade(e){$(e).fadeTo("fast",.5)}function sharpen(e){$(e).fadeTo("fast",1)}function fade_out(e){$(e).fadeTo("fast",0)}function debug(){console.log("got to here")}var opened=!1,currently_open="",current="#"+currently_open;$(document).ready(function(){$(".box").hover(function(){0==opened&&sharpen(this)},function(){0==opened&&fade(this)}),$(".box").click(function(){$(this).hasClass("box")&&(0==opened?expand(this):this.id!=currently_open&&restore())}),$(".up-circle").hover(function(){sharpen(".up-circle")},function(){fade(".up-circle")}),$(".up-circle").click(function(){1==opened&&restore()})});