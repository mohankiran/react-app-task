import React from 'react';
import '../../App.css'
import './Dashboard.css'
import { connect } from 'react-redux'
import * as actionCreators from '../../Store/actions/actions'

 const Dashboard = (props) => {
     
    return(
        <div>
            <nav className="navbar navbar-dark bg-dark">
                    <div className="container">
                            <div className="headr-text">
                              Dashboard
                            </div>
                    </div>
               </nav>
               <div className="container-fluid">
                    <div className="tl-Cent pt-2">
                        <button className="btn btn-danger" onClick={(event) => props.getDetails(event)}>Get Details !</button>
                    </div>
                    <div className="row">
                        {console.log("props Data--->",props.comments)}
                        {
                           props.comments.map((data, i) => 
                           <div key={i} className="card col-lg-4 col-sm-12 col-md-6 mt-4  ">
                           <div className="card-body">
                               <h5 className="card-title">{data.courseName}</h5>
                               <p className="card-text">{data.Question}</p>
                               <div>
                                    <label>
                                    <input type="radio" name="survey" id="Radios1" value="Yes"/>
                                        &nbsp;   {data.option1}
                                    </label>
                               </div>
                                <div>
                                    <label>
                                    <input type="radio" name="survey" id="Radios1" value="Yes"/>
                                        &nbsp;   {data.option2}
                                    </label>
                                </div>
                           </div>
                           <div className="card-footer tl-Cent">
                                <button className="btn btn-primary" >Submit </button>
                           </div>
                       </div>
                            ) 
                        } 
                        
             
                    </div> 
           </div>
        </div>
    )
}

const mapStatetoProps = (state) => {
    return {
        comments: state.dashboardReducer.comments
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getDetails: (event) => dispatch(actionCreators.getValues(event))
    }

}

export default connect(mapStatetoProps, mapDispatchToProps) (Dashboard);