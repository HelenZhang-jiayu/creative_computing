$("#btn1").click(function() {console.log("btnl is clicked!");});
$("#button").hover(function(){
 $("#target").prepend("hover ");});

$("#button").hover(function(){
  $("#target").prepend("in ");
},function(){
  $("#target").prepend("out ");
});
$("#button").click(function(){
 $("#target").append("clicked! ");
});