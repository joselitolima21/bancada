/*import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../store/reducers/testeReducer'
import portFunction from '../functions/funcTeste'
import { Line } from 'react-chartjs-2'

export default function Teste({ history }) {
    const dispatch = useDispatch()
    const state = useSelector(state => state.testeReducer)

    function start(time) {
        
        var startTime = Date.now()
        const { port, parser } = portFunction()
        //Funçoes que escutam eventos
        dispatch(actions.setTimeStart(startTime))
        port.on('open', () => (console.log("Conexão iniciada !!"))) // Realizar algo: enviar para o redux uma action
       
        
        // Array para adicionar os dados
        parser.on('data', (line) => {
            dispatch(actions.updateData(line))
            var timeEnd = Date.now()
            console.log(timeEnd)
            dispatch(actions.updateLabel(timeEnd))
            // Aqui enviar action para o redux atualizar o valor de data
        })

        //Função para fechar a conexão
        function closeConnection() {
            port.close((err) => {
                if (err) { console.log(err) }
            })
        }

        // Fechar conexão depois de um tempo determinado
        setTimeout(() => {
            closeConnection()
            console.log("Conexão Fechada !!") // Realizar algo: enviar para o redux uma action
            console.log('data: ',state.data)
            console.log('labels: ',state.labels)
        }, time)
    }

    const dataSet = {
        labels: state.labels,
        datasets: [
            {
                label: 'Distância em (cm)',
                fill: true,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: state.data,
            }
        ]
    };

    return (
        <div className='content'>
            <div>
                <button className='btn blue' onClick={() => { start(5000) }}> Iniciar </button>
                <button className='btn white' onClick={() => {dispatch(actions.clearData())}}> Apagar </button>
                <button className='btn white' onClick={() => history.push('/')}> Voltar </button>

            
                <Line clasName='graph' height={500} width={900} data={dataSet} options={{
                    scales: {
                        yAxes: [{
                            ticks: {
                                min: 0
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'Distância (cm)',
                                fontFamily: 'sans-serif',
                            }
                        }],
                        xAxes: [{
                            //type: 'time',
                            scaleLabel: {
                                display: true,
                                labelString: 'Tempo (s)',
                                fontFamily: 'sans-serif',
                            }
                        }]
                    }
                }} />
            </div>
        </div>
    )

}*/