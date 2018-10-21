/**
 * Modules
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from "react-router-dom";

/**
 * Components
 */
import {
  Grid,
  Row,
  Col,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap';
import Header from '../../components/Header'

import { apiFetchAllNews, resetNewsState } from '../AdministratorMain/actions'
import { addNotification } from '../App/actions'

class AdministratorMain extends Component {
  componentDidMount() {
    this.props.fechAllNews();
  }

  componentWillUnmount() {
    this.props.resetNewsState();
  }

  render () {
    return (
      <div className="Bot">
        <Header>Notícias</Header>

        <Grid>
          <Row className="show-grid table-row">
            <Col xs={12} md={12}>
              {
                Object.keys(this.props.news).map((newsId) => {
                  const news = this.props.news[newsId];

                  return (
                    <ListGroup key={news.id}>
                      <Link to={`/news/${news.id}`}>
                        <ListGroupItem header={news.title} href="#">
                          {
                            (news.content.length > 50)
                            ? `${news.content.slice(0, 50)}...`
                            : news.content
                          }
                        </ListGroupItem>
                      </Link>
                    </ListGroup>
                  );
                })
              }
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    news: state.AdministratorMain.news
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fechAllNews: () => dispatch(apiFetchAllNews()),
    resetNewsState: () => dispatch(resetNewsState()),
    addNotification: (message, level) => dispatch(addNotification(message, level))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdministratorMain)
