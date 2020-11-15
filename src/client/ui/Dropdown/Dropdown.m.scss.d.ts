declare namespace DropdownMScssNamespace {
	export interface IDropdownMScss {
		Content: string
		ContentWrap: string
		Dropdown: string
		Toggle: string
		ToggleIcon: string
		ToggleIconOnRight: string
	}
}

declare const DropdownMScssModule: DropdownMScssNamespace.IDropdownMScss & {
	/** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
	locals: DropdownMScssNamespace.IDropdownMScss
}

export = DropdownMScssModule
