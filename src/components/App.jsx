import React,{Component} from 'react';
import MessageList from './Messages/MessageList.jsx';
import MessageForm from './Messages/MessageForm.jsx';
import UserForm from './Users/UserForm.jsx';
import UserList from './Users/UserList.jsx';
import io from 'socket.io-client';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      status:'disconnected',
      messages:[{
        timeStamp: '',
        text:'Welcome To CyberChat'
      }],
      users:[],
      user:"",
    }
  }
  emit(eventName,payload){
    this.socket.emit(eventName,payload);
  }
  connect(){
    this.setState({status:'connected'});
    //console.log('Connected: '+ this.socket.id)
  }
  componentWillMount(){
    this.socket = io('http://localhost:3000')
    this.socket.on('connect',this.connect.bind(this));
    this.socket.on('messageAdded',this.onMessageAdded.bind(this));
    }
    disconnect(){
      this.setState({status:'disconnected'})
    }
  onMessageAdded(message){
    this.setState({
      messages:this.state.messages.concat(message)
    })

  }
  render(){
    console.log(this.state.messages)
    return(
      <div className="ui two column grid">
        <div className="three wide column">
          <UserList {...this.state} />
        </div>
        <div className="thirteen wide column">
          <MessageList {...this.state} />
          <MessageForm {...this.state} emit={this.emit.bind(this)}/>
        </div>
      </div>
    )
  }
}

export default App
