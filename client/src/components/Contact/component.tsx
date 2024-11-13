import { useState } from "react";

import "./contact.css";

type Props = {
   name: string;
   email: string;
   phone: string;
   onDeleteContact: () => void;
};

export function Contact({ name, email, phone, onDeleteContact }: Props) {
   const [showContact, setShowContact] = useState(false);

   return (
      <li className="contact">
         <div className="contact-header">
            <div className="contact-title">
               {name}
               <i
                  className="fas fa-sort-down"
                  onClick={() => setShowContact(!showContact)}
               ></i>
            </div>
            <div className="contact-options-box">
               <i className="far fa-edit"></i>
               <i className="fas fa-user-times" onClick={onDeleteContact}></i>
            </div>
         </div>
         {
            showContact
               ? (
                  <div className="contact-items-box">
                     <div className="contact-item">Email: {email}</div>
                     <div className="contact-item">Phone: {phone}</div>
                  </div>
               )
               : null
         }
      </li>
   );
}
