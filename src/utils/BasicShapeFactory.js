/**
 * Created by leojin on 3/20/16.
 */
import _ from 'lodash';
import {basicShapes, extentableShapes} from '../jointjs.shape.constants';
import ExtendableShapeFactory from './ExtendableShapeFactory';

class BasicShapeFactory {
    constructor(){}

    createRectModel(id, options){
        const {
            bgColor="black",
            roundEdges=false,
            text="",
            textColor="white",
            enablePort=false,
            strokeWidth=2,
            strokeColor="black",
            position={x: 100, y: 30},
            size={width: 100, height: 30},
            } = options;
        let rx,ry=0;
        if(roundEdges){
            rx=ry=5;
        }
        let type = basicShapes.rectangle;
        if(enablePort){
            return ExtendableShapeFactory.createDevModel(id, options);
        }

        return {
            id,
            position,
            size,
            type: type,
            attrs: {
                rect: {
                    rx,
                    ry,
                    fill: bgColor,
                    'stroke-width': strokeWidth,
                    stroke: strokeColor
                },
                text: {
                    text,
                    fill: textColor
                }
            }
        }
    }

    createPorts(){

    }

}

let instance;
function getInstance(){
    if(_.isUndefined(instance)){
        instance = new BasicShapeFactory();
    }
    return instance;
}

export default getInstance();
