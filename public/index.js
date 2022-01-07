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

var master = gitGraph.branch( "master" );
var branches = {};

Papa.parse('data/clients.csv', {
	download: true, header: true,
	complete: function(results) {

		// Get unique branches
		var bunq = [];
		$.each(results.data, function() {
			// console.log(this);
			rwhy = this.why;
			if (rwhy == '') return;

			if (bunq.indexOf(rwhy)<0) {
				bunq.push(rwhy);

				// Create branch
				branches[rwhy] = master.branch(rwhy);
			}

			// Populate branches
			branches[rwhy].commit({
				subject: this.what,
				url: this.where,
				onMessageClick: gohere
			}).tag(this.when)
		}); // -each results.data

		$.each(bunq.reverse(), function() {
			master.merge(branches[this]);
		});
	}
});
