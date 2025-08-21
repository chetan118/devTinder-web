import Section from "./Section";

const COMPANY_NAME = "Chetan Sakpal (Website Development Services)";
const WEBSITE_URL = "https://chetansakpal.com";
const EFFECTIVE_DATE = "August 22, 2025";

const Privacy = () => {
  return (
    <Section title="Privacy Policy">
      <p>
        <strong>Effective Date:</strong> {EFFECTIVE_DATE} <br />{" "}
        <strong>Last Updated:</strong> {EFFECTIVE_DATE}
      </p>

      <h3 className="mt-5">1. Scope</h3>
      <p>
        This Privacy Policy describes how <strong>{COMPANY_NAME}</strong>{" "}
        collects, uses, discloses, and protects personal information in
        connection with our website development and related IT services provided
        via{" "}
        <a href={WEBSITE_URL} target="_blank" rel="noreferrer">
          {WEBSITE_URL}
        </a>
        .
      </p>

      <h3 className="mt-5">2. Information We Collect</h3>
      <ul>
        <li>
          <strong>Contact data</strong> (name, email, phone, company, billing
          address).
        </li>
        <li>
          <strong>Project data</strong> (requirements, assets, content you
          provide for development and testing).
        </li>
        <li>
          <strong>Technical data</strong> (IP address, device/browser info, log
          data, cookies or similar technologies for analytics and security).
        </li>
        <li>
          <strong>Payment data</strong> processed by our payment partner (e.g.,
          Razorpay). We do not store full card details on our servers.
        </li>
      </ul>

      <h3 className="mt-5">3. How We Use Information</h3>
      <ul>
        <li>To provide, operate, and improve our services and website.</li>
        <li>
          To communicate about projects, proposals, invoices, and support.
        </li>
        <li>
          To process payments and prevent fraud in partnership with our payment
          gateway.
        </li>
        <li>To comply with legal obligations and enforce agreements.</li>
      </ul>

      <h3 className="mt-5">4. Sharing & Disclosure</h3>
      <ul>
        <li>
          With <strong>service providers</strong> (hosting, analytics, payment
          processing) under appropriate confidentiality and data protection
          terms.
        </li>
        <li>
          For <strong>legal reasons</strong> (to comply with law or protect
          rights, safety, and security).
        </li>
        <li>
          During <strong>business changes</strong> (merger, acquisition) subject
          to applicable laws.
        </li>
      </ul>

      <h3 className="mt-5">5. Data Security</h3>
      <p>
        We implement reasonable technical and organizational measures to protect
        personal data. However, no method of transmission or storage is 100%
        secure.
      </p>

      <h3 className="mt-5">6. Data Retention</h3>
      <p>
        We retain personal information for as long as necessary to fulfill the
        purposes outlined in this policy, comply with legal requirements,
        resolve disputes, and enforce agreements.
      </p>

      <h3 className="mt-5">7. Your Rights</h3>
      <p>
        Subject to applicable law, you may request access, correction, updating,
        or deletion of your personal information, or object to certain
        processing.
      </p>

      <h3 className="mt-5">8. Cookies</h3>
      <p>
        We may use cookies and similar technologies for essential site
        functionality, analytics, and security. You can manage cookie
        preferences through your browser settings.
      </p>

      <h3 className="mt-5">9. Third‑Party Links</h3>
      <p>
        Our website may contain links to third‑party websites. We are not
        responsible for their privacy practices. Please review their policies.
      </p>

      <h3 className="mt-5">10. Children’s Privacy</h3>
      <p>
        Our services are intended for business users and are not directed to
        children under 18. We do not knowingly collect data from children.
      </p>

      <h3 className="mt-5">11. International Transfers</h3>
      <p>
        Your data may be stored and processed in countries other than your own.
        We take steps to ensure appropriate safeguards are in place where
        required by law.
      </p>

      <h3 className="mt-5">12. Changes to This Policy</h3>
      <p>
        We may update this Privacy Policy from time to time. The “Last Updated”
        date reflects the latest changes. Material changes will be notified
        where required by law.
      </p>
    </Section>
  );
};

export default Privacy;
