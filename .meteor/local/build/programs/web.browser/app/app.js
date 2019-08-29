var require = meteorInstall({"client":{"partials":{"template.createPost.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// client/partials/template.createPost.js                                                       //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                //
                                                                                                // 1
Template.__checkName("createPost");                                                             // 2
Template["createPost"] = new Template("Template.createPost", (function() {                      // 3
  var view = this;                                                                              // 4
  return HTML.DIV({                                                                             // 5
    class: "createPost"                                                                         // 6
  }, HTML.Raw('\n    <!--input class="username" placeholder="name"/-->\n    '), HTML.TEXTAREA({
    border: "3",                                                                                // 8
    class: "postText",                                                                          // 9
    placeholder: "your msg"                                                                     // 10
  }), HTML.Raw('\n    <button class="createPostBttn">Post</button>\n  '));                      // 11
}));                                                                                            // 12
                                                                                                // 13
//////////////////////////////////////////////////////////////////////////////////////////////////

},"template.loadPost.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// client/partials/template.loadPost.js                                                         //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                //
                                                                                                // 1
Template.__checkName("loadPost");                                                               // 2
Template["loadPost"] = new Template("Template.loadPost", (function() {                          // 3
  var view = this;                                                                              // 4
  return [ Blaze._TemplateWith(function() {                                                     // 5
    return {                                                                                    // 6
      align: Spacebars.call("right")                                                            // 7
    };                                                                                          // 8
  }, function() {                                                                               // 9
    return Spacebars.include(view.lookupTemplate("loginButtons"));                              // 10
  }), "\n    \n    ", Blaze.Each(function() {                                                   // 11
    return Spacebars.call(view.lookup("posts"));                                                // 12
  }, function() {                                                                               // 13
    return [ "\n    \n      ", HTML.DIV({                                                       // 14
      class: "postCon"                                                                          // 15
    }, "\n        ", HTML.DIV({                                                                 // 16
      class: "postAuthor"                                                                       // 17
    }, "\n          ", Spacebars.include(view.lookupTemplate("loadUser")), "\n          "), "\n          \n        ", HTML.DIV({
      class: "postMsg"                                                                          // 19
    }, "\n          ", Blaze.View("lookup:msg", function() {                                    // 20
      return Spacebars.mustache(view.lookup("msg"));                                            // 21
    }), "\n        "), "\n    "), "\n    " ];                                                   // 22
  }) ];                                                                                         // 23
}));                                                                                            // 24
                                                                                                // 25
//////////////////////////////////////////////////////////////////////////////////////////////////

},"template.loadUser.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// client/partials/template.loadUser.js                                                         //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                //
                                                                                                // 1
Template.__checkName("loadUser");                                                               // 2
Template["loadUser"] = new Template("Template.loadUser", (function() {                          // 3
  var view = this;                                                                              // 4
  return HTML.DIV({                                                                             // 5
    class: "posts-header"                                                                       // 6
  }, "\n          ", HTML.STRONG(Blaze.View("lookup:username", function() {                     // 7
    return Spacebars.mustache(view.lookup("username"));                                         // 8
  })), HTML.Raw("&nbsp;&nbsp;&nbsp;"), Blaze.View("lookup:livestamp", function() {              // 9
    return Spacebars.mustache(view.lookup("livestamp"), view.lookup("date"));                   // 10
  }), "\n          ");                                                                          // 11
}));                                                                                            // 12
                                                                                                // 13
//////////////////////////////////////////////////////////////////////////////////////////////////

}},"template.homeLayout.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// client/template.homeLayout.js                                                                //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                //
                                                                                                // 1
Template.body.addContent((function() {                                                          // 2
  var view = this;                                                                              // 3
  return [ Spacebars.include(view.lookupTemplate("loadPost")), HTML.Raw("\n    <div><br></div>\n  "), Spacebars.include(view.lookupTemplate("createPost")) ];
}));                                                                                            // 5
Meteor.startup(Template.body.renderToDocument);                                                 // 6
                                                                                                // 7
//////////////////////////////////////////////////////////////////////////////////////////////////

},"badis.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// client/badis.js                                                                              //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                //
var _this = this;                                                                               //
                                                                                                //
Template.createPost.events({                                                                    // 1
  'click .createPostBttn': function () {                                                        // 2
    //  var author = $('.username').val();                                                      // 3
    var msg = $('.postText').val();                                                             // 4
    Meteor.call('createPost', msg); // $('.username').val('');                                  // 6
                                                                                                //
    $('.postText').val('');                                                                     // 9
  }                                                                                             // 10
});                                                                                             // 1
Template.loadPost.helpers({                                                                     // 13
  'posts': function () {                                                                        // 14
    // return posts.find({},{'sort':{'date':-1}});                                              // 15
    return posts.find({});                                                                      // 16
  }                                                                                             // 17
});                                                                                             // 13
Template.loadUser.helpers({                                                                     // 21
  'user': function () {                                                                         // 22
    return Meteor.users.findOne({                                                               // 23
      _id: _this.user                                                                           // 23
    });                                                                                         // 23
  }                                                                                             // 24
});                                                                                             // 21
Accounts.ui.config({                                                                            // 28
  passwordSignupFields: "USERNAME_AND_OPTIONAL_EMAIL"                                           // 29
});                                                                                             // 28
//////////////////////////////////////////////////////////////////////////////////////////////////

},"mobile-config.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// client/mobile-config.js                                                                      //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                //
App.accessRule('*');                                                                            // 1
//////////////////////////////////////////////////////////////////////////////////////////////////

}},"lib":{"dbs.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// lib/dbs.js                                                                                   //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                //
posts = new Mongo.Collection('posts');                                                          // 1
//////////////////////////////////////////////////////////////////////////////////////////////////

}}},{"extensions":[".js",".json",".html",".css"]});
require("./client/partials/template.createPost.js");
require("./client/partials/template.loadPost.js");
require("./client/partials/template.loadUser.js");
require("./client/template.homeLayout.js");
require("./lib/dbs.js");
require("./client/badis.js");
require("./client/mobile-config.js");