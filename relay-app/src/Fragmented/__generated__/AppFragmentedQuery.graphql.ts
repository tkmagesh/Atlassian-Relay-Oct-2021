/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AppFragmentedQueryVariables = {};
export type AppFragmentedQueryResponse = {
    readonly users: ReadonlyArray<{
        readonly " $fragmentRefs": FragmentRefs<"User_user">;
    }>;
};
export type AppFragmentedQuery = {
    readonly response: AppFragmentedQueryResponse;
    readonly variables: AppFragmentedQueryVariables;
};



/*
query AppFragmentedQuery {
  users {
    ...User_user
    id
  }
}

fragment User_user on User {
  id
  firstName
  lastName
  email
}
*/

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppFragmentedQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "users",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "User_user"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "RootQuery",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppFragmentedQuery",
    "selections": [
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
    ]
  },
  "params": {
    "cacheID": "fffd726750dfe1d9e1db0ee08a2cdf36",
    "id": null,
    "metadata": {},
    "name": "AppFragmentedQuery",
    "operationKind": "query",
    "text": "query AppFragmentedQuery {\n  users {\n    ...User_user\n    id\n  }\n}\n\nfragment User_user on User {\n  id\n  firstName\n  lastName\n  email\n}\n"
  }
};
(node as any).hash = 'e960f099f995601ef13c7f1bbd8db16c';
export default node;
