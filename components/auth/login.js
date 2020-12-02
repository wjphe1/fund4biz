import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import cn from 'classnames'
import styles from '../../styles/module/form.module.scss'
import utils from '../../styles/module/utils.module.scss'
import Cookies from 'js-cookie'
import api from '../auth/api'
import routes from '../auth/routes'
import Spinner from 'react-bootstrap/Spinner'
import { FaRegUser } from 'react-icons/fa';

class Adminlog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: '',
      password: '',
      isloaded: true,
      error: false,
      tab: 'applicant',
      type: 'notssm'
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  login = (e) => {
    e.preventDefault();
    this.setState({ isloaded: false })
    const user = {
      username: this.state.credentials, 
      password: this.state.password, 
      type: this.state.type, 
      role: this.state.tab
    }
    Cookies.set('user', user, { expires: 30 }); // 30 days expiry

    setTimeout(() => { if (Router.href === "/dashboard") { Router.reload() } else { Router.push('/dashboard') } }, 500)
  }

  render () {
    return (
      <div className={cn({[styles.bg]: this.state.type === 'notssm', [styles.darkbg]: this.state.type === 'ssm'})}>
        {this.state.type === 'notssm' ? <img src="/images/logo.png" alt="logo" className={styles.logo}/> : <img src="/images/logodark.png" alt="logo" className={styles.logo}/>}
        {this.state.error && <div className={`mb-4 ${styles.notice_error}`}>
          <div className="col-10 d-flex align-items-center">
            <span className={styles.nexcl}>!</span> Error - Wrong Username or Password
          </div> 
          <div onClick={() => this.setState({ error: false })} className={`col-2 ${styles.nclose}`}>Close</div>
        </div>}
        {this.state.type === 'notssm' ? <form onSubmit={this.login} className={styles.signin_main}>
          <div className="d-flex justify-content-between pb-4">
            <div onClick={() => this.setState({ tab: 'applicant' })} className={`${styles.signin_select} ${cn({[styles.active]: this.state.tab === 'applicant'})}`}>
              <div className="pt-1 d-flex justify-content-center"><FaRegUser/></div>
              <div className="text-center pt-2">Applicant</div>
            </div>
            <div onClick={() => this.setState({ tab: 'assessor' })} className={`${styles.signin_select} ${cn({[styles.active]: this.state.tab === 'assessor'})}`}>
              <div className="d-flex justify-content-center"><FaRegUser/></div>
              <div className="text-center pt-2">Grant Assessor</div>
            </div>
          </div>

          {this.state.tab === 'applicant' && <div onClick={() => this.setState({ type: 'ssm' })} className={`mt-3 ${utils.outline_btn}`}>Login with SSM</div>}
          
          {this.state.tab === 'applicant' && <div className={styles.sepa}><span>Or Company Registration Number</span></div>}

          {this.state.tab === 'applicant' ? <label className={styles.label}>Company Registration Number</label> : <label className={styles.label}>Email</label>}
          {this.state.tab === 'applicant' ? <input name="credentials" placeholder="E.g. SSM 189489PLT" className={styles.field} onChange={this.handleChange} required />
          : <input name="credentials" type="email" placeholder="Staff Email" className={styles.field} onChange={this.handleChange} required />}
                    
          <label className={styles.label}>Passwords</label>
          <input name="password" type="password" className={styles.field} onChange={this.handleChange} required/>

          <div className={styles.forgot}>Forgot Password? Reset it Here</div>
                  
          <div className="w-100 d-flex justify-content-center pt-2">
            {this.state.isloaded ? <input type="submit" value="Login" className={styles.submit} /> : <div className={styles.submit}><Spinner animation="border" variant="light" size='sm'/></div>}
          </div>

          <div className="text-center mt-5 py-3 border-top" style={{lineHeight:2, margin: '0 -40px'}}>Do not have an account? <Link href="#"><a style={{color: "#0E00AF", fontWeight: 'bold'}}>Create Account Here</a></Link></div>
        </form> 
        : 
        <form onSubmit={this.login} className={styles.signin_main}>
          <div className="d-flex justify-content-center pb-3"><img src="/images/ssm.png" alt="ssm" style={{ width: '50%' }}/></div>

          <label className={styles.label}>SSM Username</label>
          <input name="credentials" className={styles.field} onChange={this.handleChange} required />
                    
          <label className={styles.label}>Passwords</label>
          <input name="password" type="password" className={styles.field} onChange={this.handleChange} required/>

          <div className={styles.forgot}>Forgot Password? Reset it Here</div>
                  
          <div className="w-100 d-flex justify-content-center pt-2">
            {this.state.isloaded ? <input type="submit" value="Login" className={styles.submit} /> : <div className={styles.submit}><Spinner animation="border" variant="light" size='sm'/></div>}
          </div>

          <div onClick={() => this.setState({ type: 'notssm' })} className="text-center py-4" style={{color: "#0E00AF", cursor: 'pointer'}}>Back to Normal Login</div>
        </form>}
      </div>
    )
  }
}

export default Adminlog;