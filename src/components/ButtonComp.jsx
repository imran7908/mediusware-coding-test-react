import React from 'react';

const ButtonComp = ({ setOpenAllContacts, setOpenUsContacts }) => {
    return (
        <div>
            <button
                className="btn btn-lg btn-outline-primary mx-2"
                type="button"
                onClick={() => {
                    setOpenAllContacts(true);
                    setOpenUsContacts(false);
                }}
            >
                All Contacts
            </button>
            <button
                className="btn btn-lg btn-outline-warning mx-2"
                type="button"
                onClick={() => {
                    setOpenAllContacts(false);
                    setOpenUsContacts(true);
                }}
            >
                US Contacts
            </button>

            <button
                className="btn btn-lg btn-outline-danger mx-2"
                type="button"
                onClick={() => {
                    setOpenAllContacts(false);
                    setOpenUsContacts(false);
                }}
            >
                Close
            </button>
        </div>
    );
};

export default ButtonComp;
