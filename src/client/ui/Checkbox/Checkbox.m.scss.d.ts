declare namespace CheckboxMScssNamespace {
	export interface ICheckboxMScss {
		Checkbox: string
	}
}

declare const CheckboxMScssModule: CheckboxMScssNamespace.ICheckboxMScss & {
	/** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
	locals: CheckboxMScssNamespace.ICheckboxMScss
}

export = CheckboxMScssModule
