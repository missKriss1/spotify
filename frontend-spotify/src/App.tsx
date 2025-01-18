import { Container, CssBaseline } from '@mui/material';
import AppToolBar from './components/UI/AppToolBar/AppToolBar.tsx';
import { Route, Routes } from 'react-router-dom';
import Home from './containers/Home.tsx';
import Albums from './containers/Albums/Albums.tsx';
import Tracks from './containers/Tracks/Tracks.tsx';
import RegisterUser from './features/users/RegisterUser.tsx';

const App = () => {
  return(
    <>
      <CssBaseline/>
      <header>
        <AppToolBar/>
      </header>
      <main>
        <Container>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path = '/register' element={<RegisterUser/>}/>
            <Route path="/albums" element={<Albums />} />
            <Route path="/tracks" element={<Tracks />} />
          </Routes>
        </Container>
      </main>
    </>
  )
}

export default App
