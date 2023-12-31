// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  showFirstName = () => {
    const {firstName} = this.state
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }
  showLastName = () => {
    const {lastName} = this.state

    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">shoe/Hide</h1>
        <div className="name-container">
          <div className="name-count">
            <button type="button" onClick={this.showFirstName}>
              Show/Hide Firstname
            </button>
            {firstName && <p className="name-display">Joe</p>}
          </div>
          <div className="name-count">
            <button type="button" onClick={this.showLastName}>
              Show/Hide LastName
            </button>
            {lastName && <p className="name-display">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
