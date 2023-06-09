import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import RecordVoiceOverOutlinedIcon from '@mui/icons-material/RecordVoiceOverOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';

const sidebarOptions = [
    {
        caption: "Departments",
        route: "/teacher-departments",
        icon: <SchoolOutlinedIcon />
    },
    {
        caption: "Courses",
        route: "/teacher-courses",
        icon: <RecordVoiceOverOutlinedIcon style={{color: "#7e96cf"}}/>
    },
    {
        caption: "Semester",
        route: "/teacher-semester",
        icon: <RecordVoiceOverOutlinedIcon style={{color: "#7e96cf"}}/>
    },
    {
        caption: "Subjects",
        route: "/teacher-subjects",
        icon: <RecordVoiceOverOutlinedIcon style={{color: "#7e96cf"}}/>
    },
    {
        caption: "Marks",
        route: "/teacher-marks",
        icon: <RecordVoiceOverOutlinedIcon style={{color: "#7e96cf"}}/>
    },
    {
        caption: "Students",
        route: "/teacher-students",
        icon: <PeopleAltOutlinedIcon />
    },
    {
        caption: "Teacher Management",
        route: "/teacher-management",
        icon: <SettingsSuggestOutlinedIcon />
    },
];

export const SIDEBAR_OPTIONS = sidebarOptions;