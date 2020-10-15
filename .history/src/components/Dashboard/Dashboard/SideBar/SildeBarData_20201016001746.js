import { VscPreview } from "react-icons/vsc";
import { FaOpencart } from "react-icons/fa";
import {GrServicePlay} from "react-icons/gr"
import {FcSelfServiceKiosk} from "react-icons/fc";
import {MdAdd} from "react-icons/md";
import {IoIosPersonAdd} from "react-icons/io";

export const SildeBarData = [
    {
        title:'Order',
        path:'/order',
        icon: <FaOpencart></FaOpencart>,
        className:'nav-text'
    },
    {
        title:'Service List',
        path:'/serviceList',
        icon: <GrServicePlay></GrServicePlay>,
        className:'nav-text'
    },
    {
        title:'Review',
        path:'/review',
        icon: <VscPreview></VscPreview>,
        className:'nav-text'
    },
    {
        title:'Add Service',
        path:'/addService',
        icon: <MdAdd></MdAdd>,
        className:'nav-text'
    },
    {
        title:'Make Admin',
        path:'/makeAdmin',
        icon: <IoIosPersonAdd></IoIosPersonAdd>,
        className:'nav-text'
    }
]