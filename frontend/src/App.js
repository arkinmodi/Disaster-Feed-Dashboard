import React from "react";
import "./App.css";
import {
  HashRouter as Router,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";

// Import My Components
import Home from "./components/Home";
import LiveFeed from "./components/LiveFeed";
import Analytics from "./components/Analytics";

// Install the socket io client using:
//    npm install socket.io
//
// Then import socket io and create a socket:
//
import io from "socket.io-client";
const socket = io("http://localhost:3001");
//
// See: https://socket.io/get-started/chat
//      https://www.npmjs.com/package/socket.io-client

class App extends React.Component {
  constructor(props) {
    super(props);

    // An array of social media posts messages, and we'll increment nextID
    // to maintain a unique ID for each post in our array
    this.state = { posts: [], nextID: 0 };

    // We can setup the event handlers for the messages in the constructor...
    socket.on(
      "connect",
      function () {
        console.log("Connect....");

        // When we receive a social media message, call setState and insert
        // it into the array of posts
        socket.on(
          "post",

          function (data) {
            // Can uncomment this to see the raw data coming in...
            // console.log("post: " + JSON.stringify(data));

            // increment the next unique ID, and put post data into the list of
            // posts... use the '...' syntax to make this insertion easier:
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
            this.setState({
              posts: [
                ...this.state.posts,
                {
                  name: data.name,
                  image: data.image,
                  content: data.content,
                  problem: data.problem,
                  priority: data.priority,
                  id: this.state.nextID,
                },
              ],
              nextID: this.state.nextID + 1,
            });
          }.bind(this)
        );
        // ^^ Like other event handlers, we bind the callback function to the
        // component so we can use setState
      }.bind(this)
    );
    // ^^ ... And same with the callback function for when a connection is made
  }

  render() {
    return (
      <div>
        <Router>
          {/* Start App at Home */}
          <Redirect to="/home" />

          {/* Navbar */}
          <Navbar bg="light" expand="lg">
            <Navbar.Brand>Disaster Feed Dashboard</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link as={NavLink} to="/home">
                  Home
                </Nav.Link>
                <Nav.Link as={NavLink} to="/live-feed">
                  Live Feed
                </Nav.Link>
                <Nav.Link as={NavLink} to="/analytics">
                  Analytics
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          {/* Render Components */}
          <Route path="/home" component={Home} />
          <Route
            path="/live-feed"
            render={(props) => <LiveFeed {...props} posts={this.state.posts} />}
          />
          <Route
            path="/analytics"
            render={(props) => (
              <Analytics {...props} posts={this.state.posts} />
            )}
          />
        </Router>
      </div>
    );
  }
}

export default App;
