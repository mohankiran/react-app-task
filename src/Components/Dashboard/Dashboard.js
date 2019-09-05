import React from 'react';
import '../../App.css'
import './Dashboard.css'

 const Dashboard = (props) => {
     
   
   function submitAnswers (event) {
    event.preventDefault();
   }
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
                    <div className="row">
                        {
                           props.location.values.comments.map((data, i) => 
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
                                <button className="btn btn-primary" onClick={submitAnswers}>Submit </button>
                           </div>
                       </div>
                            ) 
                        }
                        
             
           </div> 
           </div>
        </div>
    )
}
export default Dashboard