// Add event listeners to handle navigation menu clicks
// const homeLink = document.querySelector('nav a[href="index.html"]');
// const aboutLink = document.querySelector('nav a[href="about.html"]');
// const contactLink = document.querySelector('nav a[href="contact.html"]');

// homeLink.addEventListener('click', () => {
//   alert('You clicked on the Home link!');
// });

// aboutLink.addEventListener('click', () => {
//   alert('You clicked on the About link!');
// });

// contactLink.addEventListener('click', () => {
//   alert('You clicked on the Contact link!');
// });

// Add functionality to the contact form
// const contactForm = document.getElementById('contact-form');

// contactForm.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const formData = new FormData(contactForm);
//   const name = formData.get('name');
//   const email = formData.get('email');
//   const message = formData.get('message');

//   // Assuming there's an element with the ID "message-output" to display the result
//   const messageOutput = document.getElementById('message-output');
//   messageOutput.innerHTML = `<p>Thank you for your message, ${name}! We will get back to you at ${email} shortly.</p>`;
// });

// mobile navigation
function mNaviDisplay() {
  var mNavi =document.getElementById("mobileMenu");
   if(mNavi.style.display === "block"){
   mNavi.style.display = "none";
   } else {
       mNavi.style.display = "block";
   }
}

// Change html contact form data to javascript data.
const contactForm = document.getElementById('contactpageForm');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

// Comfirmation for sending message.
  let confirmation = confirm("Do you want to send it?");
  if(!confirmation){
    return;
  }


//Get the user input.
  const formData = new FormData(contactForm);
  const fName = formData.get("fname");
  const lName = formData.get("lname");
  const eMail = formData.get("email");


  //Display the result
  const messageOutput = document.getElementById('message-output');

  messageOutput.textContent = `Thank you for your message, ${fName} ${lName}! We will get back to you at ${eMail} shortly.`;
  alert("Your message has been submitted");
  contactForm.reset();

});
