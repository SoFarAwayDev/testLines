import React, {Component} from 'react';




class Lines extends Component{
    constructor(props){
        super(props);

        this.state = {
            lines: [
                {
                    id: 0, name: 'line zero', color: 'red'
                },
                {
                    id: 1, name: 'line one', count: 'blue'    
                },
                {
                    id: 2, name: 'line two', count: 'green'
                }
            ],
            newLine:''
        };
        
    }

    addLine(){
        let {lines: oldLines, newLine} = this.state;

        oldLines.push({
            id: oldLines[oldLines.length-1].id + 1,
            name: newLine,
            color: 'blue'
        });

        this.setState({lines: oldLines, newLine: ''})
    }

    render(){
       const { newLine, lines } = this.state;
       
       return(<div>
            <input value={newLine} onChange={event => {
                this.setState({newLine: event.target.value})
            }}/>

            <button onClick={this.addLine.bind(this)}>
             {"Add Line"}
            </button>

            <div>
                {
                    lines.map(line => {
                        return (<div key={line.id}>
                            <span>{line.name}</span>
                        </div>)
                    })
                }
            </div>
        </div>)
    }


}

export default Lines;