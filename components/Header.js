// Header component for every page

import Link from "next/link";

// Import image from bootstrap
import Image from "react-bootstrap/Image";

// Styling for logo
const logoStyle = {
  marginTop: 0,
  marginLeft: 15,
  marginRight: 15,
  marginBottom: 15,
  width: 100,
};

// Styling for links
const linkStyle = {
  marginRight: "2rem",
  marginLeft: "auto",
  fontSize: "1.2rem",
  fontWeight: "bold",
};

const Header = () => (
  <div className="logoAndHeading">
    <Image
      src="/static/images/emoji2.jpg"
      alt="Smiley emoji logo"
      style={logoStyle}
    />
    <h1>A day without laughter is a Day wasted.</h1>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    {/* Styling for header */}
    <style jsx>{`
      a {
        margin-right: 1rem;
      }

      .logoAndHeading {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0.5rem;
        border-bottom: 1px solid #f0e68c;
        background-color: #f0e68c;
      }

      h1 {
        display: inline;
        margin-left: 1rem;
        color: #5e615e;
      }
    `}</style>
  </div>
);

// Export header to be used by other files
export default Header;
