import { Component } from 'react'
import Router from 'next/router'
import Layout from '../components/layout'
import Services from '../services/services';
import { connect } from 'react-redux'
import { LOGIN, LOGIN_FAILED } from '../redux/store'
import { bindActionCreators } from 'redux';

class Login extends Component {    
    constructor (props) {
        super(props)

        this.state = { email: '', password: '', error: '', token: '' }
        this.emailChange = this.emailChange.bind(this)
        this.passChange = this.passChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    static getInitialProps ({ reduxStore, req }) {
        const isServer = !!req
        reduxStore.dispatch(LOGIN(isServer))
    
        return {}
    }

  emailChange (event) {
    this.setState({ email: event.target.value })
  }

  passChange (event) {
    this.setState({ error: "" })
    this.setState({ password: event.target.value })
  }

  async handleSubmit (event) {
    event.preventDefault();

    const details = {
        username: this.state.email,
        password: this.state.password
    };

    const { LOGIN, LOGIN_FAILED } = this.props
    
    Services.UserLogin(details).then(function(res) {
        Router.push(`/home`)
        LOGIN()
    }).catch((err) => {
        var response = err.response.data;
        var message = response.message;
        LOGIN_FAILED();

        this.setState({ error: message });
    });
  }

  render () {
    return (
        <Layout>
            <div className="container form-box">
                <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                        <form className="ibox-body main-form p-5" id="login-form" onSubmit={this.handleSubmit} >
                            <h4 className="form-title mb-4">Login</h4>
                            <label className="text-dark" htmlFor="email">Email</label>
                            <div className="form-group mb-4">
                                <input className="form-control hx-50" id="email" type="email" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} required />
                            </div>
                            <label className="text-dark" htmlFor="password">Password</label>
                            <div className="form-group mb-4">
                                <input className="form-control hx-50" id="password" type="password" value={this.state.password} onChange={this.passChange} required/>
                            </div>
                            <div className="text-center mt-4 mb-5">
                                <button className="btn Rectangle-Copy-6 text-white btn-rounded btn-block">LOGIN</button>
                            </div>
                            <p className="text-danger text-center">{this.state.error}</p>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
}}

function mapStateToProps (state) {
    const { token } = state
    return { token }
}
const mapDispatchToProps = dispatch =>
    bindActionCreators({ LOGIN, LOGIN_FAILED }, dispatch)
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)