import "./title.css";

type Props = {
   colored: string;
   notColored: string;
};

export function Title({ colored, notColored }: Props) {
   return (
      <h1 className="title">
         <span className="colored-side">{colored}</span>{" "}
         {notColored}
      </h1>
   );
}
