import React,{Component} from 'react';

class Message extends Component{
  render(){
    return(
      <div className="ui segment animated fadeIn">
        <strong>{this.props.message.timeStamp}</strong> {this.props.message.text}
      </div>
    )
  }
}

export default Message
