import React, { useState } from "react";
import Head from "next/head";
import styles from "./privacy.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

const About = () => {
  const [navOption, setNavOption] = useState(false);
  const handleNavbarOptionClick = () => {
    setNavOption(!navOption);
  };
  const router = useRouter();
  return (
    <div className={styles.pageContainer}>
      <Head>
        <title>About - Kalabars</title>
      </Head>
      <div className={styles.navigator}>
        <Link href="/about">
            <div className={router.pathname === '/about' ? styles['pathActive'] : styles['path']}>
                About us
            </div>
        </Link>
        <Link href="/privacy">
        <div className={router.pathname === '/privacy' ? styles['pathActive'] : styles['path']}>
            Privacy Policy
        </div>
        </Link>
        <Link href="/termsofuse">
        <div className={router.pathname === '/termsofuse' ? styles['pathActive'] : styles['path']}>
            Terms of Use
        </div>
        </Link>
      </div>
      <div className={styles.pageContent}>
        <h1>Privacy Policy</h1>
        <p>
          <span>Definitions:</span> At Kalabars, we understand the importance of
          your privacy. This policy outlines our privacy practices for our
          website (the &quot;Site&quot;) and mobile applications, and explains
          how we collect and use information from our customers. By accessing or
          using our Site, you agree to be bound by this Privacy Policy and our
          Terms of Use. The terms &quot;we,&quot; &quot;us,&quot;
          &quot;our,&quot; the &quot;Company,&quot; or &quot;Kalabars&quot;
          refer to Kalabars, the Subscription Video On Demand platform for
          watching movies, TV series, and other video content. &quot;User,&quot;
          &quot;customer,&quot; or &quot;subscriber&quot; refers to individuals
          who use our service. &quot;Personal Information,&quot; &quot;Personal
          Data,&quot; or &quot;Data&quot; refers to any information that
          directly or indirectly identifies a user, such as name, email address,
          mobile number, or IP address.
        </p>
        <p>
          <span>Data Processing:</span> All information provided by users of
          Kalabars.com, as defined in our Terms of Use, is protected under the
          Data Protection Act of 1998 and the General Data Protection Regulation
          of 2018.
        </p>
        <p>
          <span>Voluntarily Submitted Data:</span> When you sign up for
          Kalabars, make a subscription payment, contact our customer service,
          send us an email, post on our blog, comment on a video, or communicate
          with us in any way, you voluntarily provide us with information that
          we process. This may include your name, username, email address,
          mobile number, IP address, credit card information, bank information,
          and purchase history. By submitting this information, you consent to
          its collection, usage, disclosure, and storage by us, as described in
          our Terms of Use and this Privacy Policy.
        </p>
        <p>
          <span>Automatically Collected Data:</span> When you use our services,
          browse our websites or mobile applications, we may automatically
          collect information about your visit, usage of the services, and web
          browsing. This may include your IP address, operating system, device
          type, browser ID, browsing activity, and other interactions with our
          websites or mobile applications. We collect this information through
          log files and the use of cookies or other tracking technologies.
        </p>
        <p>
          <span>Service Usage Data:</span>Service We may receive information
          about how and when you use our services, store it in log files or
          other files associated with your account, and link it to other
          information we collect about you. This information helps us improve
          our services for all users.
        </p>
        <p>
          <span>Cookie Data:</span> Our site uses cookies, which are text files
          downloaded to your device when you visit a website. Cookies allow
          websites to recognize a user&#39;s device and perform various tasks.
          We use different types of cookies, including functionality,
          advertising or targeting, and performance cookies. Functionality
          cookies remember your preferences to enhance your experience,
          advertising or targeting cookies display relevant advertisements, and
          performance cookies help us analyze website performance and make
          improvements. You have the option to refuse or manage cookies in your
          browser settings, but please note that this may affect your experience
          on our site.
        </p>
        <p>
          <span> Mobile Application Data: </span>When you use our mobile
          applications, we may collect additional information, such as the type
          of device and operating system you use. We may also ask for your
          consent to send push notifications and use mobile analytics software
          to understand how people use our application.
        </p>

        <h3>Use and Disclosure of Personal Information</h3>
        <p>
          We do not sell, trade, or rent your Personal Information. We process
          Personal Information in the following ways:
        </p>
        <ul>
          <li>
            <p>
              For Promotional Purposes: If you visit our website but do not
              subscribe, we may send you promotional emails inviting you to
              subscribe. You can unsubscribe from these emails by following the
              instructions in each email or adjusting your marketing preferences
              in your profile.
            </p>
          </li>
          <li>
            <p>
              For Billing Purposes: We use your Personal Information to send
              emails, invoices, receipts, and other billing-related
              communications. We may share billing information with secure
              third-party payment processors.
            </p>
          </li>
          <li>
            <p>
              To Provide and Improve Our Services: We may aggregate information
              about your usage of our services with information about other
              users to analyze trends and improve our service offerings. We may
              also use your Personal Information to personalize your experience,
              recommend content, and provide customer support.
            </p>
          </li>
          <li>
            <p>
              For Legal Compliance: We may disclose your Personal Information as
              required by law, regulation, or legal process. We may also
              disclose your information in response to a request from law
              enforcement authorities or other government officials.
            </p>
          </li>
          <li>
            <p>
              For Business Transactions: In the event of a merger, acquisition,
              or sale of all or a portion of our assets, we may transfer your
              Personal Information to the relevant third party involved in the
              transaction.
            </p>
          </li>
          <li>
            <p>
              With Your Consent: We may share your Personal Information with
              third parties when we have obtained your explicit consent.
            </p>
          </li>
        </ul>
        <h3>Data Security</h3>
        <p>
          We take the security of your Personal Information seriously and have
          implemented appropriate technical and organizational measures to
          protect it. However, no data transmission over the internet or storage
          system can be guaranteed to be 100% secure. Therefore, while we strive
          to protect your Personal Information, we cannot guarantee its absolute
          security.
        </p>
        <h3>Changes to Privacy Policy</h3>
        <p>
          We reserve the right to modify this Privacy Policy at any time. Any
          changes will be effective immediately upon posting the updated policy
          on our website. We encourage you to review this Privacy Policy
          periodically for any updates or changes.
        </p>
        <h3>Contact Us</h3>
        <p>
          If you have any questions or concerns regarding this Privacy Policy or
          our privacy practices, please contact us at <a href="emailto: privacy@kalabars.com" target="_blank" rel="noreferrer">privacy@kalabars.com</a>
        </p>
      </div>
    </div>
  );
};

export default About;
