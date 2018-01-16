
import React from 'react';
import {client} from '../config/config';
// -------- 添加内容 -------- //
import {  ApolloProvider,gql,graphql} from 'react-apollo';

const Test = ({ data: {loading, error,getMessage} }) => {

  if (loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  
  return (
            <div>
                {getMessage?getMessage:'this is not data,please add data'}
            </div>
          );
  };
   

const Gtest = graphql(gql`
     query{
         getMessage
      }
`)(Test);

  // -------- 添加内容 -------- //
class Query extends React.Component {

 render() {
      let server=client();
      return (
        <ApolloProvider client={server}>
            <Gtest />  
        </ApolloProvider>
      );
    }
  }

export default Query;





