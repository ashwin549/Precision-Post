// Firebase setup
var firebaseConfig = {
    apiKey: "AIzaSyBCqnPj-kRJMjCReWis6NAkQCTlq65qryw",
    authDomain: "sihproject-d2529.firebaseapp.com",
    projectId: "sihproject-d2529",
    storageBucket: "sihproject-d2529.appspot.com",
    messagingSenderId: "587946579075",
    appId: "1:587946579075:web:09fdc8a6a1203848b737b6",
    measurementId: "G-0M43SZ6BKV"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

let deliveryId; // Global variable to store delivery ID

// Fetch delivery information (assuming delivery ID is passed in URL)
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    deliveryId = urlParams.get('id');

    if (deliveryId) {
        db.collection('posts').doc(deliveryId).get()
        .then((doc) => {
            if (doc.exists) {
                const delivery = doc.data();
                document.getElementById('deliveryInfo').textContent = 
                    `Rescheduling delivery from ${delivery.sender}. Current delivery time: ${delivery.deliveryTime}`;
            } else {
                document.getElementById('deliveryInfo').textContent = 
                    'No such delivery found.';
            }
        })
        .catch((error) => {
            console.error('Error fetching delivery: ', error);
        });
    } else {
        document.getElementById('deliveryInfo').textContent = 
            'No delivery ID provided.';
    }
}


// Function to reschedule delivery
function rescheduleDelivery() {
    const newDate = document.getElementById('newDate').value;

    if (newDate && deliveryId) {
        db.collection('posts').doc(deliveryId).update({
            deliveryTime: newDate
        })
        .then(() => {
            alert('Delivery rescheduled successfully!');
            window.location.href = 'index.html';
        })
        .catch((error) => {
            console.error('Error rescheduling delivery: ', error);
        });
    } else {
        alert('Please select a new date and try again.');
    }
}
