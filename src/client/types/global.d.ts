type TagT =
	| 'noun'
	| 'verb'
	| 'adjective'
	| 'adverb'
	| 'particle'
	| 'sentence ending particle'
	| 'masu-stem'
	| 'dict-form'
	| 'te-form'
	| 'nai-form'
	| 'past-form'
	| 'volitional'
	| 'imperative'
	| 'formal'
	| 'informal'
	| 'kenjougo'
	| 'sonkeigo'
	| 'n5'
	| 'n4'
	| 'n3'
	| 'n2'
	| 'n1'
	| 'counter'
	| 'learned'

type ExampleT = {
	jp: string
	en: string
}

type CounterItemT = { jp: string; hg?: string; en?: string }
type WordT = { jp: string; hg?: string; en: string }

type TableT = string[][]

type CardT = {
	id: string
	title: string
	counter?: CounterItemT[]
	table?: TableT
	text?: string
	examples?: ExampleT[]
	tags: TagT[]
}
