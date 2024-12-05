import React, { useState } from "react";

// Define types for the language and currency options
type Language = "English" | "Urdu" | "French" | "Arabic" | "Hindhi";
type Currency = "PKR" | "INR" | "EUR" | "USD";

// Component
const LanguageCurrencySwitcher: React.FC = () => {
  // State for language and currency
  const [language, setLanguage] = useState<Language>("English");
  const [currency, setCurrency] = useState<Currency>("PKR");
  const [price, setPrice] = useState<number>(100); // Example price in default currency (PKR)

  // Currency conversion rates (example values)
  const conversionRates: Record<Currency, number> = {
    PKR: 1,
    INR: 1.7,
    EUR: 0.004,
    USD: 0.0036,
  };

  // Handle language change
  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value as Language;
    setLanguage(selectedLanguage);
    // Example action: You could integrate i18n or other libraries for full translations
    alert(`Language switched to ${selectedLanguage}`);
  };

  // Handle currency change
  const handleCurrencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCurrency = event.target.value as Currency;
    setCurrency(selectedCurrency);
    // Convert the price based on selected currency
    setPrice(100 * conversionRates[selectedCurrency]);
  };

  return (
    <div className="flex flex-col items-start gap-4">
      {/* Currency Selector */}
      <div className="flex items-center gap-2">
        <label htmlFor="currency" className="text-gray-700 text-sm">
          Currency:
        </label>
        <select
          className="text-gray-500 text-[12px] w-[100px] border p-1 rounded"
          name="currency"
          id="currency"
          value={currency}
          onChange={handleCurrencyChange}
        >
          <option value="PKR">PKR</option>
          <option value="INR">INR</option>
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
        </select>
      </div>

      {/* Language Selector */}
      <div className="flex items-center gap-2">
        <label htmlFor="language" className="text-gray-700 text-sm">
          Language:
        </label>
        <select
          className="text-gray-500 text-[12px] w-[100px] border p-1 rounded"
          name="language"
          id="language"
          value={language}
          onChange={handleLanguageChange}
        >
          <option value="English">English</option>
          <option value="Urdu">Urdu</option>
          <option value="French">French</option>
          <option value="Arabic">Arabic</option>
          <option value="Hindhi">Hindhi</option>
        </select>
      </div>

      {/* Display Area */}
      <div className="mt-4">
        <p className="text-sm">
          Selected Language: <strong>{language}</strong>
        </p>
        <p className="text-sm">
          Price in {currency}: <strong>{price.toFixed(2)} {currency}</strong>
        </p>
      </div>
    </div>
  );
};

export default LanguageCurrencySwitcher;
