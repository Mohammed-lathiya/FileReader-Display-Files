jQuery('input#mepr_upload_your_certificate1').on('change', function(){
      // jQuery(this)[0].files[0];
      var file = jQuery(this).get(0).files[0];
      if(file){
          var reader = new FileReader();
          reader.onload = function(){
              if(jQuery('#mepr_certificate').length > 0)
              { 
                  jQuery('#mepr_certificate').attr('src',reader.result);
              }else{
                  jQuery(".mepr_mepr_upload_your_certificate").append('<img class="mepr_certificate" src="'+reader.result+'" style="height: 100px; width: 100px;"></img>');
              }
          }
          reader.readAsDataURL(file);
      }
  });
