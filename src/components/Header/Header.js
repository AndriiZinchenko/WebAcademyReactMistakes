import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import './header.style.css';
import LinkButton from "./LinkButton/LinkButton";

const Header = () => (
    <AppBar position="absolute">
        <Toolbar>
            <LinkButton
                title="Home"
                url="/"
            />
            <LinkButton
                title="List Key"
                url="/example1"
            />
            <LinkButton
                title="Mutate State"
                url="/example2"
            />
            <LinkButton
                title="Async State"
                url="/example3"
            />
            <LinkButton
                title="Bind This"
                url="/example4"
            />
        </Toolbar>
    </AppBar>
);

export default React.memo(Header);
