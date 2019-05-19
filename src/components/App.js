import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./Layout/Navbar/Navbar";
import Contacts from "./Contacts/Contacts";
import AddContact from "./Contacts/AddContact/AddContact";
import NotFound from "./NotFound/NotFound";

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

    const onDeleteContactHandler = id => {
        const newContacts = contacts.filter(contact => contact.id !== id);
        setContacts(newContacts);
    }

    const onAddContactHandler = contact => {
        setContacts([contact, ...contacts]);
    }

    return (
        <Router>
            <div className="App">
                <Navbar
                    branding="Contacts Manager"
                    query={query}
                    onChangeQueryHandler={onChangeQueryHandler}
                />
                <div className="main-box">
                    <Switch>
                        <Route exact path="/" render={() => {
                            return <Contacts
                                        contacts={contacts}
                                        onDeleteContactHandler={onDeleteContactHandler}
                                    />;
                        }}/>
                        <Route exact path="/add" render={props => {
                            return (
                                <AddContact
                                    onAddContactHandler={onAddContactHandler}
                                    history={props.history}
                                />
                            );
                        }}/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
