/**
 * Modules
 */
import React, { Component  } from 'react';
import { connect } from 'react-redux'

/**
 * Components
 */
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { changeSidebarDock } from './actions'

class SidebarButton extends Component {
  render() {
    return (
      <Button
        id="sidebar-button"
        bsStyle="link"
        onClick={() => {
          this.props.onSetSidebarOpen(this.props.sidebarDocked)
        }}>
        <FontAwesomeIcon icon="bars" style={{ fontSize: '1.5em', color: 'white' }} />
      </Button>
    )
  }
}

const mapStateToProps = state => {
  return {
    sidebarDocked: state.SidebarButton.sidebarDocked
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSetSidebarOpen: (status) => {
      dispatch(changeSidebarDock(!status))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarButton)
