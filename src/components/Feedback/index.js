// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isfeedback: false}

  onClickEmoji = () => {
    this.setState({isfeedback: true})
  }

  // if is feedback is true print thank you function
  renderFeedbackfunction = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="feedback-container">
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emojis-unorder-list">
          {emojis.map(emoji => (
            <li key={emoji.id}>
              <button
                type="button"
                className="emoji-btn"
                onClick={this.onClickEmoji}
              >
                <img
                  src={emoji.imageUrl}
                  alt={emoji.name}
                  className="emoji-styles"
                />
                <br />
                <span className="emoji-name">{emoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  // else is feedback is false then print the render Thankyoufunction
  renderThankyoufunction = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="Thank-you-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-logo" />
        <h1 className="thank-you-heading">Thank You!</h1>
        <p className="thank-you-desc">
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {isfeedback} = this.state
    return (
      <div className="render-bg-container">
        <div className="card-container">
          {isfeedback
            ? this.renderThankyoufunction()
            : this.renderFeedbackfunction()}
        </div>
      </div>
    )
  }
}
export default Feedback
