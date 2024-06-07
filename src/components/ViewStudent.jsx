import React, { useState } from 'react'
import NavBar from './NavBar'

const ViewStudent = () => {
    const [data,changedData]=useState(
    [
        {"name":"sree","adnNo":101,"rollNo":12},
        {"name":"sree","adnNo":101,"rollNo":12},
        {"name":"sree","adnNo":101,"rollNo":12},

    ]
)
    return (
        <div>
            <NavBar/>
            <h1><center>STUDENT LIST</center></h1>
            <br />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                           {data.map(
                            (value,index) => {
                                return  <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <div class="card">
                                    <img src="https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg" class="card-img-top" alt="..."/>
                                        <div class="card-body">
                                            <h5 class="card-title">{value.name}</h5>
                                            <p class="card-text">ADMNno:{value.adnNo}</p>
                                            <p class="card-text">rollNo:{value.rollNo}</p>
                                            <a href="#" class="btn btn-primary">MORE </a>
                                        </div>
                                </div>
                            </div>
                            }
                            
                           )}
                            
                           
                           
                            
                            
                           
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewStudent