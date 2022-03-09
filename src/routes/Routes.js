import { Route, Routes } from 'react-router-dom';

import Index from '../pages/index/Index';
import SelectedFilm from '../pages/SelectedFilm/SelectedFilm';

export default function Router(){
    return (
        <Routes>
            <Route path='/' exact element={ <Index /> } />
            <Route path='/:id' element={ <Index /> } />
            <Route path='movie/:id' element={ <SelectedFilm /> } />
        </Routes>
    )
};