export const verbs: CardT[] = [
	{
		id: 'passive-form-verbs',
		title: 'Passive form of verbs',
		text:
			'＊う → ＊あれる　う → われる\nる → られる\nする → される　くる → こられる\n\nPlease notice that in the passive sentence, we use the particle ni to mark the person who actually performs the action.\n\nThere is another type of passive in Japanese: the "indirect passive". An indirect passive sentence normally implies that the subject is inconvenienced by the action of the verb. It is used to indicate that an (often negative) influence has had some effect on the (usually human) subject. Because this passive is often used when the speaker is showing empathy for something that happens to the subject that is outside of his/her realm of control, this passive form is often called "the troubled passive" - 迷惑の受身 (ex. 3).\n\nThe passive form may also used as an obfuscating device in non-passive sentences, in order to make them more polite. This is a form of keigo (ex. 4).',
		examples: [
			{ jp: '彼はみんなに尊敬されている。', en: "He's respected by everyone." },
			{ jp: '雨に降られた。', en: 'I was annoyed by the fact it rained. / I got rained on.' },
			{ jp: '彼は両親に死なれた。', en: 'The man’s parents (sadly) died.' },
			{ jp: '何を食べられていますか', en: 'What are you eating?' },
		],
		tags: ['n4', 'verb'],
	},
	{
		id: 'te-form-verbs',
		title: 'Te-form of verbs',
		text: 'う→って　る→って\nつ→って　行く→行って\nく→いて　ぐ→いで\nす→して\n\nる→て\n\nする→して　来る→来て',
		tags: ['n5', 'te-form', 'verb'],
	},
	{
		id: 'nai-form-verbs',
		title: 'Negative form of verbs',
		text: '＊う→＊あない　う→わない\nる→ない\nする→しない\n来る→来ない',
		tags: ['n5', 'nai-form', 'verb'],
	},
	{
		id: 'formal-volitional-verbs',
		title: '[masu stem] + ましょう - formal volitional',
		tags: ['n5', 'formal', 'volitional', 'verb', 'masu-stem'],
	},
	{
		id: 'informal-volitional-verbs',
		title: 'Informal volitional',
		text: 'う→おう\nる→よう\nする→しよう　くる→こよう',
		examples: [{ jp: '行こう', en: "Let's go!" }],
		tags: ['n5', 'informal', 'volitional', 'verb'],
	},
	{
		id: 'masyouka-polite-suggestion-verbs',
		title: '[masu stem] + ましょうか - polite suggestion',
		text:
			'It\'s used to politely suggest, propose, invite or offer some help. Mashō ka is composed of the polite, volitional form of the masu auxiliary verb mashō, in addition to the sentence-ending interrogative particle "ka". This creates a very polite expression that can be used to make a suggestion, proposition or an invitation to someone of higher status. You can think of it as "why don\'t (we)~" or "shall (we)~" in English.\n\nIt\'s similar to another pattern, -masen ka. The expression -masen ka is more polite than the mashō ka pattern, as masen ka is asking whether or not the listener will do/would like to do something.',
		examples: [
			{ jp: 'どこに行きましょうか。', en: 'Where shall we go?' },
			{ jp: 'うどんを食べましょう。', en: "Let's eat udon." },
			{ jp: 'A:暑いですね。\nB:ドアを開けましょうか。', en: "A: It's hot, isn't it?\nB: Shall I open the door?" },
		],
		tags: ['n5', 'formal', 'volitional', 'verb', 'masu-stem'],
	},
	{
		id: 'irregular-kenjogo-verbs',
		title: 'Irregular humble verbs',
		table: [
			['dict-form', 'kenjougo', 'hiragana'],
			['いる', 'おる'],
			['ある', 'ござる'],
			['する', 'いたす'],
			['食べる、飲む、もらう', 'いただく'],
			['行く、来る', '参る', 'まいる'],
			['言う', '申す', 'もうす'],
			['きく、訪ねる', '伺う', 'うかがう'],
			['知っている', '存じている', 'ぞんじている'],
			['みる', '拝見する', 'はいけんする'],
		],
		text: 'ござる in masu-form is ございます.\n\nWe can treat kiku and tazuneru as regular verbs (ex. 4).',
		examples: [{ jp: 'お名前を伺っ てもいいですか。\nお名前をお 聞きしてもいいですか。', en: 'May I have your name?' }],
		tags: ['n4', 'verb', 'kenjougo'],
	},
	{
		id: 'regular-kenjogo-verbs',
		title: 'お ＋ [masu-stem] ＋ する/いたす - regular humble verbs',
		text: 'We can treat kiku and tazuneru as regular verbs (ex. 4).',
		examples: [
			{ jp: '失礼いたします。', en: 'Excuse me.' },
			{ jp: 'もし訳ありません。', en: "I'm sorry." },
			{ jp: 'かばんを持ちます。', en: "I'll take(or carry) your bag." },
			{ jp: 'お名前を伺ってもいいですか。\nお名前をお聞きしてもいいですか。', en: 'May I have your name?' },
		],
		tags: ['n4', 'verb', 'kenjougo', 'masu-stem'],
	},
	{
		id: 'irregular-sonkeigo-verbs',
		title: 'Irregular honorific verbs',
		table: [
			['dict-form', 'sonkeigo', 'masu-stem', 'hiragana'],
			['いる、行く、来る', 'いらっしゃる', 'いらっしゃいます'],
			['言う', 'おっしゃる', 'おっしゃいます'],
			['する', 'なさる', 'なさいます'],
			['食べる、飲む', '召し上がる', '召し上がります', 'めしあがる'],
			['くれる', 'くださる', 'くださいます'],
			['みる', 'ご覧になる', 'ご覧になります', 'ごらんになる'],
			['知っている', 'ご存じだ', 'ご存知です', 'ごぞんじだ'],
		],
		examples: [{ jp: '英語を勉強していらっしゃいますか。', en: 'Are you studying English?' }],
		tags: ['n4', 'verb', 'sonkeigo'],
	},
	{
		id: 'regular-son-verbs',
		title: 'お + [masu-stem] + になる - regular honorific verbs',
		examples: [{ jp: '何時にお帰りになりますか。', en: 'What time are you going to go home?' }],
		tags: ['n4', 'verb', 'sonkeigo', 'masu-stem'],
	},
	{
		id: 'sonkeigo-request-verbs',
		title: 'お + [masu-stem] + ください - extra polite request to [verb]',
		examples: [
			{ jp: 'お金をお入れください。', en: 'Please put in your money.' },
			{ jp: '少々、お待ちください。', en: 'Wait just a moment, please.' },
			{ jp: '切符をおと りください。', en: 'Please take your train ticket.' },
		],
		tags: ['n4', 'verb', 'sonkeigo', 'masu-stem'],
	},
	{
		id: 'verbs-nominalizers',
		title: '[dict-form] + の/こと - nominalizers の and こと',
		text:
			'の is used to express something subjective whereas こと is used to express something more general or objective.',
		examples: [
			{ jp: '太一くんと話をするのは 楽しい。', en: 'Talking with Taichi is fun.' },
			{
				jp: '母が若い頃、かわいかったのは信じられない。',
				en: "I can't believe that my mother was cute when she was young.",
			},
			{ jp: 'あの先生が頑固なのは 知っている。', en: 'I know that teacher is stubborn.' },
		],
		tags: ['n5', 'verb', 'dict-form', 'noun', 'particle'],
	},
	{
		id: 'present-continuous-verbs',
		title: '[te-form] + いる - present continuous',
		text: 'Can express a present progressive action or a continuous state or condition created by a past action',
		examples: [
			{ jp: '何を飲んでいますか。', en: 'What are you drinking?' },
			{ jp: '晴夜さんはうちに来ている。', en: 'Haruya is here. (Haruya came over to our place and is still here.)' },
			{ jp: '美雨はうちに帰っている。', en: 'Miu is home. (Miu came home and is still at home.)' },
		],
		tags: ['n5', 'verb', 'te-form', 'learned'],
	},
	{
		id: 'sequence-of-verbs',
		title: '[te-form] + [te-form] - sequence of verbs',
		examples: [
			{
				jp: '毎日、夜１０時に寝て、朝４時に起きる。',
				en: 'I go to bed at ten at night and get up at four in the morning.',
			},
		],
		tags: ['n5', 'verb', 'te-form', 'learned'],
	},
	{
		id: 'kara-after-since-verbs',
		title: '[te/past-form] + から - after, since',
		examples: [
			{ jp: 'メールをチェックしてから、寝ます。', en: 'After checking my e-mail, I go to bed.' },
			{ jp: '大学を卒業したから、日本に来ました。', en: 'Because I graduated from university, I came to Japan.' },
		],
		tags: ['n5', 'particle', 'verb', 'te-form'],
	},
	{
		id: 'prohibition-verbs',
		title: '[te-form] + はいけない - prohibition',
		examples: [{ jp: '写真をとってはいけません。', en: 'You cannot take a picture.' }],
		tags: ['n5', 'verb', 'te-form'],
	},
	{
		id: 'obligation-verbs',
		title: '[nai-te-form] + はいけない - obligation, must [verb], have to [verb]',
		text:
			'In informal conversation, we often shorten te wa, as in te wa ikemasen, to cha. If you drop ikenai, it sounds even more colloquial.',
		examples: [
			{ jp: '今週の日曜日、会社に行かなくてはいけない。', en: 'I have to go to work this Sunday.' },
			{ jp: '会社に行かなくちゃいけない。', en: 'I have to go to work.' },
			{ jp: '会社に行かなくちゃ。', en: "I've gotta go to work." },
		],
		tags: ['n4', 'verb', 'te-form', 'nai-form'],
	},
	{
		id: 'permission-verbs',
		title: '[te-form] + もいいです - permission',
		examples: [{ jp: '入ってもいいですか。', en: 'May I come in?' }],
		tags: ['n5', 'verb', 'te-form'],
	},
	{
		id: 'should-verbs',
		title: '[dict/nai/past-form] + の方がいい - strong suggestion, should [verb], had better [verb]',
		text:
			'Use of the past form is more common and indicates a stronger suggestion than use of the non-past verb. When used to make a suggestion about what one *should not* do, "hou ga ii" follows negative verbs in non-past form only (Example sentence #3).',
		examples: [
			{ jp: '彼らの言うとおりにしたほうがいい。', en: 'You had better do what they say.' },
			{ jp: 'もっとゆっくり食べるほうがいい。', en: 'You ought to eat more slowly.' },
			{ jp: '君はそこに行かないほうがいい。', en: 'You had better not go there.' },
		],
		tags: ['n4', 'verb', 'te-form', 'nai-form', 'dict-form', 'past-form'],
	},
	{
		id: 'polite-request-not-to-do',
		title: '[nai-form] + で + ください - polite request to not to [verb]',
		examples: [{ jp: 'タバコをすわないでください', en: "Please don't smoke." }],
		tags: ['n5', 'verb', 'formal', 'nai-form'],
	},
	{
		id: 'do-claus1-without-claus2',
		title: '[A: nai-form] ＋ で ＋ [B] - do [B], without doing [B]',
		examples: [
			{
				jp: 'お父さんは何も言わないで、アルバムを見ている。',
				en: 'Dad has been looking at the photo album without saying anything.',
			},
		],
		tags: ['n5', 'verb', 'nai-form'],
	},
	{
		id: 'way-to-use-verbs',
		title: '[masu stem] + 方 - way to [verb], how to [verb]',
		examples: [{ jp: 'この漢字の読み方を教えてください。', en: 'Can you tell me how to read this Chinese character?' }],
		tags: ['n5', 'verb', 'masu-stem'],
	},
	{
		id: 'easy-hard-verbs',
		title: '[masu stem] + やすい/にくい - easy/hard to [verb]',
		examples: [{ jp: '東京はとても住みにくいところです。', en: 'Tokyo is a very difficult place to live.' }],
		tags: ['n5', 'verb', 'adjective', 'masu-stem'],
	},
	{
		id: 'purpose-for-going-verbs',
		title: '[masu stem] + に行く - to go in order to [verb]',
		text: 'Can appear with other motion verbs such as kuru, kaeru.',
		examples: [
			{ jp: 'エジプトにピラミッドを見に行きたい。', en: 'I want to go to Egypt to see pyramids.' },
			{ jp: '私は、日本に、日本語を勉強しに来ました。', en: 'I came to Japan to study Japanese.' },
		],
		tags: ['n5', 'verb', 'masu-stem'],
	},
	{
		id: 'not-happened-yet-verbs',
		title: "まだ + [te-form] + いません - hasn't [verb] yet",
		text: 'Please note that i in imasen is sometimes dropped in conversation.\nまだ決めていません　→　まだ決めてません',
		examples: [
			{
				jp: 'もう、あの新しい映画をみましたか。\nいいえ、まだ　みていません。',
				en: "Have you already seen that new movie?\n No. I haven't seen it yet.",
			},
		],
		tags: ['n5', 'verb', 'te-form'],
	},
	{
		id: 'emotion-verb',
		title: '[te-form] + [emotion] - I feel [emotion] about [verb]',
		text: 'Apology\nごめん: Very casual\nごめんなさい: Formal\nすみません: Formal\nもし訳ありません: Extremely formal',
		examples: [
			{ jp: '遅くなってごめんね。', en: 'Sorry to keep you waiting!' },
			{ jp: '雨が降ってビックリ', en: "I'm surprised that it rained." },
		],
		tags: ['n4', 'verb', 'te-form'],
	},
	{
		id: 'modifying-clause',
		title: '[te-form] + いる + 人/こと - modifying clause',
		text:
			'The modifying phrase comes before the noun. Please note that the particle wa (は) is not used in modifying clauses.',
		examples: [
			{ jp: '私が言っていることが分かりますか。', en: "Do you understand what I'm saying?" },
			{
				jp: 'あそこで電話をしている人は私の友達です。',
				en: 'The person talking on the phone over there is my friend.',
			},
		],
		tags: ['n4', 'verb', 'te-form'],
	},
	{
		id: 'tsumori-verbs',
		title: '[dict/nai-form] + つもりだ - intention, conviction',
		text:
			'There are two ways to negate the phrase -tsumori. However, the second way is a stronger negation.\n[nai-form] + つもりだ\n[dict-form] + つもりではない',
		examples: [
			{ jp: 'もう、マリに電話しないつもりだ。', en: "I don't intend to call Mari any more." },
			{
				jp: '昨日、日本語を勉強するつもりだったが、できなかった。',
				en: "I was planning to study Japanese yesterday, but I couldn't.",
			},
			{
				jp: '電話しないつもり？\n電話するつもりはない。',
				en: "You don't intend to call him back?\nI have NO intention of calling him.",
			},
		],
		tags: ['n4', 'verb', 'dict-form', 'nai-form'],
	},
	{
		id: 'yotei-verbs',
		title: '[dict/nai-form] + 予定だ - plan, schedule',
		text:
			'Whereas with tsumori you are talking about something you "intend" to do, with yotei are you simply stating something you are scheduled to do as a fact.',
		examples: [{ jp: '私はパーティーに行かない予定だ。', en: "I'm not scheduled to go to the party." }],
		tags: ['n4', 'verb', 'dict-form', 'nai-form'],
	},
	{
		id: 'hoshii-want-someone-to-verb',
		title: '[person] + に + [te-form] + ほしい - want [person] to [verb]',
		text:
			'[person] + に + [nai-form] + で + ほしい - want [person] not to [verb]\n\nThis particuliar structure is only appropriate for use with people on the same social level or lower than the subject.\n\n[te-form] + もらいたがっている is the standard form used when the desirer is a third party (i.e. neither the speaker nor the listener).',
		examples: [{ jp: 'かさを持って来て欲しい。', en: 'I want you to bring an umbrella.' }],
		tags: ['n4', 'verb', 'te-form'],
	},
	{
		id: 'tagatteiru-verbs',
		title: '[masu-stem] + たがっている - [someone else] want to [verb]',
		text: 'This construction literally mean "showing signs of wanting ...". Use o to mark the object for -tagatteiru.',
		examples: [{ jp: '兄は映画をみたがっている。', en: 'My older brother wants to see a movie.' }],
		tags: ['n4', 'verb', 'masu-stem'],
	},
	{
		id: 'kara-after-verbs',
		title: '[te-form] + から - after [verb]',
		examples: [{ jp: '会社を出てから病院に行った。', en: 'After I left the office, I went to the hospital.' }],
		tags: ['n4', 'verb', 'te-form'],
	},
	{
		id: 'koto-ga-aru-verbs',
		title: '[past-form] + ことがある - experienced [verb]',
		text: 'Please note that we can replace the particle ga with wa for emphasis or comparison purposes.',
		examples: [{ jp: '有名人に会ったことがある。', en: "I've met a famous person." }],
		tags: ['n4', 'verb', 'past-form'],
	},
	{
		id: 'polite-imperative-verbs',
		title: '[masu-stem] + なさい - polite imperative',
		text:
			'Nasai comes from the verb nasaru, which is an honorific way to say "to do".\n\nUsed most often when a parent is scolding a child and for instructions on a test.\n\nNote that there is no negative form.',
		examples: [{ jp: '気をつけなさい。', en: 'Be careful.' }],
		tags: ['n4', 'verb', 'imperative', 'masu-stem'],
	},
	{
		id: 'imperative-verbs',
		title: 'Imperative form',
		text:
			'＊う→＊え\nる→ろ\nする→しろ　来る→こい\nnai-form: [dict-form] + な\n\nWhen the sentence ending yo follows the imperative, it serves to soften the imperative. When men give advice, consolation, or encouragement to someone who is close to them, they use the [imperative form] + yo (ex. 2).',
		examples: [
			{ jp: 'グズグズしていないでさっさと行け', en: "Don't be slow, but go right now!" },
			{ jp: '泣くなよ', en: "Don't cry." },
		],
		tags: ['n4', 'verb', 'imperative'],
	},
	{
		id: 'potential-form-verbs',
		title: 'Potential form of verbs',
		text:
			'＊う→＊える\n\nる→られる　る→れる\n\nする→できる\n来る→来られる 来る→来れる\n\nVerbs that take the particle を can take either を or が when they become the potential. Sometimes, "ra" is dropped from the potential form of a verb.\n\nNote that the auxiliary verb rareru conjugates as a Class 2 verb.',
		tags: ['n4', 'verb'],
	},
	{
		id: 'youni-suru-verbs',
		title: '[dict/nai-form] + ようにする - to make an effort to [verb], to make sure that [verb]',
		examples: [
			{ jp: '毎日、新聞を読むようにしている。', en: "I'm making an effort to read the newspaper every day." },
			{
				jp: '甘いものを食べないようにしている。',
				en: "I'm trying not to eat sweets.\nI'm making sure that I don't eat sweets.",
			},
			{ jp: '運動をするようにしてください。', en: 'Please make sure to exercise.' },
		],
		tags: ['n4', 'verb', 'dict-form', 'nai-form'],
	},
	{
		id: 'youni-naru-verbs',
		title: '[dict/nai-form] + ようになる - it has come to be that [verb]',
		examples: [
			{ jp: '毎日、新聞を読むようになる。', en: "I've reached the point where I read the newspaper every day." },
			{
				jp: 'ファーストフードを食べないようになる。',
				en: "I've reached the point where I don't eat fast food.",
			},
		],
		tags: ['n4', 'verb', 'dict-form', 'nai-form'],
	},
	{
		id: 'helping-kureru-verbs',
		title: '[te-from] + くれる - [verb] for me',
		text:
			'\nVery informal: [te-form] ＋ くれ\nInformal: [te-form] ＋ くれる\nFormal: [te-form] ＋ くれますた/くれませんか',
		examples: [
			{ jp: 'ちょっと待ってくれ。', en: 'Wait a second (for me)' },
			{ jp: '手伝ってくれない？', en: 'Will you give me a hand?' },
			{ jp: '友だちは　（私に）　日本語を　教えてくれる。', en: "My friend teaches me Japanese (and I'm grateful.)" },
		],
		tags: ['n4', 'verb', 'te-form'],
	},
	{
		id: 'to-try-verbs',
		title: '[te-form] + みる - try to [verb]',
		examples: [
			{
				jp: '新しい言葉を勉強したので、使ってみた。',
				en: 'Since I learned a new word, I tried to use it (to see whether people understood me).',
			},
		],
		tags: ['n4', 'verb', 'te-form'],
	},
	{
		id: 'te-form-oku-verbs',
		title: '[te-form] + おく - to [verb] in advance',
		text: 'In a conversation, -te oku and -de oku become -toku and -doku, respectively.',
		examples: [
			{
				jp: '部屋を掃除しておく ',
				en: 'to clean a room in preparation for something/in advance for future convenience',
			},
			{ jp: 'そのままにしておいてください。', en: 'Leave it (/them) as it (/they) is (/are).' },
		],
		tags: ['n4', 'verb', 'te-form'],
	},
	{
		id: 'to-omotte-iru-verbs',
		title: '[volitional] + と思っている - intention',
		text:
			"We use ...to omotteiru and ...to omotteimasu with phrases that express one's desire (-tai form, hoshii, etc.) to imply that the subject has been feeling that way for a while.　We often replace the quotation particle to with tte and we often drop the first -i sound in imashita or -ita in everyday conversation.",
		examples: [
			{
				jp: '大学院に行こうと思っている。',
				en: "Kent said, 'I'm going to go back to England next year.'",
			},
		],
		tags: ['n4', 'verb', 'volitional'],
	},
	{
		id: 'te-shimau-to-finish-verbs',
		title: '[te-form] + しまう - to finish [verb]',
		text:
			'Can imply regret, reluctance or resignation.\n\nIn an informal conversation, ～てしまう can become ～ちゃう, and ～でしまう can become ～じゃう.',
		examples: [
			{ jp: '明日までに、宿題をしてしまおうと思う。', en: 'I intend to finish my homework by tomorrow.' },
			{ jp: 'もう その本を 読んじゃった。', en: "I've already finished reading that book." },
			{ jp: 'さいふを落としてしまった。', en: 'I dropped my wallet.' },
			{
				jp: '電気をつけなさい。目が悪くなってしまいますよ。',
				en: "Please turn on the light. You will ruin your eyes (and you'll end up regretting it).",
			},
		],
		tags: ['n4', 'verb', 'te-form'],
	},
	{
		id: 'contracted-forms-verbs',
		title: 'Contracted verbs',
		text:
			"1. [te-form] + いる - ongoing action, habitual action, or continuous states\nている → てる\nでいる → でる\nていて → てて\n\n2. [te-form] + いく\nていく → てく\nでいく → でく\n\n3. [te-form] + おく - to [verb] for a future purpose\nておく → とく\nでおく → どく\n\n4. [te-form] + わ + いけない・ならない・だめ - shouldn't [verb]\nてわ → ちゃ\nでわ → じゃ\n\n4. [nai-stem] + なくてわ・なければ + いけない・ならない・だめ - you should\nなくてわ → なくちゃ\nなければ → なきゃ\n\n5. [te-form] + しまう - completion/regret\nてしまう → ちゃう\nでしまう → じゃう",
		examples: [
			{ jp: '父はアフリカに行っています。', en: 'My father has gone to Africa.' },
			{ jp: '待っててください。', en: 'Please wait' },
			{ jp: 'かさを持ってきなさい。', en: 'Take your umbrella.' },
			{ jp: 'テキストを読んどいてください。', en: 'Please read the textbook in advance.' },
			{ jp: 'ここで タバコを すっちゃ いけない。', en: 'Koko de tabako o sutte wa ikenai. ' },
			{ jp: 'ここで　泳いじゃ ならない。', en: 'Do not swim here.' },
			{ jp: '走っちゃだめ。', en: "Don't run!" },
			{ jp: '静かにしなくちゃだめ。', en: 'You have to be quiet.' },
			{ jp: '行かなきゃ。', en: "I've gotta go." },
			{ jp: 'コップを割っちゃった。', en: 'I broke the cup (unfortunately).' },
		],
		tags: ['n4', 'verb'],
	},
	{
		id: 'nagara-while-verbs',
		title: '[masu-stem] + ながら - while [verb]',
		text:
			'Please note that the subject before nagara and after nagara has to be the same. In other words, we cannot use nagara when the subjects of the two actions are different. To say a sentence like "I did the laundry while my baby was sleeping," you need to use aida ni.\nPlease note that the action followed by nagara is always the secondary action. The action that comes after nagara is the more important main action.',
		examples: [
			{ jp: 'ポップコーンを食べながら映画を見るのが好きです。', en: 'I like watching movies while eating popcorn.' },
		],
		tags: ['n4', 'verb', 'masu-stem'],
	},
	{
		id: 'tara-if-verbs',
		title: '[past-form] + ら - if',
		text:
			'Moshi or moshimo often precedes the conditional clause for emphasizing the "if".\n\nUsage\n"If": [Possible condition] tara [result]\n"If": [Possible condition] tara [request, suggestion, permission, etc]\n"If": [Hypothetical condition] tara [probable result]\n"When": [Very probable condition] tara\n"When": [Past action, event] tara [result]\n\nSet expressions\nよかったら - if it\'s okay"\n[past-form] + らどう - why don\'t you [verb]\n[WH-word] + [past-form] + らいいですか - [WH-word] is better to [verb]',
		examples: [
			{ jp: '雨が降ったら、行きません。', en: "If it rains, I won't go." },
			{ jp: '暑かったら、エアコンをつけてもいいですよ。', en: "If it's hot, you may turn on the air conditioner." },
			{
				jp: 'もしクレオパトラの鼻が低かったら、世界は違っただろう。',
				en: "If Cleopatra's nose had been shorter, the (whole face of the) world would have changed.",
			},
			{ jp: '家に帰ったら、電話してください。', en: 'Please call me when you get home.' },
			{ jp: '電車に乗ったら、田中さんがいた。', en: 'When I got on the train, Mr./Ms. Tanaka was there.' },
			{ jp: 'よかったら、食べてください。', en: 'Please have some if you like.' },
			{ jp: '病院に行ったらどうですか。', en: "Why don't you go to the hospital?" },
			{ jp: '何をしたらいいですか。', en: 'What should I do?' },
		],
		tags: ['n4', 'verb'],
	},
	{
		id: 'youni-so-that-verbs',
		title: '[dict/nai-form] + ように - so that [verb]',
		text: 'Please note that yō ni often follows the dictionary form of a verb that has a potential meaning.',
		examples: [
			{ jp: 'テストに合格できるように、頑張ります。', en: "I'll try hard so that I can pass the exam." },
			{ jp: '事故に遭わないように、ゆっくり運転します。', en: "I drive slowly so that I don't have an accident." },
		],
		tags: ['n3', 'verb'],
	},
	{
		id: '',
		title: '',
		text: '',
		examples: [],
		tags: ['n4', 'verb'],
	},
]
