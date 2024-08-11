import React, { useState } from 'react';

const faqData = [
  {
    category: "Products",
    questions: [
      {
        question: "How to import products into INV_toby?",
        answer: "You can import Excel sheets by clicking on Inventory → Products and Services → Import. Make sure that all columns coincide with Kladana template."
      },
      {
        question: "Can I customize product variants?",
        answer: "Yes, you can set a special price for the exact variant of a good, add a unique picture, attach files, etc."
      },
      {
        question: "How to add initial stock to the inventory?",
        answer: "Open Inventory → Stock Adjustments, create a new one and add necessary items. Specify the correct number of goods in the Qty Adjusted column."
      },
      {
        question: "How to add packaging to a product?",
        answer: "Go to Inventory → Products and Services, open the card of a product, choose Packaging, and add one. It can be a box, a bundle, a sack, etc. Specify the quantity, UOM, and generate the barcode."
      },
      {
        question: "I need to attach the assembly instructions to the table card. How to do it?",
        answer: "Open the product card, and go to Attachments. Here you can upload a necessary file."
      },
    ],
  },
  {
    category: "Price Management & Sales",
    questions: [
      {
        question: "How to sell in bundles?",
        answer: "You may need to sell goods in sets. Say, your main customers are wholesalers, and they buy light bulbs in bundles of 100 pieces. So, you create a light bulb product card with one bulb, and then you create a bundle with 100 bulbs. Plus, you add a package, specify the weight of this bundle, etc. If you have retail customers, you can sell sets of goods like gifts or complete outfits. Bundles are handy for these cases too."
      },
      {
        question: "What should I do if I buy sugar in sacks but sell it in 1‑kilo packs?",
        answer: "Create a product card for sugar. Set kg in the UOM field. Then add packaging — sack (e.g. 10 kilos)."
      },
      {
        question: "How to set sale prices for wholesalers and distributors?",
        answer: "Go to Inventory → Products and Services → open a product card, push the Set up prices button, and add Wholesale price and Distributor price, or some other types. Lastly, indicate different prices in a product card."
      },
      {
        question: "How to change prices in bulk?",
        answer: "Go to Inventory → Products and Services → mark checkboxes of selected items. Another option is to choose the whole folder with a bunch of goods. Click Edit → Set prices. Here you can change currency, specify a new price, or indicate how much the price will increase or decrease."
      },
    ],
  },
];

const UserFAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section className="bg-red-500/5 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">FAQ</h2>
        </div>
        <div className="space-y-12">
          {faqData.map((section, sectionIndex) => (
            <div key={sectionIndex} className="accordion">
              <h3 className="text-xl font-semibold  mb-4">{section.category}</h3>
              <div className="space-y-4">
                {section.questions.map((faq, faqIndex) => (
                  <div key={faqIndex} className="border-b border-gray-800 pb-4">
                    <button
                      className="w-full text-left text-lg font-medium  focus:outline-none"
                      onClick={() => toggleQuestion(`${sectionIndex}-${faqIndex}`)}
                    >
                      {faqIndex + 1}. {faq.question}
                    </button>
                    <div
                      className={`mt-2  transition-max-height duration-500 ease-in-out overflow-hidden ${
                        openQuestion === `${sectionIndex}-${faqIndex}` ? 'max-h-screen' : 'max-h-0'
                      }`}
                    >
                      {faq.answer}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserFAQ;
