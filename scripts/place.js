// The display of current year and date of last modification in the footer
function displayCurrentYear() {
    const currentYear = new Date().getFullYear(); 
    const yearSpan = document.getElementById('current-year'); 
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


// This function calculates the wind chill factor based on temperature (in °F) and wind speed (in mph)
function calculateWindChill(temperature, windSpeed) {
    return (35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16)).toFixed(1);
}

const temperature = 46;  // Example temperature in Fahrenheit
const windSpeed = 11;    // Example wind speed in miles per hour

if (temperature <= 50 && windSpeed > 3) {
    const windChill = calculateWindChill(temperature, windSpeed);
    
    const windChillElement = document.getElementById('windChill');  // Matching the HTML 'id'
    if (windChillElement) {
        windChillElement.textContent = `Wind Chill: ${windChill} °F`;
    }
} else {
    const windChillElement = document.getElementById('windChill');  // Matching the HTML 'id'
    if (windChillElement) {
        windChillElement.textContent = 'Wind Chill: N/A (conditions not met)';
    }
}