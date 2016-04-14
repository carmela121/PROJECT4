angular.module('project4')
.factory('AuthInterceptor', AuthInterceptor);

AuthInterceptor.$inject = ['tokenService'];
function AuthInterceptor(tokenService) {
  return {
    request: function(config){
      var token = tokenService.getToken();

      if(!!token){
        config.headers.Authorization = 'Bearer ' + token;

      }

      return config;

    },
    response: function(res){
      if(!!res.data.token){
        tokenService.saveToken(res.data.token);
      }
      return res;
    }
  }
}