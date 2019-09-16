$(window).on("load", function() {
    console.log("hello world");
    $('#debate-container').mouseover(function() {
        $('#section-container').stop().fadeIn(300);
    });

    $('#debate-container').mouseout(function() {
        $('#section-container').stop().fadeOut(300);
    });

    $('#doknosis-container').mouseover(function() {
        $('#dok-container').stop().fadeIn(300);
    });

    $('#doknosis-container').mouseout(function() {
        $('#dok-container').stop().fadeOut(300);
    });

    $('#souvenear-container').mouseout(function() {
        $('#souv-container').stop().fadeOut(300);
    });

    $('#souvenear-container').mouseover(function() {
        $('#souv-container').stop().fadeIn(300);
    });

    $('#pill-buddy-container').mouseout(function() {
        $('#pill-container').stop().fadeOut(300);
    });

    $('#pill-buddy-container').mouseover(function() {
        $('#pill-container').stop().fadeIn(300);
    });

    $('#doknosis-container').click(function(){
        window.location.href='https://docs.google.com/presentation/d/17tukiTSiJ5I2dmy2eaM6M-9YNnpkhQyqZcA340-5MfM/edit?usp=sharing';
     })

     $('#souvenear-container').click(function() {
        window.location.href='https://docs.google.com/presentation/d/1sxPruOTCDvZJnrpBXKFxS7AjcL3mhSyr4p9gq3Clqig/edit?usp=sharing';
     })

     $('#pill-buddy-container').click(function() {
        window.location.href='https://docs.google.com/document/d/1F8mEG_RDhqBVqjhxstsadsHS8NrsxisY3eFdRrFUcqY/edit?usp=sharing'; 
     })

     $('#debate-container').click(function() {
        window.location.href='http://ucsdguardian.org/2019/01/21/speech-debate-teams-achievements-signal-clubs-revitalization/'; 
     })

     $('#main-button').click(function() {
        window.location.href='https://github.com/shar-ajmal/CardsAgainstHumanity';
     })

     $('.text-container').css('cursor', 'pointer');
    
});