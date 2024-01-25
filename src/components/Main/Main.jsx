import Tabs from './Tabs';
import List from './List';
import style from './Main.module.css';
import Layout from '../Header/Layout';
import {Navigate, Route, Routes} from 'react-router-dom';
import Modal from '../../components/Modal';
import HomePage from './HomePage';
import Page404 from './Page404';

export const Main = () => (
  <main className={style.main}>
    <Layout>
      <Tabs />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/category/:page' element={<List/>}>
          <Route path='post/:id' element={<Modal/> }/>
        </Route>
        <Route path='auth' element={<Navigate to='/' />} />
        <Route path='*' element={<Page404/>}/>
      </Routes>
    </Layout>
  </main>
);


