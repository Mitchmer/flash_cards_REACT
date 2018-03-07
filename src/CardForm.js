import React from 'react'

class CardForm extends React.Component {
  state = { front: '', back: ''}
  
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addCard(this.state.front);
    this.props.addCard(this.state.back);
    this.setState({ front: '', back: '' })
  }
  
  render () {
    const  { front, back } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          required 
          name="front"
          onChange={this.handleChange}
          value={front}
          placeholder="Front Text" 
        />
        <input 
          required 
          name="back"
          onChange={this.handleChange}
          value={back}
          placeholder="Back Text" />
      </form>
    )
  }
}

export default CardForm