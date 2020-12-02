import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Carousel from '../components/carousel'
import utils from '../styles/module/utils.module.scss'
import styles from '../styles/module/home.module.scss'
import React from 'react';
import Link from 'next/link'
import { FiShoppingBag } from 'react-icons/fi';
import { RiShareBoxFill } from 'react-icons/ri';

export default class Home extends React.Component {

  render () {
    // use this.props.xxx to call global states
    return (
      <Layout page="home" {...this.props}>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section>
          <Carousel/>

          <div className={styles.padwrap}>
            <div className={`${utils.h_xl_light} pt-5`}>All Grants</div>
            <div className={styles.productwrap}>
              <div className={styles.prodcard}>
                <Link href="/products/generic"><a className={styles.prodtitle}>SME Corp Business Scale-Up Programme</a></Link>
                <p>Bizup Programme is to assist SMEs to grow and expand their businesses locally and globally.</p>
                <div className={styles.action_btn_yellow}>Up to RM 400,000</div>
                <button className={styles.apply}>Apply Now</button>
                <button className={styles.share}><RiShareBoxFill/> Read More</button>
              </div>
              <div className={styles.prodcard}>
                <Link href="/products/generic"><a className={styles.prodtitle}>SME Corp Business Scale-Up Programme</a></Link>
                <p>Bizup Programme is to assist SMEs to grow and expand their businesses locally and globally.</p>
                <div className={styles.action_btn_yellow}>Up to RM 400,000</div>
                <button className={styles.apply}>Apply Now</button>
                <button className={styles.share}><RiShareBoxFill/> Read More</button>
              </div>
              <div className={styles.prodcard}>
                <Link href="/products/generic"><a className={styles.prodtitle}>SME Corp Business Scale-Up Programme</a></Link>
                <p>Bizup Programme is to assist SMEs to grow and expand their businesses locally and globally.</p>
                <div className={styles.action_btn_yellow}>Up to RM 400,000</div>
                <button className={styles.apply}>Apply Now</button>
                <button className={styles.share}><RiShareBoxFill/> Read More</button>
              </div>
              <div className={styles.prodcard}>
                <Link href="/products/generic"><a className={styles.prodtitle}>SME Corp Business Scale-Up Programme</a></Link>
                <p>Bizup Programme is to assist SMEs to grow and expand their businesses locally and globally.</p>
                <div className={styles.action_btn_yellow}>Up to RM 400,000</div>
                <button className={styles.apply}>Apply Now</button>
                <button className={styles.share}><RiShareBoxFill/> Read More</button>
              </div>
              <div className={styles.prodcard}>
                <Link href="/products/generic"><a className={styles.prodtitle}>SME Corp Business Scale-Up Programme</a></Link>
                <p>Bizup Programme is to assist SMEs to grow and expand their businesses locally and globally.</p>
                <div className={styles.action_btn_yellow}>Up to RM 400,000</div>
                <button className={styles.apply}>Apply Now</button>
                <button className={styles.share}><RiShareBoxFill/> Read More</button>
              </div>
              <div className={styles.prodcard}>
                <Link href="/products/generic"><a className={styles.prodtitle}>SME Corp Business Scale-Up Programme</a></Link>
                <p>Bizup Programme is to assist SMEs to grow and expand their businesses locally and globally.</p>
                <div className={styles.action_btn_yellow}>Up to RM 400,000</div>
                <button className={styles.apply}>Apply Now</button>
                <button className={styles.share}><RiShareBoxFill/> Read More</button>
              </div>
              <div className={styles.prodcard}>
                <Link href="/products/generic"><a className={styles.prodtitle}>SME Corp Business Scale-Up Programme</a></Link>
                <p>Bizup Programme is to assist SMEs to grow and expand their businesses locally and globally.</p>
                <div className={styles.action_btn_yellow}>Up to RM 400,000</div>
                <button className={styles.apply}>Apply Now</button>
                <button className={styles.share}><RiShareBoxFill/> Read More</button>
              </div>
              <div className={styles.prodcard}>
                <Link href="/products/generic"><a className={styles.prodtitle}>SME Corp Business Scale-Up Programme</a></Link>
                <p>Bizup Programme is to assist SMEs to grow and expand their businesses locally and globally.</p>
                <div className={styles.action_btn_yellow}>Up to RM 400,000</div>
                <button className={styles.apply}>Apply Now</button>
                <button className={styles.share}><RiShareBoxFill/> Read More</button>
              </div>
              <div className={styles.prodcard}>
                <Link href="/products/generic"><a className={styles.prodtitle}>SME Corp Business Scale-Up Programme</a></Link>
                <p>Bizup Programme is to assist SMEs to grow and expand their businesses locally and globally.</p>
                <div className={styles.action_btn_yellow}>Up to RM 400,000</div>
                <button className={styles.apply}>Apply Now</button>
                <button className={styles.share}><RiShareBoxFill/> Read More</button>
              </div>
              <div className={styles.prodcard}>
                <Link href="/products/generic"><a className={styles.prodtitle}>SME Corp Business Scale-Up Programme</a></Link>
                <p>Bizup Programme is to assist SMEs to grow and expand their businesses locally and globally.</p>
                <div className={styles.action_btn_yellow}>Up to RM 400,000</div>
                <button className={styles.apply}>Apply Now</button>
                <button className={styles.share}><RiShareBoxFill/> Read More</button>
              </div>
              <div className={styles.prodcard}>
                <Link href="/products/generic"><a className={styles.prodtitle}>SME Corp Business Scale-Up Programme</a></Link>
                <p>Bizup Programme is to assist SMEs to grow and expand their businesses locally and globally.</p>
                <div className={styles.action_btn_yellow}>Up to RM 400,000</div>
                <button className={styles.apply}>Apply Now</button>
                <button className={styles.share}><RiShareBoxFill/> Read More</button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}