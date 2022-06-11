// Contact form validation
function formValidate(){
     var fisrtname= document.getElementById("firstname").value;
     var lastname= document.getElementById("lastname").value;
     var email= document.getElementById("email").value;
     var phone= document.getElementById("phone").value;
     var msg= document.getElementById("msg").value;

     if(fisrtname ==""){
         document.getElementById("s1").innerHTML = "Enter Your Fisrt Name"
         return false;
     }

     
     if(lastname ==""){
        document.getElementById("s2").innerHTML = "Enter Your Last Name"
        return false;
    }

    
    if(email ==""){
        document.getElementById("s3").innerHTML = "Enter Your Email Address"
        return false;
    }
    
    if(phone ==""){
        document.getElementById("s4").innerHTML = "Enter Your Phone Number"
        return false;
    }
    
    if(msg ==""){
        document.getElementById("s5").innerHTML = "Enter Your Message"
        return false;
    }
    
   




}

