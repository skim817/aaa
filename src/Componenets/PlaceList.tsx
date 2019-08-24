import * as React from "react";


interface IState {
  videoList: any;
}

interface IProps {
  mount: any;
  play: any;
}

export default class PlaceList extends React.Component<IProps, IState> {
  public constructor(props: any) {
    super(props);
    this.state = {
      videoList: []
    };
    this.updateList();
  }

  public updateList = () => {


    fetch("https://converterliam2019.azurewebsites.net/api/PlaceConverters", {
      method: "GET"
    })
      .then((ret: any) => {
        return ret.json();
      })
      .then((result: any) => {
        console.log(result);
        const output: any[] = [];
        result.forEach((PlaceConverter: any) => {
          if(PlaceConverter.mainId===result[result.length-1].mainId){
          const row = (
            <tr>
              <td>
                <button><img src={PlaceConverter.photo} width="100px" alt="photo"/></button>
              </td>
              <td>
               {PlaceConverter.placeTitle}
              </td>
              <td>
               {PlaceConverter.placeRank}
              </td>
            </tr>
          );
          if (PlaceConverter.isFavourite) {
            output.unshift(row);
          } else {
            output.push(row);
          }
        }
        });
        this.setState({ videoList: output });
      });
  };



  public componentDidMount = () => {
    this.updateList();
  };

  public render() {
    return (
      <div className="video-list">
        <h1 className="play-heading">
          <span className="red-heading">play</span>video
        </h1>
        <table className="table">{this.state.videoList}</table>
      </div>
    );
  }
}
