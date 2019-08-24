import * as React from "react";

import Geosuggest, { Suggest } from "react-geosuggest";
import Map from "./Map";
import "./Place.css";
import Dropdown from 'react-dropdown';
import PlaceList from './PlaceList';


interface IState {
  lata: number;
  loga: number;
  where: string;
  value: string;
}
const options = [
  'restaurant', 'cafe', 'bar','museum','movie_theater'
];
const defaultOption = options[0];

export default class Place extends React.Component<{}, IState> {
  
  public constructor(props: any) {
    super(props);
    this.state = {
      lata: 53.558572,
      loga: 9.9278215,
      value: "",
      where: "Restaurant",
    };
  }
  public setState1 = (a: number, b:number) => {
    this.setState({ lata: a, loga: b});
  };
  public setState2 =(a1:string) =>{
    this.setState({where: a1});
  }
  public setState3 =(aaa:string) =>{
    this.setState({value: aaa});
  }

  public onSuggestSelect = (suggest: Suggest) => {
    if(suggest){
      console.log(suggest);
    console.log(suggest.location.lat);
    console.log(suggest.gmaps);
    const aaa: string = suggest.location.lat;
    const bbb: string = suggest.location.lng;
    const ccc: string = aaa+","+bbb;
    const a: number = parseFloat(suggest.location.lat);
    const b: number = parseFloat(suggest.location.lng);
    this.setState1(a,b);
    this.setState3(ccc);
    this.addnewLocation(this.state.value, this.state.where);
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    }
    
  }

  public onSelect = (Option:any) => {
   const a:string = Option.value
    this.setState2(a);
    console.log(a)
  }



  public addnewLocation = (location: string, type: string) => {
    const body = {
      "geoCode": location,
      "typeOfPlace": type
    }
    fetch("https://showmeplaces.azurewebsites.net/api/Mains", {
      body: JSON.stringify(body),
      headers: {
        Accept: "text/plain",
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    
  }
public buttonhit() {
  
  return null;
}


  public render() {
    return (
      <div>
        <div>
          <div>
            {this.state.lata}{this.state.loga}
            <br/>
            {this.state.value}
        {this.state.where}
            <Dropdown  menuClassName='myMenuClassName' options={options} onChange={this.onSelect} value={defaultOption} placeholder="Select an option" />
        <Geosuggest
          placeholder="Start typing!"
          onSuggestSelect={this.onSuggestSelect}
          location={new google.maps.LatLng(this.state.loga, this.state.lata)}
          radius={20}
        />
        
        </div>
       <button onClick={this.buttonhit} >press</button>
       <Map lata={this.state.loga} lnga={this.state.lata} />
     </div>
     <PlaceList play={''} mount ={''} />
      </div>
    
    );
  }
}
