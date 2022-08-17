const Navbar = () => (
    <div className="Rectangle">
        <nav className="navbar navbar-light navbar-expand-md justify-content-md-center justify-content-start">
            <button className="navbar-toggler ml-1" type="button" data-toggle="collapse" data-target="#collapsingNavbar2">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse justify-content-between text-left w-100" id="collapsingNavbar2">
                <ul className="navbar-nav w-40 Home-Blog-About-Empo">
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="/">Home</a> 
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="/blog">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="/about">About Empower</a> 
                    </li>
                </ul>
                <a href="/"><img src="static/images/logo.png" width="51" className="logoImage"></img></a>
                <ul className="nav navbar-nav w-40 flex-row justify-content-end pr-2 flex-nowrap Funded-cleanup-3-05">
                    <span className="text-style-1">Founded cleanup: <strong>3 054.3676kg</strong></span>
                    <li className="nav-item pl-2">
                        <a className="nav-link Login" href="/login">Login</a> 
                    </li>
                    <img src="static/images/usersymbol.png" className="pl-2 Stroke-4" width="24"></img>
                </ul>
            </div>
        </nav>
        <style jsx>{`
            .Rectangle {
                height: 120px;
                border: solid 1px #eeeeee;
                background-color: #ffffff;
            }
            .logoImage {
                margin-top: 27px;
            }
            .Funded-cleanup-3-05 {
                height: 16px;
                font-family: GTWalsheimPro;
                font-size: 13px;
                font-weight: normal;
                font-style: normal;
                font-stretch: normal;
                line-height: normal;
                letter-spacing: 0.3px;
                color: #333333;
                margin-top: 27px;
            }
            .Funded-cleanup-3-05 .text-style-1 {
                font-weight: 500;
            }
            .Login {
                height: 13px;
                font-family: GTWalsheimPro;
                font-size: 13px;
                font-weight: normal;
                font-style: normal;
                font-stretch: normal;
                line-height: normal;
                letter-spacing: 0.3px;
                text-align: right;
                color: #333333;
                margin-top: -9px;
            }
            .Stroke-4 {
                cursor: pointer;
                font-size: 18px;
                width: 24px;
            }
            .navbar-toggler {
                margin-top: 30px;
            }
        `}</style>
    </div>
);

export default Navbar;