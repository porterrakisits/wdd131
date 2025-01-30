

// small width hambuger style menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});






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











const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...

    {
        templeName: "Red Cliffs Utah",
        location: "St. George, Utah",
        dedicated: "2024, March, 24",
        area: 96277,
        imageUrl:
        "https://www.nr-united-states.churchofjesuschrist.org/media/960x540/Red-Cliffs-Temple-September-2023.jpg"
    },
    {
        templeName: "Fort Collins Colorado",
        location: "Fort Collins, Colorado",
        dedicated: "2016, October, 16",
        area: 42000,
        imageUrl:
        "https://t0.gstatic.com/images?q=tbn:ANd9GcQzBMHxLGgVUqfe2WKinPqIoULY7R-D9QVF_USHeiYM1l4O3fzq"
    },
    {
        templeName: "Portland Oregon",
        location: "Portland, Oregon",
        dedicated: "1989, August, 19",
        area: 80500,
        imageUrl:
        "https://t1.gstatic.com/images?q=tbn:ANd9GcRxsIxo0A1F3RGoJpOnbr3BiyWQXX9m715Iqlkjl1hw4hYvitII"
    },

  ];

createTempleCard(temples);

const oldtemplelink = document.querySelector("#oldtemple");
oldtemplelink.addEventListener("click", () => {
    let oldtemple = temples.filter(temple => {
        return new Date(temple.dedicated.split(",")[0]) < 1900;
    });
    createTempleCard(oldtemple);
})

const newtemplelink = document.querySelector("#newtemple");
newtemplelink.addEventListener("click", () => {
    let newtemple = temples.filter(temple => {
        return new Date(temple.dedicated.split(",")[0]) > 2000;
    });

    createTempleCard(newtemple);
})

const largetemplelink = document.querySelector("#largetemple");
largetemplelink.addEventListener("click", () => {
    let largeTemples = temples.filter(temple => temple.area > 90000);
    createTempleCard(largeTemples);
})



const smalltemplelink = document.querySelector("#smalltemple")
smalltemplelink.addEventListener("click", () => {
    let smallTemples = temples.filter(temple => temple.area < 10000);
    createTempleCard(smallTemples);
})


document.querySelector("#home").addEventListener("click", () => {
    createTempleCard(temples);
});


function createTempleCard(temples) {
    const resGrid = document.querySelector(".res-grid");
    resGrid.innerHTML = "";
    temples.forEach(temple => {
        let card = document.createElement("section");
        card.classList.add("temple-card");

        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".res-grid").appendChild(card)
});
}




