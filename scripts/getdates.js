// getdates.js

// Function to get the current year for the copyright
function displayCurrentYear() {
    const currentYear = new Date().getFullYear(); // Get current year
    const yearSpan = document.getElementById('current-year'); // Find the span element
    yearSpan.textContent = currentYear; // Set the content to the current year
}

// Function to display the last modified date of the document
function displayLastModifiedDate() {
    const lastModifiedDate = new Date(document.lastModified); // Get the last modified date of the document
    const formattedDate = lastModifiedDate.toLocaleDateString();
    const modifiedParagraph = document.getElementById('lastModified'); // Corrected the id here
    modifiedParagraph.textContent = `Last modified on: ${formattedDate}`; // Set the content to the last modified date
}

// Execute both functions when the document is ready
displayCurrentYear();
displayLastModifiedDate();
