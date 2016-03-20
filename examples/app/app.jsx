/**
 * Created by leojin on 3/20/16.
 */
import React from 'react';
import _ from 'lodash';
import {Col, PageHeader, Panel} from 'react-bootstrap';
import TutorialExample from './components/TutorialExample.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Col xs={12}>
                <Col xs={12}>
                    <PageHeader>Basic Example</PageHeader>
                    <Panel>
                        <TutorialExample />
                    </Panel>
                </Col>
                <Col xs={12}>
                    <PageHeader>ERD Example</PageHeader>
                    <Panel></Panel>
                </Col>
            </Col>
        );
    }
}

export default App;