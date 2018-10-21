/**
 * Modules
 */
import React, { Component  } from 'react';
import { connect } from 'react-redux'
import SidebarComponent from 'react-sidebar'
import { Link } from "react-router-dom";

/**
 * Components
 */
import {
  ListGroup,
  ListGroupItem
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { changeSidebarDock } from '../SidebarButton/actions'
import './index.css'

const mql = window.matchMedia(`(min-width: 800px)`);

class Sidebar extends Component {
  constructor(props) {
    super()
  }

  componentWillMount() {
    mql.addListener(this.props.mediaQueryChanged);
  }

  componentWillUnmount() {
    mql.removeListener(this.props.mediaQueryChanged);
  }

  render() {
    return (
      <SidebarComponent
        docked={this.props.sidebarDocked}
        styles={sideBarStyle(mql.matches)}
        sidebar={
          <ListGroup>
            <Link to="/listNews">
              <ListGroupItem className="list-item">
                <FontAwesomeIcon className="sidebar-icon" icon="newspaper" />
                Notícias
              </ListGroupItem>
            </Link>
            <Link to="/administratorMain">
              <ListGroupItem className="list-item">
                <FontAwesomeIcon className="sidebar-icon" icon="user" />
                Administrador
              </ListGroupItem>
            </Link>
          </ListGroup>
        }
      >
        {this.props.children}
      </SidebarComponent>
    )
  }
}

const sideBarStyle = (mqlMatches) => ({
  sidebar: {
    paddingTop: '10px',
    backgroundColor: '#2A3F54',
    width: mqlMatches ? '11%' : null
  }
})

const mapStateToProps = state => {
  return {
    sidebarDocked: state.SidebarButton.sidebarDocked
  }
}

const mapDispatchToProps = dispatch => {
  return {
    mediaQueryChanged: () => {
      dispatch(changeSidebarDock(mql.matches))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)
