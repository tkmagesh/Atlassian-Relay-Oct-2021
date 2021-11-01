/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type Status = "CLOSED" | "IN_PROGRESS" | "OPEN" | "%future added value";
export type AppFragmentedQueryVariables = {
    status?: Status | null;
};
export type AppFragmentedQueryResponse = {
    readonly users: ReadonlyArray<{
        readonly " $fragmentRefs": FragmentRefs<"User_user">;
    }>;
    readonly projects: ReadonlyArray<{
        readonly id: string;
        readonly " $fragmentRefs": FragmentRefs<"Project_project">;
    } | null>;
    readonly " $fragmentRefs": FragmentRefs<"AllBugs_Bug">;
};
export type AppFragmentedQuery = {
    readonly response: AppFragmentedQueryResponse;
    readonly variables: AppFragmentedQueryVariables;
};



/*
query AppFragmentedQuery(
  $status: Status
) {
  users {
    ...User_user
    id
  }
  projects {
    id
    ...Project_project_lg5YC
  }
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

fragment User_user on User {
  id
  firstName
  lastName
  email
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "status"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "kind": "Variable",
    "name": "status",
    "variableName": "status"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v4 = [
  (v1/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "title",
    "storageKey": null
  },
  (v3/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "status",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
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
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Project",
        "kind": "LinkedField",
        "name": "projects",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          {
            "args": (v2/*: any*/),
            "kind": "FragmentSpread",
            "name": "Project_project"
          }
        ],
        "storageKey": null
      },
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
    "argumentDefinitions": (v0/*: any*/),
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
          (v1/*: any*/),
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
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Project",
        "kind": "LinkedField",
        "name": "projects",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          (v3/*: any*/),
          {
            "alias": null,
            "args": (v2/*: any*/),
            "concreteType": "Bug",
            "kind": "LinkedField",
            "name": "bugs",
            "plural": true,
            "selections": (v4/*: any*/),
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Bug",
        "kind": "LinkedField",
        "name": "bugs",
        "plural": true,
        "selections": (v4/*: any*/),
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "bc07009a8901d7ce41076715f0d6e16d",
    "id": null,
    "metadata": {},
    "name": "AppFragmentedQuery",
    "operationKind": "query",
    "text": "query AppFragmentedQuery(\n  $status: Status\n) {\n  users {\n    ...User_user\n    id\n  }\n  projects {\n    id\n    ...Project_project_lg5YC\n  }\n  ...AllBugs_Bug\n}\n\nfragment AllBugs_Bug on RootQuery {\n  bugs {\n    id\n    title\n    description\n    status\n  }\n}\n\nfragment Bug_bug on Bug {\n  id\n  title\n  description\n  status\n}\n\nfragment Project_project_lg5YC on Project {\n  id\n  name\n  description\n  bugs(status: $status) {\n    id\n    ...Bug_bug\n  }\n}\n\nfragment User_user on User {\n  id\n  firstName\n  lastName\n  email\n}\n"
  }
};
})();
(node as any).hash = 'ff4227f1efff064e03df60f3320bf4d2';
export default node;
