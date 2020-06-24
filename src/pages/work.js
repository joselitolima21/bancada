import React, { useState } from 'react'
import HouseIcon from '@material-ui/icons/HouseOutlined'
import ChartIcon from '@material-ui/icons/ShowChart'
import Alarm from '@material-ui/icons/Alarm'
import Info from '@material-ui/icons/HelpOutline'
import Graph from '@material-ui/icons/BarChart'

export default function Work({ history }) {

    const [file,setFile] = useState('valor1')

    return (
        <div className='content'>
            <div className='workGrid'>
                <div className='infoBar'>
                    <div className='primeiraDiv'>
                        <div className='telainicalName' >
                            <HouseIcon className='iconInfoBar' style={{ fontSize: 20 }} />
                            <h1>TELA INICIAL</h1>
                        </div>
                    </div>
                    <div className='segundaDiv'>
                        <div className='resultsName'>
                            <ChartIcon className='iconInfoBar' style={{ fontSize: 20 }} />
                            <h1>RESULTADOS</h1>
                        </div>
                    </div>
                    <div className='terceiraDiv'>
                        <div className="ensaioInfos">
                            <h2>Ensaio: Teste 1</h2>
                            <h2>Hélice: 13x4</h2>
                        </div>
                    </div>
                </div>

                <div className='resultsBar'>

                    <div className="timerDiv">
                        <div className="timeSet">
                            <Alarm className='alarmIcon' style={{ fontSize: 35 }} />
                            <h2>0:30</h2>
                            <div className="divButton initButton">
                                <button className='btn blue' onClick={() => { }} >Iniciar Ensaio</button>
                            </div>
                        </div>
                    </div>

                    <div className="resultsShowDiv">
                        <div className='valoresMedios' >
                            <h2>Valores Médios</h2>
                            <Info className='questionIcon' style={{ fontSize: 18 }} />
                        </div>

                        <div className="cardResults">
                            <Graph className='graphIcon' style={{ fontSize: 74}} />
                            <div className="graphNames">
                                <h1>Tração</h1>
                                <h2>400 N</h2>
                            </div>
                        </div>

                        <div className="cardResults">
                            <Graph className='graphIcon' style={{ fontSize: 74}} />
                            <div className="graphNames">
                                <h1>Torque</h1>
                                <h2>30 N.m</h2>
                            </div>
                        </div>

                        <div className="cardResults">
                            <Graph className='graphIcon' style={{ fontSize: 74}} />
                            <div className="graphNames">
                                <h1>Rotação</h1>
                                <h2>100 RPM</h2>
                            </div>
                        </div>

                        <div className="cardResults">
                            <Graph className='graphIcon' style={{ fontSize: 74}} />
                            <div className="graphNames">
                                <h1>Potência</h1>
                                <h2>45 HP</h2>
                            </div>
                        </div>


                    
                    </div>

                    <div className="exportDiv">
                        <div className='export' >
                            <h2>Exportar</h2>
                            <Info className='questionIcon' style={{ fontSize: 18 }} />
                        </div>

                        <select className="selectBox" value={file} onChange={(event) => setFile(event.target.value)}>
                            <option className='options' value="valor1">Valor 1</option>
                            <option className='options' value="valor2" >Valor 2</option>
                            <option className='options' value="valor3">Valor 3</option>
                        </select>
                    </div>

                </div>

                <div className='graphArea'>

                </div>
            </div>
        </div >
    )

}