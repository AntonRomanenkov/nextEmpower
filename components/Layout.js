import Head from 'next/head';
import Navbar from '../components/Navbar';

const Layout = (props) => (
    <div>
        <Head>
            <title>Empower Project</title>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"></link>
            <link rel="stylesheet" href="static/css/main.css"></link>
        </Head>
        <Navbar/>
        <main>
            {props.children}
        </main>
        <style jsx>{`
            main {
                position: absolute;
                width: 100%;
                background: linear-gradient(
                    rgba(0, 0, 0, 0.3), 
                    rgba(0, 0, 0, 0.3)
                ), URL('static/images/background.png') center;
                background-repeat: no-repeat;
                background-size: cover;
                background-color: #4a4a4a;
                height: 817px;
                opacity: 0.8;
            }
        `}</style>
    </div>
);

export default Layout;