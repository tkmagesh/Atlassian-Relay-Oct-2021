/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type Status = "CLOSED" | "IN_PROGRESS" | "OPEN" | "%future added value";
export type BugsRefetchQueryVariables = {
    status?: Status | null;
    id: string;
};
export type BugsRefetchQueryResponse = {
    readonly node: {
        readonly " $fragmentRefs": FragmentRefs<"Project_project">;
    } | null;
};
export type BugsRefetchQuery = {
    readonly response: BugsRefetchQueryResponse;
    readonly variables: BugsRefetchQueryVariables;
};



/*
query BugsRefetchQuery(
  $status: Status = OPEN
  $id: ID!
) {
  node(id: $id) {
    __typename
    ...Project_project_lg5YC
    id
  }
}

fragment Bug_bug on Bug {
  id
  title
  description
  status
}

fragment Project_project_lg5YC on Project {
  id
  name
  description
  bugs(status: $status) {
    id
    ...Bug_bug
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v1 = {
  "defaultValue": "OPEN",
  "kind": "LocalArgument",
  "name": "status"
},
v2 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v3 = [
  {
    "kind": "Variable",
    "name": "status",
    "variableName": "status"
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "BugsRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": (v3/*: any*/),
            "kind": "FragmentSpread",
            "name": "Project_project"
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
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "BugsRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          (v4/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              },
              (v5/*: any*/),
              {
                "alias": null,
                "args": (v3/*: any*/),
                "concreteType": "Bug",
                "kind": "LinkedField",
                "name": "bugs",
                "plural": true,
                "selections": [
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "title",
                    "storageKey": null
                  },
                  (v5/*: any*/),
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
            ],
            "type": "Project",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "71b14424eaeee2a57e7357d613a45440",
    "id": null,
    "metadata": {},
    "name": "BugsRefetchQuery",
    "operationKind": "query",
    "text": "query BugsRefetchQuery(\n  $status: Status = OPEN\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...Project_project_lg5YC\n    id\n  }\n}\n\nfragment Bug_bug on Bug {\n  id\n  title\n  description\n  status\n}\n\nfragment Project_project_lg5YC on Project {\n  id\n  name\n  description\n  bugs(status: $status) {\n    id\n    ...Bug_bug\n  }\n}\n"
  }
};
})();
(node as any).hash = '3b897445b658df2d37c8f3104361d05f';
export default node;
