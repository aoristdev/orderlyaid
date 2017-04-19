import React from 'react'
import './css/todaysmeds.css'
import CurrentMed from './CurrentMed'

class TodaysMeds extends React.Component {
    constructor(props) {
        super(props)
        this.selectCurrentMed = this.selectCurrentMed.bind(this)
        // this.getMeds = this.getMeds.bind(this)
        this.state = {
            currentMed: 0,
            prescriptions: []
        }
    }
     componentDidMount() {
        fetch('/users/profile?token=' + sessionStorage.getItem('token'))
            .then(res => res.json())
            .then(res => this.setState({...res}))
            .then(res => console.log(this.state))
            // .then(res => console.log(this.state.perscriptions))
    }

    selectCurrentMed(index) {
        // Scroll currentMed card into view
        document.querySelector('.currentMeds').scrollLeft = (document.querySelector('.currentMed:nth-child(' + (index + 1) + ')').offsetLeft - 220)
        
        // Update the currentMed state so it re-renders a new color on nav links
        this.setState({currentMed: index})
    }

    render() {
        const currentMedLinks = this.state.prescriptions.map((number, index) => <a key={index} href={'#currentMed' + index} onClick={() => this.selectCurrentMed(index)} className={this.state.currentMed === index ? "label label-success" : "label label-primary"}>{number.name}</a>)

        console.log(this.state.prescriptions)
        const currentMeds = this.state.prescriptions.map((med, index) => <CurrentMed key={index} index={index} {...med} />)
        // onClick={() => this.largeCurrentMed(index)} className={this.state.currentMed === index ? "large" : "small"}>{number.name}</a>)
        
        return <div>
            {/*<div className="well medBackgroundPanel">*/}
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                        <p className="currentTime">{this.props.transmit_time}</p>
                        <p className="todaysDate">Thursday, April 13</p>
                        <p className="text-center">{currentMedLinks}</p>
                    </div>
                {/*</div>*/}
                <div className="row listOfCurrentMeds">
                    <div className="col-sm-12 currentMeds">
                        {currentMeds}
                        <div className="currentMed"></div>
                    </div>
                </div>
            </div>
        </div>
    }
}
export default TodaysMeds