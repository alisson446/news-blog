import {
  ADD_NOTIFICATION,
  CONFIG_NOTIFICATION_SYSTEM
} from '../../constants'

const initialState = {
  _notificationSystem: null,
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_NOTIFICATION:
      state._notificationSystem.addNotification(action.payload);
      return state;

    case CONFIG_NOTIFICATION_SYSTEM:
      return { ...state, _notificationSystem: action.payload.ref };

    default:
      return state;
  }
}
