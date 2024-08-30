import { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import Card from './Card'
import Card2 from './Card2'
import CardPhoto from "./CardPhoto"


function Detail() {



    let [data, setData] = useState({});



    useEffect(() => {
        fetch('http://localhost:3000/')
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                setData(data);
                let instruction1 = data.Instructions.slice(0, array.length / 2);
                let instruction2 = data.Instructions.slice((array.length / 2)+1,array.length);

            }
            )
            .catch((error) => {
                console.log(error);
            })
    }, [])





    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" >
                <div className="container-fluid" id="header">
                    <div id="div-logo">
                        <span id='logo'>Tastefully</span>

                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span><i className="bi bi-blockquote-right"></i></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page">Submit recipe</a>
                            </li>
                            <li className="nav-item">
                                <Link to={""} className="nav-link active" aria-current="page">My Profile</Link>
                            </li>
                            <li className="nav-item">
                                <button type="button" class="btn btn-success" id='nav-button'>Search bar</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container-fluid">

                <div className="row">
                    <div className="col-12" id='row-1'>
                        <h1 id='row1-h1'>Produce</h1>
                        <h3 id='row1-h3'>Fresh - August 21,2023</h3>
                    </div>
                    <hr id='row1-hr'></hr>

                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly", margin: "0 15%" }} className="content">

                {/* <div className="row align-items-center" id='row-2'> */}

                <div className="col-lg-3" id='cards'>
                    <CardPhoto img={data.Image} title={data.title} people={data.people} address={data.address} /></div>
                <div style={{ display: "flex", justifyContent: "space-evenly" }} className="content">
                    <div className="col-lg-3"><Card  ingredient={data.ingredient} /></div>
                    <div className="col-lg-3"><Card2 Instructions={instruction1} /></div>
                    <div className="col-lg-3"><Card2 Instructions={instruction2} /> </div>
                </div>

                {/* </div>  */}

            </div>






        </>
    )

}


export default Detail