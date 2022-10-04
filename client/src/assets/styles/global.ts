import styled from "styled-components";
import background from 'images/background.png'
import { colors } from "./constants";

const AppContainer = styled.div`
//box-mode
display: flex;
flex-direction: column;
min-height: 100vh;

//visual
background-image: url(${background});
background-position: 50% 50%;
background-size: cover;

//scroll
overflow: hidden;
::-webkit-scrollbar {
    width: 5px;
}

::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(${colors.black}, 0.5);
}

::-webkit-scrollbar-thumb {
    background-color: rgba(${colors.green}, 0.8);
    border-radius: 50px;

    :hover {
        background-color: rgba(${colors.green}, 1);
    }
}

//Global classes
.neon-text {
    color: transparent;
    -webkit-text-stroke: 1.5px rgb(${colors.green});
    letter-spacing: 2px;
}

.d-flex {
    display: flex;
    flex-direction: column;
}

.flex-1 {
    flex: 1;
}

.c-pointer {
    cursor: pointer;
}

.container {
    box-sizing: border-box;
    padding: 2% 4%;
}
`

export default AppContainer