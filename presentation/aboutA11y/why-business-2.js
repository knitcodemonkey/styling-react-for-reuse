// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Notes,
  Layout,
  Fill,
  Link,
  Image
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

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

export default class WhyBusiness extends React.Component {
  render() {
    return (
      <Slide bgImage={images.wheelchair} bgDarken={0.7}>
        <Notes>
          <p>
            So, what is disability?
          </p>
        </Notes>
        <Fill style={styles.littleSpacePlease}>
          <Text textColor="primary" style={[styles.largeText ]}>
            Nearly 1 in 5 people had a disability in the U.S. in 2012
          </Text>
        </Fill>
        <Text textColor="dktertiary" style={[styles.standardText, styles.littleSpacePlease]}>
          ~ 20% more engagement = ~ 20% more money
        </Text>
        <Link textColor="dktertiary" style={[styles.extraSmallText, { textDecoration: "underline" }, styles.littleSpacePlease ]} src="https://www.census.gov/newsroom/releases/archives/miscellaneous/cb12-134.html">United States Census Bureau Report CB12-134</Link>
      </Slide>
    );
  }
}
