import Footer from "../Footer";
import NavBar from "../NavBar";

const Section = ({ title, children }) => {
  return (
    <div>
      <NavBar />
      <section className="max-w-4xl mx-auto rounded-2xl shadow p-6 sm:p-10 mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
          {title}
        </h2>
        <div className="prose prose-slate max-w-none">{children}</div>
      </section>
      <Footer />
    </div>
  );
};

export default Section;
