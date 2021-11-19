import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Calculator from './calculator'
import { shipColorData, shipPowerData, shipWrapDriveData, shipPackages } from '../const'
import "./configurator.scss"
import polygonIcon from '../polygon-icon.svg'


const Configurator = () => {
    const [state, setState] = useState({
        selectColorPrice: 0,
        selectPowerPrice: 0,
        warpDrivePrice: 0,
        selectOptionPackagePrice: 0
    })

    return (
        <>
            <Container>
                <div className="spaceship-config-box">
                    <Row>
                        <Col md={12}>
                            <h4 className="config-heading">Spaceship configurator</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={9}>
                            <Row>
                                <div className="card-title-1 mt-0">Select color : </div>
                                {shipColorData.map((item, index) => (
                                    <Col md={4} sm={4} xs={6} key={index}>
                                        <div className={state.selectColorPrice==item.amount?"color-box active":"color-box"} onClick={() => setState({ ...state, selectColorPrice: item.amount })}>
                                            <span className="color-card" style={{backgroundColor:item.color}}></span>
                                            <h4 className="card-value">{`+${item.amount}€`}</h4>
                                            <h4 className="card-value">{item.name}</h4>
                                        </div>
                                    </Col>
                                ))
                                }
                            </Row>
                            <Row>
                                <div className="card-title-1">Select power : </div>
                                {shipPowerData.map((item, index) => (
                                    <Col md={4} sm={4} xs={6}  key={index}>
                                        <div className={state.selectPowerPrice==item.amount?"color-box active":"color-box"} onClick={() => setState({ ...state, selectPowerPrice: item.amount })}>
                                            <h4 className="card-value">{item.name}</h4>
                                            <h4 className="card-value">{`+${item.amount}€`}</h4>
                                        </div>
                                    </Col>
                                ))
                                }
                            </Row>
                            <Row>
                                <div className="card-title-1">Warp drive : </div>
                                {shipWrapDriveData.map((item, index) => (
                                    <Col md={4} sm={4} xs={6}  key={index}>
                                        <div className={state.warpDrivePrice==item.amount?"color-box active":"color-box"} onClick={() => setState({ ...state, warpDrivePrice: item.amount })}>
                                            <h4 className="card-value capital">{item.name}</h4>
                                            <h4 className="card-value">{`+${item.amount}€`}</h4>
                                        </div>
                                    </Col>
                                ))
                                }
                            </Row>
                            <Row>
                                <div className="card-title-1">Select option package : </div>
                                {shipPackages.map((item, index) => (
                                    <Col md={4} sm={6}  key={index}>
                                        <div  className={state.selectOptionPackagePrice==item.amount?"color-box package active":"color-box package"} onClick={() => setState({ ...state, selectOptionPackagePrice: item.amount })}>
                                            <div className="package-head">
                                                <h4 className="card-value">{item.name}</h4>
                                                <h4 className="card-value">{`+${item.amount}€`}</h4>
                                            </div>
                                            <ul className="feature-list">
                                                {item.features.map((value,index)=>(
                                                    <li key={index}>
                                                        <img src={polygonIcon} alt="polygon" className="icon" />
                                                        {value}
                                                    </li>
                                                ))}
                                            </ul>

                                        </div>
                                    </Col>
                                ))
                                }
                            </Row>
                        </Col>
                        <Col lg={3}>
                            <Calculator colorPrice={state.selectColorPrice} powerPrice={state.selectPowerPrice} wrapPrice={state.warpDrivePrice} packagePrice={state.selectOptionPackagePrice}  />
                        </Col>
                    </Row>
                </div>
            </Container>
        </>

    )
}
export default Configurator