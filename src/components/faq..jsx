import React from "react";
import { IoArrowForwardCircle } from "react-icons/io5";

const Faqs = [
  {
    title: "What does Harvesta do?",
    text: `This is the paragraph with some ipsum text. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit. Officiis
                    distinctio quo.`,
  },
  {
    title: "Can i get free deliveries?",
    text: `This is the paragraph with some ipsum text. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Officiis
                        distinctio quo.`,
  },
  {
    title: "Why the service charge?",
    text: `This is the paragraph with some ipsum text. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Officiis
                        distinctio quo.`,
  },
  {
    title: "Do you provide online support?",
    text: `This is the paragraph with some ipsum text. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Officiis
                        distinctio quo.`,
  },
  {
    title: "Do you accept POD?",
    text: `This is the paragraph with some ipsum text. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Officiis
                        distinctio quo.`,
  },
  {
    title: "How can i be a partner?",
    text: `This is the paragraph with some ipsum text. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Officiis
                        distinctio quo.`,
  },
];

const FAQ = () => {
  return (
    <div className="full mt-20">
      <div className="full bg-harvestaLightGreen flex flex-col items-center justify-center py-10 mt-7">
        <div className="bg-white md:w-1/2 w-[98%] mt-[-150px] shadow-3xl">
          <h1 className="uppercase text-center text-4xl font-black mt-10">
            FAQs
          </h1>
          <div className="flex flex-wrap p-4 my-10">
            {Faqs.map((faq, index) => (
              <div
                key={index}
                className="flex flex-row w-[100%] md:w-[50%] p-4"
              >
                <div className="mr-4 mt-1">
                  <IoArrowForwardCircle size={"25px"} color="green" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-md font-medium">{faq.title}</h3>
                  <p className="mt-2 text-sm">{faq.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row bg-transparent mt-[10rem]">
          <div className="flex flex-col text-white text-center w-[500px] justify-center px-10 mb-[10rem]">
            <h1 className="text-4xl font-bold mt-10 capitalize">
              Get The app now
            </h1>
            <p className="my-2 px-12 text-sm">
              Get fresh farm produce delivered in minutes from a variety of
              trusted vendors
            </p>
            <div className="flex gap-5 justify-center">
              <div className="w-[150px]">
                {" "}
                <img
                  src="https://images.pexels.com/photos/25811110/pexels-photo-25811110/free-photo-of-pato.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="w-full object-cover rounded-lg shadow-md  h-[80px]"
                />
              </div>
              <div className="w-[150px]">
                {" "}
                <img
                  src="https://images.pexels.com/photos/25811110/pexels-photo-25811110/free-photo-of-pato.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="w-full object-cover rounded-lg shadow-md  h-[80px]"
                />
              </div>
            </div>
          </div>
          <div className="flex">
            <img
              src="https://images.pexels.com/photos/25811110/pexels-photo-25811110/free-photo-of-pato.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
