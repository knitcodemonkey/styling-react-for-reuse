// Import React
import React from "react";
import styles from '../styles';

// Import Spectacle Core tags
import {
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

// Require CSS
require("normalize.css");

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';
const images = {
  formidable: require('../../assets/aboutme/formidable.jpg'),
}
preloader(images);


export default class AboutMe extends React.Component {
  render() {
    return (
      <Slide bgcolor="#f5f5f5" bgImage={images.formidable} />
    );
  }
}
