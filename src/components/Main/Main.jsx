import Tabs from './Tabs';
import List from './List';
import style from './Main.module.css';
import Layout from '../Header/Layout';

export const Main = () => (
  <main className={style.main}>
    <Layout>
      <Tabs />
      <List/>
    </Layout>
  </main>
);


