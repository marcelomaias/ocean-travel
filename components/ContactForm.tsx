'use client'

import { normalizeResponse } from "@/utils";
import { useState } from "react";

const ContactForm = () => {

  const [status, setStatus] = useState<any>({
    isSuccess: false,
    message: "",
    validationError: {}
  })

  const [isSending, setIsSending] = useState<boolean>(false)
  const [isSubmited, setIsSubmited] = useState<boolean>(false)

  const handleSubmit = (e: any) => {
    e.preventDefault()

    setIsSending(true)

    const form = e.target
    const { action, method } = form
    const body = new FormData(form);

    body.append('_wpcf7_unit_tag', 'wpcf7-f4bd0cc1')

    fetch(action, { method, body })
      .then((response) => response.json())
      .then((data) => {
        return normalizeResponse(data)
      })
      .then((response) => {
        console.log(response)
        setStatus({
          isSuccess: response.isSuccess,
          message: response.message,
          validationError: response.validationError
        })
        if (response.isSuccess) {
          form.reset();
        }
        setIsSending(false)
        setIsSubmited(true)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <form action="https://area41.net/ocean/wp-json/contact-form-7/v1/contact-forms/36/feedback" method="post" onSubmit={handleSubmit} autoComplete="off" noValidate>
      <div>
        <label htmlFor="the-name" className="block">Name:</label>
        <input id="the-name" type="text" name="the-name" className="bg-gray-200 py-1 px-3 rounded-md w-full" />
        <div className="h-[30px] text-xs text-red-500 pt-[4px]">{status?.validationError['the-name']}</div>
      </div>
      <div>
        <label htmlFor="the-email" className="block">Email</label>
        <input id="the-email" type="email" name="the-email" className="bg-gray-200 py-1 px-3 rounded-md w-full" />
        <div className="h-[30px] text-xs text-red-500 pt-[4px]">{status?.validationError['the-email']}</div>
      </div>
      <div>
        <label htmlFor="the-subject" className="block">Subject</label>
        <input id="the-subject" type="text" name="the-subject" className="bg-gray-200 py-1 px-3 rounded-md w-full" />
        <div className="h-[30px] text-xs text-red-500 pt-[4px]">{status?.validationError['the-subject']}</div>
      </div>
      <div>
        <label htmlFor="the-message" className="block">Message</label>
        <textarea id="the-message" name="the-message" className="bg-gray-200 py-1 px-3 rounded-md w-full"></textarea>
      </div>

      <button type="submit" className="px-6 py-3 bg-black text-white block w-max uppercase text-sm tracking-widest mt-6 rounded-md disabled:opacity-50" disabled={isSending}>{isSending ? 'Sending...' : 'Submit'}</button>
      {isSubmited && (
        <div className={`${status.isSuccess ? 'bg-green-700' : 'bg-red-500'} text-white py-1 px-3 mt-6 rounded-md w-max`}>
          {status.message}
        </div>
      )}
    </form>
  );
}

export default ContactForm;