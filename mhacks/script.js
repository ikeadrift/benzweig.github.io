$('#travel, #whatif').hide();

    $('#DDtravel').click(function() {
      console.log("hey");
      $('#hacking, #whatif').fadeOut();
      $('#travel').fadeIn();
      $(".dropdown-toggle").html('Travel <span class="caret"></span>');
    });

    $('#DDhacking').click(function() {
      console.log("hey");
      $('#travel, #whatif').fadeOut();
      $('#hacking').fadeIn();
      $(".dropdown-toggle").html('Hacking <span class="caret"></span>');
    });

    $('#DDwhatif').click(function() {
      console.log("hey");
      $('#hacking, #travel').fadeOut();
      $('#whatif').fadeIn();
      $(".dropdown-toggle").html('What If? <span class="caret"></span>');
    });
    
    //animate anchors
    $('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 800);
    return false;
});

 $(document).ready(function () {
      $("nav.navbar-fixed-top").autoHidingNavbar({
        'showOnBottom': true,
        'animationDuration': 140
      });
    });