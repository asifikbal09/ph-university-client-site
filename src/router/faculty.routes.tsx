import FacultyDashboard from "../pages/faculty/FacultyDashboard";
import OfferedCoursed from "../pages/faculty/OfferedCoursed";

export const facultyPath = [
    {
        name:"Dashboard",
        path:"dashboard",
        element:<FacultyDashboard/>
    },
    {
        name:"Offered Course",
        path:"offered-course",
        element:<OfferedCoursed/>
    }
]