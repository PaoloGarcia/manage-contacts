import Title from "../Title/Title"
import "./not-found.scss"

function NotFound(): JSX.Element {
    return (
        <div className="not-found">
            <Title colored="404" notColored="Page Not Found" />
        </div>
    )
}

export default NotFound
