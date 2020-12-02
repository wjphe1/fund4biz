import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Carousel from '../components/carousel'
import utils from '../styles/module/utils.module.scss'
import styles from '../styles/module/home.module.scss'
import React from 'react';
import Link from 'next/link'
import { CircularProgressbar } from 'react-circular-progressbar';
import { FiShoppingBag } from 'react-icons/fi';
import { RiShareBoxFill } from 'react-icons/ri';

export default class Home extends React.Component {

  render () {
    // use this.props.xxx to call global states
    return (
        <section>
          <div className={styles.padwrap}>
            <div className={`${utils.h_xl_light} pt-5 d-flex align-item-center`}>
                <span>Grants Recommended For You</span> 
                <Link href="/"><a style={{ alignSelf: 'center', fontSize: '1rem', fontWeight: 600, color: '#0E00AF', marginLeft: 'auto' }}>Go to Main Page</a></Link>
            </div>
            <div className={styles.productwrap}>
              <div className={`${styles.prodcard} ${styles.smwidth}`}>
                <Link href="/products/generic"><a className={styles.prodtitle}>SME Corp Business Scale-Up Programme</a></Link>
                <p>Bizup Programme is to assist SMEs to grow and expand their businesses locally and globally.</p>
                <div className={styles.action_btn_yellow}>Up to RM 400,000</div>
                <button className={styles.share}><RiShareBoxFill/> Read More</button>
                <div className={styles.offaction}>
                    <div className="success-progress"><CircularProgressbar value={76} text={`76%`} strokeWidth={3}/> <span className="pl-2">Success Rate</span></div>
                    <button className={styles.oapply}>Apply Now</button>
                </div>
              </div>
              <div className={`${styles.prodcard} ${styles.smwidth}`}>
                <Link href="/products/generic"><a className={styles.prodtitle}>SME Corp Business Scale-Up Programme</a></Link>
                <p>Bizup Programme is to assist SMEs to grow and expand their businesses locally and globally.</p>
                <div className={styles.action_btn_yellow}>Up to RM 400,000</div>
                <button className={styles.share}><RiShareBoxFill/> Read More</button>
                <div className={styles.offaction}>
                    <div className="warning-progress"><CircularProgressbar value={36} text={`36%`} strokeWidth={3}/> <span className="pl-2">Success Rate</span></div>
                    <button className={styles.oapply}>Apply Now</button>
                </div>
              </div>
              <div className={`${styles.prodcard} ${styles.smwidth}`}>
                <Link href="/products/generic"><a className={styles.prodtitle}>SME Corp Business Scale-Up Programme</a></Link>
                <p>Bizup Programme is to assist SMEs to grow and expand their businesses locally and globally.</p>
                <div className={styles.action_btn_yellow}>Up to RM 400,000</div>
                <button className={styles.share}><RiShareBoxFill/> Read More</button>
                <div className={styles.offaction}>
                    <div className="success-progress"><CircularProgressbar value={90} text={`90%`} strokeWidth={3}/> <span className="pl-2">Success Rate</span></div>
                    <button className={styles.oapply}>Apply Now</button>
                </div>
              </div>
              <div className={`${styles.prodcard} ${styles.smwidth}`}>
                <Link href="/products/generic"><a className={styles.prodtitle}>SME Corp Business Scale-Up Programme</a></Link>
                <p>Bizup Programme is to assist SMEs to grow and expand their businesses locally and globally.</p>
                <div className={styles.action_btn_yellow}>Up to RM 400,000</div>
                <button className={styles.share}><RiShareBoxFill/> Read More</button>
                <div className={styles.offaction}>
                    <div className="warning-progress"><CircularProgressbar value={43} text={`43%`} strokeWidth={3}/> <span className="pl-2">Success Rate</span></div>
                    <button className={styles.oapply}>Apply Now</button>
                </div>
              </div>
              <div className={`${styles.prodcard} ${styles.smwidth}`}>
                <Link href="/products/generic"><a className={styles.prodtitle}>SME Corp Business Scale-Up Programme</a></Link>
                <p>Bizup Programme is to assist SMEs to grow and expand their businesses locally and globally.</p>
                <div className={styles.action_btn_yellow}>Up to RM 400,000</div>
                <button className={styles.share}><RiShareBoxFill/> Read More</button>
                <div className={styles.offaction}>
                    <div className="success-progress"><CircularProgressbar value={56} text={`56%`} strokeWidth={3}/> <span className="pl-2">Success Rate</span></div>
                    <button className={styles.oapply}>Apply Now</button>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
  }
}