$(function(){
  var source = $("#api-template").html();
  var template = Handlebars.compile(source);
  $.ajax({
    url: "http://localhost:3000/api/products/",
  }).done(function(data){
    console.log(window.location.pathname);
    $('.content').append(template(data));
  });
});
