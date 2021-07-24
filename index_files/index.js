$('#open-cv').click(function() {
	$('#cv').fadeIn().css('visibility','visible');
	$('#rewind').removeClass('hidden');
	$(this).slideUp();
});

setTimeout(function() {
	//$('#cv').hide();
}, 200);


$nlform = $("#nl-form");

if ($nlform.length > 0) {

	var nlform = new NLForm( $nlform[0] );

	$nlform.submit(function(event) {
	  event.preventDefault();
	  var $form = $(this),
		w1 = $form.find("select[name='what']").val(),
		w2 = $form.find("select[name='cond']").val(),
		w3 = $form.find("input[name='msg']:first").val(),
		w4 = $form.find("input[name='msg']:last").val(),
		url = $form.attr("action");
	  if (w3.length + w4.length < 3) {
		$('#nl-form > div.nl-field.nl-ti-text > a')[0].click();
	  	return;
	  }
	  $.post(url, { what: w1, cond: w2, msg: w3 + w4 }).done(function(data) {
		if (data == 'OK') {
			$("#nl-form").empty().append('<div class="triangle-isosceles">Okay! Will be in touch.</div>');
		} else {
			alert('Hmm, that did not go so well. Try again?');
		}
	  });
	});

}

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
	event.preventDefault();
	$(this).ekkoLightbox();
});
/*
$('#divRss').FeedEk({
	FeedUrl : 'http://forum.schoolofdata.ch/latest.rss',
	ShowDesc: false
});
*/
$('#project-row').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 3,
	responsive: [
	    {
	      breakpoint: 600,
	      settings: {
		slidesToShow: 2,
		slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
		slidesToShow: 1,
		slidesToScroll: 1
	      }
	    }
	  ]
});

if (typeof GitGraph !== 'undefined') {

/***********************
 *  CUSTOM TEMPLATES   *
 ***********************/

var metroCustomConfig = {
  colors: [ "#008fb5", "#E61414", "#979797" ],
  branch: {
    lineWidth: 10,
    spacingX: 50
  },
  commit: {
    spacingY: -80,
    dot: {
      size: 14
    },
    message: {
      displayAuthor: false,
      displayBranch: false,
      displayHash: false,
      displayDate: true,
      font: "normal 12pt Arial"
    },
    tooltipHTMLFormatter: function ( commit ) {
      return "<b>" + commit.date + "</b>" + ": " + commit.message;
    }
  }
};
var metroCustom = new GitGraph.Template( metroCustomConfig );

/***********************
 *    INITIALIZATION   *
 ***********************/

var config = {
  template: metroCustom
  //, reverseArrow: true  // to make arrows point to ancestors, if displayed
  //, orientation: "vertical-reverse"
  //, mode: "compact"     // special compact mode : hide messages & compact graph
};
var gitGraph = new GitGraph( config );
gitGraph.author = "loleg <loleg@hotmail.com>";

/***********************
 * BRANCHS AND COMMITS *
 ***********************/

var datalets = gitGraph.branch( "work" );
var opendata = gitGraph.branch( "opendata" );
var devloper = datalets.branch( "devloper" );

datalets.commit({
  message: "Founder", detailId: "detail-smartuse",
  date: new Date("2019") });
  
datalets.commit({
  message: "Developer", detailId: "detail-frictionless-data",
  date: new Date("2018") });
  
datalets.commit({
  message: "Developer", detailId: "detail-public-health",
  date: new Date("2017") });
  
datalets.commit({
  message: "Developer", detailId: "detail-opendata-swiss",
  date: new Date("2016") });
  
opendata.commit({
  message: "Organiser", detailId: "detail-h4aw",
  date: new Date("2016") });

devloper.commit({
  message: "Data engineer", detailId: "detail-pharma",
  date: new Date("2016") });

datalets.commit({
  message: "Data engineer", detailId: "detail-bdz-pathways",
  date: new Date("2016") });

opendata.commit({
  message: "Organiser", detailId: "detail-soda-camp",
  date: new Date("2015") });
  
devloper.commit({
  message: "Data engineer", detailId: "detail-brandcrafter",
  date: new Date("2016") });

devloper.commit({
  message: "App developer", detailId: "detail-mimoti",
  date: new Date("2016") });
  
datalets.commit({
  message: "Programming", detailId: "detail-dribdat",
  date: new Date("2015") });

devloper.commit({
  message: "Programming", detailId: "detail-synopses",
  date: new Date("2015") });

opendata.commit({
  message: "Installation", detailId: "detail-opendata-portrait",
  date: new Date("2015") });

datalets.commit({
  message: "Programming", detailId: "detail-datalets-mouron",
  date: new Date("2014") });

opendata.commit({
  message: "Solo project", detailId: "detail-opendata-alps",
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
//   message: "Alors c'est qui le papa ?",
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
// test.commit( { message: "It works !" } );
//
// /***********************
//  *        TAGS         *
//  ***********************/
//
// // Add a tag to a commit
// test.commit( { message: "Here you can see something", tag: "a-tag" } );
//
// // Perform a merge, with a tag
// test.merge( master, { message: "New release", tag: "v1.0.0" } );

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
//   message: "Click me!",
//   author: "Nicolas <me@planee.fr>",
//   onClick: function ( commit ) {
//     console.log( "You just clicked my commit.", commit );
//   }
// } );

}
