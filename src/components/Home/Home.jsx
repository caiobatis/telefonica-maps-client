import React, { Component } from 'react'
import Header from '../Header/Header'
import BannerSlider from '../Banners/BannerSlider'
import BannerFixed from '../Banners/BannerFixed'

import styles from './Home.scss'


class Home extends Component {
  render() {
    return (
      <div className={styles.home}>
        <Header/>
        <div className={styles.content}>
          <div className={styles.sectionBanners}>
          <BannerFixed/>
          <BannerSlider/>
          </div>
          <div className={styles.sectionMaps}>
            <div className="container">
              <div className={styles.maps}>
                <div className={styles.map}></div>
                <div className={styles.map}></div>
                <div className={styles.map}></div>
                <div className={styles.map}></div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer}></div>
      </div>
    )
  }
}

export default Home