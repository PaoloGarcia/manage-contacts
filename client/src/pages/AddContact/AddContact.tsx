import { useState, FormEvent, ChangeEvent } from "react";
import { useHistory } from "react-router-dom"
import { TContact, TValidationError } from "../../types";
import Title from "../../components/Title/Title";
import InputField from "../../components/InputField/InputField";
import "./add-contact.scss";

type AddContactProps = {
   onAddContactHandler: (contact: TContact) => void;
};

function AddContact({ onAddContactHandler }: AddContactProps): JSX.Element {
   const history = useHistory()
   const [name, setName] = useState<string>("");
   const [email, setEmail] = useState<string>("");
   const [phone, setPhone] = useState<string>("");
   const [errors, setErrors] = useState<TValidationError>({});

   const onSubmitHandler = (e: FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
      if (name === "") {
         setErrors({ name: "Name field is required" });
         return;
      }
      if (email === "") {
         setErrors({ email: "Email field is required" });
         return;
      }
      if (phone === "") {
         setErrors({ phone: "Phone field is required" });
         return;
      }
      onAddContactHandler({ id: "", name, email, phone });
      // clear fields
      setName("");
      setEmail("");
      setPhone("");
      setErrors({});
      // redirect to home page
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
                     value={name}
                     onChange={
                        (e: ChangeEvent<HTMLInputElement>): void => {
                           setName(e.target.value)
                        }
                     }
                     error={errors.name ?? ""}
                  />
                  <InputField
                     type="text"
                     name="email"
                     placeholder="Email"
                     value={email}
                     onChange={(e: ChangeEvent<HTMLInputElement>): void => {
                        setEmail(e.target.value)
                     }}
                     error={errors.email ?? ""}
                  />
                  <InputField
                     type="text"
                     name="phone"
                     placeholder="Phone Number"
                     value={phone}
                     onChange={(e: ChangeEvent<HTMLInputElement>): void => {
                        setPhone(e.target.value)
                     }}
                     error={errors.phone ?? ""}
                  />
                  <button className="btn-add" type="submit">Add Contact</button>
               </form>
            </div>
         </div>
      </div>
   );
}

export default AddContact;
