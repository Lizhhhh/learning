window.onload = initForms;

function initForms() {
  for (var i = 0; i < document.forms.length; i++) {
    document.forms[i].onsubmit = validForm;
  }
}

function validForm() {
  var allGood = true;
  var allTags = document.getElementsByTagName("*"); // 得到所有的标签名称

  for (var i = 0; i < allTags.length; i++) {
    if (!validTag(allTags[i])) { // 对每一个标签进行validTag判断, 只要有一个不是合法的就将allGood置为false
      allGood = false;
    }
  }
  return allGood;

  function validTag(thisTag) {
    var outClass = "";
    var allClasses = thisTag.className.split(" ");

    for (var j = 0; j < allClasses.length; j++) {
      outClass += validBasedOnClass(allClasses[j]) + " ";
    }
    thisTag.className = outClass;

    if (outClass.indexOf("invalid") > -1) {
      thisTag.focus();
      if (thisTag.nodeName == "INPUT") {
        thisTag.select();
      }
      return false;
    }
    return true;

    function validBasedOnClass(thisClass) {
      var classBack = "";
      switch (thisClass) {
        case "":
        case "invalid":
          break;
        case "reqd":
          if (allGood && thisTag.value == "") {
            classBack = "invalid ";
          }
          classBack += thisClass;
          break;
        default:
          classBack += thisClass;
      }
      return classBack;
    }
  }
}