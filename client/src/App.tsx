import { ChangeEvent, useState } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import { TContact } from "./types";
import { Navbar } from "./components";
import { AddContact, Contacts, NotFound } from "./pages";
import "./App.css";

const contactsFromDB = [
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
];

function App() {
   const [contacts, setContacts] = useState<TContact[]>(contactsFromDB);
   const [query, setQuery] = useState("");

   const onChangeQuery = (e: ChangeEvent<HTMLInputElement>): void => {
      setQuery(e.target.value);
   };

   const onDeleteContact = (id: string): void => {
      setContacts((prev) => prev.filter((contact) => contact.id !== id));
   };

   const onAddContact = (contact: TContact): void => {
      setContacts((prev) => [contact, ...prev]);
   };

   const navItems: JSX.Element[] = [
      <li key={0}><Link to="/"><i className="fas fa-home"></i> Home</Link></li>,
      <li key={1}><Link to="/add"><i className="fas fa-plus"></i> Add</Link></li>
   ];

   return (
      <BrowserRouter>
         <div className="App">
            <Navbar
               branding="Contacts Manager"
               navItems={navItems}
            />
            <div className="main-box">
               <Switch>
                  <Route exact path="/">
                     <Contacts
                        contacts={contacts}
                        query={query}
                        onDeleteContact={onDeleteContact}
                        onChangeQuery={onChangeQuery}
                     />
                  </Route>
                  <Route exact path="/add">
                     <AddContact
                        onAddContact={onAddContact}
                     />
                  </Route>
                  <Route component={NotFound} />
               </Switch>
            </div>
         </div>
      </BrowserRouter>
   );
}

export default App;
