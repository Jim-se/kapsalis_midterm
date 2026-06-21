document.getElementById("contact_form").addEventListener("submit", function (event) {
    event.preventDefault();

    if (!this.checkValidity()) {
        this.classList.add("was-validated");
        return;
    }

    let name = document.getElementById("contact_name").value;
    let email = document.getElementById("contact_email").value;
    let subject = document.getElementById("contact_subject").value;
    let message = document.getElementById("contact_message").value;

    alert("Message sent!\nName: " + name + "\nEmail: " + email + "\nSubject: " + subject + "\nMessage: " + message);

    this.reset();
    this.classList.remove("was-validated");
});
