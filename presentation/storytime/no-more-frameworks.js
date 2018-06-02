// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Slide,
  Text,
  Notes,
  Layout,
  Fill,
  Image,
  Appear
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";
const images = {
  github1: require("../../assets/github1.png"),
  github2: require("../../assets/github2.png"),
  github3: require("../../assets/github3.png")
};
preloader(images);

// Require CSS
require("normalize.css");

const styles = {
  fill: {
    width: "100%",
    height: "790px",
    position: "relative",
    marginTop: 0
  },
  text: {
    fontSize: "2.6rem",
    position: "absolute",
    top: 0,
    left: 80,
    zIndex: 4
  },
  image1: {
    height: "auto",
    width: "100%",
    position: "absolute",
    top: 100,
    left: 0,
    margin: 0
  },
  image2: {
    height: "auto",
    width: "100%",
    position: "absolute",
    top: 100,
    left: 0,
    margin: 0
  },
  image3: {
    height: "auto",
    width: "100%",
    position: "absolute",
    top: 100,
    left: 0,
    margin: 0
  },
  z1: {
    zIndex: 1
  },
  z2: {
    zIndex: 2
  },
  z3: {
    zIndex: 3
  }
};

export default class Why extends React.Component {
  render() {
    return (
      <Slide bgColor="secondary">
					<Notes>
						<ul>
							<li>
								Company decided to break up one mega-product
								into smaller, componentized products.
							</li>
							<li>
								This diagram is a visual representation of our
								codebase committed to Git around that time.
							</li>
							<li>
								Each dot is an individual file, and the little,
								tiny structure inside the yellow hexagram is our
								API.When I say we just wanted a little
								consistency; not another framework, This is why:
							</li>
							<li>
								We were a PHP shop with Zend Framework, jQuery -
								ui development bundle, and an aging, custom -
								built, CMS.We had a whole lot of infrastructure
								to support an equally large amount of
								information; all of which was being funneled
								through a very small api.We figured good ole’
								javascript and php would be good enough for us.
							</li>
						</ul>
					</Notes>
					<Layout style={{ display: "block" }}>
						<Fill style={styles.fill}>
							<Text textColor="quartenary" style={styles.text}>
								Committed to Github<br />
								December 2015
							</Text>
							<Image src={images.github1} style={[styles.image, styles.z1]}/>
							<Appear>
								<Image src={images.github2} style={[styles.image, styles.z2]}/>
							</Appear>
							<Appear>
								<Image src={images.github3} style={[styles.image, styles.z3]}/>
							</Appear>
						</Fill>
					</Layout>
					<Text style={{ fontSize: "2.6rem", margin: "-30px 0 30px 0" }} textColor="quartenary">
						We just wanted a little consistency; not another
						framework.
					</Text>
				</Slide>
    );
  }
}
