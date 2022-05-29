function validate_form() {
    let form = document.forms["signup_form"];

    // email
    let email = form["email"].value;
    if (!email.includes("@")) {
        document.getElementById("email_error_message").innerHTML =
            "Make sure your email is valid";
        return false;
    }

    // password
    let password = form["password"].value;
    if (password.length < 6) {
        document.getElementById("password_error_message").innerHTML =
            "Passwords need at least 6 characters";
        return false;
    }

    return true;
}