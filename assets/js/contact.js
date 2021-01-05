//Javascript code to send email through emailjs.init
//The JS code for this section is referred from Rosie resume miniproject 

var emailjs;
function sendMail(contactForm){
    emailjs.send("gmail","pokemon",{
"from_name": contactForm.name.value,
"from_email": contactForm.emailaddress.value,
"project_request": contactForm.projectsummary.value
})
        .then(
            function(response) {
                console.log("success", response);
                var sentButton = document.getElementById('contact-button');
                sentButton.style.backgroundColor = "Green";
                sentButton.innerHTML = "Feedback Sent!";
                },
            function(error) {
               console.log("failed", error);
               alert("try again");
            });
         return false;
    }