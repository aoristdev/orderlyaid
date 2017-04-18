<div className="mainNav container-fluid">
                <div className="profileNav">
                    <div className="row">
                        <div className="col-sm-2">
                            <img src="https://unsplash.it/200/?blur" alt="..." className="userImg img-circle" />
                        </div>
                        <div className="col-sm-2">
                            <p className="userName">{this.state.patient_name}</p>|
                        </div>
                        <div className="col-sm-8">
                            <div className="tabs">
                                <ul className="nav nav-pills">
                                    <li role="presentation" id="tabname" onClick={this.goToTodaysMeds}><a>Current</a></li>
                                    <li role="presentation" onClick={this.goToHistory}><a>History</a></li>
                                </ul>
                            </div>
                        </div>   
                    </div>
                </div>
            </div>
