import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import search from '../actions/sentiments/fetch'
import './Search.css'

class Search extends PureComponent {
  doSearch() {
    const searchTerm = this.refs.searchTerm.value
    if (searchTerm.length === 0) return
    this.props.search(searchTerm)
  }

  render() {
    return (
      <div className="search">
        <input ref="searchTerm" type="search" placeholder="What's your favorite brand?" />
        <button onClick={this.doSearch.bind(this)}>Find out what others think</button>
      </div>
    )
  }
}

export default connect(null, { search })(Search)
