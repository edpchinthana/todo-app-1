
import React, {Component} from 'react';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function getSingleToDo(props){


    const handleDeleteTask = (id) => {
        console.log(id);
    }

    const handleCompleteTask = (task) => {
        console.log(task);
    }

    return (
        <Card className={"mt-2 mb-2"}>
            <Row>
                <Col lg={10}>
                    <Card.Body>{props.task}</Card.Body>
                </Col>
                <Col lg={2}>
                    <Card.Body style={{padding:"15px",paddingRight:"25px"}}>
                  <Row className={"float-right mb-0"}>
                      {props.isRemaining?
                          <Button variant={"success"} className={"mr-2 mb-0"} onClick={()=> handleCompleteTask(props.task)}>
                              Done
                          </Button>
                          :null
                      }
                      <Button variant={"warning"} className={"mb-0"} onClick={()=> handleDeleteTask(props.id)}>
                          Delete
                      </Button>
                  </Row>
                    </Card.Body>

                </Col>
            </Row>
        </Card>
    );
}


