import { Container, Image } from "react-bootstrap";
import cake from '../assets/categories/breakfast.jpg';
import { useEffect, useState } from "react";
import { getCategories, imgUrl } from "../connect/api";

const PopularCategories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories().then((response) => {
            const data = response.trending_categories.data
            setCategories(data)
        })
    }, [])

    const TrendingCategories = () => {
        return categories.map((category, i) => {
            return (
                <div className="col-4 col-lg-2" key={i}>
                    <a href="#" className="text-decoration-none">
                        <Image className="shadow" fluid roundedCircle src={`${imgUrl}/categories/${category.thumbnail}`} />
                        <p className="fw-bold text-center mt-3">{category.title}</p>
                    </a>
                </div>
            )
        })
    }

    return (
        <>
            <Container className="mt-5">
                <h2 className="fw-bold">Kategori Terpopuler</h2>
                <div className="row justify-content-between mt-3">
                    <TrendingCategories />
                </div>
            </Container>
        </>
    )
}

export default PopularCategories;