import React, {Component} from 'react'
import Student from './Student' //make this
import { fetchStudents } from '../reducers/index'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
  return { students: state.students }
}

const mapDispatchToProps = (dispatch) => {
  return { fetchStudents: () => dispatch( fetchStudents() )}
}

class Students extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchStudents()
  }

  render() {
    return (
      <div>
      {
        this.props.students.map(student =>
          <Student key={student.id} student={student} />)
      }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Students)
