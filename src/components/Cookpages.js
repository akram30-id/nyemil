import { Container, Image } from "react-bootstrap";
import cookpage from '../assets/cookpage/cookpage-1-banner.jpg';
import { useEffect, useState } from "react";
import { getTrendingCookpages, imgUrl } from "../connect/api";

const Cookpages = () => {

    const [cookpages, setCookpages] = useState([])

    useEffect(() => {
        getTrendingCookpages().then((response) => {
            setCookpages(response.trending_cookpages.data.data)
        })
    }, [])

    console.info(cookpages)

    const TrendingCookpage = () => {
        return cookpages.map((cookpage, i) => {
            return (
                <div className="col-md-6 mb-4" key={`cookpage-${i}`}>
                    <div className="card border-0 shadow-lg" style={{ borderRadius: '12px' }}>
                        <div className="card-body">
                            <Image fluid style={{ width: '1000px', height: '300px' }} src={`${imgUrl}/cookpage/${cookpage.banner}`} />
                            <div className="title mt-2">
                                <h4 className="fw-semibold">{cookpage.title}</h4>
                            </div>
                            <div className="rate">
                                <p><span className="member">{cookpage.amount_member} Member</span> &#183; <span className="resep-amount text-primary">{cookpage.recipes.length} resep</span></p>
                            </div>
                            <div className="description">
                                <p><i>{cookpage.description.length >= 60 ? cookpage.description.slice(0, 60) + '..........' : cookpage.description}</i></p>
                            </div>
                            <div className="row justify-content-end">
                                <div className="col-sm-3 d-grid">
                                    <a href="#" className="btn btn-sm rounded-pill btn-primary">Join</a>
                                </div>
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
                <h2 className="fw-bold">Halaman Masak-Masak</h2>
                <div className="row justify-content-center" id="cookpages">
                    <TrendingCookpage />
                </div>
            </Container>
        </>
    )
}

export default Cookpages;