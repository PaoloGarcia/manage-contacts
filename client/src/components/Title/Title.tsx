import "./title.scss";

interface TitleProps {
    colored: string,
    notColored: string
}

function Title({ colored, notColored }: TitleProps): JSX.Element {
    return (
        <h1 className="title">
            <span className="colored-side">{colored}</span>{" "}
            {notColored}
        </h1>
    );
}

export default Title;
