function matchpass(){
    var firstpassword=document.f1.password.value;
    var secondpassword=document.f1.password2.value;
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(input_str);
}

function validateForm(event) {
    var phone = document.getElementById('myform_phone').value;
    if (!validatePhoneNumber(phone)) {
        document.getElementById('phone_error').classList.remove('hidden');
    } else {
        document.getElementById('phone_error').classList.add('hidden');
        alert("validation success")
    }
    event.preventDefault();
}

document.getElementById('myform').addEventListener('submit', validateForm);
 var firstpassword=document.f1.password.value;
 var secondpassword=document.f1.password2.value;
    if(firstpassword==secondpassword){
    return true;
    }
    else{
    alert("password must be same!");
    return false;
    }
