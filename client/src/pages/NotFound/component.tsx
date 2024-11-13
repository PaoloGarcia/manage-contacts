import { Title } from "../../components";
import "./not-found.css";

export function NotFound() {
   return (
      <div className="not-found">
         <Title colored="404" notColored="Page Not Found" />
      </div>
   );
}
