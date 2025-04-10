console.log("let's see if this remains in your code");
console.log("i wanted to keep this in 'cause it's fun :D");

$(function(){
    let corner = "";

    $(document).mousemove(function(event){
        // Tracks where the mouse is relative to the page
        let x = event.pageX;
        let y = event.pageY;
        let screenX = $(document).width();
        let screenY = $(document).height();

        // If x/y is in the FIRST 25% of the screen's width/height...
        let threshold1 = 0.25;
        // If x/y is in the LAST 25% of the screen's width/height...
        let threshold2 = 0.75;

        // Testing if it logs the locations correctly
        // console.log(x + ", " + y);
        $("#corner-m, #corner-i, #corner-d, #corner-s").mousemove(function(){
            if (x <= screenX*threshold1 && y <= screenY*threshold1){
                coords ="top left";
    
                $("#title1").html("Meeting ");
                $("#title2").html("Info:");
                $("#info1").html("Date,");
                $("#info2").html("Time, Location");
            } else if (x >= screenX*threshold2 && y <= screenY*threshold1){
                coords ="top right";
    
                $("#title1").html("About the ");
                $("#title2").html("Speaker:");
                $("#info1").html("Image");
                $("#info2").html("Website Link");
            } else if (x <= screenX*threshold1 && y >= screenY*threshold2){
                coords ="bottom left";
    
                $("#title1").html("About the ");
                $("#title2").html("Lecture:");
                $("#info1").html("Lecture Title");
                $("#info2").html("Text");
            } else if (x >= screenX*threshold2 && y >= screenY*threshold2){
                coords ="bottom right";
    
                $("#title1").html("About the ");
                $("#title2").html("Speaker:");
                $("#info1").html("Bio");
                $("#info2").html("Text");
            } else {
                coords = "n/a";
    
                $("#title1").html("Beyond ");
                $("#title2").html("Bias:");
                $("#info1").html("Building inclusive global creative collaboration");
                $("#info2").html("[International Lecture Series]");
            }
        });
        
        // console.log(coords);


        ///////


        // Tracks where the mouse is relative to the mouseover zones

        // Margins: 50px each
        // Width of touch zone: 25% of the info box width (10% of the page)
        let marginL = 50;
        let marginR = screenX - 50;
        let offsetX = screenX*0.3;
        let zoneW = screenX*0.1;
        // Height of touch zone: 30% of the info box height (12% of the page)
        let marginT = 50;
        let marginB = screenY - 50;
        let offsetY = screenY*0.275;
        let zoneH = screenY*0.12;

        // Testing if it logs the correct coordinates per info box
        if (marginT <= x && x <= marginT + zoneW) {
            // If [TOP margin] <= x <= [TOP margin + Zone height]
            // console.log("Pink/Purple, Left");

        } else if (marginL + offsetX <= x && x <= marginL + offsetX + zoneW) {
            // If [% Displacement from LEFT margin] <= x <= [% Displacement + Zone width]
            // console.log("Pink/Purple, Right");

        } else if (marginR - offsetX - zoneW <= x && x <= marginR - offsetX) {
            // If [% Displacement - Zone width] <= x <= [% Displacement from RIGHT margin]
            // console.log("Magenta/Indigo, Left");
        
        } else if (marginR - zoneW <= x && x <= marginR) {
            // If [Screen width - Zone width - RIGHT margin] <= x <= [RIGHT margin]
            // console.log("Magenta/Indigo, Right");
        }
  
        if (marginT <= y && y <= marginT + zoneH) {
            // If [TOP margin] <= x <= [TOP margin + Zone height]
            // console.log("Pink/Magenta, Top");

        } else if (marginT + offsetY <= y && y <= marginT + offsetY + zoneH) {
            // If [% Displacement from TOP margin] <= x <= [% Displacement + Zone height]
            // console.log("Pink/Magenta, Bottom");

        } else if (marginB - offsetY - zoneH <= y && y <= marginB - offsetY) {
            // If [% Displacement - Zone height] <= x <= [% Displacement from BOTTOM margin]
            // console.log("Purple/Indigo, Top");
        
        } else if (marginB - zoneH <= y && y <= marginB) {
            // If [Screen height - Zone height - BOTTOM margin] <= x <= [RIGHT margin]
            // console.log("Purple/Indigo, Bottom");
        }


        // Returns which corner the mouse is in
        if (marginT <= x && x <= marginT + zoneW && marginT <= y && y <= marginT + zoneH) {
            corner = "Pink, Top Left";
        } else if (marginL + offsetX <= x && x <= marginL + offsetX + zoneW && marginT <= y && y <= marginT + zoneH) {
            corner = "Pink, Top Right";
        } else if (marginT <= x && x <= marginT + zoneW && marginT + offsetY <= y && y <= marginT + offsetY + zoneH) {
            corner = "Pink, Bottom Left";
        } else if (marginL + offsetX <= x && x <= marginL + offsetX + zoneW && marginT + offsetY <= y && y <= marginT + offsetY + zoneH) {
            corner = "Pink, Bottom Right";


        } else if (marginR - offsetX - zoneW <= x && x <= marginR - offsetX && marginT <= y && y <= marginT + zoneH) {
            corner = "Magenta, Top Left";
        } else if (marginR - zoneW <= x && x <= marginR && marginT <= y && y <= marginT + zoneH) {
            corner = "Magenta, Top Right";
        } else if (marginR - offsetX - zoneW <= x && x <= marginR - offsetX && marginT + offsetY <= y && y <= marginT + offsetY + zoneH) {
            corner = "Magenta, Bottom Left";
        } else if (marginR - zoneW <= x && x <= marginR && marginT + offsetY <= y && y <= marginT + offsetY + zoneH) {
            corner = "Magenta, Bottom Right";

            
        } else if (marginT <= x && x <= marginT + zoneW && marginB - offsetY - zoneH <= y && y <= marginB - offsetY) {
            corner = "Purple, Top Left";
        } else if (marginL + offsetX <= x && x <= marginL + offsetX + zoneW && marginB - offsetY - zoneH <= y && y <= marginB - offsetY) {
            corner = "Purple, Top Right";
        } else if (marginT <= x && x <= marginT + zoneW && marginB - zoneH <= y && y <= marginB) {
            corner = "Purple, Bottom Left";
        } else if (marginL + offsetX <= x && x <= marginL + offsetX + zoneW && marginB - zoneH <= y && y <= marginB) {
            corner = "Purple, Bottom Right";

            
        } else if (marginR - offsetX - zoneW <= x && x <= marginR - offsetX && marginB - offsetY - zoneH <= y && y <= marginB - offsetY) {
            corner = "Indigo, Top Left";
        } else if (marginR - zoneW <= x && x <= marginR && marginB - offsetY - zoneH <= y && y <= marginB - offsetY) {
            corner = "Indigo, Top Right";
        } else if (marginR - offsetX - zoneW <= x && x <= marginR - offsetX && marginB - zoneH <= y && y <= marginB) {
            corner = "Indigo, Bottom Left";
        } else if (marginR - zoneW <= x && x <= marginR && marginB - zoneH <= y && y <= marginB) {
            corner = "Indigo, Bottom Right";    
        }

        // if (corner != "") {
        //     console.log(corner);
        // }

        $(".event").mouseleave(function(){
            $(".pink.title").html("Dr. Maria-Carolina Cambre");
            $(".magenta.title").html("Dr. Isabel Machado");
            $(".purple.title").html("Daniel Wildberger");
            $(".indigo.title").html("Dr. Shima Rezaei Rashnoodi");
            $(".pink2.info1, .magenta2.info1, .purple2.info1, .indigo2.info1").html("");
            $(".pink2.info2, .magenta2.info2, .purple2.info2, .indigo2.info2").html("");
            $(".pink2.info3, .magenta2.info3, .purple2.info3, .indigo2.info3").html("");

            $(this).css("overflow", "hidden");
        });

        $(".event").mouseenter(function(){
            coords = "n/a";
    
            $("#title1").html("Beyond ");
            $("#title2").html("Bias:");
            $("#info1").html("Building inclusive global creative collaboration");
            $("#info2").html("[International Lecture Series]");
        });

        // Info box #1 mouse coordinates
        $("#maria-carolina-cambre").mousemove(function(){
            if (corner == "Pink, Top Left") {
                $(".pink.title").html("Info:");
                $(".pink2.info1").html("January 28th, 2025");
                $(".pink2.info2").html("9:00am EST");
                $(".pink2.info3").html("Virtual (Teams)");
                
                $(this).css("overflow", "hidden");

            } else if (corner == "Pink, Top Right") {
                $(".pink.title").html("About the Speaker:");
                $(".pink2.info1").html("https://www.ocadu.ca/sites/default/files/2024-12/Picture2.png");
                $(".pink2.info2").html("Concordia University Profile");
                $(".pink2.info3").html("https://www.concordia.ca/faculty/carolina-cambre.html");

                $(this).css("overflow", "hidden");

            } else if (corner == "Pink, Bottom Left") {
                $(".pink.title").html("Lecture:");
                $(".pink2.info1").html("Contesting the colonial eye: “Burning the Mona Lisa”");
                $(".pink2.info2").html("This workshop/discussion will present ideas to work through and think about everyday resistant or subversive interactions to the colonial difference taking into consideration the affordances of international collaboration. Contesting the coloniality of how our subjectivities are being produced through capitalistic culture, I follow Argentine feminist scholar Maria Lugones in looking at “the liberation, as both adaptive and tension between subjectification and active subjectivity, that minimal sense of agency of the modern subject” (Lugones 2003).");
                $(".pink2.info3").html("");

                $(this).css("overflow-y", "scroll");

            } else if (corner == "Pink, Bottom Right") {
                $(".pink.title").html("Bio:");
                $(".pink2.info1").html("Cambre is an Argentine/Canadian scholar who explores vernacular visual expression asking: How do people produce and direct the visual space. How is the image a doing? What are the social and cultural work/ings of images? – Ideas explored in her latest article, “The Atopic Image” (Visual Studies June 2023: 38:2, 199-202). Lately, her research focuses on visual processes of legitimation, representation of online sharing, the visual politics of identity, and polymedia literacies.");
                $(".pink2.info2").html("");
                $(".pink2.info3").html("");

                $(this).css("overflow-y", "scroll");

            } else if (corner == "") {
                $(".pink.title").html("Dr. Maria-Carolina Cambre");
                $(".pink2.info1").html("");
                $(".pink2.info2").html("");
                $(".pink2.info3").html("");

                $(this).css("overflow", "hidden");
            }
        });

        // Info box #2 mouse coordinates
        $("#isabel-machado").mousemove(function(){
            if (corner == "Magenta, Top Left") {
                $(".magenta.title").html("Info:");
                $(".magenta2.info1").html("February 5th, 2025");
                $(".magenta2.info2").html("1:00pm EST");
                $(".magenta2.info3").html("Virtual (Teams)");
                
                $(this).css("overflow", "hidden");

            } else if (corner == "Magenta, Top Right") {
                $(".magenta.title").html("About the Speaker:");
                $(".magenta2.info1").html("https://www.ocadu.ca/sites/default/files/2024-12/Picture3.png");
                $(".magenta2.info2").html("machadoisabel.com");
                $(".magenta2.info3").html("https://www.machadoisabel.com/");

                $(this).css("overflow", "hidden");

            } else if (corner == "Magenta, Bottom Left") {
                $(".magenta.title").html("Lecture:");
                $(".magenta2.info1").html("Fostering Inclusive Communities in the Classroom through Project-Driven Courses.");
                $(".magenta2.info2").html("Isabel Machado will discuss the challenges and positive results of building inclusive classroom communities through public-facing collaborative projects by applying her research methodology to her course design. “Co-documenting” is the process of establishing partnerships and collaborations so that the research is relevant and accessible to the people involved. It is also an attempt to dismantle epistemic hierarchies and the separation between research and academic “communities.” An important element of this process is thinking about how different people can produce and share knowledges together, even when they come from diverse backgrounds and are dealing with delicate subjects. Building a project together fosters collaboration and helps the students realize that everyone can make valuable contributions to our learning community(ies) while making theory more tangible, translatable, and shareable. Yet, this is not always a smooth experience as it also involves finding together ways to deal with fears and discomfort.");
                $(".magenta2.info3").html("");

                $(this).css("overflow-y", "scroll");

            } else if (corner == "Magenta, Bottom Right") {
                $(".magenta.title").html("Bio:");
                $(".magenta2.info1").html("Isabel Machado is a Brazilian cultural historian whose work often crosses national and disciplinary boundaries. She specializes in the fields of Gender and Sexuality Studies and Celebration Studies. She serves as co-editor-in-chief for the Journal of Festival Studies and as a host for the New Books Network Podcast and is currently a Lecturer at the University of British Columbia’s Institute for Gender, Race, Sexuality and Social Justice.");
                $(".magenta2.info2").html("");
                $(".magenta2.info3").html("");

                $(this).css("overflow-y", "scroll");

            } else if (corner == "") {
                $(".magenta.title").html("Dr. Isabel Machado");
                $(".magenta2.info1").html("");
                $(".magenta2.info2").html("");
                $(".magenta2.info3").html("");

                $(this).css("overflow", "hidden");
            }
        });

        // Info box #3 mouse coordinates
        $("#daniel-wildberger").mousemove(function(){
            if (corner == "Purple, Top Left") {
                $(".purple.title").html("Info:");
                $(".purple2.info1").html("March 5th, 2025");
                $(".purple2.info2").html("12:00pm EST");
                $(".purple2.info3").html("Virtual (Teams)");
                
                $(this).css("overflow", "hidden");

            } else if (corner == "Purple, Top Right") {
                $(".purple.title").html("About the Speaker:");
                $(".purple2.info1").html("https://www.ocadu.ca/sites/default/files/2024-12/Picture4.png");
                $(".purple2.info2").html("danielwildberger.com");
                $(".purple2.info3").html("https://www.danielwildberger.com/");

                $(this).css("overflow", "hidden");

            } else if (corner == "Purple, Bottom Left") {
                $(".purple.title").html("Lecture:");
                $(".purple2.info1").html("Branches: Weaving Stories in Design and Education");
                $(".purple2.info2").html("This presentation is a collaboration between Daniel Wildberger and Erik Páez, sparked by a central question: How might a former student and teacher co-design a talk that weaves their histories in design and education together? To visualize their intertwined journeys, Daniel and Erik investigate the shifting dynamics of teacher-student collaborations, exploring these narratives through multiple lenses: over time (spanning eight years), across different spaces (Mexico, USA, Brazil, and Canada), and through evolving roles. Through the creation of this metapresentation, they aim to foster a space for mutual reflection, where their individual contributions coalesce into the fabric of a collective knowledge.");
                $(".purple2.info3").html("");

                $(this).css("overflow-y", "scroll");

            } else if (corner == "Purple, Bottom Right") {
                $(".purple.title").html("Bio:");
                $(".purple2.info1").html("Born in Brazil, Daniel Wildberger is a multi-disciplinary designer and educator with a focus on dynamic media, interactive design, motion graphics, experience design, and visual communication. He holds a B.A. in Communication Design and Advertising from Universidade Católica do Salvador, as well as an MA and MFA from the University of Iowa, USA.");
                $(".purple2.info2").html("");
                $(".purple2.info3").html("");

                $(this).css("overflow-y", "scroll");

            } else if (corner == "") {
                $(".purple.title").html("Daniel Wildberger");
                $(".purple2.info1").html("");
                $(".purple2.info2").html("");
                $(".purple2.info3").html("");

                $(this).css("overflow", "hidden");
            }
        });

        // Info box #4 mouse coordinates (CHANGE DOCUMENT TO BOX ID)
        $("#shima-rezaei-rashnoodi").mousemove(function(){
            if (corner == "Indigo, Top Left") {
                $(".indigo.title").html("Info:");
                $(".indigo2.info1").html("March 26, 2025");
                $(".indigo2.info2").html("9:00am EST");
                $(".indigo2.info3").html("Virtual (Teams)");
                
                $(this).css("overflow", "hidden");

            } else if (corner == "Indigo, Top Right") {
                $(".indigo.title").html("About the Speaker:");
                $(".indigo2.info1").html("https://www.ocadu.ca/sites/default/files/2024-12/Picture5.png");
                $(".indigo2.info2").html("Breda University Profile");
                $(".indigo2.info3").html("https://pure.buas.nl/en/persons/shima-rezaei-rashnoodi");

                $(this).css("overflow", "hidden");

            } else if (corner == "Indigo, Bottom Left") {
                $(".indigo.title").html("Lecture:");
                $(".indigo2.info1").html("Being There: A Virtual Reality Museum of Migrant Women");
                $(".indigo2.info2").html("This presentation introduces Being There, a virtual reality museum that highlights the stories of migrant women from Latin America, created through a COIL project. Students from BUas (The Netherlands) and UDEM (Mexico) worked together in a multidisciplinary effort to design an immersive VR experience, partnering with the Lamentos Escuchados Migration Center in Monterrey, Mexico. The project brings to life the personal journeys of migrant women as they travel through Mexico toward the United States, focusing on their challenges, aspirations, and their concept of “home.” By digitally portraying a mother and child, the VR museum aims to foster empathy and raise awareness about the realities migrant women face. The presentation will explore the international collaboration, creative process, challenges encountered, and the project’s broader goal of building understanding and empathy for migrant women.");
                $(".indigo2.info3").html("");

                $(this).css("overflow-y", "scroll");

            } else if (corner == "Indigo, Bottom Right") {
                $(".indigo.title").html("Bio:");
                $(".indigo2.info1").html("Shima Rezaei Rashnoodi is a senior researcher and lecturer at Breda University of Applied Sciences in the Netherlands, specializing in immersive media particularly spatial experiences in Virtual Reality (VR) and empathy. With a background in architecture and participatory research, she has worked on projects around home in displacement and inclusive design.");
                $(".indigo2.info2").html("");
                $(".indigo2.info3").html("");

                $(this).css("overflow-y", "scroll");

            } else if (corner == "") {
                $(".indigo.title").html("Dr. Shima Rezaei Rashnoodi");
                $(".indigo2.info1").html("");
                $(".indigo2.info2").html("");
                $(".indigo2.info3").html("");

                $(this).css("overflow", "hidden");
            }
        });
    });
});


