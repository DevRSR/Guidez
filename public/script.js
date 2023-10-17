let backgrounds = document.querySelectorAll('.background');
let ps = document.querySelectorAll('.guide p')
let nav = document.querySelector('nav');
let navIn = document.querySelectorAll('.log-in');
let navOut = document.querySelectorAll('.log-out');
let account = document.querySelector('.account-modal');
let loginForm = document.querySelector('#login-form');
let signupForm = document.querySelector('#signup-form');
let createForm = document.querySelector('#create-form');
let login = document.querySelector('.login');
let logout = document.querySelector('.logout');
let signup = document.querySelector('.Signup');
let create = document.querySelector('.create-guide');






nav.addEventListener('click', (e) => {
  let navbar = e.target.classList;
  if(navbar.contains('account')) {
    account.parentElement.style.display = 'flex'
    account.style.display = 'block';
  }
  if(navbar.contains('log')) {
    login.parentElement.style.display = 'flex';
    login.style.display = 'block';
  }
  if(navbar.contains('sign')) {
    signup.parentElement.style.display = 'flex';
    signup.style.display = 'block';
  }
  if(navbar.contains('create')) {
    create.parentElement.style.display = 'flex';
    create.style.display = 'block';
  }
})

backgrounds.forEach(background => {
  background.addEventListener('click', (e) => {
    if(e.target.className == "background"){
      background.style.display = 'none';
    }
  })
})

function setupUI(user) {
  if(user) {
    navIn.forEach(nav => {
      nav.style.display = 'block';
    })
    navOut.forEach(nav => {
      nav.style.display = 'none';
    })
  } else {
    navIn.forEach(nav => {
      nav.style.display = 'none';
    })
    navOut.forEach(nav => {
      nav.style.display = 'block';
    })
    
  }
}

function setupGuide(data) {
  guides.innerHTML = '';
  let html = '';
  if(data) {
    data.forEach(doc => {
      let guide = doc.data();
      html+=`
       <div class="guide">
         <h5>${ guide.title }</h5>
         <p class="hid">${ guide.body }</p>
        </div>
      `
    })
  }
  else {
    let html = `
    <div class='signOut'>
     Login To See Contents
    </div>
   `;
  }
  guides.innerHTML= html;
}