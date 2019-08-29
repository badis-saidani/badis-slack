//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var CryptoJS = Package['tmeasday:crypto-base'].CryptoJS;

/* Package-scope variables */
var Gravatar;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/tmeasday_gravatar/packages/tmeasday_gravatar.js                                                        //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
(function () {                                                                                                     // 1
                                                                                                                   // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                                                           //    // 4
// packages/tmeasday:gravatar/gravatar.js                                                                    //    // 5
//                                                                                                           //    // 6
///////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 7
                                                                                                             //    // 8
// super, super simple                                                                                       // 1  // 9
Gravatar = {                                                                                                 // 2  // 10
  hash: function(email) {                                                                                    // 3  // 11
    return CryptoJS.MD5(email.trim().toLowerCase());                                                         // 4  // 12
  },                                                                                                         // 5  // 13
                                                                                                             // 6  // 14
  imageUrl: function(email, options) {                                                                       // 7  // 15
    var options = options || {};                                                                             // 8  // 16
                                                                                                             // 9  // 17
    var protocol = options.secure ? 'https' : 'http';                                                        // 10
    delete options.secure;                                                                                   // 11
    var hash = Gravatar.hash(email);                                                                         // 12
    var url = protocol + '://www.gravatar.com/avatar/' + hash;                                               // 13
                                                                                                             // 14
    var params = _.map(options, function(val, key) { return key + "=" + encodeURIComponent(val)}).join('&'); // 15
    if (params !== '')                                                                                       // 16
      url += '?' + params;                                                                                   // 17
                                                                                                             // 18
    return url;                                                                                              // 19
  }                                                                                                          // 20
}                                                                                                            // 21
///////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 30
                                                                                                                   // 31
}).call(this);                                                                                                     // 32
                                                                                                                   // 33
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['tmeasday:gravatar'] = {}, {
  Gravatar: Gravatar
});

})();
