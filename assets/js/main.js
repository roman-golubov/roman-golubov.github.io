$(function() {
    $('ul.sidebar-nav ul li.active').parent().parent().addClass('active');
    $('ul.sidebar-nav li.active > ul').addClass('expanded');
    $('ul.sidebar-nav li.active > ul').parent().addClass('expanded');


    $('input:radio[name="reason"]').change(function() {
        $('.reason').toggle();
        $('.reasonon').toggle();
    });

    $('input:radio[name="reason2"]').change(function() {
        $('.reason2').toggle();
    });

    $('input:radio[name="reason3"]').change(function() {
        $('.reason3').toggle();
    });

    $('input:radio[name="reason4"]').change(function() {
        $('.reason4').toggle();
    });

    $('input:radio[name="notify"]').change(function() {
        $('.notify').toggle();
    });

    $('input:radio[name="notify4"]').change(function() {
        $('.notify4').toggle();
    });

    $('input:radio[name="notify3"]').change(function() {
        $('.notify3').toggle();
        $('.notify2').toggle();
    });
    
  
      if(window.location.pathname.search('wizard_fr') > 0) { // For FR Wizard only
        //Modal
        $('.popup-modal').magnificPopup({
          type: 'inline',
          preloader: false,
          focus: '#username',
          modal: true
        });
        $(document).on('click', '.popup-modal-dismiss', function (e) {
          e.preventDefault();
          $.magnificPopup.close();
        });
      }

      if(window.location.pathname.search('wizard_ge') > 0) { // For GE Wizard only
        // ADD tooltip plugin
        $.tips({
          action: 'click',
          element: '.clicktips',
          tooltipClass: 'error',
          tailLength: 15,
          preventDefault: true
        });
        
      }


    // $( "section.even label:even" ).css( "border-bottom", "4px solid #FBF9F9" );
});


