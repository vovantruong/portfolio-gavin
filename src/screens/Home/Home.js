import React from 'react'
import classNames from 'classnames/bind'
import styles from './Home.module.sass'

const cx = classNames.bind(styles)

const style = {
  width: '100%',
  height: '100vh'
}

const Home = ({id}) => {
  return(
    <div id={id} style={style} className={cx('home')}>
      <div className='container'>
        Home
      </div>
    </div>
  )
}
export default Home