(function($){
  $(function(){

    $('.button-collapse').sideNav();

    $(document).on('submit', 'form#contactForm', function(e) {
      e.preventDefault();
      var valid = true;

      $(this).find(':input[type!=hidden]').each(function() {
          if ($(this).val() === '') {
              valid = false;
              return valid;
          }
      });

      if (valid) {
          validateEmailAndContinue($(this));
      } else {
          alert('Por favor preencha todos os campos abaixo.');
      }
    });

    function validateEmailAndContinue($form) {
        $.ajax({
            type: 'POST',
            // url: 'http://192.168.0.111:3001/verify_email',
            url: 'https://dili-user-tracker.herokuapp.com/verify_email',
            data: { email: $('#contact-email').val() },
            success(data) {
                if (data.valid) {
                    // var _url = 'http://192.168.0.111:3001/contacts';
                    var _url = 'https://dili-user-tracker.herokuapp.com/contacts';
                    $.ajax({
                        type: 'POST',
                        url: _url,
                        data: $form.serialize(),
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
                } else {
                    alert('E-mail já cadastrado.');
                }
            },
            error(el) {
                console.log('***********************************');
                console.log(JSON.stringify(el));
                console.log('***********************************');
            }
        });
    }
  }); // end of document ready
})(jQuery); // end of jQuery name space