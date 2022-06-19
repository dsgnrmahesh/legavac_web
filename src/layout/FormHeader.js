import React from "react";
import Icon from "@mdi/react";
import {
  mdiAccountOutline,
  mdiBriefcaseAccountOutline,
  mdiSchoolOutline,
} from "@mdi/js";

export default function FormHeader({ status, active, complete }) {
  return (
    <>
      <div className="formHeader">
        <ul className="formHeaderNav">
          <li
            className={`${active === "personal" ? "active" : ""} ${
              complete.personal && "complete"
            }`}
          >
            <label>
              <Icon path={mdiAccountOutline} />
              {active === "personal" ? (
                <span>
                  <span>step 1/3</span>
                  <span>personal information</span>
                </span>
              ) : (
                ""
              )}
            </label>
          </li>
          {status === "professional" ? (
            <li
              className={`${active === "employment" ? "active" : ""} ${
                complete.employment && "complete"
              }`}
            >
              <label>
                <Icon path={mdiBriefcaseAccountOutline} />
                {active === "employment" ? (
                  <span>
                    <span>step 2/3</span>
                    <span>employment details</span>
                  </span>
                ) : (
                  ""
                )}
              </label>
            </li>
          ) : (
            ""
          )}
          <li
            className={`${active === "education" ? "active" : ""} ${
              complete.education && "complete"
            }`}
          >
            <label>
              <Icon path={mdiSchoolOutline} />
              {active === "education" ? (
                <span>
                  <span>step 3/3</span>
                  <span>education details</span>
                </span>
              ) : (
                ""
              )}
            </label>
          </li>
        </ul>
      </div>
    </>
  );
}
