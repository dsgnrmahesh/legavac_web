import React from "react";
import CompanySearchFilterBlock from "./CompanySearchFilterBlock";

export default function CompanySearchFilters() {
  const searchLocations = [
    {
      name: "pune",
      count: 15,
    },
    {
      name: "kalyn",
      count: 11,
    },
    {
      name: "thane",
      count: 4,
    },
    {
      name: "andheri",
      count: 9,
    },
  ];
  const roles = [
    {
      name: "Recruitment /  Placement Consultant",
      count: 7,
    },
    {
      name: "Hiring Manager",
      count: 13,
    },
    {
      name: "other",
      count: 43,
    },
  ];
  const hiringFor = [
    {
      name: "HR /  Administration /  IR",
      count: 5,
    },
    {
      name: "IT Software - Application Programming /  Maintenance",
      count: 4,
    },
    {
      name: "ITES /  BPO /  KPO /  Customer Service /  Operations",
      count: 3,
    },
    {
      name: "IT Software - DBA /  Datawarehousing",
      count: 2,
    },
    {
      name: "IT Software - System Programming",
      count: 2,
    },
  ];
  const Levels = [
    {
      name: "Senior Management",
      count: 12,
    },
    {
      name: "Top Mangement",
      count: 9,
    },
  ];
  return (
    <>
      <div className="search-filters">
        <CompanySearchFilterBlock
          items={searchLocations}
          title="Recruiter's Location"
        />
        <CompanySearchFilterBlock items={roles} title="Recruiter's Role" />
        <CompanySearchFilterBlock
          items={hiringFor}
          title="Functions Hiring For"
        />
        <CompanySearchFilterBlock items={Levels} title="Levels Hiring For" />
      </div>
    </>
  );
}
