// Import React
import React from "react";

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

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";
import styles from "../styles";
const images = {
  wheelchair: require("../../assets/backgrounds/access-wheelchair.jpg"),
  JenniferVan: require("../../assets/JenniferVan.jpg")
};
preloader(images);

export default class Why extends React.Component {
  render() {
    return (
      <Slide
        bgImage={images.wheelchair}
        bgDarken={0.85}
        textColor="primary"
      >
        <Notes>
          <ul>
            <li>
              Make sure to bring up the a11y project checklist
              and show how it'd make things easier.
            </li>
            <li>
              talk about deque labs axe chrome and firefox
              plugins for testing existing sites.
            </li>
            <li>
              explain deque labs has a bunch of other cool
              resources, including ios and android
              implementations on their github page
            </li>
          </ul>
        </Notes>
        <Heading
          fit
          caps
          textColor="primary"
          style={{ textAlign: "center" }}
        >
          Accessibility Tools, Testing, and Integrations
        </Heading>
        <hr />
        <Layout>
          <Fill style={{ textAlign: "left", marginRight: 10, marginLeft: 0 }}>
            <ul style={{ listStyleType: "none", marginLeft: 0 }}>
              <li style={[styles.li, { marginTop: 0 }]}>
                <Text
                  textColor="primary"
                  style={styles.liLargeText}
                >
                  Best Practices & Resources
                </Text>
                <ul>
                  <li style={styles.accessibilityLinks}>
                    <Link
                      style={{ textDecoration: "underline" }}
                      textColor="dktertiary"
                      href="http://a11yproject.com/checklist.html"
                    >
                      A11y Project: Checklist
                    </Link>
                  </li>
                  <li style={styles.accessibilityLinks}>
                    <Link
                      style={{ textDecoration: "underline" }}
                      textColor="dktertiary"
                      href="http://romeo.elsevier.com/accessibility_checklist/"
                    >
                      Elsevier: Web Content
                      Accessibility Guidelines 2.0
                    </Link>
                  </li>

                  <li style={styles.accessibilityLinks}>
                    <Link
                      style={{ textDecoration: "underline" }}
                      textColor="dktertiary"
                      href="https://www.webaccessibility.com/best_practices.php"
                    >
                      WEB Accessibility: Best
                      Practices
                    </Link>
                  </li>
                  <li style={styles.accessibilityLinks}>
                    <Link
                      style={{ textDecoration: "underline" }}
                      textColor="dktertiary"
                      href="https://www.usability.gov/what-and-why/accessibility.html"
                    >
                      Usability.gov: Accessibility
                      Basics
                    </Link>
                  </li>
                  <li style={styles.accessibilityLinks}>
                    <Link
                      style={{ textDecoration: "underline" }}
                      textColor="dktertiary"
                      href="https://www.microsoft.com/en-us/design/inclusive"
                    >
                      Inclusive Design at Microsoft
                      Toolkit: Downloadable PDFs,
                      Videos
                    </Link>
                  </li>

                  <li style={styles.accessibilityLinks}>
                    <Link
                      style={{ textDecoration: "underline" }}
                      textColor="dktertiary"
                      href="https://webaim.org/resources/contrastchecker/"
                    >
                      WebAIM Color Contrast Checker
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </Fill>
          <Fill style={{ textAlign: "left", marginLeft: 0 }}>
            <ul style={{ listStyleType: "none" }}>
              <li style={[styles.li, { marginTop: 0 }]}>
                <Text
                  textColor="primary"
                  style={styles.liLargeText}
                >
                  Platform & Automated Testing
                </Text>
                <ul>
                  <li style={styles.accessibilityLinks}>
                    <Link
                      style={{ textDecoration: "underline" }}
                      textColor="dktertiary"
                      href="https://github.com/dequelabs"
                    >
                      Deque Labs Github:
                    </Link>
                  </li>
                  <li style={styles.accessibilityLinks}>
                    <Link
                      style={{ textDecoration: "underline" }}
                      textColor="dktertiary"
                      href="https://www.deque.com/products/axe/"
                    >
                      Deque Labs aXe Chrome and
                      Firefox extensions
                    </Link>
                  </li>
                  <li style={styles.accessibilityLinks}>
                    <Link
                      style={{ textDecoration: "underline" }}
                      textColor="dktertiary"
                      href="https://www.boia.org/products/a11y-tool/"
                    >
                      Bureau of Internet
                      Accessibility: A11y Testing
                      Platform
                    </Link>
                  </li>
                </ul>
              </li>
              <li style={[styles.li, { marginTop: 30 }]}>
                <Text
                  textColor="primary"
                  style={styles.liLargeText}
                >
                  Capability Loss Simulation Tools
                </Text>
                <ul>
                  <li style={styles.accessibilityLinks}>
                    <Link
                      style={{ textDecoration: "underline" }}
                      textColor="dktertiary"
                      href="http://www.inclusivedesigntoolkit.com/"
                    >
                      University of Cambridge:
                      Inclusive Design Toolkit
                    </Link>
                  </li>
                  <li style={styles.accessibilityLinks}>
                    <Link
                      style={{ textDecoration: "underline" }}
                      textColor="dktertiary"
                      href="https://www.toptal.com/designers/colorfilter"
                    >
                      Toptal: Colorblind Web Page
                      Filter
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </Fill>
        </Layout>
      </Slide>
    );
  }
}
