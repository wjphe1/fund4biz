import React from 'react'
import Cookies from 'js-cookie'
import styles from '../styles/module/admin/admin.module.scss'
import utils from '../styles/module/utils.module.scss'
import form from '../styles/module/form.module.scss'
import { MdCancel } from 'react-icons/md'
import dynamic from 'next/dynamic'
import { convertToRaw, EditorState, ContentState, convertFromHTML } from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import { FaTrashAlt } from 'react-icons/fa'

const Editor = dynamic(
    () => import('react-draft-wysiwyg').then(mod => mod.Editor),
    { ssr: false }
)

class Formthree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            desc: '',
            plan: '',
            stream: '',
            request: '',
            funding: [{ name: '', amount: '' }]
        };
    }

    changeStr = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    
    changeNum = (e) => {
        var value = '';
        if(e.target.value || e.target.value === '0') { value = parseFloat(e.target.value) }
        this.setState({
            [e.target.name]: value
        });
    }

    descChange = (editorState) => {
        this.setState({
            desc: editorState,
        });
    };

    planChange = (editorState) => {
        this.setState({
            plan: editorState,
        });
    };

    streamChange = (editorState) => {
        this.setState({
            stream: editorState,
        });
    };

    changeFund = (e, i) => {
        var array = this.state.funding;
        array[i][e.target.name] = e.target.value
        this.setState({ funding: array })
    }

    addFunding = (i) => {
        var array = this.state.funding;
        if (i === 'add') {
            const newone = {name: '', amount: ''};
            array = array.concat(newone)
        } else {
            array.splice(i, 1);
        }
        this.setState({ funding: array })
    }

    submitForm = (e) => {
        e.preventDefault();
        const info = {
            desc: draftToHtml(convertToRaw(this.state.desc.getCurrentContent())),
            plan: draftToHtml(convertToRaw(this.state.plan.getCurrentContent())),
            stream: draftToHtml(convertToRaw(this.state.stream.getCurrentContent())),
            request: this.state.request,
            funding: this.state.funding,
        }
        Cookies.set('three', info, { expires: 30 })
        this.props.upStep(1)
    }

    componentDidMount() {
        var data = {};
        var gett = Cookies.get('three');
        if (gett) { 
            data = JSON.parse(gett)
            console.log(data)
            this.setState({
                desc: EditorState.createWithContent(ContentState.createFromBlockArray(convertFromHTML(data.desc))) || '',
                plan: EditorState.createWithContent(ContentState.createFromBlockArray(convertFromHTML(data.plan))) || '',
                stream: EditorState.createWithContent(ContentState.createFromBlockArray(convertFromHTML(data.stream))) || '',
                request: data.request || '',
                funding: data.funding || [{ name: '', amount: '' }]
            })
        }

    }

    render () {
        return (
            <section className="p-5">
                <form onSubmit={this.submitForm} className="row m-0">
                    <div className="col-md-11 p-0">
                        <div className={`${styles.table} mb-2 pb-4`}>
                            <div className="d-flex align-items-center py-4 px-5 border-bottom">
                                <div className={styles.thead}>Product/ Project questions and answer</div>
                            </div>
                            <div className="px-5">
                                <div className="px-2 pb-2 pt-4"><b>Product/ Project Description</b></div>
                                <div className="admin-generic-tabs">
                                    <Editor editorState={this.state.desc} onEditorStateChange={this.descChange} placeholder="Write anything here..." editorClassName={styles.teditor} />
                                </div>
                                <div className="px-2 pb-2 pt-4"><b>Marketing plan/ strategy</b></div>
                                <div className="admin-generic-tabs">
                                    <Editor editorState={this.state.plan} onEditorStateChange={this.planChange} placeholder="Write anything here..." editorClassName={styles.teditor} />
                                </div>
                                <div className="px-2 pb-2 pt-4"><b>Revenue Stream/ How much revenue have you made to date</b></div>
                                <div className="admin-generic-tabs">
                                    <Editor editorState={this.state.stream} onEditorStateChange={this.streamChange} placeholder="Write anything here..." editorClassName={styles.teditor} />
                                </div>
                                <div className="px-2 py-4 font-weight-bold">Utilization of Funding</div>
                                <div className="px-2 pb-3">
                                    <div className={form.append_div}>
                                        <div className={`d-flex text-nowrap flex-wrap align-items-center ${form.title}`}>
                                            <span className="py-2 pr-4"><b>Funding Amount Requested </b></span>
                                            <input name="request" onChange={this.changeNum} value={this.state.request} type="number" className={`m-0 ${form.field}`} style={{ maxWidth: 250 }} required/>
                                        </div>
                                        <div className={form.bigtitle}>Breakdowns</div>
                                        <div className="row border-top" style={{ margin: '5px -20px 20px', padding: '10px 20px', boxShadow: '0px 3px 5px rgba(193, 193, 193, 0.25)'}}>
                                            <div className="col-md-8 px-2 font-weight-bold" style={{ fontSize: '0.9rem' }}>Type of Expenses</div>
                                            <div className="col-md-3 px-2 font-weight-bold" style={{ fontSize: '0.9rem' }}>Utilization</div>
                                        </div>
                                        {this.state.funding.map((u, i) => 
                                            <div className="row m-0" key={i}>
                                                <div className="col-md-8 px-2">
                                                    <input name="name" onChange={(e) => this.changeFund(e, i)} value={u.name} type="text" className={form.field} style={{ background: '#F2F2F2', border: 'none'}} required/>
                                                </div>
                                                <div className="col-md-3 px-2">
                                                    <input name="amount" onChange={(e) => this.changeFund(e, i)} value={u.amount} type="text" className={form.field} style={{ background: '#F2F2F2', border: 'none'}} required/>
                                                </div>
                                                <div className="col-md-1 p-0 d-flex align-items-center justify-content-center">
                                                    {i!==0 && <div className="mb-4" style={{ cursor: 'pointer', color: 'red'}} onClick={() => this.addFunding(i)}><FaTrashAlt/></div>}
                                                </div>
                                            </div>
                                        )}
                                        <div onClick={() => this.addFunding('add')} className="text-center mt-2 py-3 border-top" style={{lineHeight:2, margin: '0 -20px', color: "#0E00AF", fontWeight: 'bold', cursor: 'pointer'}}>+ Add Funding</div>
                                    </div>
                                </div>
                                <div className="px-2 d-flex justify-content-between flex-wrap mx-0 my-3">
                                    <div className="py-2" style={{ width: 200}}><div onClick={() => this.props.upStep(-1)} className={utils.outline_btn_red}>Go Back</div></div>
                                    <div className="py-2" style={{ width: 200}}><input className={`w-100 ${utils.sbtn}`} type="submit" value="Complete"/></div>
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

export default Formthree;