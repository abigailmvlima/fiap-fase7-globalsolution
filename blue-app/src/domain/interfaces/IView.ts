import { bool } from "aws-sdk/clients/signer";

export interface IView {
  history: {
    length: number;
    action: string;
    location: {
      pathname: string;
      search: string;
      hash: string;
      key: string;
    };
    index: number;
    entries: [
      {
        pathname: string;
        search: string;
        hash: string;
        key: string;
      },
    ];
  };
  location: {
    pathname: string;
    search: string;
    hash: string;
    key: string;
  };
  match: {
    path: string;
    url: string;
    params: object;
    isExact: bool;
  };
}
