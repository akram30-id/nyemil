import { Container, Image } from "react-bootstrap";
import cake from '../assets/deserts/pancakes.jpg';
import { useEffect, useState } from "react";
import { getRecipes, imgUrl } from "../connect/api";

const RecomendedRecipe = () => {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        getRecipes().then((response) => {
            setRecipes(response.recipes.data.data.data)
        })
    }, [])

    const TrendingRecipes = () => {
        return recipes.map((recipe, i) => {
            return (
                <div className="col-6 col-lg-3 mb-4" key={`show-${i}`}>
                    <div className="card border-0 shadow-lg" style={{ borderRadius: '12px' }}>
                        <div className="card-body">
                            <Image fluid style={{ width: '230px', height: '150px' }} src={`${imgUrl}/recipe/${recipe.thumbnail}`} alt="" />
                            <div className="rate mt-2">
                                {(() => {
                                    let icons = []
                                    for (let j = 1; j <= recipe.rate; j++) {
                                        icons.push(<i className="bi bi-star-fill" key={`showOn-${j}`} style={{ color: 'yellow' }}></i>)
                                    }
                                    if (recipe.rate < 5) {
                                        for (let k = 1; k <= (5 - recipe.rate); k++) {
                                            icons.push(<i className="bi bi-star-fill" key={`showOff-${k}`} style={{ color: 'grey' }}></i>)
                                        }
                                    }
                                    return icons
                                })()}
                                &#183;<span className="resep-amount">{recipe.visitors >= 1000 ? recipe.visitors / 1000 + 'rb' : recipe.visitors} pengunjung</span>
                            </div>
                            <div className="title mt-2">
                                <a href="#" className="fw-semibold fs-5 text-decoration-none text-black">{recipe.title}</a>
                            </div>
                            <a href="#" className="text-decoration-none">
                                <div className="page d-flex" style={{ color: 'darkcyan' }}>
                                    <i className="bi bi-people-fill"></i>
                                    <p className="fw-semibold">{recipe.cookpage.title}</p>
                                </div>
                            </a>
                            <div className="description">
                                <p><i>"{recipe.description.length >= 20 ? recipe.description.slice(0, 30) + '......' : recipe.description}"</i></p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }

    return (
        <>
            <Container className="mt-5">
                <h2 className="fw-bold">Mau Masak Apa Hari Ini?</h2>
                <div className="row justify-content-between" id="recipes">
                    <TrendingRecipes />
                </div>

                <div className="row justify-content-center" id="pagination">
                    <div className="col-5 d-grid">
                        <button className="btn btn-light border border-primary" id="btn-pagination">Tampilkan Lebih Banyak</button>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default RecomendedRecipe;