function checkSID() {
  let sid = (document.getElementById("sid").value).trim();
  if (sid.length == 10) {
    return true;
  } else {
    return false;
  }
}

function checkCandiNo() {
  let candi = (document.getElementById("candi").value).trim();
  if (isNaN(candi) || candi < 1) {
    return false;
  } else {
    return true;
  }
}

function validateForm() {

    var sid = document.getElementById("sid").value;

    if (sid.length != 10) {
        alert("Student ID must be 10 characters");
        return false;
    }

    if (!/^[0-9]+$/.test(sid)) {
        alert("Student ID must contain numbers 0-9 only");
        return false;
    }

    return true;
}
	