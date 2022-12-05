import { useReactiveVar } from '@apollo/client'
import { useState } from 'react'
import { gainExperience } from '../api-functions/api-call'
import GoldBar from '../images/gold-bar'
import { rvAuthorisedUser } from '../state/login-state'
import { rvOperationInProgress, rvProfile } from '../state/profile-state'
import SvgComponent from './image'
import Switch from '@mui/material/Switch';

export const GameArea = () => {
  const [run, setRun] = useState<boolean>(true)
  const [switchSelected, setSwitchSelected] = useState<boolean>(false)
  const authorisedUser = useReactiveVar(rvAuthorisedUser)
  const operatingInProgress = useReactiveVar(rvOperationInProgress)
  const profile = useReactiveVar(rvProfile)

  const flickSwittch = async (event: any) => {
    setSwitchSelected(event.target.checked)
      while(event.target.checked){
        await startMining()
      }
  }



  const startMining = async () => {
  
    if (!operatingInProgress) {
      if (authorisedUser) {
        rvOperationInProgress(true)
        setRun(false)
        await gainExperience(authorisedUser.token).then(() => {
          setRun(true)
          rvOperationInProgress(false)
        })
      }
    }
  }

  if(!profile){
    return null
  }

  return (
    <div>
      <div className="gold_bar"> 
        <GoldBar/>
        <p>
          {profile.gold.toString()}
        </p>
      </div>
      <div>
          <p>{profile?.username}</p>
      </div>
      <div>
        <h2>
          {`XP: ${profile?.experience.toString()}`}
        </h2>
      </div>
      <div className={run ? 'gelatine' : 'pulse'} onClick={startMining}>
        <SvgComponent />
       {operatingInProgress ? <p>Mining</p>: null}
      </div>
      <div>
      <Switch 
      checked={switchSelected}
      onChange={flickSwittch}
      />
      </div>
    </div>

  )
}
