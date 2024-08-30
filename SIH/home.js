// Initialize Firebase (reuse your existing Firebase configuration)
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

const auth = firebase.auth();
const db = firebase.firestore();

// Display user email on the homepage
auth.onAuthStateChanged((user) => {
    if (user) {
        const email = user.email;
        document.getElementById('userEmail').textContent = `Logged in as: ${email}`;
        
        // Check if the user is the admin
        if (email === 'ashwinshetty549@gmail.com') {
            document.getElementById('adminLink').style.display = 'block';
        }
        
        loadDeliveries(email);
    } else {
        window.location.href = 'index.html'; // Redirect to login page if not signed in
    }
});

// Load incoming posts from Firestore
function loadDeliveries(email) {
    const postsContainer = document.getElementById('postsContainer');
    if (!postsContainer) {
        console.error('postsContainer element not found.');
        return;
    }
    postsContainer.innerHTML = ''; // Clear previous content

    db.collection('posts').where('recipientEmail', '==', email)
        .get()
        .then((querySnapshot) => {
            if (querySnapshot.empty) {
                postsContainer.innerHTML = '<p>No incoming posts.</p>';
                return;
            }
            
            querySnapshot.forEach((doc) => {
                const delivery = doc.data();
                const deliveryElement = document.createElement('div');
                deliveryElement.className = 'delivery';

                deliveryElement.innerHTML = `
                    <h3>Sender: ${delivery.sender}</h3>
                    <p>Expected Delivery: ${new Date(delivery.deliveryTime).toLocaleString()}</p>
                    <p>Details: ${delivery.details}</p>  
                    <button onclick="handleNotAvailable('${doc.id}')">Not Available</button>
                `;
                postsContainer.appendChild(deliveryElement);
            });
        })
        .catch((error) => {
            console.error('Error loading deliveries: ', error);
            postsContainer.innerHTML = '<p>Error loading deliveries.</p>';
        });
}

// Function to handle "Not Available" button click
function handleNotAvailable(deliveryId) {
    // Redirect to reschedule page with delivery ID in query string
    window.location.href = `reschedule.html?id=${deliveryId}`;
}

// View details of a specific post
function viewDetails(postId) {
    // Redirect to the details page or display a modal with more information
    alert('Viewing details for post ID: ' + postId);
    // Implement the actual details page later
}

// Mark the post as unavailable
function markUnavailable(postId) {
    // Redirect to the unavailable page or update the status in Firestore
    alert('Marking as unavailable for post ID: ' + postId);
    // Implement the actual unavailable logic later
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

