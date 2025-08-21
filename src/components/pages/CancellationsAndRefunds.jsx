import Section from "./Section";

const COMPANY_NAME = "Chetan Sakpal (Website Development Services)";
const CONTACT_EMAIL = "hello@chetansakpal.com";
const EFFECTIVE_DATE = "August 22, 2025";

const CancellationsAndRefunds = () => {
  return (
    <Section title="Cancellations & Refunds Policy">
      <p>
        <strong>Effective Date:</strong> {EFFECTIVE_DATE} <br />{" "}
        <strong>Last Updated:</strong> {EFFECTIVE_DATE}
      </p>
      <p>
        At <strong>{COMPANY_NAME}</strong>, we strive to deliver high‑quality IT
        and software solutions tailored to your needs. This Cancellations &
        Refunds Policy explains the terms under which cancellations and refunds
        are processed for our website design, development, consulting, and
        related digital services.
      </p>

      <h3 className="mt-5">1. Cancellation of Services</h3>
      <ul>
        <li>
          Once a project agreement or service engagement has commenced,
          cancellations are generally <strong>not permitted</strong>
          due to the custom nature of software development and digital
          deliverables.
        </li>
        <li>
          If you wish to cancel <em>before</em> work has started, email us at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> within{" "}
          <strong>24 hours of payment</strong>. Cancellation requests are
          considered at our discretion.
        </li>
      </ul>

      <h3 className="mt-5">2. Refunds</h3>
      <ul>
        <li>
          <strong>Non‑refundable services:</strong> Consultation, discovery,
          project initiation, design, development, and other professional
          services are non‑refundable once work has started.
        </li>
        <li>
          <strong>Refund eligibility:</strong> A refund may be issued only if
          (a) the service has not yet commenced and (b) we receive a written
          cancellation request within <strong>24 hours of payment</strong>.
        </li>
        <li>
          <strong>Partial refunds:</strong> If a project is terminated mid‑way
          by mutual agreement, we may refund the unused portion of fees after
          deducting applicable charges for work completed, third‑party costs,
          and administrative fees.
        </li>
      </ul>

      <h3 className="mt-5">3. No Refunds for Completed Services</h3>
      <p>
        Because our services produce custom software and digital deliverables,{" "}
        <strong>no refunds</strong> are provided once the project has been
        delivered and approved by the client or when access to source
        code/deliverables has been granted.
      </p>

      <h3 className="mt-5">4. Processing of Refunds</h3>
      <ul>
        <li>
          Eligible refunds are processed to the original payment method within{" "}
          <strong>7–10 business days</strong>.
        </li>
        <li>Timelines may vary depending on your bank or payment provider.</li>
      </ul>

      <p className="text-sm text-slate-500">
        <strong>Disclaimer:</strong> This template is for general information
        only and is not legal advice. Please review and customize based on your
        actual services and consult a legal advisor for commercial use.
      </p>
    </Section>
  );
};

export default CancellationsAndRefunds;
