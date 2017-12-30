import React,{Component} from 'react';


class MessageForm extends Component{

  onSubmit(e){
    if(this.refs.text.value.trim())
    {
    e.preventDefault();
    this.props.emit('messageAdded',{
      timeStamp:Date.now(),
        text:this.refs.text.value.trim(),
        user:this.props.user.name,
    });
    this.refs.text.value=""
    }
    else{
        e.preventDefault()
    }
  }

  render(){
    return(
      <div>
        <form className="ui form" onSubmit={this.onSubmit.bind(this)}>
          <div className="field">
            <input ref="text" placeholder="Type here..." style={{marginTop:16 +'px',paddingTop:15+'px',paddingBottom:15+'px'}}/>
          </div>
        </form>
      </div>
    )
  }
}

export default MessageForm
