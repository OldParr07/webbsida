const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');
const body = document.querySelector('body');

//display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    body.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

//Enter knapp för att genomföra sökning under ValutAPI

document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        convert();
    }
});


// Funktion som körs när man klickar på knappen eller trycker på Enter
function generateGIF() {
    // Hämta användarens text från input-fältet
    const searchTerm = document.getElementById('inputText').value;
    const gifContainer = document.getElementById('gif-display');
    
    // Om det inte finns någon text, visa ett meddelande
    if (searchTerm === "") {
        alert("Skriv ett ord för att hitta en GIF!");
        return;
    }
    
    // Rensa tidigare GIF
    gifContainer.innerHTML = "<p>Laddar...</p>";
    
    // GIF API-url
    const apiKey = '0z7Yn02pLLSxfaHzjShKQYVPkQN8V56H';
    const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(searchTerm)}&api_key=${apiKey}&limit=1`;

    // Hämta GIF från API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Kontrollera om vi har några GIF:s i resultatet
            if (data.data.length > 0) {
                const gifUrl = data.data[0].images.original.url;
                const gifImage = document.createElement('img');
                gifImage.src = gifUrl;
                gifImage.alt = `GIF for ${searchTerm}`;
                gifContainer.innerHTML = ''; // Rensar tidigare meddelande
                gifContainer.appendChild(gifImage);
            } 
            else {
                gifContainer.innerHTML = "<p>Ingen GIF hittades för den sökningen.</p>";
            }
        })
        .catch(error => {
            gifContainer.innerHTML = "<p>Ett fel inträffade, försök igen.</p>";
            console.error('Error fetching GIF:', error);
        });
}

// Lägger till en händelselyssnare för Enter-tangenten
document.getElementById("inputText").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        generateGIF();  // Anropa samma funktion som när knappen klickas
    }
});

// Initiera EmailJS
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_c91sofl';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});