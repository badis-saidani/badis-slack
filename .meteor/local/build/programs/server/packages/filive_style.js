(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var ServiceConfiguration = Package['service-configuration'].ServiceConfiguration;
var Accounts = Package['accounts-base'].Accounts;
var MongoInternals = Package.mongo.MongoInternals;
var Mongo = Package.mongo.Mongo;
var moment = Package['momentjs:moment'].moment;
var Gravatar = Package['tmeasday:gravatar'].Gravatar;
var BUZZ = Package['brentjanderson:buzz'].BUZZ;
var WebApp = Package.webapp.WebApp;
var main = Package.webapp.main;
var WebAppInternals = Package.webapp.WebAppInternals;
var Log = Package.logging.Log;
var Tracker = Package.deps.Tracker;
var Deps = Package.deps.Deps;
var DDP = Package['ddp-client'].DDP;
var DDPServer = Package['ddp-server'].DDPServer;
var Blaze = Package.ui.Blaze;
var UI = Package.ui.UI;
var Handlebars = Package.ui.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var check = Package.check.check;
var Match = Package.check.Match;
var _ = Package.underscore._;
var Random = Package.random.Random;
var EJSON = Package.ejson.EJSON;
var HTML = Package.htmljs.HTML;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/filive_style/packages/filive_style.js                                                                 //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// packages/filive:style/lib/statusbar.js                                                                   //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
Meteor.startup(function () {                                                                                // 1
  if(Meteor.isCordova){                                                                                     // 2
    StatusBar.hide();                                                                                       // 3
  }                                                                                                         // 4
});                                                                                                         // 5
                                                                                                            // 6
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// packages/filive:style/lib/server/profile-pictures.js                                                     //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
Meteor.startup(function() {                                                                                 // 1
  Meteor.users.find().observe({                                                                             // 2
    added: function(doc) {                                                                                  // 3
      if (!doc.profile && doc.emails[0] && Gravatar) {                                                      // 4
        Meteor.users.upsert({_id: doc._id}, {$set: {'profile': Gravatar.imageUrl(doc.emails[0].address)}}); // 5
      }                                                                                                     // 6
    }                                                                                                       // 7
  });                                                                                                       // 8
});                                                                                                         // 9
                                                                                                            // 10
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['filive:style'] = {};

})();
