import { useState, FormEvent, ChangeEvent } from "react";
import { useHistory } from "react-router-dom"

import { TContact, TValidationError } from "../../types";
import { InputField, Title } from "../../components";
import "./add-contact.css";

type Props = {
   onAddContact: (contact: TContact) => void;
};

const initialInputs = {
   name: "",
   email: "",
   phone: "",
};

export function AddContact({ onAddContact }: Props) {
   const history = useHistory();
   const [input, setInput] = useState(initialInputs);
   const [errors, setErrors] = useState<TValidationError>({});

   const onChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
      setInput((prev) => ({ ...prev, [event.target.name]: event.target.value }));
   };

   const onSubmitHandler = (e: FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
      if (input.name === "") {
         setErrors({ name: "Name field is required" });
         return;
      }
      if (input.email === "") {
         setErrors({ email: "Email field is required" });
         return;
      }
      if (input.phone === "") {
         setErrors({ phone: "Phone field is required" });
         return;
      }
      onAddContact({ id: "", name: input.name, email: input.email, phone: input.phone });

      setInput(initialInputs);
      setErrors({});

      history.push("/");
   }

   return (
      <div className="add-contact">
         <Title
            colored="Add"
            notColored="Contact"
         />
         <div className="add-contact-box">
            <div className="add-contact-body">
               <form onSubmit={onSubmitHandler}>
                  <InputField
                     type="text"
                     name="name"
                     placeholder="Full Name"
                     value={input.name}
                     onChange={onChangeInput}
                     error={errors.name ?? ""}
                  />
                  <InputField
                     type="text"
                     name="email"
                     placeholder="Email"
                     value={input.email}
                     onChange={onChangeInput}
                     error={errors.email ?? ""}
                  />
                  <InputField
                     type="text"
                     name="phone"
                     placeholder="Phone Number"
                     value={input.phone}
                     onChange={onChangeInput}
                     error={errors.phone ?? ""}
                  />
                  <button className="btn-add" type="submit">Add Contact</button>
               </form>
            </div>
         </div>
      </div>
   );
}
