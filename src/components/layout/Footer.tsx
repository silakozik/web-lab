export default function Footer() {
  return (
    <footer className="py-8 text-center bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <p className="text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Sıla Kozik. Tüm hakları saklıdır.
      </p>
    </footer>
  );
}
