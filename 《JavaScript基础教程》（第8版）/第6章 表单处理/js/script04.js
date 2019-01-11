window.onload = initForms;

function initForms() {
  for (var i = 0; i < document.forms.length; i++) {
    document.forms[i].onsubmit = validForm;
  }
}

function validForm() {
  var allGood = true;
  var allTags = document.getElementsByTagName("*");

  for (var i = 0; i < allTags.length; i++) {
    if (!validTag(allTags[i])) {
      allGood = false;
    }
  }
  return allGood;

  function validTag(thisTag) {
    var outClass = "";
    var allClass = thisTag.className.split(" ");
    for (var j = 0; j < allClass.length; j++) {
      outClass += validTagBaseOnClass(allClass[j]) + " ";
    }
    thisTag.className = outClass;
    if (outClass.indexOf("invalid") > -1) {
      invalidLabel(thisTag.parentNode);
      console.log(thisTag.parentNode);
      thisTag.focus();
      if (thisTag.nodeName == "INPUT") {
        thisTag.select();
      }
      return false;
      function invalidLabel(parentTag) {
        if (parentTag.nodeName == "LABEL") {
          parentTag.className += " invalid";
        }
      }
    }
    return true;

    function validTagBaseOnClass(thisClass) {
      var backClass = "";
      switch (thisClass) {
        case "":
        case "invalid":
          break;
        case "reqd":
          if (allGood && thisTag.value == "") {
            backClass = "invalid ";
          }
          backClass += thisClass;
          break;
        case "passwd1":
          if (allGood && !crossCheck(thisTag, thisClass)) {
            backClass = "invalid ";
          }
          backClass += thisClass;
          break;
        default:
          backClass += thisClass;
      }
      return backClass;
      function crossCheck(thisTag, thisClass) {
        if (!document.getElementById(thisClass)) {
          return false;
        } else {
          return thisTag.value == document.getElementById(thisClass).value;
        }
      }
    }
  }
}
