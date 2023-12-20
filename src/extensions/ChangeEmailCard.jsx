import React, { useCallback } from "react";
import {
  Button,
  hubspot,
} from "@hubspot/ui-extensions";

hubspot.extend(({ runServerlessFunction, actions }) => (
  <Extension
    alert={actions.addAlert}
    runServerlessFunction={runServerlessFunction}
    />
));

const Extension = ({alert, runServerlessFunction}) => {
  const onClick = useCallback(async () => {
    const _response = await runServerlessFunction({
      name: "changeEmail"
    });
    alert("Updated!");
  }, [alert, runServerlessFunction]);

  return (
    <>
      <Button type="submit" onClick={onClick}>
        Update email
      </Button>
    </>
  );
};
