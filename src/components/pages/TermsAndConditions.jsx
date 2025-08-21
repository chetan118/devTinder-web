import Section from "./Section";

const COMPANY_NAME = "Chetan Sakpal (Website Development Services)";
const WEBSITE_URL = "https://chetansakpal.com";
const EFFECTIVE_DATE = "August 22, 2025";

const TermsAndConditions = () => {
  return (
    <Section title="Terms & Conditions">
      <p>
        <strong>Effective Date:</strong> {EFFECTIVE_DATE} <br />{" "}
        <strong>Last Updated:</strong> {EFFECTIVE_DATE}
      </p>

      <h3 className="mt-5">1. Acceptance of Terms</h3>
      <p>
        By accessing{" "}
        <a href={WEBSITE_URL} target="_blank" rel="noreferrer">
          {WEBSITE_URL}
        </a>{" "}
        and/or engaging <strong>{COMPANY_NAME}</strong> for IT & software
        development services, you agree to these Terms & Conditions.
      </p>

      <h3 className="mt-5">2. Services</h3>
      <p>
        We provide website design, development, consulting, and related services
        as agreed in proposals, statements of work, or project scopes shared
        with you.
      </p>

      <h3 className="mt-5">3. Quotes, Fees & Payments</h3>
      <ul>
        <li>
          Quotes are valid for the period stated. Prices exclude applicable
          taxes unless specified.
        </li>
        <li>
          Invoices are payable as per the agreed schedule. Late payments may
          incur interest and/or suspension of services.
        </li>
        <li>
          Payments are processed via our payment partner (e.g., Razorpay). You
          agree to their terms and policies.
        </li>
      </ul>

      <h3 className="mt-5">4. Client Responsibilities</h3>
      <ul>
        <li>
          Provide timely access to content, credentials, and approvals needed to
          deliver the project.
        </li>
        <li>
          Ensure you have rights to all materials supplied to us and that they
          do not infringe any third‑party rights or laws.
        </li>
      </ul>

      <h3 className="mt-5">5. Intellectual Property</h3>
      <ul>
        <li>
          Unless otherwise agreed in writing, upon full and final payment, we
          grant you rights to use the final deliverables for the intended
          purpose.
        </li>
        <li>
          We retain ownership of our pre‑existing materials, frameworks, and
          know‑how used in delivering the project, as well as any non‑assignable
          third‑party components.
        </li>
      </ul>

      <h3 className="mt-5">6. Revisions & Change Requests</h3>
      <p>
        Minor corrections are included as specified in the project scope.
        Additional changes or features requested outside scope will be quoted
        separately and may affect timelines.
      </p>

      <h3 className="mt-5">7. Timelines</h3>
      <p>
        Project timelines are estimates and depend on client inputs, third‑party
        dependencies, and technical considerations. We will communicate material
        delays promptly.
      </p>

      <h3 className="mt-5">8. Warranties & Disclaimers</h3>
      <ul>
        <li>
          Services are provided using reasonable skill and care. Except as
          expressly stated, we provide no warranties, express or implied.
        </li>
        <li>
          We do not guarantee uninterrupted or error‑free operation of websites,
          third‑party services, or hosting environments.
        </li>
      </ul>

      <h3 className="mt-5">9. Limitation of Liability</h3>
      <p>
        To the maximum extent permitted by law, we are not liable for indirect,
        incidental, special, consequential, or punitive damages, or any loss of
        profits, revenue, data, or business. Our total liability for any claim
        is limited to the fees paid for the service giving rise to the claim.
      </p>

      <h3 className="mt-5">10. Confidentiality</h3>
      <p>
        Each party agrees to keep confidential the other party’s non‑public
        information obtained in connection with the services, using at least
        reasonable care.
      </p>

      <h3 className="mt-5">11. Compliance & Acceptable Use</h3>
      <p>
        You agree to use deliverables in compliance with applicable laws and not
        to engage in unlawful, infringing, or harmful activities.
      </p>

      <h3 className="mt-5">12. Termination</h3>
      <p>
        Either party may terminate for material breach if not cured within a
        reasonable notice period. Upon termination, you will pay for work
        completed up to the termination date.
      </p>

      <h3 className="mt-5">13. Governing Law & Dispute Resolution</h3>
      <p>
        These Terms are governed by the laws of India, without regard to
        conflict‑of‑law principles. Disputes will be subject to the exclusive
        jurisdiction of the courts located in Mumbai, Maharashtra, India.
      </p>

      <h3 className="mt-5">14. Changes to Terms</h3>
      <p>
        We may update these Terms from time to time. The “Last Updated” date
        reflects the latest changes. Continued use of our services constitutes
        acceptance of the revised Terms.
      </p>
    </Section>
  );
};

export default TermsAndConditions;
