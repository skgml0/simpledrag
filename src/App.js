import "./App.css";
import styled from "styled-components";
import Box from "./components/Box";
import Draggable from "./components/Draggable";

function App() {
  return (
    <div className="App">
      <Main>
        <Draggable id="board-1">
          <Box id="card-1" className="card" draggable="true">
            <p>One</p>
          </Box>
        </Draggable>
        <Draggable id="board-2">
          <Box id="card-2" className="card" draggable="true">
            <p>Two</p>
          </Box>
        </Draggable>
      </Main>
    </div>
  );
}

export default App;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  /* max-width: 800px; */
  height: 100vh;
  overflow: hidden;
  margin: 0 auto;
  padding: 15px;
`;
