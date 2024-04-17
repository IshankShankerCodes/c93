
const firebaseConfig = {
      apiKey: "AIzaSyAqQI9NqAjxmwessjsvU8bJJNlF2LJqCck",
      authDomain: "kwitter2024.firebaseapp.com",
      databaseURL: "https://kwitter2024-default-rtdb.firebaseio.com",
      projectId: "kwitter2024",
      storageBucket: "kwitter2024.appspot.com",
      messagingSenderId: "374225826363",
      appId: "1:374225826363:web:8ded110c9146c5257d621e",
      measurementId: "G-S8DY7W7STM"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
