$().ready(function(){
  //get database reference
  let firebaseRef = firebase.database().ref().child("Users");

  //create user and save to database
  $('#createUser').click(function(){
    let newUser = new User($('#fullname').val(), $('#username').val());
    firebaseRef.push().set(newUser);
    $("#listUsers").html('');
  });

  //retrieve users from database and display
  $('#showUser').click(function(){
      $("#listUsers").html('');
    firebaseRef.on('child_added', function(user){
      $("#listUsers").append(`<li>Name: ${user.child("fullname").val()} | Username: ${user.child("username").val()} </li>`);
    });
  });

  //get database reference
  let firebaseRefTweet = firebase.database().ref().child("Tweets");

  //create tweet and save to database
  $("#createTweet").click(function(){
    let newTweet = new Tweet($('#tweet').val());
      firebaseRefTweet.push().set(newTweet);
  });

  //retrieve tweet from the database
  firebaseRefTweet.on('child_added', function(tweet){
    $("#tweetHistory").append(`<li>${tweet.child("text").val()}`);
  });

  //clear database
  $("#clear").click(function(){
    firebaseRefTweet.remove();
    location.reload();
  });














});
