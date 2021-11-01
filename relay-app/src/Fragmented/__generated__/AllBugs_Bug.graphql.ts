/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import AllBugsQuery from "./AllBugsQuery.graphql";
import { FragmentRefs } from "relay-runtime";
export type Status = "CLOSED" | "IN_PROGRESS" | "OPEN" | "%future added value";
export type AllBugs_Bug = {
    readonly bugs: ReadonlyArray<{
        readonly id: string;
        readonly title: string;
        readonly description: string;
        readonly status: Status | null;
    } | null>;
    readonly " $refType": "AllBugs_Bug";
};
export type AllBugs_Bug$data = AllBugs_Bug;
export type AllBugs_Bug$key = {
    readonly " $data"?: AllBugs_Bug$data;
    readonly " $fragmentRefs": FragmentRefs<"AllBugs_Bug">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [],
      "operation": AllBugsQuery
    }
  },
  "name": "AllBugs_Bug",
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
  ],
  "type": "RootQuery",
  "abstractKey": null
};
(node as any).hash = 'e1e208a8cea96bd107384e3f93487f67';
export default node;
