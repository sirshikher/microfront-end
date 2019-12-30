import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import axios from "axios";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import { isBlock } from "typescript";
class AnimationExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsData: ""
    };
  }

  componentWillMount() {    
    this.NewsAPicall();
  }
  NewsAPicall() {
    var url =
      `https://newsapi.org/v2/everything?q=${location.pathname}&apiKey=b9ff37e754e041138501e1144b2544a4`;
    const response = axios
      .get(url, {
        mode: "cors"
      })
      .then(res =>
        this.setState({
          newsData: res
        })
      );
  }

  render() {    
  
    return (
      <div>
        {this.state.newsData &&
          this.state.newsData.data.articles.map(item => (
            <Card style={styles.card}>
              <CardImg
                top
                width="100%"
                src={item.urlToImage}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle style={styles.cardtitle}> {item.title}</CardTitle>
                <CardSubtitle style={styles.cardsubtitle}>
                  <b>Author:</b> {item.author}
                </CardSubtitle>
                <CardText style={styles.cardtext}>{item.content}</CardText>
                <a
                  href={item.url}
                  target="_blank"
                  className="waves-effect waves-light btn-large"
                  style={{marginRight: "10px"}}
                >
                  Watch Full news
                </a>
              </CardBody>
            </Card>
          ))}
      </div>
    );
  }
}
const styles = {};
styles.card = {
  position: "relative",
  maxWidth: "25%",
  display: "inline-Block"
};
styles.cardtitle = {
  color: "red",
  fontWeight: "bold",
  marginLeft: "3%"
};
styles.cardsubtitle = {
  marginLeft: "3%"
};
styles.cardtext = {
  marginLeft: "3%"
};

export default AnimationExample;
