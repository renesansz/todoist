angular.module('starter').controller('AppController', AppController);

function AppController($scope, $ionicModal) {

  var editedIdx = -1;

  $scope.listCanSwipe = true;
  $scope.showDeleteBtn  = false;
  $scope.showReorderBtn = false;

  $scope.newTodo = 'dasda';

  // Initialize add todo modal
  $ionicModal.fromTemplateUrl('my-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.addModal = modal;
  });

  $scope.todos = [
    { id: 1, name: 'Todo list 1', isDone: true },
    { id: 2, name: 'Todo list 2', isDone: false },
    { id: 3, name: 'Todo list 3', isDone: false },
    { id: 4, name: 'Todo list 4', isDone: true },
  ];

  /**
   * Add new todo
   */
  $scope.addTodo = function (newTodo) {
    $scope.todos.push({
      id: $scope.todos.length,
      name: newTodo,
      isDone: false
    });
    $scope.addModal.hide();
  };

  $scope.onItemDelete = function (idx) {
    $scope.todos.splice(idx, 1);
  };

  $scope.moveItem = function (item, fromIdx, toIdx) {
    $scope.todos.splice(fromIdx, 1);
    $scope.todos.splice(toIdx, 0, item);
  };

}
