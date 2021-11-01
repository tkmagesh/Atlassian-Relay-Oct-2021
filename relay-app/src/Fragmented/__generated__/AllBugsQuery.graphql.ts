/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AllBugsQueryVariables = {};
export type AllBugsQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"AllBugs_Bug">;
};
export type AllBugsQuery = {
    readonly response: AllBugsQueryResponse;
    readonly variables: AllBugsQueryVariables;
};



/*
query AllBugsQuery {
  ...AllBugs_Bug
}

fragment AllBugs_Bug on RootQuery {
  bugs {
    id
    title
    description
    status
  }
}
*/

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AllBugsQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "AllBugs_Bug"
      }
    ],
    "type": "RootQuery",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AllBugsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Bug",
        "kind": "LinkedField",
        "name": "bugs",
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
            "name": "title",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "description",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "status",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "192c350a6a542b33dc6f23ded8b03c06",
    "id": null,
    "metadata": {},
    "name": "AllBugsQuery",
    "operationKind": "query",
    "text": "query AllBugsQuery {\n  ...AllBugs_Bug\n}\n\nfragment AllBugs_Bug on RootQuery {\n  bugs {\n    id\n    title\n    description\n    status\n  }\n}\n"
  }
};
(node as any).hash = 'e1e208a8cea96bd107384e3f93487f67';
export default node;
