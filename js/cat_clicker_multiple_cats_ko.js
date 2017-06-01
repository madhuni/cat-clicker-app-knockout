var cats = [{
        name: "Mr. Tom",
        imgSrc: "images/cat-image.jpg",
        clickCount: 0,
        nickNames: ["ramesh"],
        viewPanal: false
    }, {
        name: "Mr. Tommy",
        imgSrc: "images/cat-image-2.jpg",
        clickCount: 0,
        nickNames: ["suresh"],
        viewPanal: false
    }, {
        name: "Mr. P Body",
        imgSrc: "images/cat-image-3.jpg",
        clickCount: 0,
        nickNames: ["mahesh"],
        viewPanal: false
    }, {
        name: "Mr. Hungry",
        imgSrc: "images/cat-image-4.jpg",
        clickCount: 0,
        nickNames: ["divesh"],
        viewPanal: false
    }];

/* Using the constructor function to accept a cat object as parameter and make the new cat 
*/
var Cat = function (data) {
    this.name = ko.observable(data.name);
    this.clickCount = ko.observable(data.clickCount);
    this.imgSrc = ko.observable(data.imgSrc);
    this.nickNames = ko.observableArray(data.nickNames);
    this.title = ko.computed(function () {
        var newTitle = ko.observable("");
        if (this.clickCount() <= 10) {
            newTitle("new Born baby!");
        } else if (this.clickCount() > 10 && this.clickCount() <= 20) {
            newTitle("getting your way baby!!!");
        } else {
            newTitle("Be like Boss!!!!!");
        }

        return newTitle();
    }.bind(this));
};

var ViewModel = function () {
    var self = this;
    
    /* Making a Knockout cat observable array*/
    self.catsContainer = ko.observableArray([]);
    
    /* Iterating through all the cats and pushing the values in the catsContainer array */
    for (var i = 0; i < cats.length; i++) {
        self.catsContainer.push(new Cat(cats[i]));
    }
    
    /* Setting the initial value of the current cat to the first cat */
    self.currentCat = ko.observable(self.catsContainer()[0]);
    
    self.setCurrentCat = function (catObj) {
        self.currentCat(catObj);
    }
    
    self.clickCounter = function () {
        return self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };
    
};

var vm = new ViewModel();
ko.applyBindings(vm);