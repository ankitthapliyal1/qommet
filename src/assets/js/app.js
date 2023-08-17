function handleCredentialResponse(response) { 
    // decodeJwtResponse() is a custom function defined by you
    // to decode the credential response.
    alert('ok');
    fetch('http://localhost:3000/api/v1/auth/googleredirect', {
method: 'POST',
headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
},
body: JSON.stringify(response)
})
.then(response => response.json())
.then(res => {
 
if(res.success){
    localStorage.setItem('QometToken', res.token);
    localStorage.setItem('email', res.email);
    localStorage.setItem('QometLogin', 'true');
    window.location.href='http://localhost:4200/0/instance';
}

});
}