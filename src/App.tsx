import { Provider } from 'react-redux'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import store from './store'
import './App.less'

import Routers from './routes'

function App() {
  return (
      <Provider store={store}>
        {/* 需要配置 BrowserRouter 路由才能用 */}
        <HashRouter>
            <Routers />
        </HashRouter>
      </Provider>
  )
}

export default App;