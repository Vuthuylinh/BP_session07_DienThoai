function Mobile(battery,drafts,inbox, sent,status){
    this.battery=battery;
    this.inbox=[];
    this.sent=[];
    this.drafts=[];
    this.status=status;
    this.setBattery=function (battery) {
        this.battery=battery;
    };
    this.getBattery=function () {
        return this.battery;
    };
    this.setDrafts=function (drafts) {
        this.drafts= drafts;
    };
    this.getDrafts=function () {
        return this.drafts;
    };
    this.setInbox=function (inbox) {
        this.inbox=inbox;
    };
    this.getInbox=function () {
        return this.inbox;
    };
    this.setSent=function (sent) {
        this.sent=sent;
    };
    this.getSent=function () {
        return this.sent;
    };
    this.getStatus = function () {
        if(this.battery>0){
            return true;
        }else{alert(" Your phone run out of battery, please charge! ")}
    };
    this.turnOnPhone=function () {
       this.status= true;
       alert("Your Phone is on.");
    };
    this.turnOffPhone=function () {
        this.status=false;
        alert("Your phone is off");
    };
    this.chargePhone=function (battery) {
        if(battery===100){
            alert("battery is full");
        }else if(battery<100 && battery>=0){
            this.battery++;
            return this.battery;
        }

    };
    this.composeMessage=function (drafts) {
        if (this.status){
            this.battery--;
            this.drafts.unshift(drafts);
        }
    };
    this.receiveMessage=function (mobile) {
        if (this.status){
            this.battery--;
           this.inbox.unshift(mobile.getDrafts.shift());
        }
    };
    this.sendMessage=function (mobile) {
        if (this.status){
            this.battery--;
            this.sent.unshift(this.drafts.shift());
        }
    };
    this.viewInbox=function () {
        document.write("Received message: "+ "<br>");
        if(this.status){
            for(let i=0; i<inbox.length;i++){
                document.write(inbox[i])
            }

        }
        this.battery--;
    };
    this.viewSent=function () {
        document.write("Sent message: "+ "<br>");
        if(this.status){
            for(let i=0; i<sent.length;i++){
                document.write(sent[i])
            }

        }
        this.battery--;
    }
}
let nokia = new Mobile(10,["I love you"],["Hi there!","Good morning lovie"],["I love you too"],true);
let iPhone= new Mobile(9,["It's great", "I'm cold"],["I love you"],["It's so sweet"], true);
let draft1= nokia.composeMessage(nokia.getDrafts());
alert("Nokia is composing: "+draft1)
let send1= nokia.sendMessage(iPhone);
alert("Nokia is sending a message: "+ send1);
let view1= iPhone.viewInbox();
alert("View iPhone inbox: ");