import Section from "./Section";

const COMPANY_NAME = "Chetan Sakpal (Website Development Services)";
const WEBSITE_URL = "https://chetansakpal.com";
const EFFECTIVE_DATE = "August 22, 2025";

const Shipping = () => {
  return (
    <Section title="Shipping & Delivery Policy">
      <p>
        <strong>Effective Date:</strong> {EFFECTIVE_DATE}
        <br />
        <strong>Last Updated:</strong> {EFFECTIVE_DATE}
      </p>

      <p>
        At <strong>{COMPANY_NAME}</strong>, our services are digital in nature.
        As such, there is no physical shipping of products. This Shipping &
        Delivery Policy explains how we deliver our digital services and project
        deliverables.
      </p>

      <h3 className="mt-5">1. Digital Delivery</h3>
      <ul>
        <li>
          All deliverables such as source code, design files, reports, or
          documentation are shared electronically via email, secure links, or
          project management platforms.
        </li>
        <li>
          Access credentials (where applicable) are provided once payments are
          received as per agreed terms.
        </li>
      </ul>

      <h3 className="mt-5">2. Delivery Timelines</h3>
      <p>
        Delivery timelines for digital services are defined in the project
        proposal or statement of work. These timelines depend on project scope,
        client inputs, and third-party dependencies.
      </p>

      <h3 className="mt-5">3. No Physical Shipping</h3>
      <p>
        Since we only provide IT and website development services,{" "}
        <strong>no physical products are shipped</strong>.
      </p>

      <h3 className="mt-5">4. Contact</h3>
      <p>
        For any queries regarding delivery, please contact us via{" "}
        <a href={WEBSITE_URL} target="_blank" rel="noreferrer">
          {WEBSITE_URL}
        </a>
        .
      </p>
    </Section>
  );
};

export default Shipping;
