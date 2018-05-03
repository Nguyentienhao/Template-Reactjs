import React, { Component } from 'react';
import TaskForm from './TaskForm';
import Control from './Control';
import TaskList from './TaskList';

export default class Main extends Component {
   
    render() {
       
        return (            
            <div className="container">
                <div className="text-center">
                    <h1>Application Manage Work </h1>
                    <hr />
                </div>
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        {/*this is TaskForm of us*/}
                        <TaskForm />
                    </div>
                    <div                   
                        className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <button
                            type="button"
                            className="btn btn-primary"
                        >
                            <span className="fa fa-plus mr-5"></span>Add work
                        </button>
                        <Control
                        />
                        <div className="row mt-15">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                {/*đây là table của danh sách công việc*/}
                                <TaskList                                 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
