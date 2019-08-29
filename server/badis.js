Meteor.methods({
  'createPost' : (msg)=>{
    //console.log(author, msg);
    posts.insert({msg: msg, date: new Date(), user: Meteor.userId(), username: Meteor.user().username});
  }
})
