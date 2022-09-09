import { useReactiveVar } from '@apollo/client'
import React, { Component, useState } from 'react'
import { gainExperience } from '../api-functions/api-call'
import { rvAuthorisedUser } from '../state/login-state'
import { rvCurrentExperience, rvOperationInProgress } from '../state/profile-state'
import SvgComponent from './image'


export const GameArea = () => {
  const [run, setRun] = useState<boolean>(true)
  const authorisedUser = useReactiveVar(rvAuthorisedUser)
  const operatingInProgress = useReactiveVar(rvOperationInProgress)
  const experience = useReactiveVar(rvCurrentExperience)
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

  return (
    <div>
      <div>
        <h2>
          {`XP: ${experience?.experience.toString()}`}
        </h2>
      </div>
      <div className={run ? 'gelatine' : 'pulse'} onClick={startMining}>
        <SvgComponent />
       {operatingInProgress ? <p>Mining</p>: null}
      </div>
    </div>

  )
}
