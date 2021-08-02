// Create constructor functions with properties representing the following:
// WebApp: name, url, technologies, licence, stars
// MobileApp: name, platforms, licence, stars
 
// All web applications should inherit methods: 
// getData which prints out all the information
// reactBased which checks if one of the used technologies is React
 
// All mobile applications should inherit methods:
// getData which prints out all the informations
// forAndroid which checks if one of the platforms the application is developed for is Android

// Both web and mobile applications should inherit methods:
// isCCLicence  which checks if the licence of the application is CC (Creative Commons) 
// like which increases the number of stars by one
// showStars which prints out the number of stars 

(function(){
    function WebApp(name, url, technologies, licence, stars){
        this.name = name;
        this.url = url;
        this.technologies = technologies;
        this.licence = licence;
        this.stars = stars;
    };
    WebApp.prototype.getData = function(){
        return this.name + '\n' + this.url + '\n' + this.technologies + '\n' + this.licence + '\n' + this.stars
    };
    WebApp.prototype.checkReact = function(){
        var res = 'You have no react in technologies';
      for(var i = 0; i < this.technologies.length;i++){
          var element = this.technologies[i].toLowerCase();
          if(element == 'react'){
              res = 'You have React in the technolies!!!';
              break;
          };
      };
      return res;
    }
    function MobileApp(name, platforms, licence, stars){
        this.name = name;
        this.platforms = platforms;
        this.licence = licence;
        this.stars = stars;
    };
    MobileApp.prototype.getData = function(){
        return this.name + '\n' + this.platforms + '\n' + this.licence + '\n' + this.stars
    };
    MobileApp.prototype.checkAndroid = function(){
        var res = 'You have no Andorid in technologies';
        for(var i = 0; i < this.platforms.length; i++){
            var element = this.platforms[i].toLowerCase();
            if(element == 'android'){
                res = 'You have Android in the technolies!!!';
                break;
            };
        };
        return res;
    };

    var webApp1 = new WebApp('SomeApp', 'https://developer.mozilla.org/en-US/', ['jquery', 'bootstrap', 'react', 'else'], 'BIT Student', 4 );
    console.log(webApp1.checkReact());
})()    