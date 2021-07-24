const graphContainer = document.getElementById("gitgraph");
const gitGraph = GitgraphJS.createGitgraph(graphContainer, {
  orientation: GitgraphJS.Orientation.VerticalReverse,
  template: GitgraphJS.templateExtend(GitgraphJS.TemplateName.Metro, {
    commit: {
      message: {
        displayAuthor: false,
        displayHash: false,
        displayDate: true
      },
    },
  })
});

var master = gitGraph.branch( "master" );
var datalets = master.branch( "work" );
var opendata = master.branch( "opendata" );
var devloper = datalets.branch( "devloper" );

master.commit({
  subject: "Smartuse.ch launched at the Metropolitankonferenz Zürich",
  url: "https://github.com/smartuse/platform"
}).tag("2019.5");

opendata.commit({
  subject: "Released DataPackage.jl, the Julia library for Frictionless Data",
  url: "https://github.com/frictionlessdata/DataPackage.jl"
}).tag("2018.10");
master.merge(opendata);

datalets.commit({
  subject: "Coded, migrated and supported the website of Public-Health.ch",
  url: "https://github.com/dataletsch/public-health-ch/"
}).tag("2017.4");

master.merge(datalets);

opendata.commit({
  subject: "Launched handbook.opendata.swiss - knowledge base of the Swiss federal OGD project",
  url: "https://github.com/opendata-swiss/ogd-handbook-wiki"
}).tag("2016.3");


opendata.commit({
  subject: "Hack4AgeingWell, a hackathon to improve conditions of life for older adults",
  url: "https://blog.datalets.ch/022/"
}).tag("2016");

devloper.commit({
  subject: "Collecting and cleaning open data on the medical profession",
  url: "https://correctiv.org/recherchen/euros-fuer-aerzte/datenbank/empfaenger-suche/?q=&amp;country=CH"
}).tag("2016").tag("2017");

datalets.commit({
  subject: "Data engineer", detailId: "detail-bdz-pathways",
  date: new Date("2016") });

opendata.commit({
  subject: "Organiser", detailId: "detail-soda-camp",
  date: new Date("2015") });

devloper.commit({
  subject: "Data engineer", detailId: "detail-brandcrafter",
  date: new Date("2016") });

devloper.commit({
  subject: "App developer", detailId: "detail-mimoti",
  date: new Date("2016") });

datalets.commit({
  subject: "Programming", detailId: "detail-dribdat",
  date: new Date("2015") });

devloper.commit({
  subject: "Programming", detailId: "detail-synopses",
  date: new Date("2015") });

opendata.commit({
  subject: "Installation", detailId: "detail-opendata-portrait",
  date: new Date("2015") });

datalets.commit({
  subject: "Programming", detailId: "detail-datalets-mouron",
  date: new Date("2014") });

opendata.commit({
  subject: "Solo project", detailId: "detail-opendata-alps",
  date: new Date("2014") });



// Create branch named "master"
// var master = gitGraph.branch( "master" );
//
// // Commit on HEAD Branch which is "master"
// gitGraph.commit( "Initial commit" );
//
// // Add few commits on master.
// gitGraph.commit( "My second commit" ).commit( "Add awesome feature" );
//
// // Create a new "dev" branch from "master"
// var dev = gitGraph.branch( "dev" );
// dev.commit( "Youhou \\o/" );
//
// // Commit again on "master"
// master.commit( "I'm the master !" );
//
// // Advanced commit method with style and specific author (HEAD)
// var commitConfig = {
//   dotColor: "white",
//   dotSize: 10,
//   dotStrokeWidth: 10,
//   messageHashDisplay: false,
//   messageAuthorDisplay: true,
//   subject: "Alors c'est qui le papa ?",
//   author: "Me <me@planee.fr>"
// };
// gitGraph.commit( commitConfig );

/***********************
 *      CHECKOUT       *
 ***********************/

// Checkout on master branch for create "test" since master
//master.checkout();

/***********************
 *       DETAILS       *
 ***********************/

/***********************
 *    CUSTOMIZATION    *
//  ***********************/
//
// master.commit();
//
// /***********************
//  *       MERGES        *
//  ***********************/
//
// master.checkout();
//
// // Merge "dev" branch into HEAD (which is "master"), with a default message
// dev.merge();
//
// // Create a "test" branch and merge in into "master" with a custom message and tag.
// var test = gitGraph.branch( "test" );
// test.commit( "Final commit" );
// test.merge( master, "My special merge commit message" );
//
// // Then, continue committing on the "test" branch
// test.commit( { subject: "It works !" } );
//
// /***********************
//  *        TAGS         *
//  ***********************/
//
// // Add a tag to a commit
// test.commit( { subject: "Here you can see something", tag: "a-tag" } );
//
// // Perform a merge, with a tag
// test.merge( master, { subject: "New release", tag: "v1.0.0" } );

/***********************
 *       EVENTS        *
 ***********************/

// gitGraph.canvas.addEventListener( "graph:render", function ( event ) {
//   // console.log( event.data.id, "has been rendered with a scaling factor of", gitGraph.scalingFactor );
// } );
//
// gitGraph.canvas.addEventListener( "commit:mouseover", function ( event ) {
//   // console.log( "You're over a commit.", "Here is a bunch of data ->", event.data );
//   this.style.cursor = "pointer";
// } );
//
// gitGraph.canvas.addEventListener("commit:mouseout", function (event) {
//   // console.log( "You just left this commit ->", event.data );
//   this.style.cursor = "auto";
// });

// Attach a handler to the commit
// test.commit( {
//   subject: "Click me!",
//   author: "Nicolas <me@planee.fr>",
//   onClick: function ( commit ) {
//     console.log( "You just clicked my commit.", commit );
//   }
// } );
