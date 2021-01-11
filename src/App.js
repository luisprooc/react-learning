import React,{createRef} from 'react';
import Chart from "chart.js";


class Graficas extends React.Component{
    grafica = createRef();

    componentDidMount(){
        const ctx = this.grafica.current.getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Gray', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'Gray',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'Gray',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 2
                }]
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
    }

    render(){
        return(
            <>
                <canvas width="200" height="200" ref={this.grafica}></canvas>
            </>
        )
    }
} 


const App = () => {
    
    return(
        <>  
            <h1>Graficas 🐗</h1>
            <Graficas/>
        </>
    );
};

export default App;