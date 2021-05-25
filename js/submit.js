//javascript code for form input validation
function formvalidate() {
    var name = document.forms['myForm']['username'].value;
    if (name == "" || name == null) {
        alert("Name field can't be Empty");
        return false;
    }

    var email = document.forms['myForm']['useremail'].value;
    if (email == "" || email == null) {
        alert("Email field can't be Empty");
        return false;
    }


    var phone = document.forms['myForm']['userphone'].value;
    if (phone == "" || phone == null) {
        alert("Phone field can't be Empty");
        return false;
    }

    var location = document.forms['myForm']['userlocation'].value;
    if (location == "" || location == null) {
        alert("location field can't be Empty");
        return false;
    }

    var Destination = document.forms['myForm']['userDestination'].value;
    if (Destination == "" || Destination == null) {
        alert("Destination field can't be Empty");
        return false;
    }

    var date = document.forms['myForm']['date'].value;
    if (date == "" || date == null) {
        alert("Please select the date");
        return false;
    }

    //##############

    var hours = document.forms['myForm']['hours'].value;
    if (hours == "" || hours == null) {
        alert("Please choose how many hours");
        return false;
    }

    var minutes = document.forms['myForm']['minutes'].value;
    if (minutes == "" || minutes == null) {
        alert("Please choose how many minutes");
        return false;
    }

    var time = document.forms['myForm']['time'].value;
    if (time == "" || time == null) {
        alert("Please choose the part of day");
        return false;
    }

}