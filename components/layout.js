import React, { useState } from 'react'
import Router from 'next/router'
import styles from '../styles/module/admin/layout.module.scss'
import astyl from '../styles/module/admin/admin.module.scss'
import utils from '../styles/module/utils.module.scss'
import api from './auth/api'
import routes from './auth/routes'
import Link from 'next/link'
import cn from 'classnames'
import Cookies from 'js-cookie'
import Modal from 'react-bootstrap/Modal'
import { CircularProgressbar } from 'react-circular-progressbar';
import { AuthProvider, ProtectRoute } from './auth/auth'
import { CgMenuGridR } from 'react-icons/cg'
import { HiMenu, HiUserGroup } from 'react-icons/hi'
import { FaUserAlt } from 'react-icons/fa'
import { RiPieChart2Fill, RiShoppingBagFill, RiGridFill } from 'react-icons/ri'
import { MdCancel } from 'react-icons/md'
import Dropdown from 'react-bootstrap/Dropdown'

export const siteTitle = 'Fund4biz'

export default function Layout({ children, page, name, step, resetStep }) {

    const [show, setShow] = useState(false);
    const [log, setLog] = useState(false);

    var user = {};
    if (Cookies.get('user')) {
        user = JSON.parse(Cookies.get('user'));
    };

    const logout = () => {
        Cookies.remove('user');
        Router.reload();
    }

    return (
        <AuthProvider>
            <ProtectRoute>
                <div className={cn({[styles.bigmain]: page === 'home', [styles.main]: page !== 'home'})}>
                    <nav className={styles.navbar}>
                        <button onClick={() => setShow(!show)} className={styles.burger}><CgMenuGridR/>&nbsp;Menu</button>
                        <div className="table-cell-dropdown ml-auto nav-icon">
                            <Dropdown>
                                <Dropdown.Toggle>
                                    <FaUserAlt/>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                <Dropdown.Item as="button" onClick={resetStep}>Account</Dropdown.Item>
                                <Dropdown.Item as="button" onClick={() => setLog(true)}>Sign Out</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className={`ml-3 ${styles.username}`}>{user.username}</div>
                    </nav>
                    {(page !== 'home' && step === 0) && <div className={`${cn({[styles.expand]: show})} ${styles.sidebar}`}>
                        <div className={utils.h_xl}>How it Works?</div>
                        <ul className="status-bar mt-3">
                            <li>
                                <time className="confirm"></time>
                                <div className="grey">
                                    <strong>Complete Your Company Profile</strong> 
                                    <span className="weak-words">Complete all your company profiles and attactch the required documents</span>
                                </div>
                            </li>
                            <li>
                                <time className="await"></time>
                                <div className="grey">
                                    <strong>Answer a few Questions</strong>
                                    <span className="weak-words">Answer a few question regarding your product &amp; project</span>
                                </div>
                            </li>
                            <li>
                                <time className="await"></time>
                                <div>
                                    <strong>Done!</strong> 
                                    <span className="weak-words">We will match you all the grants that you are eligible and the chances of you to getting it</span>
                                </div>
                            </li>
                        </ul>

                        <div className="mt-auto pt-4"><img src="/images/file.png" alt="file" className="w-100"/></div>
                    </div>}
                    {(page !== 'home' && step > 0) && <div className={`${cn({[styles.expand]: show})} ${styles.sidebar}`}>
                        <div className={styles.progressdiv}>
                            <CircularProgressbar value={(step/3)*100} text={step<=3 ? `${step}/3` : `3/3`} strokeWidth={3}/>
                            {step < 3 && <div className="pl-3">{3 - step} more step(s) to complete the applications</div>}
                            {step === 3 && <div className="pl-3">last step to complete the applications</div>}
                            {step > 3 && <div className="pl-3">Done!</div>}
                        </div>
                        <div className={utils.h_md}>Complete Your Profile</div>
                        <ul className="status-bar mt-3">
                            <li>
                                <time className={cn({['confirm current']: step === 1, ['confirm']: step > 1})}></time>
                                <div className={cn({['grey']: step < 2, ['blue']: step >= 2})}>
                                    <strong className={cn({['done']: step >= 1})}>Company Profile</strong> 
                                    <span className="weak-words">Answer few question about your Company and your Team</span>
                                </div>
                            </li>
                            <li>
                                <time className={cn({['await']: step < 2, ['confirm current']: step === 2, ['confirm']: step > 2 })}></time>
                                <div className={cn({['grey']: step < 3, ['blue']: step >= 3})}>
                                    <strong className={cn({['done']: step >= 2})}>Attachments</strong>
                                    <span className="weak-words">A Descriptions of your product/ project</span>
                                </div>
                            </li>
                            <li>
                                <time className={cn({['await']: step < 3, ['confirm current']: step >= 3 })}></time>
                                <div>
                                    <strong className={cn({['done']: step >= 3})}>Answer A few Questions</strong> 
                                    <span className="weak-words">Add in your information or extra remarks before you send it to client</span>
                                </div>
                            </li>
                        </ul>
                        <div className="d-flex justify-content-center mt-4"><button disabled className={utils.dbtn}>Get Recommendation</button></div>
                    </div>}
                    <main className={styles.container}>{children}</main>
                </div>
                <Modal show={log} onHide={() => setLog(false)} size="sm" aria-labelledby="confirm-log-out" centered>
                    <Modal.Body>
                        <div className="font-weight-bold pb-4 text-center">Confirm Log Out?</div>
                        <div className="d-flex flex-column align-items-center" style={{fontSize: '1.2rem'}}>
                            <button onClick={logout} className={`w-100 ${astyl.tbtn}`}>Confirm</button>
                            <button onClick={() => setLog(false)} className={`w-100 ${astyl.tbtn_reverse_borderless}`}><MdCancel/> Go Back</button>
                        </div>
                    </Modal.Body>
                </Modal>
            </ProtectRoute>
        </AuthProvider>
    )
}