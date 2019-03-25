function loadNextPage() {
    if (isNextPageToload < iPageCount || isNextPageToload == iPageCount) {
        if (!oXHR) {
            oXHR = zXmlHttp.createRequest();
        } else if (oXHR.readyState != 0) {
            oXHR.abort();
        }

        oXHR.open("get", getURLForPage(isNextPageToload) + "&dataonly=true", true);

        oXHR.onreadystatechange = function() {

        };
        oXHR.send(null);
    }
}