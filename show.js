$(function(){
  var source = $("#api-template").html();
  var template = Handlebars.compile(source);
  var my_regex = /[0-9]+$/
  var id = my_regex.exec(window.location.search)[0];
  $.ajax({
    url: "http://localhost:3000/api/products/" + id,
  }).done(function(data){
    console.log(id);
    $('.content').append(template(data));
  });
});
