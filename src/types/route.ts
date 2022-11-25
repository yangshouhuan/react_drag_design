import React, { LazyExoticComponent } from 'react'

export namespace MyRoute {

	export interface CustomRouter {
		name: string
		path: string
		component: React.FunctionComponent<any>
		params?: string
		exact?: boolean
	}

	export interface SyncRoute {
		name: string
		component: LazyExoticComponent<any>
		path?: string
		auth?: boolean
		Redirect?: string
		children?: SyncRoute[]
	}
}