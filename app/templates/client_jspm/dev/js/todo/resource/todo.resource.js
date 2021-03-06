import "angular";
import 'angular-resource';

;(function(angular)
{
  "use strict";

  angular
    .module('myAwesomeApp')
    .factory('TodoResource', ['$resource', $resource =>
    {
      var _url = '/api/todos/:id';
      var _params = {};
      var _methods = {};

      return $resource(_url, _params, _methods);
    }]);
}(window.angular));
