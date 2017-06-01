var cats = [{
        name: "Mr. Tom",
        imgSrc: "images/cat-image.jpg",
        clickCount: 3,
        nickNames: ["ramesh"],
        viewPanal: false
    }, {
        name: "Mr. Tommy",
        imgSrc: "images/cat-image-2.jpg",
        clickCount: 4,
        nickNames: ["suresh"],
        viewPanal: false
    }, {
        name: "Mr. P Body",
        imgSrc: "images/cat-image-3.jpg",
        clickCount: 5,
        nickNames: ["mahesh"],
        viewPanal: false
    }, {
        name: "Mr. Hungry",
        imgSrc: "images/cat-image-4.jpg",
        clickCount: 6,
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
    
    self.currentCat = ko.observable(self.catsContainer()[0]);
    
    self.setCurrentCat = function (catName) {
//        console.log("I am : "+ catName());
//        console.log(self.catsContainer()[0]);
        for (var i = 0; i < self.catsContainer().length; i++) {
//            console.log(self.catsContainer[i]);
            if (self.catsContainer()[i].name() === catName())
//                console.log(self.catsContainer()[i].name());
                self.currentCat(self.catsContainer()[i]);
            }
        }
        console.log(self.currentCat().clickCount());
    };
    
    /* Setting the current cat to the first element of the KO array */
    self.clickCounter = function () {
        return self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };
    

var vm = new ViewModel();
ko.applyBindings(vm);