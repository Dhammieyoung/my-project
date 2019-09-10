 // Your web app's Firebase configuration
  
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
   const db= firebase.firestore();
   const firestore = firebase.firestore();
   let save = document.getElementById('submitData');
   
 
 
  // const firestore = firebase.firestore();
 
  let Container, SendingLayout, SuccessLayout, FailedLayout;
 
  Container = document.getElementById("Container");
  SendingLayout = document.getElementById("SendingLayout");
  SuccessLayout = document.getElementById("SuccessLayout");
  FailedLayout = document.getElementById("FailedLayout");
  
  SendingLayout.style.display = "none";
  SuccessLayout.style.display = "none";
  FailedLayout.style.display = "none";
 
 let Sname, Lname, Email, Phone, Uname, Pass, CPass;
  const submitData = document.getElementById("SubmitData");
 SubmitData.addEventListener("click", () => {
     Sname =document.getElementById("Surname").value;
     Lname =document.getElementById("Lastname").value;
     Email =document.getElementById("Email").value;
     Phone =document.getElementById("Number").value;
     Uname =document.getElementById("Username").value;
     Pass =document.getElementById("Password").value;
     CPass =document.getElementById("CPassword").value;
   
     if (!Sname.match(/^[a-zA-Z]+$/)){
         alert ("Enter Your  Surname")
         
     }
     else if (!Lname.match(/^[a-zA-Z]+$/)){
         alert ("Enter Your  Lastname")
         
     }
     else if (!Email.includes("@")) {
         alert ("Invalid Email ")
         
     }
     else if (!Phone.match(/^[0-9]+$/)||Phone.length < 11 || Phone.length > 11) {
         alert ("Incorrect Phone Number")
         
     }
     else if (!Uname.match(/^[a-zA-Z]+$/)){
         alert ("input UserName")
         SendData()
     }
     else if (!Pass.match(/^[a-zA-Z-0-9]+$/)){
         alert("Enter your Password")
         SendData()
     }
     else if (!CPass.match(Pass)){
         alert ("Incorrect Comfirm Password")
         
     }
     else{
         SendData()
     }
     
 });
 
 const SendData = () => {
     Container.style.display = "none";
     SendingLayout.style.display = "block";
     SendToDataBase();
 };
 
 const SendToDataBase = () => {
     let docRef = db.collection("Container").doc(Phone);
     docRef.set({
     Surname: Sname,
     Lastname: Lname,
     Email: Email,
     Phone: Phone,
     Username: Uname,
     Password: Pass,
     CPassword: CPass 
     })
     .then(function(){
         SendingLayout.style.display = "none";
         SuccessLayout.style.display = "block";
         console.log("Successfully Saved");
     })
     .catch(function(error){
         Container.style.display = "block";
         FailedLayout.style.display = "block";
         console.log("Got an error:",error);
     });
 };