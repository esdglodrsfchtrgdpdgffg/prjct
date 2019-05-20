var rageurls=["https://thumbs.gfycat.com/NervousTartJumpingbean-max-1mb.gif","https://media1.tenor.com/images/77f6bebe89f08685a49e5b09b961c019/tenor.gif?itemid=4485294","https://i.imgur.com/doC7DBk.png"];
var sadurls=["https://media1.tenor.com/images/a639f449f9876924476241c4de7ad3c2/tenor.gif?itemid=8600453","https://media.tenor.com/images/2cb406e7619b591b7f7ca89b51989f57/tenor.gif","https://www.handwerk.com/sites/default/files/2017-08/hide-pain-harold-title-red%20-web.jpg"];
var tiredurls=["https://i.ytimg.com/vi/SMn2s89bibI/maxresdefault.jpg","https://i.kym-cdn.com/photos/images/newsfeed/001/225/928/a11.jpg","https://media1.tenor.com/images/2d7f787c0eb9201b379365cbe175a8f7/tenor.gif?itemid=5120823"];
var happyurls=["https://styles.redditmedia.com/t5_rvesz/styles/communityIcon_5kqpeimzeq021.jpeg?format=pjpg&s=1cbc97ca058305e583164a6fe8514010dbdc4d94","https://media2.giphy.com/media/l0HlSH2gsSrxJySnS/giphy.gif","https://thumbs.gfycat.com/PointlessShimmeringIndiancow-size_restricted.gif"];
function img(blankurl){
    $("#imgs").text("");
    $("#imgs").append("<img src='"+blankurl[0]+"'>");
    $("#imgs").append("<img src='"+blankurl[1]+"'>");
    $("#imgs").append("<img src='"+blankurl[2]+"'>");
}
$("button").click(function(){
   var emotion=$("#form").val();
   if (emotion==="jovial") {
      $("body").css("background-color","yellow");
      img(happyurls);
   }else if (emotion==="melancholy"){
      $("body").css("background-color","blue");
      img(sadurls); 
   }else if (emotion==="enraged"){
      $("body").css("background-color","red");
      img(rageurls);
   }else if (emotion==="exhausted"){
      $("body").css("background-color","gray");
      img(tiredurls); 
   }else {
       alert("please enter jovial, melancholy, enraged, exhausted");
   }
});

