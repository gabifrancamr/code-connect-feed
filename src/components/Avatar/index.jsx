import Image from 'next/image'
import React from 'react'
import styles from './avatar.module.css'

const Avatar = ({ name, imageSrc }) => {
  return (
    <ul className={styles.avatar}>
      <li>
        <Image src={imageSrc} width={32} height={32} alt={`Avatar da ${name}`} />
      </li>
      <li>
        @{name}
      </li>
    </ul>
  )
}

export default Avatar
