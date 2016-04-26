import React from 'react';
import jQuery from 'jquery';

class Form extends React.Component{
  constructor(){
    super();
  }

  createCourse(event){
    event.preventDefault();

    let newCourse = {
      name: this.refs.name.value,
      description: this.refs.description.value
    };

    var app = this;

    jQuery.ajax({
      type: "POST",
      url: "http://localhost:3000/courses.json",
      data: JSON.stringify({
        course: newCourse
      }),
      contentType: "application/json",
      dataType: "json"

    }).done(function( data ) {
      app.props.onAddCourse();
      alert( "Data saved: " + data );
    })
    .fail(function(error) {
      console.log(error);
    });
  }


  render() {
      return (
          <div>
            <form onSubmit={this.createCourse.bind(this)}>
              <input type="text" className="form-control" ref="name" placeholder="What will the project be named?" />
              <textarea className="form-control" ref="description" placeholder="Describe the project.."></textarea>
              <button type="submit" className="btn btn-primary">Create Project</button>
            </form>
          </div>
      );
  }
}

export default Form;
