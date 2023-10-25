const sidebar = document.querySelector('.side-bar');
const hamburgerMenu = document.getElementById('hamburger-menu');
const closeBtn = document.getElementById('close-btn')


hamburgerMenu.addEventListener('click',()=>{
  sidebar.classList.add('active');
})

closeBtn.addEventListener('click',()=>{
  sidebar.classList.remove('active');
})