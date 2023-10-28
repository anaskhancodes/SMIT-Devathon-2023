


const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyBn4C8LWcqPBatqoQJ32W9g9yAl20BSKb4",
        authDomain: "smit-devathon-2023.firebaseapp.com",
        projectId: "smit-devathon-2023",
        storageBucket: "smit-devathon-2023.appspot.com",
        messagingSenderId: "52097193855",
        appId: "1:52097193855:web:a2e4770911cee7cff1ac4a",
        measurementId: "G-RPNFWBWXCL"
    });

// Initialize Firebase
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

console.log();


//////   log in page ////////

const logIn = document.getElementById("login");

logIn.addEventListener("click", (event) => {
    event.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            // Signed in 
            alert("Your successfully log In")
            window.location.href = "./dashbord/dashbord.html";
            // ...
        })
        .catch((error) => {
            alert("error try again")
            console.log(error.code);
            console.log(error.message);
        });
});

