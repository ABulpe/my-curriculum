import React from "react";
import Home from "../views/app/Home/Home"
import EducationsView from "../views/app/EducationsView/EducationsView";
import ExperienceView from "../views/app/ExperienceView/ExperienceView";
import SkillsView from "../views/app/SkillsView/SkillsView"

export const mainRoutes = [

    {
        path: "/",
        tag: "Home",
        component: <Home/>,
        name: "Home"
    },
    {
        path: "/Skills",
        tag: "Skills",
        component: <SkillsView/>,
        name: "Skills"
    },
    {
        path: "/Experience",
        tag: "Experience",
        component: <ExperienceView/>,
        name: "Experience"
    },
    {
        path: "/Educations",
        tag: "Education",
        component: <EducationsView/>,
        name: "Edicaton"
    }





]