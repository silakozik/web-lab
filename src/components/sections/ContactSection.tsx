import ContactForm from "../ContactForm";

export default function ContactSection() {
  return (
    <section id="iletisim" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">İletişim</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Aşağıdaki formdan bana kısa bir mesaj bırakabilirsin.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
