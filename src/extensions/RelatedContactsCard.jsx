import React, { useEffect, useState } from "react";
import {
  Text,
  hubspot,
} from "@hubspot/ui-extensions";

hubspot.extend(({ runServerlessFunction }) => (
  <Extension runServerlessFunction={runServerlessFunction}/>
));

const Extension = ({runServerlessFunction}) => {
  const [contacts, setContacts] = useState([]);
  useEffect(async () => {
    const { response } = await runServerlessFunction({
      name: "findRelatedContacts"
    });
    setContacts(response);
  }, [runServerlessFunction, setContacts]);

  return (
    <>
      <Text>
        {JSON.stringify(contacts)}
      </Text>
    </>
  );
};
