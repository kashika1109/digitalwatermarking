import React from 'react';
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

const Faq1 = () => {

  const faq = [
    {
      number: 1,
      question: "What is the purpose of watermarking?",
      answer: "Watermarks are used to protect images and visual files from being stolen and used or altered without the owner's permission"
    },
    {
      number: 2,
      question: "Does watermarking use encryption?",
      answer: "The main watermark is encrypted and then embedded into the main image. The main goal in encrypting the watermarks before embedding is increased safety"
    },
    {
      number: 3,
      question: "How can a digital watermark protect a document?",
      answer: "Digital watermarking enables corporations and brand owners to embed a unique digital ID into confidential documents and digital images. This digital information is imperceptible tohumans but can easily be detected by computers, networks and various digital devices"
    },
    {
      number: 4,
      question: "Where can digital watermarking techniques be used?",
      answer: "Digital watermarking can be used for content aithentication, copy control, transaction tracking,broadcast monitoring etc."
    },
    
  ]

  return (
    <div id="faq" className="w-full py-4 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700">

      {/* :TITLE & IMAGE */}
      <div className="mb-8 mx-auto  max-w-4xl flex flex-col items-center">
        {/* <img src="https://fancytailwind.com/static/faq1-8ef2a6c2addbed9f838eea20b9ad21b6.png" alt="Frequently Asked Questions" className="w-full h-full" /> */}
        <h2 className="text-center text-2xl sm:text-4xl text-indigo-900 tracking-widest">Frequently Asked Questions</h2>
      </div>

      {/* :FAQ */}
      <dl className="mx-auto mb-10 p-2 max-w-4xl flex flex-col items-center">
        {/* ::Accordion Panel */}
        {
          faq.map(faq => (
            <Disclosure key={faq.number} >
              {({ open }) => (
                <>
                  {/* Question */}
                  <dt className={`group w-full border-b-2 border-indigo-900 text-violet-900 hover:bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 hover:text-fuchsia-200 ${open}`}>
                    <Disclosure.Button className="py-5 px-3 w-full flex justify-between items-center">
                      <span className="text-lg md:text-xl text-left font-semibold">{faq.question}</span>
                      <ChevronDownIcon className={`${open && 'transform rotate-180 text-fuchsia-200'} flex-shrink-0 ml-2 w-7 h-7 text-indigo-600 group-hover:text-white`} aria-hidden="true" />
                    </Disclosure.Button>
                  </dt>
                  {/* Answer */}
                  <dd className="w-full text-base text-violet-900">
                    <Disclosure.Panel className="px-4 pt-4 pb-2">
                      {faq.answer}
                    </Disclosure.Panel>
                  </dd>
                </>
              )}
            </Disclosure>
          ))
        }
      </dl>
      
    </div>
  )
}

export default Faq1