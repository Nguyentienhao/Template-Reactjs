import React, { Component } from 'react';
import TaskItem from './TaskItem';

export default class TaskList extends Component {
    render() {
        return (
            <table className="table table-bordered table-hover" style={{ marginTop: "20px" }}>
                <thead>
                    <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Name</th>
                        <th className="text-center">Status</th>
                        <th className="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <input
                                type="text"
                                className="form-control"
                                name="fillterName"
                            />
                        </td>
                        <td>
                            <select
                                name="fillterStatus"
                                className="form-control">
                                <option value="-1">All</option>
                                <option value="0">Complete</option>
                                <option value="1">InComplete</option>
                            </select>
                        </td>
                        <td></td>
                    </tr>
                    {/*các danh sách công việc*/}
                    <TaskItem />
                </tbody>
            </table>
        );
    }
}
