import * as React from "react";

interface IProps {
  searchPL: any;
}

interface IState {
  input: string;
}

export default class Place extends React.Component<IProps, IState> {

  public showdata = () => {
    fetch("https://randomuser.me/api/?results=10")
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(err => console.log(err));
  };
  public render() {
    return <div className="header">hi</div>;
  }
}
