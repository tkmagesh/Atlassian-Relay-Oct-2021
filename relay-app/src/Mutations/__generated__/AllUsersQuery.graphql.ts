/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type AllUsersQueryVariables = {};
export type AllUsersQueryResponse = {
    readonly totalUsers: number | null;
    readonly users: ReadonlyArray<{
        readonly id: string;
        readonly firstName: string;
        readonly lastName: string;
        readonly email: string;
    }>;
};
export type AllUsersQuery = {
    readonly response: AllUsersQueryResponse;
    readonly variables: AllUsersQueryVariables;
};



/*
query AllUsersQuery {
  totalUsers
  users {
    id
    firstName
    lastName
    email
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "totalUsers",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "users",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "firstName",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "lastName",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "email",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AllUsersQuery",
    "selections": (v0/*: any*/),
    "type": "RootQuery",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AllUsersQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "2128ab992c1fdcf1d895c89336137ff4",
    "id": null,
    "metadata": {},
    "name": "AllUsersQuery",
    "operationKind": "query",
    "text": "query AllUsersQuery {\n  totalUsers\n  users {\n    id\n    firstName\n    lastName\n    email\n  }\n}\n"
  }
};
})();
(node as any).hash = '7e8e5302cedb9c2be6a585026e4865b7';
export default node;
