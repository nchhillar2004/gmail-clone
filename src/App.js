import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import InboxMailView from './routes/Mail View/Inbox/InboxMailView';
import StarredMailView from './routes/Mail View/Starred/StarredMailView';
import EmailList from './routes/Emails Lists/EmailList';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <Header/>
        <div className="app_body">
              <Sidebar/>
            <Routes>
                <Route path='/mail/in' element={<InboxMailView />}/>
                <Route path='/mail/st' element={<StarredMailView />}/>
                <Route path='/inbox' element={<EmailList filter="inbox"/>}/>
                <Route path='/starred' element={<EmailList filter="starred"/>} />
                <Route path='/snoozed' element={<EmailList filter="snoozed"/>} />
                <Route path='/' element={<EmailList filter="inbox"/>} />
            </Routes>

        </div>

      </div>
    </Router>
  );
}

export default App;
