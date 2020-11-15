declare namespace CardViewMScssNamespace {
	export interface ICardViewMScss {
		CardView: string
		CardViewBack: string
		Example: string
		Examples: string
		Table: string
		TableColumn: string
		Tag: string
		Tags: string
		Text: string
		Title: string
		Top: string
		TranslationButton: string
		TranslationButtonActive: string
	}
}

declare const CardViewMScssModule: CardViewMScssNamespace.ICardViewMScss & {
	/** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
	locals: CardViewMScssNamespace.ICardViewMScss
}

export = CardViewMScssModule
