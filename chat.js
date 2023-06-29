// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyC9JGkEMcLdP8qCtXvs5J1fD7sgEqmP1gA",
    authDomain: "kwitter-75279.firebaseapp.com",
    databaseURL: "https://kwitter-75279-default-rtdb.firebaseio.com",
    projectId: "kwitter-75279",
    storageBucket: "kwitter-75279.appspot.com",
    messagingSenderId: "137780071751",
    appId: "1:137780071751:web:805d0ae1715d4f8fc91062",
    measurementId: "G-H30G6KNFGW"
  };
//ADD YOUR FIREBASE LINKS HERE



  
  
 


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    localStorage.setItem("user_name", user_name);
    
    window.location = "chat_room.html";
    
}



