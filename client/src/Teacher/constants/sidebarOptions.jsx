import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import RecordVoiceOverOutlinedIcon from '@mui/icons-material/RecordVoiceOverOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import {RiTodoLine} from 'react-icons/ri';
import {CgOptions} from 'react-icons/cg';
import {IoIosPaper} from 'react-icons/io';
import {SiGooglesheets} from 'react-icons/si';
import {IoIosPeople} from 'react-icons/io';
import {RiUserSettingsFill} from 'react-icons/ri';
import {GiGraduateCap} from 'react-icons/gi';

const sidebarOptions = [
    {
        caption: "Departments",
        route: "/teacher-departments",
        icon: <GiGraduateCap />
    },
    {
        caption: "Courses",
        route: "/teacher-courses",
        icon: <RiTodoLine />
    },
    {
        caption: "Semester",
        route: "/teacher-semester",
        icon: <CgOptions />
    },
    {
        caption: "Subjects",
        route: "/teacher-subjects",
        icon: <IoIosPaper style={{color: "#7e96cf"}}/>
    },
    {
        caption: "Marks",
        route: "/teacher-marks",
        icon: <SiGooglesheets />
    },
    {
        caption: "Students",
        route: "/teacher-students",
        icon: <IoIosPeople />
    },
    {
        caption: "Teacher Management",
        route: "/teacher-management",
        icon: <RiUserSettingsFill />
    },
];

export const SIDEBAR_OPTIONS = sidebarOptions;