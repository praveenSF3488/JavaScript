function validateform()
{
    //values declaration

    var vname=document.getElementById("name");
    var vfathername=document.getElementById("father's");
    var regexname=/^[a-zA-Z]+$/;

    var vemail=document.getElementById("emailid");
    var regexemail=/^([\w\d\.-]+)@([\w\d-]+)\.([a-zA-z]{2,8})(\.[a-zA-z]{2,8})?$/;

    var vdob=document.getElementById("dob");
    var regexdob=/^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;

    var vmobile=document.getElementById("mobile");
    var regexdmob=/^([0-9]{10})$/;

    
    var vaddress1L1=document.getElementById("add1L1");
    var vaddress1L2=document.getElementById("add1L2");
    var regexaddress=/[^!~@#$%^&*()_+{}:";'?/>.<,][a-zA-Z0-9]$/;

    var vcity1=document.getElementById("city1");

    var vstate1=document.getElementById("state1");

    var vzipcode1=document.getElementById("zipcode1");
    var regexdzip=/^([0-9]{6})$/;

    var vaddress2L1=document.getElementById("add2L1");
    var vaddress2L2=document.getElementById("add2L2");

    var vcity2=document.getElementById("city2");

    var vstate2=document.getElementById("state2");

    var vzipcode2=document.getElementById("zipcode2");

    var vphoto =document.getElementById("photo");

    //Name validation

    if(vname.value.trim()=="")
    {
        document.getElementById("namecheck").style.visibility="visible";
        document.getElementById("name").style.border="1px red solid";
    }
    else if(regexname.test(vname.value))
    {
        document.getElementById("namecheck").style.visibility="hidden";
        document.getElementById("name").style.border="1px black solid";
    }   
    else
    {
        document.getElementById("namecheck").style.visibility="visible";
        document.getElementById("namecheck").style.color="red";
        document.getElementById("name").style.border="1px red solid";
        document.getElementById("namecheck").innerHTML="Enter valid name";
    }

    //Father name validation

    if(vfathername.value.trim()=="")
    {
        document.getElementById("fathernamecheck").style.visibility="visible";
        document.getElementById("father's").style.border="1px red solid";

    }
    else if(regexname.test(vfathername.value))
    {
        document.getElementById("fathernamecheck").style.visibility="hidden";
        document.getElementById("father's").style.border="1px black solid";
    }   
    else
    {
        document.getElementById("fathernamecheck").style.visibility="visible";
        document.getElementById("fathernamecheck").style.color="red";
        document.getElementById("father's").style.border="1px red solid";
        document.getElementById("fathernamecheck").innerHTML="Enter valid name";
    }

    //Email Validation

    if(vemail.value.trim()=="")
    {
        document.getElementById("emailcheck").style.visibility="visible";
        document.getElementById("emailid").style.border="1px red solid";
    }
    else if(regexemail.test(vemail.value))
    {
        document.getElementById("emailcheck").style.visibility="hidden";
        document.getElementById("emailid").style.border="1px black solid";
    }   
    else
    {
        document.getElementById("emailcheck").style.visibility="visible";
        document.getElementById("emailcheck").style.color="red";
        document.getElementById("emailid").style.border="1px red solid";
        document.getElementById("emailcheck").innerHTML="Enter valid emailID";
    }

    //Date of Birth Validation

    if(vdob.value.trim()=="")
    {
        document.getElementById("dobcheck").style.visibility="visible";
        document.getElementById("dob").style.border="1px red solid";
    }
    else if(regexdob.test(vdob.value))
    {
        document.getElementById("dobcheck").style.visibility="hidden";
        document.getElementById("dob").style.border="1px black solid";
    }   
    else
    {
        document.getElementById("dobcheck").style.visibility="visible";
        document.getElementById("dobcheck").style.color="red";
        document.getElementById("dob").style.border="1px red solid";
        document.getElementById("dobcheck").innerHTML="Enter valid Date of Birth using '-'";
    }

    //Mobile Number validation

    if(vmobile.value.trim()=="")
    {
        document.getElementById("mobcheck").style.visibility="visible";
        document.getElementById("mobile").style.border="1px red solid";
    }
    else if(regexdmob.test(vmobile.value))
    {
        document.getElementById("mobcheck").style.visibility="hidden";
        document.getElementById("mobile").style.border="1px black solid";
    }   
    else
    {
        document.getElementById("mobcheck").style.visibility="visible";
        document.getElementById("mobcheck").style.color="red";
        document.getElementById("mobile").style.border="1px red solid";
        document.getElementById("mobcheck").innerHTML="Enter valid Mobile Number";
    }

    //Address Validation

    if(vaddress1L1.value.trim()=="")
    {
        document.getElementById("addressl1check").style.visibility="visible";
        document.getElementById("add1L1").style.border="1px red solid";
    }
    else if(regexaddress.test(vaddress1L1.value))
    {
        document.getElementById("addressl1check").style.visibility="hidden";
        document.getElementById("add1L1").style.border="1px black solid";
    }   
    else if(regexaddress.test(vaddress1L1.value)!=true)
    {
        document.getElementById("addressl1check").style.visibility="visible";
        document.getElementById("add1L1").style.border="1px red solid";
        document.getElementById("addressl1check").style.color="red";
        document.getElementById("addressl1check").innerHTML="Address should not have special characters";
    }

    if(regexaddress.test(vaddress1L2.value) || vaddress1L2.value.trim()=="")
    {
        document.getElementById("add1L2").style.border="1px black solid";
        document.getElementById("addressl2check").style.visibility="hidden";
    }
    else
    {
        document.getElementById("addressl2check").style.visibility="visible";
        document.getElementById("add1L2").style.border="1px red solid";
        document.getElementById("addressl2check").style.color="red";
        document.getElementById("addressl2check").innerHTML="Address should not have special characters";
    }
 
    //city validation

      if(vcity1.value.trim()=="")
    {
        document.getElementById("citycheck").style.visibility="visible";
        document.getElementById("city1").style.border="1px red solid";
    }
    else if(regexname.test(vcity1.value))
    {
        document.getElementById("citycheck").style.visibility="hidden";
        document.getElementById("city1").style.border="1px black solid";
    }   
    else
    {
        document.getElementById("citycheck").style.visibility="visible";
        document.getElementById("city1").style.border="1px red solid";
        document.getElementById("citycheck").style.color="red";
        document.getElementById("citycheck").innerHTML="characters or Numbers not allowed";
    } 

    //State Validation

    if(vstate1.value=="select")
    {
        document.getElementById("state1check").style.visibility="visible";
        document.getElementById("state1").style.border="1px red solid";
    }
    else
    {
        document.getElementById("state1check").style.visibility="hidden";
        document.getElementById("state1").style.border="1px black solid";
    }

    //zipcode Validation

     if(vzipcode1.value.trim()=="")
    {
        document.getElementById("Zipcheck").style.visibility="visible";
        document.getElementById("zipcode1").style.border="1px red solid";
    }
    else if(regexdzip.test(vzipcode1.value))
    {
        document.getElementById("Zipcheck").style.visibility="hidden";
        document.getElementById("zipcode1").style.border="1px black solid";
    }   
    else
    {
        document.getElementById("Zipcheck").style.visibility="visible";
        document.getElementById("zipcode1").style.border="1px red solid";
        document.getElementById("Zipcheck").style.color="red";
        document.getElementById("Zipcheck").innerHTML="pincode should be 6 digits";
    } 
 
     //Permanent address Validation

    if(vaddress2L1.value.trim()=="")
    {
        document.getElementById("Paddressl1check").style.visibility="visible";
        document.getElementById("add2L1").style.border="1px red solid";
    }
    else if(regexaddress.test(vaddress2L1.value))
    {
        document.getElementById("Paddressl1check").style.visibility="hidden";
        document.getElementById("add2L1").style.border="1px black solid";
    }   
    else if(regexaddress.test(vaddress2L1.value)!=true)
    {
        document.getElementById("Paddressl1check").style.visibility="visible";
        document.getElementById("add2L1").style.border="1px red solid";
        document.getElementById("Paddressl1check").style.color="red";
        document.getElementById("Paddressl1check").innerHTML="Address should not have special characters";
    }

    if(regexaddress.test(vaddress2L2.value) || vaddress2L2.value.trim()=="")
    {
        document.getElementById("Paddressl2check").style.visibility="hidden";
        document.getElementById("add2L2").style.border="1px black solid";
    }
    else
    {
        document.getElementById("Paddressl2check").style.visibility="visible";
        document.getElementById("add2L2").style.border="1px red solid";
        document.getElementById("Paddressl2check").style.color="red";
        document.getElementById("Paddressl2check").innerHTML="Address should not have special characters";
    }
 
    //city validation -PA

      if(vcity2.value.trim()=="")
    {
        document.getElementById("city2check").style.visibility="visible";
        document.getElementById("city2").style.border="1px red solid";
    }
    else if(regexname.test(vcity2.value))
    {
        document.getElementById("city2check").style.visibility="hidden";
        document.getElementById("city2").style.border="1px black solid";
    }   
    else
    {
        document.getElementById("city2check").style.visibility="visible";
        document.getElementById("city2").style.border="1px red solid";
        document.getElementById("city2check").style.color="red";
        document.getElementById("city2check").innerHTML="characters or Numbers not allowed";
    } 

    //State Validation

    if(vstate1.value=="select")
    {
        document.getElementById("state2check").style.visibility="visible";
        document.getElementById("state2").style.border="1px red solid";
    }
    else
    {
        document.getElementById("state2check").style.visibility="hidden";
        document.getElementById("state2").style.border="1px black solid";
    }

    //zipcode Validation - PA
    
     if(vzipcode2.value.trim()=="")
    {
        document.getElementById("Zip2check").style.visibility="visible";
        document.getElementById("zipcode2").style.border="1px red solid";
    }
    else if(regexdzip.test(vzipcode2.value))
    {
        document.getElementById("Zip2check").style.visibility="hidden";
        document.getElementById("zipcode2").style.border="1px black solid";
    }   
    else
    {
        document.getElementById("Zip2check").style.visibility="visible";
        document.getElementById("zipcode2").style.border="1px red solid";
        document.getElementById("Zip2check").style.color="red";
        document.getElementById("Zip2check").innerHTML="pincode should be 6 digits";
    }  
   
    //file validation

     if(vphoto.value==false)
    {
        document.getElementById("filecheck").style.visibility="visible";
        document.getElementById("photo").style.border="1px red solid";
    }
    else 
    {
        document.getElementById("filecheck").style.visibility="hidden";
        document.getElementById("submit").style.border="1px black solid";
    }    
}

//check box funtion--copying PA from Current Address

function copyaddress()
{
    
    var vaddress1L1=document.getElementById("add1L1");
    var vaddress1L2=document.getElementById("add1L2");
    var vcity1=document.getElementById("city1");
    var vstate1=document.getElementById("state1");
    var vzipcode1=document.getElementById("zipcode1");
    document.getElementById("add2L1").value=vaddress1L1.value;
    document.getElementById("add2L2").value=vaddress1L2.value;
    document.getElementById("city2").value=vcity1.value;
    document.getElementById("state2").value=vstate1.value;
    document.getElementById("zipcode2").value=vzipcode1.value;

}


