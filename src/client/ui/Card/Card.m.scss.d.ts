declare namespace CardMScssNamespace {
	export interface ICardMScss {
		ActiveTagIcon: string
		Card: string
		CardTitle: string
		Tag: string
	}
}

declare const CardMScssModule: CardMScssNamespace.ICardMScss & {
	/** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
	locals: CardMScssNamespace.ICardMScss
}

export = CardMScssModule
