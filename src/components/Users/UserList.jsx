import React,{Component} from 'react';


class UserList extends Component{
  render(){
    return(
      <div>
        <div className='ui raised segment'>Users<div className='ui divider'></div>{this.props.users.length}</div>


               {
                 this.props.users.map((user,i) =>{
                   return <div className="ui segment animated bounceInLeft"><i className="user icon" user={user} key={user.key}></i>{user.name}</div>
                 })
               }


      </div>
    )
  }
}

export default UserList
