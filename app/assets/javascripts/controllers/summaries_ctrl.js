angular.module('vault').controller('SummariesCtrl', function (BackendService, $location) {
  var self = this;

  BackendService.summaries().success(function (data) {
    self.summaries = data.summaries;
  })
});