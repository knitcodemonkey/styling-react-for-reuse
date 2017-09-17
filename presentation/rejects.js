// Import React
import React from 'react';

// Import Spectacle Core tags
import {
	Appear,
	BlockQuote,
	Cite,
	CodePane,
	Deck,
	Heading,
	Image,
	Layout,
	Link,
	Fill,
	ListItem,
	List,
	Notes,
	Quote,
	Slide,
	Text,
} from 'spectacle';

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/monokai.codemirror.css');

const images = {
	me: require('../assets/KnittingCodeMonkey.jpg'),
	github1: require('../assets/github1.png'),
	github2: require('../assets/github2.png'),
	github3: require('../assets/github3.png'),
	logo: require('../assets/formidable-logo.svg'),
	markdown: require('../assets/markdown.png'),
	mhpNuke: require('../assets/ManhattanHardcoreProject.png'),
	reactWeek: require('../assets/ReactWeek.png'),
	justAHeader: require('../assets/justAHeader.png'),
	importantRabbits: require('../assets/ImportantRabbits.png'),
	beKind: require('../assets/beKind.png'),
	livingStyleGuide: require('../assets/LivingStyleGuide.png'),
	iconFont: require('../assets/IconFont.png'),
	waitWhat: require('../assets/waitWhat.png'),
	famous: require('../assets/famous.jpg'),
	accessibilityGif: require('../assets/AccessibilityGif.gif'),
	inclusiveDesignToolkit: require('../assets/InclusiveDesignToolkit.png'),
	globalization: require('../assets/Globalization.jpg'),
	stylingWithoutStyling: require('../assets/stylingWithoutStyling.png'),
	programmer: require('../assets/programmer.jpg'),
	daenerys: require('../assets/daenerys.png'),
	JenniferVan: require('../assets/JenniferVan.jpg'),
	cssInJs: require('../assets/cssInJs.jpg'),
	playground: require('../assets/playground.png'),
	firstRuleOfAria: require('../assets/first-rule-of-aria.png'),
	samuelSmiles: require('../assets/Samuel_Smiles_by_Sir_George_Reid.jpg'),
	brickBg: require('../assets/backgrounds/brickBg.jpg'),
	wheelchair: require('../assets/backgrounds/access-wheelchair.jpg'),
	mistakes: require('../assets/backgrounds/mistakes.jpg'),
	mistakesBlurred: require('../assets/backgrounds/mistakesBlurred.png'),
	success: require('../assets/backgrounds/success.jpg'),
	discoverableComponents: require('../assets/discoverableComponents.png'),
	JenDevDesk: require('../assets/JenDevDesk.png'),
};

preloader(images);

const themeColors = {
	primary: '#FAFAFA',
	secondary: '#191919',
	tertiary: '#981804',
	dktertiary: '#C0FFEE',
	quartenary: '#FAFAFA',
	faded: '#CCCCCC',
	background: 'linear-gradient(#F8FAFA, #D8DADA)',
};

const theme = createTheme(themeColors, {
	primary: 'Raleway',
});

const styles = {
	li: {
		margin: '40px 0 0 0',
		lineHeight: '2em',
	},
	liLargeText: {
		fontSize: '1.5em',
		fontWeight: 'bold',
	},
	flexCol: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		height: '100%',
	},
	spacePlease: {
		padding: '60px 0',
	},
	standardText: {
		fontSize: '3rem',
		lineHeight: '3.4rem',
		textShadow: '1px 1px' + ' 6px #000',
	},
};

