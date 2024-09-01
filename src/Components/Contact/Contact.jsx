import Link from "next/link";
import React from "react";
import SliderImage from "../SliderImage/SliderImage";
import Image from "next/image";

const Contact = () => {
  return (
    <>
      <div className="w-[90%] h-full m-auto mt-[50px] pt-[50px] ">
        <div className="grid items-start justify-center grid-cols-1 gap-3 md:grid-cols-2">
          <div className="flex flex-col flex-wrap justify-center gap-3 ">
            <div className="flex flex-col gap-4">
              <h1 className="font-bold text-[25px] capitalize text-[--primary]">
                contact info
              </h1>
              <p className=" text-[18px] capitalize leading-[1.6]">
                Tortor dignissim convallis aenean et tortor at risus viverra
                adipiscing.
              </p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="flex flex-col items-start gap-8">
                <h1 className="text-[25px] font-bold capitalize text-[--primary]">
                  office
                </h1>
                <span className=" capitalize text-[18px]">
                  730 Glenstone Ave 65802, Springield, US
                </span>
                <p>+12322233344</p>
                <Link
                  className="text-[--primary] font-bold"
                  href="mailto:info@yourinfo.com"
                >
                  info@yourinfo.com
                </Link>
              </div>
              <div className="flex flex-col items-start gap-8">
                <h1 className="text-[25px] font-bold capitalize text-[--primary]">
                  management
                </h1>
                <span className=" capitalize text-[18px]">
                  730 Glenstone Ave 65802, Springield, US
                </span>
                <p>+12322233344</p>
                <Link
                  className="text-[--primary] font-bold "
                  href="mailto:info@yourinfo.com"
                >
                  info@yourinfo.com
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-5">
            <div className="flex flex-col items-start gap-3">
              <h1 className="text-[--primary] font-bold text-[30px] capitalize">
                any question ?
              </h1>
              <p className="text-[18px] capitalize">
                Use the form below to get in touch with us.
              </p>
            </div>

            <form className="flex flex-col w-full gap-5 md:w-auto" action="">
              <div className="flex flex-col gap-4 md:flex-row ">
                <input
                  type="text"
                  className="border-2 p-3  border-[--primary] focus:outline-none  focus:border focus:border-[--primary] focus:ring-0  rounded-lg "
                  placeholder="Your Full Name*"
                  name="fullName"
                  id="name"
                />
                <input
                  type="email"
                  className="border-2 p-3  border-[--primary] focus:outline-none focus:border focus:border-[--primary] focus:ring-0  rounded-lg "
                  placeholder="Write Your Email*"
                  name="email"
                  id="email"
                />
              </div>
              <input
                type="Number"
                className="border-2 p-3  border-[--primary] focus:outline-none  focus:border focus:border-[--primary] focus:ring-0  rounded-lg "
                placeholder="Phone Number*"
                name="Phone"
                id="Phone"
              />
              <input
                type="text"
                className="border-2  p-3 border-[--primary] focus:outline-none  focus:border-[--primary] focus:border focus:ring-0  rounded-lg "
                placeholder="write your subject here*"
                name="fName"
                id="name"
              />
              <textarea
                name="message"
                placeholder="write your message here*"
                className="border-2  p-3 border-[--primary]  focus:outline-none focus:border-[--primary] focus:border  focus:ring-0  rounded-lg "
                id="message"
                cols={6}
                rows={1}
              ></textarea>
              <input
                type="submit"
                value="submit"
                className="capitalize text-[25px] font-bold w-full md:w-fit bg-[--primary] text-white px-4 py-2 rounded-lg transition-all hover:bg-[#00bfa6c9]"
              />
            </form>
          </div>
        </div>
      </div>
      {/* second section  */}
      <div className="m-auto w-[90%] py-[50px]">
        <div className="grid items-center justify-center grid-cols-1 gap-2 md:grid-cols-2">
          <Image
            src={require("../../images/contact.svg")}
            alt="contact"
            className="w-[500px] max-w-full"
          />

          <div className="flex flex-col items-start justify-start gap-[20px]">
            <div>
              <h1 className="text-[25px] text-[--primary] font-bold capitalize">
                our stores
              </h1>
              <p className="capitalize">
                You can also directly buy the products from our stores.
              </p>
            </div>
            <div className="flex items-center gap-[10px]">
              <div className="flex flex-col gap-[15px] items-start">
                <h1 className="uppercase font-bold text-[25px]">usa</h1>
                <p>730 Glenstone Ave 65802, Springield, US</p>
                <span>+12366677788</span>
                <Link
                  href="mailto:info@yourinfo.com

"
                >
                  info@yourinfo.com
                </Link>
              </div>
              <div className="flex gap-[15px] flex-col items-start ">
                <h1 className="uppercase font-bold text-[25px]">usa</h1>
                <p>730 Glenstone Ave 65802, Springield, US</p>
                <span>+12366677788</span>
                <Link
                  href="mailto:info@yourinfo.com

"
                >
                  info@yourinfo.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section three */}
      <SliderImage />
    </>
  );
};

export default Contact;
