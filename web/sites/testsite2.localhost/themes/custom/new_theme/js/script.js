
(function($) {
  $(document).ready(function () {
    
  });

  Drupal.behaviors.new_theme = {
    attach: function(settings, context) {
      //console.log(context);

    }
  };  
})(jQuery);

(function($, Drupal, window, document, undefined) {
  $(document).ready(function () {
    console.log(Drupal);
    $('a[href="/user/logout"]').click(function(e){
            if(!confirm("Are you sure you want to log out?")) { e.preventDefault(); }
        });
/*   $('a[href$="logout"]').click(function (){
        //$(this).removeClass('confirm');
            $(this).text("Are you sure?");
            //$(this).unbind();
            alert('hi');
            return false;

      });*/
  });
})(jQuery, Drupal, this, this.document);