export default class Presentation extends React.Component {
	render() {
		return (
			<Deck
				transition={['fade']}
				transitionDuration={100}
				theme={theme}
				contentWidth="1768"
				contentHeight="932"
			>
				{/* <Deck transition={["fade"]} transitionDuration={100} theme={theme}> */}

				{/* Title Screen */}
				<Slide
					bgColor="faded"
					bgImage={images.JenDevDesk}
					bgDarken={0.7}
				>
					<Notes>
						As speakers, we do our best, but sometimes slides are
						just too difficult to read. You can follow along at
						styling-react-for-reuse.surge.sh
					</Notes>
					<Layout style={styles.flexCol}>
						<Fill style={styles.spacePlease}>
							<Heading
								size={2}
								caps
								fit
								lineHeight={1}
								textColor="primary"
								style={{ textShadow: '0px 0px' + ' 6px #000' }}
							>
								Styling React for Reuse
							</Heading>
							<Heading
								margin="10px 0 0"
								fit
								textColor="dktertiary"
								size={4}
								bold
								style={{ textShadow: '0px 0px' + ' 6px #000' }}
							>
								for those that already have a product
							</Heading>
						</Fill>
						<Fill style={styles.spacePlease}>
							<Link
								textColor="dktertiary"
								style={styles.standardText}
								href="http://styling-react-for-reuse.surge.sh"
							>
								Follow along with the slides:
								http://styling-react-for-reuse.surge.sh
							</Link>
						</Fill>
					</Layout>
				</Slide>

				{/* Jen Luker Intro */}
				<Slide
					bgColor="faded"
					bgImage={images.JenDevDesk}
					bgDarken={0.7}
				>
					<Notes>
						Software engineer, professionally, for over 10 years
					</Notes>
					<Layout>
						<Fill>
							<Image
								margin="0"
								src={images.me}
								style={{
									maxWidth: '80%',
									borderRadius: '50%',
									boxShadow: '0px 0px' + ' 10px #333',
								}}
							/>
						</Fill>
						<Fill
							style={{
								display: 'flex',
								justifyContent: 'center',
								flexDirection: 'column',
							}}
						>
							<Heading
								size={1}
								textColor="dktertiary"
								style={{ textShadow: '1px 1px' + ' 6px #000' }}
							>
								Jen Luker
							</Heading>
							<hr textFont="secondary" />
							<Text
								style={styles.standardText}
								textColor="primary"
							>
								Team Lead Software Engineer
							</Text>
							<Text
								style={styles.standardText}
								textColor="primary"
							>
								with Deseret Digital Media
							</Text>
							<hr textFont="primary" />
							<Link
								textColor="dktertiary"
								href="http://jenluker.com"
							>
								<Text
									textColor="dktertiary"
									style={styles.standardText}
								>
									http://jenluker.com
								</Text>
							</Link>
							<Text
								style={styles.standardText}
								textColor="primary"
							>
								Github: @knittingcodemonkey
							</Text>
							<Text
								style={styles.standardText}
								textColor="primary"
							>
								Twitter: @knitcodemonkey
							</Text>
						</Fill>
					</Layout>
					<Layout style={styles.spacePlease}>
						<Fill>
							<Link
								textColor="dktertiary"
								style={styles.standardText}
								href="http://styling-react-for-reuse.surge.sh"
							>
								Follow along with the slides:
								http://styling-react-for-reuse.surge.sh
							</Link>
						</Fill>
					</Layout>
				</Slide>

				<Slide
					fit
					bgImage={images.brickBg}
					bgDarken={0.7}
					notes="How do we make our components discoverable?"
				>
					<Heading textColor="quartenary" size={3}>
						Question:
					</Heading>
					<Image
						src={images.discoverableComponents}
						style={{ width: '100%', marginTop: 40 }}
					/>
				</Slide>

				<Slide
					fit
					bgImage={images.brickBg}
					bgDarken={0.7}
					notes="How do we make our components discoverable?"
				>
					<Heading fit caps textColor="quartenary" size={3}>
						When to break out a component
					</Heading>
					<hr style={{ margin: '40px 0' }} />
					<ul>
						<li
							style={[
								styles.li,
								{
									textAlign: 'left',
									fontSize: '2em',
									color: themeColors.primary,
									lineHeight: 'initial',
								},
							]}
						>
							You use it twice
						</li>
						<li
							style={[
								styles.li,
								{
									textAlign: 'left',
									fontSize: '2em',
									color: themeColors.primary,
									lineHeight: 'initial',
								},
							]}
						>
							You put it in a function outside render
						</li>
						<li
							style={[
								styles.li,
								{
									textAlign: 'left',
									fontSize: '2em',
									color: themeColors.primary,
									lineHeight: 'initial',
								},
							]}
						>
							Component has implicit state; state the "product
							developer" or "app" doesn't care to see{' '}
							<a
								href="https://twitter.com/ryanflorence"
								style={{ color: themeColors.dktertiary }}
							>
								@ryanflorence
							</a>
						</li>
					</ul>
				</Slide>

				<Slide
					fit
					bgImage={images.brickBg}
					bgDarken={0.7}
					notes="How do we make our components discoverable?"
				>
					<Heading fit caps textColor="quartenary" size={3}>
						How to make components discoverable
					</Heading>
					<hr style={{ margin: '40px 0' }} />
					<ul>
						<li
							style={[
								styles.li,
								{
									textAlign: 'left',
									fontSize: '2em',
									color: themeColors.primary,
									lineHeight: 'initial',
								},
							]}
						>
							Release to NPM
						</li>
						<li
							style={[
								styles.li,
								{
									textAlign: 'left',
									fontSize: '2em',
									color: themeColors.primary,
									lineHeight: 'initial',
								},
							]}
						>
							Reusable Component Repo
						</li>
					</ul>
				</Slide>

				<Slide>
					<Heading>Publishing NPM Packages</Heading>
					<hr />
					<Link href="https://docs.npmjs.com/getting-started/publishing-npm-packages">
						npm docs - publishing npm packages
					</Link>
					<Link href="https://gist.github.com/coolaj86/1318304">
						A simpler guide on how you really publish npm packages
					</Link>
				</Slide>

				{/* One True Answer */}
				<Slide bgColor="faded">
					<Text>the</Text>
					<Heading size={1} textColor="tertiary" caps>
						one true answer
					</Heading>
					<Text>to all our problems is...</Text>
				</Slide>
			</Deck>
		);
	}
}
