import React, { Component } from 'react';
import Campus from './Campus'
import {fetchCampuses} from '../reducers'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return { campuses: state.albums }
}

const mapDispatchToProps = (dispatch) => {
  return { fetchCampus: () => dispatch(fetchCampuses())}
}

class Campuses extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchCampus()
  }

  render() {
    return (
      <div>
        {
          this.props.campuses.map(campus =>
          <Campus key={campus.id} campus={campus} />)
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Campuses)
