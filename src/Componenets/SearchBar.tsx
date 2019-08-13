import * as React from 'react'


interface IProps{
    searchPL:any,
}

interface IState{
    input:string
}

export default class SearchBar extends React.Component <IProps,IState> {
    public constructor(props:any){
        super(props);
        this.state = {
            input:""
        }
    }
    public searchPlace = () =>{            
        this.props.searchPL(this.state.input)
    }
  public render() {
    return <div className="header">
    hi
</div>
  }
}
