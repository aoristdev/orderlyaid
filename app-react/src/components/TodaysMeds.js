import React from 'react'
import './css/todaysmeds.css'
import CurrentMed from './CurrentMed'

class TodaysMeds extends React.Component {
    constructor(props) {
        super(props)
        this.selectCurrentMed = this.selectCurrentMed.bind(this)
        this.state = {
            currentMed: 0
        }
    }

    selectCurrentMed(index) {
        // Scroll currentMed card into view
        document.querySelector('.currentMeds').scrollLeft = (document.querySelector('.currentMed:nth-child(' + (index + 1) + ')').offsetLeft - 220)
        
        // Update the currentMed state so it re-renders a new color on nav links
        this.setState({currentMed: index})
    }

    render() {
        const currentMedLinks = [0,1,2].map((number, index) => <a key={index} href={'#currentMed' + index} onClick={() => this.selectCurrentMed(index)} className={this.state.currentMed === index ? "label label-success" : "label label-primary"}>Current Med {index}</a>)

        const currentMeds = [0,1,2].map((number, index) => <CurrentMed key={index} index={index} />)

        return <div>
           {/* <div className="panel panel-default">*/}
                <div className="well medBackgroundPanel">
                    <div className="row">
                        <div className="col-sm-6 col-sm-offset-3">
                            <p className="currentTime">3:00</p>
                            <p className="todaysDate">Thursday, April 13</p>
                            <p className="text-center">{currentMedLinks}</p>
                        </div>
                    </div>
                    <div className="row listOfCurrentMeds">
                        <div className="col-sm-12 currentMeds">
                            {currentMeds}
                            <div className="currentMed"></div>
                        </div>
                    </div>
                </div>
           {/* </div>*/}
        </div>
    }
}
export default TodaysMeds