import React from 'react';
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router";

const LinkButton = ({ title, url, location }) => (
    <Link
        to={url}
    >
        <Button
            disabled={location.pathname === url}
            className="headerButton"
        >
            {title}
        </Button>
    </Link>

);

export default React.memo(withRouter(LinkButton));
