// Post page to display jokes and their punchlines

// Import components
import Layout from "../components/Layout.js";
import fetch from "isomorphic-unfetch";
import Image from "react-bootstrap/Image";

// Styling for image
const imgStyle = {
  width: "40rem",
  border: "1px #f0e68c solid",
};

// function to display page
const Post = (props) => (
  <Layout>
    <div className="both">
      <div className="left">
        {/* Get joke and punchline from props */}
        <div className="setup">{props.joke.setup}</div>
        <div className="delivery">{props.joke.delivery}</div>
      </div>
      <div className="right">
        {" "}
        <Image
          src="/static/images/laughingman.jpg"
          alt="Man laughing"
          style={imgStyle}
        />
      </div>
    </div>
    {/* Styling for post page */}
    <style jsx>{`
      .both {
        display: flex;
        flex-direction: row;
        padding-top: 1rem;
        border-left: 1px solid #f0e68c;
        border-right: 1px solid #f0e68c;
      }
      .left {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
        padding: 1rem;
        margin-right: 0.5rem;
      }
      .right {
        flex: 1;
      }
      .setup {
        font-size: 1.5rem;
      }
      .delivery {
        font-weight: bold;
        margin-top: 2rem;
        font-size: 1.5rem;
        color: blue;
      }
    `}</style>
  </Layout>
);

/* Fetch specific joke from jokes api using the id specified when user clicked link on home page */
Post.getInitialProps = async function (context) {
  // Get id of post passed through from server.js
  const { id } = context.query;
  const res = await fetch(`https://v2.jokeapi.dev/joke/Any?idRange=${id}`);
  const joke = await res.json();

  // Pass joke on to main function as props
  return { joke };
};

// Export post component to be used by other files
export default Post;
