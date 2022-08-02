const submitHandler = (event) => {
    event.preventDefault();

    // Create a formData interface which allows us to easily work with the form data
    // Creates an object that stores: 
    // {inputName: inputValue} 
    const formData = new FormData(event.target); 

    // The get() grabs the email key and stores the value that was submitted with the form
    let email = formData.get("email")

    console.log(email)

    console.log("The form was submitted"); 
}; 

const main = () => {
    
    // Get form element from form.html
    const form = document.querySelector("email-form");

    // Attach the submit handler
    form.addEventListener("submit", submitHandler); 
};

// Loads the JS in the main function once the DOM fully loads 

window.addEventListener("DOMContentLoaded", main);


