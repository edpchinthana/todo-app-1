import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import NewToDo from "../components/NewToDo";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

class UserHome extends Component{
    constructor(props) {
        super(props);
        this.state={
            addNewTask : false,
            tabKey : "remaining",
        }
    }

    showAddNewTask = () => {
        return (
            <NewToDo
                show = {true}
                onHide = {()=>this.setState({addNewTask:false})}
                onSubmit = {()=>console.log('onsubmit')}
            />
        );
    }

    setTabKey = (key) => {
        console.log(key);
        this.setState({tabKey:key});
    }


    render() {
        return(
            <Container>
                <Row className={"p-3"}>
                    <Col xs={8} md={8}>
                        <h4>User</h4>
                    </Col>
                    <Col xs={4} md={4}>
                        <Button className={"float-right"} onClick={()=>this.setState({addNewTask:true})}>
                            Add +
                        </Button>
                    </Col>
                </Row>

                    <Tabs
                        id="controlled-tab-example"
                        activeKey={this.state.tabKey}
                        onSelect={(k) => this.setTabKey(k)}
                    >
                        <Tab eventKey="remaining" title="Remaining">
                            Remaining
                        </Tab>
                        <Tab eventKey="completed" title="Completed">
                           Completed
                        </Tab>

                    </Tabs>

                {
                    this.state.addNewTask?
                       this.showAddNewTask()
                        : null
                }
            </Container>
        );
    }

}

export default UserHome;