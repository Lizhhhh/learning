function downloadLinks() {
    var oXHR = zXmlHttp.createRequest();

    if (iFailed < 10) {
        try {
            oXHR.open("get", "AdditionalLinks.txt", true);
            oXHR.onreadystate = function() {
                if (oXHR.readyState == 4) {
                    if (oXHR.status == 200 || oXHR.status == 304) {
                        var divAdditionalLinks = document.getElementById("divAdditionalLinks");
                        divAdditionalLinks.innerHTML = oXHR.responseText;
                        divAdditionalLinks.style.display = "block";
                    } else {
                        iFailed++;
                        downloadLinks();
                    }
                }
            }
            oXHR.send(null);
        } catch (oException) {
            iFailed++;
            downloadLinks();
        }
    }
}