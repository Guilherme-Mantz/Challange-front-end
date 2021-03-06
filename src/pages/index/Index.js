import ButtonFilter from "../../components/buttonFilter/ButtonFilter";
import CardFilm from "../../components/CardFilm/CardFilm";
import Header from "../../components/Header";
import axios from "axios";
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";

export default function Index () {
    const {id} = useParams();
    const [data, setData] = useState();

    useEffect(() =>{
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=77de67cc3e0bf5fd1326957e1b15e076&language=en-US&page=${id}`)
        .then((response) => {
            setData(response.data)
        })
    },[id, data]);

    const listFilOne = [ 'Ação', 'Aventura', 'Animação', 'Comédia', 'Crime', 'Documentário', 'Drama', 'Família', 'Fantasia', 'História' ];
    const listFilTwo = [ 'Terror', 'Música', 'Mistério', 'Romance', 'Ficcção científica', 'Cinema TV', 'Thriller', 'Guerra', 'Faroeste' ];

    return (
        <>
        <Header />
        <div className="container-fluid" id="filter">
            <div className="container text-center">
                <h1 className="primary-color me-auto ms-auto" id="title-filter">Milhões de filmes, séries e pessoas para descobrir. Explore já.</h1>
            
                <small className="primary-color">FILTRE POR:</small>

                <div className="row row-cols-auto justify-content-xl-center mt-4">
                    <ButtonFilter value={listFilOne} />
                </div>
                <div className="row row-cols-auto justify-content-xl-center">
                    <ButtonFilter value={listFilTwo} />
                </div>
            </div>
        </div>

        <div className="container mt-4">
            <div className="row row-cols-2 row-cols-md-4 row-cols-lg-6 g-4">
                {
                    data !== undefined ? <CardFilm dataFilms={data}/> : ''
                }
            </div>
        </div>
        <nav aria-label="Navegação de página exemplo" className="mt-5">
            <ul className="pagination justify-content-center">
                <li className="page-item"><Link className="page-link" to="/1">1</Link></li>
                <li className="page-item"><Link className="page-link" to="/2">2</Link></li>
                <li className="page-item"><Link className="page-link" to="/3">3</Link></li>
            </ul>
        </nav>
        </>
    )
};