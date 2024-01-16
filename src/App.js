import Header from './components/Header';
import {Main} from './components/Main/Main';
import {AuthContextProvider} from './context/authContext';
import {TokenContextProvider} from './context/tokenContext';
import {PostContextProvider} from './context/postContext';
import {CommentsDataContextProvider} from './context/commentsDataContext';

function App() {
  return (
    <TokenContextProvider>
      <AuthContextProvider>
        <PostContextProvider>
          <CommentsDataContextProvider>
            <Header/>
            <Main/>
          </CommentsDataContextProvider>
        </PostContextProvider>
      </AuthContextProvider>
    </TokenContextProvider>
  );
}

export default App;
