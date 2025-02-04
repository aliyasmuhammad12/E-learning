import { motion } from "framer-motion";
import { GiGymBag } from "react-icons/gi";
import { GrYoga } from "react-icons/gr";
import { SlideLeft } from "../../utility/animation";

const WhyChooseData = [
  {
    id: 1,
    title: "One-on-one Teaching",
    desc: "All of our special education experts have a degree in special education.",
    icon: <GrYoga />,
    bgColor: "#0063ff",
    delay: 0.3,
  },
  {
    id: 2,
    title: "24/7 Tutor Availability",
    desc: "Our tutors are always available to respond as quick as possible for you",
    icon: <GrYoga />,
    bgColor: "#73BC00",
    delay: 0.4,
  },
  {
    id: 3,
    title: "Interactive Whiteboard",
    desc: "Our digital whiteboard equipped with audio and video chat fetures.",
    icon: <GiGymBag />,
    bgColor: "#FA6400",
    delay: 0.5,
  },
  {
    id: 4,
    title: "Affordable Prices",
    desc: "Choose an expert tutor based on your budget and per hour.",
    icon: <GiGymBag />,
    bgColor: "#FE6BAA",
    delay: 0.6,
  },
];
const WhyChooseUs = () => {
  return (
    <div className="bg-[#F9FAFC]">
      <div className="container py-24">
        {/* header section */}
        <div className="space-y-4 text-center max-w-[500px] mx-auto mb-5">
          <h1 className="uppercase font-semibold text-orange-600">
            Why Choose Us
          </h1>
          <p className="font-semibold text-3xl">
            Benefits of online tutoring services with us
          </p>
        </div>
        {/* card section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {WhyChooseData.map((item) => {
            return (
              <motion.div
              variants={SlideLeft(item.delay)}
              initial='hidden'
              whileInView='visible'
                className="space-y-4 p-6 rounded-xl shadow-[0_0_22px_rgba(0,0,0,0.15)]"
                key={item.id}
              >
                {/* icon sections   */}
                <div
                  style={{
                    backgroundColor: item.bgColor,
                  }}
                  className="w-10 h-10 rounded-lg flex justify-center items-center text-center"
                >
                  <div className="text-2xl">{item.icon}</div>
                </div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
