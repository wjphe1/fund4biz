import Head from 'next/head'
import Cookies from 'js-cookie'
import Layout, { siteTitle } from '../components/layout'
import Formone from '../components/formone'
import Formtwo from '../components/formtwo'
import Formthree from '../components/formthree'
import Offers from '../components/offers'
import utils from '../styles/module/utils.module.scss'
import styles from '../styles/module/home.module.scss'
import React from 'react';
import Link from 'next/link'
import { FaInbox } from 'react-icons/fa';
import { RiShareBoxFill } from 'react-icons/ri';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          step: 0,
        };
    }

    upStep = (value) => {
        const current = this.state.step + value;
        Cookies.set('step', current, { expires: 30 });
        this.setState({ step: current });
    }

    resetStep = () => {
        this.setState({ step: 1 });
    }

    componentDidMount() {
        var step = parseInt(Cookies.get('step'));
        if (!step || typeof step !== 'number') { step = 0}
        this.setState({ step: step });
    }

    render () {
        // use this.props.xxx to call global states
        return (
            <Layout page="dashboard" step={this.state.step} resetStep={this.resetStep} {...this.props}>
                <Head>
                    <title>{siteTitle}</title>
                </Head>
                {this.state.step === 0 && <section className={styles.section_container}>
                    <div className={`text-center w-50 ${utils.h_lg}`}>Complete your company profile and get recommended to the grants that you are eligible to apply</div>
                    <div style={{ fontSize: '15rem', color: '#E2E2E2', lineHeight: 1 }}><FaInbox/></div>
                    <button onClick={() => this.upStep(1)} className={utils.sbtn}>Get Started</button>
                    <Link href="/"><a className="mt-3">Skip and Browse All Grants</a></Link>
                </section>}
                {this.state.step === 1 && <Formone upStep={this.upStep} />}
                {this.state.step === 2 && <Formtwo upStep={this.upStep} />}
                {this.state.step === 3 && <Formthree upStep={this.upStep} />}
                {this.state.step > 3 && <Offers />}
            </Layout>
        )
    }
}