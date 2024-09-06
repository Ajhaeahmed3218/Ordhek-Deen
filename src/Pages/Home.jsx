import Header from "../Chomponents/Header";
import { FaPlus, FaYoutube } from "react-icons/fa6";

const Home = () => {
    return (
        <div>
            <Header />

            {/* বায়োডাটা তৈরি  */}
            <section className="text-center lg:my-[12rem] ">
                <h2 className="text-[#522b79] text-[3rem] font-bold"><span className="text-[#e92f83]">অর্ধেকদ্বীনে</span> সম্পূর্ণ বিনামূল্যে বায়োডাটা তৈরি করা যায়</h2>

                <div className="flex justify-center mt-7 gap-5">
                    <button className="text-[1.5rem] rounded-full bg-custom-gradient text-white py-[24px] px-[100px] flex items-center justify-center gap-4"><FaPlus />বায়োডাটা তৈরি করুন</button>

                    <a href="https://www.youtube.com/watch?v=1NFkBACLdJU" target="_blank" rel="noopener noreferrer">
                        <button className="text-[1.5rem] rounded-full  text-[#522b79] border-[1px] border-[#522b79] bg-[#fff] py-[24px] px-[60px] flex items-center justify-center gap-4"><FaYoutube className="text-red-600 text-3xl" /> যেভাবে বায়োডাটা তৈরি করবেন</button>
                    </a>
                </div>
            </section>

            {/* সেবা গ্রহীতার পরিসংখ্যান */}
            <section className=" lg:my-[12rem]">
                <h2 className="text-[#522b79] text-center text-[3rem] font-bold"><span className="text-[#e92f83]">অর্ধেকদ্বীনে</span>  সেবা গ্রহীতার পরিসংখ্যান</h2>


                <div className="flex justify-center mt-20 gap-6">
                    <div className="flex flex-col bg-box w-[300px] justify-center items-center p-[50px] rounded-3xl gap-4 hover:shadow-lg"
                        style={{ transition: 'box-shadow .35s ease 0s' }}>
                        <img className="w-[130px]" src="couple.svg" alt="couple" />
                        <h4>সর্বমোট পাত্র-পাত্রীর বায়োডাটা</h4>
                        <h3 className="text-[3rem] text-[#000] leading-[1.2]">
                            <span>6,696</span>
                        </h3>
                    </div>

                    <div className="flex flex-col bg-box w-[300px] justify-center items-center p-[50px] rounded-3xl gap-4 hover:shadow-lg"
                        style={{ transition: 'box-shadow .35s ease 0s' }}>
                        <img className="w-[75px]" src="male.svg" alt="couple" />
                        <h4>সর্বমোট পাত্রের বায়োডাটা</h4>
                        <h3 className="text-[3rem] text-[#000] leading-[1.2]">
                            <span>2,796</span>
                        </h3>
                    </div>
                    <div className="flex flex-col bg-box w-[300px] justify-center items-center p-[50px] rounded-3xl gap-4 hover:shadow-lg"
                        style={{ transition: 'box-shadow .35s ease 0s' }}>
                        <img className="w-[75px]" src="female.svg" alt="couple" />
                        <h4>সর্বমোট পাত্রীর বায়োডাটা</h4>
                        <h3 className="text-[3rem] text-[#000] leading-[1.2]">
                            <span>3,891</span>
                        </h3>
                    </div>
                    <div className="flex flex-col bg-box w-[300px] justify-center items-center p-[50px] rounded-3xl gap-4 hover:shadow-lg"
                        style={{ transition: 'box-shadow .35s ease 0s' }}>
                        <img className="w-[100px]" src="married.svg" alt="couple" />
                        <h4>সর্বমোট সফল বিবাহ</h4>
                        <h3 className="text-[3rem] text-[#000] leading-[1.2]">
                            <span>1,960</span>
                        </h3>
                    </div>

                </div>

            </section>

            {/* সেবা গ্রহীতার পরিসংখ্যান
            <section className=" lg:my-[12rem]">
                <h2 className="text-[#522b79] text-center text-[3rem] font-bold"><span className="text-[#e92f83]">অর্ধেকদ্বীনে</span>   যেভাবে কাজ করে</h2>


                <div className="flex justify-center mt-20 gap-6">
                    <div className="flex flex-col bg-box w-[300px] justify-center items-center p-[50px] rounded-3xl gap-4 hover:shadow-lg"
                        style={{ transition: 'box-shadow .35s ease 0s' }}>
                        <img className="w-[130px]" src="couple.svg" alt="couple" />
                        <h4>সর্বমোট পাত্র-পাত্রীর বায়োডাটা</h4>
                        <h3 className="text-[3rem] text-[#000] leading-[1.2]">
                            <span>6,696</span>
                        </h3>
                    </div>

                    <div className="flex flex-col bg-box w-[300px] justify-center items-center p-[50px] rounded-3xl gap-4 hover:shadow-lg"
                        style={{ transition: 'box-shadow .35s ease 0s' }}>
                        <img className="w-[75px]" src="male.svg" alt="couple" />
                        <h4>সর্বমোট পাত্রের বায়োডাটা</h4>
                        <h3 className="text-[3rem] text-[#000] leading-[1.2]">
                            <span>2,796</span>
                        </h3>
                    </div>
                    <div className="flex flex-col bg-box w-[300px] justify-center items-center p-[50px] rounded-3xl gap-4 hover:shadow-lg"
                        style={{ transition: 'box-shadow .35s ease 0s' }}>
                        <img className="w-[75px]" src="female.svg" alt="couple" />
                        <h4>সর্বমোট পাত্রীর বায়োডাটা</h4>
                        <h3 className="text-[3rem] text-[#000] leading-[1.2]">
                            <span>3,891</span>
                        </h3>
                    </div>
                    <div className="flex flex-col bg-box w-[300px] justify-center items-center p-[50px] rounded-3xl gap-4 hover:shadow-lg"
                        style={{ transition: 'box-shadow .35s ease 0s' }}>
                        <img className="w-[100px]" src="married.svg" alt="couple" />
                        <h4>সর্বমোট সফল বিবাহ</h4>
                        <h3 className="text-[3rem] text-[#000] leading-[1.2]">
                            <span>1,960</span>
                        </h3>
                    </div>

                </div>

            </section> */}
        </div>
    );
};

export default Home;