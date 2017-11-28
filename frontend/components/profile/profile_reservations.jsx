import React from 'react';
import {Link} from 'react-router-dom';

class ProfileReservations extends React.Component{

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTime(timeslot){
    var time = timeslot.slice(12,-5)
    // 07:00:00


    return(
      time
    );

  }

  handleDate(date){
    var date = date.slice(0,10);

    // 2017-11-05

    let year = date.slice(0,4);
    let month = date.slice(5,7);
    let day = date.slice(8);

    return(
      month + '-' + day + '-' + year
    );
  }


  handleSubmit(id){

    return(e => {
      e.preventDefault();
      this.props.deleteReservation(id)
    })

  }

  render(){
    const {reservations,restaurantsIndex} = this.props;

    return(
      <div>
        <h1> My Reservations </h1>
        <ul className = "profile-restaurants-index-ul">
          {reservations.map( (res) => (

            <li className = "profile-restaurants-index-li"
            key = {res.id}>

                    <div  className = "profile-restaurants-index-div-left">

                    <Link to={`/restaurants/${res.restaurant_id}`}>
                       <img className = "thumbnail" src={restaurantsIndex[res.restaurant_id].thumbnail}/>
                    </Link>

                      <h2> {restaurantsIndex[res.restaurant_id].name} </h2>

                      <h2>
                        Party-Size: {res.head_count}

                      </h2>

                      <h2>
                        Time: {this.handleTime(res.timeslot)} PM

                      </h2>

                      <h2>
                        Date: {this.handleDate(res.date)}

                      </h2>



                      <br/>


                    </div>

                    <div className = "profile-restaurants-index-div-right">
                      <button
                      type="button" onClick={this.handleSubmit(res.id)}> Delete </button>
                    </div>


            </li>

          ))}

        </ul>


      </div>

    );

  }


}

export default ProfileReservations;
// <img className = "thumbnail" src={res.restaurant.thumbnail}/>
// <h2> {res.restaurant.name} </h2>
