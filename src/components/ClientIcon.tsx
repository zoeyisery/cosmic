"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faList } from "@fortawesome/free-solid-svg-icons";

const ClientIcon = () => (
  <div className="flex space-x-2">
    <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[16px]" />
    <FontAwesomeIcon icon={faList} className="text-[16px]" />
  </div>
);

export default ClientIcon;
