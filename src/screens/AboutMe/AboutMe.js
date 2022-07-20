import React from 'react'
import classNames from 'classnames/bind'
import styles from './AboutMe.module.sass'

const cx = classNames.bind(styles)

const AboutMe = ({id}) => {
  return(
    <div id={id} className={cx('about')}>
        AboutMe
    </div>
  )
}
export default AboutMe