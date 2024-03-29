import { lazy } from 'react'
import { MyRoute } from 'types/route';

const routers: MyRoute.SyncRoute[] = [
	{
		name: 'Test',
		component: lazy(() => import('pages/TestPage')),
		path: '/Test'
	},
	{
		name: 'Home',
		component: lazy(() => import('pages/Login')),
		path: '/'
	},
	{
		name: 'Login',
		component: lazy(() => import('pages/Login')),
		path: '/Login'
	},
	// {
	// 	name: 'Register',
	// 	component: lazy(() => import('pages/Register')),
	// 	path: '/Register'
	// },
	{
		name: 'KanbanManage',
		component: lazy(() => import('pages/KanbanManage')),
		path: '/KanbanManage',
		auth: true
	},
	{
		name: 'KanbanDesignLayout',
		component: lazy(() => import('layouts/KanbanDesignLayout')),
		Redirect: '/KanbanDesign/:id',
		auth: true,
		children: [
			{
				name: 'KanbanDesign',
				component: lazy(() => import('pages/KanbanDesign')),
				path: '/KanbanDesign/:id'
			}
		]
	},
	{
		name: 'KanbanPreviewLayout',
		component: lazy(() => import('layouts/KanbanPreviewLayout')),
		Redirect: '/KanbanPreview/:id',
		auth: true,
		children: [
			{
				name: 'KanbanPreview',
				component: lazy(() => import('pages/KanbanPreview')),
				path: '/KanbanPreview/:id',
				auth: true
			}
		]
	},
	{
		name: 'Error404',
		component: lazy(() => import('pages/Error404')),
		path: '*'
	}
]

// export default Routers
export default routers ;
