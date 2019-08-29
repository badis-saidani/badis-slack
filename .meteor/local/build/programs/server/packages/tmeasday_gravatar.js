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
(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/tmeasday:gravatar/gravatar.js                                                                    //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
// super, super simple                                                                                       // 1
Gravatar = {                                                                                                 // 2
  hash: function(email) {                                                                                    // 3
    return CryptoJS.MD5(email.trim().toLowerCase());                                                         // 4
  },                                                                                                         // 5
                                                                                                             // 6
  imageUrl: function(email, options) {                                                                       // 7
    var options = options || {};                                                                             // 8
                                                                                                             // 9
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
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);

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
