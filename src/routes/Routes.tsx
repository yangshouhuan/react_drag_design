import { lazy } from 'react'
import { MyRoute } from 'types/route';

const routers: MyRoute.SyncRoute[] = [
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
		name: 'KanbanPreview',
		component: lazy(() => import('pages/KanbanPreview')),
		path: '/KanbanPreview/:id',
		auth: true
	},
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
		name: 'Error404',
		component: lazy(() => import('pages/Error404')),
		path: '*'
	}
]

// export default Routers
export default routers ;
