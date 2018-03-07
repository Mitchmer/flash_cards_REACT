import React from 'react'

class CardForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
  }
  
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input required placeholder="Front Text" />
        <input required placeholder="Back Text" />
      </form>
    )
  }
}

export default CardForm