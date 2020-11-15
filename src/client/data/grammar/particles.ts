export const particles: CardT[] = [
	{
		id: 'no-possesion',
		title: 'の - possession',
		text:
			'の is a particle used to indicate possession similar to the English possessive "\'s".\n\nNormally, in the structure A no B, B belongs to A, however, many nouns act like adjectives when followed by no, as demonstrated in examples #2 and #3.\nWhen it is obvious what the first noun possesses, we can omit the second noun.\n\nCategory: when the first noun specifies the category of the second noun, you can use の between the two nouns (英語の先生, さくらの木).\n\nOrigin and Material: When the first noun specifies the origin, creator, or material of the second noun, you can use の between the two nouns (ドイツの車, 木のテーブル).\n\nAttribute: の can specify what group one belongs to (Japanesepod101のピーターです)。\n\nExplanatory remarks: To add explanatory remarks, insert an apposition with the particle no.\nこちらは、社長の佐藤さんです。\n私の友だちのアリサはアメリカ人です。\n\nPosition and Location: Use の between nouns and words that indicate position to describe a position or location (テーブルの上, 駅の前).',
		tags: ['n5', 'particle'],
		examples: [
			{ jp: 'あなたの名前はなんですか。', en: "What's your name?" },
			{
				jp: '明日から英語のテストが始まります。',
				en: 'English tests start tomorrow. (Lit. Tests of English start tomorrow.)',
			},
			{ jp: '彼女は音楽の先生をしています。', en: 'She is a music teacher. (Lit. She is a teacher of music.)' },
		],
	},
	{
		id: 'ka-question',
		title: 'か - question',
		text:
			'Ka is a sentence-ending particle used to change a declarative statement into a yes-no question, or used in combination with interrogative words such as nani, dare, etc. to ask an open-ended question.\n\nInformal sentences: using ka after an informal form is usually representative of male speech and can sound a little rough.\nFor informal speech, we omit the copula da that comes after na-adjectives and nouns (電車は便利だ。→ 電車は便利か。).\n\nSuggestions and Invitations, when we attach the sentence-ending particle ka to a negative sentence, it forms a negative question. We often use this grammar for suggestions or invitations (明日、映画をみませんか。).',
		examples: [{ jp: '明日時間がありますか', en: 'Do you have any [free] time tomorrow?' }],
		tags: ['n5', 'particle', 'sentence ending particle'],
	},
	{
		id: 'ka-indirect-question',
		title: 'か - indirect or embedded question',
		text:
			'か follows informal speech when forming an indirect question or an embedded question. When a yes-no question is embedded inside a sentence, dō ka (どうか) often follows ka (か) (ex. 3).',
		examples: [
			{ jp: '車を買うかわかりません。', en: "I don't know whether I'll buy a car." },
			{ jp: 'これが何かわかりません。', en: "I don't know what this is." },
			{ jp: '車を買うかどうかわかりません。', en: "I don't know whether I'll buy a car or not." },
		],
		tags: ['n5', 'particle', 'informal'],
	},
	{
		id: 'ka-alternative',
		title: 'か - alternative',
		text:
			'The particle ka comes after choices and indicates alternatives. We often omit the last ka. It corresponds to "or" or "whether or not" in English.',
		examples: [{ jp: '紅茶かコーヒー(か)が飲みたい。', en: 'I want to drink tea or coffee.' }],
		tags: ['n5', 'particle'],
	},
	{
		id: 'no-ending',
		title: 'の - colloquial question, explanation, emphasis',
		text:
			'■ Colloquial question\nWhen you attach の at the end of an informal sentence, the sentence turns to a question (ex. 1). The intonation rises at の. For na-adjectives and nouns, drop the da that comes after them and insert na (ex. 2).\n\n■ Softening the Statement\nThe sentence-ending particle no said with falling intonation softens the statement. Women and children usually use no in this way (ex. 3).\n\n■ Explanation\nの can also come at the end of a sentence when explaining something. This usage of no sounds feminine.',
		tags: ['n5', 'particle', 'sentence ending particle', 'informal'],
		examples: [
			{ jp: '今日、何するの。(↑)', en: 'What are you going to do today?' },
			{ jp: '電車は便利なの？', en: 'Are trains convenient?' },
			{ jp: '学校に行くの。(↓) ', en: "I'm going to go to school." },
		],
	},
	{
		id: 'e-ni-destination',
		title: 'へ / に - to, towards',
		text:
			'に 	indicates a place toward where someone or something moves. It is preceded by the name of the place and followed by a verb which indicates a moving action such as iku(行く).\n\nHowever, when に indicates the purpose of the movement, or when に indicates the movement from a larger place to a smaller place, the particle へ cannot replace に.',
		tags: ['n5', 'particle'],
		examples: [
			{ jp: 'この電車は赤坂へ行きますか。', en: 'Does this train go to Akasaka?' },
			{ jp: '映画をみに行く', en: 'to go to see a movie' },
			{ jp: '部屋にはいる', en: 'to enter a rooｍ' },
			{ jp: 'タクシーに乗る', en: 'to get in a taxi' },
			{ jp: '友達へ電話をした。', en: 'I called my friend.' },
		],
	},
	{
		id: 'ni-time',
		title: 'に - time',
		text:
			'に indicates a point of time when something takes place. It\'s equivalent to "in," "on," or "at" in English.\n\nThere are some time expressions which に cannot come after: asa ("morning"), kyō ("today"), konshū ("this week"), rainen ("next year"), and so on. Generally speaking, we cannot attach に to relative time expressions, only specific time expressions.',
		tags: ['n5', 'particle'],
		examples: [{ jp: '六月に日本へ行きます。', en: "I'm going to Japan in June." }],
	},
	{
		id: 'ni-frequency',
		title: 'に - frequency',
		text: 'に indicates the frequency that an action takes place.',
		tags: ['n5', 'particle'],
		examples: [{ jp: '一日に三回、歯をみがきます。', en: 'I brush my teeth three times a day.' }],
	},
	{
		id: 'ni-existence',
		title: 'に - existance',
		text:
			'The particle ni indicates existence, that is, it marks the location where a person or thing exists. Ni can follow either a concrete or an abstract place.\n\nAlong with verbs that express existence such as aru and iru, we often use the particle ni with certain verbs such as sumu ("to live") and tsutomeru ("to work for"), where it marks the location.',
		tags: ['n5', 'particle'],
		examples: [
			{ jp: '警察が家の前にいます。', en: 'The police are in front of my house.' },
			{ jp: 'ケンはロンドンに住んでいる。', en: 'Ken lives in London.' },
			{ jp: 'ケンは銀行に勤めている。', en: 'Ken works for a bank.' },
		],
	},
	{
		id: 'de-place',
		title: 'で - place',
		text: 'The particle de marks where an action takes place. にて - formal version.',
		tags: ['n5', 'particle'],
		examples: [{ jp: '東京で会いましょう。', en: 'See you in Tokyo.' }],
	},
	{
		id: 'o-movement',
		title: 'を - movement',
		text:
			'Use the particle o with verbs that describe motion such as aruku ("to walk"), tobu ("to fly"), wataru ("to cross"), magaru ("to turn"), and so on.',
		tags: ['n5', 'particle'],
		examples: [
			{ jp: '毎朝、公園を歩きます。', en: 'I walk through the park every morning.' },
			{ jp: 'その角を曲がって、橋を渡ってください。', en: 'Please turn that corner and cross the bridge.' },
		],
	},
	{
		id: 'to-quote',
		title: 'と - quote',
		text:
			'The particle と (to) marks a quotation and is required for both direct and indirect quotations. We often use it with the verb mōsu (申す), meaning "to humbly say," and we use it to give one\'s name in a formal manner.\n\nWe often replace the quotation particle to with tte and we often drop the first -i sound in imashita or -ita in everyday conversation.',
		tags: ['n5', 'particle'],
		examples: [
			{
				jp: 'ケントは「来年イギリスに帰ります」と言った。',
				en: "Kent said, 'I'm going to go back to England next year.'",
			},
			{ jp: 'もう帰ったって思ってたよ。', en: "I thought you'd already gone home." },
			{ jp: '私は、ピーターギャランテともします。', en: 'My name is Peter Galante.' },
		],
	},
	{
		id: 'to-and',
		title: 'と - and, with',
		text:
			'と can be used to connect nouns and pronouns, mark the party that the subject will do something with, and to make comparisons.\n\nWhen you use と to list nouns and noun phrases, it implies that your list is exhaustive (ex. 1). To make an inexhaustive list, use や or とか.',
		tags: ['n5', 'particle'],
		examples: [{ jp: '青色と紫が好きです。', en: 'I like blue and purple (and no other colors).' }],
	},
	{
		id: 'ya-partial-list',
		title: 'や - partial list',
		text:
			'や shows that the list is only partial. It corresponds to "...and...and such" or "things like...and...." in English.',
		tags: ['n5', 'particle'],
		examples: [
			{ jp: 'くつやかばんを買いました。		', en: '"I bought things such as shoes and a bag." (Among other items)' },
		],
	},
	{
		id: 'shi-reasons',
		title: 'し - list of reasons',
		text:
			'[verb: dict-form] + し\n[i-adj] + し\n[na-adj, noun] + だ + し\n\nShi is a conjunction used to give two or more reasons or causes. It\'s often used as an emphasis. This conjunction shi can be translated as "and what\'s more" or "so."',
		examples: [
			{
				jp: '下山先輩は話しやすいし、性格いいし、私は下山先輩が大好き。',
				en:
					'Since Mr. Shimoyama is easy to talk to and has a good personality, I like him a lot.\n(The speaker inverted the first clause and second clause to emphasize the fact that she likes him so much.)',
			},
		],
		tags: ['n4', 'particle'],
	},
	{
		id: 'mo-also',
		title: 'も - also, too',
		text:
			'は (wa) ⇒ も (mo)\nが (ga) ⇒ も (mo)\nを (o) ⇒ も (mo)\nへ (e) ⇒ へも (e mo)\nに (ni) ⇒ にも (ni mo)\nで (de) ⇒ でも (de mo)\n\nThe construction ~mo ~mo corresponds to English "both...and...," or "neither...nor...." Compared with the usage of the particle to, this construction puts more emphasis on the each item.',
		tags: ['n5', 'particle'],
		examples: [{ jp: 'の父も母も歌手です', en: 'Both my father and my mother are singers.' }],
	},
	{
		id: 'mo-emphatic-marker',
		title: 'も - as much/many as',
		text: ' も (mo) emphasizes the amount or the extent of something.',
		tags: ['n5', 'particle'],
		examples: [
			{
				jp: '日本から南アフリカまで18時間もかかります。',
				en: 'It takes a good eighteen hours (as long as eighteen hours) to get to South Africa from Japan.',
			},
			{
				jp: 'ケイトは漢字を5000も知っています。',
				en: 'Kate knows as many as five thousand kanji.',
			},
		],
	},
	{
		id: 'ka-mo-wh-words',
		title: 'か and も - WH-words',
		text:
			'WH-word ＋ka ⇒ "some..."\nWH-word ＋ mo in an affirmative sentence ⇒ "every..."\nWH-word ＋ mo in a negative sentence ⇒ "no..."\n\n何 - what\n何か -something\n何も - nothing\n\n誰 - who\n誰か - someone\n誰も anyone/noone\n\nいつ - when\nいつか - sometime\nいつも - always/never\n\nどこ - where\nどこか - somewhere\nどこも - everywhere/nowhere',
		tags: ['n5', 'particle'],
		examples: [
			{
				jp: 'A: 何か買いましたか。\n B: 何も買いませんでした。',
				en: "A: Did you buy anything?\nB:  No, I didn't buy anything.",
			},
			{
				jp: 'A: 夏休みにどこか行きますか。\n B: どこも、こむので、どこもいきません。',
				en:
					"A: Are you going somewhere for summer vacation?\nB: Everywhere is going to be crowded so I'm not going anywhere.",
			},
		],
	},
	{
		id: 'demo-wh-words',
		title: 'でも - WH-words',
		table: [
			['何', '何でも', 'no matter what it is', 'anything'],
			['いつ', 'いつでも', 'no matter when it is', 'any time'],
			['何時', '何時でも', 'no matter what time it is', 'any time'],
			['どこ', 'どこでも', 'no matter where it is', 'anywhere'],
			['誰', '誰でも', 'no matter who it is', 'anyone'],
			['どれ', 'どれでも', 'no matter which it is.'],
		],
		examples: [{ jp: 'A:何を食べましょうか。\nB:何でもいいですよ。', en: 'A: What shall we eat?\nB: Anything is OK.' }],
		tags: ['n5', 'particle'],
	},
	{
		id: 'ga-in-question',
		title: 'が in question',
		text:
			'In a question, when a question word is the nominative (basically the subject of the sentence), the particle ga comes after it.　When answering questions, we mark the nominative by the particle ga.',
		tags: ['n5', 'particle'],
		examples: [
			{ jp: 'だれが佐長ですか。', en: 'Who is the president?' },
			{ jp: 'どのバスが空港に行きますか。', en: 'Which bus goes to the airport?' },
		],
	},
	{
		id: 'ga-ability',
		title: 'が - ability',
		text:
			'Ga marks the object of verbs of ability such as dekiru ("can do"), wakaru ("understand"), the potential form of verbs and object for adjectives of ability such as jōzu ("good at") or heta ("bad at") with ga as well..',
		tags: ['n5', 'particle'],
		examples: [
			{ jp: '私はチェスができます。', en: 'I can play chess.' },
			{ jp: '私はラテン語がわかります。', en: 'I understand Latin.' },
			{ jp: '彼女は中国語が上手だ。', en: "She's good at Chinese." },
		],
	},
	{
		id: 'ga-existance',
		title: 'が - existence',
		text: 'Used with verbs that express existence: ある,　いる.',
		tags: ['n5', 'particle'],
		examples: [{ jp: '時間がありますか。', en: 'Do you have time?' }],
	},
	{
		id: 'ga-desire',
		title: 'が - object of desire',
		text:
			'We mark the object of an adjective of desire such as hoshii ("want") or [verb stem]＋tai ("want to [verb]") with the particle ga.',
		tags: ['n5', 'particle'],
		examples: [{ jp: 'お茶が飲みたい。', en: 'I want to drink tea.' }],
	},
	{
		id: 'ga-necessity',
		title: 'が - object of necessity',
		text:
			'We mark the object of an adjective or verb of necessity such as iru ("to need") or hitsuyō ("necessary") with the particle ga.',
		tags: ['n5', 'particle'],
		examples: [
			{ jp: '時間が要る', en: 'I need time.' },
			{ jp: '時間が必要だ。', en: 'I need time.' },
		],
	},
	{
		id: 'ga-emotion',
		title: 'が - object of emotion',
		text:
			'We mark the object of an adjective of emotion such as suki ("likable"), or kirai ("dislikable"), or shinpai ("worried") with the particle ga.',
		tags: ['n5', 'particle'],
		examples: [
			{ jp: 'アニメが好きだ', en: 'I like anime.' },
			{ jp: '天気が心配だ。', en: "I'm worried about the weather." },
		],
	},
	{
		id: 'ga-wa-negative-answer',
		title: 'が and は in a negative sentences',
		text:
			'If in the question が precedes certain verbs or adjectives and the answer is negative, replace が with は in it.',
		tags: ['n5', 'particle'],
		examples: [
			{
				jp: 'ケントさんは漢字が読めますか。\nいいえ、漢字は読めません。',
				en: "Kent, can you read Chinese characters?\nNo. I can't read Chinese characters.",
			},
		],
	},
	{
		id: 'wa-in-question',
		title: 'は in question ',
		text:
			'In a question, when a question word such as nani ("what") or dare ("who") is in the predicate, we mark the nominative (which is basically the subject) with the particle wa. We also mark the nominative by wa in the answer to the question.',
		tags: ['n5', 'particle'],
		examples: [{ jp: 'これは何ですか。', en: "What's this?" }],
	},
	{
		id: 'wa-contrast',
		title: 'は - contrastive marker',
		text:
			"が ⇒ は\nを ⇒ は\nへ ⇒ は or へは\nに (destination) ⇒ は or には\nに ⇒ には\nで ⇒ では\nと ⇒ とは\nから ⇒ からは\nまで ⇒ までは\n\nSometimes, only one item or idea is marked by wa and mentioned in the sentence. In that case, the speaker is trying to imply something:\n犬は好きです。\nI like dogs, as opposed to [something else].\n\nSometimes, it's not clear whether the particle wa marks the topic or shows contrast. Here are the general rules for wa showing contrast:\n\n1. Stress - when we use wa as a contrastive marker, we sometimes stress the ...wa part:\n「私は」虫が好きです。\nI don't about you or anyone else, but) I like insects.\n\n2. Two or More Wa Particles in One Sentence - when more than one wa appears in one sentence, the first wa usually indicates the topic and we use the rest to show contrast:\n私は英語はわかります。\nI understand English.\n\n",
		tags: ['n5', 'particle'],
		examples: [
			{
				jp: '魚を食べます。\n肉を食べません。\n魚は食べます。でも肉は食べません。',
				en: "I eat fish,\nI don't eat meat.\nI eat fish, but I don't eat meat.",
			},
		],
	},
	{
		id: 'yo-conviction',
		title: 'よ - conviction, assertion',
		text:
			'■ Strong conviction or assertion\nThe particle yo expresses the speaker\'s strong conviction or assertion about something that it is assumed that the listener doesn\'t know. It is equivalent to the expressions "I tell you" or "you know" in English (ex. 1).\n\n■ Used with requests\nThe particle ne can come before either formal or informal requests. However, requests that end in yo are stronger than requests that end in ne.\n\n■ Followed by the particle ne\n As we use ne to seek confirmation and yo to indicate assertion, "sentence ＋ yo ne" means "I assert that..., but don\'t you agree?" or "I assert that..., but am I right?" This ne has rising intonation (ex. 3).',
		tags: ['n5', 'particle', 'sentence ending particle'],
		examples: [
			{
				jp: '今日は月曜日ですね。\n違いますよ。火曜日ですよ。',
				en: "Today's Monday, isn't it?\nNo, it's Tuesday (you know).",
			},
			{
				jp: 'メールをくださいよ。',
				en: 'Please be sure to e-mail me, okay?',
			},
			{
				jp: '会議は3時からですよね。',
				en: "The meeting is at three o'clock, am I right?",
			},
		],
	},
	{
		id: 'ne',
		title: "ね - isn't it, soft request, seeking agreement",
		text:
			'The particle ne seeks agreement or confirmation from the listener. It corresponds to a tag question in English, such as "isn\'t it?"/ "doesn\'t it?"/"aren\t you?"/"don\'t you?" and so on (ex. 1).\n\nWe also use ne to soften a request (ex. 2).\n\nWhen we prolong ne, it often expresses the speaker\'s feeling or excitement. In other words, nē creates an exclamatory sentence (ex. 3).\n\nFollowed by the particle ne,\nAs we use ne to seek confirmation and yo to indicate assertion, "sentence ＋ yo ne" means "I assert that..., but don\'t you agree?" or "I assert that..., but am I right?" This ne has rising intonation. (ex. 4',
		tags: ['n5', 'particle', 'sentence ending particle'],
		examples: [
			{ jp: '今日は寒いね。', en: "It's cold today, isn\t it?" },
			{ jp: 'メールをくださいね。', en: 'Please e-mail me, would you?' },
			{ jp: 'わ～。これ、おいしいねぇ。', en: 'Wow. This is really delicious!!' },
			{
				jp: '会議は3時からですよね。',
				en: "The meeting is at three o'clock, am I right?",
			},
		],
	},
	{
		id: 'wa-softening',
		title: 'は - assertion, desire, intent, emotion, softening',
		text: "■ Indicates the speaker's feeling (ex. 1)",
		tags: ['n5', 'particle', 'sentence ending particle'],
		examples: [{ jp: 'うわ～。これ、おいしいわ。', en: 'Wow. How delicious it is!' }],
	},
	{
		id: 'ze-zo',
		title: 'ぜ and ぞ - emphasis',
		text:
			'Male speakers use the particle zo in informal speech to add force to a sentence. It corresponds to "I tell you" or "you know" in English. Native Japanese speakers claim zo has a somewhat stronger connotation than ze, and also that whereas zo is rather self-oriented, ze is usually used to tell someone something emphatically. Please note that both zo and ze are informal expressions so you cannot use them with formal speech.\n\nぜ - making a declaration (ex. 1,2).\n\n ぞ - indicating a command (ex. 3).\n\n ぞ - self-directed speech (ex.4).',
		tags: ['n5', 'particle', 'informal', 'sentence ending particle'],
		examples: [
			{ jp: '頑張るぜ。', en: "I'm going to give it my best shot." },
			{ jp: '行こうぜ。', en: "Let's go!" },
			{ jp: '帰るぞ。', en: "Let's go home" },
			{ jp: '頑張るぞ！', en: 'I can do it!' },
		],
	},
	{
		id: 'na-softening-agreement',
		title: 'な - softening assertion, seeking agreement, negative imperative',
		text:
			"■ Softening the Speaker's Feeling or Assertion\n Male speakers often use this na. Speakers often prolong the final vowel, a, and pronounce this word as nā (ex 1,2).\n\n■ Seeking Agreement from the Listener\nIn this usage, the speaker does not prolong the final vowel. Male speakers usually use this na.\n\n■ Expressing a Negative Imperative\n We use the structure [dictionary form of a verb] ＋ na to express an informal negative imperative. In other words, it is a very strong command saying not do to something. It's equivalent to \"Don't...\" in English (ex. 5).",
		tags: ['n5', 'particle', 'sentence ending particle'],
		examples: [
			{ jp: 'この車は高いなぁ。', en: 'What an expensive car it is!' },
			{ jp: 'そうだなぁ。', en: 'Right...' },
			{ jp: '今日は寒いな。', en: "It's cold today, isn't it?" },
			{ jp: '明日は日曜日だな。', en: "It's Sunday tomorrow, right?" },
			{ jp: '来るな。', en: "Don't come." },
		],
	},
	{
		id: 'kana',
		title: 'かな - uncertainty, I wonder',
		text:
			'The particle kana expresses the speaker\'s uncertainty about something. We use it as a question to oneself or as a request to the listener. It\'s equivalent to "I wonder..." in English. Speakers sometimes prolong the last vowel, a, as in kanā.',
		tags: ['n5', 'particle'],
		examples: [{ jp: 'どうしてかな。', en: 'I wonder why.' }],
	},
	{
		id: 'jyan',
		title: "じゃん - isn't it",
		text:
			'Jan is the contracted form of janai, which means "isn\'t it." People in a comparatively young generation use this particle to confirm or to criticize something in an informal way.',
		tags: ['n5', 'particle', 'informal'],
		examples: [
			{ jp: 'いいじゃん。', en: "That's good, isn't it!" },
			{ jp: '昨日、言ったじゃん。', en: "I told you yesterday! (Didn't I?!)" },
		],
	},
	{
		id: 'de-means-materials',
		title: 'で - means or materials',
		text:
			'■ Means or Tool Used to Do Something\nThis is the equivalent of "by" or "with" in English.\nMeans of Transportation (ex. 1).\nMethod/Tool of Communication (ex. 2, 3).\nInstrument/Tool (ex. 4).\n\n■ Materials Used for Making Something\nDe also marks the material something is made of or from. It\'s the equivalent of "with," "from," or "out of" in English (ex. 5). Note that de can mark the material in situations where the raw material used is obvious from the product and when it is not obvious to the naked eye.',
		tags: ['n5', 'particle'],
		examples: [
			{ jp: 'わたしは電車で学校に行く。', en: 'I go to school by train.' },
			{ jp: '友達と電話で話す。', en: 'I talk to my friend on the phone.' },
			{ jp: '友達と英語で話す。', en: 'I talk to my friend in English.' },
			{ jp: '包丁でかぼちゃを切る。', en: 'I cut the pumpkin with the knife.' },
			{ jp: '酒は米で作ります。', en: 'Sake is made from rice.' },
		],
	},
	{
		id: 'kara-material',
		title: 'から - material',
		text:
			'から indicates material something is made from. The equivalent in English is "from."\n\nWe use both kara and de to mark the material, and they are therefore similar in usage. However, kara marks the material that doesn\'t retain its original state. When the nature of the material is obvious, you should use de. Please study the following sentences.\n\n	When the product is the result of material going through somewhat complex process, you can mark the material either with de or kara. When the material still retains its original state, you should mark the material with de, not kara.',
		tags: ['n5', 'particle'],
		examples: [{ jp: '酒は米から作ります。', en: 'Sake is made from rice.' }],
	},
	{
		id: 'yori-no-hou-ga',
		title: 'より, の方 が - comparison',
		text:
			' When comparing two items, we often use the particles yori, meaning "than," and no hō, meaning "the one on this side/direction." We place yori after the item that is the lesser of the two, while we place no hō after the item that is superior.\nA yori = more than A\nB no hō ga ____ = B is more ____\n\nWhen choosing one out of a list of two or more items, the particle ga marks the choice the speaker makes. When a question word is the subject, the particle ga comes after it.\n\nNo hō is not necessary, but if you do use it, remember that you can only use it when you are comparing two items.',
		tags: ['n5', 'particle'],
		examples: [
			{ jp: '猫より犬の方が好きです。', en: 'I like dogs better than cats.' },
			{ jp: 'ご飯の方がパンより安いです。', en: 'Rice is cheaper than bread.' },
			{ jp: '一月より二月（のほう）が 寒いです。', en: 'February is colder than January.' },
			{ jp: '八月が一番暑いです。', en: 'August is the hottest.' },
			{ jp: 'どちら（のほう）がはやいですか。', en: 'Which one is faster?' },
		],
	},
	{
		id: 'de-category',
		title: 'で - in, throughout',
		text:
			'In a superlative sentence, de marks the area or category that the choices belong to. When de expresses the area or category, sometimes the phrase no naka precedes it.',
		tags: ['n5', 'particle'],
		examples: [
			{ jp: 'エベレストは世界で一番高い山です。', en: 'Mt. Everest is the highest mountain in the world.' },
			{ jp: '日本食の中で、寿司が一番好きです。', en: 'I like sushi out of all Japanese food.' },
		],
	},
	{
		id: 'o-departure',
		title: 'を - place that someone departs from',
		text:
			'を can mark the place that someone leaves or departs from. It usually implies moving from a smaller place to a larger place, but usually we only state the smaller place in the sentence.',
		tags: ['n5', 'particle'],
		examples: [
			{ jp: '毎朝、７時に家を出ます。', en: 'I leave home at seven every morning.' },
			{ jp: '大学を卒業しました。', en: 'I graduated from college.' },
		],
	},
	{
		id: 'o-ni-transport',
		title: 'を and に - vehicles and means of transportation ',
		text:
			'When talking about a vehicle or a means of transportation, we almost always use the particle o with the verb oriru (降りる), meaning "to get off," "to disembark," or "to dismount," and we almost always use the particle ni with the verb noru (乗る) meaning "to get on," "to ride," or "to board."',
		tags: ['n5', 'particle'],
		examples: [
			{ jp: '赤坂で電車を降りました', en: 'I got off train at Akasaka.' },
			{ jp: '北海道で馬に乗りました。', en: 'I rode a horse in Hokkaido.' },
		],
	},
	{
		id: 'de-reason',
		title: 'で - reason',
		text:
			'で - indicates the reason of something. De comes after a noun that is a reason for something. It\'s equivalent to "and," "because of," or "due to" in English. Something beyond a person\'s control often precedes the de indicating the reason.',
		tags: ['n5', 'particle'],
		examples: [{ jp: 'かぜで学校を休みました。', en: "I didn't go to school because I had a cold." }],
	},
	{
		id: 'kara-reason',
		title: 'から - reason',
		text:
			'The conjunction kara follows a sentence and comes after a cause or reason. It corresponds to "because" or "since" in English. When using with nouns and na-adjectives, add だ (or だった for past tense) before から [na adjective / noun] ＋ da kara.',
		tags: ['n5', 'particle'],
		examples: [
			{ jp: 'iPhoneは便利だから人気がある。', en: "The iPhone is popular because it's so useful." },
			{ jp: '今日は日曜日だったから、たくさん人がいた。', en: 'There were a lot of people because today was Sunday.' },
		],
	},
	{
		id: 'node-reason',
		title: 'ので - reason',
		text:
			'ので indicates a reason or cause. It is interchangeable with kara. However, node is more objective than kara. Because of that, node carries a softer and more polite connotation. When using with nouns and na-adjectives, add だ (or だった for past tense) before から [na adjective / noun] ＋ da kara.',
		tags: ['n5', 'particle'],
		examples: [
			{ jp: 'iPhoneは便利なので人気がある。', en: " The iPhone is popular because it's so useful." },
			{
				jp: '今日は日曜日だったので、たくさん人がいる。',
				en: 'There were a lot of people because today was Sunday.',
			},
		],
	},
	{
		id: 'wa-ga-adjective-construction',
		title: '[Noun 1] ha [Noun 2] が [adjective]',
		text:
			'N2 is a part of N1 or a member of N1, and the following adjective gives information about N2. In other words, N1 possesses N2, and the following adjective explains N2.\n\nWhen N1 is a person, the following "[N2] ga [adjective]" part describes the physical or mental state of N1.\n\nWhen N2 is a part of N1 or a member of N1, the following adjective explains the characteristic of N2.',
		tags: ['n5', 'particle'],
		examples: [
			{ jp: '私は頭が痛い。', en: 'I have a headache.' },
			{ jp: 'ケントは気が短い。', en: 'Kent is short-tempered.' },
			{ jp: 'この部屋は窓が大きい。', en: 'This room has big windows.' },
			{ jp: '', en: '' },
			{ jp: '', en: '' },
		],
	},
	{
		id: 'ga-surprise',
		title: 'が - surprise',
		text:
			'When talking about something surprising or unexpected, the particle ga marks the topic or subject, while the particle wa indicates a state or event that always happens.',
		tags: ['n5', 'particle'],
		examples: [
			{ jp: '空が赤い。', en: 'The sky is red!' },
			{ jp: '日本のポストは赤い。', en: 'Mailboxes in Japan are red.' },
		],
	},
	{
		id: 'ga-no-relative-clause',
		title: 'が and の in relative clause',
		text:
			'The particle ga, not wa, marks the topic or subject in the relative clause. Please compare the following two sentences.\n\n私は傘を落とした。\n"I dropped/lost an umbrella."\n⇒ Wa marks the subject of the sentence, watashi.\n\n私が落とした傘\n"The umbrella I lost"\n⇒ Ga marks the subject of the phrase, watashi, because it\'s in the relative clause.\n\nWhen you combine the following two sentences using a relative clause...\n\n私は車を買った。\n "I bought a car."\n\nその車は安かった。\n"That car is inexpensive."\n\nyou end up with...\n\n私が買った車は、安かった。\n"The car I bought was inexpensive."\n\n\nThe particle no can replace ga and mark the subject in the clause that modifies the noun.',
		tags: ['n5', 'particle'],
		examples: [
			{ jp: 'わたしが読んだ本は難しかった。\nわたしの読んだ本は難しかった。', en: 'The book I read was difficult.' },
			{
				jp: 'わたしが働いている会社は小さい。\nわたしの働いている会社は小さい。',
				en: 'The company I work for is small.',
			},
		],
	},
	{
		id: 'de-amount',
		title: 'で - amount of money or time',
		text: 'Corresponding to "within...," "for...," or "in...," in English',
		tags: ['n5', 'particle'],
		examples: [
			{ jp: '私はその本を１時間で読んだ。', en: 'I read that book in an hour.' },
			{ jp: 'わたしは友達から車を３００ドルで買った。', en: 'I bought a car from a friend for three hundred dollars.' },
		],
	},
	{
		id: 'de-finish-time',
		title: 'で - time or age something finishes',
		text:
			'仕事は五時で終わる。\n"Work finishes at five." (= "Work goes until five o\'clock.")\n\nWe can replace this de with the particle ni. When we use ni, it creates a general statement that is simply telling the time work finishes, while usage of de emphasizes that something continues until a point in time.',
		tags: ['n5', 'particle'],
		examples: [{ jp: '', en: '' }],
	},
	{
		id: 'made-until',
		title: 'まで - until',
		text: 'The particle made marks the time or place an action ends.',
		tags: ['n5', 'particle'],
		examples: [
			{
				jp: 'ミーティングは五時までです。',
				en: 'The meeting finishes at five. (Literal meaning: The meeting is until five.)',
			},
		],
	},
	{
		id: 'made-extent',
		title: 'まで - extent',
		text:
			'Made indicates a limit, the extent, or an unexpected object. It corresponds to "as far as," "up to," or "even" in English.',
		tags: ['n5', 'particle'],
		examples: [
			{
				jp: 'ディズニーランドでは子供から大人まで楽しめる。',
				en: 'At Disneyland, not only children but even adults can have fun.',
			},
			{
				jp: '子供まで自分の検体電話持っている',
				en: 'Even children have their own cellphones',
			},
			{
				jp: '私の猫は魚が好きだ。骨まで食べる。',
				en: 'My cat loves fish. He even eats the bones.',
			},
		],
	},
	{
		id: 'de-condition',
		title: 'で - condition',
		tags: ['n5', 'particle'],
		examples: [{ jp: '私は一人で東京に住んでいる。', en: 'I live alone in Tokyo.' }],
	},
	{
		id: 'no-pronoun',
		title: 'の - pronoun',
		text:
			'We can use no in place of a noun when it would otherwise sound repetitive to repeat the noun. It corresponds to "one" in English; however, unlike "one," we cannot use no by itself. ',
		tags: ['n5', 'particle', 'noun'],
		examples: [
			{ jp: 'その、青いお皿取って。\nその、青いの取って。', en: 'Pass me the blue plate.\nPass me the blue one.' },
		],
	},
	{
		id: 'ni-suru-decide on',
		title: 'にする - "decide on ---" or "make it ---."',
		examples: [
			{
				jp: 'A: 私は ラーメンにする。ファブリツィオは？\n B: 私は サラダにします。',
				en: "I've decided on rāmen.(= I'll have rāmen.) How about you, Fabrizio?\nI've decided on salad.",
			},
		],
		tags: ['n5', 'particle'],
	},
	{
		id: 'used-for',
		title: '[noun] + 用 - used for/by [noun]',
		examples: [
			{ jp: 'ハイキング用のくつ', en: 'hiking shoes' },
			{ jp: '子供用のいす', en: "children's chair" },
		],
		tags: ['n4', 'noun', 'particle'],
	},
	{
		id: 'zutsu-even-distribution',
		title: 'ずつ - even distribution, apiece, each',
		examples: [
			{ jp: '子供たちはクッキーを５個ずつ食べた。', en: 'The children ate five cookies each.' },
			{ jp: '彼の病気は少しずつ良くなった。', en: 'His sickness got better little by little.' },
			{ jp: 'しょくごに２じょうずつ飲んでください。', en: 'Please take two tablets after every meal.' },
		],
		tags: ['n4', 'particle'],
	},
	{
		id: 'just-only-dake',
		title: '...だけ - only...',
		text:
			'The particles "ga" and "o" come after dake, but they can be left out in informal speech.\nOther particles such as "e" "ni" "de" and so on can come either before or after dake.',
		examples: [
			{ jp: 'ひらがなが読める。\nひらがなだけ が 読める。', en: 'I can read Hiragana.' },
			{ jp: 'おきなわだけに行った。\nおきなわにだけ行った。', en: 'I only went to Okinawa.' },
		],
		tags: ['n4', 'particle'],
	},
	{
		id: 'only-nothing-but-sika',
		title: '...しか - only...',
		text:
			'The particles "ga" and "o" are replaced with shika.\nOther particles such as "e" "ni" "de" and so on come before shika.',
		examples: [
			{ jp: 'ひらがなが読める。\nひらがなしか読めない。', en: 'I can read Hiragana.' },
			{ jp: 'おきなわだけに行った。\nおきなわにしか行かなかった。', en: 'I only went to Okinawa.' },
		],
		tags: ['n4', 'particle'],
	},
	{
		id: 'bakari-only',
		title: '[verb/noun] + ばかり',
		text:
			'[verb: past-form] + ばかり - just [verb]\n[verb: dict-form] + ばかり - the only thing left to do is to/ready to [verb]\n[verb: te-form] + ばかり - only to [verb]\n[noun] + ばかり - only [noun]',
		examples: [
			{
				jp: '昼ごはんを食べたばかりなので、まだお腹がすいていない。',
				en: "Since I've just had lunch, I'm not hungry yet.",
			},
			{
				jp: '今日テストを受けた。あとは、結果を待つばかりだ。',
				en: 'I took the exam today. The only thing left to do is to wait for the result.',
			},
			{ jp: ' 娘は遊んでばかりだ。', en: 'My daughter is doing nothing but playing around.' },
			{
				jp: '娘はご飯を食べないで、甘いものばかり食べる。',
				en: 'My daughter eats only sweets without eating a proper meal.',
			},
		],
		tags: ['n3', 'particle', 'verb', 'past-form', 'dict-form', 'te-form'],
	},
	{
		id: 'yori-from',
		title: 'より - from',
		text: '',
		examples: [],
		tags: ['n4', 'particle'],
	},
	{
		id: '',
		title: '',
		text: '',
		examples: [],
		tags: ['n4', 'particle'],
	},
	{
		id: '',
		title: '',
		text: '',
		examples: [],
		tags: ['n4', 'particle'],
	},
]
