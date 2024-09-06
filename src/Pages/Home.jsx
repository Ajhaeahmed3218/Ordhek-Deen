import { useRef, useState, useEffect } from "react";
import Header from "../Chomponents/Header";
import { FaPlus, FaYoutube } from "react-icons/fa6";
import { useSpring, animated } from "react-spring";

const Home = () => {
    const [inView, setInView] = useState(false);
    const sectionRef = useRef(null);

    function Number({ n }) {
        const { number } = useSpring({
            from: { number: 0 },
            number: inView ? n : 0,
            delay: 200,
            config: { mass: 1, tension: 20, friction: 10 },
        });
        return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true); // Start the animation when section is in view
                }
            },
            { threshold: 0.2 } // Trigger when 20% of the section is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div>
            <Header />

            {/* বায়োডাটা তৈরি  */}
            <section className="text-center lg:mt-[12rem] lg:mb-[12rem] mt-[30rem] mb-[5rem]">
                <h2 className="text-[#522b79] lg:text-[3rem] text-[30px] lg:w-full w-5/6 lg:mx-0 mx-auto font-bold">
                    <span className="text-[#e92f83]">অর্ধেকদ্বীনে</span> সম্পূর্ণ বিনামূল্যে বায়োডাটা তৈরি করা যায়
                </h2>

                <div className="flex lg:flex-row flex-col justify-center lg:mt-7 mt-3 lg:gap-5 gap-2 p-3">
                    <button className="lg:text-[1.5rem] rounded-full bg-custom-gradient text-white lg:py-[24px] py-[16px] lg:px-[100px] flex items-center justify-center gap-4">
                        <FaPlus />
                        বায়োডাটা তৈরি করুন
                    </button>

                    <a href="https://www.youtube.com/watch?v=1NFkBACLdJU" target="_blank" rel="noopener noreferrer">
                        <button className="lg:text-[1.5rem] rounded-full text-[#522b79] border-[1px] border-[#522b79] bg-[#fff] lg:py-[24px] py-[6px] px-[60px] flex items-center justify-center gap-4">
                            <FaYoutube className="text-red-600 text-3xl" /> যেভাবে বায়োডাটা তৈরি করবেন
                        </button>
                    </a>
                </div>
            </section>

            {/* সেবা গ্রহীতার পরিসংখ্যান */}
            <section className="lg:my-[12rem]" ref={sectionRef}>
                <h2 className="text-[#522b79] text-center lg:text-[3rem] text-[30px] font-bold">
                    <span className="text-[#e92f83]">অর্ধেকদ্বীনে</span> সেবা গ্রহীতার পরিসংখ্যান
                </h2>

                <div className="flex lg:flex-row flex-col items-center justify-center mt-20 gap-6 p-6">
                    <div className="flex flex-col bg-box w-[300px] justify-center items-center p-[50px] rounded-3xl gap-4 hover:shadow-lg"
                        style={{ transition: "box-shadow .35s ease 0s" }}>
                        <img className="w-[130px]" src="couple.svg" alt="couple" />
                        <h4>সর্বমোট পাত্র-পাত্রীর বায়োডাটা</h4>
                        <h3 className="text-[3rem] text-[#000] leading-[1.2]">
                            <span><Number n={6696} /></span>
                        </h3>
                    </div>

                    <div className="flex flex-col bg-box w-[300px] justify-center items-center p-[50px] rounded-3xl gap-4 hover:shadow-lg"
                        style={{ transition: "box-shadow .35s ease 0s" }}>
                        <img className="w-[75px]" src="male.svg" alt="couple" />
                        <h4>সর্বমোট পাত্রের বায়োডাটা</h4>
                        <h3 className="text-[3rem] text-[#000] leading-[1.2]">
                            <span><Number n={2796} /></span>
                        </h3>
                    </div>

                    <div className="flex flex-col bg-box w-[300px] justify-center items-center p-[50px] rounded-3xl gap-4 hover:shadow-lg"
                        style={{ transition: "box-shadow .35s ease 0s" }}>
                        <img className="w-[75px]" src="female.svg" alt="couple" />
                        <h4>সর্বমোট পাত্রীর বায়োডাটা</h4>
                        <h3 className="text-[3rem] text-[#000] leading-[1.2]">
                            <span><Number n={3891} /></span>
                        </h3>
                    </div>

                    <div className="flex flex-col bg-box w-[300px] justify-center items-center p-[50px] rounded-3xl gap-4 hover:shadow-lg"
                        style={{ transition: "box-shadow .35s ease 0s" }}>
                        <img className="w-[100px]" src="married.svg" alt="couple" />
                        <h4>সর্বমোট সফল বিবাহ</h4>
                        <h3 className="text-[3rem] text-[#000] leading-[1.2]">
                            <span><Number n={1960} /></span>
                        </h3>
                    </div>
                </div>
            </section>
           
            {/* যেভাবে কাজ করে */}
            <section className=" lg:my-[12rem] my-[4rem]">
                <h2 className="text-[#522b79] text-center lg:text-[3rem] text-[30px] font-bold lg:p-0 p-3"><span className="text-[#e92f83]">অর্ধেকদ্বীনে</span> যেভাবে কাজ করে</h2>

                <div className="flex lg:flex-row flex-col justify-center items-center lg:mt-20 gap-6 p-6">
                    <div className="flex flex-col bg-box w-[300px] justify-center items-center px-[20px] py-[55px]  rounded-3xl gap-4 hover:shadow-lg text-center"
                        style={{ transition: 'box-shadow .35s ease 0s' }}>
                        <img className="w-[55px]" src="create-biodata.svg" alt="couple" />
                        <h4 className="text-[#000] text-[1.5rem] font-bold">বায়োডাটা তৈরি করুন</h4>
                        <p className="text-[1rem] text-[#434343] ">
                            খুব সহজেই বিনামূল্যে অর্ধেকদ্বীনে বায়োডাটা তৈরি করতে পারবেন।
                        </p>
                    </div>

                    <div className="flex flex-col bg-box w-[300px] justify-center items-center px-[20px] py-[55px]  rounded-3xl gap-4 hover:shadow-lg text-center"
                        style={{ transition: 'box-shadow .35s ease 0s' }}>
                        <img className="w-[55px]" src="search.svg" alt="couple" />
                        <h4 className="text-[#000] text-[1.5rem] font-bold">বায়োডাটা খুঁজুন</h4>
                        <p className="text-[1rem] text-[#434343] ">
                            বয়স, উপজেলা, পেশা, শিক্ষাগত যোগ্যতা সহ অনেক ফিল্টার ব্যবহার করে সহজেই বায়োডাটা খুঁজতে পারবেন।
                        </p>
                    </div>


                    <div className="flex flex-col bg-box w-[300px] justify-center items-center px-[20px] py-[55px]   rounded-3xl gap-4 hover:shadow-lg text-center"
                        style={{ transition: 'box-shadow .35s ease 0s' }}>
                        <img className="w-[55px]" src="contact.svg" alt="couple" />
                        <h4 className="text-[#000] text-[1.5rem] font-bold">যোগাযোগ করুন</h4>
                        <p className="text-[1rem] text-[#434343] ">
                            আপনার বায়োডাটা কেউ পছন্দ করলে অথবা আপনি কারো বায়োডাটা পছন্দ করলে সরাসরি অভিভাবকের সাথে যোগাযোগ করতে পারবেন।
                        </p>
                    </div>

                    <div className="flex flex-col bg-box w-[300px] justify-center items-center px-[20px] py-[55px]   rounded-3xl gap-4 hover:shadow-lg text-center"
                        style={{ transition: 'box-shadow .35s ease 0s' }}>
                        <img className="w-[55px]" src="success.svg" alt="couple" />
                        <h4 className="text-[#000] text-[1.5rem] font-bold">বিবাহ সম্পন্ন করুন</h4>
                        <p className="text-[1rem] text-[#434343] ">
                            বায়োডাটা ও কথাবার্তা পছন্দ হলে নিজ দায়িত্বে ভালভাবে খোঁজ নিয়ে সুন্নতি বিবাহ সম্পন্ন করুন।
                        </p>
                    </div>

                </div>

            </section>
        </div>
    );
};

export default Home;
