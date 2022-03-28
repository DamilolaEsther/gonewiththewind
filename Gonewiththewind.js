
let mlead = document.querySelector(".leadingRole");
movie = {
    title: "Gone with the wind",

    year: 1939,

    actressLead:"Vivien Leigh",

    actorLead:"Clark Gable",

    genre:"Epic",

    academyAwards: 8,
     
    leadingRole: function (actor) {
        if (actor == "actorLead") {
            mlead.textContent = "Lead actor is " + movie.actorLead;
        } else if (actor == "actressLead") {
            mlead.textContent = "Lead actress is " + movie.actressLead
        }
        return this[actor];
    },

    formatInfo: function() {
        return (`${this.title} was released in ${this.year}.

        It tells the story of the civil war in the US`);
    },

    profits: {
        yearOfRelease: 10,

        subsequentToDate: 40
    },

    quote: "Frankly My Dear, I dont give a damn"


}
console.log(movie);
console.log("Most famous quote from the movie:" + movie.quote);
let role= movie.leadingRole("actorLead");
console.log(role);
console.log("Leading role,"+ movie.leadingRole("actressLead"));

roleWithMostVotes = "actorlead";
console.log("Role with most votes is" +
movie.leadingRole(roleWithMostVotes));

console.log("profits the year of release :" + movie.profits.yearOfRelease);

let mtitle = document.querySelector(".movieTitle");
let minfo = document.querySelector(".formatInfo");
let mgenre = document.querySelector(".movieGenre");
let mawards = document.querySelector(".movieAwards");
let mquote = document.querySelector(".movieQuote");

mtitle.textContent = movie.title;
minfo.textContent = movie.formatInfo();
mgenre.textContent = movie.title+ " is classified as a/an " + movie.genre + " genre";
mawards.textContent = movie.title + " has " + movie.academyAwards + " Academy Awards.";
mquote.textContent = "Most Famous Quote in the movie: " + movie.quote;

