import React, { Component } from 'react';

export default class TaskForm extends Component {
    render() {
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">Add Work<span
                        className="fa fa-times-circle text-right ml-150"                        
                    ></span>
                    </h3>
                </div>
                <div className="panel-body">
                    <form  >
                        <div className="form-group">
                            <label>Name Work: </label>
                            <input
                                name="name"
                                ref="nameWork"                               
                                type="text"
                                className="form-control" />
                        </div>
                        <label>Status:</label>
                        <select
                            name="status"
                            ref="statusWork"
                            className="form-control"
                            required="required">
                            <option value={true}>Complete</option>
                            <option value={false}>InComplete</option>
                        </select>
                        <br />
                        <div className="text-center">
                            <button
                                type="submit"
                                className="btn btn-warning"
                            >
                                <span className="fa fa-plus mr-5"></span>Save
                            </button>&nbsp;
                                <button
                                type="reset"
                                className="btn btn-danger"
                            >
                                <span className="fa fa-close mr-5"></span>Cancel
                                </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
