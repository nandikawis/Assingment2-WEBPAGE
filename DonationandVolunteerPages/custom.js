/*This is the JQuery for the donation page.
This code is use to make sure the user won't leave any-
empty form. */
$("#formwrp").validate({
    /*This code is use to validate the form and the user-
    able to pass the form if the requirements are met. */
    rules:{
        Name:{
            required: true,
            minlength: 2
        },
        Email:{
            required: true,
            email: true
        },
        Number:{
            required: true,
            number: true,
            minlength: 10,
            maxlength: 10
        },
    },
    /*This is the message display, if the user has-
    left an empty form when they filling it up. */
    messages: {
        Name:{
            required: "Please enter your name",
            minlength: "Name must have at least 2 characters"
        },
        Email: "Please enter a valid email",
        Number: {
            required: "Please enter your phone number",
            number: "Phone number must be a valid number",
            minlength: "Phone number must have 10 digits",
            maxlength: "Phone number must have 10 digits"
        },
        Amount: "Please enter the amount (Minimum donation Rp.50.000,00) "
    },
    submitHandler: function(form) {
        form.submit();
    }
});