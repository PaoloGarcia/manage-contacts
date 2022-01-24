import { IContact } from "../../types"
import { ChangeEvent } from "react"
import Contact from "../../components/Contact/Contact"
import Title from "../../components/Title/Title"
import "./contacts.scss"

interface ContactsProps {
    contacts: IContact[],
    query: string,
    onDeleteContactHandler: (id: string) => void,
    onChangeQueryHandler: (e: ChangeEvent<HTMLInputElement>) => void
}

function Contacts({
    contacts,
    onDeleteContactHandler,
    query,
    onChangeQueryHandler
}: ContactsProps): JSX.Element {
    const list = contacts.map(
        (contact: IContact): JSX.Element => (
            <Contact
                key={contact.id}
                name={contact.name}
                email={contact.email}
                phone={contact.phone}
                onDeleteContactHandler={
                    () => onDeleteContactHandler(contact.id)
                }
            />
        )
    )

    return (
        <ul className="contacts">
            <Title colored="Contacts" notColored="List" />
            <div className="search-box">
                <input
                    type="text"
                    placeholder="Search Contact"
                    value={query}
                    onChange={onChangeQueryHandler}
                />
            </div>
            {list}
        </ul>
    )
}

export default Contacts
