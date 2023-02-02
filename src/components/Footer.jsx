import CopyButton from "./CopyButton"

function Footer() {

  const telefon = "+3816884564";
  const email = "zdravi.recepti@gmail.com";
    return (
      <div>
        <footer className="footer-container"> 
            <div className="footer-text" >
                © 2022 Copyright: ZDRAVI RECEPTI D.O.O.
            </div> 
            <div className="footer-text" >
                Email: {email}
            </div> 
            <div className="footer-text" >
                Kontakt telefon: {telefon}
            </div> 
        </footer> 
      </div>
    );
  }

  export default Footer;