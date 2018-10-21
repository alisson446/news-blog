/**
 * Modules
 */
import React from 'react';
import SidebarButton from '../SidebarButton'
import './index.css'

export default function Header(props) {
  return (
    <header className="header">
      <SidebarButton id="sidebar-button" />
      <h1 className="header-title">{ props.children }</h1>
    </header>
  );
}
