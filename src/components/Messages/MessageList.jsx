import React,{Component} from 'react';
import Message from './Message.jsx'

class MessageList extends Component{
  render(){
    var messArray = this.props.messages;
    return(
      <div>
          {
          messArray.map((message,i) =>{
              return <Message message={message} key={i} />
          })
          }

      </div>
    )
  }
}

export default MessageList
