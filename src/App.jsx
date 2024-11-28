import './App.css'
import { Route, Routes } from 'react-router'
import GooleForm from './Components/GooleContectForm/GooleForm'
import GooleEdit from './Components/GooleContectEdit/GooleEdit'
import GooleView from './Components/GooleContectView/GooleView'
import store from './store'
import { Provider } from 'react-redux'
import ViewHOC from './Components/ViewHoc/ViewHoc'
import Login from './Components/Login/Login'

function App() {

  const MyLogin = ViewHOC(GooleView)

  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<MyLogin />} />
          <Route path='/edit' element={<GooleEdit />} />
          <Route path='/gooleForm' element={<GooleForm />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Provider>
    </>
  )
}

export default App
