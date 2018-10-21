/**
 * Modules
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom";

/**
 * Components
 */
import {
  Grid,
  Row,
  Col,
  Label
} from 'react-bootstrap';
import Header from '../../components/Header'
import LinkWithIcon from '../../components/LinkWithIcon'
import './index.css';

import { apiFetchNews } from '../AdministratorNews/actions'
import { addNotification } from '../App/actions'

class AdministratorNews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newsId: null,
      redirect: null
    };

    this.redirectTo = this.redirectTo.bind(this);
  }

  componentDidMount() {
    const parameterId = this.props.match.params.newsId;

    this.props.fetchNews(parameterId)
      .then(() => {
        this.setState({
          newsId: this.props.news.id
        })
      })
  }

  redirectTo(path) {
    this.setState({ redirect: <Redirect to={path} /> });
  }

  render () {
    return (
      <div className="news">
        <Header>{this.props.news.title}</Header>

        <form onSubmit={this.handleSubmit}>
          <Grid>
            <Row className="show-grid">
              <Col xs={12} md={12}>
                <LinkWithIcon to='/listNews' icon="arrow-circle-left" />
              </Col>
            </Row>

            <Row className="show-grid">
              <Col xs={12} md={12}>
                <h5>
                  {this.props.news.content}
                </h5>
              </Col>
            </Row>

            <Row className="show-grid bottom">
              <Col xs={12} md={12}>
                <p>
                  <Label>Autor:</Label> {this.props.news.author}
                </p>
              </Col>
            </Row>
          </Grid>
        </form>

        { this.state.redirect }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    news: state.AdministratorNews.news
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchNews: (newsId) => dispatch(apiFetchNews(newsId)),
    addNotification: (message, level) => dispatch(addNotification(message, level))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdministratorNews)
