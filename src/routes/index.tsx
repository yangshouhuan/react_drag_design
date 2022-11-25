import { lazy, Suspense } from 'react'
import { useRoutes, RouteObject } from 'react-router-dom'
import store from '../store'

import { Navigate } from 'react-router-dom'
import LoadingComponent from 'components/LoadingComponent'
import Routes from './Routes'
import { MyRoute } from 'types/route'

// 路由拦截
const RequireAuth = (route: MyRoute.SyncRoute) => {
	const isLogin = store.getState().user.isLogin
	return (
		<Suspense fallback={<LoadingComponent />}>
			{/* {(route.auth && !isLogin) ? <Navigate replace={true} to={'/Login'} /> : <route.component />} */}
			{(route.auth && !isLogin) ? <Navigate replace={true} to={'/'} /> : <route.component />}
		</Suspense>
	)
}

// useRoutes: 自动生成路由
const syncRouter = (routes: MyRoute.SyncRoute[]): RouteObject[] => {
	return routes.map((route: MyRoute.SyncRoute) => {
		return {
			path: route.Redirect ? route.Redirect : route.path,
			element: RequireAuth(route),
			children: route.children && syncRouter(route.children)
		}
	})
}


export default () => useRoutes(syncRouter(Routes))
