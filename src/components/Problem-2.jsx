import React, { useState } from 'react';
import AllContacts from './AllContacts';
import ModalComp from './Modal';
import UsContacts from './UsContacts';

const Problem2 = () => {
    const [openAllContacts, setOpenAllContacts] = useState(false);
    const [openUsContacts, setOpenUsContacts] = useState(false);

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

                <div className="d-flex justify-content-center gap-3">
                    <button
                        className="btn btn-lg btn-outline-primary"
                        type="button"
                        onClick={() => setOpenAllContacts(!openAllContacts)}
                    >
                        All Contacts
                    </button>
                    <button
                        className="btn btn-lg btn-outline-warning"
                        type="button"
                        onClick={() => setOpenUsContacts(!openUsContacts)}
                    >
                        US Contacts
                    </button>
                </div>

                {openAllContacts && (
                    <ModalComp
                        modalIsOpen={openAllContacts}
                        setIsOpen={setOpenAllContacts}
                    >
                        <AllContacts
                            {...{ setOpenAllContacts, setOpenUsContacts }}
                        />
                    </ModalComp>
                )}

                {openUsContacts && (
                    <ModalComp
                        modalIsOpen={openUsContacts}
                        setIsOpen={setOpenUsContacts}
                    >
                        <UsContacts
                            {...{ setOpenAllContacts, setOpenUsContacts }}
                        />
                    </ModalComp>
                )}
            </div>
        </div>
    );
};

export default Problem2;
