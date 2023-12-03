/* 
This script was written with guidance from the following pages on w3schools:
https://www.w3schools.com/js/js_htmldom_eventlistener.asp
https://www.w3schools.com/js/js_htmldom_document.asp
https://www.w3schools.com/js/js_if_else.asp
*/

document.getElementById("MailingList").addEventListener("submit", emailCompare);  // Get the document element by the tag name Form and listen for a submit event and run the emailCompare function

// An else statement would be provided to send the form under normal circumstances
function emailCompare() {
  var email = document.getElementById("email").value; // Creates variable that gets the document element from the ID email and assigns the value that was input into the email field
  var confirmEmail = document.getElementById("confirmEmail").value; // Same as line above
  
  if (email !== confirmEmail) {  // If the email doesn't equal the confirmation
    alert("The email addresses you entered do not match.");  // Then create an alert informing the user
    preventDefault();
  }
}
