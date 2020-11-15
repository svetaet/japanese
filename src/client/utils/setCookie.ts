export const setCookie = (cookieName: string, cookieValue: string | number) => {
	document.cookie = `${cookieName}=${cookieValue}`
}
