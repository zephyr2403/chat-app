import React,{Component} from 'react';

class Message extends Component{
  render(){
    return(
      <div className="ui segment animated bounceIn">
        <strong>{this.props.message.user}</strong><span style={{float:'right'}}><i>{this.props.message.timeStamp}</i></span>
      <div className="ui divider"></div>
      {this.props.message.text}
      </div>
    )
  }
}

export default Message