// OUTDATED CODE BC I MISUNDERSTOOD WHAT THE "CURSOR" INTERACTION MEANT
/*
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
        // For the ones aligned to the right, set the left alignment to 100% - width %  
        // For the ones aligned to the bottom, set the top alignment to 100% - height%  

        $(".event").animate({width: "45%"}, "slow", "swing");
        $(".event").animate({height: "33%"}, "slow", "swing");

        // "" --> Whatever default is in the stylesheet
        $(".pink2.info1, .pink2.info2, .location, .info1, .info2").css("font-size", "");
        $(".pink2.info1, .pink2.info2, .location, .info1, .info2").css("font-weight", "");
        $("img").css("width", "");

        zoom = false;
    })

$(".event").resizable();

$(".event").draggable();
    
// Dictates the corresponding cursor for zooming
$(".pink2.info1, .pink2.info2, .location, .info1, .info2, img").hover(function(){
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

$("a").hover(function(){
    $(this).animate({color: "rgb(255, 255, 255)", opacity: "0.75"});
}, function(){
    $(this).css("color", "");
    $(this).css("opacity", 1.0);
});

// Effect of "zooming in/out" of the text
$(".pink2.info1, .pink2.info2, .location, .info1, .info2").click(function(){
    if (!zoom) {
        $(this).css("font-size", "20px");
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

*/