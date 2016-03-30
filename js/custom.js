//Navigation toggle button
$(document).ready(function(){
  $("#nav-button").click(function(){
    $("#myNavi").toggle(500);
  })
})

//Pager

var app = angular.module('myApp',[]);
app.directive('pagerIn', function(){
  return {
    restrict: 'E',
    templateUrl: 'template/template.html #pagerDiv'
  }
});

