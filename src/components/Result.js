import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import './Result.css'

class Search extends PureComponent {
  renderSentiment() {
    const { sentiment } = this.props

    const sentiments = ['😖','😣','☹️','🙁','😒','😐','😏','🙂','😊','😀','😄']
    const index = Math.round(sentiment * 10)

    return (
      <p>{sentiments[index]} <span>({index}/10)</span></p>
    )
  }

  render() {
    const { sentimentsCount } = this.props

    if (sentimentsCount === 0) return null

    return (
      <div className="result">
        {this.renderSentiment()}
      </div>
    )
  }
}

const mapStateToProps = ({ sentiments }) => ({
  sentiment: sentiments.reduce((prev, next) => (prev + next.score), 0) / Math.max(sentiments.length, 1),
  sentimentsCount: sentiments.length,
})
export default connect(mapStateToProps)(Search)
