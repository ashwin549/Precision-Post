// Initialize Firebase
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

// Initialize Firestore
const db = firebase.firestore();

function addDelivery() {
    const recipientEmail = document.getElementById('recipientEmail').value;
    const sender = document.getElementById('sender').value;
    const deliveryTime = document.getElementById('deliveryTime').value;
    const details = document.getElementById('details').value;

    db.collection('posts').add({
        recipientEmail: recipientEmail,
        sender: sender,
        deliveryTime: new Date(deliveryTime).toISOString(), // Store as ISO string
        details: details
    })
    .then(() => {
        const statusMessage = document.getElementById('statusMessage');
        if (statusMessage) {
            statusMessage.textContent = 'Delivery added successfully';
        }
        // Optionally clear the form or reset the input fields
        document.getElementById('recipientEmail').value = '';
        document.getElementById('sender').value = '';
        document.getElementById('deliveryTime').value = '';
        document.getElementById('details').value = '';
    })
    .catch((error) => {
        console.error('Error adding delivery: ', error);
        const statusMessage = document.getElementById('statusMessage');
        if (statusMessage) {
            statusMessage.textContent = 'Error adding delivery: ' + error.message;
        }
    });
}


// Sign Out function
function signOut() {
    auth.signOut().then(() => {
        alert('Signed out successfully.');
        window.location.href = 'index.html'; // Redirect to login page
    }).catch((error) => {
        console.error('Sign out error', error);
    });
}
