import React from 'react'

const ProfileContext = React.createContext({
  username: '',
  changeProfileName: () => {},
})

export default ProfileContext
