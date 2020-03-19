import React from 'react';
import { connect } from 'react-redux';
import { doggo } from '../actions';
import './DogPics.css';

const DogPic = props => {
    return (
        <div className="doggo-pic">
            {props.loading ? (
                <h1>Loading</h1>
            ) : 
            (
                <img className="dog-img" src={props.dog} alt="dog" />
            )}
            <button className="button" onClick={() => {props.doggo()}}>Fetch New Doggo</button>
        </div>
    );
}

const mapStateToProps = state => {
    return { 
        loading: state.loading,
         dog: state.dog 
        };
}

export default connect(mapStateToProps, { doggo })(DogPic);