/**
 * Created by leojin on 3/20/16.
 */
import FactoryRegistry from './FactoryRegistry';
import _ from 'lodash';

class JointJsUtils {
    constructor() {
    }

    toGraphModel(simplifiedConfig) {
        return _.transform(simplifiedConfig, (result, value, key)=> {
            const cellData = FactoryRegistry[value.type](key, value);
            result.cells.push(cellData);
            return result;
        }, {cells: []});
    }
}

let instance;
function getInstance() {
    if (_.isUndefined(instance)) {
        instance = new JointJsUtils();
    }
    return instance;
}
export default getInstance();
