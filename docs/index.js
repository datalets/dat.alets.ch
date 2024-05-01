const graphContainer = document.getElementById("gitgraph");
const gitGraph = GitgraphJS.createGitgraph(graphContainer, {
  orientation: GitgraphJS.Orientation.VerticalReverse,
  template: GitgraphJS.templateExtend(
		GitgraphJS.TemplateName.Metro, {
	    commit: {
	      message: {
	        displayAuthor: false,
	        displayHash: false,
	        displayDate: true,
	      }
	    }
		}
	)
});

function gohere() { window.open(this.url, '_blank'); }

var mainbranch = gitGraph.branch( "main" );
var branches = {};

Papa.parse('data/projects.csv', {
	download: true, header: true,
	complete: function(results) {

		// Collect unique branches
		var bunq = [];

		$.each(results.data, function() {
			// Grab the next row
			rwhy = this.why;
			if (rwhy == '') return;

			if (bunq.indexOf(rwhy)<0) {
				bunq.push(rwhy);

				// Create a sub-branch
				branches[rwhy] = mainbranch.branch(rwhy);
			}

			// Populate branches
			branches[rwhy].commit({
				subject: this.what,
				url: this.where,
				onMessageClick: gohere
			}).tag(this.when)
		}); // -each results.data

		$.each(bunq.reverse(), function() {
			mainbranch.merge(branches[this]);
		});
	}
});
