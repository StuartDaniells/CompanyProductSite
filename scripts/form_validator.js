// Stuart Daniells - C0829441

// on DOM creation (webpage load)
$(document).ready(function() {
   // moving focus to first text box on load
   $("#name").focus();

   // form validation using jquery
   $("#contact_us_form").validate({
    rules: {
        name: {
            required: true,
            minlength: 2
        },
        email: {
            required: true,
            email: true
        },
        password: {
            required: true,
            minlength: 8
        },
        confirm_password: {
            required: true,
            minlength: 8,
            equalTo: "#password"
        },

        // using RegEx to validate phone number
        phone: {
            required: true,
            pattern: "[0-9]{3}[0-9]{3}[0-9]{4}"
        },
        policy_agree: "required"
     },

    // custom error message for Nights text box
    messages: {
        name: {
            required: "*Please enter your full name",
            minlength: "*Your name should consist of at least of 2 characters"
        },
        email: {
            required: "*This field is required",
            email: "*Please enter a valid email address"
        },
        phone:{
            required: "*This field is required",
            pattern: "*Your phone number must be at least 10 digit long (not characters)",
        },
        password:{
            required: "*Please provide a password",
            minlength: "*Your password must consist of at least 8 characters"
        },
        confirm_password: {
            required: "*Please verify your previous password",
            minlength: "*Your password must consist of at least 8 characters",
            equalTo: "*Your password doesn't match the above password"
        },
        policy_agree: "*Please accept our policy"
    }

    // submitHandler: function(form) {
    //     form.submit();
    // }
   });
}); // end ready
