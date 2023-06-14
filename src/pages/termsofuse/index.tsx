import React, { useState } from "react";
import Head from "next/head";
import styles from "./terms.module.scss";
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
          <div
            className={
              router.pathname === "/about"
                ? styles["pathActive"]
                : styles["path"]
            }
          >
            About us
          </div>
        </Link>
        <Link href="/privacy">
          <div
            className={
              router.pathname === "/privacy"
                ? styles["pathActive"]
                : styles["path"]
            }
          >
            Privacy Policy
          </div>
        </Link>
        <Link href="/termsofuse">
          <div
            className={
              router.pathname === "/termsofuse"
                ? styles["pathActive"]
                : styles["path"]
            }
          >
            Terms of Use
          </div>
        </Link>
      </div>
      <div className={styles.pageContent}>
        <h1>Terms of Use</h1>
        <p>
          The Terms of Use (TOU) for kalabars.com, last updated in June 2023,
          outline the agreement between users (&quot;you&quot;) and kalabars
          owned by Creatives Garage. regarding the use of the website. By
          accessing or using the site, you agree to be bound by these TOU and
          the accompanying Privacy Policy.
        </p>
        <h3>Restrictions</h3>
        <ul>
          <li>
            You agree not to interfere with the proper functioning of the site
            or attempt to do so.
          </li>
          <li>
            You must not post or transmit any unlawful, fraudulent, harassing,
            libelous, or obscene information on the site.
          </li>
          <li>
            It is prohibited to post or send any information that contains
            viruses, bugs, or other harmful items.
          </li>
          <li>
            Unauthorized use, publication, distribution, copying, reverse
            engineering, or replication of the site is not allowed.
          </li>
          <li>
            You must not violate any copyright or intellectual property rights
            of another party.
          </li>
          <li>
            Actions that could damage, disable, overburden, or impair the
            site&#39;s infrastructure or kalabars&#39; network system are
            prohibited.
          </li>
          <li>
            Unauthorized access to software, accounts, computer systems, or
            networks connected to kalabars is strictly forbidden.
          </li>
          <li>
            Actions that interfere with others&#39; use and enjoyment of the
            site are prohibited.
          </li>
          <li>
            You may not obtain materials or information through unauthorized
            means.
          </li>
        </ul>
        <h3>Intellectual Property:</h3>
        <ul>
          <li>
            kalabars and its licensors own the site, including all intellectual
            property rights.
          </li>
          <li>
            kalabars makes no warranties, express or implied, regarding
            non-infringement, merchantability, or fitness for a particular
            purpose.
          </li>
          <li>
            Any reliance on the quality or performance of the site is at your
            own risk.
          </li>
          <li>
            kalabars is not liable for damages arising from the site or losses
            caused by third parties&#39; acts or omissions.
          </li>
          <li>
            No guarantee is made regarding error-free or uninterrupted access to
            the site or specific results.
          </li>
        </ul>
        <h3>Limitation of Liability:</h3>
        <ul>
          <li>
            kalabars is not liable for any direct or indirect losses or damages
            related to the site, its use, or errors in its operation.
          </li>
          <li>
            This includes damages to users&#39; computers, devices, or
            equipment, even if kalabars should have known of the possibility of
            such damages.
          </li>
          <li>
            Your sole remedy against kalabars for dissatisfaction with the site
            is to stop using it.
          </li>
        </ul>
        <h3>Age Requirements:</h3>
        <ul>
          <li>Users must be at least 18 years old to create an account.</li>
          <li>
            If a user is a minor, but meets the minimum age requirement, they
            need parental or legal guardian permission.
          </li>
        </ul>
        <h3>Parents and Guardians:</h3>
        <ul>
          <li>
            Parents or legal guardians granting permission for their child&#39;s
            use of the site are responsible for monitoring and supervising their
            child&#39;s usage.
          </li>
          <li>
            kalabars can disable access to minors who do not meet the applicable
            age requirement or lack proper permission.
          </li>
        </ul>
        <h3>Indemnity:</h3>
        <ul>
          <li>
            You agree to defend and hold harmless kalabars, its affiliates,
            officers, directors, and employees from any damages, costs, losses,
            or liabilities arising from your breach of the TOU or any claim
            related to your use of the site.
          </li>
        </ul>
        <h3>Third-Party Websites and Advertisers:</h3>
        <ul>
          <li>
            The site may contain links to third-party websites or services not
            owned or controlled by kalabars.
          </li>
          <li>
            kalabars assumes no responsibility for the content, privacy
            policies, or practices of these third-party sites.
          </li>
          <li>
            Users access third-party sites at their own risk, and the TOU and
            Privacy Policy do not apply to such sites.
          </li>
        </ul>
        <h3>DMCA Notice:</h3>
        <ul>
          <li>
            kalabars respects intellectual property rights and will remove
            infringing material upon proper notification under the Digital
            Millennium Copyright Act (DMCA).
          </li>
          <li>
            If you believe content on the site infringes your copyright, you can
            request its removal or blocking.
          </li>
          <li>
            Counter-notices may be submitted if you believe a notice was wrongly
            filed against you.
          </li>
          <li>Penalties for false claims may apply.</li>
        </ul>
        <h3>Miscellaneous:</h3>
        <ul>
          <li>
            Notices from kalabars will be sent to the contact information
            provided during registration.
          </li>
          <li>
            These TOU do not create a principal-agent, partnership, or joint
            venture relationship between kalabars and users.
          </li>
          <li>
            These TOU represent the entire agreement between the parties and
            supersede any previous agreements.
          </li>
          <li>
            Waivers, assignments, and severability provisions are included in
            the TOU.
          </li>
          <li>
            The laws of the Republic of Kenya govern these TOU, and any disputes
            will be resolved in the courts of Kenya.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
