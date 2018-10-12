import React, { Component } from 'react';
import classNames from 'classnames';
import './index.style.scss';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container } from 'reactstrap';

class MyNavbar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      isScrolled: false
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    let {isScrolled} = this.state;
    if(window.scrollY > 150) {
      if(!isScrolled) this.setState({isScrolled: true})
    } else {
      if(isScrolled) this.setState({isScrolled: false})
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    let classes = classNames({
      'main-navbar': true,
      'scrolled' : this.state.isScrolled
    })

    return (
      <div>
        <Navbar className={classes} fixed={`top`} dark expand="md">
          <Container>
            <NavbarBrand href="/">My App</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/components/">Link</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink href="/components/">Link</NavLink>
                </NavItem>
                
                <NavItem>
                  <NavLink href="/components/">Link</NavLink>
                </NavItem>
                
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Dropdown
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      Option 1
                    </DropdownItem>
                    <DropdownItem>
                      Option 2
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      Reset
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default MyNavbar