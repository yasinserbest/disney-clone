import "./Login.css";

const Login = (props) => {
  return (
    <div className="container">
      <div className="content">
        <div className="cta">
          <img className="ctaLogoOne" src="/images/cta-logo-one.svg" alt="" />
          <a className="signUp">GET ALL THERE</a>
          <p className="description">
            12 months for the price of 8* 279,90 TL Start streaming 14 June.
          </p>
          <img className="ctaLogoTwo" src="/images/cta-logo-two.png" alt="" />
          <div className="BgImage" />
        </div>
      </div>
    </div>
  );
};
export default Login;
