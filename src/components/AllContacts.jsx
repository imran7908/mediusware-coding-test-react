import React, { useEffect, useState } from 'react';
import ButtonComp from './ButtonComp';

const TableRenderer = (results, isEven) => {
    return results.map((result) => {
        if (isEven) {
            if (result.id % 2 === 0) {
                return (
                    <tr>
                        <td>{result.id}</td>
                        <td>{result.phone}</td>
                        <td>{result?.country?.name}</td>
                    </tr>
                );
            }
        } else {
            return (
                <tr>
                    <td>{result.id}</td>
                    <td>{result.phone}</td>
                    <td>{result?.country?.name}</td>
                </tr>
            );
        }
    });
};

const AllContacts = ({ setOpenAllContacts, setOpenUsContacts }) => {
    const [contactList, setContactList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isOnlyEven, setIsOnlyEven] = useState(false);

    useEffect(() => {
        const handleFetchAllContacts = async () => {
            const endpoint = 'https://contact.mediusware.com/api/contacts';
            fetch(endpoint).then(async function (response) {
                const res = await response.json();
                const { results } = res;
                setContactList(results);
                setLoading(false);
            });
        };

        handleFetchAllContacts();
    }, []);
    return (
        <div>
            <ButtonComp {...{ setOpenAllContacts, setOpenUsContacts }} />

            {loading ? (
                <h3 className="text-center my-4">Fetching data...</h3>
            ) : (
                <>
                    <h4 className="my-2">All contacts</h4>
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Country name</th>
                            </tr>
                        </thead>
                        <tbody>{TableRenderer(contactList, isOnlyEven)}</tbody>
                    </table>
                </>
            )}

            {!loading && (
                <footer className="bg-light text-center text-lg-start">
                    <div
                        className="d-flex justify-content-center align-items-center p-3"
                        style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}
                    >
                        <div class="form-check w-25 px-4 py-2">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value={isOnlyEven}
                                onChange={() => setIsOnlyEven(!isOnlyEven)}
                                id="flexCheckDefault"
                            />
                            <label
                                className="form-check-label"
                                for="flexCheckDefault"
                            >
                                Only even
                            </label>
                        </div>
                    </div>
                </footer>
            )}
        </div>
    );
};

export default AllContacts;
