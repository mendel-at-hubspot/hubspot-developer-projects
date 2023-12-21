import React, { useEffect, useState } from "react";
import {
  Text,
  hubspot,
} from "@hubspot/ui-extensions";

hubspot.extend(({ runServerlessFunction }) => (
  <Extension runServerlessFunction={runServerlessFunction}/>
));

const Extension = ({runServerlessFunction}) => {
  const [competitors, setCompetitors] = useState([]);
  useEffect(async () => {
    const { response } = await runServerlessFunction({
      name: "findCompetitors"
    });
    setCompetitors(response);
  }, [runServerlessFunction, setCompetitors]);

  return (
    <>
      <Text>
        {JSON.stringify(competitors)}
      </Text>
    </>
  );
};
