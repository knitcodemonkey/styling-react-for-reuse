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
  waitWhat: require("../assets/waitWhat.png"),
  famous: require("../assets/famous.jpg"),
  accessibilityGif: require("../assets/AccessibilityGif.gif"),
  inclusiveDesignToolkit: require("../assets/InclusiveDesignToolkit.png"),
  globalization: require("../assets/Globalization.jpg"),
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
    margin: "70px 40px 0px 40px",
    lineHeight: "2em"
  },
  liLargeText: {
    fontSize: "1.5em",
    fontWeight: "bold",
  },
  flexCol: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
  spacePlease: {
    padding: 60
  },
  standardText: {
    fontSize: '2rem',
    lineHeight: '2.4rem'
  }
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["fade"]} transitionDuration={500} theme={theme} contentWidth="1768" contentHeight="932">

{/* Title Screen */}
        <Slide bgColor="primary" notes="As speakers, we do our best, but sometimes slides are just too difficult to read. You can follow along at styling-react-for-reuse.surge.sh">
          <Layout style={styles.flexCol}>
            <Fill style={styles.spacePlease}>
              <Heading size={2} caps lineHeight={1} textColor="secondary">
                Styling React for Reuse
              </Heading>
              <Heading margin="10px 0 0" textColor="tertiary" size={3} bold>
                a story about extensibility
              </Heading>
            </Fill>
            <Fill style={styles.spacePlease}>
              <Link
                style={styles.standardText}
                href="http://styling-react-for-reuse.surge.sh">
                Follow along with the slides: http://styling-react-for-reuse.surge.sh
              </Link>
            </Fill>
          </Layout>
        </Slide>

{/* Jen Luker Intro */}
        <Slide notes="Software engineer for over 10 years">
          <Layout style={{padding: '0 200px'}}>
            <Fill>
              <Image margin="0" src={images.me} style={{maxWidth: '100%', borderRadius: '50%', boxShadow: "0px 10px 20px #CECECE"}}/>
            </Fill>
            <Fill style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
              <Heading size={1} textFont="secondary">Jen Luker</Heading>
              <hr textFont="secondary" />
              <Text style={styles.standardText}>Team Lead Software Engineer</Text>
              <Text style={styles.standardText}>with Deseret Digital Media</Text>
              <hr textFont="secondary" />
              <Link textColor="tertiary" href="http://jenluker.com" >
                <Text textColor="tertiary" style={styles.standardText}>http://jenluker.com</Text>
              </Link>
              <Text style={styles.standardText}>Github: @knittingcodemonkey</Text>
              <Text style={styles.standardText}>Twitter: @knitcodemonkey</Text>
            </Fill>
          </Layout>
          <Layout style={styles.spacePlease}>
            <Fill>
              <Link
                textColor="tertiary"
                style={styles.standardText}
                href="http://styling-react-for-reuse.surge.sh">
                Follow along with the slides: http://styling-react-for-reuse.surge.sh
              </Link>
            </Fill>
          </Layout>
        </Slide>

{/* Learn from Failure */}
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

{/* Grouce Github Image */}
        <Slide
          bgColor="secondary"
          notes="This diagram is a visual representation of our codebase committed to Git around that time. It doesn’t include any additional code brought in through Composer. <br /><br />
*click*<br /><br />

Each dot is an individual file, and the little, tiny structure inside the yellow hexagram is our API. When I say we just wanted a little consistency; not another framework, This is why:<br /><br />

*click*<br /><br />

We were a PHP shop with Zend Framework, jQuery-ui development bundle, and an aging, custom-built, CMS. We had a whole lot of infrastructure to support an equally large amount of information; all of which was being funneled through a very small api. We figured good ole’ javascript and php would be good enough for us. <br /><br />

We chose a designer, project manager, and a few developers, and started our pilot Front End Development Team with the sole purpose of building reusable components."
        >
            <Layout style={{display: 'block'}}>
              <Fill style={{width: '100%', height: '790px', position: 'relative', marginTop: 0}}>
                <Text textColor="quartenary" style={{fontSize: '2.6rem', position: 'absolute', top: 0, left: 80, zIndex: 4}}>
                  Committed to Github<br/>
                  December 2015
                </Text>
                <Image src={images.github1} style={{height: 780, position: "absolute", top: -40, left: 0, margin: 0, zIndex: 1}} />
                <Appear>
                  <Image src={images.github2} style={{height: 780, position: "absolute", top: -40, left: 0, margin: 0, zIndex: 2}} />
                </Appear>
                <Appear>
                  <Image src={images.github3} style={{height: 780, position: "absolute", top: -40, left: 0, margin: 0, zIndex: 3}} />
                </Appear>
              </Fill>
              <Text style={{fontSize: '2.6rem', margin: '-30px 0 30px 0'}} textColor="quartenary">
                We just wanted a little consistency; not another framework.
              </Text>
            </Layout>
        </Slide>

        <Slide bgImage={images.mhpNuke} notes="We named ourselves the MANHATTAN HARDCORE PROJECT (because we were going to make Atomic Components, hehe). Clearly we thought highly of ourselves. We had big ideas, and were going to make a big impact on the way we reused code. As soon as we started coding, the lessons started piling in. Clearly, failure was going to be our path to success."/>

