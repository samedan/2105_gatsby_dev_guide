import React from "react";
import { Link } from "gatsby";

function Copyright() {
  return (
    <footer>
      {"Copyright © "}
      <Link color="inherit" to="/">
        CODE_SPACE
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </footer>
  );
}

export default function Footer(props) {
  return (
    <footer>
      <div className="p-5">
        <nav className="level">
          <div className="level-item has-text-centered">
            <Copyright />
          </div>
          <div className="level-item has-text-centered">
            <a
              rel="noreferrer"
              target="_blank"
              href={`https://www.feedspot.com/infiniterss.php?q=site:${process.env.BASE_URL}/rss.xml`}
            >
              <img
                alt="RSS"
                src="https://img.icons8.com/color/452/rss.png"
                width="25"
                height="25"
                border="0"
              />
              {/* <img src="./src/images/rss.png" /> */}
              RSS feed
            </a>
          </div>
          <div className="level-item has-text-centered">
            <a
              rel="noreferrer"
              target="_blank"
              href={`https://devblogpopescu.gatsbyjs.io/sitemap/sitemap-0.xml`}
            >
              Sitemap
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
}
