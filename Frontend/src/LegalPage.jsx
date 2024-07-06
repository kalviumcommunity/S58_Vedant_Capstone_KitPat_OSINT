import React from "react";

import "./LegalPage.css";
import { useNavigate } from "react-router-dom";


export default function LegalPage() {
  const navigate = useNavigate();
  return (
    <div id="HomePage">
      <nav id="Navbar">
        <div id="NavOPitons">
        <div  onClick={()=>{  navigate("/");}}>Home</div>
        <div  onClick={()=>{  navigate("/legal");}}>Legal</div>
        </div>
      </nav>

      <div id="LegalPageContent">
        <div id="legaldisclaimer">Legal Disclaimer</div>
        <p>
          Kitpat.io is an open-source intelligence (OSINT) platform that
          provides information based on what is already available on the
          internet. We do not engage in any form of database leaks or hacks. All
          information displayed on Kitpat.io is collected from publicly
          accessible sources, and we merely compile and present it on our
          platform.
        </p>
        <p>
          Please note the following: Source of Information: All data provided by
          Kitpat.io is sourced from publicly available databases and other
          open-source materials. We do not create, generate, or alter any of the
          data we present. No Guarantee of Authenticity: While we strive to
          provide accurate and up-to-date information, we do not guarantee the
          authenticity, completeness, or reliability of the data available on
          Kitpat.io. Users should verify the information independently before
          relying on it. User Responsibility: Users are solely responsible for
          how they use the information obtained from Kitpat.io. We do not take
          any responsibility for the actions taken by users based on the data
          provided by our platform. Legal and Ethical Use: Users must ensure
          that their use of Kitpat.io complies with all applicable laws and
          ethical guidelines. Any misuse of the information, including but not
          limited to harassment, discrimination, or unlawful activities, is
          strictly prohibited. No Liability: Kitpat.io and its developers are
          not liable for any damages, losses, or consequences arising from the
          use or misuse of the information available on our platform. By using
          Kitpat.io, you agree to these terms and acknowledge that you
          understand and accept the limitations and responsibilities associated
          with using our service.
        </p>
        <p>
          For enquiry : kitpatservices@gmail.com
        </p>
      </div>
    </div>
  );
}
