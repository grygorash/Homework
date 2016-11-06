$(function(){

        $("#typed").typed({
            stringsElement: $('#typed-strings'),
            typeSpeed: 300,
            backDelay: 3000,
            loop: false,
            contentType: 'html', 
            loopCount: false,
            callback: function(){ foo(); },
            resetCallback: function() { newTyped(); }
        });

        $(".reset").click(function(){
            $("#typed").typed('reset');
        });
});

