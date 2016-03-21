/**
 * Created by leojin on 3/20/16.
 */
import _ from 'lodash';
import {extentableShapes} from '../jointjs.shape.constants';

class ExtendableShapeFactory {
    constructor() {
    }

    createDevModel(id, options) {
        const {
            position={x: 100, y: 30},
            size={width: 100, height: 30},
            inPorts=["in1", "in2", "in3"],
            outPorts=["out1"],
            text="",
            bgColor="white",
            inPortColor="black",
            outPortColor="blue"
            } = options;
        return {
            id,
            position,
            type: extentableShapes.model,
            size,
            inPorts,
            outPorts,
            attrs: {
                '.label': {
                    text
                },
                rect: {
                    fill: bgColor
                },
                ['.inPorts circle']: {fill: inPortColor},
                ['.outPorts circle']: {fill: outPortColor}
            }
        }
    }
}

let instance;
function getInstance() {
    if (_.isUndefined(instance)) {
        instance = new ExtendableShapeFactory();
    }
    return instance;
}

export default getInstance();