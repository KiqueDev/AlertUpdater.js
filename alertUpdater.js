// A Modal alert for updates
// By: Enrique W.
(function (root) {
  "use strict";

  var AlertUpdater = function (opts) {
    // Check for opts
    if(opts){
      this.myTitle = opts.title || "Update";
      this.myContent = opts.content || ["Default1", "Default2", "Default3"];
      this.callback = opts.callback || function(){};
    }else{
      this.myTitle = "Update";
      this.myContent = ["Default1, Default2, Default3"];
      this.callback =  function(){ console.log("Default Do stuff"); };
    }

    // Create the modal element
    this.modal = document.createElement("div");
    // Create the fade element
    this.fade = document.createElement("div");
    
    // Create the header element and h2 element
    this.header = document.createElement("div");
    this.h2 = document.createElement("h2");

    this.h2.innerHTML = this.myTitle;
    this.header.appendChild(this.h2);

    // Create the container element
    this.container = document.createElement("div");
    this.ul = document.createElement("ul");
    // Create the footer element
    this.footer = document.createElement("div");

    for(var i = 0, l = this.myContent.length; i < l; i++){
      var li = document.createElement("li");
      li.innerHTML = this.myContent[i];
      this.ul.appendChild(li);
    }

    // Create the ok button then add to footer
    this.okBtn = document.createElement("div");

    // Add ok button class and write inner text 'ok'
    this.okBtn.classList.add("alert-updater-okbtn");
    this.okBtn.innerHTML = "Ok";

    // Add container class
    this.modal.classList.add("alert-updater-modal");

    // Add header class
    this.header.classList.add("alert-updater-header");

    // Add header class
    this.container.classList.add("alert-updater-container");

    // Add container class
    this.footer.classList.add("alert-updater-footer");

    // Add fade class
    this.fade.classList.add("alert-updater-fade");

    // Append list to contianer
    this.container.appendChild(this.ul);

    // Append ok button to footer
    this.footer.appendChild(this.okBtn);

    // Append all to modal
    this.modal.appendChild(this.header);
    this.modal.appendChild(this.container);
    this.modal.appendChild(this.footer);

    // Append modal and fade to body
    document.body.appendChild(this.modal);
    document.body.appendChild(this.fade);

    // Add event listener to ok button
    var self = this;
    this.okBtn.addEventListener("click", function(){
      self.fade.style.display = 'none';
      self.modal.style.top = "-800px";

      self.callback();
    });
  };

  // Function that Show the modal 
  AlertUpdater.prototype.show = function () {
    this.modal.style.display='block';
    this.fade.style.display='block';
    this.modal.style.top = "60px";
  };

  // Function that Hide the modal 
  AlertUpdater.prototype.hide = function () {
    this.fade.style.display='none';
    this.modal.style.top = "-800px";

  };

  root.AlertUpdater = AlertUpdater;
}(this));

////////////////////////// TESTING //////////////////////////
var opts = { 
  title: "My Custom title", 
  content: ["task1", "task2"], 
  callback: function(){
    console.log("my stuff here");
  }
};
var a = new AlertUpdater(opts);
