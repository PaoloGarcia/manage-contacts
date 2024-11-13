import { ChangeEvent } from "react";

import { TContact } from "../../types";
import { Contact, Title } from "../../components";
import "./contacts.css";

type Props = {
   contacts: TContact[];
   query: string;
   onDeleteContact: (id: string) => void;
   onChangeQuery: (e: ChangeEvent<HTMLInputElement>) => void;
};

export function Contacts({
   contacts,
   onDeleteContact,
   query,
   onChangeQuery
}: Props) {
   const list = contacts.map((contact: TContact): JSX.Element => (
      <Contact
         key={contact.id}
         name={contact.name}
         email={contact.email}
         phone={contact.phone}
         onDeleteContact={() => onDeleteContact(contact.id)}
      />
   ));

   return (
      <ul className="contacts">
         <Title colored="Contacts" notColored="List" />
         <div className="search-box">
            <input
               type="text"
               placeholder="Search Contact"
               value={query}
               onChange={onChangeQuery}
            />
         </div>
         {list}
      </ul>
   );
}
