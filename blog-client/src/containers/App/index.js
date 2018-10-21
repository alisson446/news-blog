/**
 * Modules
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import NotificationSystem from 'react-notification-system'

/**
 * Components
 */
import SideBar from '../../components/SideBar'

import appRoutes from '../../router/app'
import { configNotificationSystem } from './actions'

class App extends Component {
  componentDidMount() {
    this.props.configNotificationSystem(this.refs.notificationSystem);
  }

  render() {
    return (
      <div>
        <SideBar>
          <Switch>
            {
              appRoutes.map((route, index) => (
                <Route {...route} key={index} />
              ))
            }
          </Switch>
        </SideBar>

        <NotificationSystem
          ref="notificationSystem"
          style={{
            MessageWrapper: {
              DefaultStyle: {
                textAlign: 'center'
              }
            }
          }}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    configNotificationSystem: (ref) => dispatch(configNotificationSystem(ref))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(App)
