import { useState } from "react";
import "./contact.scss";

type Props = {
   name: string;
   email: string;
   phone: string;
   onDeleteContactHandler: () => void;
};

function Contact({ name, email, phone, onDeleteContactHandler }: Props): JSX.Element {
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
               <i className="fas fa-user-times" onClick={onDeleteContactHandler}></i>
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

export default Contact;
