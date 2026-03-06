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
  if (isNaN(candi) || candi < 1 || candi > 10) {
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

    if (!checkCandiNo()) {
        alert("Candidate No. must be a number between 1 and 10");
        return false;
    }

    return true;
}
