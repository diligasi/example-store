(function($){
  $(function(){

    $('.button-collapse').sideNav();

    $(document).on('submit', 'form#contactForm', function(e) {
      e.preventDefault();
      // var _url = 'http://192.168.0.111:3001/contacts';
      var _url = 'https://https://dili-user-tracker.herokuapp.com/contacts';
      $.ajax({
          type: 'POST',
          url: _url,
          data: $(this).serialize(),
          success: function(data) {
            alert('Operação realizada com sucesso.');
            window.location.reload();
          },
          error: function(el) {
            console.log('***********************************');
            console.log(JSON.stringify(el));
            console.log('***********************************');
          }
      });
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space