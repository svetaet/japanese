declare namespace RangeMScssNamespace {
	export interface IRangeMScss {
		Range: string
		RangeBar: string
		RangeTicks: string
	}
}

declare const RangeMScssModule: RangeMScssNamespace.IRangeMScss & {
	/** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
	locals: RangeMScssNamespace.IRangeMScss
}

export = RangeMScssModule
