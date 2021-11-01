/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type Severity = "CRITICAL" | "LOW" | "MAJOR" | "MINOR" | "%future added value";
export type Status = "CLOSED" | "IN_PROGRESS" | "OPEN" | "%future added value";
export type CreateBugInput = {
    bug?: BugInput | null;
    clientMutationId?: string | null;
};
export type BugInput = {
    title: string;
    description: string;
    severity: Severity;
    projectId: string;
    userId: string;
};
export type Bugs_CreateBugMutationVariables = {
    input: CreateBugInput;
};
export type Bugs_CreateBugMutationResponse = {
    readonly createBug: {
        readonly bugEdge: {
            readonly node: {
                readonly id: string;
                readonly title: string;
                readonly description: string;
                readonly severity: Severity;
                readonly status: Status | null;
            } | null;
            readonly cursor: string;
        } | null;
    } | null;
};
export type Bugs_CreateBugMutation = {
    readonly response: Bugs_CreateBugMutationResponse;
    readonly variables: Bugs_CreateBugMutationVariables;
};



/*
mutation Bugs_CreateBugMutation(
  $input: CreateBugInput!
) {
  createBug(input: $input) {
    bugEdge {
      node {
        id
        title
        description
        severity
        status
      }
      cursor
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateBugPayload",
    "kind": "LinkedField",
    "name": "createBug",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "BugEdge",
        "kind": "LinkedField",
        "name": "bugEdge",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Bug",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
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
                "name": "severity",
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "cursor",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "Bugs_CreateBugMutation",
    "selections": (v1/*: any*/),
    "type": "Mutations",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "Bugs_CreateBugMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "6d42b96c706da8af6f5fc1fdcad7cea4",
    "id": null,
    "metadata": {},
    "name": "Bugs_CreateBugMutation",
    "operationKind": "mutation",
    "text": "mutation Bugs_CreateBugMutation(\n  $input: CreateBugInput!\n) {\n  createBug(input: $input) {\n    bugEdge {\n      node {\n        id\n        title\n        description\n        severity\n        status\n      }\n      cursor\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '87438e0eba537be7c81d3335b68e2fcd';
export default node;
