import React from "react";
import Icon from "@mdi/react";
import {
  mdiAccountOutline,
  mdiBriefcaseVariantOutline,
  mdiFormatListChecks,
  mdiLogout,
  mdiSchoolOutline,
  mdiTrashCanOutline,
} from "@mdi/js";

export default function ProfileBoxLinks({ handleClick, component }) {
  return (
    <>
      <div className="profileBoxLinks">
        <div className="profileBoxInner">
          <button
            onClick={handleClick}
            data-name="personal-information"
            className={component === "personal-information" ? "active" : ""}
          >
            <Icon path={mdiAccountOutline} />
            personal information
          </button>
          <button
            onClick={handleClick}
            data-name="employment-details"
            className={component === "employment-details" ? "active" : ""}
          >
            <Icon path={mdiBriefcaseVariantOutline} />
            employment details
          </button>
          <button
            onClick={handleClick}
            data-name="educational-details"
            className={component === "educational-details" ? "active" : ""}
          >
            <Icon path={mdiSchoolOutline} />
            educational details
          </button>
          <button
            onClick={handleClick}
            data-name="my-applications"
            className={component === "my-applications" ? "active" : ""}
          >
            <Icon path={mdiFormatListChecks} />
            my applications
          </button>
          <button
            onClick={handleClick}
            data-name="delete-my-account"
            className={component === "delete-my-account" ? "active" : ""}
          >
            <Icon path={mdiTrashCanOutline} />
            delete my account
          </button>
          <button onClick={handleClick} data-name="logout">
            <Icon path={mdiLogout} />
            logout
          </button>
        </div>
      </div>
    </>
  );
}
