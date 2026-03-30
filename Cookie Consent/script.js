// Get the cookie consent popup and accept button
const cookieConsent = document.querySelector("#cookie-consent");
const acceptBtn = document.querySelector("#accept-btn");

//create local storage item to store the user's consent
const consentGiven = localStorage.getItem("cookieConsent");

// Check if the user has already given consent
if (consentGiven) {
    cookieConsent.style.display = "none"; // Hide the popup if consent is already given
}

acceptBtn.addEventListener("click", () => {
    cookieConsent.style.display = "none";
    localStorage.setItem("cookieConsent", "true");
});


