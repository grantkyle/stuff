import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.scss";

const PhoneCodeSearch = () => {
  const [phoneCode, setPhoneCode] = useState([]);

  // fetch API with useEffect
  const phoneCodeSearchEndpoint =
    "https://gist.githubusercontent.com/DmytroLisitsyn/1c31186e5b66f1d6c52da6b5c70b12ad/raw/01b1af9b267471818f4f8367852bd4a2814cbae6/country_dial_info.json";

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(phoneCodeSearchEndpoint);
      setPhoneCode(result.data);
    };
    fetchData();
  }, []);

  console.log(`phoneCode`, phoneCode)

  const callingCode = phoneCode.map((item) => {
      console.log(`item`, item.name)
      return (
        <li>
          {item.flag} {item.name} {item.dial_code}
        </li>
      );
  })

  return <div>hi!</div>;
};

export default PhoneCodeSearch;
