import "./FooterStyle.css";

const Footer = () => {
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Trippy</h1>
                    <p>Choose Your Favorite Destination.</p>
                </div>
                <div>
                    <a href="/">
                        <i className="fa-brands fa-facebook-square">fb</i>
                    </a>

                    <a href="/">
                        <i className="fa-brands fa-facebook-square">ig</i>
                    </a>

                    <a href="/">
                        <i className="fa-brands fa-facebook-square">be</i>
                    </a>

                    <a href="/">
                        <i className="fa-brands fa-facebook-square">tw</i>
                    </a>
                </div>
            </div>

            <div className="bottom">
                <div>
                    <h4>Project</h4>
                    <a href="/">Changelog</a>
                    <a href="/">Status</a>
                    <a href="/">Licences</a>
                    <a href="/">All Versions</a>
                </div>

                <div>
                    <h4>Community</h4>
                    <a href="/">Github</a>
                    <a href="/">Issues</a>
                    <a href="/">Project</a>
                    <a href="/">Twiter</a>
                </div>

                <div>
                    <h4>Help</h4>
                    <a href="/">Support</a>
                    <a href="/">Troubleshooting</a>
                    <a href="/">Contact</a>
                </div>

                <div>
                    <h4>Others</h4>
                    <a href="/">Terms of service</a>
                    <a href="/">Ptivacy Policy</a>
                    <a href="/">License</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;