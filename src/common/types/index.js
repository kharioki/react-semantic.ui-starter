// @flow
export type PostItem = {
	title: string,
	body: string,
	userId: number,
	id: number
}

export type UserItem = {
	id: number,
	name: string,
	username: string,
	email: string,
	address: {
		street: string,
		suite: string,
		city: string,
		zipcode: string,
		geo: {
			lat: string,
			lng: string
		}
	},
	phone: string,
	website: string,
	company: {
		name: string,
		catchPhrase: string,
		bs: string
	}
}

export type RouteItem = {
	path: string,
	exact?: boolean,
	external?: boolean,
	lazy?: boolean,
	strict?: boolean,
	icon?: string,
	name?: string,
	sidebarVisible?: boolean,
	tag?: React$Node | Function,
	component?: React$Node | Function
}

export type i18nConfigObject = {
	messages: Object,
	localeData: Object,
	locale: string,
	lang?: string
}