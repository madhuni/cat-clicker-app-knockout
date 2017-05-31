/*var Cat = {
    name: ko.observable("TOM"),
    clickCount: ko.observable(50),
    imgSrc: ko.observable("images/cat-image-4.jpg"),
    nickNames: ko.observableArray(['boby', 'poni', 'silky']),
    title: ko.computed(function () {
//        console.log(this.name());
        var newTitle = ko.observable("");
        if (this.clickCount() <= 10) {
            newTitle ("new Born baby!");
        } else if (this.clickCount() > 10 && this.clickCount() <= 20) {
            newTitle ("getting your way baby!!!");
        } else {
            newTitle ("Be like Boss!!!!!");
        }
        
        return newTitle();
    }.bind(this))
};*/

var Cat = function () {
    this.name = ko.observable("TOMMY and TUTY");
    this.clickCount = ko.observable(0);
    this.imgSrc = ko.observable("images/cat-image-3.jpg");
    this.nickNames = ko.observableArray(["boby", "pony", "silky"]);
    this.title = ko.computed(function () {
        var newTitle = ko.observable("");
        if (this.clickCount() <= 10) {
            newTitle ("new Born baby!");
        } else if (this.clickCount() > 10 && this.clickCount() <= 20) {
            newTitle ("getting your way baby!!!");
        } else {
            newTitle ("Be like Boss!!!!!");
        }
        
        return newTitle();
    }.bind(this));
};

var ViewModel = function () {
    var self = this;
    
    self.currentCat = new Cat();
//    console.log(self.currentCat);
    self.clickCounter = function () {
        return self.currentCat.clickCount(self.currentCat.clickCount() + 1);
    };
};

ko.applyBindings(new ViewModel());
