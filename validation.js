const handleRequest = e => {
    e.preventDefault();
    
    username = document.getElementById('username').value;
    password = document.getElementById('password').value;
    phoneNumber = document.getElementById('phone-number').value;
    email = document.getElementById('email').value;
    ownershipType = document.getElementById('ownership-type').value;
    apartmentNumber = document.getElementById('apartment-number').value;
    
    var allCorrect = true;
    if (username) {
        if (username.length < 3 || username.length > 10) {
            error = document.createElement('div');
            error.setAttribute("class", "error");
            error.innerText = 'Между три и десет символа';  
            fieldContainer = document.getElementsByClassName('field-container')[0];
            fChild = fieldContainer.firstElementChild;
            fChild.className = "input-field-error";
            fieldContainer.appendChild(error);
            allCorrect = false;
        }
    } else {
        error = document.createElement('div');
        error.setAttribute("class", "error");
        error.innerText = 'Въведете потребителско име!';  
        fieldContainer = document.getElementsByClassName('field-container')[0];
        fChild = fieldContainer.firstElementChild;
        fChild.className = "input-field-error";
        console.log(fChild);
        fieldContainer.appendChild(error);
        allCorrect = false;
    }

    if (password) {
        if (password.length < 6 || password.length > 10) {
            error = document.createElement('div');
            error.setAttribute("class", "error");
            error.innerText = 'Между шест и десет символа';  
            fieldContainer = document.getElementsByClassName('field-container')[1];
            fChild = fieldContainer.firstElementChild;
            fChild.className = "input-field-error";
            fieldContainer.appendChild(error);
            allCorrect = false;
        } else {
            var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/;
            if (!password.match(passw)) {
                error = document.createElement('div');
                error.setAttribute("class", "error");
                error.innerText = 'Малка, главна букви, цифра';  
                fieldContainer = document.getElementsByClassName('field-container')[1];
                fChild = fieldContainer.firstElementChild;
                fChild.className = "input-field-error";
                fieldContainer.appendChild(error);
                allCorrect = false;
            }
        }
    } else {
        error = document.createElement('div');
            error.setAttribute("class", "error");
            error.innerText = 'Паролата е задължително поле!';
            fieldContainer = document.getElementsByClassName('field-container')[1];
            fChild = fieldContainer.firstElementChild;
            fChild.className = "input-field-error"; 
            fieldContainer.appendChild(error);
            allCorrect = false;
    }

    if (phoneNumber) {
        var phoneNum = /^\d{10}$/;
        if (!phoneNumber.match(phoneNum)) {
            error = document.createElement('div');
            error.setAttribute("class", "error");
            error.innerText = 'Въведете валиден телефонен номер!';
            fChild = fieldContainer.firstElementChild;
            fChild.className = "input-field-error";
            fieldContainer = document.getElementsByClassName('field-container')[2];
            fieldContainer.appendChild(error);
            allCorrect = false;
        }
    } else {
        error = document.createElement('div');
            error.setAttribute("class", "error");
            error.innerText = 'Тел. номер е задължителен!';
            fieldContainer = document.getElementsByClassName('field-container')[2];
            fChild = fieldContainer.firstElementChild;
            fChild.className = "input-field-error";
            fieldContainer.appendChild(error);
            allCorrect = false;
    }

    if (email) { 
        var emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;    
        if (!email.match(emailPattern)) {
            error.setAttribute("class", "error");
            error.innerText = 'Въведете валиден email!';
            fieldContainer = document.getElementsByClassName('field-container')[3];
            fChild = fieldContainer.firstElementChild;
            fChild.className = "input-field-error";
            fieldContainer.appendChild(error);
            allCorrect = false;
        } 
    } else {
        error.setAttribute("class", "error");
        error.innerText = 'Email е задължителен!';
        fieldContainer = document.getElementsByClassName('field-container')[3];
        fChild = fieldContainer.firstElementChild;
        fChild.className = "input-field-error";
        fieldContainer.appendChild(error);
        allCorrect = false;
    }

    if (ownershipType !== '1' && ownershipType !== '2' && ownershipType !== '3') {
        error = document.createElement('div');
        error.setAttribute("class", "error");
        error.innerText = 'Изберете опция!';
        fieldContainer = document.getElementsByClassName('field-container')[4];
        fChild = fieldContainer.firstElementChild;
        fChild.className = "select-field-error";
        fieldContainer.appendChild(error);
        allCorrect = false;
    }

    if (apartmentNumber) {
        var apartmentNumb = /^\d*$/;
        if (!apartmentNumber.match(apartmentNumb)) {
            error = document.createElement('div');
            error.setAttribute("class", "error");
            error.innerText = 'Въведете валиден номер!';
            fieldContainer = document.getElementsByClassName('field-container')[5];
            fChild = fieldContainer.firstElementChild;
            fChild.className = "input-field-error";
            fieldContainer.appendChild(error);
            allCorrect = false;
        }
    } else {
        error = document.createElement('div');
        error.setAttribute("class", "error");
        error.innerText = 'Номер на апартамент е задължителен!';
        fieldContainer = document.getElementsByClassName('field-container')[5];
        fChild = fieldContainer.firstElementChild;
        fChild.className = "input-field-error";
        fieldContainer.appendChild(error);
        allCorrect = false;
    }

    clearValues();

    if (allCorrect) {
        success = document.createElement('div');
        success.setAttribute("class", "success");
        success.innerText = 'Успешна регистрация!';
        fieldContainer = document.getElementsByClassName('field-container')[6];
        fChild = fieldContainer.firstElementChild;
        fChild.className = "input-field-error";
        fieldContainer.appendChild(success);
    }  
}


(function () {
    document.getElementById('register-btn').addEventListener('click', handleRequest);
  })();

function clearValues() {
    document.getElementById('username').value = "";
    document.getElementById('password').value = "";
    document.getElementById('phone-number').value = "";
    document.getElementById('email').value = "";
    document.getElementById('ownership-type').value = "";
    document.getElementById('apartment-number').value = "";
}

function fillValues() {
    document.getElementById('username').value = 'vmarkova';
    document.getElementById('password').value = 'vMark96';
    document.getElementById('phone-number').value = '0785511479';
    document.getElementById('email').value = 'vvgdmm9@abv.bg';
    document.getElementById('ownership-type').value = '1';
    document.getElementById('apartment-number').value = '9';
}

// fillValues();