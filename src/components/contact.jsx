import React from 'react';
import Image from "next/image";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append("access_key", "9519cc6d-8aaf-4b1c-96cf-8b93a5cf51da");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      toast.success('Message sent !', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error('Message not sent !', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <div className='container mx-auto px-4 pt-16 pb-24 mb-10 mt-30 border-b-2 border-gray-200 max-w-[1400px]'>
      <h2 className='text-4xl font-bold text-center mb-8 text-gray-700'>Contact Me</h2>
      <div className='flex flex-row justify-between'>
        <div>
          <Image src="./contactImg.svg" alt="Not Found" width={500} height={700} className="w-[580px] h-[600px]" />
        </div>
        <div className='w-1/2 mt-36'>
          <form onSubmit={onSubmit} className='flex flex-col'>
            <div className='flex justify-between'>
              <input type="text" name="name" placeholder='First Name' className=' h-10 px-5 w-full border-2' required />
              <input type="text" name="name" placeholder='Last Name' className='px-5 h-10 ml-4 w-full border-2' required />
            </div>
            <div className='mt-10'>
              <input type="email" name="email" placeholder='Email' className='h-10 w-full px-5 border-2' required />
            </div>
            <div className='mt-10 '>
              <textarea name="message" placeholder='Your Message' className='w-full h-28 px-5 py-3 border-2' required></textarea>
            </div>

            <button
              type="submit"
              className="bg-gray-700 text-white flex items-center w-[200px] my-10 mx-auto rounded-2xl px-12 py-5 transition duration-300 ease-in-out transform hover:bg-gray-600 hover:scale-105"
            >
              Submit Form
            </button>
            <ToastContainer />
          </form>
        </div>

      </div>
      <h2 className='w-full text-center text-lg mt-12 text-gray-700'>
        © {new Date().getFullYear()} Saheb Singh Chandok. All Rights Reserved.
      </h2>


    </div>
  );
}