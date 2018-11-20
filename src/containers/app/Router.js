import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../_layout/index';
import MainWrapper from './MainWrapper';

import Landing from '../landing/index';

import Introduction from '../documentation/01_introduction/index';
import Installation from '../documentation/02_installation/index';
import FileStructure from '../documentation/03_files_structure/index';

import NotFound404 from '../_layout/404/index';
import WizardForm from '../form/wizard_form/index';
import Wallet from '../wallet/index';
import MainDashboard from '../dashboards/mainDashboard/index';
import ConnectionsTable from '../connections/index';


const Router = () => (
  <MainWrapper>
    <main>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/404" component={NotFound404} />
        <Route path="/stats" component={WizardForm} />
        <Route path="/explorer" component={} />
        <Route path="/faucet" component={NotFound404} />
        <Route path="/about" component={WizardForm} />
        <Route path="/wiki" component={} />
        <Route path="/blog" component={} />
      </Switch>
    </main>
  </MainWrapper>
);

export default Router;
