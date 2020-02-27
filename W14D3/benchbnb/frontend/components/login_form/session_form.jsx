class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  render() {

    return (
      <div className="session-form">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">Username:
            <input 
              type="text" 
              value={this.state.username} 
              onChange={this.handleUpdate("username")}/>
          </label>
          <label htmlFor="">Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleUpdate("password")} />
          </label>
          <button type={this.props.formType}></button>
        </form>
      </div>
    )
  }

}