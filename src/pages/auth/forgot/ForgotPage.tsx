import { AuthHeader } from 'components'
import React from 'react'
import { PageContent } from './components'

export const ForgotPage = () => {
  return (
    <div className='auth'>
      <AuthHeader/>
      <PageContent />
    </div>
  )
}