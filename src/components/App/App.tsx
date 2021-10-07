import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import TodosPage from '../../pages/Todos';

const { Header } = Layout;

function App() {
  return (
    <Router>
      <Layout>
        <Header style={{ backgroundColor: '#334756', color: '#F6F6F6' }}>
          <i className="fab fa-accusoft"></i>
          {'  '}
          MyTodos
        </Header>
        <Route exact path="/" component={TodosPage} />
      </Layout>
    </Router>
  );
}

export default App;
