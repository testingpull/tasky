function ProjectListController() {
  this.$onChanges = function (change) {
    console.log('on change ', change);
    if(change.projects){
      this.projects = angular.copy(this.projects);
    }
  }

  this.deleteProject = function (project) {
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