// Stuart Daniells
// c0829441

$(document).ready(function(){
   var searchTerm;
   $("#btnSearch").click(function() {
      searchTerm = "";

      if ($("#searchInput").val() == "") {
         alert("You must enter one or more tags!"); 
      }
      else {
         searchTerm = $("#searchInput").val();
         // console.log(searchTerm)

         var url = "http://api.flickr.com/services/feeds/" +
                   "photos_public.gne?format=json&jsoncallback=?" +
                   "&tags=" + searchTerm + "&tagmode=all";

         $.getJSON(url, function(data){
            var html = "";
            $.each(data.items, function(i, item){
               html += "<h2>" + item.title + "</h2>";
               html += "<img src=" + item.media.m + ">";
               html += "<p><b>Tags: </b>" + item.tags + "</p>";
               html += "<hr>";
            });

            $("#flickr_display").html(html);
         });
      }
   });
});




