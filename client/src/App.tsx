import { ChangeEvent, useState } from "react"
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"
import { IContact } from "./types"
import Navbar from "./components/Navbar/Navbar"
import Contacts from "./pages/Contacts/Contacts"
import AddContact from "./pages/AddContact/AddContact"
import NotFound from "./components/NotFound/NotFound"
import "./App.scss"

function App(): JSX.Element {
    const [contacts, setContacts] = useState<IContact[]>([
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
    ])
    const [query, setQuery] = useState<string>("")

    const onChangeQueryHandler = (e: ChangeEvent<HTMLInputElement>): void => {
        setQuery(e.target.value)
    }

    const onDeleteContactHandler = (id: string): void => {
        const newContacts: IContact[] = contacts.filter(
            (contact: IContact): boolean => contact.id !== id
        )
        setContacts(newContacts)
    }

    const onAddContactHandler = (contact: IContact): void => {
        setContacts(
            (prevContacts: IContact[]): IContact[] => [contact, ...prevContacts]
        )
    }

    const navItems: JSX.Element[] = [
        <li key={0}><Link to="/"><i className="fas fa-home"></i> Home</Link></li>,
        <li key={1}><Link to="/add"><i className="fas fa-plus"></i> Add</Link></li>
    ]

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
                                onDeleteContactHandler={onDeleteContactHandler}
                                onChangeQueryHandler={onChangeQueryHandler}
                            />
                        </Route>
                        <Route exact path="/add">
                            <AddContact
                                onAddContactHandler={onAddContactHandler}
                            />
                        </Route>
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
