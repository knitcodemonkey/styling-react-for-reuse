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
  stylingWithoutStyling: require("../assets/stylingWithoutStyling.png"),
  programmer: require("../assets/programmer.jpg"),
  daenerys: require("../assets/daenerys.png"),
  JenniferVan: require("../assets/JenniferVan.jpg"),
  cssInJs: require("../assets/cssInJs.jpg"),
  brickBg: require("../assets/backgrounds/brickBg.jpg"),
  wheelchair: require("../assets/backgrounds/access-wheelchair.jpg"),
  mistakes: require("../assets/backgrounds/mistakes.jpg"),
  success: require("../assets/backgrounds/success.jpg"),
};

preloader(images);

const themeColors = {
  primary: "#FAFAFA",
  secondary: "#191919",
  tertiary: "#981804",
  dktertiary: "#e2777a",
  quartenary: "#FAFAFA",
  faded: "#AAAAAA",

  background: "linear-gradient(#F8FAFA, #D8DADA)",
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
    padding: "60px 0"
  },
  standardText: {
    fontSize: "3rem",
    lineHeight: "3.4rem"
  }
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["fade"]} transitionDuration={100} theme={theme} contentWidth="1768" contentHeight="932">
      {/* <Deck transition={["fade"]} transitionDuration={100} theme={theme}> */}

        {/* Title Screen */}
        <Slide bgColor="background" notes="As speakers, we do our best, but sometimes slides are just too difficult to read. You can follow along at styling-react-for-reuse.surge.sh">
          <Layout style={styles.flexCol}>
            <Fill style={styles.spacePlease}>
              <Heading size={2} caps fit lineHeight={1} textColor="secondary">
                Styling React for Reuse
              </Heading>
              <Heading margin="10px 0 0" fit textColor="tertiary" size={4} bold>
                for those that already have a product
              </Heading>
            </Fill>
            <Fill style={styles.spacePlease}>
              <Link
                textColor="tertiary"
                style={styles.standardText}
                href="http://styling-react-for-reuse.surge.sh">
                Follow along with the slides: http://styling-react-for-reuse.surge.sh
              </Link>
            </Fill>
          </Layout>
        </Slide>

        {/* Jen Luker Intro */}
        <Slide notes="Software engineer for over 10 years">
          <Layout>
            <Fill>
              <Image margin="0" src={images.me} style={{
                maxWidth: '80%', borderRadius: '50%', boxShadow: "0px 10px" +
                " 20px #CECECE"
              }} />
            </Fill>
            <Fill style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
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
        <Slide bgImage={images.mistakes} bgDarken={0.7}
          notes="Say Quote: 'We learn from failure much more than from success; we often discover what we will do by finding out what we will not do; and probably he who never made a mistake never made a discovery.' My department decided it was time to break up our one, very large classified product into several, smaller, vertical-based products such as cars, homes, jobs, services, and general classifieds. We realized that in order to maintain branding across all these new products, we would need to figure out a way of sharing UI elements. We started researching methods and technologies for creating independent components we could share."
        >
          <BlockQuote>
            <Quote style={{ marginBottom: 80 }}>We learn from failure much more than from success; we often discover what we will do by finding out what we will not do; and probably he who never made a mistake never made a discovery.</Quote>
            <Cite  textColor="dktertiary">Samuel Smiles</Cite>
          </BlockQuote>
        </Slide>


        <Slide fit bgImage={images.brickBg} bgDarken={0.7}>
          <Heading textColor="primary" caps fit>What makes a component reusable?</Heading>
          <hr />
          <List style={{ textAlign: 'left' }}>
            <ListItem textColor="dktertiary" style={{fontSize: '3em', marginBottom: 30}}>Accessibility</ListItem>
            <ListItem textColor="primary" style={{fontSize: '2.4em', marginBottom: 30}}>Isolated, but not too isolated</ListItem>
            <ListItem textColor="primary" style={{fontSize: '2.4em', marginBottom: 30}}>Brandable</ListItem>
          </List>
        </Slide>


