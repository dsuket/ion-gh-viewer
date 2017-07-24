import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { RequestAndOptions } from 'apollo-client/transport/networkinterface';

export class GithubGqlClient extends ApolloClient {

  public token: string;

  constructor(options?: any) {
    options = Object.assign({
      networkInterface: createNetworkInterface({
        uri: 'https://api.github.com/graphql'
      }),
    }, options)
    super(options);

    this.networkInterface.use([
      {applyMiddleware: this.applyToken.bind(this)}
    ]);
  }

  private applyToken(req: RequestAndOptions, next: Function): void {
    if (!this.token) {
      return next(new Error('token is null.'));
    }
    const {headers = {}} = req.options;
    req.options.headers = headers;
    headers.authorization = `bearer ${this.token}`;
    next();
  }
}

const client = new GithubGqlClient();
export function provideClient(): GithubGqlClient {
  return client;
}
