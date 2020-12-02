import React from 'react'
import Cookies from 'js-cookie'
import styles from '../styles/module/admin/admin.module.scss'
import utils from '../styles/module/utils.module.scss'
import form from '../styles/module/form.module.scss'
import DatePicker from "react-datepicker"
import { FaTrashAlt } from 'react-icons/fa'

class Formone extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            industry: '',
            company_no: '',
            date_corporation: '',
            phone: '',
            revenue: '',
            capital: '',
            website: '',
            team: [{name: '', nationality: '', ic: ''}],
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

    changeTeam = (e, i) => {
        var array = this.state.team;
        array[i][e.target.name] = e.target.value
        this.setState({ team: array })
    }

    addDirector = (i) => {
        var array = this.state.team;
        if (i === 'add') {
            const newone = {name: '', nationality: '', ic: ''};
            array = array.concat(newone)
        } else {
            array.splice(i, 1);
        }
        this.setState({ team: array })
    }

    submitForm = (e) => {
        e.preventDefault();
        const info = {
            name: this.state.name,
            industry: this.state.industry,
            company_no: this.state.company_no,
            date_corporation: this.state.date_corporation,
            phone: this.state.phone,
            revenue: this.state.revenue,
            capital: this.state.capital,
            website: this.state.website,
            team: this.state.team,
        }
        Cookies.set('one', info, { expires: 30 })
        this.props.upStep(1)
    }

    componentDidMount() {
        var data = {};
        var gett = Cookies.get('one');
        if (gett) { 
            data = JSON.parse(gett)
            this.setState({
                name: data.name || '',
                industry: data.industry || '',
                company_no: data.company_no || '',
                date_corporation: new Date(data.date_corporation) || '',
                phone: data.phone || '',
                revenue: data.revenue || '',
                capital: data.capital || '',
                website: data.website || '',
                team: data.team || [{name: '', nationality: '', ic: ''}],
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
                                <div className={styles.thead}>About your Company</div>
                            </div>
                            <div className="row m-0 px-5 pt-4">
                                <div className="col-md-6 px-2">
                                    <input name="name" onChange={this.changeStr} value={this.state.name} type="text" placeholder="Company Name" className={form.field} required/>
                                </div>
                                <div className="col-md-6 px-2">
                                    <select name="industry" onChange={this.changeStr} value={this.state.industry} type="text" placeholder="Company Industry/Sector" className={form.field} required>
                                        <option className="d-none" value=''>Company Industry/Sector</option>
                                        <option>Agriculture &amp; Forestry/Wildlife</option>
                                        <option>Business &amp; Information</option>
                                        <option>Construction/Utilities/Contracting</option>
                                        <option>Education</option>
                                        <option>Finance &amp; Insurance</option>
                                        <option>Food &amp; Hospitality</option>
                                        <option>Gaming</option>
                                        <option>Health Services</option>
                                        <option>Motor Vehicle</option>
                                        <option>Natural Resources/Environmental</option>
                                        <option>Personal Services</option>
                                        <option>Health Services</option>
                                        <option>Real Estate &amp; Housing</option>
                                        <option>Safety/Security &amp; Legal</option>
                                        <option>Transportation</option>
                                        <option>Others</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row m-0 px-5">
                                <div className="col-md-6 px-2">
                                    <input name="company_no" onChange={this.changeStr} value={this.state.company_no} type="text" placeholder="Company Registration Number" className={form.field} required/>
                                </div>
                                <div className="col-md-6 px-2">
                                    <DatePicker placeholderText="Date of Incorporation" dateFormat="d MMM yyyy" className={form.field} selected={this.state.date_corporation} onChange={(date) => this.setState({date_corporation: date})} showMonthDropdown showYearDropdown dropdownMode="select" />
                                </div>
                            </div>
                            <div className="row m-0 px-5">
                                <div className="col-md-6 px-2">
                                    <input name="phone" onChange={this.changeStr} value={this.state.phone} type="phone" placeholder="Phone Number" className={form.field} required/>
                                </div>
                                <div className="col-md-6 px-2">
                                    <input name="revenue" onChange={this.changeNum} value={this.state.revenue} type="number" placeholder="Total Accumulated Revenue To Date (RM)" className={form.field} required/>
                                </div>
                            </div>
                            <div className="row m-0 px-5">
                                <div className="col-md-6 px-2">
                                    <input name="capital" onChange={this.changeNum} value={this.state.capital} type="number" placeholder="Company Paid Up Capital (RM)" className={form.field} required/>
                                </div>
                                <div className="col-md-6 px-2">
                                    <input name="website" onChange={this.changeStr} value={this.state.website} type="text" placeholder="Urls for your company - Website/ Facebook/ Linkedin" className={form.field} required/>
                                </div>
                            </div>
                            <div className="px-5">
                                <div className="px-2">
                                    <div className={form.append_div}>
                                        <div className={form.title}>Your Team</div>
                                        <div className={form.bigtitle}>Directors</div>
                                        {this.state.team.map((u, i) => 
                                            <div className="row m-0" key={i}>
                                                <div className="col-md-4 px-2">
                                                    <label>Name</label>
                                                    <input name="name" onChange={(e) => this.changeTeam(e, i)} value={u.name} type="text" className={form.field} required/>
                                                </div>
                                                <div className="col-md-4 px-2">
                                                    <label>Identity no.</label>
                                                    <input name="ic" onChange={(e) => this.changeTeam(e, i)} value={u.ic} type="text" placeholder="Eg. SSM17389479PLT" className={form.field} required/>
                                                </div>
                                                <div className="col-md-4 px-2">
                                                    <div className="d-flex align-items-center"><label>Nationality</label>{i!==0 && <div className="ml-auto mb-2" style={{ cursor: 'pointer', color: 'red'}} onClick={() => this.addDirector(i)}><FaTrashAlt/></div>}</div>
                                                    <input name="nationality" onChange={(e) => this.changeTeam(e, i)} value={u.nationality} type="text" className={form.field} required/>
                                                </div>
                                            </div>
                                        )}
                                        <div onClick={() => this.addDirector('add')} className="text-center mt-2 py-3 border-top" style={{lineHeight:2, margin: '0 -20px', color: "#0E00AF", fontWeight: 'bold', cursor: 'pointer'}}>+ Add Director</div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-5">
                                <div className="px-2 d-flex justify-content-end flex-wrap mx-0 my-3">
                                    <div className="py-2"><input className={`w-100 ${utils.sbtn}`} type="submit" value="Save &amp; Next Section"/></div>
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