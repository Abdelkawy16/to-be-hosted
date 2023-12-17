$(document).ready(function() {
    $("#signup").click(function(){
        $("#signin-tab").css("display", "none");
        $("#signup").css("color", "#47C1B9");
        $("#signin").css("color", "#000");
        $("#signup-tab").css("display", "");
    }); 
  
    $("#signin").click(function() {
        $("#signup-tab").css("display", "none");
        $("#signin").css("color", "#47C1B9");
        $("#signup").css("color", "#000");
        $("#signin-tab").css("display", "");
    });

    $("#signup-btn").click(function() {
        
        window.location = './design.html'
    });
});

