import React from 'react';
import './App.css';

import Navbar from "./Navbar/Navbar";
import Contacts from "./Contacts/Contacts";

function App() {
    const [contacts, setContacts] = React.useState([
        {
            id: "abc1",
            name: "Paolo Garcia",
            email: "paogar@gmail.com",
            phone: "000-000-0000"
        },
        {
            id: "abc2",
            name: "John Doe",
            email: "johdoe@gmail.com",
            phone: "111-111-1111"
        },
        {
            id: "abc3",
            name: "Ann Olegovna",
            email: "annole@gmail.com",
            phone: "222-222-2222"
        },
    ]);
    const [query, setQuery] = React.useState("");

    const onChangeQueryHandler = e => {
        setQuery(e.target.value);
    };

    return (
        <div className="App">
            <Navbar
                branding="Contacts Manager"
            />
            <div>
                <Contacts
                    contacts={contacts}
                    query={query}
                />
            </div>
        </div>
    );
}

export default App;
