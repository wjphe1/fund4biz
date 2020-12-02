import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-circular-progressbar/dist/styles.css';
import "react-datepicker/dist/react-datepicker.css";
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'swiper/swiper.scss'
import 'swiper/swiper-bundle.min.css'
import 'react-modal-video/scss/modal-video.scss'
import '../styles/main.scss'
import React from 'react'
import App from 'next/app'

export default class MyApp extends App {
    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {}
        if (Component.getInitialProps) { pageProps = await Component.getInitialProps(ctx) }
        return { pageProps }
    }

    state = {
        // global states here
        name: "FUND4BIZ",
    }

    render () {
        const { Component, pageProps } = this.props

        return (
            <Component {...pageProps} {...this.state}/>
        )
    }
}