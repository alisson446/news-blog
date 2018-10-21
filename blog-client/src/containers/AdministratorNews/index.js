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
  Col
} from 'react-bootstrap';
import FieldGroup from '../../components/FieldGroup'
import Header from '../../components/Header'
import LinkWithIcon from '../../components/LinkWithIcon'
import SubmitButton from '../../components/SubmitButton'
import './index.css';

import { apiCreateNews, apiFetchNews, apiUpdateNews } from './actions'
import { addNotification } from '../App/actions'

class AdministratorNews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        title: '',
        content: '',
        category: '',
        author: '',
        keywords: ''
      },
      newsId: null,
      redirect: null
    };

    this.redirectTo = this.redirectTo.bind(this);
    this.handleChangeField = this.handleChangeField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const parameterId = this.props.match.params.newsId;

    if (parameterId) {
      this.props.fetchNews(parameterId)
        .then(() => {
          this.setState({
            newsId: this.props.news.id,
            form: {
              title: this.props.news.title,
              content: this.props.news.content,
              category: this.props.news.category,
              author: this.props.news.author,
              keywords: this.props.news.keywords
            }
          })
        })
    }
  }

  handleChangeField(field, event) {
    this.setState({
      form: {
        ...this.state.form,
        [field]: event.target.value
      }
    });
  }

  redirectTo(path) {
    this.setState({ redirect: <Redirect to={path} /> });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (!this.state.newsId) {
      this.props.createNews(this.state.form)
        .then(() => {
          this.props.addNotification('Cadastrado com sucesso', 'success');
          this.redirectTo('/administratorMain');
        })
        .catch(() => this.props.addNotification('Não foi possível cadastrar', 'error'));
    } else {
      this.props.updateNews(this.state.newsId, this.state.form)
        .then(() => {
          this.props.addNotification('Salvo Com Sucesso', 'success');
          this.redirectTo('/administratorMain');
        })
        .catch(() => this.props.addNotification('Não foi possível salvar', 'error'));
    }
  }

  render () {
    return (
      <div className="news">
        <Header>Notícia</Header>

        <form onSubmit={this.handleSubmit}>
          <Grid>
            <Row className="show-grid">
              <Col xs={12} md={12}>
                <LinkWithIcon to='/administratorMain' icon="th-list" />
              </Col>
            </Row>

            <Row className="show-grid">
              <Col xs={12} md={12}>
                <FieldGroup
                  id="formControlsTitle"
                  type="text"
                  label="Título"
                  maxLength="150"
                  placeholder="Título"
                  value={this.state.form.title}
                  onChange={(event) => this.handleChangeField('title', event)}
                  required
                />
              </Col>
            </Row>
            <Row className="show-grid">
              <Col xs={12} md={12}>
                <FieldGroup
                  id="formControlsContent"
                  type="textarea"
                  label="Conteúdo"
                  placeholder="Conteúdo"
                  value={this.state.form.content}
                  onChange={(event) => this.handleChangeField('content', event)}
                  required
                />
              </Col>
            </Row>

            <Row className="show-grid">
              <Col xs={12} md={6}>
                <FieldGroup
                  id="formControlsAuthor"
                  type="text"
                  label="Autor"
                  placeholder="Autor"
                  value={this.state.form.author}
                  onChange={(event) => this.handleChangeField('author', event)}
                  required
                />
              </Col>

              <Col xs={12} md={3}>
                <FieldGroup
                  id="formControlsCategory"
                  type="text"
                  label="Categoria"
                  placeholder="Categoria"
                  value={this.state.form.category}
                  onChange={(event) => this.handleChangeField('category', event)}
                  required
                />
              </Col>

              <Col xs={12} md={3}>
                <FieldGroup
                  id="formControlsKeywords"
                  type="text"
                  label="Palavras-chaves"
                  placeholder="Palavras-chaves"
                  value={this.state.form.keywords}
                  onChange={(event) => this.handleChangeField('keywords', event)}
                  required
                />
              </Col>
            </Row>

            <Row className="show-grid">
              <Col xs={12} md={12}>
                <SubmitButton tooltipMessage="Salvar" />
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
    createNews: (payload) => dispatch(apiCreateNews(payload)),
    fetchNews: (newsId) => dispatch(apiFetchNews(newsId)),
    updateNews: (newsId, payload) => dispatch(apiUpdateNews(newsId, payload)),
    addNotification: (message, level) => dispatch(addNotification(message, level))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdministratorNews)
