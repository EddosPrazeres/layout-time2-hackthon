import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ViewComponent from './ViewComponent'

class EventsScreen extends Component {

  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return(
      <ViewComponent  />
    )
  }
}

EventsScreen.defaultProps = {

}

EventsScreen.propTypes = {

}

const mapStateToProps = state => {
  return {
    initial:[]
  }
}

export default connect(mapStateToProps)(EventsScreen)