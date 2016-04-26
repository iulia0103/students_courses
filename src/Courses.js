import React from 'react';
import jQuery from 'jquery';
import Form from './Form';

class Courses extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      courses: []
    };
  }

  retrieveCourses(){
    var app = this;
    jQuery.get("http://localhost:3000/courses.json", (function(data){
      app.setState({
        courses: data.courses,
      });
    }).bind(this));
  }

  componentDidMount() {
    this.retrieveCourses();
  }

  render() {
    let courses = this.state.courses.map(function(course) {
      return <li key={course.id}><h1>{course.name}</h1><p>{course.description}</p></li>;
    });

    return (
      <div>
        <Form onAddCourse={this.retrieveCourses.bind(this)}/>

        <ul>
          {courses}
        </ul>
      </div>
    )
  }

}

export default Courses;
