import React from 'react';
import PropTypes from 'prop-types';
import {usePost} from '../hooks/usePost';

export const postContext = React.createContext({});
export const PostContextProvider = ({children}) => {
  const [postData] = usePost();

  return (
    <postContext.Provider value={{postData}}>
      {children}
    </postContext.Provider>
  );
};
PostContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
