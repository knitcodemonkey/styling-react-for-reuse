// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  ComponentPlayground,
  Deck,
  Heading,
  Image,
  Layout,
  Link,
  Fill,
  Fit,
  ListItem,
  List,
  Notes,
  Quote,
  Slide,
  Text
} from "spectacle";
import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/monokai.codemirror.css");


const images = {
  me: require("../assets/KnittingCodeMonkey.jpg"),
  github1: require("../assets/github1.png"),
  github2: require("../assets/github2.png"),
  github3: require("../assets/github3.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  mhpNuke: require("../assets/ManhattanHardcoreProject.png"),
  reactWeek: require("../assets/ReactWeek.png"),
  justAHeader: require("../assets/justAHeader.png"),
  importantRabbits: require("../assets/ImportantRabbits.png"),
};

preloader(images);

const themeColors = {
  primary: "radial-gradient(#F5F5F5, #CECECE)",
  secondary: "#191919",
  tertiary: "#03A9FC",
  quartenary: "#CECECE",
};


const theme = createTheme(
  themeColors,
  {
    primary: "Raleway",
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["fade"]} transitionDuration={500} theme={theme}>
        <Slide>
          <Layout style={{transform: 'scale(1.5)'}}>
            <Fill>
              <Image src={images.me} style={{width: '100%', borderRadius: '50%', }}/>
            </Fill>
            <Fill style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
              <Heading textFont="secondary" size={3}>Jen Luker</Heading>
              <Text style={{fontSize: '1.3rem'}}>Team Lead Software Engineer</Text>
              <Text style={{fontSize: '1.3rem'}}>with Deseret Digital Media</Text>
              <Link href="http://jenluker.com" >
                <Text textColor="tertiary" style={{fontSize: '1.3rem'}}>http://jenluker.com</Text>
              </Link>
              <Text style={{fontSize: '1.3rem'}}>Github: @knittingcodemonkey</Text>
              <Text style={{fontSize: '1.3rem'}}>Twitter: @knitcodemonkey</Text>
            </Fill>
          </Layout>
        </Slide>

        <Slide bgColor="primary">
          <Layout style={{transform: 'scale(1.5)'}}>
            <Fill>
              <Heading size={1} fit caps lineHeight={1} textColor="secondary">
                Styling React for Reuse
              </Heading>
              <Text margin="10px 0 0" textColor="tertiary" size={3} bold>
                an exploration in extensibility
              </Text>
            </Fill>
          </Layout>
        </Slide>

        <Slide textColor="primary" bgColor="secondary">
          <Layout style={{transform: 'scale(1.5)'}}>
            <Fill>
              <Text margin="10px 0 0" textColor="quartenary" fit style={{fontSize: '3.8rem'}}>
                "We learn from failure much more than from success; we often discover what we will do by finding out what we will not do; and probably he who never made a mistake never made a discovery."</Text>
              <Text textColor="quartenary" margin="50px 0 0" style={{fontSize: '1.8rem'}}>~ Samuel Smiles</Text>
            </Fill>
          </Layout>
        </Slide>

        <Slide bgColor="secondary">
            <Layout style={{display: 'block', transform: 'scale(1.4)'}}>
              <Fill style={{width: '100%', height: '100%', position: 'relative', marginTop: -50}}>
                <Text textColor="quartenary" style={{fontSize: '1.8rem', position: 'absolute', top: 0, left: 0}}>Committed to Github<br/>December 2015</Text>
                <Image src={images.github1} style={{maxHeight: 580, width: 'auto', margin: '0 auto'}} />
                <Appear>
                  <Image src={images.github2} style={{position: "absolute", bottom: 18, left: 388, transform: 'scale(0.688)'}} />
                </Appear>
                <Appear>
                  <Image src={images.github3} style={{position: "absolute", bottom: -99, left: -224, transform: 'scale(0.688)'}} />
                </Appear>
                <Text margin="60px 0 0" style={{fontSize: '2rem'}} textColor="quartenary">
                  We just wanted a little consistency; not another framework.
                </Text>
              </Fill>
            </Layout>
        </Slide>

        <Slide bgImage={images.mhpNuke} />

        <Slide>
          <Layout style={{display: 'block', transform: 'scale(1.5)'}}>
            <Fill style={{width: '100%', height: '100%', position: 'relative'}}>
              <Image src={images.reactWeek} style={{maxWidth: 920, maxHeight: 620, width: 'auto', margin: '0 auto'}} />
            </Fill>
            <Fill>
              <Heading textColor="secondary" textFont="primary" size={4} style={{fontWeight: 'normal'}}>React Week</Heading>
            </Fill>
          </Layout>
        </Slide>

        <Slide>
          <Layout style={{display: 'block', transform: 'scale(1.5)'}}>
            <Fill style={{width: '100%', height: '100%', position: 'relative'}}>
              <Image src={images.justAHeader} style={{maxWidth: 920, maxHeight: 620, width: 'auto', margin: '0 auto'}} />
            </Fill>
            <Fill>
              <Heading textColor="secondary" textFont="primary" size={4} style={{fontWeight: 'normal'}}>"Just a header," we said</Heading>
            </Fill>
          </Layout>
        </Slide>

        <Slide>
          <Layout style={{display: 'block', transform: 'scale(1.5)'}}>
            <Fill style={{width: '100%', height: '100%', position: 'relative'}}>
              <Image src={images.importantRabbits} style={{maxWidth: 920, maxHeight: 620, width: 'auto', margin: '0 auto'}} />
            </Fill>
          </Layout>
        </Slide>

        <CodeSlide
          bgColor="secondary"
          style={{marginTop: -150}}
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/code/blah.example")}
          ranges={[
            { loc: [0, 270], title: "Walking through some code" },
            { loc: [0, 1], title: "The Beginning" },
            { loc: [1, 2] },
            { loc: [1, 2], note: "Heres a note!" },
            { loc: [2, 3] },
            { loc: [4, 7], image: images.me },
            { loc: [8, 10] },
            // ...
          ]}/>
      </Deck>
    );
  }
}
