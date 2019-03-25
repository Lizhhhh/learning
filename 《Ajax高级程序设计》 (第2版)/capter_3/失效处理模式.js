var oXHR = null;
var iInterval = 1000;
var iLastCommentId = -1;
var divNotification = null;
var blnRequestsEnabled = true;

function checkComments() {
    if (blnRequestsEnabled) {
        if (!oXHR) {
            oXHR = zXmlHttp.createRequest();
        } else if (oXHR.readState != 0) {
            oXHR.abort();
        }

        oXHR.open("get", "CheckComments.php", true);
        oXHR.onreadystatechange = function() {
            if (oXHR.readyState == 4) {
                if (oXHR.status == 200 || oXHR.status == 304) {
                    var aData = oXHR.responseText.split("||");
                    if (aData[0] != iLastCommentId) {
                        iLastCommentId = aData[0];
                        if (iLastCommentId != -1) {
                            showNotification(aData[1], aData[2]);
                        }
                    }
                    setTimeout(checkComments, iInterval);
                }
            }
        };
        oXHR.send(null);
    }
}