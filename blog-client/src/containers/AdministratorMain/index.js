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
  Button,
  Modal,
  Tooltip,
  OverlayTrigger
} from 'react-bootstrap';
import { Table, Thead, Th, Tr, Td } from 'reactable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from '../../components/Header'
import LinkWithIcon from '../../components/LinkWithIcon'
import './index.css';

import { apiFetchAllNews, apiDeleteNews, resetNewsState } from './actions'
import { addNotification } from '../App/actions'

class AdministratorMain extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      showModal: false
    };

    this.handleShowModal = this.handleShowModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleDeleteBot = this.handleDeleteBot.bind(this);
  }

  componentDidMount() {
    this.props.fechAllNews();
  }

  componentWillUnmount() {
    this.props.resetNewsState();
  }

  handleCloseModal() {
    this.setState({ showModal: false, toDelete: null });
  }

  handleShowModal(botId) {
    this.setState({ showModal: true, toDelete: botId });
  }

  handleDeleteBot(botId) {
    this.props.deleteBot(botId)
      .then(this.handleCloseModal)
      .then(() => this.props.addNotification('Deletado com sucesso', 'success'))
      .catch(() => this.props.addNotification('Não foi possível deletar', 'error'))
  }

  render () {
    const tooltip = (message) => (
      <Tooltip id="tooltip"> {message} </Tooltip>
    );

    return (
      <div className="Bot">
        <Header>Lista de Notícias</Header>

        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={12}>
              <LinkWithIcon to='/administratorNews' icon="plus-square" />
            </Col>
          </Row>

          <Row className="show-grid table-row">
            <Col xs={12} md={12}>
              <Table
                className="table"
                noDataText="Sem Dados"
              >
                <Thead>
                  <Th column="title" className="text-column">Título</Th>
                  <Th column="category" className="text-column">Categoria</Th>
                  <Th column="update" className="update-column"> </Th>
                  <Th column="delete" className="delete-column"> </Th>
                </Thead>

                {
                  Object.keys(this.props.news).map((newsId) => {
                    const news = this.props.news[newsId];

                    return (
                      <Tr key={newsId}>
                        <Td column="title">{ news.title }</Td>
                        <Td column="category">{ news.category }</Td>
                        <Td column="update">
                          <OverlayTrigger placement="top" overlay={tooltip('Editar')}>
                            <Link to={`/administratorNews/${newsId}`}>
                              <FontAwesomeIcon className="update-icon" icon="pen" />
                            </Link>
                          </OverlayTrigger>
                        </Td>
                        <Td column="delete">
                          <OverlayTrigger placement="top" overlay={tooltip('Deletar')}>
                            <FontAwesomeIcon
                              className="delete-icon"
                              icon="trash-alt"
                              onClick={() => this.handleShowModal(newsId)}
                            />
                          </OverlayTrigger>
                        </Td>
                      </Tr>
                    );
                  })
                }
              </Table>
            </Col>
          </Row>
        </Grid>

        <Modal show={this.state.showModal} onHide={this.handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Tem certeza que deseja deletar este item?</Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button onClick={this.handleCloseModal}>Cancelar</Button>
            <Button
              bsStyle="danger"
              onClick={() => this.handleDeleteBot(this.state.toDelete)}
            >
              Deletar
            </Button>
          </Modal.Footer>
        </Modal>
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
    deleteBot: (botId) => dispatch(apiDeleteNews(botId)),
    resetNewsState: () => dispatch(resetNewsState()),
    addNotification: (message, level) => dispatch(addNotification(message, level))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdministratorMain)
