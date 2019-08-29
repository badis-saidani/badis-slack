Template.createPost.events({
  'click .createPostBttn' : () =>{
  //  var author = $('.username').val();
    var msg = $('.postText').val();

    Meteor.call('createPost', msg);

   // $('.username').val('');
    $('.postText').val('');
  }
})

Template.loadPost.helpers({
  'posts' : () =>{
   // return posts.find({},{'sort':{'date':-1}});
      return posts.find({});
  }

})

Template.loadUser.helpers({
   'user' : () =>{
     return Meteor.users.findOne({_id: this.user});
   }
})


Accounts.ui.config({
    passwordSignupFields: "USERNAME_AND_OPTIONAL_EMAIL"
});
