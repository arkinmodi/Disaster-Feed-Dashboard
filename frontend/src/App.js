import React from "react";
import "./App.css";
import {
  HashRouter as Router,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Table, Form } from "react-bootstrap";

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

// Home Page
class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
      </div>
    );
  }
}

// Live Feed Page
class LiveFeed extends React.Component {
  render() {
    return (
      <div>
        {this.props.posts.map(
          ({ name, image, content, problem, priority, id }) => (
            <div key={id}>
              <img src={image} alt="{name}" /> <br />
              {name} <br />
              {problem} <br />
              {priority} <br />
              {content} <br /> <br /> <br /> <br />
            </div>
          )
        )}
      </div>
    );
  }
}

// Analytics Page
class Analytics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Levels
      levelLow: true,
      levelMedium: true,
      levelHigh: true,
      levelCritical: true,

      // Danger
      dangerFire: true,
      dangerFlood: true,
      dangerPower: true,
      dangerMedical: true,
    };
  }

  render() {
    return (
      <div>
        <h1>Analytics Page</h1>

        {/* Filter Options */}
        <Table borderless>
          <thead>
            <tr>
              <th>Danger</th>
              <th>Level</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Form.Check
                  type="checkbox"
                  label="Fire"
                  checked={this.state.dangerFire}
                  onChange={(event) =>
                    this.setState({ dangerFire: !this.state.dangerFire })
                  }
                />
              </td>
              <td>
                <Form.Check
                  type="checkbox"
                  label="Low"
                  checked={this.state.levelLow}
                  onChange={(event) =>
                    this.setState({ levelLow: !this.state.levelLow })
                  }
                />
              </td>
            </tr>
            <tr>
              <td>
                <Form.Check
                  type="checkbox"
                  label="Flood"
                  checked={this.state.dangerFlood}
                  onChange={(event) =>
                    this.setState({ dangerFlood: !this.state.dangerFlood })
                  }
                />
              </td>
              <td>
                <Form.Check
                  type="checkbox"
                  label="Medium"
                  checked={this.state.levelMedium}
                  onChange={(event) =>
                    this.setState({ levelMedium: !this.state.levelMedium })
                  }
                />
              </td>
            </tr>
            <tr>
              <td>
                <Form.Check
                  type="checkbox"
                  label="Power"
                  checked={this.state.dangerPower}
                  onChange={(event) =>
                    this.setState({ dangerPower: !this.state.dangerPower })
                  }
                />
              </td>
              <td>
                <Form.Check
                  type="checkbox"
                  label="High"
                  checked={this.state.levelHigh}
                  onChange={(event) =>
                    this.setState({ levelHigh: !this.state.levelHigh })
                  }
                />
              </td>
            </tr>
            <tr>
              <td>
                <Form.Check
                  type="checkbox"
                  label="Medical"
                  checked={this.state.dangerMedical}
                  onChange={(event) =>
                    this.setState({ dangerMedical: !this.state.dangerMedical })
                  }
                />
              </td>
              <td>
                <Form.Check
                  type="checkbox"
                  label="Critical"
                  checked={this.state.levelCritical}
                  onChange={(event) =>
                    this.setState({ levelLow: !this.state.levelCritical })
                  }
                />
              </td>
            </tr>
          </tbody>
        </Table>

        {/* Data Table */}
        <Table bordered hover>
          <thead>
            <tr>
              <th></th>
              <th>Fire</th>
              <th>Flood</th>
              <th>Power</th>
              <th>Medical</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Low</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>Medium</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>High</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>Critical</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>Total</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

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
