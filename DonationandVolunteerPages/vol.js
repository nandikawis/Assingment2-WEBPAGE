/*this is the the JQuery of the volunteer page.
It is being used to make sure the user fill up the form
and not leaving any empty column behind.*/
$("#formwrp").validate({
    /*This code is use to validating the form.
    Each requirements is being used to make sure the-
    user fill that part of the form.*/
    rules:{
        Name:{
            minlength: 2
        },
        Email:{
            email:true
        },
        PhoneNumber:{
            Number:true,
            minlength: 0,
            maxlength: 12
        },
        Occupation:{
            minlength: 0
        },

    },
    /*This is the lable that will be shown, if the user-
    hasn't filled some parts of the form. */
    messages: {
        Name:{
            required: "Please Enter Your Name",
            minlength: "Name at least 2 characters"
        },
        Email:"Please Enter Your Email",
        PhoneNumber:"Please Enter Your Phone Number",
        Occupation:"Please Input Your Occupation",
        Comment:"Please Enter Your Message"
    },
    submitHandler: function(form) {
      form.submit();
    }
});