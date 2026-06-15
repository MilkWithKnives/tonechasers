export type Category = 'Electric' | 'Bass' | 'Amp' | 'Effects';

export type Guitar = {
	slug: string;
	brand: string;
	model: string;
	year: string;
	price: number;
	category: Category;
	condition: string;
	finish: string;
	/** Short hook for cards. */
	blurb: string;
	/** Longer description for the detail page. */
	description: string;
	specs: { label: string; value: string }[];
	/** Path under /static (drop real photos here later). */
	image: string;
	status: 'available' | 'sold' | 'hold';
	featured?: boolean;
};

// Placeholder inventory for the pitch demo — swap in real Tone Chasers stock + photos later.
export const guitars: Guitar[] = [
	{
		slug: '1979-gibson-les-paul-custom-black',
		brand: 'Gibson',
		model: 'Les Paul Custom',
		year: '1979',
		price: 4995,
		category: 'Electric',
		condition: 'Excellent',
		finish: 'Ebony',
		blurb: 'The Black Beauty — three-piece maple neck, original PAFs.',
		description:
			'A genuine 1979 Les Paul Custom in ebony with gold hardware. Plays like butter, with the heft and sustain that made the "Black Beauty" a stage legend. All-original electronics, frets with plenty of life left, and the original hardshell case.',
		specs: [
			{ label: 'Year', value: '1979' },
			{ label: 'Body', value: 'Mahogany / Maple Top' },
			{ label: 'Pickups', value: 'Original Humbuckers' },
			{ label: 'Case', value: 'Original Hardshell' },
		],
		image: '/guitars/les-paul-custom.jpg',
		status: 'available',
		featured: true,
	},
	{
		slug: '1965-fender-stratocaster-sunburst',
		brand: 'Fender',
		model: 'Stratocaster',
		year: '1965',
		price: 12500,
		category: 'Electric',
		condition: 'Very Good',
		finish: '3-Tone Sunburst',
		blurb: 'Pre-CBS feel, transition-era spec. A true collector piece.',
		description:
			'A 1965 Stratocaster in three-tone sunburst with the warmth and snap that only a sixties Strat delivers. Honest player wear, original pickups, and a neck profile that disappears in your hand.',
		specs: [
			{ label: 'Year', value: '1965' },
			{ label: 'Neck', value: 'Rosewood' },
			{ label: 'Pickups', value: 'Original Single-Coils' },
			{ label: 'Case', value: 'Original' },
		],
		image: '/guitars/stratocaster-65.jpg',
		status: 'available',
		featured: true,
	},
	{
		slug: 'jackson-usa-soloist-sl2-trans-red',
		brand: 'Jackson',
		model: 'USA Soloist SL2',
		year: '2018',
		price: 1899,
		category: 'Electric',
		condition: 'Mint',
		finish: 'Transparent Red',
		blurb: 'Neck-through shred machine. Seymour Duncans, compound radius.',
		description:
			'The Jackson Soloist SL2 is built for speed — neck-through-body construction, a compound-radius ebony board, and Seymour Duncan humbuckers that scream. Near-mint with no fret wear.',
		specs: [
			{ label: 'Construction', value: 'Neck-Through' },
			{ label: 'Pickups', value: 'Seymour Duncan' },
			{ label: 'Fretboard', value: 'Ebony, Compound Radius' },
			{ label: 'Bridge', value: 'Floyd Rose' },
		],
		image: '/guitars/jackson-soloist.jpg',
		status: 'available',
		featured: true,
	},
	{
		slug: 'bc-rich-nj-warlock-black',
		brand: 'B.C. Rich',
		model: 'NJ Warlock',
		year: '1987',
		price: 1295,
		category: 'Electric',
		condition: 'Good',
		finish: 'Gloss Black',
		blurb: 'Pure 80s menace. The shape that defined a genre.',
		description:
			'An NJ-era Warlock with all the aggression you remember. Some honest road wear that only adds to the story. A wall-hanger that actually rips.',
		specs: [
			{ label: 'Year', value: '1987' },
			{ label: 'Body', value: 'Maple' },
			{ label: 'Pickups', value: 'Hot Humbuckers' },
			{ label: 'Vibe', value: 'Maximum' },
		],
		image: '/guitars/bc-rich-warlock.jpg',
		status: 'available',
	},
	{
		slug: 'fender-precision-bass-1972',
		brand: 'Fender',
		model: 'Precision Bass',
		year: '1972',
		price: 3450,
		category: 'Bass',
		condition: 'Very Good',
		finish: 'Olympic White',
		blurb: 'Thump for days. The bass that built rock and roll.',
		description:
			'A 1972 Precision Bass in aged Olympic white. The split-coil growl is unmistakable, and the maple neck is fast and stable. Original case included.',
		specs: [
			{ label: 'Year', value: '1972' },
			{ label: 'Neck', value: 'Maple' },
			{ label: 'Pickup', value: 'Original Split-Coil' },
			{ label: 'Case', value: 'Original' },
		],
		image: '/guitars/precision-bass.jpg',
		status: 'sold',
	},
	{
		slug: 'marshall-jcm800-2203-head',
		brand: 'Marshall',
		model: 'JCM800 2203',
		year: '1983',
		price: 2200,
		category: 'Amp',
		condition: 'Excellent',
		finish: 'Black Tolex',
		blurb: 'The sound of a generation. 100 watts of master-volume gain.',
		description:
			'The JCM800 2203 is the amp behind countless records — tight, aggressive, and unmistakably British. Serviced, re-tubed, and ready to roar.',
		specs: [
			{ label: 'Power', value: '100W Tube' },
			{ label: 'Channels', value: 'Single, Master Volume' },
			{ label: 'Serviced', value: 'Yes, re-tubed' },
			{ label: 'Year', value: '1983' },
		],
		image: '/guitars/jcm800.jpg',
		status: 'available',
	},
	{
		slug: 'ibanez-rg550-desert-yellow',
		brand: 'Ibanez',
		model: 'RG550',
		year: '1991',
		price: 1450,
		category: 'Electric',
		condition: 'Very Good',
		finish: 'Desert Sun Yellow',
		blurb: 'The original superstrat. Edge trem, thin Wizard neck.',
		description:
			'A genuine Japan-made RG550 in iconic Desert Sun Yellow. The Wizard neck is a shredder’s dream and the Edge trem stays in tune through anything.',
		specs: [
			{ label: 'Made In', value: 'Japan' },
			{ label: 'Neck', value: 'Wizard' },
			{ label: 'Bridge', value: 'Edge Tremolo' },
			{ label: 'Year', value: '1991' },
		],
		image: '/guitars/ibanez-rg550.jpg',
		status: 'available',
	},
	{
		slug: 'electro-harmonix-big-muff-ram-head',
		brand: 'Electro-Harmonix',
		model: 'Big Muff (Ram’s Head)',
		year: '1974',
		price: 575,
		category: 'Effects',
		condition: 'Good',
		finish: 'Ram’s Head',
		blurb: 'Violet-era fuzz. Thick, singing sustain.',
		description:
			'A coveted Ram’s Head Big Muff from the mid-seventies. Walls of creamy, saturated fuzz with that singing sustain you can’t fake. Tested and working.',
		specs: [
			{ label: 'Era', value: 'Ram’s Head' },
			{ label: 'Year', value: '1974' },
			{ label: 'Status', value: 'Tested, working' },
			{ label: 'Type', value: 'Fuzz' },
		],
		image: '/guitars/big-muff.jpg',
		status: 'available',
	},
];

export const categories: Category[] = ['Electric', 'Bass', 'Amp', 'Effects'];

export const getGuitar = (slug: string): Guitar | undefined =>
	guitars.find((g) => g.slug === slug);

export const formatPrice = (n: number): string =>
	n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