{/* Accessibility Summary Slide */}
        <Slide bgColor="#000000" style={{ width: '100%', position: 'relative' }} notes="<ul><li>repetetive stress injuries: tennis elbow or carpel tunnel</li><li>had your eyes dilated</li><li>tried to type while holding a baby</li><li>watched a video, in a loud room</li><li>watched a film in a language you didn't know</li><li>mouse batteries died, and too lazy to use laptop mouse?</li></ul>">
          <Heading textColor="quartenary" style={{ marginBottom: -100, zIndex: 10, position: 'relative' }}>Accessibility</Heading>
          <Image src={images.accessibilityGif} style={{ width: '100%', marginBottom: -100, zIndex: 0, position: 'relative' }} />
          <Link textColor="dktertiary" style={{ zIndex: 10, position: 'relative' }} href="https://www.microsoft.com/en-us/design/inclusive">
            Image Credit: Inclusive Design at Microsoft
          </Link>
        </Slide>

        <Slide bgImage={images.wheelchair} bgDarken={0.7}>
          <Layout>
            <Fill style={{flex: '1 1 30%', display: 'flex', alignItems: 'center'}}>
              <Image src={images.JenniferVan} style={{
                width: 600, height: 600, borderRadius: '50%', marginTop: -80, marginRight: 20
              }} />
            </Fill>
            <Fill style={{flex: '1 1 70%', display: 'flex', alignItems: 'center'}}>
              <BlockQuote>
                <Quote style={{ marginBottom: 80 }}>I would say like 90% of your day is dictated by technology, and if you,<br /> as a person, are not included in that technology, what's the point if your app is fast?</Quote>
                <Cite textColor="dktertiary">Jennifer Van, React Rally 2017</Cite>
              </BlockQuote>
            </Fill>
          </Layout>
        </Slide>

        

        {/* Accessibility links */}
        <Slide bgImage={images.wheelchair} bgDarken={0.85} textColor="primary" notes="<ul><li>Make sure to bring up the a11y project checklist and show how it'd make things easier.</li><li>talk about deque labs axe chrome and firefox plugins for testing existing sites.</li><li>explain deque labs has a bunch of other cool resources, including ios and android implementations on their github page</li></ul>">
          <Heading fit caps textColor="primary" style={{ textAlign: 'center' }}>Accessibility Tools, Testing, and Integrations</Heading>
          <hr />
          <Layout>
            <Fill style={{ textAlign: 'left', width: "60%", flex: '1 1 60%' }}>
              <ul>
                <li style={[styles.li, { marginTop: 0 }]}>
                  <Text textColor="primary" style={styles.liLargeText}>Best Practices & Resources</Text>
                  <ul>
                    <li style={{ lineHeight: '1.5em' }}>
                      <Link textColor="dktertiary" href="http://a11yproject.com/checklist.html">
                        A11y Project: Checklist
                      </Link>
                    </li>
                    <li style={{ lineHeight: '1.5em' }}>
                      <Link textColor="dktertiary" href="http://romeo.elsevier.com/accessibility_checklist/">
                        Elsevier: Web Content Accessibility Guidelines 2.0
                      </Link>
                    </li>

                    <li style={{ lineHeight: '1.5em' }}>
                      <Link textColor="dktertiary" href="https://www.webaccessibility.com/best_practices.php">
                        WEB Accessibility: Best Practices
                      </Link>
                    </li>
                    <li style={{ lineHeight: '1.5em' }}>
                      <Link textColor="dktertiary" href="https://www.usability.gov/what-and-why/accessibility.html">
                        Usability.gov: Accessibility Basics
                      </Link>
                    </li>
                    <li style={{ lineHeight: '1.5em' }}>
                      <Link textColor="dktertiary" href="https://www.microsoft.com/en-us/design/inclusive">
                        Inclusive Design at Microsoft Toolkit: Downloadable PDFs, Videos
                      </Link>
                    </li>
                  </ul>
                </li>

                <li style={[styles.li, { marginTop: 30 }]}>
                  <Text textColor="primary" style={styles.liLargeText}>Platform & Automated Testing</Text>
                  <ul>
                    <li style={{ lineHeight: '1.5em' }}>
                      <Link textColor="dktertiary" href="https://github.com/dequelabs">
                        Deque Labs Github: axe-core, axe-cli, react-axe, ngA11y, axe-rules<br />ios and android integration, axe-selenium-java
                      </Link>
                    </li>
                    <li style={{ lineHeight: '1.5em' }}>
                      <Link textColor="dktertiary" href="https://www.deque.com/products/axe/">Deque Labs aXe Chrome and Firefox extensions</Link>
                    </li>

                    <li style={{ lineHeight: '1.5em' }}>
                      <Link textColor="dktertiary" href="https://www.boia.org/products/a11y-tool/">
                        Bureau of Internet Accessibility: A11y Testing Platform
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </Fill>
            <Fill style={{ textAlign: 'right', width: "40%", flex: '1 1 40%', padding: 40, marginTop: -20 }}>
              <Image src={images.inclusiveDesignToolkit} style={{ width: '100%' }} />
            </Fill>
          </Layout >
        </Slide >

        <Slide fit bgImage={images.brickBg} bgDarken={0.7}>
        <Heading textColor="primary" caps fit>What makes a component reusable?</Heading>
        <hr />
        <List style={{ textAlign: 'left' }}>
          <ListItem textColor="primary" style={{fontSize: '2.4em', marginBottom: 30}}>Accessibility</ListItem>
          <ListItem textColor="dktertiary" style={{fontSize: '3em', marginBottom: 30}}>Isolated, but not too isolated</ListItem>
          <ListItem textColor="primary" style={{fontSize: '2.4em', marginBottom: 30}}>Brandable</ListItem>
        </List>
      </Slide>


        {/* Grouce Github Image */}
        <Slide
          bgColor="secondary"
          notes="This diagram is a visual representation of our codebase committed to Git around that time. It doesn’t include any additional code brought in through Composer. <br /><br />*click * <br /> <br />Each dot is an individual file, and the little, tiny structure inside the yellow hexagram is our API.When I say we just wanted a little consistency; not another framework, This is why: <br /> <br />*click * <br /> <br />We were a PHP shop with Zend Framework, jQuery - ui development bundle, and an aging, custom - built, CMS.We had a whole lot of infrastructure to support an equally large amount of information; all of which was being funneled through a very small api.We figured good ole’ javascript and php would be good enough for us. <br /><br />We chose a designer, project manager, and a few developers, and started our pilot Front End Development Team with the sole purpose of building reusable components."
        >
          <Layout style={{ display: 'block' }}>
            <Fill style={{ width: '100%', height: '790px', position: 'relative', marginTop: 0 }}>
              <Text textColor="quartenary" style={{ fontSize: '2.6rem', position: 'absolute', top: 0, left: 80, zIndex: 4 }}>
                Committed to Github<br />
                December 2015
                </Text>
              <Image src={images.github1} style={{ height: 780, position: "absolute", top: -40, left: 0, margin: 0, zIndex: 1 }} />
              <Appear>
                <Image src={images.github2} style={{ height: 780, position: "absolute", top: -40, left: 0, margin: 0, zIndex: 2 }} />
              </Appear>
              <Appear>
                <Image src={images.github3} style={{ height: 780, position: "absolute", top: -40, left: 0, margin: 0, zIndex: 3 }} />
              </Appear>
            </Fill>
          </Layout>
          <Text style={{ fontSize: '2.6rem', margin: '-30px 0 30px 0' }} textColor="quartenary">We just wanted a little consistency; not another framework.</Text>
        </Slide>

        <Slide bgImage={images.mhpNuke} notes="We named ourselves the MANHATTAN HARDCORE PROJECT (because we were going to make Atomic Components, hehe). Clearly we thought highly of ourselves. We had big ideas, and were going to make a big impact on the way we reused code. As soon as we started coding, the lessons started piling in. Clearly, failure was going to be our path to success." />

        {/* The Good: Living style guide */}
        <Slide bgImage={images.success} bgDarken={0.85} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}
          notes="We had some successes, like our shiny new living style guide that dynamically updates itself based on changes made to the git repo."
        >
          <Heading caps textColor="primary" size={2} style={{ textAlign: 'center', marginBottom: 40 }}>The Good</Heading>
          <hr />
          <Layout style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '100%', position: 'relative', marginTop: 40 }}>
            <Fill style={{ flex: '1 0 45%', width: '40%' }}>
              <Image src={images.livingStyleGuide} style={{ textAlign: 'left', width: '100%', margin: '0px auto' }} />
            </Fill>
            <Fill style={{ flex: '1 1 10%', width: '10%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}><Heading textColor="primary"> = </Heading></Fill>
            <Fill style={{ flex: '1 0 45%', width: '40%' }}>
              <Image src={images.famous} style={{ textAlign: 'left', width: '100%', margin: '0px auto' }} />
            </Fill>
          </Layout>
        </Slide>

        {/* The Bad: Mistakes */}
        <Slide bgImage={images.mistakes} bgDarken={0.80} notes="And we had some failures">

          <Layout style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Fill style={{ textAlign: 'left', width: '55%', flex: '1 1 55%', position: 'relative' }}>
              <CodePane
                lang="html"
                source={require("raw-loader!../assets/code/badModal.example")}
                margin="0px auto"
                textSize="0.9em"
              />
            </Fill>

            <Fill style={{ textAlign: 'left', width: '42%', flex: '1 1 42%', marginLeft: '3%' }}>
              <Heading caps textColor="primary" size={2} style={{ textAlign: 'center', marginBottom: 40 }}>The Bad</Heading>
              <hr />
              <Text textColor="primary" style={{ fontSize: '1.8em', marginTop: 40 }}>&larr; Required <span style={{ fontStyle: 'italic', textDecoration: "underline" }}>for a modal</span></Text>
              <ul textColor="primary">
                <Appear><li style={{ color: themeColors.primary, paddingTop: 70, fontSize: '1.8em' }}>Immediately changed that structure</li></Appear>
                <Appear><li style={{ color: themeColors.primary, paddingTop: 70, fontSize: '1.8em' }}>No accessibility testing</li></Appear>
                <Appear><li style={{ color: themeColors.primary, paddingTop: 70, fontSize: '1.8em' }}>SVG icon font</li></Appear>
              </ul>
            </Fill>
          </Layout>
        </Slide>

        <Slide bgImage={images.mistakes} bgDarken={0.80} textAlign="left">
          <Heading caps textColor="primary" size={2} style={{ textAlign: 'center', marginBottom: 40 }}>The Ugly</Heading>
          <hr />
          <Layout style={{padding: '30px 0 0 0'}}>
          
              <Fill style={{flex: '1 1 90%'}}>
                <BlockQuote style={{display: 'block', textAlign: 'right'}}>
                  <Quote style={{ fontSize: '1.6em', fontWeight: 'normal', borderLeft: 0, paddingLeft: 0, borderRight: '1px solid rgb(250, 250, 250)', paddingRight: 40 }}>Name field: &nbsp; "John Snow"</Quote>
                  <Cite textColor="dktertiary">Dev</Cite>
                </BlockQuote>
            </Fill>
            <Fill style={{flex: '1 1 10%', display: 'flex', alignItems: 'center'}}>
                <Image margin="0" src={images.me} style={{
                  width: 150, height: 150, borderRadius: '50%', marginLeft: 20, marginTop: -30
                }} />
              </Fill>
          </Layout>

          <Layout>
          <Fill style={{flex: '1 1 10%', display: 'flex', alignItems: 'center'}}>
              <Image margin="0" src={images.daenerys} style={{
                width: 300, height: 300, borderRadius: '50%', marginRight: 20, marginTop: -40
              }} />
            </Fill>
            <Fill style={{flex: '1 1 90%'}}>
            <BlockQuote style={{display: 'block'}}>
                <Quote style={{ fontSize: '1.6em', fontWeight: 'normal', marginRight: 150 }}>Name field: &nbsp; "Daenerys Stormborn of the House Targaryen, First of Her Name, the Unburnt, Queen of the Andals and the First Men, Khaleesi of the Great Grass Sea,<br />Breaker of Chains, and Mother of Dragons"</Quote>
                <Cite textColor="dktertiary">The QA Team</Cite>
              </BlockQuote>
            </Fill>
          </Layout>

          <Layout style={{marginTop: -20}}>
            <Fill style={{flex: '1 1 90%'}}>
              <BlockQuote style={{display: 'block', textAlign: 'right'}}>
                <Quote style={{ fontSize: '1.6em', fontWeight: 'normal', borderLeft: 0, paddingLeft: 0, borderRight: '1px solid rgb(250, 250, 250)', paddingRight: 40 }}>Oh.</Quote>
                <Cite textColor="dktertiary">Dev</Cite>
              </BlockQuote>
            </Fill>
            <Fill style={{flex: '1 1 10%', display: 'flex', alignItems: 'center'}}>
              <Image margin="0" src={images.me} style={{
                width: 150, height: 150, borderRadius: '50%', marginLeft: 20, marginTop: -30
              }} />
            </Fill>
          </Layout>
        </Slide>


        {/* React Week */}
        <Slide bgImage={images.reactWeek} bgDarken={0.2} notes="So we took those lessons, got a little training, and iterated again.">
          <Heading textColor="primary" size={1} style={{ textShadow: '0px 0px 20px #000', textAlign: 'right' }}>React Week</Heading>
          <Appear>
            <Fill>
              <Text textColor="primary" style={{ textShadow: '0px 0px 20px #000', fontWeight: 'bold', marginTop: 160, marginLeft: -190 }}>It's me!</Text>
              <Text textColor="primary" style={{ textShadow: '0px 0px 20px #000', fontWeight: 'bold', marginTop: 240, marginBottom: 120, marginLeft: '-300px' }}> &uarr; coffee</Text>
            </Fill>
          </Appear>
        </Slide>

        {/* The Ugly: Just a Header */}
        <Slide bgColor="primary" notes="It turns out our header included dropdown menus, responsive hamburger menus, modals, dynamic login detection, dynamic menu resizing on scroll, weather modules with geolocation, icon fonts, and a search bar. It was huge, required jQuery, and came with a whole host of webpack/bower/gulp build process complexity that none of us knew anything about. As we coded, our designers, and the technology, continued to innovate. We were learning (and refactoring) a lot, but the old Manhattan Hardcore Components were still in circulation, and as we completed the new header components, those were being incorporated into various websites, as well.">
          <Layout>
            <Fill style={{ textAlign: 'left', width: '60%', flex: '1 1 60%' }}>
              <CodePane
                lang="js"
                source={require("raw-loader!../assets/code/header.example")}
                margin="0px auto"
                textSize="0.73em"
              />
            </Fill>
            <Fill style={{ textAlign: 'left', width: '39%', flex: '1 1 40%', marginLeft: '0.5%' }}>
              <CodePane
                lang="js"
                source={require("raw-loader!../assets/code/header2.example")}
                margin="0px auto"
                textSize="0.73em"
              />
            </Fill>
          </Layout>
          <Heading margin="60px auto 0px auto" textColor="secondary" textFont="primary" size={4} style={{ fontWeight: 'normal' }}>"Just the header," we said</Heading>
        </Slide>

        <Slide fit bgImage={images.brickBg} bgDarken={0.7}>
          <Heading textColor="primary" caps fit>What makes a component reusable?</Heading>
          <hr />
          <List style={{ textAlign: 'left' }}>
            <ListItem textColor="primary" style={{fontSize: '2.4em', marginBottom: 30}}>Accessibility</ListItem>
            <ListItem textColor="primary" style={{fontSize: '2.4em', marginBottom: 30}}>Isolated, but not too isolated</ListItem>
            <ListItem textColor="dktertiary" style={{fontSize: '3em', marginBottom: 30}}>Brandable</ListItem>
          </List>
        </Slide>

         {/* Important Rabbits */}
         <Slide notes="This time, we learned that when you are explicit about your css and js transitions, you end up needing a lot of !important tags.">
          <Layout style={{ display: 'block' }}>
            <Fill style={{ width: '100%', height: '100%', position: 'relative' }}>
              <Image src={images.importantRabbits} style={{ maxWidth: 1768, maxHeight: 852, width: 'auto', margin: '0 auto' }} />
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
          <Layout style={{ display: 'block' }}>
            <Fill style={{ width: '100%', height: '100%', position: 'relative' }}>
              <Image src={images.beKind} style={{ maxWidth: 1768, maxHeight: 852, width: 'auto', margin: '0 auto' }} />
            </Fill>
          </Layout>
        </Slide>


        <Slide fit bgImage={images.brickBg} bgDarken={0.7} notes="This is an interesting question">
          <Heading textColor="quartenary" size={3}>Question: </Heading>
          <Image src={images.stylingWithoutStyling} style={{ width: '100%' }} />
        </Slide>


        <Slide fit bgImage={images.brickBg} bgDarken={0.7} style={{ position: 'relative', height: '100%' }} notes="Oh right. That's why.">
          <Layout style={{ display: 'flex', flexDirection: 'column' }}>
            <Fill>
              <Image src={images.cssInJs} style={{ height: 842, margin: 0 }} />
            </Fill>
            <Fill style={{ textAlign: 'right', marginRight: 210 }}>
              <Link textColor="tertiary" href="https://twitter.com/mfpiccolo/status/904521745196916736" >@mfpiccolo</Link>
            </Fill>
          </Layout>
        </Slide>

        <Slide fit bgImage={images.brickBg} bgDarken={0.7}>
          <Layout>
            <Fill>
              <Heading></Heading>
              <Text></Text>
            </Fill>
          </Layout>
        </Slide>

      </Deck >
    );
  }
}
