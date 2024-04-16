let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('navbar');

menu.oneclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
document.querySelector('#search-icon').oneclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');   
}

document.querySelector('#close').oneclick = () =>{
    document.querySelector('#search-form').classList.remove('active');   
}
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });

  // WhatsApp Contact Number
  const phoneNumber = "+919994615447"; // Replace this with your WhatsApp contact number
    
  // Function to open WhatsApp chat
  function openWhatsApp() {
    // Construct WhatsApp contact link
    const whatsappLink = `https://wa.me/${phoneNumber}?text=Hi%20there,%20I%20have%20a%20question%20about%20a%20product.`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappLink, '_blank');
  }
  
  // Add event listener to WhatsApp button
  document.getElementById('whatsappButton').addEventListener('click', openWhatsApp);