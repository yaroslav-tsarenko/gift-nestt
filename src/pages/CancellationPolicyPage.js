import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent from "../components/FrameComponent";
import "./CancellationPolicyPage.css";

const CancellationPolicyPage = () => {
  return (
    <div className="cancellationpolicypage">
      <FrameComponent3
        regionSelectorTextDecoration="none"
        userAccountTextDecoration="none"
      />
      <div className="cancellation-policy-parent">
        <h1 className="cancellation-policy">Cancellation Policy</h1>
        <div className="please-refer-to">{`Please refer to our Terms and Conditions for further details regarding the use and redemption of the Shoes & Wallet Gift Card.`}</div>
      </div>
      <main className="lilylamb-kids-we-us-or-parent">
        <div className="lilylamb-kids-we1">
          Welcome to GiftNest's Cancellation Policy page. This policy outlines
          the terms and conditions under which you may cancel your eSIM purchase
          or subscription with GiftNest. Our goal is to provide clarity and
          transparency regarding your rights and responsibilities when it comes
          to cancelling our services. Please read this policy carefully before
          making a purchase or subscription.
        </div>
        <div className="general-cancellation-policy-parent">
          <h1 className="general-cancellation-policy-container">
            <ol className="general-cancellation-policy">
              <li>General Cancellation Policy</li>
            </ol>
          </h1>
          <div className="frame-parent">
            <div className="eligibility-for-cancellation-parent">
              <h3 className="eligibility-for-cancellation">
                1.1 Eligibility for Cancellation
              </h3>
              <div className="you-may-cancel-container">
                <p className="you-may-cancel">
                  You may cancel your eSIM purchase or subscription under the
                  following conditions: 
                </p>
                <ul className="the-cancellation-request-is-ma">
                  <li className="the-cancellation-request">
                    The cancellation request is made within 14 days of the
                    purchase date.
                  </li>
                  <li className="the-esim-has">
                    The eSIM has not been activated or used.
                  </li>
                  <li>
                    You provide all necessary information and documentation to
                    support your cancellation request.
                  </li>
                </ul>
              </div>
            </div>
            <div className="non-cancellable-situations-parent">
              <h3 className="non-cancellable-situations">
                1.2 Non-Cancellable Situations
              </h3>
              <div className="cancellations-will-not-container">
                <p className="cancellations-will-not">
                  Cancellations will not be accepted in the following
                  situations: 
                </p>
                <ul className="the-esim-has-already-been-acti">
                  <li className="the-esim-has1">
                    The eSIM has already been activated or used.
                  </li>
                  <li className="the-cancellation-request1">
                    The cancellation request is made after 14 days from the
                    purchase date.
                  </li>
                  <li className="the-esim-plan">
                    The eSIM plan is a non-refundable, one-time use service.
                  </li>
                  <li>
                    You are attempting to cancel due to reasons not related to
                    the service provided by GiftNest.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="how-to-request-a-cancellation-parent">
          <h1 className="how-to-request-container">
            <ol className="how-to-request-a-cancellation">
              <li>How to Request a Cancellation</li>
            </ol>
          </h1>
          <div className="frame-group">
            <div className="contact-customer-support-parent">
              <h3 className="contact-customer-support">
                2.1 Contact Customer Support
              </h3>
              <div className="to-request-a-container">
                <p className="to-request-a">
                  To request a cancellation, contact our customer support team
                  at support@GiftNest.com or call +1-800-123-4567. Provide the
                  following information:
                </p>
                <p className="blank-line">&nbsp;</p>
                <p className="your-name-and">Your name and contact details</p>
                <p className="order-number-and">
                  Order number and purchase date
                </p>
                <p className="reason-for-the">
                  Reason for the cancellation request
                </p>
                <p className="any-supporting-documentation">
                  Any supporting documentation (e.g., proof of non-activation)
                </p>
              </div>
            </div>
            <div className="cancellation-request-review-parent">
              <h3 className="cancellation-request-review">
                2.2 Cancellation Request Review
              </h3>
              <div className="our-customer-support">
                Our customer support team will review your cancellation request
                within 5 business days. During this period, we may contact you
                for additional information or clarification. We aim to process
                all cancellation requests promptly and fairly.
              </div>
            </div>
          </div>
        </div>
        <FrameComponent2
          introduction="Cancellation Process"
          whatAreCookies="3.1 Approval of Cancellation"
          cookiesAreSmallTextFilesT="If your cancellation request is approved, we will notify you via email. Any applicable refunds will be processed according to our Refund Policy, using the original payment method within 7 business days. Please note that it may take additional time for the refund to appear on your bank or credit card statement, depending on your financial institution."
          whyWeUseCookies="3.2 Reversal of Activation"
          giftNestUsesCookiesToEnha="In cases where the eSIM was accidentally activated, you must contact customer support immediately. We will assess the situation and may reverse the activation if it was a genuine error and the eSIM was not used."
          giftNestUsesCookiesLineHeight="135%"
        />
        <FrameComponent2
          introduction="Subscription Cancellation"
          whatAreCookies="4.1 Subscription Services"
          cookiesAreSmallTextFilesT="If you have subscribed to a recurring eSIM service, you can cancel your subscription at any time through your GiftNest account settings or by contacting customer support. Subscription cancellations will take effect at the end of the current billing cycle, and you will not be charged for subsequent billing cycles."
          whyWeUseCookies="4.2 Partial Periods"
          giftNestUsesCookiesToEnha="For subscription services, we do not offer prorated refunds for partial billing periods. You will continue to have access to the service until the end of the current billing period following the cancellation request."
          giftNestUsesCookiesLineHeight="135%"
        />
        <FrameComponent2
          introduction="Special Circumstances"
          whatAreCookies="5.1 Technical Issues"
          cookiesAreSmallTextFilesT="If you experience technical issues with the eSIM service that prevent you from activating or using it, please contact our customer support team immediately. We will work with you to resolve the issue and may cancel the service if the problem cannot be fixed."
          whyWeUseCookies="5.2 Service Interruptions"
          giftNestUsesCookiesToEnha="While we strive to provide uninterrupted service, there may be occasions when the eSIM service is temporarily unavailable due to maintenance, upgrades, or unforeseen circumstances. In such cases, we do not offer cancellations or refunds for service interruptions beyond our control."
          giftNestUsesCookiesLineHeight="135%"
        />
        <FrameComponent2
          introduction="Legal Rights"
          whatAreCookies="6.1 Consumer Protection Laws"
          cookiesAreSmallTextFilesT="This Cancellation Policy does not affect your statutory rights under applicable consumer protection laws. If you are entitled to a cancellation by law, this policy will not limit your legal rights."
          whyWeUseCookies="6.2 Dispute Resolution"
          giftNestUsesCookiesToEnha="If you are not satisfied with our decision regarding a cancellation request, you may escalate the issue by contacting our customer support team. We are committed to resolving disputes amicably and fairly. If a resolution cannot be reached, you may seek assistance from relevant consumer protection authorities or pursue legal remedies."
          giftNestUsesCookiesLineHeight="135%"
        />
        <FrameComponent4 />
        <div className="contact-information-group">
          <h1 className="contact-information2">
            <ol className="contact-information3">
              <li>Contact Information</li>
            </ol>
          </h1>
          <div className="if-you-have-container1">
            <p className="if-you-have1">
              If you have any questions or concerns about this Cancellation
              Policy, please contact us at:
            </p>
            <p className="blank-line1">&nbsp;</p>
            <p className="giftnest-customer-support1">
              GiftNest Customer Support
            </p>
            <p className="email-supportgiftnestcom1">
              Email: support@GiftNest.com
            </p>
            <p className="phone-1-800-123-45671">Phone: +1-800-123-4567</p>
            <p className="address-123-main1">
              Address: 123 Main Street, Suite 456, City, Country, ZIP Code
            </p>
          </div>
        </div>
      </main>
      <FrameComponent />
    </div>
  );
};

export default CancellationPolicyPage;
