$("button").click(function(){
  $("h1").css("color","purple");
});

$(document).keyPress(function(event){
  console.log(event.key);
});

$("h1").on("mouseover",function(){
  $("h1").css("color","purple");
})