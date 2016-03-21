import React from 'react';
import _ from 'lodash';
import {Input, Dropdown} from 'react-bootstrap';

class JointjsAttrEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onChange = this.onChange.bind(this);
    }

    //static react vars
    static defaultProps = {};

    static propTypes = {
        onChange: React.PropTypes.func.isRequired
    };

    //life cycle methods
    componentDidMount() {
    }

    componentWillUnmount() {
    }

    onChange(e){
        const {
            name,
            value,
            type,
            checked
            } = e.currentTarget;
        if(_.isEqual(type, "checkbox")) {
            this.props.onChange(name, checked);
        }
    }

    render() {
        return (
            <form>
                <Input type="checkbox" name="enablePort" label="Enable ports" onChange={this.onChange}/>
            </form>
        );
    }
}

export default JointjsAttrEditor;