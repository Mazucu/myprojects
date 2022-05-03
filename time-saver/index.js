var TogglClient = require('toggl-api');
var toggl = new TogglClient({apiToken: '11ba3b1108a20d8ca6e8c49af18bdcda'});

toggl.startTimeEntry({
  description: 'Some cool work',
}, function(err, timeEntry) {
  // handle error

  // working 10 seconds
  setTimeout(function() {
    toggl.stopTimeEntry(timeEntry.id, function(err) {
      // handle error

      toggl.updateTimeEntry(timeEntry.id, {tags: ['finished']}, function(err) {
        toggl.destroy()
      });
    });
  }, 12000);
});