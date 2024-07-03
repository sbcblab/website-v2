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
	path: string;
	sections: Section[];
}

export interface Project {
	title: string;
	link?: string;
	description?: string;
	imageUrl?: string;
}

export interface ProjectPage {
	slug: string;
	heading: string;
	header: Header;
	startDate?: string;
	endDate?: string;
	images: { url: string; alt: string }[];
	content: any[];
}

export interface Publication {
	title: string;
	year: number;
	publicationDate: string;
	type: string;
	doi: string;
	authors: string[];
	booktitle?: string;
	address?: string;
	volume?: number;
	issue?: number;
	pages?: string;
}

export interface Section {
	slug: string;
	content: any[];
}

export interface Tool {
	title: string;
	link?: string;
	description?: string;
	imageUrl?: string;
}

export interface ToolDatasetPage {
	slug: string;
	heading: string;
	image: { src: string; alt: string };
	title: string;
	lead?: string;
	updateDate?: string;
	content: any[];
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

export interface Button {
	label: string;
	iconUrl?: string;
	link?: string;
}

export interface Datasets {
	data: any;
	filterPropJsonName?: string;
	filterPropLabel?: string;
	filterOptions?: string[];
	displayedInfo: { jsonPropName: string; label: string }[];
	sortOptions?: { jsonPropName: string; label: string }[];
	downloadOptions?: { jsonPropName: string; label: string }[];
}

export interface Form {
	name: string;
	target?: string;
	submitButton: string;
	fields: any[];
}

export interface Header {
	eyebrow?: string;
	title: string;
	lead?: string;
}

export interface Heading {
	text: string;
	anchorId?: string;
}

export interface HTML {
	content: string;
}

export interface IFrame {
	title: string;
	src: string;
	styles: Style[];
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

export interface ImageGrid {
	images: { src: string; alt: string }[];
	cols: number;
	gap: number;
	maxWidth: number;
}

export interface Meetings {
	meetings: Meeting[];
}

export interface Menu {
	items: MenuItem[];
}

export interface Missions {
	missions: Mission[];
}

export interface PublicationList {
	publications: Publication[];
	externalPublications: ExternalPublication[];
}

export interface ResearcherList {
	researchers: Researcher[];
}

export interface RichText {
	content: string;
}

export interface Tabs {
	items: TabItem[];
}

// List -----------------------------------------------------------------------

export interface Area {
	name: string;
}

export interface Attribute {
	name: string;
	value: string;
}

export interface Author {
	name: string;
}

export interface HiringItem {
	text: string;
	iconUrl: string;
}

export interface Meeting {
	title: string;
	objective?: string;
	participants?: string;
	location?: string;
	datetime?: string;
}

export interface MenuItem {
	label: string;
	link: string;
}

export interface Mission {
	origin: {
		institute?: string;
		university?: string;
		country: Country;
	};
	destination: {
		institute?: string;
		university?: string;
		country: Country;
	};
	members: {
		name: string;
		link?: string;
		fromDate?: string;
		toDate?: string;
	}[];
}

export interface Partnership {
	name?: string;
	link?: string;
	imageUrl: string;
}

export interface ExternalPublication {
	title: string;
	year: number;
	publicationDate: string;
	doi: string;
	authors: string;
	booktitle?: string;
	volume?: number;
	pages?: string;
}

export interface Researcher {
	name: string;
	role?: string;
	link?: string;
	program?: string;
	institute?: string;
	university?: string;
	country?: Country;
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

export interface TabItem {
	title: string;
	fullTitle?: string;
	iconUrl: string;
	content: string;
	keywords?: string[];
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
	partnerships: Partnership[];
}

export interface Projects {
	projects: Project[];
}

export interface Publications {
	heading?: string;
	headingType: 'h1' | 'h2';
	publications: Publication[];
}

export interface Slogan {
	text: string;
}

export interface ToolsDatasets {
	tools: Tool[];
	datasets: Dataset[];
}
