import React , {props}from 'react'
import Navs from './Nav'
import { Navbar , FormGroup , FormControl} from 'react-bootstrap';
import axios from 'axios'
class SearchDetail extends React.Component{

      constructor(props) {
       super(props);
       this.state = {
         activities : [] ,
         city : this.props.params.city
       };
     }

     componentDidMount() {
       var result = [];
       axios.get('http://localhost:8000/api/activities/province/'+this.state.city).then((respone) =>{
          this.setState({ activities : respone.data})
          console.log(this.state.activities)
       }).catch(function (error) {
            console.log(error);
      })
     }
    render(){
      return(
        <div>
          <Navs/>
          <div className="container">
              <div className="row">
                <div className="col-md-12">
                <form>
                  <FormGroup>
                  <FormControl
             type="text"
             placeholder="Activity, City, Owner"
           />
           </FormGroup>
                </form>
                </div>
              </div>
                <h4>Result for : {this.state.city}</h4>
                <div className="row">
                {
                  this.state.activities.map((value , index) => {
                    return(
                      <div className="col-md-4" key={index+value}>
                    <div className="portlet light">
                      <div className="portlet-title">
                        <p className="searchfont">{value.name}</p>
                      </div>
                      <div className="portlet-body">
                        <p>Date : {value.date} , Price : {value.price}</p>
                      </div>
                    </div>
                  </div>
                    );
                  })
                }
                </div>
              </div>
        </div>

      )
    }
}
export default SearchDetail
