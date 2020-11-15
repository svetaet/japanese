export const adjectives: CardT[] = [
	{
		id: 'te-form-adjectives',
		title: 'Te-form of adjectives',
		text: 'い→くて\nな→で',
		tags: ['n5', 'te-form', 'adjective'],
	},
	{
		id: 'nai-form-adjectives',
		title: 'Negative form of adjectives',
		text: 'い→くない\nな→じゃない　な→でわない\n\nいい→よくない',
		tags: ['n5', 'nai-form', 'adjective'],
	},
	{
		id: 'past-form-adjectives',
		title: 'Past form of adjectives',
		text: 'い→かった\nな→だった\n\nいい→よかった',
		tags: ['n5', 'past-form', 'adjective'],
	},
	{
		id: 'adverbial-form-adjectives',
		title: 'Adverbial form of adjectives',
		text: 'い→く\nな→に\n\nいい→よく',
		tags: ['n4', 'adverb', 'adjective'],
	},
	{
		id: 'seeming-adjectives',
		title: '[adj-stem] + そう - seem to be [adj]',
		text: 'い→そう\nな→そう\n\nいい→よさそう\nない→なさそう',
		tags: ['n4', 'adjective'],
	},
	{
		id: 'too-much-adjectives',
		title: '[adj-stem] + すぎる - too [adj]',
		text: 'い→すぎる\nな→すぎる\nいい→よすぎる',
		tags: ['n4', 'adjective'],
	},
	{
		id: 'adjective-expressing-change',
		title: '[adverb] + になる - to become [adj]',
		text: 'Note that the auxiliary verb naru conjugates as a Class 1 verb.',
		examples: [{ jp: '明日暑くなります。', en: 'Tomorrow it will become hot.' }],
		tags: ['n4', 'adverb'],
	},
	{
		id: 'adjective-to-make',
		title: '[adverb] + する - to make [adj]',
		examples: [
			{
				jp: 'テレビのボリュームを大きくしてください。',
				en: 'Please turn the TV up. (Literal translation: Please make the TV volume bigger.)',
			},
		],
		tags: ['n4', 'adverb'],
	},
	{
		id: 'mitai-looks-like-adjectives',
		title: '...みたい - like...',
		text:
			'Mitai conjugates in the same way as a na adjective. So when mitai precedes a noun, mitai becomes mitaina, and when followed by a verb or an adjective, we insert ni and mitai becomes mitaini.',
		examples: [
			{ jp: '私の夫はプロレスラーみたいです。', en: 'My husband looks like a professional wrestler.' },
			{ jp: '雨が降ったみたいだ。', en: 'It looks like it has rained.' },
			{ jp: 'お姫様みたいなドレスだね。', en: "That's a princess-like dress." },
			{ jp: 'トムさんは、プロの歌手みたいに歌が上手だ。', en: 'Tom is as good at singing as a professional singer.' },
		],
		tags: ['n4', 'adjective'],
	},
	{
		id: 'you-looks-like-adjectives',
		title: '...よう - it appears that...',
		text:
			'[noun] + の + よう\n[verb] + よう\n\nYō has the same meaning and function as mitai, with the distinction being that yō has a more formal connotation.',
		examples: [
			{ jp: 'トムさんは日本に行くようです。', en: 'It appears that Tom is going to go to Japan.' },
			{ jp: '私の姉はモデルのようだ。', en: 'My sister looks like a model.' },
			{ jp: 'アンソニーは日本人のように日本語を話す。', en: 'Anthony speaks Japanese like a Japanese person.' },
			{ jp: 'お姫様のようなドレスが欲しい。', en: 'I want a princess-like dress.' },
		],
		tags: ['n4', 'adjective', 'verb', 'noun'],
	},
	{
		id: '',
		title: '',
		text: '',
		examples: [],
		tags: ['n4', 'adjective'],
	},
]
