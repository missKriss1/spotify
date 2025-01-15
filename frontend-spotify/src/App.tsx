import { Container, CssBaseline } from '@mui/material';
import AppToolBar from './components/UI/AppToolBar/AppToolBar.tsx';
import { Route, Routes } from 'react-router-dom';
import Home from './containers/Home.tsx';
import Albums from './containers/Albums/Albums.tsx';

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
            <Route path="/albums/" element={<Albums />} />
          </Routes>
        </Container>
      </main>
    </>
  )
}

export default App
