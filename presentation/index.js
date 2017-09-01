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
  beKind: require("../assets/beKind.png"),
  livingStyleGuide: require("../assets/LivingStyleGuide.png"),
  iconFont: require("../assets/IconFont.png"),
};

preloader(images);

const themeColors = {
  primary: "radial-gradient(#FAFAFA, #CECECE)",
  secondary: "#191919",
  tertiary: "#981804",
  quartenary: "#CECECE",
};

const theme = createTheme(
  themeColors,
  {
    primary: "Raleway",
  }
);

const styles = {
  li: {
    margin: '70px 40px 0px 40px',
    lineHeight: '2em'
  },
  liLargeText: {
    fontSize: '1.5em',
    fontWeight: 'bold'
  },
  flexCol: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["fade"]} transitionDuration={500} theme={theme} contentWidth="1768" contentHeight="932">
        <Slide notes="Software engineer for over 10 years">
          <Layout style={{padding: '0 200px'}}>
            <Fill>
              <Image margin="0" src={images.me} style={{maxWidth: '100%', borderRadius: '50%', boxShadow: "0px 10px 20px #CECECE"}}/>
            </Fill>
            <Fill style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
              <Heading size={1} textFont="secondary">Jen Luker</Heading>
              <hr textFont="secondary" />
              <Text style={{fontSize: '2rem', lineHeight: '2.4rem'}}>Team Lead Software Engineer</Text>
              <Text style={{fontSize: '2rem', lineHeight: '2.4rem'}}>with Deseret Digital Media</Text>
              <hr textFont="secondary" />
              <Link href="http://jenluker.com" >
                <Text textColor="tertiary" style={{fontSize: '2rem', lineHeight: '2.4rem'}}>http://jenluker.com</Text>
              </Link>
              <Text style={{fontSize: '2rem', lineHeight: '2.4rem'}}>Github: @knittingcodemonkey</Text>
              <Text style={{fontSize: '2rem', lineHeight: '2.4rem'}}>Twitter: @knitcodemonkey</Text>
            </Fill>
          </Layout>
        </Slide>

        <Slide bgColor="primary" style={styles.flexCol}>
          <Layout>
            <Fill>
              <Heading size={2} caps lineHeight={1} textColor="secondary">
                Styling React for Reuse
              </Heading>
              <Heading margin="10px 0 0" textColor="tertiary" size={3} bold>
                an exploration in extensibility
              </Heading>
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Text>Follow along with the slides:</Text>
              <Link src="http://styling-react-for-reuse.surge.sh">http://styling-react-for-reuse.surge.sh</Link>
            </Fill>
          </Layout>
        </Slide>

        <Slide notes="Say Quote: 'We learn from failure much more than from success; we often discover what we will do by finding out what we will not do; and probably he who never made a mistake never made a discovery.'

My department decided it was time to break up our one, very large classified product into several, smaller, vertical-based products such as cars, homes, jobs, services, and general classifieds. We realized that in order to maintain branding across all these new products, we would need to figure out a way of sharing UI elements. We started researching methods and technologies for creating independent components we could share.">
          <Layout style={{margin: "0 90px"}} >
            <Fill>
              <Text fit style={{fontSize: '4.6rem'}}>
                "We learn from failure much more than from success; we often discover what we will do by finding out what we will not do; and probably he who never made a mistake never made a discovery."</Text>
              <Text style={{fontSize: '3rem', marginTop: 100}}>~ Samuel Smiles</Text>
            </Fill>
          </Layout>
        </Slide>

        <Slide
          bgColor="secondary"
          notes="This diagram is a visual representation of our codebase committed to Git around that time. It doesn’t include any additional code brought in through Composer. <br /><br />
*click*<br /><br />

Each dot is an individual file, and the little, tiny structure inside the yellow hexagram is our API. When I say we just wanted a little consistency; not another framework, This is why:<br /><br />

*click*<br /><br />

We were a PHP shop with Zend Framework, jQuery-ui development bundle, and an aging, custom-built, CMS. We had a whole lot of infrastructure to support an equally large amount of information; all of which was being funneled through a very small api. We figured good ole’ javascript and php would be good enough for us. <br /><br />

We chose a designer, project manager, and a few developers, and started our pilot Front End Development Team with the sole purpose of building reusable components.">
            <Layout style={{display: 'block', transform: 'scale(1.2)'}}>
              <Fill style={{width: '100%', height: '100%', position: 'relative', marginTop: -50}}>
                <Text textColor="quartenary" style={{fontSize: '1.8rem', position: 'absolute', top: 60, left: 230}}>Committed to Github<br/>December 2015</Text>
                <Image src={images.github1} style={{maxHeight: 580, width: 'auto', margin: '0.5em 0 0 -200px' }} />
                <Appear>
                  <Image src={images.github2} style={{position: "absolute", bottom: -73, right: 68, transform: 'scale(0.688)'}} />
                </Appear>
                <Appear>
                  <Image src={images.github3} style={{position: "absolute", bottom: -191, right: 174, transform: 'scale(0.688)'}} />
                </Appear>
              </Fill>
              <Text margin="60px 0 0" style={{fontSize: '2rem'}} textColor="quartenary">
                We just wanted a little consistency; not another framework.
              </Text>
            </Layout>
        </Slide>

        <Slide bgImage={images.mhpNuke} notes="We named ourselves the MANHATTAN HARDCORE PROJECT (because we were going to make Atomic Components, hehe). Clearly we thought highly of ourselves. We had big ideas, and were going to make a big impact on the way we reused code. As soon as we started coding, the lessons started piling in. Clearly, failure was going to be our path to success."/>

        <Slide style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', height: '100%'}}
          notes="We built a shiny new living style guide that dynamically updates itself based on changes made to the git repo, and an SVG icon font. All the components were responsive, and the response was TERRIBLE.<br />
