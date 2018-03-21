$(document).ready(function(){
    $("#hide_show").click(function(){
        $("nav").toggle();
        if(!($("nav").is(":visible"))){
            $("main").css("grid-column", "1 / -1");
            $("#hide_show").html("Show");
        }else{
            $("main").css("grid-column", "3 / -1");
            $("#hide_show").html("Hide");
        }
    })
})