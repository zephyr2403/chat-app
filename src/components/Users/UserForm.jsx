import React,{Component} from 'react'

class UserForm extends Component{
  onSubmit(e){
    if(this.refs.name.value.trim() && this.refs.name.value.trim().length<13)
      {
    e.preventDefault();
    var name = this.refs.name.value.trim();
    this.props.setUser({name:name});
    this.props.emit('userJoined',{
      name:name
      });
    this.refs.name.value ='';
  }
  }
  render(){
    return(
      <div>
        <h3>Chat Login</h3>
        <form className="ui form" onSubmit={this.onSubmit.bind(this)}>
          <div className="item">
            <label>Usename</label>
            <input type='text'ref='name' placeholder="Enter Username..Length less than 12"/>
          </div>
        </form>
      </div>
    )
  }
}
export default UserForm
