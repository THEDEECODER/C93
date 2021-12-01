const firebaseConfig = {
    apiKey: "AIzaSyD21bp1h-zftrac0rcUT__qtHMqVZP2I-M",
    authDomain: "kwittwer-1495e.firebaseapp.com",
    projectId: "kwittwer-1495e",
    storageBucket: "kwittwer-1495e.appspot.com",
    messagingSenderId: "277418564759",
    appId: "1:277418564759:web:6686895c48b428950c9dd2",
    measurementId: "G-SKJCKB48R2"
  };
  const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
     
    });});}
getData();
function addroom(){
    room_name = document.getElementById("roomname").value;
    localStorage.setItem("room_name", room_name);
    
}