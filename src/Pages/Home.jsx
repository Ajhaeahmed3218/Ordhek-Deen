import Header from "../Chomponents/Header";
import { FaPlus, FaYoutube } from "react-icons/fa6";

const Home = () => {
    return (
        <div>
            <Header />

            {/*  */}
            <section className="text-center lg:my-[12rem] ">
                <h2 className="text-[#522b79] text-[3rem] font-bold"><span className="text-[#e92f83]">অর্ধেকদ্বীনে</span> সম্পূর্ণ বিনামূল্যে বায়োডাটা তৈরি করা যায়</h2>

                <div className="flex justify-center mt-7 gap-5">
                    <button className="text-[1.5rem] rounded-full bg-custom-gradient text-white py-[24px] px-[100px] flex items-center justify-center gap-4"><FaPlus />বায়োডাটা তৈরি করুন</button>

                    <a href="https://www.youtube.com/watch?v=1NFkBACLdJU" target="_blank" rel="noopener noreferrer">
                        <button className="text-[1.5rem] rounded-full  text-[#522b79] border-[1px] border-[#522b79] bg-[#fff] py-[24px] px-[60px] flex items-center justify-center gap-4"><FaYoutube className="text-red-600 text-3xl" /> যেভাবে বায়োডাটা তৈরি করবেন</button>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Home;