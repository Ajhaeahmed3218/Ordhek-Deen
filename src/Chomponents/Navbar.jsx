import { Link, NavLink } from "react-router-dom";
import logo from "../../public/OrdhekDeenlogo.svg"
const Navbar = () => {


    const navLink = <>
        <li><Link to={"/"} className="lg:text-[20px]  leading-[1.45]">হোম</Link></li>

        <li><Link to={"/"} className="lg:text-[20px]  leading-[1.45]">আমাদের সম্পর্কে</Link></li>

        <li><Link to={"/"} className="lg:text-[20px]  leading-[1.45]">জিজ্ঞাসা</Link></li>

        <li><Link to={"/"} className="lg:text-[20px]  leading-[1.45]">নির্দেশনা</Link></li>

        <li><Link to={"/"} className="lg:text-[20px]  leading-[1.45]">যোগাযোগ</Link></li>
    </>

    return (
        <div className="z-10 absolute w-full bg-transparent text-[#434343] ">
            <div className="navbar container mx-auto py-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navLink}
                        </ul>
                    </div>
                    <Link to={'/'} className=" text-xl lg:w-48 w-32"><img src="OrdhekDeenlogo.svg" alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-3">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn text-[#bc32ed] text-[16px] px-[20px] py-[8px] border-[#bc32ed] border-2 ">লগইন</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;