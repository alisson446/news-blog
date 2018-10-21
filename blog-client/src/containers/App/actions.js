import {
  ADD_NOTIFICATION,
  CONFIG_NOTIFICATION_SYSTEM
} from '../../constants'

export function addNotification(message, level, position = null) {
  if (!position) position = 'bc';

  return {
    type: ADD_NOTIFICATION,
    payload: {
      message,
      level,
      position
    }
  }
}

export function configNotificationSystem(ref) {
  return {
    type: CONFIG_NOTIFICATION_SYSTEM,
    payload: { ref }
  }
}
