import React from 'react';
import PropTypes from 'prop-types';
import {useCommentsData} from '../hooks/useCommentsData';

export const commentsDataContext = React.createContext({});
export const CommentsDataContextProvider = ({children}) => {
  const [postData, commentsData] = useCommentsData();

  return (
    <commentsDataContext.Provider value={{postData, commentsData}}>
      {children}
    </commentsDataContext.Provider>
  );
};

CommentsDataContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
