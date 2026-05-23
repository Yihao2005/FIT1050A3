const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit",function(event){
    event.preventDefault();

    alert("Submitted Sucessfully! We will contact you ASAP!");

    contactForm.reset();
})
