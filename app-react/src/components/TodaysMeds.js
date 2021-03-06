import React from 'react'
import './css/todaysmeds.css'
import CurrentMed from './CurrentMed'
import moment from 'moment'

class TodaysMeds extends React.Component {
    constructor(props) {
        super(props)
        this.selectCurrentMed = this.selectCurrentMed.bind(this)
        this.setTaken = this.setTaken.bind(this)
        // this.getMeds = this.getMeds.bind(this)
        this.state = {
            currentMed: 0,
            prescriptions: []
        }
    }
    componentDidMount() {
        fetch('/users/profile?token=' + sessionStorage.getItem('token'))
            .then(res => res.json())
            .then(res => this.setState({ ...res }))
            .then(res => console.log(this.state))
        // .then(res => console.log(this.state.prescriptions))
    }

    selectCurrentMed(index) {
        // Scroll currentMed card into view
        document.querySelector('.currentMeds').scrollLeft = (document.querySelector('.currentMed:nth-child(' + (index + 2) + ')').offsetLeft - 220)

        // Update the currentMed state so it re-renders a new color on nav links
        this.setState({ currentMed: index })
    }

    setTaken(medId, index){
        let prescriptions=this.state.prescriptions
        prescriptions.splice(index, 1)
        this.setState({prescriptions: prescriptions})
    }

    render() {
        const currentMedLinks = this.state.prescriptions.map((number, index) => <a key={index} href={'#currentMed' + index} onClick={() => this.selectCurrentMed(index)} id="medLinks" className={this.state.currentMed === index ? "label label-success" : "label label-primary"}>{number.name}</a>)

        console.log(this.state.prescriptions)
        const currentMeds = this.state.prescriptions.map((med, index) => <CurrentMed key={index} index={index} {...med} currentMed={this.state.currentMed} take={this.setTaken} onClick={() => this.selectCurrentMed(index)} />)



        return <div>
            <div className="medDisplay row">
                <div className="col-sm-6 col-sm-offset-3">
                    <p className="currentTime">{moment(this.state.last_taken).format('h:mm a')}</p>
                    <p className="todaysDate">{moment(this.state.last_taken).format('dddd, MMMM D')}</p>
                    <p className="text-center">{currentMedLinks}</p><br />
                </div>

                <div className="row listOfCurrentMeds">
                    <div className="col-sm-12 currentMeds">
                        <div style={{ minWidth: '300px', flex: 1 }}></div>
                        {currentMeds}
                        <div style={{ minWidth: '300px', flex: 1 }}></div>
                    </div>
                </div>
            </div>
        </div>
    }
}
export default TodaysMeds
