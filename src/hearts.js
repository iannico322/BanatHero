// Heart class represents a beating heart. It is implemented using a span
      // and a heart character. Coloring and resizing the span to create the 
      // effect


	  


      var Heart = function(x, y) {
        this.initalize(x, y);
      };
      Heart.prototype = {
        initalize: function(x, y) {
          // create an element
          this.element = document.createElement("span");
          this.element.className = "heart";
          this.element.style.top = y + "px";
          this.element.style.left = x + "px";
          
          // randomly different heart style
          this.element.innerText = (Math.random() > 0.5) ? "\u2661" : "\u2665";
        }
      };
      
      window.onload = function() {
        var screen = document.getElementById("screen");
        
        // register on click to create a new heart
        document.onclick = function(event) {
          var heart = new Heart(event.clientX, event.clientY);
          screen.appendChild(heart.element);
        };
      };