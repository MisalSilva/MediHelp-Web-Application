function validation(form) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const radio_array = document.getElementsByName("rating");
    const selected_value = document.getElementById("receive-updates").value;
    const first_visiting = document.getElementsByName("first-visiting");
    const informative = document.getElementsByName("informative");
    const recommend = document.getElementsByName("recommend");
    const improvements = document.getElementById("improvements").value;
    
    if (name === '') {
        alert("Name is required!");
        return false;
    } else if (email === '') {
        alert("E-mail is required!");
        return false;
    } else if (!validate_email(email)) {
        alert("Invalid e-mail format");
        return false;
    } else if (get_radio_value(radio_array) === null) {
        alert("Rating is required!");
        return false;
    } else if (!isAnyChecked(first_visiting) || !isAnyChecked(informative) || !isAnyChecked(recommend)) {
        alert("Please fill all required fields");
        return false;
    } else if (document.getElementById('no2').checked && improvements.trim() === '') {
        alert("Please suggest improvements");
        return false;
    } else if (selected_value === 'disabled selected') {
        alert("Receive updates field is required!");
        return false;
    } else {
        alert("Thank you for your feedback!");
        return true;
    }
}
function validate_email(form) {
    const email = document.getElementById('email').value;
    if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
        return false;
    } else {
        return true;
    }
}
function get_radio_value(form) {
    const radio_array = document.getElementsByName("rating");
    for (let i = 0; i < radio_array.length; i++) {
        if (radio_array[i].checked) {
            return radio_array[i].value;
        }
    }
    return null;
}
function isAnyChecked(elements) {
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].checked) {
            return true;
        }
    }
    return false;
}


