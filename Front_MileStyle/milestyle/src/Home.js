import React from 'react'
import Navs from './Nav'
import { Navbar , FormGroup , ButtonToolbar, NavItem ,Nav, Button , FormControl} from 'react-bootstrap';
import {Link} from 'react-router'
class Home extends React.Component {
  render(){
    const city = ['Bangkok' ,'Chiangmai' , 'Phuket', 'Krabi', 'Chaingrai' , 'Songkla' ,'Chonburi', 'Ayutthaya' , 'Karnchanaburi' ]

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
            <div className="portlet light">
            <div className="portlet-title">
                    <div className="caption font-kademy">Popular City</div>
                    </div>
                    <div className="portlet-body">
                    <div className="row">
                    {
                      city.map((value , index) => {
                        return(
                            <div className="col-md-3" key={index+value}>
                            <Link to={'search/city/'+value} >
                              <p className="searchfont">{value}</p>
                              </Link>
                            </div>
                        );
                      })}
                    </div>
                    </div>
            </div>
        </div>
      </div>

    );
  }
}

export default Home
