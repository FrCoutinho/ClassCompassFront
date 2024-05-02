import { getDefaultZIndex } from "@mantine/core";
import React from "react";

function Content() {
    return(
        <Header>
            <h1>Class Compass</h1>
            <search searchHandler={searchHandler}/>
        </Header>


    )
}
export default Content