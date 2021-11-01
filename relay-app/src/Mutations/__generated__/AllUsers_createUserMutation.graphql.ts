/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type AllUsers_createUserMutationVariables = {};
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
mutation AllUsers_createUserMutation {
  createUser(input: {firstName: "Magesh", lastName: "K", email: "mk@email.com"}) {
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
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "input",
        "value": {
          "email": "mk@email.com",
          "firstName": "Magesh",
          "lastName": "K"
        }
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
    "storageKey": "createUser(input:{\"email\":\"mk@email.com\",\"firstName\":\"Magesh\",\"lastName\":\"K\"})"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AllUsers_createUserMutation",
    "selections": (v0/*: any*/),
    "type": "Mutations",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AllUsers_createUserMutation",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "feb3e76814d0b06edc34cc9a4b9fe605",
    "id": null,
    "metadata": {},
    "name": "AllUsers_createUserMutation",
    "operationKind": "mutation",
    "text": "mutation AllUsers_createUserMutation {\n  createUser(input: {firstName: \"Magesh\", lastName: \"K\", email: \"mk@email.com\"}) {\n    user {\n      id\n      firstName\n      lastName\n      email\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '9669cb5d3e60595d9c5585bdfe355329';
export default node;
