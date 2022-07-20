import React from 'react'
import classNames from 'classnames/bind'
import styles from './Projects.module.sass'

const cx = classNames.bind(styles)

const Projects = ({id}) => {
  return(
    <div id={id} className={cx('project')}>
        Projects
    </div>
  )
}
export default Projects