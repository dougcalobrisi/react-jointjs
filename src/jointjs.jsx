import jointjs from 'jointjs';
import React, { Component, PropTypes } from 'react';

export default class ReactJointJS extends Component {
    constructor(props) {
        super(props);
        [
            'onAll',
            'onCellPointerClick',
            'onBlankPointerClick',
        ].forEach(method => {
                this[method] = this[method].bind(this);
        });
    }

    componentDidMount() {
        const {
            name,
            className,
            width,
            height,
            style,
            gridSize,
            linkPinning,
            markAvailable,
            validateEmbedding,
            validateConnection,
            graphJSON
            } = this.props;

        this.graph = new jointjs.dia.Graph();
        this.paper = new jointjs.dia.Paper({
            el: document.getElementById(name),
            width: width,
            height: height,
            gridSize: gridSize,
            model: this.graph,
            linkPinning: linkPinning,
            markAvailable: markAvailable,
            validateEmbedding: validateEmbedding,
            validateConnection: validateConnection
        });
        this.graph.fromJSON(graphJSON);
    }

    componentWillReceiveProps(nextProps) {
        const oldProps = this.props;
        if (nextProps.graphJSON !== oldProps.graphJSON) {
            this.graph.fromJSON(nextProps.graphJSON);

        }
    }

    componentWillUnmount() {
        this.paper = null;
        this.graph = null;
    }

    onAll(e, data) {
        if(this.props.onAll) {
            this.props.onAll(e, data);
        }
    }

    onCellPointerClick(cellView, e, x, y) {
        if(this.props.onCellPointerClick) {
            this.props.onCellPointerClick(cellView, e, x, y);
        }
    }

    onBlankPointerClick(e, x, y) {
        if(this.props.onBlankPointerClick) {
            this.props.onBlankPointerClick(e, x, y);
        }
    }

    render() {
        const { name, className, style } = this.props;
        return (
            <div
                id={name}
                className={className}
                style={style}
            >
            </div>
        );
    }
}



ReactJointJS.propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    width: PropTypes.string,
    height: PropTypes.string,
    gridSize: PropTypes.number,
    linkPinning: PropTypes.bool,
    markAvailable: PropTypes.bool,
    validateEmbedding: PropTypes.func,
    validateConnection: PropTypes.func,
    graphJSON: PropTypes.object,
    onAll: PropTypes.func,
    onCellPointerClick: PropTypes.func,
    onBlankPointerClick: PropTypes.func,
};


ReactJointJS.defaultProps = {
    name: 'jointjs',
    className: 'jointjs',
    style: {},
    width: '100%',
    height: '600',
    gridSize: 1,
    linkPinning: true,
    markAvailable: true,
    validateEmbedding: (childView, parentView) => {
        return true;
    },
    validateConnection: (sourceView, sourceMagnet, targetView, targetMagnet) => {
        return true;
    },
    graphJSON: { cells: [] },
    onAll: (e, data) => {},
    onCellPointerClick: (cellView, e, x, y) => {},
    onBlankPointerClick: (e, x, y) => {},
};
