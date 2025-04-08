console.log("let's see if this remains in your code");
console.log("i wanted to keep this in 'cause it's fun :D");

$(function(){

    // Hover to show you can interact with this
    $("#titles").hover(function(){        
        $(this).animate({top: "37.5%", lineHeight: "15px"}, "swing");
        $("span.pink").animate({fontSize: "45px", color: "rgb(182, 44, 116)"}, 200, "swing");
        $("span.magenta").animate({fontSize: "45px", color: "rgb(186, 51, 163)"}, 300, "swing");
        $("i.purple").animate({fontSize: "25px", color: "rgb(121, 38, 147)"}, 400, "swing");
        $("h2.indigo").animate({fontSize: "25px", color: "rgb(102, 51, 185)"}, 500, "swing");
    }, function(){
        $(this).animate({top: "36.5%", lineHeight: "20px"}, "swing");
        $("span.pink").animate({fontSize: "55px", color: "rgb(208, 125, 168)"}, 500, "swing");
        $("span.magenta").animate({fontSize: "55px", color: "rgb(228, 150, 215)"}, 400, "swing");
        $("i.purple").animate({fontSize: "30px", color: "rgb(207, 152, 224)"}, 300, "swing");
        $("h2.indigo").animate({fontSize: "30px", color: "rgb(168, 136, 219)"}, 200, "swing");
    });

    $("h1").hover(function(){
        $(this).css("cursor", "help");
    });
    $("h2").hover(function(){
        $(this).css("cursor", "pointer");
    });

    let zoom = false;
    // Sets everything to its CSS defaults
    $("#titles").click(function(){

        // Goes back to their respective corners/dimensions
        $("#maria-carolina-cambre").animate({top: "0", left: "0"}); 
        $("#isabel-machado").animate({top: "0", left: "55%"}); 
        $("#daniel-wildberger").animate({top: "67%", left: "0"}); 
        $("#shima-rezaei-rashnoodi").animate({top: "67%", left: "55%"});  

        $(".event").animate({width: "45%"}, "slow", "swing");
        $(".event").animate({height: "33%"}, "slow", "swing");

        // "" --> Whatever default is in the stylesheet
        $(".date, .time, .location, .info1, .info2").css("font-size", "");
        $(".date, .time, .location, .info1, .info2").css("font-weight", "");
        $("img").css("width", "");

        zoom = false;
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
    $(".date, .time, .location, .info1, .info2, img").hover(function(){
        if (!zoom) {
            $(this).css("cursor", "zoom-in");
        } else {
            $(this).css("cursor", "zoom-out");
        }    
        $(this).css("font-weight", "bold");
        $(this).animate({color: "rgb(255, 171, 255)", opacity: "0.75"});

    }, function(){
        $(".pink2").animate({color: "rgb(182, 44, 116)", opacity: "1.0"}, 100);
        $(".magenta2").animate({color: "rgb(186, 51, 163)", opacity: "1.0"}, 100);
        $(".purple2").animate({color: "rgb(121, 38, 147)", opacity: "1.0"}, 100);
        $(".indigo2").animate({color: "rgb(102, 51, 185)", opacity: "1.0"}, 100);

        if (!zoom) {
            $(this).css("font-weight", "normal");
        } else {
            $(this).css("font-weight", "bold");
        }  
        
    });

    // Effect of "zooming in/out" of the text
   $(".date, .time, .location, .info1, .info2").click(function(){
        if (!zoom) {
            $(this).css("font-size", "18px");
            $(this).css("cursor", "zoom-out");
            $(this).css("font-weight", "bold");
            zoom = true;
        } else {
            $(this).css("font-size", "");
            $(this).css("cursor", "zoom-in");
            $(this).css("font-weight", "normal");
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

    // Toggles scroll (alternative to drag + resize)
    let scroll = false;
    $(".handle2").hover(function(){
        if (!scroll) {
            $(".handle2").animate({opacity: "0.5", width: "25px", height: "25px"}, "swing");
        } else {
            $(".handle2").animate({opacity: "1.0", width: "25px", height: "25px"}, "swing");
        }
    }, function(){
        if (!scroll) {
            $(".handle2").animate({opacity: "1.0", width: "20px", height: "20px"}, "swing");
        } else {
            $(".handle2").animate({opacity: "0.5", width: "20px", height: "20px"}, "swing");
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