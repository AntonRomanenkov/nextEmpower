import { Component } from 'react'
import Layout from '../components/Layout';
import Services from '../services/services';
import { connect } from 'react-redux'
import { REGISTER, REGISTER_FAILED } from '../redux/store'
import { bindActionCreators } from 'redux';

class Register extends Component {
    static getInitialProps ({}) {
    }

    constructor (props) {
        super(props)

        this.state = { email: '', password: '', confirm: '', error: '' }
        this.confirmChange = this.confirmChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    static getInitialProps ({ reduxStore, req }) {
        const isServer = !!req
        reduxStore.dispatch(REGISTER(isServer))
    
        return {}
    }

    confirmChange (event) {
        this.setState({ error: "" })
        this.setState({ confirm: event.target.value })
    }

    async handleSubmit (event) {
        event.preventDefault();

        const details = {
            email: this.state.email,
            password: this.state.password
        };
        const { REGISTER, REGISTER_FAILED } = this.props
        if (this.state.password != this.state.confirm) {
            this.setState({ error: "Your repeat password is not matched" });
        }
        Services.UserRegister(details).then((res) => {
            var token = res.result.token;
            localStorage.setItem("token", token);
            REGISTER();
        }).catch( (err) =>  {
            var response = err.response.data;
            var message = response.message;
            REGISTER_FAILED();

            this.setState({ error: message });
        });
    }

    render () {
    return (
        <Layout>
            <div className="container form-box">
                <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                        <form className="ibox-body main-form p-5" id="register-form" onSubmit={this.handleSubmit}>
                            <h4 className="form-title mb-4">Register</h4>
                            <label className="text-dark" htmlFor="email">Email</label>
                            <div className="form-group mb-4">
                                <input className="form-control" id="email" type="email" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} required />
                            </div>
                            <label htmlFor="password">Password</label>
                            <div className="form-group mb-4">
                                <input className="form-control" id="password" type="password" value={this.state.password} onChange={e => this.setState({ password: e.target.value })} required />
                            </div>
                            <label htmlFor="confirm">Repeat Password</label>
                            <div className="form-group mb-4">
                                <input className="form-control" id="confirm" type="password" required value={this.state.confirm} onChange={this.confirmChange} />
                            </div>
                            <div className="text-center mt-4 mb-4">
                                <button className="btn Rectangle-Copy-6 text-white btn-rounded btn-block">Register</button>
                            </div>
                            <p className="text-danger text-center">{this.state.error}</p>
                        </form>
                    </div>
                </div>
         </div>
         <style jsx>{`
            .Rectangle-Copy-6 {
                height: 50px;
                border-radius: 4px;
                background-color: #1be44f;
            }
            input {
                height: 50px;
            }
            .error {
                margin: 0.5rem 0 0;
                display: none;
                color: brown;
            }
         `}</style>
        </Layout>
    )}
}


function mapStateToProps (state) {
    const { token } = state
    return { token }
}
const mapDispatchToProps = dispatch =>
    bindActionCreators({ REGISTER, REGISTER_FAILED }, dispatch)
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Register)