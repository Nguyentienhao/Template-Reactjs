import React, { Component } from 'react';

export default class TaskItem extends Component {

    render() {
        return (
            <tr>
                <td>1</td>
                <td>name</td>
                <td className="text-center">
                    <span className='label label-danger' >
                        Complete
                    </span>
                </td>
                <td className="text-center">
                    <button
                        type="button"
                        className="btn btn-warning"
                    >
                        <span className="fa fa-pencil mr-5"></span>Update
                    </button>
                    &nbsp;
            <button
                        type="button"
                        className="btn btn-danger">
                        <span className="fa fa-trash mr-5"></span>Remove
            </button>
                </td>
            </tr>
        );
    }
}
