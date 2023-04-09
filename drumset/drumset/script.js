
      function playw() {
        var audio = document.getElementById("audiow");
        audio.play();
      }
      function plays() {
        var audio = document.getElementById("audios");
        audio.play();
      }
      function playa() {
        var audio = document.getElementById("audioa");
        audio.play();
      }
      function playd() {
        var audio = document.getElementById("audiod");
        audio.play();
      }
      function playj() {
        var audio = document.getElementById("audioj");
        audio.play();
      }
      function playk() {
        var audio = document.getElementById("audiok");
        audio.play();
      }
      function playl() {
        var audio = document.getElementById("audiol");
        audio.play();
    
      }

  document.addEventListener( "keydown", function(event) {
  
    switch(event.key)
        {
          case 'w' :playw();
                    break;
          case 'a' :playa();
                    break;
          case 's' :plays();
                    break;
          case 'd' :playd();
                    break;
          case 'j' :playj();
                    break;
          case 'k' :playk();
                    break;
          case 'l' :playl();
                    break;
  }
} );
    
    