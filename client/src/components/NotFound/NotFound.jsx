import React from "react";
import Title from "../Layout/Title/Title";
import "./not-found.scss";

function NotFound() {
    return (
        <div className="not-found">
            <Title colored="404" notColored="Page Not Found" />
        </div>
    );
}

export default NotFound;
