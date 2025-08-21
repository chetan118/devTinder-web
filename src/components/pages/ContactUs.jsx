import Section from "./Section";

const COMPANY_NAME = "Chetan Sakpal (Website Development Services)";
const CONTACT_EMAIL = "hello@chetansakpal.com";
const WEBSITE_URL = "https://chetansakpal.com";
const ADDRESS = "Mumbai, Maharashtra, India";

const ContactUs = () => {
  return (
    <Section title="Contact Us">
      <p>
        Thank you for visiting <strong>{COMPANY_NAME}</strong>. We are here to
        answer your queries regarding our website development and IT services.
        Please reach out to us using the details below:
      </p>

      <p>
        <strong>Email:</strong>{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        <br />
        <strong>Website:</strong>{" "}
        <a href={WEBSITE_URL} target="_blank" rel="noreferrer">
          {WEBSITE_URL}
        </a>
        <br />
        <strong>Address:</strong> {ADDRESS}
      </p>

      <p>
        You can also use the contact form on our website for project
        discussions, support requests, or general inquiries.
      </p>
    </Section>
  );
};

export default ContactUs;
