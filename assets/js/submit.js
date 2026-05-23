const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit",function(event){
    event.preventDefault();

    alert("Submitted Successfully! We will contact you ASAP!");

    contactForm.reset();
})
