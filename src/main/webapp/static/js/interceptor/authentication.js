

angular.module("App").factory("APIAuthInterceptor", [function () {

    return {
        "request": function (config) {

            config.headers = config.headers || {};
            let encodedString = btoa("gabriele:gabriele");
            config.headers.Authorization = "Basic " + encodedString;
            return config;

}
    };

}]);
