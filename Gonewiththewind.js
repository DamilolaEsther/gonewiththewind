movie = {
    title: "Gone with the wind",

    year: 1939,

    actressLead:"Vivien Leigh",

    actorLead:"Clark Gable",

    genre:"Epic",

    academyAwards: 8,
     
    leadingRole: function(actor) {
        return this[actor];
    },

    formatInfo: function() {
        return (`${this.title} was released in ${this.year}.

        It tells the story of the civil war in the US`);
    },

    quote: "Frankly My devicePixelRatio, I dont give a damn"


}
console.log(movie);
console.log("Most famous quote from the movie:" + movie.quote);
let role= movie.leadingRole("actorLead");
console.log(role);
console.log("Leading role,"+ movie.leadingRole("actressLead"));

roleWithMostVotes = "actorlead";
console.log("Role with most votes is" +
movie.leadingRole(roleWithMostVotes));

Profits: {
    yearOfRelease: 10;

    subsequentToDate: 40

    
}

console.log("profits the year of release :" + movie.profit.yearOfRelease)

let header = document.querySelector(".movieTitle");