Lessons we learned:
<ul><li>Forcing all verticals to change their template to match a structure to support our fancy new modal, and menu.</li><li>Immediately changing that structure for other components.</li><li>Promising that our components would be drop-in replacements even if we had hard coded uniform data for the demo pages. (John and Jane Smith are great test names, right?)</li><li>Touting the beauty of changing the base component to change it everywhere. Unfortunately we were right on that one, and we suffered.</li></ul>">

          <Layout style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <Fill>
              <Image src={images.livingStyleGuide} />
            </Fill>
            <Fill>
              <Image src={images.iconFont} />
            </Fill>
          </Layout>

          <Layout style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <Fill>
              <Heading size={4} style={{textAlign: 'center'}}>We are AWESOME!</Heading>
              <ul style={{textAlign: 'left'}}>
                <li>Living Style Guide</li>
                <li>Half a dozen reusable components, including modal and menu</li>
              </ul>
            </Fill>
            <Fill>
              <Heading size={4} style={{textAlign: 'center'}}>So, that was bad</Heading>
              <ul style={{textAlign: 'left'}}>
                <li>Forcing all verticals to change their template to match a structure to support our fancy new modal, and menu.</li>
                <li>Immediately changing that structure for other components.</li>
                <li>Promising that our components would be drop-in replacements even if we had hard coded uniform data for the demo pages. (John and Jane Smith are great test names, right?)</li>
                <li>Touting the beauty of changing the base component to change it everywhere. Unfortunately we were right on that one.</li>
                <li>SVG Icon Font</li>
              </ul>
            </Fill>
          </Layout>
        </Slide>


        <Slide>
          <Layout style={{display: 'block'}}>
            <Fill style={{width: '100%', height: '100%', position: 'relative'}}>
              <Image src={images.reactWeek} style={{maxWidth: 1768, maxHeight: 780, width: 'auto', margin: '0 auto'}} />
            </Fill>
            <Fill>
              <Heading textColor="secondary" textFont="primary" size={4} style={{fontWeight: 'normal'}}>React Week</Heading>
            </Fill>
          </Layout>
        </Slide>

        <Slide bgColor="primary" notes="It turns out our header included dropdown menus, responsive hamburger menus, modals, dynamic login detection, dynamic menu resizing on scroll, weather modules with geolocation, icon fonts, and a search bar. It was huge, required jQuery, and came with a whole host of webpack/bower/gulp build process complexity that none of us knew anything about. As we coded, our designers, and the technology, continued to innovate. We were learning (and refactoring) a lot, but the old Manhattan Hardcore Components were still in circulation, and as we completed the new header components, those were being incorporated into various websites, as well.">
          <Layout>
            <Fill>
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/code/header.example")}
            margin="0px auto"
            textSize="0.6em"
          />
            </Fill>
            <Fill>
              <CodePane
                lang="js"
                source={require("raw-loader!../assets/code/header2.example")}
                margin="0px auto"
                textSize="0.6em"
              />
            </Fill>
          </Layout>
          <Heading margin="60px auto 0px auto" textColor="secondary" textFont="primary" size={4} style={{fontWeight: 'normal'}}>"Just the header," we said</Heading>
        </Slide>

        <Slide>
          <Layout style={{display: 'block'}}>
            <Fill style={{width: '100%', height: '100%', position: 'relative'}}>
              <Image src={images.importantRabbits} style={{maxWidth: 1768, maxHeight: 852, width: 'auto', margin: '0 auto'}} />
            </Fill>
          </Layout>
        </Slide>

        <Slide>
          <Text>the</Text>
          <Heading size={1} textColor="tertiary" caps>one true answer</Heading>
          <Text>to all our problems is...</Text>
        </Slide>
        <Slide>
          <Layout style={{display: 'block'}}>
            <Fill style={{width: '100%', height: '100%', position: 'relative'}}>
              <Image src={images.beKind} style={{maxWidth: 1768, maxHeight: 852, width: 'auto', margin: '0 auto'}} />
            </Fill>
          </Layout>
        </Slide>

        <Slide textColor="secondary">
          <Layout>
            <Fill style={{textAlign: 'left'}}>
              <Heading fit caps style={{textAlign: 'center'}}>What do I consider When choosing a component?</Heading>
              <hr />
              <ul>
                <li style={styles.li}>
                  <Text style={styles.liLargeText}>Use traditional DOM elements as they were intended</Text>
                  <Text style={{fontSize: '1.0em'}}>If you need a button, use a button. Accessibility users will love you for it.</Text>
                </li>
                <li style={styles.li}>
                  <Text style={styles.liLargeText}>Override styles within third-party component with your own styles</Text>
                  <Text style={{fontSize: '1.0em'}}>Transitions, and animations are easy to embed, but difficult to overwrite.</Text>
                </li>
                <li style={styles.li}>
                  <Text style={styles.liLargeText}>Rearrange component’s visual layout</Text>
                  <Text style={{fontSize: '1.0em'}}>What if the design places the buttons lined up along the right side instead of the bottom?</Text>
                </li>
                <li style={styles.li}>
                  <Text style={styles.liLargeText}>Use external assets for icons, logos, and images</Text>
                  <Text style={{fontSize: '1.0em'}}>This is not just for design, but also for globalization. Imagery differs between cultures.</Text>
                </li>
              </ul>
            </Fill>
          </Layout>
        </Slide>

        <CodeSlide
          bgColor="secondary"
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