{/* The Good: Living style guide */}
        <Slide style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%'}}
          notes="We built a shiny new living style guide that dynamically updates itself based on changes made to the git repo, and an SVG icon font. All "
        >
          <Layout style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '100%', position: 'relative'}}>
            <Fill style={{flex: '1 0 45%', width: '40%'}}>
              <Image src={images.livingStyleGuide}  style={{textAlign: 'left', width: '100%', margin: '0px auto'}} />
            </Fill>
            <Fill style={{flex: '1 1 10%', width: '10%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}><Heading> = </Heading></Fill>
            <Fill style={{flex: '1 0 45%', width: '40%'}}>
              <Image src={images.famous}  style={{textAlign: 'left', width: '100%', margin: '0px auto'}} />
            </Fill>
          </Layout>
          <layout>
            <Fill>
              <Text style={styles.standardText}>We built half a dozen reusable components</Text>
            </Fill>
          </layout>
        </Slide>

{/* The Bad: Mistakes */}
        <Slide notes="Lessons we learned:
<ul><li>Forcing all verticals to change their template to match a structure to support our fancy new modal, and menu.</li><li>Immediately changing that structure for other components.</li><li>Promising that our components would be drop-in replacements even if we had hard coded uniform data for the demo pages. (John and Jane Smith are great test names, right?)</li><li>Touting the beauty of changing the base component to change it everywhere. Unfortunately we were right on that one, and we suffered.</li></ul>">
          <Layout style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <Fill style={{textAlign: 'left', width: '55%', flex: '1 1 55%', position: 'relative'}}>
              <CodePane
                lang="html"
                source={require("raw-loader!../assets/code/badModal.example")}
                margin="0px auto"
                textSize="0.9em"
              />
            </Fill>

            <Fill style={{textAlign: 'left', width: '42%', flex: '1 1 42%', marginLeft: '3%'}}>
              <Heading size={3} style={{textAlign: 'center', marginBottom: 40}}>So, that was bad</Heading>
              <hr />
              <ul>
                <Appear><li style={{fontSize: '1.2em', lineHeight: '1.4em'}}>Forcing all verticals to match a whole-page template structure <br /><span style={{fontStyle: 'italic', textDecoration: "underline"}}>for a modal</span></li></Appear>
                <Appear><li style={{paddingTop: 30, fontSize: '1.2em', lineHeight: '1.4em'}}>Immediately changing that structure</li></Appear>
                <Appear><li style={{paddingTop: 30, fontSize: '1.2em', lineHeight: '1.4em'}}>Hard coding ideal test data (John Snow is a GREAT test name! What? Oh.)</li></Appear>
                <Appear><li style={{paddingTop: 30, fontSize: '1.2em', lineHeight: '1.4em'}}>SVG Icon Font</li></Appear>
              </ul>
            </Fill>
          </Layout>
        </Slide>

{/* React Week */}
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

{/* The Ugly: Just a Header */}
        <Slide bgColor="primary" notes="It turns out our header included dropdown menus, responsive hamburger menus, modals, dynamic login detection, dynamic menu resizing on scroll, weather modules with geolocation, icon fonts, and a search bar. It was huge, required jQuery, and came with a whole host of webpack/bower/gulp build process complexity that none of us knew anything about. As we coded, our designers, and the technology, continued to innovate. We were learning (and refactoring) a lot, but the old Manhattan Hardcore Components were still in circulation, and as we completed the new header components, those were being incorporated into various websites, as well.">
          <Layout>
            <Fill style={{textAlign: 'left', width: '60%', flex: '1 1 60%'}}>
              <CodePane
                lang="js"
                source={require("raw-loader!../assets/code/header.example")}
                margin="0px auto"
                textSize="0.73em"
              />
            </Fill>
            <Fill style={{textAlign: 'left', width: '39%', flex: '1 1 40%', marginLeft: '0.5%'}}>
              <CodePane
                lang="js"
                source={require("raw-loader!../assets/code/header2.example")}
                margin="0px auto"
                textSize="0.73em"
              />
            </Fill>
          </Layout>
          <Heading margin="60px auto 0px auto" textColor="secondary" textFont="primary" size={4} style={{fontWeight: 'normal'}}>"Just the header," we said</Heading>
        </Slide>

{/* Important Rabbits */}
        <Slide>
          <Layout style={{display: 'block'}}>
            <Fill style={{width: '100%', height: '100%', position: 'relative'}}>
              <Image src={images.importantRabbits} style={{maxWidth: 1768, maxHeight: 852, width: 'auto', margin: '0 auto'}} />
            </Fill>
          </Layout>
        </Slide>

{/* One True Answer */}
        <Slide>
          <Text>the</Text>
          <Heading size={1} textColor="tertiary" caps>one true answer</Heading>
          <Text>to all our problems is...</Text>
        </Slide>

{/* Be Kind */}
        <Slide>
          <Layout style={{display: 'block'}}>
            <Fill style={{width: '100%', height: '100%', position: 'relative'}}>
              <Image src={images.beKind} style={{maxWidth: 1768, maxHeight: 852, width: 'auto', margin: '0 auto'}} />
            </Fill>
          </Layout>
        </Slide>

{/* Choosing a component */}
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

{/* Accessibility Intro Slide */}
        <Slide bgColor="#000000" style={{ width: '100%',position: 'relative' >
          <Heading textColor="quartenary" style={{ marginBottom: -100, zIndex: 10, position: 'relative' }}>Accessibility</Heading>
          <Image src={images.accessibilityGif} style={{ width: '100%', marginBottom: -100, zIndex: 0, position: 'relative' }} />
          <Link textColor="quartenary" style={{ zIndex: 10, position: 'relative' }} href="https://www.microsoft.com/en-us/design/inclusive">
            Image Credit: Inclusive Design at Microsoft
          </Link>
        </Slide>

{/* Accessibility links */}
        <Slide textColor="secondary">
          <Heading fit caps style={{textAlign: 'center'}}>Accessibility Tools, Testing, and Integrations</Heading>
          <hr />
          <Layout>
            <Fill style={{textAlign: 'left', width: "60%", flex: '1 1 60%'}}>
              <ul>
                <li style={[styles.li, {marginTop: 0 }]}>
                  <Text style={styles.liLargeText}>Best Practices & Resources</Text>
                  <ul>
                    <li style={{lineHeight: '1.5em'}}>
                      <Link textColor="tertiary" href="http://a11yproject.com/checklist.html">
                        A11y Project: Checklist
                      </Link>
                    </li>
                    <li style={{lineHeight: '1.5em'}}>
                      <Link textColor="tertiary" href="http://romeo.elsevier.com/accessibility_checklist/">
                        Elsevier: Web Content Accessibility Guidelines 2.0
                      </Link>
                    </li>

                    <li style={{lineHeight: '1.5em'}}>
                      <Link textColor="tertiary" href="https://www.webaccessibility.com/best_practices.php">
                        WEB Accessibility: Best Practices
                      </Link>
                    </li>
                    <li style={{lineHeight: '1.5em'}}>
                      <Link textColor="tertiary" href="https://www.usability.gov/what-and-why/accessibility.html">
                        Usability.gov: Accessibility Basics
                      </Link>
                    </li>
                    <li style={{lineHeight: '1.5em'}}>
                      <Link textColor="tertiary" href="https://www.microsoft.com/en-us/design/inclusive">
                        Inclusive Design at Microsoft Toolkit: Downloadable PDFs, Videos
                      </Link>
                    </li>
                  </ul>
                </li>

                <li style={[styles.li, {marginTop: 30 }]}>
                  <Text style={styles.liLargeText}>Platform & Automated Testing</Text>
                  <ul>
                    <li style={{lineHeight: '1.5em'}}>
                      <Link textColor="tertiary" href="https://github.com/dequelabs">
                        Deque Labs Github: axe-core, axe-cli, react-axe, ngA11y, axe-rules<br />ios and android integration, axe-selenium-java
                      </Link>
                    </li>
                    <li style={{lineHeight: '1.5em'}}>
                      <Link textColor="tertiary" href="https://www.deque.com/products/axe/">Deque Labs aXe Chrome and Firefox extensions</Link>
                    </li>

                    <li style={{lineHeight: '1.5em'}}>
                      <Link textColor="tertiary" href="https://www.boia.org/products/a11y-tool/">
                        Bureau of Internet Accessibility: A11y Testing Platform
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </Fill>
            <Fill style={{textAlign: 'right', width: "40%", flex: '1 1 40%', padding: 40, marginTop: -20}}>
              <Image src={images.inclusiveDesignToolkit} style={{width: '100%'}} />
            </Fill>
          </Layout>
        </Slide>

{/*  */}
        <Slide bgColor="secondary">
          <Heading textColor="quartenary" size={3}>Globalization/Localization</Heading>
          <Image src={images.globalization} style={{width: 800}} />
        </Slide>

        <Slide>
          <Image src={images.globalization} style={{width: 800}} />
        </Slide>

      </Deck>
    );
  }
}
