import React from 'react'
import classNames from 'classnames/bind'
import styles from './Home.module.sass'

const cx = classNames.bind(styles)

const style = {
  width: '100%',
  height: '100vh'
}

const Home = () => {
  return(
    <div style={style} className={cx('')}>
        Home
    </div>
  )
}
export default Home