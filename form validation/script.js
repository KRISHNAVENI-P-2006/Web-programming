const btn=document.getElementById("submit");
const res=document.getElementById("res");
console.log(btn);
btn.addEventListener("click",function(event){
    event.preventDefault();
    let flag=1;
    res.style.display = "block";
    res.innerHTML="";
    //Student ID must be alphanumeric and exactly 8 characters
    let id=document.getElementById("id").value; 
    if(! (/^[a-zA-Z0-9]{8}$/.test(id))){
        res.innerHTML+=("<br>Student ID must be alphanumeric and contain exactly 8 characters");
        flag=0;
    }

    //Full Name should contain only alphabets and spaces.
    let name=document.getElementById("name").value.trim();
    if(name==="" || !(/^[a-zA-Z ]+$/.test(name))){
        res.innerHTML+=("<br>Full Name should contain only alphabets and spaces.");
        flag=0;
    }

    //Username must contain 6–15 characters without spaces.
    let username=document.getElementById("username").value.trim();
    if(!(/^[^\s]{6,15}$/).test(username)){
        res.innerHTML+=("<br>Username must contain 6–15 characters without spaces.");
        flag=0;
    }

    //Email Address must follow a valid email format.
    /*let email=document.getElementById("email").value.trim();
    if(!(/^[^\s@]+@[^\s@]+\.[a-z]+$/.test(email)) || email===""){
        res.innerHTML+=("<br>Email Address must follow a valid email format");
        flag=0;
    }*/

    //Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one digit, and one special character.
    let password=document.getElementById("password").value.trim();
    if(!(password.length>=8) || !/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[0-9]/.test(password) || /[!@#$%^&*.-]/.test(password)){
        res.innerHTML+=("<br>Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one digit, and one special character.");
        flag=0;
    }

    //Confirm Password must match the Password.
    let cpass=document.getElementById("cpassword").value.trim();
    if(cpass!==password){
        res.innerHTML+=("<br>Confirm Password must match the Password.");
        flag=0;
    }

    //Mobile Number and Alternate Mobile Number must contain exactly 10 digits and must not be identical.
    let mob=document.getElementById("mob").value.trim();
    if(!(/^[0-9]{10}$/.test(mob))){
        res.innerHTML+=("<br>Invalid Mobile Number format");
        flag=0;
    }

    let altmob=document.getElementById("altmob").value.trim();
    if((altmob===mob) || (/^[0-9]{10}$/.test(altmob))){
        res.innerHTML+=("<br>Invalid Mobile Number format or Same as Mobile Number");
        flag=0;
    }

    //The applicant must be at least 18 years old 
    //age from dob
    let dob=new Date(document.getElementById("dob").value);
    let today=new Date();
    let age=today.getFullYear()-dob.getFullYear();
    if(today.getMonth()<dob.getMonth() || (today.getMonth()==dob.getMonth()) &&(today.getDate() < dob.getDate()) )age--;

    if(age<18){
         res.innerHTML+=("<br>The applicant must be at least 18 years old ");
         flag=0;
    }

    let iage=Number(document.getElementById("age").value);
    if(iage!==age){
        res.innerHTML+=("<br>Age doesnt match with dob ");
        flag=0;
    }

    //Gender must be selected.
    let g=document.getElementById("gender").value;
    if(g==""){
        res.innerHTML+=("<br>Gender must be selected. ");
        flag=0;
    }

    //Address must contain at least 20 characters.
    let addr=document.getElementById("address").value.trim();
    if(addr.length<20){
        flag=0;
         res.innerHTML+=("<br>Address must contain at least 20 characters.");
    }

    //PIN Code must contain exactly 6 digits.
    let pin=document.getElementById("pincode").value;
    if(! (/^[0-9]{6}$/).test(pin)){
        flag=0;
        res.innerHTML+=("<br>PIN Code must contain exactly 6 digits.");
    }

    //Department, and Semester must be selected from the drop-down lists.
    let dept=document.getElementById("dlist").value;
    if(dept==""){
        flag=0;
        res.innerHTML+=("<br>Select Department");
    }
    let sem=document.getElementById("slist").value;
    if(sem==""){
        flag=0;
        res.innerHTML+=("<br>Select Semester");
    }

    //At least two hobbies must be selected.
    let hobbies=document.querySelectorAll('input[name="hobby"]:checked');
    if(hobbies.length<2){
        flag=0;
        res.innerHTML+=("<br>Select at least 2 hobbies");
    }

    //At least one skill must be selected.
    let skills=document.querySelectorAll('input[name="skills"]:checked');
    if(skills.length<1){
        flag=0;
        res.innerHTML+=("<br>Select at least 1 skill");
    }

    //Profile Photo must be of type JPG, JPEG, or PNG and should not exceed 2 MB.
    let pic=document.getElementById("profile").files[0];
    if(pic.type !='image/JPG' || pic.type !='image/JPEG' ||pic.type !='image/PNG'){
        flag=0;
        res.innerHTML+=("<br>Invalid image type");
    }
    if(pic.size > 2 *1024 *1024){
        flag=0;
        res.innerHTML+=("<br>Image size exceeded");
    }

    //The Terms and Conditions checkbox must be accepted before submission.
    let tnc=document.querySelectorAll('input[name="tnc"]:checked');
    if(!tnc){
        flag=0;
        res.innerHTML+=("<br>Accept TnC");
    }
    if(flag){
        res.innerHTML=("STUDENT REGISTRATION SUCCESSFUL !!");
    }
});