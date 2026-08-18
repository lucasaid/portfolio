import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import React from "react";

import MainLayout from "../layouts/main";

// Glyphs lifted from FontAwesome 4.7 (SIL OFL 1.1). y-flipped from the font's
// 1792-unit em box into SVG's y-down space via the transform below.
const LINKS = [
  {
    name: "github",
    href: "https://github.com/lucasaid/",
    w: 1536,
    d: "M768 1408q209 0 385.5 -103t279.5 -279.5t103 -385.5q0 -251 -146.5 -451.5t-378.5 -277.5q-27 -5 -40 7t-13 30q0 3 0.5 76.5t0.5 134.5q0 97 -52 142q57 6 102.5 18t94 39t81 66.5t53 105t20.5 150.5q0 119 -79 206q37 91 -8 204q-28 9 -81 -11t-92 -44l-38 -24q-93 26 -192 26t-192 -26q-16 11 -42.5 27t-83.5 38.5t-85 13.5q-45 -113 -8 -204q-79 -87 -79 -206q0 -85 20.5 -150t52.5 -105t80.5 -67t94 -39t102.5 -18q-39 -36 -49 -103q-21 -10 -45 -15t-57 -5t-65.5 21.5t-55.5 62.5q-19 32 -48.5 52t-49.5 24l-20 3q-21 0 -29 -4.5t-5 -11.5t9 -14t13 -12l7 -5q22 -10 43.5 -38t31.5 -51l10 -23q13 -38 44 -61.5t67 -30t69.5 -7t55.5 3.5l23 4q0 -38 0.5 -88.5t0.5 -54.5q0 -18 -13 -30t-40 -7q-232 77 -378.5 277.5t-146.5 451.5q0 209 103 385.5t279.5 279.5t385.5 103zM291 305q3 7 -7 12q-10 3 -13 -2q-3 -7 7 -12q9 -6 13 2zM322 271q7 5 -2 16q-10 9 -16 3q-7 -5 2 -16q10 -10 16 -3zM352 226q9 7 0 19q-8 13 -17 6q-9 -5 0 -18t17 -7zM394 184q8 8 -4 19q-12 12 -20 3q-9 -8 4 -19q12 -12 20 -3zM451 159q3 11 -13 16q-15 4 -19 -7t13 -15q15 -6 19 6zM514 154q0 13 -17 11q-16 0 -16 -11q0 -13 17 -11q16 0 16 11zM572 164q-2 11 -18 9q-16 -3 -14 -15t18 -8t14 14z",
  },
  {
    name: "codepen",
    href: "https://codepen.io/chriscreates/",
    w: 1792,
    d: "M216 367l603 -402v359l-334 223zM154 511l193 129l-193 129v-258zM973 -35l603 402l-269 180l-334 -223v-359zM896 458l272 182l-272 182l-272 -182zM485 733l334 223v359l-603 -402zM1445 640l193 -129v258zM1307 733l269 180l-603 402v-359zM1792 913v-546q0 -41 -34 -64l-819 -546q-21 -13 -43 -13t-43 13l-819 546q-34 23 -34 64v546q0 41 34 64l819 546q21 13 43 13t43 -13l819 -546q34 -23 34 -64z",
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/chris-lucas-83619286/",
    w: 1536,
    d: "M349 911v-991h-330v991h330zM370 1217q1 -73 -50.5 -122t-135.5 -49h-2q-82 0 -132 49t-50 122q0 74 51.5 122.5t134.5 48.5t133 -48.5t51 -122.5zM1536 488v-568h-329v530q0 105 -40.5 164.5t-126.5 59.5q-63 0 -105.5 -34.5t-63.5 -85.5q-11 -30 -11 -81v-553h-329q2 399 2 647t-1 296l-1 48h329v-144h-2q20 32 41 56t56.5 52t87 43.5t114.5 15.5q171 0 275 -113.5t104 -332.5z",
  },
  {
    name: "instagram",
    href: "https://www.instagram.com/chriscre8s/",
    w: 1536,
    d: "M1024 640q0 106 -75 181t-181 75t-181 -75t-75 -181t75 -181t181 -75t181 75t75 181zM1162 640q0 -164 -115 -279t-279 -115t-279 115t-115 279t115 279t279 115t279 -115t115 -279zM1270 1050q0 -38 -27 -65t-65 -27t-65 27t-27 65t27 65t65 27t65 -27t27 -65zM768 1270q-7 0 -76.5 0.5t-105.5 0t-96.5 -3t-103 -10t-71.5 -18.5q-50 -20 -88 -58t-58 -88q-11 -29 -18.5 -71.5t-10 -103t-3 -96.5t0 -105.5t0.5 -76.5t-0.5 -76.5t0 -105.5t3 -96.5t10 -103t18.5 -71.5q20 -50 58 -88t88 -58q29 -11 71.5 -18.5t103 -10t96.5 -3t105.5 0t76.5 0.5t76.5 -0.5t105.5 0t96.5 3t103 10t71.5 18.5q50 20 88 58t58 88q11 29 18.5 71.5t10 103t3 96.5t0 105.5t-0.5 76.5t0.5 76.5t0 105.5t-3 96.5t-10 103t-18.5 71.5q-20 50 -58 88t-88 58q-29 11 -71.5 18.5t-103 10t-96.5 3t-105.5 0t-76.5 -0.5zM1536 640q0 -229 -5 -317q-10 -208 -124 -322t-322 -124q-88 -5 -317 -5t-317 5q-208 10 -322 124t-124 322q-5 88 -5 317t5 317q10 208 124 322t322 124q88 5 317 5t317 -5q208 -10 322 -124t124 -322q5 -88 5 -317z",
  },
];

interface Props {
  data: {
    file: {
      childImageSharp: {
        fluid: any;
      };
    };
  };
}
const IndexPage = (props: Props) => {
  return (
    <MainLayout>
      <div className="container">
        <header>
          <h1>CHRIS LUCAS</h1>
          <div className="profile">
            <Img
              className="profile__image"
              alt="Chris Lucas"
              fluid={props.data.file.childImageSharp.fluid}
            />
          </div>
        </header>
        <section className="description">
          <h2>Lead Front End Developer</h2>
          <br />
          Currently @ Animo Studios
          <br />
          <br />
          Coder
          <br />
          Tinkerer
          <br />
          Dad
          <br />
          <br />
          <em>Melbourne, Australia</em>
          <br />
          <br />
          What&rsquo;s happening <Link to='/now'>/now</Link>?
        </section>
        <section className="links">
          {LINKS.map(({ name, href, w, d }) => (
            <a
              key={name}
              className="link"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="link_text">{name}</span>
              <span className="icon" aria-hidden="true">
                <svg
                  viewBox={`0 0 ${w} 1792`}
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  focusable="false"
                >
                  <path transform="translate(0 1536) scale(1 -1)" d={d} />
                </svg>
              </span>
            </a>
          ))}
        </section>
        <section className="terminal">
          <Link to='/terminal' aria-label="Open terminal"><pre>
            <code>
            {`  .---------.
  |.-------.|
  ||>run#  ||
  ||       ||
  |"-------'|
.-^---------^-.
| ---~        |
"-------------'`}
            </code>
          </pre>
          </Link>
        </section>
      </div>
    </MainLayout>
  );
}

export default IndexPage;
export const query = graphql`
  query {
    file(relativePath: { eq: "profile_cyber.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;
