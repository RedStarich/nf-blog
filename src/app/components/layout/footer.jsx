import React from 'react';

const Footer = () => {
    return (
        

<footer class="bg-white dark:bg-gray-900">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
              <a class="flex items-center">
                  <img src="https://framerusercontent.com/images/CbSPyXMVIfZHAkc9RBEP7XhXEw.png" class="h-8 me-3" alt="Nfactorial Logo" />
                  <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Nfactorial Blog</span>
              </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="https://nfactorial.school" class="hover:underline">School</a>
                      </li>
                      <li>
                          <a href="http://incubator.nfactorial.school/" class="hover:underline">Incubator</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="https://www.instagram.com/nfactorial.school/" class="hover:underline ">Instagram</a>
                      </li>
                      <li>
                          <a href="https://t.me/nfactorialincubatorupdates" class="hover:underline">Telegram</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="https://docs.google.com/document/d/1q4gLy-OhHozcMw3nYw6Pk4bIkSmqCBfmSy6boIbtHb8/edit" class="hover:underline">Privacy Policy</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://nfactorial.school/" class="hover:underline">Nfactorial™</a>. All Rights Reserved.
          </span>
          <div class="flex mt-4 sm:justify-center sm:mt-0">
          </div>
      </div>
    </div>
</footer>

    );
};

export default Footer;