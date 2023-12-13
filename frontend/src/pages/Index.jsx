import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const Index = () => {
  const [type, setType] = useState("");
  const [show, setShow] = useState();
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });
  return (
    <div className="bg-[#18191b] min-h-screen w-full">
      <div
        className={`w-screen ${
          show ? "visible opacity-100" : "invisible opacity-30"
        } transition-all duration-500 h-screen fixed bg-[#252627ad] flex justify-center items-center`}>
        <div className="w-[360px] bg-[#323335] m-auto px-6 py-4 rounded-md relative">
          <div
            onClick={() => setShow(false)}
            className="absolute right-4 top-4 text-xl cursor-pointer text-white">
            <IoMdClose />
          </div>
          <h2 className="text-white text-center pb-4 text-xl">
            Log in or sign up in seconds
          </h2>
          {type === "login" && (
            <form>
              <div className="flex flex-col gap-3 mb-3 text-white">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                  value={state.email}
                  className="px-3 py-2 rounded-md border outline-none border-[#5c5c5e] focus:border-purple-500 bg-transparent"
                />
              </div>
              <div className="flex flex-col gap-3 mb-3 text-white">
                <label htmlFor="email">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  value={state.password}
                  className="px-3 py-2 rounded-md border outline-none border-[#5c5c5e] focus:border-purple-500 bg-transparent"
                />
              </div>
              <div>
                <button className="px-3 p-2 bg-purple-500 w-full rounded-md text-white outline-none hover:bg-purple-600">
                  Log in
                </button>
              </div>
              <div className="flex py-4 justify-between items-center px-3">
                <div className="w-[45%] h-[1px] bg-[#434449]"></div>
                <div className="w-[6%] text-center flex pb-1 px-1 text-white ">
                  or
                </div>
                <div className="w-[45%] h-[1px] bg-[#434449]"></div>
              </div>
              <div className="pb-4">
                <button className="px-3 py-2 flex justify-center items-center gap-2 rounded-md bg-orange-700 hover:bg-orange-800 text-white w-full outline-none">
                  <span>
                    <AiOutlineGoogle />
                  </span>
                  <span>Continue with Google</span>
                </button>
              </div>
              <div>
                <button className="px-3 py-2 flex justify-center items-center gap-2 rounded-md bg-blue-700 hover:bg-blue-800 text-white w-full outline-none">
                  <span>
                    <FaFacebookF />
                  </span>
                  <span>Continue with Facebook</span>
                </button>
              </div>
            </form>
          )}
          {type === "signup" && (
            <form>
              <div className="flex flex-col gap-3 mb-3 text-white">
                <label htmlFor="name">Name</label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="name"
                  value={state.name}
                  className="px-3 py-2 rounded-md border outline-none border-[#5c5c5e] focus:border-purple-500 bg-transparent"
                />
              </div>
              <div className="flex flex-col gap-3 mb-3 text-white">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                  value={state.email}
                  className="px-3 py-2 rounded-md border outline-none border-[#5c5c5e] focus:border-purple-500 bg-transparent"
                />
              </div>
              <div className="flex flex-col gap-3 mb-3 text-white">
                <label htmlFor="email">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  value={state.password}
                  className="px-3 py-2 rounded-md border outline-none border-[#5c5c5e] focus:border-purple-500 bg-transparent"
                />
              </div>
              <div>
                <button className="px-3 p-2 bg-purple-500 w-full rounded-md text-white outline-none hover:bg-purple-600">
                  Log in
                </button>
              </div>
              <div className="flex py-4 justify-between items-center px-3">
                <div className="w-[45%] h-[1px] bg-[#434449]"></div>
                <div className="w-[6%] text-center flex pb-1 px-1 text-white ">
                  or
                </div>
                <div className="w-[45%] h-[1px] bg-[#434449]"></div>
              </div>
              <div className="pb-4">
                <button className="px-3 py-2 flex justify-center items-center gap-2 rounded-md bg-orange-700 hover:bg-orange-800 text-white w-full outline-none">
                  <span>
                    <AiOutlineGoogle />
                  </span>
                  <span>Continue with Google</span>
                </button>
              </div>
              <div>
                <button className="px-3 py-2 flex justify-center items-center gap-2 rounded-md bg-blue-700 hover:bg-blue-800 text-white w-full outline-none">
                  <span>
                    <FaFacebookF />
                  </span>
                  <span>Continue with Facebook</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
      <div className="bg-[#252627] shadow-md">
        <div className="w-[93%] m-auto py-3">
          <div className="flex justify-between items-center">
            <div className="w-[80px] h-[48px]">
              <img
                className="w-full h-full"
                src="https://static.canva.com/web/images/12487a1e0770d29351bd4ce4f87ec8fe.svg"
                alt="canva-logo"
              />
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => {
                  setType("login");
                  setShow(true);
                }}
                className="w-[80px] py-2 bg-blue-500 text-center text-white transition-all hover:bg-blue-600 rounded-[5px] font-medium">
                Log in
              </button>
              <button
                onClick={() => {
                  setType("signup");
                  setShow(true);
                }}
                className="w-[80px] py-2 bg-purple-500 text-center text-white transition-all hover:bg-purple-600 rounded-[5px] font-medium">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full justify-center items-center p-4">
        <div className="py-[168px] flex justify-center items-center flex-col gap-6">
          <h2 className="text-5xl text-[#c7c5c5] font-bold">
            What will you design today?
          </h2>
          <span className="text-[#aca9a9] text-2xl font-medium">
            Canva make it easy to create and share professional designs.
          </span>
          <button className="w-[200px] py-2 bg-purple-500 text-center text-white transition-all hover:bg-purple-600 rounded-[5px] font-medium">
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
