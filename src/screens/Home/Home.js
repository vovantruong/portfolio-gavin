import React from 'react'
import classNames from 'classnames/bind'
import styles from './Home.module.sass'

const cx = classNames.bind(styles)

const Home = () => {
  return(
    <div className={cx('container')}>
        Home
    </div>
  )
}
export default Home