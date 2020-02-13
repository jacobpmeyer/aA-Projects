const FollowToggle = require("./follow_toggle");

$(()=> {
  const $followToggle = $(".follow-toggle");
  $followToggle.each(function(i, button) {
    console.log(button);
    new FollowToggle(button);
  });

})