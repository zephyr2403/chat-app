import React,{Component} from 'react';


class MessageForm extends Component{

  onSubmit(e){
    e.preventDefault();
    this.props.emit('messageAdded',{
      timeStamp:Date.now(),
        text:this.refs.text.value.trim(),
        user:this.props.user.name,
    });
    this.refs.text.value=""
  }

  render(){
    return(
      <div>
        <form className="ui form" onSubmit={this.onSubmit.bind(this)}>
          <div className="item">
            <input ref="text" placeholder="Type here..." style={{marginTop:10 +'px',paddingTop:15+'px',paddingBottom:15+'px'}}/>
          </div>
        </form>
      </div>
    )
  }
}

export default MessageForm
