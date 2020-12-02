import React from 'react'
import Cookies from 'js-cookie'
import cn from 'classnames'
import styles from '../styles/module/admin/admin.module.scss'
import utils from '../styles/module/utils.module.scss'
import form from '../styles/module/form.module.scss'
import { FaRegFileAlt } from 'react-icons/fa'
import dynamic from 'next/dynamic'
import { convertToRaw } from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import Spinner from 'react-bootstrap/Spinner'

const Editor = dynamic(
    () => import('react-draft-wysiwyg').then(mod => mod.Editor),
    { ssr: false }
)

class Formone extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: '',
            form_nine: '',
            pitch_slide: '',
            statement: '',
        };
    }

    imgChange = (e, name) => {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onloadend = async () => {
            this.setState({
                [name]: reader.result
            });
        }
        reader.readAsDataURL(file)
    }

    submitFormTwo = (e) => {
        e.preventDefault();
        const info = {
            form_nine: this.state.form_nine,
            pitch_slide: this.state.pitch_slide,
            statement: this.state.statement,
        }
        localStorage.setItem('two', JSON.stringify(info));
        this.props.upStep(1)
    }

    componentDidMount() {
        var data = {};
        var gett = localStorage.getItem('two');
        if (gett) {
            data = JSON.parse(gett)
            this.setState({
                form_nine: data.form_nine || '',
                pitch_slide: data.pitch_slide || '',
                statement: data.statement || '',
            })
        }

        var userdata = {};
        var user = Cookies.get('user')
        if (user) {
            userdata = JSON.parse(user)
            this.setState({ type: userdata.type})
        }
    }

    render () {
        const $form = <div className={form.field_file_submitted}>
            <div style={{ fontSize: '5rem', color: 'green' }}><FaRegFileAlt/></div>
            {/* <button onClick={() => this.setState({ form_nine: '' })} style={{ fontSize: '0.8rem', border: 'none', background: 'none'}}>Remove</button> */}
        </div>;
        const $slide = <div className={form.field_file_submitted}>
            <div style={{ fontSize: '5rem', color: 'green' }}><FaRegFileAlt/></div>
            {/* <button onClick={() => this.setState({ pitch_slide: '' })} style={{ fontSize: '0.8rem', border: 'none', background: 'none'}}>Remove</button> */}
        </div>;
        const $statm = <div className={form.field_file_submitted}>
            <div style={{ fontSize: '5rem', color: 'green' }}><FaRegFileAlt/></div>
            {/* <button onClick={() => this.setState({ statement: '' })} style={{ fontSize: '0.8rem', border: 'none', background: 'none'}}>Remove</button> */}
        </div>;

        return (
            <section className="p-5">
                <form onSubmit={this.submitFormTwo} className="row m-0">
                    <div className="col-md-11 p-0">
                        <div className={`${styles.table} mb-2 pb-4`}>
                            <div className="d-flex align-items-center py-4 px-5 border-bottom">
                                <div className={styles.thead}>Attachments</div>
                            </div>
                            <div className="row m-0 px-5 pt-4 pb-4">
                                <div className="col-md-4">
                                    <label><b>Company’s Form 9 / SSM</b></label>
                                    <div className="d-flex align-items-center">
                                        {this.state.form_nine ? $form :
                                        <label htmlFor="form_nine" className={cn({[form.field_file]: this.state.type === 'notssm', [form.field_file_disabled]: this.state.type === 'ssm'})}>Upload your Document here</label>}
                                        <input id="form_nine" name="form_nine" type="file" onChange={(e)=>this.imgChange(e, 'form_nine')} className="d-none" disabled={this.state.type === 'ssm'}/>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <label><b>Product Pitch Slides</b></label>
                                    <div className="d-flex align-items-center">
                                        {this.state.pitch_slide ? $slide :
                                        <label htmlFor="pitch_slide" className={form.field_file}>Upload your Document here</label>}
                                        <input id="pitch_slide" name="pitch_slide" type="file" onChange={(e)=>this.imgChange(e, 'pitch_slide')} className="d-none"/>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <label><b>Financial Statement</b></label>
                                    <div className="d-flex align-items-center">
                                        {this.state.statement ? $statm :
                                        <label htmlFor="statement" className={cn({[form.field_file]: this.state.type === 'notssm', [form.field_file_disabled]: this.state.type === 'ssm'})}>Upload your Document here</label>}
                                        <input id="statement" name="statement" type="file" onChange={(e)=>this.imgChange(e, 'statement')} className="d-none" disabled={this.state.type === 'ssm'}/>
                                    </div>
                                </div>
                            </div>
                            <div className="px-5">
                                <div className="px-2 d-flex justify-content-between flex-wrap mx-0 my-3">
                                    <div className="py-2" style={{ width: 200}}><div onClick={() => this.props.upStep(-1)} className={utils.outline_btn_red}>Go Back</div></div>
                                    <div className="py-2" style={{ width: 200}}><input className={`w-100 ${utils.sbtn}`} type="submit" value="Save &amp; Next Section"/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1 df-mn align-items-center pr-0">
                        <div className="w-100 d-flex flex-wrap">
                            <button type="submit" className={utils.invibtn}>
                                Save &amp; Next Section<br/>
                                <svg width="51" height="8" viewBox="0 0 51 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M50.3536 4.35355C50.5488 4.15829 50.5488 3.8417 50.3536 3.64644L47.1716 0.464462C46.9763 0.2692 46.6597 0.2692 46.4645 0.464462C46.2692 0.659724 46.2692 0.976307 46.4645 1.17157L49.2929 4L46.4645 6.82842C46.2692 7.02369 46.2692 7.34027 46.4645 7.53553C46.6597 7.73079 46.9763 7.73079 47.1716 7.53553L50.3536 4.35355ZM4.37114e-08 4.5L50 4.5L50 3.5L-4.37114e-08 3.5L4.37114e-08 4.5Z" fill="#0E00AF"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </form>
            </section>
        )
    }
}

export default Formone;