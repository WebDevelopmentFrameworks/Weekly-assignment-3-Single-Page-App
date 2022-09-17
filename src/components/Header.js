import React from 'react'
import { useLocation } from 'react-router-dom';

export default function Header() {
  const path = useLocation().pathname;
  const component = path.split('/')[1];
  return (
    <div className={'header ' + component}></div>
  )
}
