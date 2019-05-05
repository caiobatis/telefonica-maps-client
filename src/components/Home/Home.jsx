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
        <div className="content">
          <div className="sectionBanners">
          <BannerFixed/>
          <BannerSlider/>
          </div>
          <div className="sectionMaps">
            <div className="container">
              <div className="maps">
                <div className="map"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer"></div>
      </div>
    )
  }
}

export default Home