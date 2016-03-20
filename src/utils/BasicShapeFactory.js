/**
 * Created by leojin on 3/20/16.
 */
import _ from 'lodash';
import {basicShapes} from '../jointjs.shape.constants';

class BasicShapeFactory {
    constructor(){}

    createRectModel(id, options){
        const {
            bgColor="black",
            roundEdges=false,
            text="",
            textColor="white",
            strokeWidth=2,
            strokeColor="black",
            position={x: 100, y: 30},
            size={width: 100, height: 30},
            } = options;
        let rx,ry=0;
        if(roundEdges){
            rx=ry=5;
        }

        return {
            id,
            position,
            size,
            type: basicShapes.rectangle,
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

}

let instance;
function getInstance(){
    if(_.isUndefined(instance)){
        instance = new BasicShapeFactory();
    }
    return instance;
}

export default getInstance();
