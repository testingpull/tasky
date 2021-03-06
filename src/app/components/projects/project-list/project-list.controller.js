function ProjectListController() {
  this.$onChanges = function (change) {
    if(change.projects){
      this.projects = angular.copy(this.projects);
    }
  }

  this.remove = function (project) {
    this.onDelete({
      $event: {
        project: project
      }
    });
  }
}

angular
  .module('projects')
  .controller('ProjectListController', ProjectListController);