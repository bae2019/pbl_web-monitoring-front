import React from "react";
import { Link  } from "react-router-dom";
import { Button } from '@material-ui/core';

function Menubar() {
    return(
        <>
            <Button>
                <Link to = "/">main</Link>
            </Button>
            <Button>
                <Link to = "/fac1">공 장 1</Link>
            </Button>
            <Button>
                <Link to = "/fac2">공 장 2</Link>
            </Button>
            <Button>
                <Link to = "/fac3">공 장 3</Link>
            </Button>
            <Button>
                <Link to = "/fac4">공 장 4</Link>
            </Button>
            <Button>
                <Link to = "/fac5">공 장 5</Link>
            </Button>
            <Button>
                <Link to = "/fac6">공 장 6</Link>
            </Button>
        </>
    );
}

export default Menubar;