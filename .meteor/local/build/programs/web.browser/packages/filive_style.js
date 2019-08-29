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
var ServiceConfiguration = Package['service-configuration'].ServiceConfiguration;
var Accounts = Package['accounts-base'].Accounts;
var Mongo = Package.mongo.Mongo;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var moment = Package['momentjs:moment'].moment;
var Template = Package['templating-runtime'].Template;
var Gravatar = Package['tmeasday:gravatar'].Gravatar;
var BUZZ = Package['brentjanderson:buzz'].BUZZ;
var WebApp = Package.webapp.WebApp;
var Log = Package.logging.Log;
var Tracker = Package.deps.Tracker;
var Deps = Package.deps.Deps;
var Session = Package.session.Session;
var DDP = Package['ddp-client'].DDP;
var Blaze = Package.ui.Blaze;
var UI = Package.ui.UI;
var Handlebars = Package.ui.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var check = Package.check.check;
var Match = Package.check.Match;
var _ = Package.underscore._;
var Random = Package.random.Random;
var EJSON = Package.ejson.EJSON;
var LaunchScreen = Package['launch-screen'].LaunchScreen;
var HTML = Package.htmljs.HTML;

(function(){

/////////////////////////////////////////////////////////////////////////////
//                                                                         //
// packages/filive_style/packages/filive_style.js                          //
//                                                                         //
/////////////////////////////////////////////////////////////////////////////
                                                                           //
(function () {                                                             // 1
                                                                           // 2
///////////////////////////////////////////////////////////////////////    // 3
//                                                                   //    // 4
// packages/filive:style/lib/statusbar.js                            //    // 5
//                                                                   //    // 6
///////////////////////////////////////////////////////////////////////    // 7
                                                                     //    // 8
Meteor.startup(function () {                                         // 1  // 9
  if(Meteor.isCordova){                                              // 2  // 10
    StatusBar.hide();                                                // 3  // 11
  }                                                                  // 4  // 12
});                                                                  // 5  // 13
                                                                     // 6  // 14
///////////////////////////////////////////////////////////////////////    // 15
                                                                           // 16
}).call(this);                                                             // 17
                                                                           // 18
                                                                           // 19
                                                                           // 20
                                                                           // 21
                                                                           // 22
                                                                           // 23
(function () {                                                             // 24
                                                                           // 25
///////////////////////////////////////////////////////////////////////    // 26
//                                                                   //    // 27
// packages/filive:style/lib/client/autoscroll.js                    //    // 28
//                                                                   //    // 29
///////////////////////////////////////////////////////////////////////    // 30
                                                                     //    // 31
Meteor.startup(function() {                                          // 1  // 32
  var t;                                                             // 2  // 33
  Template.onRendered(function() {                                   // 3  // 34
    if (this.view.name == 'Template.message') {                      // 4  // 35
      Meteor.clearTimeout(t);                                        // 5  // 36
      t = Meteor.setTimeout(function() {                             // 6  // 37
        window.scrollTo(0, document.body.scrollHeight);              // 7  // 38
      }, 100);                                                       // 8  // 39
    }                                                                // 9  // 40
    else if (this.view.name == 'Template._loginButtonsLoggedIn') {   // 10
      $('textarea').bind('keypress.filive', function(e) {            // 11
        if (e.keyCode == 13) {                                       // 12
          window.scrollTo(0, document.body.scrollHeight);            // 13
          $(this).blur();                                            // 14
        }                                                            // 15
      });                                                            // 16
      $('textarea').bind('click.filive', function(e) {               // 17
        window.scrollTo(0, document.body.scrollHeight);              // 18
      });                                                            // 19
    }                                                                // 20
  });                                                                // 21
});                                                                  // 22
                                                                     // 23
///////////////////////////////////////////////////////////////////////    // 55
                                                                           // 56
}).call(this);                                                             // 57
                                                                           // 58
/////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['filive:style'] = {};

})();
