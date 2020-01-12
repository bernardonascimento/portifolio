import React, { Component } from 'react';
import { Link } from 'react-scroll';

// import { Container } from './styles';

export default class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <Link className="link" activeClass="active" to="home" spy={true} smooth={true} hashSpy={false} offset={0}
          duration={1000}>
          Home
        </Link>
        <Link className="link" activeClass="active" to="sobre" spy={true} smooth={true} hashSpy={false} offset={0}
          duration={1000}>
          Sobre
        </Link>
        <Link className="link" activeClass="active" to="projetos" spy={true} smooth={true} hashSpy={false} offset={0}
          duration={1000}>
          Projetos
        </Link>
        <Link className="link" activeClass="active" to="contato" spy={true} smooth={true} hashSpy={false} offset={0}
          duration={1000}>
          Contato
        </Link>
      </div>
    )
  }
}
