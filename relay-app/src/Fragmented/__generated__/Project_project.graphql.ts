/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import BugsRefetchQuery from "./BugsRefetchQuery.graphql";
import { FragmentRefs } from "relay-runtime";
export type Project_project = {
    readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly bugs: ReadonlyArray<{
        readonly " $fragmentRefs": FragmentRefs<"Bug_bug">;
    }> | null;
    readonly " $refType": "Project_project";
};
export type Project_project$data = Project_project;
export type Project_project$key = {
    readonly " $data"?: Project_project$data;
    readonly " $fragmentRefs": FragmentRefs<"Project_project">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": "OPEN",
      "kind": "LocalArgument",
      "name": "status"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [
        "node"
      ],
      "operation": BugsRefetchQuery,
      "identifierField": "id"
    }
  },
  "name": "Project_project",
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
      "name": "name",
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
      "args": [
        {
          "kind": "Variable",
          "name": "status",
          "variableName": "status"
        }
      ],
      "concreteType": "Bug",
      "kind": "LinkedField",
      "name": "bugs",
      "plural": true,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "Bug_bug"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Project",
  "abstractKey": null
};
(node as any).hash = '15ca62a31e59fc40b1b30ee849ffc3a9';
export default node;
