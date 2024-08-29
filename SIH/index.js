// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later,
// measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBCqnPj-kRJMjCReWis6NAkQCTlq65qryw",
    authDomain: "sihproject-d2529.firebaseapp.com",
    projectId: "sihproject-d2529",
    storageBucket: "sihproject-d2529.appspot.com",
    messagingSenderId: "587946579075",
    appId: "1:587946579075:web:09fdc8a6a1203848b737b6",
    measurementId: "G-0M43SZ6BKV"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const auth = firebase.auth();
  
  // Signup function
  function signUp() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
  
    const promise = auth.createUserWithEmailAndPassword(
      email.value,
      password.value
    );
    promise.catch((e) => alert(e.message));
    alert("SignUp Successfully");
  }
  
    function signIn() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            window.location.href = 'home.html'; // Redirect to homepage
        })
        .catch((e) => alert(e.message));
    }
  // SignOut
//  function signOut() {
//    auth.signOut();
//    alert("SignOut Successfully from System");
//  }
  
  // Active user to homepage
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var email = user.email;
      alert("Active user " + email);
    } else {
      alert("No Active user Found");
    }
  });