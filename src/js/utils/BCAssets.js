export default (function(){
    
    let publicScope = {};
    let settings = { 
        host: 'https://assets.breatheco.de/apis/',
        token: ''
    }
    
    let request = function(method = 'get', url = '', data){
        
        let options = {};
        if(method!='get')
        {
            options.headers = {'content-type': 'application/json'};
            options.method = method.toLowerCase(); // *GET, POST, PUT, DELETE, etc.
            options.body = JSON.stringify(data);
        }
        
        let promise = fetch(settings.host+url+"?access_token="+settings.token, options)
            .then(function(response){
              if (response.ok) {
                return response.json();
              } else {
                return response.json().then(function (error) {
                  throw error;
                });
              }
            }); // parses response to JSON
            
        return promise;
    }
    
    publicScope.get = function(url){
        return request('get',url);
    }
    
    return publicScope;
})();