import React from 'react'

import s from './Footer.module.scss'

type FooterType = {

}

export const Footer: React.FC<FooterType> = ({ }) => {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.boxLink}>
          <a href="#"><p>Find a retailer near you</p></a>
          <a href="#"><p>Or call 800 207 758</p></a>
          <a href="#" className={s.logo}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" viewBox="0 0 25 30" fill="none">
              <path d="M13.7938 2.61067C15.8087 0.0126657 18.6099 0 18.6099 0C18.6099 0 19.0266 2.44257 17.0249 4.79554C14.8876 7.30799 12.4582 6.89687 12.4582 6.89687C12.4582 6.89687 12.002 4.92092 13.7938 2.61067ZM12.7145 8.60788C13.751 8.60788 15.6749 7.21396 18.179 7.21396C22.4893 7.21396 24.185 10.2145 24.185 10.2145C24.185 10.2145 20.8686 11.8733 20.8686 15.8983C20.8686 20.4389 25 22.0038 25 22.0038C25 22.0038 22.112 29.9559 18.2111 29.9559C16.4194 29.9559 15.0264 28.7748 13.1387 28.7748C11.2148 28.7748 9.30575 30 8.06234 30C4.50021 30.0001 0 22.4566 0 16.3929C0 10.4271 3.80913 7.29755 7.38194 7.29755C9.70459 7.29755 11.507 8.60788 12.7145 8.60788Z" fill="white" />
            </svg>
          </a>
        </div>
        <ul className={s.ulList}>
          <li className={s.ulListItem}>Copyright © 2023 Apple Inc. </li>
          <li className={s.ulListItem}>All rights reserved.</li>
          <li className={s.ulListItem}><a href="#">Legal Notices</a></li>
          <li className={s.ulListItem}><a href="#">Site Map</a></li>
          <li className={s.ulListItem}><a href="#">Privacy Policy</a></li>
        </ul>
      </div>
    </footer>
  )
}
