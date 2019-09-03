function myfunction(){
    var name=document.getElementById("name").value;
    var address=document.getElementById("address").value;
    var Email=document.getElementById("email").value;
    var E= Email.includes("@");
    var phone= document.getElementById("phone").value;
    var password= document.getElementById("password").value;
    var cpassword=document.getElementById("cpassword")
if(name==null || name==""){
    alert("please input your full name")
}
     else if(address==null || address==""){
        alert("please input your address")
    }
    else if(!Email.includes("@")){
        alert("your email is incorrect")
    }
    else if(phone.length<11 || phone.length>11){
             alert("Your phone number is incorrect")
    }
    else if(password=="" || password==null){
        alert("please input your password")

    } 
    else if(!cpassword.matches(password)){
        alert("incorrect password")
    }
    else{
        alert("registered")

}
}