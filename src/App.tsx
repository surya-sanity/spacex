import './App.css';
import { Provider } from 'react-redux';
import { store } from './Store/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import ScrollToTop from './Components/ScrollToTop';
import LandingPage from './Screens/LandingPage/LandingPage';
import PageNotFound from './Screens/PageNotFound';
import HistoryPage from './Screens/HistoryPage/HistoryPage';
import LaunchesPage from './Screens/LaunchesPage/LaunchesPage';
import RocketsPage from './Screens/RocketsPage/RocketsPage';
import LaunchDetail from './Screens/LaunchDetailPage/LaunchDetail';
import RocketDetail from './Screens/RocketDetailPage/RocketDetail';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route element={<NavBar />} >
            <Route path="/" element={<LandingPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/launches" element={<LaunchesPage />} />
            <Route path="/launches/:id" element={<LaunchDetail />} />
            <Route path="/rockets" element={<RocketsPage />} />
            <Route path="/rockets/:id" element={<RocketDetail />} />
          </Route >
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
