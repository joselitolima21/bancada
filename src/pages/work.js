import React, { useState, useEffect } from 'react'
import HouseIcon from '@material-ui/icons/HouseOutlined'
import ChartIcon from '@material-ui/icons/ShowChart'
import Alarm from '@material-ui/icons/Alarm'
import Info from '@material-ui/icons/HelpOutline'
import Graph from '@material-ui/icons/BarChart'
import Save from '@material-ui/icons/SaveOutlined'
import Open from '@material-ui/icons/OpenInBrowserOutlined'
import { Chart } from 'chart.js'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../store/reducers/infoFileReducer'
import files from '../functions/manageFile'

export default function Work({ history }) {

    const dispatch = useDispatch()
    const state = useSelector(state => state.infoFileReducer)

    useEffect(() => {
        var ctx = document.getElementById('myChart').getContext('2d'); // eslint-disable-next-line
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [
                    0.000,
0.600,
1.159,
1.718,
2.323,
2.881,
3.490,
4.051,
4.609,
5.215,
5.772,
6.332,
6.940,
7.498,
8.104,
8.666,
9.225,
9.833,
10.394,
10.954,
11.560,
12.119,
12.678,
13.281,
13.843,
14.450,
15.011,
15.571,
16.176,
16.733,
17.292,
17.893,
18.454,
19.060,
19.618,
20.179,
20.785,
21.344,
21.901,
22.504,
23.062,
23.622,
24.228,
24.788,
25.393,
25.951,
26.511,
27.119,
27.673,
28.229
                ],
                datasets: [{
                    label: 'Tração',
                    data: [564,564,564,564,564,564,564,564,564,564,564,564,564,564,564,564,564,564,564,564,564,564,564,564,564,564,564,564,564,564,564,564,564,564,564,564,564,564,564,564,564,564,564,564,564,564,564],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                    ],
                    borderWidth: 1,
                    fill: false
                },
                /*{
                    label: 'Torque',
                    data: [4, 3, 1, 4, 5],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.2)',
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)',
                    ],
                    borderWidth: 1,
                    fill: false
                },
                {
                    label: 'Rotação',
                    data: [2, 3, 4, 1, 1],
                    backgroundColor: [
                        'rgba(255, 206, 86, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 206, 86, 1)',
                    ],
                    borderWidth: 1,
                    fill: false
                }, {
                    label: 'Potência',
                    data: [3, 3, 2, 3, 1],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.2)',
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)',
                    ],
                    borderWidth: 1,
                    fill: false
                }*/]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }, [])

    const [file, setFile] = useState('valor1')

    return (
        <div className='content'>
            <div className='workGrid'>
                <div className='infoBar'>
                    <div className='primeiraDiv'>

                        <div className='telainicalName' >
                            <HouseIcon className='iconInfoBar' style={{ fontSize: 20 }} />
                            <button className='routeButtons' onClick={() => {
                                history.push('/')
                                dispatch(actions.clearState())
                            }}>
                                <h1>TELA INICIAL</h1>
                            </button>
                        </div>
                    </div>
                    <div className='segundaDiv'>
                        <div className='resultsName'>
                            <ChartIcon className='iconInfoBar' style={{ fontSize: 20 }} />
                            <button className='routeButtons'>
                                <h1>RESULTADOS</h1>
                            </button>
                        </div>
                    </div>

                    <div className='extraDiv'>
                        <div className='telainicalName' >
                            <Save className='iconInfoBar' style={{ fontSize: 20 }} />
                            <button className='routeButtons' onClick={() => {
                                files.save(state.name, state)
                            }}>
                                <h1>Salvar Ensaio</h1>
                            </button>
                        </div>

                        <div className='telainicalName' >
                            <Open className='iconInfoBar' style={{ fontSize: 20 }} />
                            <button className='routeButtons'
                                onClick={() =>  files.read()}>
                            <h1>Abrir Ensaio</h1>
                            </button>
                    </div>
                </div>


                <div className='terceiraDiv'>
                    <div className="ensaioInfos">
                        <h2>Ensaio: {state.name}</h2>
                        <h2>Hélice: {state.heliceType}</h2>
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
                        <Graph className='graphIcon' style={{ fontSize: 74 }} />
                        <div className="graphNames">
                            <h1>Tração</h1>
                            <h2>564 g</h2>
                        </div>
                    </div>

                </div>

                <div className="exportDiv">
                    <div className='export' >
                        <h2>Exportar</h2>
                        <Info className='questionIcon' style={{ fontSize: 18 }} />
                    </div>

                    <select className="selectBox" value={file} onChange={(event) => setFile(event.target.value)}>
                        <option className='options' value="valor1">Txt</option>
                        <option className='options' value="valor2" >Csv</option>
                        <option className='options' value="valor3">Valor 3</option>
                    </select>
                </div>

            </div>
            <div className='graphArea'>
                <div className='name-graph' >
                    <h2>Gráfico</h2>
                    <Info className='questionIcon' style={{ fontSize: 26 }} />
                </div>
                <div className="graphRegion">
                    <canvas id="myChart" className='myChart'></canvas>
                </div>
            </div>
        </div>
        </div >
    )

}

/* <div className="cardResults">
                        <Graph className='graphIcon' style={{ fontSize: 74 }} />
                        <div className="graphNames">
                            <h1>Torque</h1>
                            <h2>0 N.m</h2>
                        </div>
                    </div>

                    <div className="cardResults">
                        <Graph className='graphIcon' style={{ fontSize: 74 }} />
                        <div className="graphNames">
                            <h1>Rotação</h1>
                            <h2>0 RPM</h2>
                        </div>
                    </div>

                    <div className="cardResults">
                        <Graph className='graphIcon' style={{ fontSize: 74 }} />
                        <div className="graphNames">
                            <h1>Potência</h1>
                            <h2>0 HP</h2>
                        </div>
                    </div> */
