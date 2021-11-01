/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type CreateUserInput = {
    firstName: string;
    lastName: string;
    email: string;
    clientMutationId?: string | null;
};
export type AllUsers_createUserMutationVariables = {
    input: CreateUserInput;
};
export type AllUsers_createUserMutationResponse = {
    readonly createUser: {
        readonly user: {
            readonly id: string;
            readonly firstName: string;
            readonly lastName: string;
            readonly email: string;
        } | null;
    } | null;
};
export type AllUsers_createUserMutation = {
    readonly response: AllUsers_createUserMutationResponse;
    readonly variables: AllUsers_createUserMutationVariables;
};



/*
mutation AllUsers_createUserMutation(
  $input: CreateUserInput!
) {
  createUser(input: $input) {
    user {
      id
      firstName
      lastName
      email
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
    "concreteType": "CreateUserPayload",
    "kind": "LinkedField",
    "name": "createUser",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
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
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AllUsers_createUserMutation",
    "selections": (v1/*: any*/),
    "type": "Mutations",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AllUsers_createUserMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "e18057f6e45dc1378b73377b73a4f01d",
    "id": null,
    "metadata": {},
    "name": "AllUsers_createUserMutation",
    "operationKind": "mutation",
    "text": "mutation AllUsers_createUserMutation(\n  $input: CreateUserInput!\n) {\n  createUser(input: $input) {\n    user {\n      id\n      firstName\n      lastName\n      email\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '9dc00880f6843d79e4df1fb00804b6ac';
export default node;
