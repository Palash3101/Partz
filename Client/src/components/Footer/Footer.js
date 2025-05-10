import React from 'react'
import styles from './footer.module.css'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'

function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <div className={styles.footerWrapper} data-theme="dark">
      <hr className='w-[98%] mx-auto border-gray-700'/>
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Company Name</h3>
            <p className="text-gray-300 mb-4">
              Creating innovative solutions since 2010. We pride ourselves on quality, service, and expertise.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">About</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Portfolio</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Blog</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Web Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">UI/UX Design</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Mobile Apps</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Digital Marketing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Consulting</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <MdLocationOn size={18} className="text-gray-400" />
                <span className="text-gray-300">123 Business Road, City, Country</span>
              </li>
              <li className="flex items-center space-x-2">
                <MdPhone size={18} className="text-gray-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <MdEmail size={18} className="text-gray-400" />
                <span className="text-gray-300">info@company.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer