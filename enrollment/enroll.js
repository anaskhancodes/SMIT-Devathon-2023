const registrationForm = document.getElementById("registration-form");

registrationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const CNIC = document.getElementById("CNIC").value;
    const selectedCourse = document.getElementById("course").value;
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Course:", selectedCourse);

    // 1. Register the user with Firebase Authentication
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // User registration successful
            const userId = userCredential.user.uid;

            // 2. Store enrollment data in Firestore
            const db = firebase.firestore();
            const enrollmentRef = db.collection("Enrollment").doc(userId);

            enrollmentRef.set({
                name: name,
                email: email,
                course: selectedCourse,
            })
                .then(() => {
                    // Enrollment data saved successfully
                    alert("Registration and course enrollment successful!");
                    // You can redirect the user to another page if needed.
                })
                .catch((error) => {
                    alert("Enrollment data could not be saved: " + error.message);
                });
        })
        .catch((error) => {
            // Registration failed
            alert("User registration failed: " + error.message);
        });
});
