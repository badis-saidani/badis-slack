var require = meteorInstall({"lib":{"dbs.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// lib/dbs.js                                                        //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
posts = new Mongo.Collection('posts');                               // 1
///////////////////////////////////////////////////////////////////////

}},"server":{"badis.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// server/badis.js                                                   //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
Meteor.methods({                                                     // 1
  'createPost': function (msg) {                                     // 2
    //console.log(author, msg);                                      // 3
    posts.insert({                                                   // 4
      msg: msg,                                                      // 4
      date: new Date(),                                              // 4
      user: Meteor.userId(),                                         // 4
      username: Meteor.user().username                               // 4
    });                                                              // 4
  }                                                                  // 5
});                                                                  // 1
///////////////////////////////////////////////////////////////////////

}}},{"extensions":[".js",".json"]});
require("./lib/dbs.js");
require("./server/badis.js");
//# sourceMappingURL=app.js.map
