
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBjpku69vMQoUnaWSpMseFRIiDgS-9m2p4",
    authDomain: "kwitter-1-2649d.firebaseapp.com",
    databaseURL: "https://kwitter-1-2649d-default-rtdb.firebaseio.com",
    projectId: "kwitter-1-2649d",
    storageBucket: "kwitter-1-2649d.appspot.com",
    messagingSenderId: "931244706902",
    appId: "1:931244706902:web:573eebf5e6efa6275c3ff7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({ 
          name:user_name,
           message:msg, 
           like:0
           });
document.getElementById("msg").value = "";
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code      

//End code
    } });  }); }
getData();
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
   window.location = "index.html";
   
   }
