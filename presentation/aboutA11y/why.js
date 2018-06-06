// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Quote,
  Slide,
  Notes,
  Layout,
  Fill,
  Image
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";
import styles from "../styles";
const images = {
  wheelchair: require("../../assets/backgrounds/access-wheelchair.jpg"),
  JenniferVan: require("../../assets/JenniferVan.jpg")
};
preloader(images);

// Require CSS
require("normalize.css");
const meStyles = {
  ...styles
};

export default class Why extends React.Component {
  render() {
    return (
      <Slide bgImage={images.wheelchair} bgDarken={0.7}>
      <Notes>
        <p>
          Imagine for a moment that subtitles, zooming, large
          buttons, color contrast and keyboard shortcuts
          didn't exist. Could you have interacted with that
          technology?
        </p>
        <p>
          When we think of Accessibility features, we focus
          too much on those whose experiences are permanent.
          Though it is important to remember them, they aren't
          the only ones who need those features.
        </p>
      </Notes>
      <Layout>
        <Fill
          style={{
            flex: "1 0 35%",
            display: "flex",
            alignItems: "center"
          }}
        >
          <Image
            src={images.JenniferVan}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "50%",
              marginTop: -70,
              marginRight: 30,
              boxShadow: "0px 0px 20px #444"
            }}
          />
        </Fill>
        <Fill
          style={{
            flex: "1 1 55%",
            display: "flex",
            alignItems: "center"
          }}
        >
          <BlockQuote style={meStyles.BlockQuote}>
            <Quote style={[meStyles.Quote, styles.standardText]}>
              I would say like 90% of your day is dictated
              by technology, and if you, as a person, are
              not included in that technology,
              what's the point if the app is fast?
            </Quote>
            <Cite textColor="dktertiary">
              Jennifer Van, React Rally 2017
            </Cite>
          </BlockQuote>
        </Fill>
      </Layout>
    </Slide>
    );
  }
}
