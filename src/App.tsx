import * as React from "react";
import "./App.css";
import SearchBar from "./Componenets/SearchBar";
import Place from "./Componenets/Place";

interface IState {
  lat: number;
  log: number;
}

class App extends React.Component<{}, IState> {
  public constructor(props: any) {
    super(props);
    this.state = {
      lat: 22,
      log: 22
    };
  }

  public render() {
    return (
      <div className="App">
        
        <Place />
        <div>
          <SearchBar addPlace={""} />
        </div>
        
      
      </div>
    );
  }
}

export default App;
