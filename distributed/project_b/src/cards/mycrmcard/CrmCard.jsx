import React from "react";
import {
  Text,
  hubspot,
} from "@hubspot/ui-extensions";

hubspot.extend(({ context, runServerlessFunction, actions }) => (
  <Extension context={context} />
));

const Extension = ({  }) => {
  return (
    <>
      <Text>
        Just an extension
      </Text>
    </>
  );
};
