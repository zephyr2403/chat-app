import React,{Component} from 'react';
import Message from './Message.jsx'

class MessageList extends Component{
  render(){
    //console.log(this.props.messages)
    var messArray = this.props.messages
    //console.log(messArray.length)
    //console.log(messArray)
    var newMess = this.props.messages[(this.props.messages).length-1]
    //console.log(newMess)

    console.log(newMess)
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
