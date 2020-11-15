export const constructions: CardT[] = [
	{
		id: 'ni-yotte',
		title: '...によって - depending on...',
		text:
			'--によって means depending on the situation, someone or something. It is equivalent to "depending on --" in English.\n--により can be used in the same meaning as --によって, but --により is used in written Japanese.\n\n\nFormation:\n\n(1) Noun + によって + [something changes] = Something is changed depending on Noun\n\n重さによって値段が変わる。\nThe price differs depending on the weight.\n\nその日の体調によって、運動量を変える。\nAccording to my physical condition, I change how much exercise I do.\n\nIn this case, によって can be replaced by に応じて(に おうじて) or　次第で(しだい で).\n重さに応じて値段が変わる。\nその日の体調次第で、運動量を変える。\n\nThe difference in the nuance between に応じて and 次第で is as follows:\n\nNoun + に応じて + [clause] ⇒　what is stated in the [clause] happens in corresponding with Noun. 応じて is the te-form of 応じる(おうじる) which means "correspond with" or "respond to."\nex. 成績に応じて、クラスが分けられた。\nStudents are divided into classes based on their grade.\n\nNoun + 次第で + [clause] ⇒　what is stated in the [clause] is determined by Noun\nex. 君の話し方次第で、面白く聞こえるかもしれない。\nWhether it sounds interesting or not might be determined by how you talk about it.\n\n\n(2) Noun + によって + [something is different] = Something is different depending on Noun\n\n人によって味の好みは違う。\nひとによってあじのこのみはちがう。\nEach person has different taste of preference.',
		tags: ['n3', 'noun'],
	},
	{
		id: 'kamoshirenai',
		title: '...かもしれない - possible...',
		text:
			'かもしれない is a compound word indicating that something is possible, but that the speaker is uncertain whether or not it is true. It is therefore a very weak form of expressing conjecture, and the degree of certainty expressed by "kamoshirenai" is lower than that expressed by "darou"/"deshou".\n\n"kamoshirenai" is placed at the end of a sentence or clause, and directly follows verbs, adjectives and nouns. The copula should not precede "kamoshirenai", unless it is used in the past tense (i.e. "datta").',
		examples: [{ jp: '明日雨が降るかもしれない。', en: 'It might rain tomorrow.' }],
		tags: ['n4'],
	},
	{
		id: 'nda-explanation',
		title: '...んだ - explanation',
		text:
			'[i-adj, verb] + んだ\n[n-adj, noun] + な + んだ\n\nWe use n da and its formal form, -n desu, for giving and asking for explanations. In written language, we more commonly use no da or no desu. In casual feminine speech, the phrase is shortened down to just no.',
		examples: [
			{ jp: '明日、彼女の両親の家に行くんです。', en: "I'm going to visit my girlfriend's parents. (So I'm nervous.)" },
			{ jp: '私はタバコが嫌いなんです。', en: "I hate smoking. (So please don't smoke.)" },
			{ jp: 'わたしはまだ19歳なんです。', en: "I'm still nineteen years old. (So I can't drink alcohol.)" },
			{ jp: 'どうしたんですか。', en: 'What happened?' },
		],
		tags: ['n4'],
	},
	{
		id: 'to-itte-ita-construction',
		title: '...と言ってた - quotation',
		text:
			'Directly quoted phrase can be in either formal or informal Japanese, depending on how it was said. Note that when we use direct quotes, we need to put them in brackets, known as kagi-kakko.\n\nIn the indirect quote the reported speech is changed to informal Japanese, and subject is taken out.',
		examples: [{ jp: '彼女は「来年結婚します」と言っていた。', en: 'She said "Next year, I\'ll get married."' }],
		tags: ['n4'],
	},
	{
		id: 'to-omou-opinion',
		title: '...と思う - opinion',
		examples: [{ jp: '明日雪が降ると思います。', en: "I think it's going to snow tomorrow." }],
		tags: ['n4'],
	},
	{
		id: 'hoshigatteiru-verbs',
		title: '[noun] + 欲しがっている - [someone else] want [noun]',
		text:
			'This construction literally mean "showing signs of wanting ...".\n\nPlease note that we use the particle o to mark the object the second or third person wants.',
		examples: [{ jp: '太郎は車を欲しがっています。', en: 'It looks as if Taro wants a car.' }],
		tags: ['n4', 'noun'],
	},
	{
		id: 'named-as-construction',
		title: '[name] + という + [noun] - [noun] called [name]',
		text:
			'The phrase to iu (という) is the combination of the quotation-marking particle to and the verb iu, meaning "to say".\n\nPlease note that in informal conversation, we often replace the quotation particle to (と) with tte (って).',
		examples: [
			{ jp: '私の出身は、「つ」というまちです。', en: "I'm from a city called 'Tsu.'" },
			{ jp: 'あの人は 何という人ですか。', en: "What is that person's name?" },
		],
		tags: ['n4', 'noun'],
	},
	{
		id: 'toki-when',
		title: '...時 - when...',
		text:
			'[verb: dict/past-form] + 時\n[adjective] + 時 (ex. 1, 2)\n[noun] + の + 時 (ex. 3)\n\nPlease note that when talking about past actions, the clause before toki can be in either the non-past or past tense (ex. 4).\nSometimes, we insert the particle ni to emphasize the time (ex. 5).',
		examples: [
			{ jp: 'かなしい時、空をみます。', en: "When I'm sad, I look up at the sky." },
			{ jp: 'ひまな時、何をしますか。', en: 'What do you do when you have free time?' },
			{ jp: '雪のとき、車を運転しません。', en: "When it's snowing, I don't drive." },
			{
				jp: '日本にい る時、日本語を勉強した。\n日本にい た時、日本語を勉強した。',
				en: 'When I was in Japan, I studied Japanese.',
			},
			{ jp: '映画館を 出た時に、あなたを 見た。', en: 'It was when I left the movie theater that I saw you.' },
		],
		tags: ['n4', 'verb', 'adjective', 'noun', 'dict-form', 'past-form'],
	},
	{
		id: 'sou-da',
		title: '...そうだ - I heard that...',
		text: '[verb/i-adj] + そう\n[na-adj] + だ + そう\n[sentence] + だ + そう',
		examples: [
			{ jp: '雪男さんのお父さんは医者だそうです。', en: "I heard that Yukio's father is a doctor." },
			{ jp: 'この映画は面白くないそうだ。', en: "I heard that this movie isn't good." },
			{ jp: 'レオパトラはきれいだったそうです。', en: 'They say Cleopatra was beautiful.' },
			{ jp: '彼はどこかの会社の社長だそうだ。', en: "It seems that he's the president of some company." },
		],
		tags: ['n4'],
	},
	{
		id: 'mae-ni-before',
		title: '...前に - before...',
		text: '[verb: dict-form] + 前に\n[noun] + の + 前に',
		examples: [{ jp: '会社を出る前に、電話をしてください。', en: '結婚式の前に、ダイエットした。' }],
		tags: ['n4', 'verb', 'noun'],
	},
	{
		id: 'ato-de-after',
		title: '...後で - after...',
		text: '[verb: past-form] + 後で\n[noun] + の + 後で\n\nWe often omit the particle de in a conversation.',
		examples: [
			{ jp: '会社を出た後、病院に行った。', en: 'After I left the office, I went to the hospital.' },
			{ jp: '仕事の後、映画に行きませんか。', en: 'Would you like to go to a movie after work?' },
		],
		tags: ['n4', 'verb', 'noun'],
	},
	{
		id: 'ageru-construction',
		title: 'あげる - to give',
		text: '[Giver] ＋ は/が ＋ [Recipient] ＋ に ＋ [Object] ＋ を ＋ あげる',
		examples: [
			{ jp: 'わたしは 母に 花を あげる。', en: "I'm going to give my mother flowers." },
			{ jp: 'トムさんは 彼女に 指輪を あげました。', en: 'Tom gave his girlfriend a ring.' },
		],
		tags: ['n4', 'learned'],
	},
	{
		id: 'kureru-construction',
		title: 'くれる - to give',
		text:
			'[Giver] ＋ は/が ＋ [Recipient] ＋ に ＋ [Object] ＋ を ＋ くれる\n\nUsed when the transaction comes toward you or someone in your in-group.',
		examples: [
			{ jp: '母は 私に お金を くれる。', en: 'My mother gives me money.' },
			{ jp: 'トムさんは 私の妹に 指輪を くれました。', en: 'Tom gave my sister a ring.' },
		],
		tags: ['n4', 'learned'],
	},
	{
		id: 'morau-construction',
		title: 'もらう - to receive',
		text:
			'[Recipient] ＋ は/が ＋ [Giver] ＋ に ＋ [Object] ＋ を ＋ もらう\n\nUsed when the transaction comes toward you or someone in your in-group.',
		examples: [
			{ jp: '私は 母に お金を もらう。', en: 'I receive money from my mother.' },
			{ jp: '妹は トムさんから 指輪を もらいました。', en: 'My sister got a ring from Tom.' },
		],
		tags: ['n4', 'learned'],
	},
	{
		id: 'ni-yoru-to-according-to',
		title: '...によると - according to...',
		examples: [
			{ jp: '天気予報によると、明日は雨が降るそうだ。', en: "According to the weather forecast, it'll rain tomorrow." },
			{ jp: '新聞によると、沖縄で雪が降ったそうです。', en: 'According to the newspaper, it snowed in Okinawa.' },
		],
		tags: ['n4'],
	},
	{
		id: 'aidani-while',
		title: '間に - while',
		text:
			'[verb: te-form] + いる + 間に\n[noun] + の + 間に\n[adjective] + 間に\n\nPlease note that the subject before and after aida ni can be either the same or different. When the subjects are different, the subject in the aida ni clause is marked by ga, not wa.\n\n間に expresses that something takes place within the period of something, whereas 間 expresses something takes place throughout the period (ex. 4).',
		examples: [
			{ jp: '私は夏休みの間に、日本に行きたい。', en: 'I want to visit Japan during the summer break.' },
			{ jp: '子供が寝ている間に、私は料理をした。', en: 'I cooked while my child was sleeping.' },
			{ jp: '若い間に、旅行をしなさい。  ', en: "You should go traveling while you're young." },
			{
				jp: '子供がプールで泳いでいる間、私は本を読んでいました。',
				en: 'I was reading the whole time my child was swimming in the pool.',
			},
		],
		tags: ['n4', 'te-form', 'verb', 'noun', 'adjective'],
	},
	{
		id: 'tameni-reason-purpose',
		title: 'ため - reason, benefit, purpose',
		text:
			'[noun] + の + ため - because of [noun]\n[verb: past-form] + ため - because of [verb]\n[verb: dict-form] + ため - in order to [verb]',
		examples: [
			{
				jp: 'インフルエンザのため（に）一週間 会社を休みました。',
				en: "I didn't go to work for a week because of the flu.",
			},
			{ jp: '日本語を勉強したため、日本に行った。', en: 'I went to Japan because I studied Japanese.' },
			{ jp: '日本語を勉強するため、日本に行った。', en: 'I went to Japan in order to study Japanese.' },
		],
		tags: ['n2', 'past-form', 'dict-form', 'noun', 'verb'],
	},
	{
		id: 'sei-de-because',
		title: '...せいで - because of...',
		text:
			'[noun] + の + せいで\n[na-adj] + な + せいで\n[informal speech] + せいで\n\nSei de indicates a reason or cause that brought about an unfavorable result. Using sei de in reference to someone else\'s action expresses the speaker\'s blame or feeling of resentment. We translate this as "thanks to" (with a sarcastic implication), "due to...," "through the fault of...," or "all because of..."',
		examples: [
			{
				jp: '昨日友達が来たせいで、宿題が出来なかった。',
				en: "Because my friend came over yesterday, I couldn't do my homework.",
			},
			{ jp: '台風のせいで、テストに遅刻した。', en: 'Due to the typhoon, I was late for the test.' },
		],
		tags: ['n4', 'noun', 'adjective'],
	},
	{
		id: 'okage-de-thanks-to',
		title: '...おかげで - thanks to...',
		text: '[noun] + の + おかげで\n[na-adj] + な + おかげで\n[informal speech] + おかげで\n\n',
		examples: [
			{
				jp: '昨日勉強したおかげで、今日のテストは簡単だった。',
				en: "Thanks to the fact that I studied yesterday, today's test was easy.",
			},
			{
				jp: 'スカラーシップのおかげで、大学で勉強できた。',
				en: 'I was able to study at a university thanks to a scholarship.',
			},
		],
		tags: ['n4', 'noun', 'adjective'],
	},
	{
		id: 'keredomo-although',
		title: 'けれども、けれど、けども、けど - although',
		examples: [{ jp: '彼はハンサムだけれど、セクシーじゃない。', en: 'He is handsome, but he is not sexy.' }],
		tags: ['n5', 'learned'],
	},
	{
		id: 'noni-despite-that',
		title: '...のに - despite that..u.',
		text:
			'[i-adj/verb] + のに\n[na-adj/noun] + な + のに\n\nPlease note that as noni connects two facts, non-factual sentences such as requests and suggestions cannot follow noni.\nIncorrect: 漢字は難しいのに、勉強したほうがいいですよ。\nCorrect: 漢字は難しいけれど、勉強したほうがいいですよ。\nKanji is difficult, but you should study it.',
		examples: [{ jp: 'メールしたのに、返事がないんだ。', en: "Even though I messaged him, he hasn't replied." }],
		tags: ['n4', 'noun', 'adjective', 'verb'],
	},
	{
		id: 'te-mo-even-if',
		title: '[A] + も + [B] - even if [A], [B]',
		text: '[verb/adj: te-form] + も\n[noun] + で + も',
		examples: [
			{ jp: 'どこに行っても 人がたくさんいた。', en: 'No matter where I went, there were a lot of people.' },
			{ jp: '食べても太らない。', en: "Even if you eat, you don't put on weight." },
		],
		tags: ['n4', 'verb', 'adjective', 'learned'],
	},
	{
		id: 'to-whenever',
		title: '[non-past informal speech] + と - whenever [speech]',
		text:
			'[i-adj/verb: dict/nai-form] + と\n[na-adj/noun] + だ/じゃない + と\n\n[A] to [B] is the same as English phrase "Whenever [A] happens, [B] also happens." Inevitable or habitual consequences follow to.\n\nSince natural consequences follow to, we often use this grammar for giving directions or instructions.\nまっすぐ行くと、駅があります。\n "If you go straight, you\'ll find a train station."\n\nA command, a request, a suggestion, an invitation, or a volitional sentence cannot follow to.\n"When summer comes, let\'s go to the beach."\nIncorrect: 夏になると、海に行こう。\nCorrect: 夏になったら、海に行こう。\n\n\nWe use this phrase to say that the speaker hopes something nice will happen (ex. 2).',
		examples: [
			{ jp: '冬になると、雪が降る。', en: 'Whenever winter comes, it snows.' },
			{ jp: '明日、雨が降らないといいですね。', en: "I hope it won't rain tomorrow." },
		],
		tags: ['n4', 'noun', 'adjective', 'verb', 'dict-form', 'nai-form'],
	},
	{
		id: 'hazu-supposed-to',
		title: '...はず - supposed to...',
		text:
			"[verb] + はず\n[na-adj] + な + はず\n[noun] + の + はず\n\n\nNegative form\n\n[negative speech] + はず + だ\n妻は知らないはずだ。\nI don't suppose my wife knows that.\n\n[affirmative speech] + はず + がない\n妻は知っているはずがない。\nThere's no way that my wife knows that.\n\nSecond formation has the higher degree of certainty.",
		examples: [{ jp: '会議は三時に始まるはずだ。', en: 'The meeting is supposed to start at three.' }],
		tags: ['n4', 'noun', 'verb', 'adjective'],
	},
	{
		id: 'demo-or-something-else',
		title: '...でも - ...or something else',
		examples: [
			{ jp: 'お昼でもどうですか', en: 'How about lunch, or something?' },
			{ jp: 'コーヒーでも飲みませんか', en: 'Would you like some cofee, or something?' },
		],
		tags: ['n4', 'learned'],
	},
	{
		id: 'koto-ga-aru-occasions-when',
		title: '[non-past informal speech] + 事がある - there are occasion when...',
		examples: [
			{
				jp: '運転中、やむを得ず、急ブレーキをかける事がございます。',
				en: 'There are times while driving at which it is necessary for the emergency brake to be used.',
			},
		],
		tags: ['n4', 'learned'],
	},
	{
		id: 'o/go-noun-kudasai-request',
		title: 'お/ご + [noun indicating an action] + ください - extra formal request',
		examples: [{ jp: 'お名前のスペルをご確認ください。', en: 'Please check the spelling of your name.' }],
		tags: ['n4', 'sonkeigo', 'noun', 'learned'],
	},
	{
		id: 'kudasai-simasu-you-onegai-itesimasu',
		title: 'くださいしますよう、お願いいたします - extra formal request',
		text:
			"[verb: te-form] + くださいしますよう、お願いいたします\nお + [masu-stem] + くださいしますよう、お願いいたします\nお/ご + [noun indicating an action] + くださいしますよう、お願いいたします\n\nIt's too polite to use in a daily conversation between friends. It should be reserved for extra formal situations, such as public announcements or business letters.",
		examples: [
			{
				jp: '月曜日までに結果を知らせてくださいますよう、お願いいたします。',
				en: 'We request that you kindly let us know the results by Monday.',
			},
		],
		tags: ['n4', 'sonkeigo', 'noun', 'learned'],
	},
	{
		id: 'ni-natte-iru',
		title: '...になっている - it has been arranged that...',
		text:
			'Naru is a verb that means "to become," and when it follows a noun, we insert the particle ni. This expression infers that something becomes a certain state, regardless of the speaker\'s volition. We use this sentence pattern to explain rules or customs. In an extra-formal situation, we replace iru with orimasu',
		examples: [
			{ jp: 'ここは、立入禁止になっております。', en: 'You are not allowed to enter here.' },
			{
				jp: '営業時間は朝１０時から夜8時までになっております。',
				en: "Our business hours are from ten o'clock in the morning to eight o'clock in the evening.",
			},
		],
		tags: ['n4', 'kenjougo'],
	},
	{
		id: 'koto-o-owabi-itasimasu',
		title: 'お詫びいたします - apologize',
		text:
			' The thing you apologize for is marked by the particle o. When it follows a sentence to mean "I/We apologize that...," we insert koto.\n\n[noun] + おお詫びいたします → "I/We apologize for [noun]."\nことおお詫びいたします → "I/We apologize that..."',
		examples: [
			{ jp: '間違いをおわびいたします。', en: 'I/We apologize for the mistake.' },
			{ jp: '到着が遅れることをおわびいたします。', en: 'I/We apologize that we will arrive late.' },
			{ jp: '電車が遅れていることをおわびいたします。', en: 'I/We apologize that the train is running late.' },
			{ jp: '返信をしなかったことをおわびいたします。', en: "I/We apologize that we didn't reply. " },
		],
		tags: ['n4', 'kenjougo'],
	},
	{
		id: 'moshiageru',
		title: 'もし上げる - to say, to do for',
		text:
			'Meaning "to say"\n\nMōshiageru is similar to the humble verb mōsu, which is the humble form of the verb iu, meaning "to say." The difference is that mōsu simply indicates your action of "saying" or "telling" and doesn\'t necessarily require a recipient, whereas mōshiageru always requires a recipient and elevates the position of that intended recipient.\n\n\nMeaning "to do for"\n\nWhen mōshiageru follows a noun that describes an action or the -masu stem of a verb, it elevates the position of the intended recipient and indicates that the speaker does something for the benefit for the recipient. Please note that this usage of mōshiagemasu is extremely formal and should be reserved for formal announcements or formal business letters only.\n\nお + [masu-stem] + も仕上げます\nお/ご + [noun indicates action] + も仕上げます',
		examples: [
			{
				jp: '私は社長に会社を辞めるともし上げました。',
				en: 'I (humbly) told the company president that I was going to quit the company.',
			},
			{
				jp: 'お答え申し上げます。',
				en: 'I will (humbly) give the answer.',
			},
		],
		tags: ['n4', 'kenjougo'],
	},
	{
		id: 'extra-formal-progressive',
		title: 'Extra formal progressive',
		text: '[te-form] + いらっしゃいます\nお + [masu-stem] + です',
		examples: [
			{ jp: '待っていらっしゃいます。', en: 'Someone is waiting.' },
			{ jp: '身分証明書、お持ちですか？', en: 'Do you have ID?' },
		],
		tags: ['n4'],
	},
	{
		id: 'shidai-as-soon-as',
		title: '[1: masu-stem/noun] + 次第 - as soon as [1]',
		text:
			'Please note that the main clause or following clause after shidai cannot be in the past tense.\n\nPlease note that shidai directly follows the noun for suru verbs. The reason is because shi-shidai is awkward to pronounce.',
		examples: [
			{
				jp: '赤いバッグを見つけ次第、知らせてください。',
				en: 'Please let me know as soon as you have found a red bag.',
			},
		],
		tags: ['n4', 'masu-stem', 'verb', 'noun'],
	},
	{
		id: '',
		title: '',
		text: '',
		examples: [],
		tags: ['n4'],
	},
	{
		id: '',
		title: '',
		text: '',
		examples: [],
		tags: ['n4'],
	},
	{
		id: '',
		title: '',
		text: '',
		examples: [],
		tags: ['n4'],
	},
]
