

document.getElementById('myForm').addEventListener('submit',function(event){

    

    var name = document.getElementById('name').value;
    var fathername = document.getElementById('fathername').value;
    var email = document.getElementById('email').value;
    var dob = document.getElementById('dob').value;
    var age = document.getElementById('age').value;

    var userdata ={
        Name: name,
        FatherName: fathername,
        Email: email,
        DOB: dob,
        Age: age,
        
    }

    event.preventDefault();

    console.log(userdata)
})