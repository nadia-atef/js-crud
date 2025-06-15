 var signinEmailInput = document.getElementById("signinEmail");
  var signinPasswordInput = document.getElementById("signinPassword");


  var signupNameInput = document.getElementById('signupName');
  var signupEmailInput = document.getElementById('signupEmail');
  var signupPasswordInput = document.getElementById('signupPassword');

var loginArr = [];

function signup() {
  x.innerHTML = `
    <div class="group m-auto w-75 p-5">
      <h1>Smart Login System</h1>
      <input id="signupName"    oninput="validationForm(this)"    class="form-control my-3" placeholder="Enter your name" type="text">
        <div  class="alert alert-danger py-2 mt-1  d-none ">Lorem ipsum dolor sit amet.</div>
      <input id="signupEmail"    oninput="validationForm(this)"      class="form-control my-3" placeholder="Enter your email" type="email">
        <div  class="alert alert-danger py-2 mt-1  d-none ">Lorem ipsum dolor sit amet.</div>
      <input id="signupPassword"    oninput="validationForm(this)"   class="form-control my-3" placeholder="Enter password" type="password">
        <div  class="alert alert-danger py-2 mt-1  d-none ">Lorem ipsum dolor sit amet.</div>
      <p id="exist"></p>
      <button onclick="register()" class="btn btn-outline-info w-100 my-3">Sign Up</button>
      <p class="text-white">You have an account? <a class="text-white" href="">Signin</a></p>
    </div>
  `;
}

function register() {
  var signupNameInput = document.getElementById('signupName');
  var signupEmailInput = document.getElementById('signupEmail');
  var signupPasswordInput = document.getElementById('signupPassword');

  var signup = {
    name: signupNameInput.value,
    email: signupEmailInput.value,
    password: signupPasswordInput.value
  };

  loginArr.push(signup);
  localStorage.setItem('signup', JSON.stringify(loginArr));
  console.log(loginArr);

 clearInputs() 
}


function clearInputs() {
  var nameInput = document.getElementById('signupName');
  var emailInput = document.getElementById('signupEmail');
  var passwordInput = document.getElementById('signupPassword');

  if (nameInput && emailInput && passwordInput) {
    nameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
  }
}


function login(element) {
  var signinEmail = signinEmailInput.value;
  var signinPassword = signinPasswordInput.value;

  var loginArr = JSON.parse(localStorage.getItem('signup')) || [];

  var isFound = false;
  var user = null;

  for (var i = 0; i < loginArr.length; i++) {
    if (
      signinEmail === loginArr[i].email &&
      signinPassword === loginArr[i].password
    ) {
      isFound = true;
      user = loginArr[i];
      break;
    }
  }

if (isFound) {
 
  document.getElementById('navbar-container').innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">SMART LOGIN</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link btn btn-outline-warning" href="#" onclick="logout()">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `;

  x.innerHTML = `
    <h1 class="text-white mt-5">Welcome, ${user.name}!</h1>
  `;
} 

else {
  var d = document.getElementById("incorrect");
  d.innerHTML = "Incorrect email or password";
  d.classList.add("text-danger"); 
}
}


//logout()




function logout(){
  document.getElementById('navbar-container').innerHTML = `
    <nav class="navbar navbar-expand-lg d-none  navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">SMART LOGIN</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link btn btn-outline-warning" href="#" onclick="logout()">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `;

  x.innerHTML = `
     <div class="text-center w-100">
        <h1>Smart Login System</h1>
        <br>
        <input id="signinEmail" class="form-control my-3" placeholder="Enter your email" type="text">
        <input id="signinPassword" class="form-control my-3" placeholder="Enter your password" type="password">
        <p id="incorrect" class="text-danger"></p>
        <button onclick="login(this)" class="btn btn-outline-info w-100 my-3">Login</button>
        <p class="text-white">Don’t have an account? <a class="text-white" href="#" onclick="signup()">Sign Up</a></p>
    </div>
  `;


}





function validationForm(element) {
  var regeX = {
    signupName: /^[A-Z][\w-]{3,18}\S?\w{0,8}$/,
    signupEmail: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // تم تعديل regex للإيميل ليكون صحيحًا
    signupPassword: /^.{6,}$/ // مثال: على الأقل 6 حروف
  };

  if (regeX[element.id] && regeX[element.id].test(element.value)) {
    element.classList.add('is-valid');
    element.classList.remove('is-invalid');
    element.nextElementSibling.classList.add('d-none');
  } else {
    element.classList.add('is-invalid');
    element.classList.remove('is-valid');
    element.nextElementSibling.classList.remove('d-none');
  }
}
