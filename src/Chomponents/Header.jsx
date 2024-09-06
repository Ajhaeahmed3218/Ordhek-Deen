import bannerImg from "../../public/ordekDeen.png"
import bgTop from "../../public/bg-top.svg"
import { IoMdSearch } from "react-icons/io";
const Header = () => {
    return (
        <div >
            <div style={{ backgroundImage: `url(${bannerImg})` }} className={`bg-[url(${bannerImg})] bg-cover bg-center lg:h-[100vh] h-[100vh] ] w-full ]  flex-col`}>
                <div className="flex justify-center">
                    <div className="text-center lg:mt-[210px] mt-[100px]">
                        <h1 className="text-[#522b79] lg:text-[72px] text-[30px] font-semibold leading-[130%]">বাংলাদেশী ইসলামিক </h1>
                        <h1 className="text-[#e92f83] lg:text-[72px] text-[30px] font-semibold leading-[130%] lg:mt-2  lg:mb-6 mb-3">ম্যাট্রিমনি</h1>
                        <p className="text-[#605568] font-semibold leading-[130%] lg:text-2xl text-[.75rem]">নিজ উপজেলায় দ্বীনদার পাত্রপাত্রী খোঁজা এখন সহজ</p>
                    </div>
                </div>
                <div className=" text-center flex flex-col justify-center items-center lg:mt-9 mt-4 px-3">
                    <img src={bgTop} alt="" className="w-[200px]" />
                    <p className="border-[1px] border-[#522b79] lg:text-xl text-[.75rem] rounded-2xl lg:w-[830px] text-[#605568] lg:px-[24px] px-[16px] lg:py-[35px] py-[20px]  bg-[rgba(255,255,255,0.4)] "> যে ব্যক্তি বিয়ে করলো সে তার অর্ধেক দ্বীন পূর্ণ করে ফেললো। বাকি অর্ধেকের জন্য সে আল্লাহকে ভয় করুক। - <span className="text-[#522b79]"><br /> (বায়হাকী, শু’আবুল ঈমান –৫৪৮৬)</span></p>
                </div>


                <div className="flex items-center justify-center  lg:mt-28 mt-8 lg:p-0 p-3">
                    <form className="flex lg:flex-row flex-col flex-wrap gap-4 bg-[#fff] dark:bg-gray-800 p-[50px] rounded-2xl shadow-lg w-full max-w-6xl">
                        {/* First Select: আমি খুঁজছি */}
                        <div className="flex-1">
                            <label htmlFor="search" className="block mb-2 lg:text-[1.25rem] text-[16px] font-medium text-[#522b79] dark:text-white ">
                                আমি খুঁজছি
                            </label>
                            <select
                                id="search"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option value="">বেছে নিন</option>
                                <option value="all">সকল</option>
                                <option value="groom">পাত্রের বায়োডাটা</option>
                                <option value="bride">পাত্রীর বায়োডাটা</option>
                            </select>
                        </div>

                        {/* Second Select: বৈবাহিক অবস্থা */}
                        <div className="flex-1">
                            <label htmlFor="marital-status" className="block mb-2 lg:text-[1.25rem] text-[16px] font-medium text-[#522b79] dark:text-white ">
                                বৈবাহিক অবস্থা
                            </label>
                            <select
                                id="marital-status"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option value="">বেছে নিন</option>
                                <option value="single">অবিবাহিত</option>
                                <option value="married">বিবাহিত</option>
                                <option value="divorced">ডিভোর্সড</option>
                                <option value="widowed">বিধবা</option>
                                <option value="widower">বিপত্নীক</option>
                            </select>
                        </div>

                        {/* Third Input: স্থায়ী ঠিকানা */}
                        <div className="flex-1">
                            <label htmlFor="permanent-address" className="block mb-2 lg:text-[1.25rem] text-[16px] font-medium text-[#522b79] dark:text-white ">
                                স্থায়ী ঠিকানা
                            </label>
                            <input
                                type="text"
                                id="permanent-address"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="স্থায়ী ঠিকানা..."
                            />
                        </div>

                        {/* Search Button */}
                        <div className="flex-1 flex items-end ">
                            <button
                                type="submit"
                                className="bg-custom-gradient text-white font-medium rounded-lg text-sm px-12 py-2.5 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 flex justify-center items-center gap-2"
                            >
                               <IoMdSearch/> খুঁজুন
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Header;