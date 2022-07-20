import React from 'react'
import classNames from 'classnames/bind'
import styles from './Skills.module.sass'

const cx = classNames.bind(styles)

const Skills = ({id}) => {
  return(
    <div id={id} className={cx('skills')}>
        Skills
    </div>
  )
}
export default Skills