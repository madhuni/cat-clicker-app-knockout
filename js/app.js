/*var Cat = {
    name: ko.observable("Tom"),
    clickCount: ko.observable(0),
    imgSrc: ko.observable("images/cat-image.jpg"),
    nickNames: ko.observableArray(['boby', 'poni', 'silky']),
    title: ko.computed(function () {
        var newTitle;
        var clicks = this.clickCount;
//        console.log(this);
//        console.log(clicks);
        if (clicks > 10 && clicks <= 20) {
            newTitle = "Good!";
        } else if (clicks > 20 && clicks <= 50) {
            newTitle = "Better!!";
        } else if (clicks > 50) {
            newTitle = "Best!!!";
        }
        console.log(newTitle);
        return newTitle;
    }, this)
};

var ViewModel = function () {
//    var cat = Object.create(Cat);
//    console.log(cat.title());
    this.currentCat = ko.observable(Object.create(Cat));
    this.counterIncrement = function () {
        this.currentCat().clickCount(this.currentCat().clickCount() + 1);
    };
};

ko.applyBindings(new ViewModel());*/

 /* Making the raw model */

var Cat = {
    name: "Tom",
    clickCount: ko.observable(0),
    imgSrc: "images/cat-image.jpg",
    nickNames: ['boby', 'poni', 'silky'],
};

var ViewModel = function () {
    var self = this;
    self.currentCat = Object.create(Cat);
    self.clickCounter = function () {
        self.currentCat.clickCount(self.currentCat.clickCount() + 1);
//        return self.currentCat.clickCount;
        console.log("I am increasing the counts!!! : " + self.currentCat.clickCount());
    };
    self.title = ko.computed(function () {
//        console.log("hey Iam working fine....");
        var newTitle = ko.observable("");
        var count = self.currentCat.clickCount();
        if (count <= 10) {
            newTitle("new Born!!");
        } else if (count > 10 && count <= 20) {
            newTitle("becoming Pro!!!");
        } else {
            newTitle("be like Boss !!!");
        }
//        console.log(newTitle);
        return newTitle();
    });
};

ko.applyBindings(new ViewModel());
    