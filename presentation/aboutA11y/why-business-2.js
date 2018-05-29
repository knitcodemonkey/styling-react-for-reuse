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
import preloader from 'spectacle/lib/utils/preloader';
import styles from '../styles';
const images = {
  wheelchair: require('../../assets/backgrounds/access-wheelchair.jpg'),
  JenniferVan: require('../../assets/JenniferVan.jpg'),
}
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

        <Text textColor="primary" style={[styles.largeText, styles.littleSpacePlease]}>
          At any given time, 20% of the population qualifies as permanently, temporarily, or circumstantially disabled
        </Text>
        <Text textColor="dktertiary" style={[styles.standardText, styles.littleSpacePlease]}>
          20% more engagement ≈ 20% more money
        </Text>
      </Slide>
    );
  }
}
