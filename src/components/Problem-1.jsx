import React, { useState } from 'react';

const sortUserListForAll = (userList) => {
    const activeList = userList.filter(user => user.status.toLowerCase() === 'active');
    const completedList = userList.filter(user => user.status.toLowerCase() === 'completed');
    const rest = userList.filter(user => !['active', 'completed'].includes(user.status.toLowerCase()));

    return [...activeList, ...completedList, ...rest];

}

const TableRendered = (userList, filter) => {
    const filteredUserList =
        filter === 'all'
            ? sortUserListForAll(userList)
            : userList.filter((user) => user.status.toLowerCase() === filter);

    return filteredUserList.map((user) => {
        return (
            <tr>
                <td>{user.name}</td>
                <td>{user.status}</td>
            </tr>
        );
    });
};
const Problem1 = () => {
    const [show, setShow] = useState('all');
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');
    const [userList, setUserList] = useState([]);
    const [filteredUserList, setFilteredUserList] = useState([]);

    console.log('user list: ', userList);
    const handleClick = (val) => {
        setShow(val);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserList([...userList, { name, status }]);
        setName('');
        setStatus('');
    };

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
                <div className="col-6 ">
                    <form className="row gy-2 gx-3 align-items-center mb-4">
                        <div className="col-auto">
                            <input
                                type="text"
                                className="form-control"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Name"
                            />
                        </div>
                        <div className="col-auto">
                            <input
                                type="text"
                                className="form-control"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                placeholder="Status"
                            />
                        </div>
                        <div className="col-auto">
                            <button
                                type="submit"
                                className="btn btn-primary"
                                onClick={handleSubmit}
                                disabled={!name || !status}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul
                        className="nav nav-pills mb-3"
                        id="pills-tab"
                        role="tablist"
                    >
                        <li className="nav-item">
                            <button
                                className={`nav-link ${
                                    show === 'all' && 'active'
                                }`}
                                type="button"
                                onClick={() => handleClick('all')}
                            >
                                All
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${
                                    show === 'active' && 'active'
                                }`}
                                type="button"
                                onClick={() => handleClick('active')}
                            >
                                Active
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${
                                    show === 'completed' && 'active'
                                }`}
                                type="button"
                                onClick={() => handleClick('completed')}
                            >
                                Completed
                            </button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {TableRendered(userList, show)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;
