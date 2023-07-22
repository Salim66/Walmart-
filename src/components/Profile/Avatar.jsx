import React from 'react'
import AvatarImage from '../../assets/img/doctors/doctor-thumb-01.jpg';

const Avatar = ({ classData, altData, width }) => {
  return (
      <>
          <img class={classData} src={AvatarImage} alt={altData} width={width} />
      </>
  )
}

export default Avatar