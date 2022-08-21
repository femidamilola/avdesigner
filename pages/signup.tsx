import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/signup.module.scss";

const SignUp: NextPage = () => {
  let [formFilled, setFilled] = React.useState(false);
  return (
    <>
    <Image src="/images/bg.webp" alt="background" layout="fill" />
    <div className={styles.wrapper}>
      <Head>
        <title>AV Design - Sign Up</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.divided}>
        <div className={styles.left}>
          <div className={styles.logo}><span className={styles.orange}>AV</span> DESIGNER</div>
        </div>
        <span className={styles.divider}></span>
        <form className={styles.right}>
          <h1>Hello</h1>
          <small>We are excited to have you onboard. Enter your details below to get started.</small>
          <div className={styles.formInputs}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <input type="text" name="firstName" id="firstName" placeholder="First Name" />
                <svg className={styles.inputIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M8.25 7.5C8.25 5.42893 9.92893 3.75 12 3.75C14.0711 3.75 15.75 5.42893 15.75 7.5C15.75 9.57107 14.0711 11.25 12 11.25C9.92893 11.25 8.25 9.57107 8.25 7.5ZM12 4.25C10.2051 4.25 8.75 5.70508 8.75 7.5C8.75 9.29492 10.2051 10.75 12 10.75C13.7949 10.75 15.25 9.29492 15.25 7.5C15.25 5.70508 13.7949 4.25 12 4.25Z" fill="#3C4870" stroke="#3C4870"/>
                  <path d="M15.4279 14.2865L15.4263 14.287L14.5608 14.5697C14.5608 14.5697 14.5608 14.5697 14.5608 14.5697C12.8968 15.113 11.1032 15.113 9.43922 14.5697C9.4392 14.5697 9.43918 14.5697 9.43916 14.5697L8.57371 14.287L8.5723 14.2866C8.49837 14.2626 8.4203 14.25 8.34087 14.25H8C6.48121 14.25 5.25 15.4813 5.25 17V18.1883C5.25 18.4516 5.44082 18.6758 5.7004 18.7182C9.87251 19.3994 14.1275 19.3994 18.2996 18.7182C18.5592 18.6758 18.75 18.4516 18.75 18.1883V17C18.75 15.4813 17.5187 14.25 16 14.25H15.6591C15.5796 14.25 15.5017 14.2627 15.4279 14.2865ZM9.59435 14.0944L9.59442 14.0944C11.1576 14.6047 12.8424 14.6047 14.4056 14.0944L14.4056 14.0944L15.2709 13.8118C15.271 13.8118 15.271 13.8117 15.271 13.8117C15.2711 13.8117 15.2711 13.8117 15.2711 13.8117C15.3965 13.7708 15.5274 13.75 15.6591 13.75H16C17.795 13.75 19.25 15.205 19.25 17V18.1883C19.25 18.6964 18.8817 19.1297 18.3801 19.2116C14.1547 19.9015 9.8453 19.9015 5.61984 19.2116C5.11826 19.1297 4.75 18.6964 4.75 18.1883V17C4.75 15.205 6.20507 13.75 8 13.75H8.34087C8.4726 13.75 8.60361 13.7709 8.72903 13.8118L9.59435 14.0944Z" fill="#3C4870" stroke="#3C4870"/>
                </svg>
              </div>
              <div className={styles.formGroup}>
                <input type="text" name="lastName" id="lastName" placeholder="Last Name" />
                <svg className={styles.inputIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M8.25 7.5C8.25 5.42893 9.92893 3.75 12 3.75C14.0711 3.75 15.75 5.42893 15.75 7.5C15.75 9.57107 14.0711 11.25 12 11.25C9.92893 11.25 8.25 9.57107 8.25 7.5ZM12 4.25C10.2051 4.25 8.75 5.70508 8.75 7.5C8.75 9.29492 10.2051 10.75 12 10.75C13.7949 10.75 15.25 9.29492 15.25 7.5C15.25 5.70508 13.7949 4.25 12 4.25Z" fill="#3C4870" stroke="#3C4870"/>
                  <path d="M15.4279 14.2865L15.4263 14.287L14.5608 14.5697C14.5608 14.5697 14.5608 14.5697 14.5608 14.5697C12.8968 15.113 11.1032 15.113 9.43922 14.5697C9.4392 14.5697 9.43918 14.5697 9.43916 14.5697L8.57371 14.287L8.5723 14.2866C8.49837 14.2626 8.4203 14.25 8.34087 14.25H8C6.48121 14.25 5.25 15.4813 5.25 17V18.1883C5.25 18.4516 5.44082 18.6758 5.7004 18.7182C9.87251 19.3994 14.1275 19.3994 18.2996 18.7182C18.5592 18.6758 18.75 18.4516 18.75 18.1883V17C18.75 15.4813 17.5187 14.25 16 14.25H15.6591C15.5796 14.25 15.5017 14.2627 15.4279 14.2865ZM9.59435 14.0944L9.59442 14.0944C11.1576 14.6047 12.8424 14.6047 14.4056 14.0944L14.4056 14.0944L15.2709 13.8118C15.271 13.8118 15.271 13.8117 15.271 13.8117C15.2711 13.8117 15.2711 13.8117 15.2711 13.8117C15.3965 13.7708 15.5274 13.75 15.6591 13.75H16C17.795 13.75 19.25 15.205 19.25 17V18.1883C19.25 18.6964 18.8817 19.1297 18.3801 19.2116C14.1547 19.9015 9.8453 19.9015 5.61984 19.2116C5.11826 19.1297 4.75 18.6964 4.75 18.1883V17C4.75 15.205 6.20507 13.75 8 13.75H8.34087C8.4726 13.75 8.60361 13.7709 8.72903 13.8118L9.59435 14.0944Z" fill="#3C4870" stroke="#3C4870"/>
                </svg>
              </div>
            </div>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <input type="text" name="email" id="email" placeholder="Email" />
                <svg className={styles.inputIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M3.5 6.5L11.3926 12.5355C11.7511 12.8097 12.2489 12.8097 12.6075 12.5355L20.5 6.5M4 18H20C20.5523 18 21 17.5523 21 17V7C21 6.44772 20.5523 6 20 6H4C3.44772 6 3 6.44772 3 7V17C3 17.5523 3.44772 18 4 18Z" stroke="#3C4870" strokeWidth="1.5"/>
                </svg>
              </div>
              <div className={styles.formGroup}>
                <input type="text" name="phone" id="phone" placeholder="Phone" />
                <svg className={styles.inputIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.7503 10.5001L18.7438 10.7429L18.7503 11.0001L18.7442 11.2433L18.7503 11.5001L18.7444 11.745L18.7503 12.0001L18.5879 19.1031C18.5494 20.7884 17.2676 22.184 15.5917 22.3655C13.2043 22.624 10.7959 22.624 8.40844 22.3655C6.73253 22.184 5.45076 20.7884 5.41224 19.1031L5.24985 12.0001L5.25572 11.7433L5.24987 11.5001L5.25603 11.2443L5.24982 11.0001L5.25633 10.744L5.24976 10.5001L5.41377 4.40214C5.41606 4.31706 5.42204 4.23286 5.43156 4.14971L5.43529 4.11455L5.43825 4.08621C5.51886 3.26211 5.97554 2.54335 6.64106 2.11202C6.69072 2.079 6.74153 2.04755 6.79345 2.01775C6.84423 1.9877 6.89606 1.9592 6.94888 1.93231C7.27548 1.75995 7.63997 1.64823 8.02797 1.61251C10.6705 1.36927 13.3297 1.36927 15.9721 1.61252C16.3595 1.64817 16.7235 1.75959 17.0497 1.93149C17.1025 1.95834 17.1543 1.9868 17.2051 2.01681C17.2587 2.0475 17.3111 2.07995 17.3622 2.11406C18.0242 2.54443 18.4789 3.25946 18.5612 4.07941L18.569 4.15371C18.5783 4.23557 18.5841 4.31843 18.5863 4.40214L18.7503 10.5001ZM17.0743 4.32076L17.2313 11.1874L17.1041 15.9177C17.0755 16.981 16.2564 17.8551 15.1971 17.9526C13.0702 18.1484 10.9299 18.1484 8.80299 17.9526C7.74372 17.8551 6.92461 16.981 6.89601 15.9177L6.76881 11.188L6.9258 4.32076C6.92614 4.30598 6.92675 4.29127 6.92764 4.27663C6.98712 3.87435 7.22025 3.52711 7.5508 3.31624C7.67602 3.25096 7.81496 3.20767 7.96276 3.19167C10.6465 2.90104 13.3537 2.90104 16.0374 3.19167C16.1851 3.20767 16.324 3.25093 16.4492 3.31616C16.7799 3.52708 17.0131 3.87449 17.0725 4.27696C17.0734 4.2915 17.074 4.3061 17.0743 4.32076ZM12.0001 21.7001C12.8285 21.7001 13.5001 21.0285 13.5001 20.2001C13.5001 19.3716 12.8285 18.7001 12.0001 18.7001C11.1717 18.7001 10.5001 19.3716 10.5001 20.2001C10.5001 21.0285 11.1717 21.7001 12.0001 21.7001Z" fill="#3C4870"/>
                </svg>
              </div>
            </div>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <input type="text" name="country" id="country" placeholder="Country" />
                <svg className={styles.inputIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18.9548 2.04505C19.2476 2.33794 19.2476 2.81282 18.9548 3.10571L18.4043 3.65616C21.6933 7.48724 21.5233 13.2651 17.8941 16.8943C16.1811 18.6073 13.9895 19.5496 11.7498 19.7213V21.25H13.4998C13.914 21.25 14.2498 21.5858 14.2498 22C14.2498 22.4142 13.914 22.75 13.4998 22.75H8.49981C8.0856 22.75 7.74981 22.4142 7.74981 22C7.74981 21.5858 8.0856 21.25 8.49981 21.25H10.2498V19.7213C8.24354 19.5674 6.27575 18.7951 4.65597 17.4045L4.10552 17.955C3.81263 18.2478 3.33775 18.2478 3.04486 17.955C2.75197 17.6621 2.75197 17.1872 3.04486 16.8943L3.75197 16.1872C4.2474 15.6917 5.01727 15.7171 5.49958 16.1493C7.06155 17.5491 9.02903 18.2493 10.9968 18.25H10.9998H11.003C13.1133 18.2491 15.2234 17.4437 16.8334 15.8336C19.9463 12.7207 20.0516 7.73853 17.1491 4.49977C16.7169 4.01746 16.6915 3.24759 17.187 2.75216L17.8941 2.04505C18.187 1.75216 18.6619 1.75216 18.9548 2.04505Z" fill="#3C4870"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M4.25 10C4.25 6.27208 7.27208 3.25 11 3.25C14.7279 3.25 17.75 6.27208 17.75 10C17.75 13.7279 14.7279 16.75 11 16.75C7.27208 16.75 4.25 13.7279 4.25 10ZM11 4.75C8.1005 4.75 5.75 7.1005 5.75 10C5.75 10.3348 5.78135 10.6623 5.84126 10.9798C6.25258 10.5312 6.84345 10.25 7.5 10.25C8.74264 10.25 9.75 11.2574 9.75 12.5C9.75 13.4223 9.19501 14.2151 8.40076 14.5624C9.16712 15 10.0544 15.25 11 15.25C13.5434 15.25 15.6643 13.4414 16.147 11.0402C15.4784 12.0694 14.3187 12.75 13 12.75C10.9289 12.75 9.25 11.0711 9.25 9C9.25 6.92893 10.9289 5.25 13 5.25C13.0865 5.25 13.1723 5.25293 13.2573 5.25869C12.5735 4.93256 11.8081 4.75 11 4.75ZM10.75 9C10.75 7.75736 11.7574 6.75 13 6.75C14.2426 6.75 15.25 7.75736 15.25 9C15.25 10.2426 14.2426 11.25 13 11.25C11.7574 11.25 10.75 10.2426 10.75 9ZM7.5 11.75C7.08579 11.75 6.75 12.0858 6.75 12.5C6.75 12.9142 7.08579 13.25 7.5 13.25C7.91421 13.25 8.25 12.9142 8.25 12.5C8.25 12.0858 7.91421 11.75 7.5 11.75Z" fill="#3C4870"/>
                </svg>
              </div>
              <div className={styles.formGroup}>
                <input type="text" name="state" id="state" placeholder="State" />
                <svg className={styles.inputIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M8.25 9C8.25 6.92893 9.92893 5.25 12 5.25C14.0711 5.25 15.75 6.92893 15.75 9C15.75 11.0711 14.0711 12.75 12 12.75C9.92893 12.75 8.25 11.0711 8.25 9ZM12 6.75C10.7574 6.75 9.75 7.75736 9.75 9C9.75 10.2426 10.7574 11.25 12 11.25C13.2426 11.25 14.25 10.2426 14.25 9C14.25 7.75736 13.2426 6.75 12 6.75Z" fill="#3C4870"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M5.45642 8.12724C5.73018 4.80603 8.50556 2.25 11.838 2.25H12.162C15.4945 2.25 18.2698 4.80603 18.5436 8.12724C18.6903 9.90751 18.1404 11.6753 17.0097 13.0581L13.4149 17.4545C12.6836 18.3488 11.3164 18.3488 10.5851 17.4545L6.99033 13.0581C5.85959 11.6752 5.30968 9.90751 5.45642 8.12724ZM11.838 3.75C9.28622 3.75 7.16098 5.70726 6.95135 8.25046C6.83653 9.64343 7.26681 11.0266 8.15155 12.1086L11.7463 16.505C11.8774 16.6653 12.1226 16.6653 12.2537 16.505L15.8485 12.1086C16.7332 11.0266 17.1635 9.64343 17.0487 8.25046C16.839 5.70726 14.7138 3.75 12.162 3.75H11.838Z" fill="#3C4870"/>
                  <path d="M7.67082 16.3354C7.85606 15.9649 7.70589 15.5144 7.33541 15.3292C6.96493 15.1439 6.51442 15.2941 6.32918 15.6646L4.32918 19.6646C4.21293 19.8971 4.22536 20.1732 4.36201 20.3943C4.49867 20.6154 4.74007 20.75 5 20.75H19C19.2599 20.75 19.5013 20.6154 19.638 20.3943C19.7746 20.1732 19.7871 19.8971 19.6708 19.6646L17.6708 15.6646C17.4856 15.2941 17.0351 15.1439 16.6646 15.3292C16.2941 15.5144 16.1439 15.9649 16.3292 16.3354L17.7865 19.25H6.21353L7.67082 16.3354Z" fill="#3C4870"/>
                </svg>
              </div>
            </div>
            <div className={styles.formGroup}>
              <input type="text" name="organization" id="organization" placeholder="Organization" />
              <svg className={styles.inputIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M7.25009 6.63098V5.4612C7.25009 4.59495 7.88383 3.85906 8.74049 3.73056L9.96041 3.54757C11.3126 3.34474 12.6876 3.34474 14.0398 3.54757L15.2597 3.73056C16.1164 3.85906 16.7501 4.59495 16.7501 5.4612V6.63098L18.4641 6.76933C19.7765 6.87527 20.8471 7.86341 21.0575 9.16313C21.5227 12.0357 21.5227 14.9643 21.0575 17.8369C20.8471 19.1366 19.7765 20.1247 18.4641 20.2307L16.5922 20.3818C13.5358 20.6285 10.4644 20.6285 7.40796 20.3818L5.53604 20.2307C4.22366 20.1247 3.15312 19.1366 2.94264 17.8369C2.47745 14.9643 2.47745 12.0357 2.94264 9.16313C3.15312 7.86341 4.22366 6.87527 5.53605 6.76933L7.25009 6.63098ZM10.1829 5.03098C11.3876 4.85027 12.6126 4.85027 13.8173 5.03098L15.0372 5.21396C15.1596 5.23232 15.2501 5.33745 15.2501 5.4612V6.5258C13.0852 6.40233 10.915 6.40233 8.75009 6.5258V5.4612C8.75009 5.33745 8.84062 5.23232 8.963 5.21396L10.1829 5.03098ZM7.52865 8.11337C10.5048 7.87314 13.4954 7.87314 16.4715 8.11337L18.3434 8.26447C18.9676 8.31485 19.4767 8.78479 19.5768 9.40292C19.6392 9.78785 19.6927 10.1738 19.7373 10.5606C14.8597 12.9624 9.14047 12.9624 4.26287 10.5606C4.30752 10.1738 4.36101 9.78785 4.42335 9.40292C4.52345 8.78479 5.03258 8.31485 5.65673 8.26447L7.52865 8.11337ZM4.12898 12.1567C9.12838 14.4304 14.8718 14.4304 19.8712 12.1567C19.9665 13.9728 19.8684 15.7966 19.5768 17.5971C19.4767 18.2152 18.9676 18.6852 18.3434 18.7355L16.4715 18.8866C13.4954 19.1269 10.5048 19.1269 7.52865 18.8866L5.65673 18.7355C5.03258 18.6852 4.52345 18.2152 4.42335 17.5971C4.13178 15.7966 4.03365 13.9728 4.12898 12.1567Z" fill="#3C4870"/>
              </svg>
            </div>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <input type="password" name="password" id="password" placeholder="Password" />
                <svg className={styles.inputIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M10.5 16C10.5 15.1716 11.1716 14.5 12 14.5C12.8284 14.5 13.5 15.1716 13.5 16C13.5 16.8284 12.8284 17.5 12 17.5C11.1716 17.5 10.5 16.8284 10.5 16Z" fill="#3C4870"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M7.62147 10.5971L7.30603 7.75816C7.26559 7.39418 7.26559 7.02684 7.30603 6.66286L7.3288 6.45796C7.57028 4.28457 9.27889 2.56492 11.4507 2.30941C11.8155 2.26649 12.1841 2.26649 12.5489 2.30941C14.7207 2.56492 16.4293 4.28458 16.6708 6.45797L16.6935 6.66286C16.734 7.02684 16.734 7.39418 16.6935 7.75815L16.3781 10.5971L17.0647 10.6519C18.1474 10.7384 19.0315 11.5523 19.2071 12.6242C19.5731 14.8598 19.5731 17.1401 19.2071 19.3758C19.0315 20.4477 18.1474 21.2616 17.0647 21.348L15.5686 21.4675C13.1932 21.6571 10.8065 21.6571 8.4311 21.4675L6.93497 21.348C5.85224 21.2616 4.96814 20.4477 4.79262 19.3758C4.42655 17.1401 4.42655 14.8598 4.79262 12.6242C4.96814 11.5523 5.85224 10.7384 6.93497 10.6519L7.62147 10.5971ZM11.6259 3.79914C11.8743 3.76992 12.1253 3.76992 12.3736 3.79914C13.8523 3.97309 15.0155 5.1439 15.18 6.62361L15.2027 6.82851C15.2309 7.08239 15.2309 7.33862 15.2027 7.59251L14.8816 10.483C12.9624 10.3594 11.0372 10.3594 9.11802 10.483L8.79686 7.59251C8.76865 7.33862 8.76865 7.08239 8.79686 6.82851L8.81962 6.62361C8.98404 5.1439 10.1473 3.97309 11.6259 3.79914ZM15.4492 12.0277C13.1533 11.8445 10.8464 11.8445 8.55047 12.0277L7.05434 12.1472C6.65941 12.1787 6.33693 12.4756 6.27291 12.8666C5.93312 14.9417 5.93312 17.0583 6.27291 19.1334C6.33693 19.5244 6.65941 19.8213 7.05434 19.8528L8.55047 19.9722C10.8464 20.1555 13.1533 20.1555 15.4492 19.9722L16.9453 19.8528C17.3403 19.8213 17.6627 19.5244 17.7268 19.1334C18.0666 17.0583 18.0666 14.9417 17.7268 12.8666C17.6627 12.4756 17.3403 12.1787 16.9453 12.1472L15.4492 12.0277Z" fill="#3C4870"/>
                </svg>
                <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "right"}}>
                  <svg className={styles.trailingIcon} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M18.5303 1.70037C18.8232 1.37494 18.8232 0.847291 18.5303 0.521857C18.2374 0.196424 17.7626 0.196424 17.4697 0.521857L1.46967 18.2997C1.17678 18.6251 1.17678 19.1527 1.46967 19.4781C1.76256 19.8036 2.23744 19.8036 2.53033 19.4781L5.37723 16.3149C6.74353 17.0296 8.3172 17.5 10 17.5C12.684 17.5 15.0903 16.3032 16.8206 14.8278C17.6874 14.0886 18.4032 13.264 18.9089 12.4543C19.4006 11.667 19.75 10.803 19.75 10C19.75 9.197 19.4006 8.333 18.9089 7.54572C18.4032 6.73605 17.6874 5.91142 16.8206 5.17226C16.5585 4.94872 16.2808 4.73158 15.989 4.52403L18.5303 1.70037ZM14.8995 5.73459L13.1287 7.70218C13.5213 8.36089 13.75 9.15078 13.75 10C13.75 12.3012 12.0711 14.1667 10 14.1667C9.2357 14.1667 8.5248 13.9126 7.93196 13.4763L6.51524 15.0504C7.58077 15.5328 8.7621 15.8333 10 15.8333C12.2865 15.8333 14.3802 14.8079 15.9073 13.5056C16.6692 12.8559 17.2714 12.1527 17.6766 11.504C18.0957 10.833 18.25 10.3081 18.25 10C18.25 9.69189 18.0957 9.167 17.6766 8.496C17.2714 7.84734 16.6692 7.14413 15.9073 6.49441C15.5941 6.22735 15.2571 5.97191 14.8995 5.73459ZM9.0299 12.2563C9.3237 12.4126 9.6526 12.5 10 12.5C11.2426 12.5 12.25 11.3807 12.25 10C12.25 9.614 12.1713 9.24856 12.0307 8.92211L9.0299 12.2563Z" fill="#949DB2"/>
                    <path d="M10 2.5C11.0323 2.5 12.0236 2.67704 12.9511 2.9789C13.1296 3.03698 13.1827 3.28513 13.0513 3.43122L12.2267 4.34739C12.1648 4.41612 12.0752 4.44364 11.99 4.42186C11.3506 4.25841 10.6839 4.16667 10 4.16667C7.71345 4.16667 5.61978 5.19213 4.09267 6.49441C3.33078 7.14413 2.72857 7.84733 2.32343 8.496C1.90431 9.167 1.75 9.69189 1.75 10C1.75 10.3081 1.90431 10.833 2.32343 11.504C2.67725 12.0706 3.18138 12.6786 3.81091 13.2563C3.92677 13.3627 3.93781 13.5572 3.83156 13.6753L3.12265 14.463C3.03234 14.5633 2.88823 14.5721 2.79037 14.481C2.09739 13.8352 1.51902 13.1394 1.0911 12.4543C0.59937 11.667 0.25 10.803 0.25 10C0.25 9.197 0.59937 8.333 1.0911 7.54572C1.59681 6.73604 2.31262 5.91142 3.17941 5.17226C4.90965 3.69676 7.31598 2.5 10 2.5Z" fill="#949DB2"/>
                    <path d="M10 5.83333C10.1185 5.83333 10.2357 5.83943 10.3513 5.85138C10.5482 5.8717 10.6194 6.13323 10.4796 6.28855L9.2674 7.63551C8.6141 7.88533 8.0968 8.46011 7.87196 9.186L6.6597 10.5329C6.51991 10.6882 6.28453 10.6091 6.26624 10.3903C6.25549 10.2619 6.25 10.1317 6.25 10C6.25 7.69881 7.92893 5.83333 10 5.83333Z" fill="#949DB2"/>
                  </svg>
                </div>
              </div>
              <div className={styles.formGroup}>
                <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" />
                <svg className={styles.inputIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M10.5 16C10.5 15.1716 11.1716 14.5 12 14.5C12.8284 14.5 13.5 15.1716 13.5 16C13.5 16.8284 12.8284 17.5 12 17.5C11.1716 17.5 10.5 16.8284 10.5 16Z" fill="#3C4870"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M7.62147 10.5971L7.30603 7.75816C7.26559 7.39418 7.26559 7.02684 7.30603 6.66286L7.3288 6.45796C7.57028 4.28457 9.27889 2.56492 11.4507 2.30941C11.8155 2.26649 12.1841 2.26649 12.5489 2.30941C14.7207 2.56492 16.4293 4.28458 16.6708 6.45797L16.6935 6.66286C16.734 7.02684 16.734 7.39418 16.6935 7.75815L16.3781 10.5971L17.0647 10.6519C18.1474 10.7384 19.0315 11.5523 19.2071 12.6242C19.5731 14.8598 19.5731 17.1401 19.2071 19.3758C19.0315 20.4477 18.1474 21.2616 17.0647 21.348L15.5686 21.4675C13.1932 21.6571 10.8065 21.6571 8.4311 21.4675L6.93497 21.348C5.85224 21.2616 4.96814 20.4477 4.79262 19.3758C4.42655 17.1401 4.42655 14.8598 4.79262 12.6242C4.96814 11.5523 5.85224 10.7384 6.93497 10.6519L7.62147 10.5971ZM11.6259 3.79914C11.8743 3.76992 12.1253 3.76992 12.3736 3.79914C13.8523 3.97309 15.0155 5.1439 15.18 6.62361L15.2027 6.82851C15.2309 7.08239 15.2309 7.33862 15.2027 7.59251L14.8816 10.483C12.9624 10.3594 11.0372 10.3594 9.11802 10.483L8.79686 7.59251C8.76865 7.33862 8.76865 7.08239 8.79686 6.82851L8.81962 6.62361C8.98404 5.1439 10.1473 3.97309 11.6259 3.79914ZM15.4492 12.0277C13.1533 11.8445 10.8464 11.8445 8.55047 12.0277L7.05434 12.1472C6.65941 12.1787 6.33693 12.4756 6.27291 12.8666C5.93312 14.9417 5.93312 17.0583 6.27291 19.1334C6.33693 19.5244 6.65941 19.8213 7.05434 19.8528L8.55047 19.9722C10.8464 20.1555 13.1533 20.1555 15.4492 19.9722L16.9453 19.8528C17.3403 19.8213 17.6627 19.5244 17.7268 19.1334C18.0666 17.0583 18.0666 14.9417 17.7268 12.8666C17.6627 12.4756 17.3403 12.1787 16.9453 12.1472L15.4492 12.0277Z" fill="#3C4870"/>
                </svg>
                <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "right"}}>
                  <svg className={styles.trailingIcon} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M18.5303 1.70037C18.8232 1.37494 18.8232 0.847291 18.5303 0.521857C18.2374 0.196424 17.7626 0.196424 17.4697 0.521857L1.46967 18.2997C1.17678 18.6251 1.17678 19.1527 1.46967 19.4781C1.76256 19.8036 2.23744 19.8036 2.53033 19.4781L5.37723 16.3149C6.74353 17.0296 8.3172 17.5 10 17.5C12.684 17.5 15.0903 16.3032 16.8206 14.8278C17.6874 14.0886 18.4032 13.264 18.9089 12.4543C19.4006 11.667 19.75 10.803 19.75 10C19.75 9.197 19.4006 8.333 18.9089 7.54572C18.4032 6.73605 17.6874 5.91142 16.8206 5.17226C16.5585 4.94872 16.2808 4.73158 15.989 4.52403L18.5303 1.70037ZM14.8995 5.73459L13.1287 7.70218C13.5213 8.36089 13.75 9.15078 13.75 10C13.75 12.3012 12.0711 14.1667 10 14.1667C9.2357 14.1667 8.5248 13.9126 7.93196 13.4763L6.51524 15.0504C7.58077 15.5328 8.7621 15.8333 10 15.8333C12.2865 15.8333 14.3802 14.8079 15.9073 13.5056C16.6692 12.8559 17.2714 12.1527 17.6766 11.504C18.0957 10.833 18.25 10.3081 18.25 10C18.25 9.69189 18.0957 9.167 17.6766 8.496C17.2714 7.84734 16.6692 7.14413 15.9073 6.49441C15.5941 6.22735 15.2571 5.97191 14.8995 5.73459ZM9.0299 12.2563C9.3237 12.4126 9.6526 12.5 10 12.5C11.2426 12.5 12.25 11.3807 12.25 10C12.25 9.614 12.1713 9.24856 12.0307 8.92211L9.0299 12.2563Z" fill="#949DB2"/>
                    <path d="M10 2.5C11.0323 2.5 12.0236 2.67704 12.9511 2.9789C13.1296 3.03698 13.1827 3.28513 13.0513 3.43122L12.2267 4.34739C12.1648 4.41612 12.0752 4.44364 11.99 4.42186C11.3506 4.25841 10.6839 4.16667 10 4.16667C7.71345 4.16667 5.61978 5.19213 4.09267 6.49441C3.33078 7.14413 2.72857 7.84733 2.32343 8.496C1.90431 9.167 1.75 9.69189 1.75 10C1.75 10.3081 1.90431 10.833 2.32343 11.504C2.67725 12.0706 3.18138 12.6786 3.81091 13.2563C3.92677 13.3627 3.93781 13.5572 3.83156 13.6753L3.12265 14.463C3.03234 14.5633 2.88823 14.5721 2.79037 14.481C2.09739 13.8352 1.51902 13.1394 1.0911 12.4543C0.59937 11.667 0.25 10.803 0.25 10C0.25 9.197 0.59937 8.333 1.0911 7.54572C1.59681 6.73604 2.31262 5.91142 3.17941 5.17226C4.90965 3.69676 7.31598 2.5 10 2.5Z" fill="#949DB2"/>
                    <path d="M10 5.83333C10.1185 5.83333 10.2357 5.83943 10.3513 5.85138C10.5482 5.8717 10.6194 6.13323 10.4796 6.28855L9.2674 7.63551C8.6141 7.88533 8.0968 8.46011 7.87196 9.186L6.6597 10.5329C6.51991 10.6882 6.28453 10.6091 6.26624 10.3903C6.25549 10.2619 6.25 10.1317 6.25 10C6.25 7.69881 7.92893 5.83333 10 5.83333Z" fill="#949DB2"/>
                  </svg>
                </div>
              </div>
            </div>
            {/* <div className={styles.formGroup}>
              <input type="text" name="email" id="email" placeholder="Email" />
              <svg className={styles.inputIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3.5 6.5L11.3926 12.5355C11.7511 12.8097 12.2489 12.8097 12.6075 12.5355L20.5 6.5M4 18H20C20.5523 18 21 17.5523 21 17V7C21 6.44772 20.5523 6 20 6H4C3.44772 6 3 6.44772 3 7V17C3 17.5523 3.44772 18 4 18Z" stroke="#3C4870" strokeWidth="1.5"/>
              </svg>
            </div>
            <div className={styles.formGroup} style={{marginTop: "40px"}}>
              <input type="password" name="password" id="password" placeholder="Password" />
              <svg className={styles.inputIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M10.5 16C10.5 15.1716 11.1716 14.5 12 14.5C12.8284 14.5 13.5 15.1716 13.5 16C13.5 16.8284 12.8284 17.5 12 17.5C11.1716 17.5 10.5 16.8284 10.5 16Z" fill="#3C4870"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M7.62147 10.5971L7.30603 7.75816C7.26559 7.39418 7.26559 7.02684 7.30603 6.66286L7.3288 6.45796C7.57028 4.28457 9.27889 2.56492 11.4507 2.30941C11.8155 2.26649 12.1841 2.26649 12.5489 2.30941C14.7207 2.56492 16.4293 4.28458 16.6708 6.45797L16.6935 6.66286C16.734 7.02684 16.734 7.39418 16.6935 7.75815L16.3781 10.5971L17.0647 10.6519C18.1474 10.7384 19.0315 11.5523 19.2071 12.6242C19.5731 14.8598 19.5731 17.1401 19.2071 19.3758C19.0315 20.4477 18.1474 21.2616 17.0647 21.348L15.5686 21.4675C13.1932 21.6571 10.8065 21.6571 8.4311 21.4675L6.93497 21.348C5.85224 21.2616 4.96814 20.4477 4.79262 19.3758C4.42655 17.1401 4.42655 14.8598 4.79262 12.6242C4.96814 11.5523 5.85224 10.7384 6.93497 10.6519L7.62147 10.5971ZM11.6259 3.79914C11.8743 3.76992 12.1253 3.76992 12.3736 3.79914C13.8523 3.97309 15.0155 5.1439 15.18 6.62361L15.2027 6.82851C15.2309 7.08239 15.2309 7.33862 15.2027 7.59251L14.8816 10.483C12.9624 10.3594 11.0372 10.3594 9.11802 10.483L8.79686 7.59251C8.76865 7.33862 8.76865 7.08239 8.79686 6.82851L8.81962 6.62361C8.98404 5.1439 10.1473 3.97309 11.6259 3.79914ZM15.4492 12.0277C13.1533 11.8445 10.8464 11.8445 8.55047 12.0277L7.05434 12.1472C6.65941 12.1787 6.33693 12.4756 6.27291 12.8666C5.93312 14.9417 5.93312 17.0583 6.27291 19.1334C6.33693 19.5244 6.65941 19.8213 7.05434 19.8528L8.55047 19.9722C10.8464 20.1555 13.1533 20.1555 15.4492 19.9722L16.9453 19.8528C17.3403 19.8213 17.6627 19.5244 17.7268 19.1334C18.0666 17.0583 18.0666 14.9417 17.7268 12.8666C17.6627 12.4756 17.3403 12.1787 16.9453 12.1472L15.4492 12.0277Z" fill="#3C4870"/>
              </svg>
            </div> */}
            <div className={styles.formFooter}>
              By signing up, you agree to our&nbsp;<a href="#">terms of service</a>&nbsp;and&nbsp;<a href="#">privacy policy</a>.
            </div>
          </div>
          <button type="submit" className={styles.submitbtn} disabled={formFilled ? false : true}>Sign Up</button>
          <span className={styles.prompt}>Already have an account? <Link href="/login">Login</Link></span>
        </form>
      </main>
    </div>
    </>
  );
};

export default SignUp;
