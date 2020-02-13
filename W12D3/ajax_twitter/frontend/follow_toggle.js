class FollowToggle {

  constructor (el) {
    this.$el = $(el);
    this.userId = this.$el.data("user-id"); // Lookup user Id
    this.followState = this.$el.data("follow-state"); // Lookup user followstate
    this.render();
    this.$el.on("click", this.handleClick.bind(this))
  }
  
  render() {
    if (this.followState === "Unfollowed") {
      this.$el.text("Follow!");
    } else {
      this.$el.text("Unfollow!");
    };
  }
  
  handleClick(e) {
    e.preventDefault();
    let that = this;
    if(this.followState === "Followed") {
      $.ajax({
        method: "DELETE",
        dataType: "json",
        url: `/users/${this.userId}/follow`,
        success: function(data) {
          that.followState = "Unfollowed";
          that.render();
        },
        error: function() {
          console.error("handle click: " + this)
        }
      })
    } else {
      $.ajax({
        method: "POST",
        dataType: "json",
        url: `/users/${this.userId}/follow`,
        success: function(data) {
          that.followState = "Followed";
          that.render();
        },
        error: function () {
          console.error("handle click: " + this)
        }
      });
    };
    
  }
}
  
  module.exports = FollowToggle;