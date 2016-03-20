/**
 * Created by leojin on 3/20/16.
 */
import BasicShapeFactory from './BasicShapeFactory';
import LinkFactory from './LinkFactory';

export default {
    "rect": BasicShapeFactory.createRectModel.bind(BasicShapeFactory),
    "link": LinkFactory.createLinkModel.bind(LinkFactory)
};