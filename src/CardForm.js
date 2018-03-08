import React from 'react'

class CardForm extends React.Component {
  state = { front: '', back: ''}
  
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    let x = { front: this.state.front, back: this.state.back }  ;
    this.props.addCard(x)
    debugger
    this.setState({ front: '', back: '' })
  }
  
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          required 
          name="front"
          onChange={this.handleChange}
          value={this.state.front}
          placeholder="Front Text" 
        />
        <input 
          required 
          name="back"
          onChange={this.handleChange}
          value={this.state.back}
          placeholder="Back Text" />
        <button>Submit</button>
      </form>
    )
  }
}

export default CardForm