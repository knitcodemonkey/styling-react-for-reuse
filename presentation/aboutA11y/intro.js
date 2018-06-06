// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Heading,
  Slide,
  Notes,
  Link,
  Image
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";
import styles from "../styles";
const images = {
  accessibilityGif: require("../../assets/AccessibilityGif.gif")
};
preloader(images);

// Require CSS
require("normalize.css");

export default class A11yIntro extends React.Component {
  render() {
    return (
      <Slide
        bgColor="#000000"
        style={{ width: "100%", position: "relative" }}
      >
      <Notes>
        How many of you have had one of these experiences?
        <ul>
          <li>
            repetetive stress injuries: tennis elbow or
            carpel tunnel
          </li>
          <li>had your eyes dilated</li>
          <li>tried to type while holding a baby</li>
          <li>watched a video, in a loud room</li>
          <li>
            watched a film in a language you didn't know
          </li>
          <li>
            mouse batteries died, and too lazy to use laptop
            mouse?
          </li>
          <li>
            had a computer read game text to a child too
            young, or inexperienced to read
          </li>
        </ul>
        How many of you interacted with your phone, watched tv,
        or otherwise interacted with technology during those
        experiences?
      </Notes>
      <Heading
        textColor="quartenary"
        style={{
          marginBottom: -100,
          zIndex: 10,
          position: "relative"
        }}
      >
        Accessibility
      </Heading>
      <Image
        src={images.accessibilityGif}
        style={{
          width: "100%",
          marginBottom: -90,
          zIndex: 0,
          position: "relative"
        }}
      />
      <Link
        textColor="dktertiary"
        style={[{ zIndex: 10, position: "relative" }, styles.smallText]}
        href="https://www.microsoft.com/en-us/design/inclusive"
      >
        Image Credit: Inclusive Design at Microsoft
      </Link>
    </Slide>
    );
  }
}
