// Stuart Daniells
// c0829441

$(document).ready(function(){
   $.getJSON("http://12.42.204.30:7447/product_info.json", function(data){
      var product_table_data = "";
      var product_carousel_data = "";

      $.each(data, function() {
         $.each(this, function(key, value) {

            // adding the json data to the table
            product_table_data += '<tr>';
            product_table_data += '<td>' + (key+1) + '</td>';
            product_table_data += '<td>' + value.brandName + '</td>';
            product_table_data += '<td>' + value.stockNumber + '</td>';
            product_table_data += '<td>' + value.quantity + '</td>';
            product_table_data += '<td>' + value.size + '</td>';
            product_table_data += '<td>' + value.colours + '</td>';
            product_table_data += '</tr>';

            // adding the json data to the carousel
            if(key <= 4){
               product_carousel_data += `<label id="t-${key + 1}" class="item" for="t-${key + 1}">`;
               product_carousel_data += `<img src="../res/img/blender${key + 1}.jpg" alt="picture">`;
               product_carousel_data += '<p>Brand Name: ' + value.brandName + '</p>';
               product_carousel_data += '<p>Stock Number: ' + value.stockNumber + '</p>';
               product_carousel_data += '<p>Quantity: ' + value.stockNumber + '</p>';
               product_carousel_data += '<p>Size: ' + value.stockNumber + '</p>';
               product_carousel_data += '<p>Colours: ' + value.colours + '</p>';
               product_carousel_data += "</label>";
            }
            
            // for each label tag with t-1, t-2 ... ids add json data
            $("#carousel_json").append(product_carousel_data);

            // clearing the old data for next carousel
            product_carousel_data = "";
         });
         $("#products_json table").append(product_table_data);
      });
   });
});
