import React from 'react';
import _ from 'lodash';
import ReactJointJS from '../../../src/jointjs.jsx';
import JointjsAttrEditor from './JointjsAttrEditor.jsx';
import 'jointjs/dist/joint.min.css';
import JointJsUtils from '../../../src/utils/JointJsUtils';

class TutorialExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ele1: {
                type: "rect",
                position: {x: 100, y: 30},
                roundEdges: true,
                text: "my box"
            },
            ele2: {
                type: "rect",
                bgColor: "yellow",
                textColor: "black",
                position: {x: 400, y: 30},
                text: "your box"
            },
            link1: {
                type: "link",
                source: {id: "ele1"},
                target: {id: "ele2"},
                targetColor: "red",
                labels: [
                    {
                        text: "my label"
                    }
                ]
            }
        };
        this.positionTracker = {};
        this.onAttrChange = this.onAttrChange.bind(this);
        this.onGraphChange = this.onGraphChange.bind(this);
    }

    //static react vars
    static defaultProps = {};

    static propTypes = {};

    //life cycle methods
    componentDidMount() {
    }

    componentWillUnmount() {
    }

    onAttrChange(name, value){
        console.log("name = "+name+", value = "+value);
        _.each(this.state, (cell, key) => {
            _.set(cell, name, value);
            if(name === "enablePort"){
                if(value) {
                    //increase size
                    _.set(cell, "size", {width: 90, height: 90});
                    this.state.link1.source.port = "out1";
                    this.state.link1.target.port = "in2";
                } else {
                    _.set(cell, "size", {width: 100, height: 30});
                }
            }
        });
        this.setState(this.state);
    }

    onGraphChange(e, payload, g){
        if(e === "change:position") {
            const {
                id,
                changed
                } = payload;
            const position = changed.position;
            console.log("x =y"+position.y);
            console.log("ele2 y = "+this.state.ele2.position.y);
            if(position.y === this.state.ele2.position.y){
                console.log('ele1 and ele2 have equal y, could snap horizontal line here');
            }
            if(position.x === this.state.ele2.position.x){
                console.log("equal x could snap vertical line here.");
            }
            _.set(this.positionTracker, id, changed.position);
        }
    }

    render() {
        console.log("in render, this state = ", this.state);
        const graphModel = JointJsUtils.toGraphModel(this.state);
        return (
            <div>
                <JointjsAttrEditor
                    onChange={this.onAttrChange}
                />
                <ReactJointJS graphJSON={graphModel} onAll={this.onGraphChange} height="150" gridSize={10}/>
            </div>
        );
    }
}

export default TutorialExample;