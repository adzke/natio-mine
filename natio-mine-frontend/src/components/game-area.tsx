import React, {useState} from 'react'
import SvgComponent from './image'


export const GameArea = () => {
  const [ run, setRun ] = useState<boolean>(false)

  const startMining = () => {
    setRun(!run)
  }

  return (
    <div>game-area
      <div className={run ? 'gelatine' : 'paused-gelatine'} onClick={startMining}>
        <SvgComponent/>
      </div>
    </div>

  )
}
