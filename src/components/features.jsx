import React , {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import Watermark from "./watermarking";
import axios from 'axios';

import { toast } from 'react-toastify';
import Decryption from "./decryption";
const About = () => {
  const history = useHistory();
  const [cover, setCover] = useState({ data: '' })
  const [watermark, setWatermark] = useState({ data: '' })
  const [status, setStatus] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    let formData = new FormData()
    formData.append('cover', cover.data)
    formData.append('watermark', watermark.data)
    // const response = await fetch('http://localhost:5000/image', {
    //   method: 'POST',
    //   body: formData,
    // })
    // if (response) setStatus(response.statusText)
    console.log(cover.data)
    console.log(watermark.data)
  }

  const handlecoverChange = (e) => {
    const img = {
      data: e.target.files[0],
    }
    setCover(img)
  }
  const handlewatermarkChange = (e) => {
    const img = {
      data: e.target.files[0],
    }
    setWatermark(img)
  }
  const onClickHandler =(e)=>{
    const data = new FormData() 
    for(var x = 0; x<this.state.selectedFile.length; x++) {
      data.append('file', this.state.selectedFile[x])
    }
    axios.post("http://localhost:8000/upload", data)
      .then(res => { // then print response status
        toast.success('upload success')
      })
      .catch(err => { // then print response status
        toast.error('upload fail')
      })
  }
  return (
    <section>
      <section
        id="watermark"
        class="text-gray-600 body-font bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900"
      >
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <Watermark history={history} />
          <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div class="flex-grow">
                <h2 class="text-indigo-100 text-lg title-font font-medium mb-3">
                Why You Should Add a Watermark to Photos?
                </h2>
                <div class="text-fuchsia-200">
                <p class="leading-relaxed text-base">
                1. Protection of confidential information from theft or forgery.
                </p>
                <p class="leading-relaxed text-base">
                2. Identification of document authenticity and copyright
                </p>
                <p class="leading-relaxed text-base">
                3. Protection of personal files from the hands of fraudsters and those who want to use them without permission.
                </p>
                </div>
              </div>
            </div>
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <div class="flex-grow">
                <h1 class="text-indigo-100 text-lg title-font font-medium mb-3">
                Best Performance
                </h1>
                <p class="text-fuchsia-200 leading-relaxed text-base">
                Instant uploads and downloads of small and large images. Select photos on your computer and start watermarking them immediately. Uploads and download are instant even if you have a slow internet connection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="extract"
        class="text-gray-600 body-font bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900"
      >
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <Decryption history={history} />
          <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div class="flex-grow">
                <h1 class="text-indigo-100 text-lg title-font font-medium mb-3 text-3xl">
                Step by Step Instruction:
                </h1>
                <div class="text-fuchsia-200 text-5xl">
                <p class="leading-relaxed text-2xl ">
                Step 1- Enter watermarked image
                </p>
                <p class="leading-relaxed text-2xl ">
                Step 2-Enter unique key given with the watermarked image for extraction
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
