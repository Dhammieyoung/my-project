var firebaseConfig = {
    apiKey: "AIzaSyDL6Cp5LNTd18kA_-ZnunwmWLcYejIQTKA",
    authDomain: "trials-5ee12.firebaseapp.com",
    databaseURL: "https://trials-5ee12.firebaseio.com",
    projectId: "trials-5ee12",
    storageBucket: "",
    messagingSenderId: "922186205784",
    appId: "1:922186205784:web:06d147bfd9b210f3"
  };
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   console.log("firebase loaded");

   let Email,Pass;
   const loginpage =document.getElementById("loginbtn");
   loginpage.addEventListener('click', ()=>{
     Email =document.getElementById("Email").value;
     Pass = document.getElementById("Password").value;

    firebase.auth().signInWithEmailAndPassword(Email,Pass).then(function(){
        window.location = "tutorials.html";
    }).catch(function(error){
 //handle errors here
 var errorCode = error.code;
 var errorMessage = error.message;
 console.log("error:" +error.code);   
})
});
    
   

    

       
    
           // window.location.assign('file:///C:/Users/PAIKO/Desktop/official/html/tutorials.html');
   