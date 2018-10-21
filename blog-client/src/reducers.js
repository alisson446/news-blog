import { combineReducers } from 'redux'
import App from './containers/App/reducer'
import SidebarButton from './components/SidebarButton/reducer'
import AdministratorMain from './containers/AdministratorMain/reducer'
import AdministratorNews from './containers/AdministratorNews/reducer'

export default combineReducers({
  App,
  SidebarButton,
  AdministratorMain,
  AdministratorNews
})
