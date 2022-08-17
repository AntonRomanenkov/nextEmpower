import { Component } from 'react';
import Layout from '../components/Layout';

class Index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center mt-215px">
                            <img src="static/images/logo-white.png" className="Fill-2"></img>
                            <span className="EWTS">EWTS</span>
                        </div>
                        <div className="col-12 text-center mt-45px">
                            <span className="Empower-waste-tracki">Empower waste tracking system<br/>pilot test registration</span>
                        </div>
                        <div className="col-12 text-center mt-45px">
                            <a href="/sortregister"><button className="btn Rectangle text-white font-weight-bold">Register</button></a>
                        </div>
                    </div>
                </div>
                <style jsx>{`
                    .Rectangle {
                        width: 300px;
                        height: 60px;
                        border-radius: 4px;
                        border: solid 1px #1be44f;
                        background-color: #1be44f;
                    }
                    .mt-45px {
                        margin-top: 45px;
                    }
                    .mt-215px {
                        margin-top: 215px;
                    }
                `}</style>
            </Layout>
        )
    }
}

export default Index