var Cat = {
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

ko.applyBindings(new ViewModel());