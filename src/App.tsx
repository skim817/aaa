import * as React from "react";
import "./App.css";
import Map from "./Componenets/Map";

interface IState{
  videoList: any
 
}

class App extends React.Component<{},IState>{
  public constructor(props:any){
    super(props);
    this.state = {
       
        videoList:[]
    }
    this.updateList();
}
public updateList = () => {
  fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&rankby=distance&type=restaurants&key=AIzaSyDxnLbITe46r20XEo51dgFm8yHeHL4nzT0')
.then((ret:any) => {
           return ret.json();
      }).then((results:any) => {
          const output:any[] = []
          
            const row = (
              <td>{results[0].name}</td>
            )
          console.log("j")
          
              output.push(row);
                    
              
          
          this.setState({videoList:output})
      })
};


  public render() {
    return (
      <div className="App">
        <table className="table">
                   hi {this.state.videoList}
                </table>
        <div>
          <form>
            <input placeholder="Search for..." />
          </form>
        </div>
        <Map lnga={-36.8523378} lata={174.7691073} />
      </div>
    );
  }
}

export default App;
