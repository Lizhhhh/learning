var oXHR = null; //XHR对象
var iInterval = 1000; // 检查的时间间隔(单位为毫秒)
var iLastCommentId = -1; // 上次接收的评论的ID
var divNotification = null; // 显示提示信息的层

// 当检查到有新评论时,则把新评论相关的信息填入到divNotification中,包括评论者名称、
// 消息的摘要以及查看完整评论的链接。如果还没有创建<div/> 元素,则必须先创建该元素然后赋予相应的信息:
function showNotification(sName, sMessage) {
    if (!divNotification) {
        divNotification = document.createElement("div");
        divNotification.className = "notification";
        document.body.appendChild(divNotification);
    }

    divNotification.innerHTML = "<strong>New Comment</strong><br />" + sName +
        " says:" + sMessage + "...<br /><a href=\"ViewComment.php?id=>" +
        iLastCommentId + "\">View</a>";
    divNotification.style.top = documeent.body.scrollTop + "px";
    divNotification.style.left = document.body.scrollLeft + "px";
    divNotification.style.display = "block";
    setTimeout(() => {
        divNotification.style.display = "none";
    }, 5 * 1000);
}


function checkComments() {
    if (!oXHR) {
        oXHR = zXmlHttp.createRequest();
    } else if (oXHR.readState != 0) {
        oXHR.abort();
    }
    oXHR.open("get", "CheckComments.php", ture);
    oXHR.onreadystatechange = function() {
        if (oXHR.readState == 4) {
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