import React, { useState } from 'react';
import './App.scss';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

// import { getContacts } from "./actions";

// components
import Navbar from "./components/Layout/Navbar/Navbar";
import Contacts from "./components/Contacts/Contacts";
import AddContact from "./components/Contacts/AddContact/AddContact";
import NotFound from "./components/NotFound/NotFound";

function App() {
    const [contacts, setContacts] = useState([
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
    const [query, setQuery] = useState("");

    // const { dispatch, contacts, } = props;

    // React.useEffect(() => {
    //     dispatch(getContacts());
    // }, []);

    const onChangeQueryHandler = e => setQuery(e.target.value);

    const onDeleteContactHandler = id => {
        const newContacts = contacts.filter(contact => contact.id !== id);
        setContacts(newContacts);
    };

    const onAddContactHandler = contact => setContacts([contact, ...contacts]);

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
                        }} />
                        <Route exact path="/add" render={props => {
                            return (
                                <AddContact
                                    onAddContactHandler={onAddContactHandler}
                                    history={props.history}
                                />
                            );
                        }} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default connect(
    (state) => ({
        contacts: state.contacts.contacts,
    })
)(App);
