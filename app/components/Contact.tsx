import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { User, Mail } from 'lucide-react';


export default function Contact() {
  return (
    <section id="contact" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Form section  */}
        <div className="bg-white p-8 rounded-md shadow-lg">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
      <p className="text-gray-700 mb-6">
        We'd love to hear from you. Please fill out this form and we will get in touch with you shortly.
      </p>
      <form className="space-y-6">
        {/* Name Field */}
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Your Name"
            className="pl-10 py-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
        {/* Email Field */}
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="email"
            placeholder="Your Email"
            className="pl-10 py-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
        {/* Message Field */}
        <div>
          <textarea
            placeholder="Your Message"
            className="py-3 px-4 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none resize-none"
            rows={4}
          ></textarea>
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="bg-[#bada34] hover:bg-[#a5c22f] text-white py-3 w-full rounded-lg font-medium shadow-lg transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Location</h3>
            <p className="text-gray-600 mb-4">
              Head Office: 16, Cause Way Road, Saka Alao Street, Ijora 7up, Lagos State.
            </p>
            <p className="text-gray-600 mb-4">
              Branch: EG01-13, Nigeria Army Shopping Complex, Bolade Oshodi, Bolade Bus Stop, Lagos.
            </p>
            <p className="text-gray-600 mb-4">
              Tel: 08089149601, 08123047312
            </p>
            {/* Placeholder for Google Map */}
            <div className="w-full h-64 bg-gray-300 rounded-lg">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.376110190765!2d3.353950075240568!3d6.473952993517849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b38f04ee0d5%3A0x576c2f0f7d681747!2sSaka%20Alao!5e0!3m2!1sen!2sng!4v1736853464156!5m2!1sen!2sng" className='w-full h-full'  style={{border:0}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
