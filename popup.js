document.onload = notifyMe();
function notifyMe() {
  var request = new XMLHttpRequest();
  request.open("GET", "http://static.cricinfo.com/rss/livescores.xml", true);
  request.send();
  request.onload = success;
    function success() {
    var xml = request.responseXML;
    console.log("data",xml);
    var descriptions = xml.getElementsByTagName("description");
    var score = descriptions[1].textContent;    
    document.getElementById("score").innerHTML = score;
    }
}

/*document.getElementById('notify').onclick = notifyMe;

function notifyMe() {
  var request = new XMLHttpRequest();
  request.open("GET", "http://static.cricinfo.com/rss/livescores.xml", true);
  request.send();
  request.onload = success;
    function success() {
    var xml = request.responseXML;
    console.log("data",xml);
    var descriptions = xml.getElementsByTagName("description");
    var score = descriptions[1].textContent;    

      if (!Notification) {
        alert('Notifications are supported in modern versions of Chrome, Firefox, Opera and Firefox.'); 
        return;
      }
      if (Notification.permission !== "granted")
        Notification.requestPermission();
      var notification = new Notification('Live Cricket Score', {
        icon: 'yocricket.png',
        body: score,
      });
    }
}
*/