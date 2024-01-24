const signalR = require("@microsoft/signalr");

let connection = new signalR.HubConnectionBuilder()
    .withUrl("https://api.resonite.com/hub")
    .build();

connection.on("send", data => {
    console.log(data);
});
const user_id = "";
connection.start()
    .then(() => connection.invoke("BroadcastStatus", {
        "userId": this.data.userId,
        "onlineStatus": "Online",
        "outputDevice": "Unknown",
        "sessionType": "Bot",
        "userSessionId": this.data.sessionId,
        "isPresent": true,
        "lastPresenceTimestamp": new Date(Date.now()).toISOString(),
        "lastStatusChange": new Date(Date.now()).toISOString(),
        "compatibilityHash": "mvcontactbot",
        "appVersion": this.config.versionName,
        "isMobile": false
    }, {"groupd": "AllContacts", "targetIds":[]}))