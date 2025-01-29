function displayCurrentYear() {
    const currentYear = new Date().getFullYear();
    const yearSpan = document.getElementById('current_year');
    yearSpan.textContent = currentYear;
}

function displayLastModifiedDate() {
    const lastModifiedDate = new Date(document.lastModified);
    const formattedDate = lastModifiedDate.toLocaleDateString();
    const modifiedParagraph = document.getElementById('lastModified');
    modifiedParagraph.textContent = `Last modified on: ${formattedDate}`;
}

displayCurrentYear();
displayLastModifiedDate();