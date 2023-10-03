import Logo from './logo'

export default function Footer() {
  return (
    <footer className='dark:bg-gray-900'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Bottom area */}
        <ul className="flex mb-4  justify-center  md:justify-end">

          <li>
            <a href="https://www.facebook.com/bluetickconsultants/"
              className='w-8 h-8 flex justify-center items-center text-gray-600 hover:text-gray-900 bg-gray-200 hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out' title="Facebook" target="_blank" rel="noopener"><i className="fa fa-facebook social-icons" aria-hidden="true"></i></a>
          </li>
          <li>

            <a href="https://www.instagram.com/bluetickconsultants/" className='ml-2 w-8 h-8 flex justify-center items-center text-gray-600 hover:text-gray-900 bg-gray-200 hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out' title="Instagram" target="_blank" rel="noopener"><i className="fa fa-instagram social-icons" aria-hidden="true"></i></a>
          </li>
          <li>

            <a href="https://twitter.com/BluetickConsult" className='ml-2 w-8 h-8 flex justify-center items-center text-gray-600 hover:text-gray-900 bg-gray-200 hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out' title="Twitter" target="_blank" rel="noopener"><i className="fa fa-twitter social-icons" aria-hidden="true"></i></a>
          </li>
          <li>

            <a href="https://www.linkedin.com/company/bluetick-consultants" className='ml-2 w-8 h-8 flex justify-center items-center text-gray-600 hover:text-gray-900 bg-gray-200 hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out' title="Linkedin" target="_blank" rel="noopener"><i className="fa fa-linkedin social-icons" aria-hidden="true"></i></a>
          </li>
          <li>

            <a href="https://www.quora.com/profile/Bluetick-Consultants" className='ml-2 w-8 h-8 flex justify-center items-center text-gray-600 hover:text-gray-900 bg-gray-200 hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out' title="Quora" target="_blank" rel="noopener"><i className="fa fa-quora social-icons" aria-hidden="true"></i></a>
          </li>

        </ul>

        <div className="md:flex md:items-center items-center md:justify-between py-4 md:py-8  border-t-2 border-transparent md:border-gray-200">
          <ul className="text-sm flex mb-4 md:order-1 md:ml-4 md:mb-0 justify-center">
            <li className="ml-2">
              <a href="https://www.bluetickconsultants.com/contact-us.html" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 transition duration-150 ease-in-out">Contact</a>
            </li>
            <li className="ml-2">
              <a href="https://www.bluetickconsultants.com/about-us.html" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 transition duration-150 ease-in-out">About us</a>
            </li>
            <li className="ml-2">
              <a href="/terms" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 transition duration-150 ease-in-out">Terms of Services</a>
            </li>
            <li className="ml-2">
              <a href="#0" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 transition duration-150 ease-in-out">Privacy Policy</a>
            </li>
          </ul>




          {/* Copyrights note */}
          <div className="text-sm text-gray-600 dark:text-gray-300 text-center md:text-left"> 2023 &copy; All rights reserved by Bluetick Consultants LLP</div>

        </div>

      </div>
    </footer>
  )
}
