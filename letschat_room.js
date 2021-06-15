
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
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
  }
  function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
        });
    });
}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "letschat_page.html";
}

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";

}
  