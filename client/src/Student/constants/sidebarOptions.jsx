import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
//import RecordVoiceOverOutlinedIcon from '@mui/icons-material/RecordVoiceOverOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import { RiTodoLine } from 'react-icons/ri';

const sidebarOptions = [
    {
        caption: "Courses",
        route: "/student-courses",
        icon: <RiTodoLine style={{color: "#7e96cf"}}/>
    },
    {
        caption: "Semesters",
        route: "/student-semesters",
        icon: <SchoolOutlinedIcon />
    },
    {
        caption: "Students",
        route: "/student",
        icon: <PeopleAltOutlinedIcon />
    },
    {
        caption: "User Management",
        route: "/student-management",
        icon: <SettingsSuggestOutlinedIcon />
    },
];

export const SIDEBAR_OPTIONS = sidebarOptions;