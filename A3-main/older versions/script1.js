console.log("let's see if this remains in your code");
console.log("i wanted to keep this in 'cause it's fun :D");

$(function(){
    let hold = true;

    $()

    // Hover to show you can interact with this
    $("#titles").hover(function(){        
        // $("h1").animate({fontSize: "45px"}, "slow", "swing");
        // $("h2").animate({fontSize: "25px"}, "slow", "swing");
        $(this).animate({top: "37.5%", lineHeight: "15px"}, "swing");
        $("span.pink").animate({fontSize: "45px", color: "rgb(182, 44, 116)"}, 200, "swing");
        $("span.magenta").animate({fontSize: "45px", color: "rgb(186, 51, 163)"}, 300, "swing");
        $("i.purple").animate({fontSize: "25px", color: "rgb(121, 38, 147)"}, 400, "swing");
        $("h2.indigo").animate({fontSize: "25px", color: "rgb(102, 51, 185)"}, 500, "swing");
    }, function(){
        // $("h1").animate({fontSize: "50px"}, "slow", "swing");
        // $("h2").animate({fontSize: "30px"}, "slow", "swing");
        $(this).animate({top: "36.5%", lineHeight: "20px"}, "swing");
        $("span.pink").animate({fontSize: "55px", color: "rgb(208, 125, 168)"}, 500, "swing");
        $("span.magenta").animate({fontSize: "55px", color: "rgb(228, 150, 215)"}, 400, "swing");
        $("i.purple").animate({fontSize: "30px", color: "rgb(207, 152, 224)"}, 300, "swing");
        $("h2.indigo").animate({fontSize: "30px", color: "rgb(168, 136, 219)"}, 200, "swing");
    });
    $("#titles").mouseleave(function(){
        
    });

    $("h1").hover(function(){
        $(this).css("cursor", "help");
    });
    $("h2").hover(function(){
        $(this).css("cursor", "pointer");
    });

    // Sets everything to its CSS defaults
    $("#titles").click(function(){   
        $(".event").animate({width: "45%"}, "slow", "swing");
        $(".event").animate({height: "33%"}, "slow", "swing");

        // "" --> Whatever default is in the stylesheet
        // Animating them going to their respective corners keeps glitching
        $(".event").css("top", "");
        $(".event").css("bottom", "");
        $(".event").css("left", "");
        $(".event").css("right", "");

        $(".date, .time, .location, .info1, .info2").css("font-size", "");
        $("img").css("width", "");
    })

    // Hover over --> Shows you can grab it
    $(".event").hover(function(){
        $(this).css("cursor", "grab");
    });
    // Grab + click and drag --> Move it around by holding
    $(".event").mousedown(function(){
        $(this).css("cursor", "grabbing");

        $(".event").mouseup(function(){
            $(this).css("cursor", "grab");

        });
    });

    $(".event").draggable();

    $(".event").resizable();


    // Dictates the corresponding cursor for zooming
    let zoom = false;
    $(".date, .time, .location, .info1, .info2, img").hover(function(){
        if (!zoom) {
            $(this).css("cursor", "zoom-in");
        } else {
            $(this).css("cursor", "zoom-out");
        }      
    });
    // Effect of "zooming in/out" of the text
   $(".date, .time, .location, .info1, .info2").click(function(){
        if (!zoom) {
            $(this).css("font-size", "18px");
            $(this).css("cursor", "zoom-out");
            zoom = true;
        } else {
            $(this).css("font-size", "");
            $(this).css("cursor", "zoom-in");
            zoom = false;
        }      
    });
        // Effect of "zooming in/out" of the picture
   $("img").click(function(){
    if (!zoom) {
        $(this).css("width", "90%");
        $(this).css("cursor", "zoom-out");
        zoom = true;
    } else {
        $(this).css("width", "");
        $(this).css("cursor", "zoom-in");
        zoom = false;
    }      
});

    // Toggles scroll (if dragging is too annoying)
    let scroll = false;
    $(".handle2").hover(function(){
        if (!scroll) {
            $(".handle2").animate({opacity: "0.5"}, "swing");
        } else {
            $(".handle2").animate({opacity: "1.0"}, "swing");
        }
    }, function(){
        if (!scroll) {
            $(".handle2").animate({opacity: "1.0"}, "swing");
        } else {
            $(".handle2").animate({opacity: "0.5"}, "swing");
        }
    });

    $(".handle2").click(function(){
        if (!scroll) {
            $(".event").css("overflow-y", "auto");
            $(".handle2").animate({opacity: "0.5"}, "swing");
            scroll = true;
        } else {
            $(".event").css("overflow-y", "hidden");
            $(".handle2").animate({opacity: "1.0"}, "swing");
            scroll = false;
        }   
    });

    // Brings the div to the front if clicked/focused on
    $("#maria-carolina-cambre").mousedown(function(){
        $(this).css("z-index", "2");
        $("#isabel-machado, #daniel-wildberger, #shima-rezaei-rashnoodi").css("z-index", "1");
    });
    $("#isabel-machado").mousedown(function(){
        $(this).css("z-index", "2");
        $("#maria-carolina-cambre, #daniel-wildberger, #shima-rezaei-rashnoodi").css("z-index", "1");
    });
    $("#daniel-wildberger").mousedown(function(){
        $(this).css("z-index", "2");
        $("#maria-carolina-cambre, #isabel-machado, #shima-rezaei-rashnoodi").css("z-index", "1");
    });
    $("#shima-rezaei-rashnoodi").mousedown(function(){
        $(this).css("z-index", "2");
        $("#maria-carolina-cambre, #isabel-machado, #daniel-wildberger").css("z-index", "1");
    });
});