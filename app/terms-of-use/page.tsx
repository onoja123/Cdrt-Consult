import React from 'react';

const TermsOfUsePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"  style={{background: 'linear-gradient(to right, #FF6525)'}}></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-4xl font-bold text-center mb-4">Terms Of Use</h1>
          <p className="text-center mb-8">Last Updated: 20th September, 2024</p>
          {/* Add your terms here */}
          <div className="prose prose-sm max-w-none">
            <article>
              <h2 id="toc" className="text-3xl font-semibold text-left text-gray-900 leading-tight mt-4 mb-3">
                Introduction
              </h2>
                <p className="text-gray-700 text-base mb-4"></p>
                <p className='ext-gray-700 text-base mb-4'></p>
              {/* More sections as needed */}
            </article>
          </div>
        </div>
          </div>
          {/* <div className='w-[95%] lg:w-[80%] mx-auto mt-20 text-base text-gray-700'>
              <>
                            <ul>
                  
                  <li>
                      1. Acceptance of Terms This Terms of Use Policy Agreement (“Agreement”) constitutes a legally binding agreement between you, the user, and Bazaar, the provider of the online marketplace and grocery service. By accessing or using the Bazaar platform, you agree to be bound by the terms and conditions set forth in this Agreement. If you do not agree to these terms, you may not use our platform.
                  </li>
                  <li className='mt-5'>
                          2. Use of Platform You may use our platform only for lawful purposes and in accordance with this Agreement. You agree not to use our platform:
                          <ul className='list-disc pl-3 text-base'>
                              <li>&bull; In any way that violates any applicable federal, state, local, or international law or regulation.</li>
                              <li>&bull; For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content, asking for personally identifiable information, or otherwise.</li>
                              <li>&bull; To transmit, or procure the sending of, any advertising or promotional material, including any “junk mail,” “chain letter,” “spam,” or any other similar solicitation.</li>
                              <li>&bull; To engage in any other conduct that restricts or inhibits anyone’s use or enjoyment of the platform, or which, as determined by Bazaar, may harm Bazaar or users of the platform or expose them to liability.</li>
                              
                          </ul>
                  </li>
                  <li className='mt-5'>
                      3. User Accounts To use our platform, you must create an account. You agree to provide accurate and complete information when creating your account, and you agree to keep your account information up to date. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your account. You agree to accept responsibility for all activities that occur under your account or password.
                  </li>
                  <li className='mt-5'>
                      4. User Content Bazaar may, in its sole discretion, permit users to submit, upload, publish or otherwise make available content, including but not limited to text, photographs, videos, and audio (collectively, “User Content”). You retain all rights in, and are solely responsible for, the User Content you make available through the platform.
                  </li>
                  <li className='mt-5'>
                      5. By making any User Content available through the platform, you grant to Bazaar a non-exclusive, transferable, sub-licensable, royalty-free, worldwide license to use, copy, modify, create derivative works based on, distribute, publicly display, publicly perform, and otherwise exploit such User Content in connection with the platform and Bazaar’s (and its successors’ and affiliates’) business, including without limitation for promoting and redistributing part or all of the platform (and derivative works thereof) in any media formats and through any media channels.
                  </li>
                  <li className='mt-5'>
                     6. You understand that Bazaar does not guarantee any confidentiality with respect to any User Content. You should not submit User Content that you consider to be confidential or proprietary.
                  </li>
                  <li className='mt-5'>
                     7. Proprietary Rights The platform and its original content, features, and functionality are and will remain the exclusive property of Bazaar and its licensors. The platform is protected by copyright, trademark, and other laws of both Nigeria and foreign countries.
                  </li>
                  <li className='mt-5'>
                     8. Disclaimer of Warranties Bazaar provides the platform and services on an “as is” and “as available” basis. Your use of the platform and services is at your sole risk. To the fullest extent permitted by law, Bazaar makes no representations or warranties of any kind, express or implied, as to the operation of the platform or the information, content, materials, or products included on the platform.
                  </li>
                  
                  <li className='mt-5'>
                     9. Limitation of Liability Bazaar will not be liable for any damages of any kind arising from the use of the platform, including, but not limited to, direct, indirect, incidental, punitive, and consequential damages.
                  </li>
                  <li className='mt-5'>
                     10. Indemnification You agree to indemnify, defend, and hold harmless Bazaar, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys’ fees) arising out of your violation of this Agreement or your use of the platform.
                  </li>
                  <li className='mt-5'>
                    11. Governing Law This Agreement will be governed by the laws of the Federal Republic of Nigeria, without giving effect to any conflict of laws principles.
                  </li>
                  <li className='mt-5'>
                    12. Dispute Resolution Any dispute arising out of or in connection with this Agreement, including any question regarding its existence, validity, or termination, will be referred to and finally resolved by arbitration in accordance with the Nigerian Arbitration and Conciliation Act. The arbitration will be conducted by a single arbitrator and will take place in Lagos, Nigeria.
                  </li>
                  <li className='mt-5'>
                    13. Termination Bazaar reserves the right, in its sole discretion, to terminate your access to all or part of the platform, with or without notice and with or without cause.
                  </li>
                  <li className='mt-5'>
                    14. Changes to Agreement Bazaar reserves the right to modify this Agreement at any time. Your continued use of the platform following the posting of changes to this Agreement will mean you accept those changes.
                  </li>
                  <li className='mt-5'>
                    15. Delivery  Schedule: Bazaar delivers orders every day of the week, including weekends. Any changes to this delivery schedule will be communicated to you in advance.
                  </li>
                  <li className='mt-5'>
                   16. Entire Agreement This Agreement constitutes the entire agreement between you and Bazaar and governs your use of the platform, superseding any prior agreements between you and Bazaar.
                  </li>
                  <li className='mt-5'>
                   17. Contact Information If you have any questions about this Agreement, please contact us at hello@golemon.co
                  </li>
                  <li className='mt-5'>
                    18. Return and Refund Policy Bazaar aims to provide the highest quality products to our customers. If you are not satisfied with the products you receive, you may return them for a full refund within 7 days of delivery. To be eligible for a return, the products must be in the same condition as when you received them and in their original packaging. Bazaar will not accept any returns for perishable goods, such as food items. To initiate a return, please contact our customer support at afroartisans@gmail.com
                  </li>
                  <li className='mt-5'>
                    19. Payment GoLemon accepts payment via debit/credit card and bank transfer. All payments are processed through secure and trusted payment gateways. GoLemon does not store or have access to your payment information. By placing an order on our platform, you agree to pay the total amount due, including any applicable taxes and delivery fees.
                  </li>
                  <li className='mt-5'>
                    20. Refunds In the event of a return, the refund will be processed within 7-10 business days after we have received the returned products. Refunds will be credited to the original method of payment.
                  </li>
                  <li className='mt-5'>
                    21. Chargebacks Bazaar reserves the right to dispute any chargeback claim made by a customer. If a customer initiates a chargeback, Bazaar may take legal action to recover the funds and any additional expenses incurred in the process.
                  </li>
                  <li className='mt-5'>
                    22. Price Changes Bazaar reserves the right to change prices of products at any time. Any changes to prices will be reflected on the platform and will not apply retroactively to orders that have already been placed.
                  </li>
                  
                  <li className='mt-5'>
                    23. Last updated on 20-06-2024
                  </li>
              </ul></>
          </div> */}
    </div>
  );
};

export default TermsOfUsePage;
