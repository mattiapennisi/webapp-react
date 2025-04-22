import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { DefaultProvider } from './contexts/DefaultContext.jsx';

import DefaultLayout from './layouts/DefaultLayout.jsx'

import HomePage from './pages/HomePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import MovieDetails from './pages/MovieDetails.jsx'

function App() {
  return (
    <DefaultProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DefaultProvider>
  )
}

export default App