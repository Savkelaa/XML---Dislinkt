import React, { useRef } from "react";
import {
    Card,
    ListGroup,
    ListGroupItem,
    CardGroup,
    Button,
  } from "react-bootstrap";
import { Link } from 'react-router-dom';

export default function Messages({user,messages,users,sendMessageHandler}) {

    console.log("messages", messages);
    console.log("users", users);
    console.log("users", user);
    var dateString = new Date().toISOString()
    console.log("first", dateString);
    var clientTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    

    console.log("username", users.filter(obj => {
        return obj.id === "2"
      })[0]?.username);
    
const answer = useRef();


  return ( <div><div className="header">
  {" "}
  <h1 style={{ textAlign: "center" }}> Messages </h1>
</div>

{messages.map((message) => 

 (
    
  <div className="container">
    <div className="row gutters">
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="card h-100">
          <div className="card-body">
            <Card className="cardContainer" style={{ width: "30rem" }}>
              <Card.Img variant="top" />
              <Card.Body>
                <Card.Title className="cardTitle">
                Poruka od  {users.filter(obj => {
    return obj.id === message.senderId
  })[0]?.name} {users.filter(obj => {
    return obj.id === message.senderId
  })[0]?.username}
                </Card.Title>
                <Card.Text>{message.username}</Card.Text>
                <Card.Text>{message.email}</Card.Text>
                
              </Card.Body>
              <ListGroup className="list-group-flush">
              <ListGroupItem>
              Message: {message.message}

                 
                </ListGroupItem>
                <ListGroupItem>
                <input
         className="form-control"
          placeholder="Answer"
          spellCheck="false"
          required=""
          defaultValue={""}
          ref= {answer}
        />
                </ListGroupItem>
              </ListGroup>
              <Card.Body>
              <Link to={`/homepage`}>
                <Button
                    onClick={() => {
                        sendMessageHandler(
                            {
                                senderId: user.id,
                                receiverId: message.senderId,
                                message: answer.current.value,
                                sentDate: new Date().toLocaleString("en-US", {timeZone: clientTimezone})
                            }
                        )
                
                      }}
                  style={{ width: "12rem" }}
                  variant="outline-success"
                >
                 Send message
                </Button>
                </Link>
              
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  </div>
))}</div>);
}
