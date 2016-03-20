/**
 * Created by leojin on 3/20/16.
 */
import _ from 'lodash';
import {} from '../jointjs.shape.constants';

class LinkFactory {
    constructor() {
    }

    createLinkModel(id, options) {
        const {
            source,
            target,
            labels,
            connectionColor = "black",
            sourceColor = "black",
            sourceD = "M 10 0 L 0 5 L 10 10 z",
            sourceStroke = "none",
            targetColor = "black",
            targetD = "M 10 0 L 0 5 L 10 10 z",
            targetStroke = "black",
            allowRemove = true
            } = options;
        let toolRemove = {};
        if(!allowRemove){
            toolRemove = {
                display: "none"
            };
        }
        const transformedLabels = this.parseLabels(labels);
        return {
            id,
            source,
            target,
            type: "link",
            attrs: {
                '.connection': {
                    stroke: connectionColor
                },
                '.tool-remove': toolRemove,
                '.marker-source': {fill: sourceColor, stroke: sourceStroke, d: sourceD},
                '.marker-target': {fill: targetColor, stroke: targetStroke, d: targetD}
            },
            labels: transformedLabels
        }
    }

    parseLabels(labels){
        if(_.isUndefined(labels)) {
            return [];
        }
        return _.transform(labels, (result, value)=>{
            const {
                position=0.5,
                bgColor="white",
                labelColor="black",
                text=""
                } = value;
            const transformdValue = {
                position,
                attrs: {
                    rect: {
                        fill: bgColor
                    },
                    text: {
                        text,
                        fill: labelColor
                    }
                }
            };
            result.push(transformdValue);
        }, []);
    }
}

let instance;
function getInstance() {
    if (_.isUndefined(instance)) {
        instance = new LinkFactory();
    }
    return instance;
}

export default getInstance();