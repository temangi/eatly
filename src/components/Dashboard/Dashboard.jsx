import React from 'react'
import scss from './Dashboard.module.scss'
import Aside from './Aside/Aside'
import Middle from './Middle/Middle'
import RigthPart from './RightPart/RigthPart'

function Dashboard() {
  return (
    <div className={scss.dashboard}>
        <Aside/>
        <Middle/>
        <RigthPart/>
    </div>
  )
}

export default Dashboard