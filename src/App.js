import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import { Routes } from './Routes';
import { MastHead } from './components/Nav/MastHead';
import { VerticalNav } from 'patternfly-react';
// import { VerticalNav } from './components/Nav/VerticalNav';
import { Credentials } from './models/credentials';
import './css/App.css';

type Props = {
  history: Array<string>,
  credentials: Credentials
};

type State = {};

class App extends React.Component<Props, State> {
  handleNavClick = (event: Event) => {
    event.preventDefault();
    let target = (event.currentTarget: any);
    if (target.getAttribute) {
      let href = target.getAttribute('href');
      this.props.history.push(href);
    }
  };

  render() {
    return (
      <div className="layout-pf layout-pf-fixed">
        <VerticalNav persistentSecondary={false}>
          <VerticalNav.Masthead>
            <VerticalNav.Brand />
            />
          </VerticalNav.Masthead>
        </VerticalNav>
      </div>
    );
  }
}

const mapStateToProps = ({ loginReducer }) => {
  return {
    credentials: loginReducer
  };
};

export default withRouter(connect(mapStateToProps)(App));
