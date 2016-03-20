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
    }

    //static react vars
    static defaultProps = {};

    static propTypes = {};

    //life cycle methods
    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        const graphModel = JointJsUtils.toGraphModel(this.state);
        return (
            <div>
                <ReactJointJS graphJSON={graphModel} height="100"/>
            </div>
        );
    }
}

export default TutorialExample;