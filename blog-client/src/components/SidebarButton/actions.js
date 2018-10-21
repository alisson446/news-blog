import { CHANGE_SIDEBAR_DOCK } from '../../constants'

export function changeSidebarDock(dockStatus) {
  return {
    type: CHANGE_SIDEBAR_DOCK,
    payload: dockStatus
  }
}
