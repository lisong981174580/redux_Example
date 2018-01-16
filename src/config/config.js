import { ApolloClient,createNetworkInterface} from 'react-apollo';
export function client(){
    let time=new Date();
    time=Number(time);
    let   networkInterface= createNetworkInterface({ uri: 'http://localhost:4000/graphql?time='+time });
    let client = new ApolloClient({networkInterface});
    return client;
    
}





