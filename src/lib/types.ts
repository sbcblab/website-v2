//=============================================================================
// 	Codebase
//=============================================================================

export interface Sections {
	[key: string]: Section[];
}

export interface NavLink {
	href: string;
	label: string;
	subLinks?: NavLink[];
}

//=============================================================================
//	Colletction Types
//=============================================================================

export interface Collaborator {
	name: string;
	country: Country;
	institute?: string;
	university?: string;
	link?: string;
}

export interface Country {
	name: string;
	flagUrl: string;
}

export interface Dataset {
	title: string;
	link?: string;
	description?: string;
	imageUrl?: string;
}

export interface Guest {
	name: string;
	year: number;
	country?: Country;
	university?: string;
	link?: string;
}

export interface Member {
	name: string;
	pictureUrl: string;
	role: string;
	areas: Area[];
	googleScholar?: string;
	orcid?: string;
	researchGate?: string;
	lattes?: string;
	dblp?: string;
}

export interface MemberArea {
	name: string;
}

export interface Page {
	slug: string;
	sections: Section[];
}

export interface Project {
	title: string;
	link?: string;
	description?: string;
	imageUrl?: string;
}

export interface Publication {
	title: string;
	year: number;
	publicationDate: string;
	type: string;
	doi?: string;
	authors?: string[];
	booktitle?: string;
	address?: string;
	volume?: number;
	issue?: number;
	pages?: string;
}

export interface ResearchArea {
	title: string;
	iconUrl: string;
	description: string;
	fullTitle?: string;
	keywords: Keyword[];
}

export interface Section {
	name: string;
	slug: string;
	pages?: Page[];
	content?: any;
}

export interface Tool {
	title: string;
	link?: string;
	description?: string;
	imageUrl?: string;
}

//=============================================================================
//	Single Types
//=============================================================================

export interface Contact {
	email: string;
	phone: string;
	location: string;
	address: string;
}

export interface Global {
	nav: NavLink[];
}

export interface Socials {
	twitter?: string;
	instagram?: string;
	github?: string;
	linkedin?: string;
}

//=============================================================================
//	Components
//=============================================================================

// General --------------------------------------------------------------------

export interface Heading {
	text: string;
}

export interface HTML {
	content: string;
}

export interface Image {
	imageUrl: string;
	border: boolean;
	link?: string;
	height?: number;
}

export interface ImageRow {
	images: Image[];
	justify: string;
	border: boolean;
	gap?: number;
	imagesHeight?: number;
}

export interface Map {
	src: string;
	styles: Style[];
}

export interface RichText {
	content: string;
}

// List -----------------------------------------------------------------------

export interface Area {
	name: string;
}

export interface Author {
	name: string;
}

export interface HiringItem {
	text: string;
	iconUrl: string;
}

export interface Keyword {
	name: string;
}

export interface Partnership {
	name: string;
	link?: string;
	imageUrl: string;
}

export interface Slide {
	heading?: string;
	link?: string;
	backgroundUrl?: string;
	imageUrl?: string;
	description?: string;
	headingColor?: string;
}

export interface Style {
	key: string;
	value: string;
}

// Unique ---------------------------------------------------------------------

export interface AboutUs {
	mainParagraph?: string;
	bodyText?: string;
	imageUrl?: string;
	imageLink?: string;
}

export interface Banner {
	slides: Slide[];
	defaultBackgroundUrl: string;
}

export interface Collaborators {
	collaborators: Collaborator[];
}

export interface ContactUs {
	subheading?: string;
	showEmail: boolean;
	showPhone: boolean;
	showLocation: boolean;
	showAddress: boolean;
}

export interface Guests {
	guests: Guest[];
}

export interface Hiring {
	aboveHeading?: string;
	heading?: string;
	lead?: string;
	requirements: {
		title: string;
		items: HiringItem[];
	};
	benefits: {
		title: string;
		items: HiringItem[];
	};
	ppgc: {
		description?: string;
		iconUrl: string;
	};
	ppgbcm: {
		description?: string;
		iconUrl: string;
	};
	apply: {
		link?: string;
		text?: string;
	};
}

export interface Members {
	members: Member[];
}

export interface Partnerships {
	heading: string;
	partnerships: Partnership[];
}

export interface Projects {
	projects: Project[];
}

export interface Publications {
	heading?: string;
	headingType: 'h1' | 'h2';
	publications: { year: number; publications: Publication[] }[];
}

export interface ResearchAreas {
	researchAreas: ResearchArea[];
}

export interface Slogan {
	text: string;
}

export interface ToolsDatasets {
	tools: Tool[];
	datasets: Dataset[];
}
