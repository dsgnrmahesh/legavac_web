import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Affilations from "./Affilations/Index";
import MyApplication from "./application/MyApplication";
import Article from "./Articles/Article";
import Articles from "./Articles/Index";
import EducationslDetails from "./auth/EducationslDetails";
import EmploymentDetails from "./auth/EmploymentDetails";
import Login from "./auth/Login";
import PersonalInformation from "./auth/PersonalInformation";
import Register from "./auth/Register";
import WhatAreYouCurrentlyLookingFor from "./auth/WhatAreYouCurrentlyLookingFor";
import CareerAdviced from "./CareerAdviced/Index";
import PostJob from "./employer/PostJob";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
// import Companies from "./pages/Companies";
import FreeJobAlerts from "./pages/FreeJobAlerts";
import Home from "./pages/Home";
import Job from "./pages/Job";
import Jobs from "./pages/Jobs";
import Recruters from "./pages/Recruters";
import MyProfile from "./Profile/MyProfile";
import AboutCompany from "./StaticContent/AboutCompany";
import ServicePlan from "./StaticContent/ServicePlan";

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/jobs" component={Jobs} />
        <Route exact path="/job" component={Job} />
        <Route exact path="/create-free-job-alerts" component={FreeJobAlerts} />
        <Route exact path="/recruters" component={Recruters} />
        <Route exact path="/company/about-us" component={AboutCompany} />
        <Route exact path="/auth/sign-in" component={Login} />
        <Route exact path="/auth/register-for-free" component={Register} />
        <Route
          exact
          path="/auth/what-are-you-currently-looking-for"
          component={WhatAreYouCurrentlyLookingFor}
        />
        <Route
          exact
          path="/auth/:status/personal-information"
          component={PersonalInformation}
        />
        <Route
          exact
          path="/auth/:status/employment-details"
          component={EmploymentDetails}
        />
        <Route
          exact
          path="/auth/:status/education-details"
          component={EducationslDetails}
        />
        <Route exact path="/auth/applications" component={MyApplication} />
        <Route exact path="/auth/profile" component={MyProfile} />

        <Route exact path="/employer/post-job" component={PostJob} />

        <Route exact path="/service/plans" component={ServicePlan} />

        <Route exact path="/Articles" component={Articles} />
        <Route exact path="/Article/:id/:name" component={Article} />

        <Route exact path="/career-adviced" component={CareerAdviced} />

        <Route exact path="/Affilations" component={Affilations} />
      </Switch>
      <Footer />
    </Router>
  );
}
