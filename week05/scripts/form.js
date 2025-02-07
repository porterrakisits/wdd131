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




const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];





function populateProductOptions() {
    const productSelect = document.getElementById("products"); 
  
      
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id; 
        option.textContent = product.name; 
        productSelect.appendChild(option); 
    });
  }
  
function incrementReviewCounter() {
    let reviewCount = parseInt(localStorage.getItem("reviewCount") || "0"); 
      
    reviewCount += 1;
      
    localStorage.setItem("reviewCount", reviewCount);
  
    const reviewCounter = document.getElementById("review_data");
    reviewCounter.textContent = `Total Reviews Submitted: ${reviewCount}`;
  }
  

window.onload = function() {
    populateProductOptions(); 
    if (window.location.pathname.includes("review.html")) {
          incrementReviewCounter(); 
    }
  }





