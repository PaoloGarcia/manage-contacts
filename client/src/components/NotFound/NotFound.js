import React from "react";
import "./not-found.scss";

import Title from "../Layout/Title/Title";

const NotFound = () => {
    return (
        <div className="not-found">
            <Title colored="404" notColored="Page Not Found" />
        </div>
    );
};

export default NotFound;