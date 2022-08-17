import Layout from '../components/Layout';
import { Component } from 'react'
import Router from 'next/router'

class SortRegister extends Component {
    
    constructor (props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit (event) {
        event.preventDefault();
        Router.push(`/home`);
    }

render () {
    return (
        <Layout>
            <div className="container form-box">
                <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                        <form className="ibox-body main-form p-5" onSubmit={this.handleSubmit}>
                            <h4 className="form-title mb-4">Empower waste tracking system<br/>pilot test registraion</h4>
                            <label className="text-dark">Email</label>
                            <div className="form-group mb-4">
                                <input className="form-control hx-50" type="email" required />
                            </div>
                            <label >Company/Organization name</label>
                            <div className="form-group mb-4">
                                <input className="form-control hx-50" type="text" required />
                            </div>
                            <label >Organization number</label>
                            <div className="form-group mb-4">
                                <input className="form-control hx-50" type="password" required />
                            </div>
                            <label >Country</label>
                            <div className="form-group mb-4">
                                <select id="country" className="form-control hx-50">
                                    <option></option>
                                </select>
                            </div>
                            <div className="text-center mt-4">
                                <button className="btn Rectangle-Copy-6 text-white btn-rounded btn-block">SUBMIT</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
}}

export default SortRegister
