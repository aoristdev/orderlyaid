import React from 'react'


class MedHistory extends React.Component { 
render(){

    return<div>
    <div class="historyTable">
        <table class="table table-hover">
            <th class="active">Date</th>
            <th class="active">Time Taken</th> 
            <th class="active">Medication</th>
            <th class="active">Count</th>

            <tr>
                <td>04.10.2017</td>
                <td>3:00 pm</td> 
                <td>Advil</td>
                <td>3</td>                                
            </tr>

            <tr>
                <td>04.10.2017</td>
                <td>6:00 pm</td> 
                <td>Advil</td>
                <td>2</td>
            </tr>

            <tr>
                <td>04.10.2017</td>
                <td>9:00 pm</td>
                <td>Advil</td>
                <td>4</td>                                                        
            </tr>

            <tr>
                <td>04.11.2017</td>
                <td>9:00 am</td>
                <td>Advil</td>
                <td>20</td>                                 
            </tr>
        </table>
    </div>

</div>
}
}
export default MedHistory