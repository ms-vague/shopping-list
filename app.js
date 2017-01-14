$("button").on("click", function (event){
  event.preventDefault();
  var listItem = $('input').val();
  // add to shopping list //
   
  $(".shopping-list").append("<li>" + listItem + "</li>");
});
