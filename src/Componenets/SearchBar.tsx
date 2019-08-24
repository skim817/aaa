import * as React from 'react';


interface IProps{
    addPlace:any,
}
interface IState{
    input:string
}
export default class SearchBar extends React.Component<IProps,IState> {
    public constructor(props:any){
        super(props);
        this.state = {
            input:""
        }
    }

 
    public addPlace = () =>{            
        this.props.addPlace(this.state.input)
    }

    public render() {
        return (
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-10">
                        hi
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
