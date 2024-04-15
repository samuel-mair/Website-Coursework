  // script to alternate log in/logged out and to check password and email are input before allowing login

  var counter = 2;

  function login() {
    var email = document.forms["loginForm"]["email"].value;
    var password = document.forms["loginForm"]["password"].value;
  
    //if neither email or password is input give this alert
    if (!email && !password) {
      alert("Both email and password must be entered!");
      //if only email not input give this alert
    } else if (!email) {
      alert("Email must be entered!");;
      // if only password not input give this alert
    } else if (!password) {
      alert("Password must be entered!");
      //if both are entered, return this alert based on whether the counter is odd or even
    } else {
      if (counter % 2 === 0) {
        alert("You have been logged in!");
      } else {
        alert("You have been logged out!");
      }
      counter += 1;
    }
  }


  //script for user interactivity in image gallery

  var images = document.querySelectorAll(".gallery-img");
        
  images.forEach(function(img) {
      img.addEventListener("mouseover", function() {
          //permanently removes blurred after one hover
          this.classList.remove("blurred");
          //adds 'focused' when hovering which in turn adds border
          this.classList.add("focused");
      });
      img.addEventListener("mouseout", function() {
          // removes focused/border when mouse off 
          this.classList.remove("focused");
      });
  //adds initial blur
  img.classList.add("blurred");
  });


  // script for event recommendation
  function submit_event() {
      var title = document.forms["events"]["event_title"].value;
      var date = document.forms["events"]["event_date"].value;
  
      // lets user know title needs inputting
      if (!title) {
        alert("An event must have a title!");
        return false;
      }
      // lets user know date needs inputting
      else if (!date) {
        alert("An event must have a date!");
        return false;
      }
      // lets user know their event has been successfully submitted
      else {
        alert("Event submitted! The society will contact you soon!");
        return true;
      }
    }
  

  //script for submitting message on contact form
    function send_form(elementId, message) {
        document.getElementById(elementId).innerHTML = message;
    }


    //very simple function for custom pages lol
    function addHoverEffect() {

      const boxes = document.querySelectorAll('.artist-info, .song-info');
  
      boxes.forEach(function(box) {
          // apply stuff when mouse hovers text boxes
          box.addEventListener('mouseenter', function() {
              this.style.backgroundColor = '#f0f0f0'; 
              this.style.color = '#AA336A';          
              this.style.border = '1px solid #000'; 
          });
  
          // Revert styles on mouse leave
          box.addEventListener('mouseleave', function() {
              this.style.backgroundColor = ''; 
              this.style.color = '';                 
              this.style.border = '';                
          });
      });
  }
  // call function 
  document.addEventListener("DOMContentLoaded", addHoverEffect);
  


  
  
  
