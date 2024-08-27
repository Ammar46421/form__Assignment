document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var fathername = document.getElementById('fathername').value;
    var DOB = document.getElementById('DOB').value;
    var age = document.getElementById('age').value;

    console.log('Name:', name);
    console.log('Father Name:', fathername);
    console.log('Date Of Birth:', DOB);
    console.log('Email:', email);
    console.log('Age:', age);
});