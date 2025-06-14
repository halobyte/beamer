import type { Metadata } from "next";

import { env } from "@/lib/env";
import {
  ListHeading,
  ListItem,
  ListSubheading,
  OrderedList,
  Paragraph,
  UnorderedList,
} from "../components";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Read about the acceptable usage of Beamer.",
  openGraph: {
    title: "Terms of Use",
    description: "Read about the acceptable usage of Beamer",
    url: new URL("/legal/terms-of-use", env.NEXT_PUBLIC_ORIGIN),
    images: [
      {
        alt: "Beamer's Terms of Service",
        width: 1200,
        height: 630,
        url: new URL("/images/og.png", env.NEXT_PUBLIC_ORIGIN),
      },
    ],
  },
};

export default function TermsOfUsePage() {
  return (
    <>
      <section>
        <h4 className="font-bold tracking-tight">
          Effective Date: May 11, 2025
        </h4>
      </section>

      <section className="flex flex-col gap-4">
        <ListHeading>Using Beamer Means Accepting these Terms</ListHeading>

        <div className="flex flex-col gap-6">
          <p>
            By accessing or using the Service, You are acknowledging that You
            have read and have agreed to these Terms, so please read them
            carefully. We may update these Terms from time to time. Unless
            otherwise required by law, We will notify You of such changes by
            posting the updated Terms to the Site and updating the “Effective”
            date above. We may also notify you by sending an email notification
            to the address associated with Your account or providing notice
            through the Service. Unless We say otherwise in our notice, the
            updated Terms will take effect from the “Effective” date above. Once
            any updated Terms are in effect, You will be bound by them if You
            continue to access or use the Service.
          </p>

          <p>
            In addition to these Terms, We may ask You to accept additional
            terms that apply to specific features, products or services. To the
            extent any additional terms conflict with these Terms, the
            additional terms govern with respect to Your access to or use of the
            applicable feature, product or service.
          </p>
        </div>
      </section>

      <section>
        <OrderedList>
          <ListItem>
            <ListHeading>Eligibilty</ListHeading>
            <p>
              You must be 18 years or older and capable of entering into a
              legally binding agreement.
            </p>
          </ListItem>

          <ListItem>
            <ListHeading>Account Responsibilities</ListHeading>
            <div>
              <Paragraph>You are responsible for:</Paragraph>
              <UnorderedList>
                <li>Keeping your credentials secure</li>
                <li>All activity conducted under your account</li>
                <li>
                  Ensuring your campaigns comply with applicable laws (e.g.,
                  CAN-SPAM, GDPR)
                </li>
              </UnorderedList>
            </div>
          </ListItem>

          <ListItem>
            <ListHeading>Acceptable Use</ListHeading>
            <div className="flex flex-col gap-6">
              <p>
                You will not use Beamer to do or promote anything illegal. You
                will not violate any applicable law, contract, intellectual
                property or other third-party right or commit a tort, and You
                are solely responsible for Your conduct while accessing or using
                the Service.
              </p>
              <div>
                <ListSubheading>
                  Email types that are not allowed on Beamer
                </ListSubheading>
                <UnorderedList>
                  <li>Emails offering to sell illegal goods or services </li>
                  <li>Emails that violate CAN-SPAM Laws</li>
                  <li>Pornography/sexually explicit content</li>
                  <li>Escort services</li>
                  <li>Gambling services or products</li>
                  <li>Multi-level marketing </li>
                  <li>Affiliate marketing</li>
                  <li>
                    Other emails that we find, in our sole discretion, hurt our
                    reputation or our deliverability
                  </li>
                </UnorderedList>
              </div>

              <div className="flex flex-col gap-2">
                <ListSubheading>Additional restrictions</ListSubheading>
                <div className="flex flex-col gap-2">
                  <p>
                    In addition to the content restrictions above, there are a
                    few other things we expect from our customers once you start
                    sending with Beamer, regardless of your industry:
                  </p>
                  <UnorderedList>
                    <li>
                      Your spam complaint rate must be lower than 1 in 800
                      emails (0.08%)
                    </li>
                    <li>
                      Your bounce rate has to be lower than 8% of all emails
                    </li>
                  </UnorderedList>
                </div>
              </div>
            </div>
          </ListItem>

          <ListItem>
            <ListHeading>Payment and Billing</ListHeading>
            <UnorderedList>
              <li>
                At the end of each billing period the plan contract will
                automatically renew indefinitely until explicitly cancelled by
                the User
              </li>
              <li>
                All cancellation requests will take effect at the end of
                then-current billing period in which the cancellation request is
                made, and You will be responsible for all fees and any
                applicable taxes and other charges rendered up through the
                cancellation date
              </li>
              <li>
                You will have the option to upgrade or downgrade Your
                subscription at any time, but if You elect to downgrade during a
                billing period, Your downgrade will not be effective until the
                end of the billing period, and You will still be charged for the
                entire billing period at the higher subscription plan
              </li>
              <li>
                Any customer who disputes a credit card payment that is found to
                be valid will be permanently banned from using the Service
              </li>
            </UnorderedList>
          </ListItem>

          <ListItem>
            <ListHeading>Suspension or Termination</ListHeading>
            <p>
              We reserve the right to suspend or terminate your account for
              violating these terms or if your usage poses risk to our
              infrastructure or reputation.
            </p>
          </ListItem>

          <ListItem>
            <ListHeading>Limitation of Liability</ListHeading>
            <div>
              <p>Beamer is provided as is. We are not liable for:</p>
              <UnorderedList>
                <li>Loss of data</li>
                <li>Lost profits</li>
                <li>Service interruptions</li>
              </UnorderedList>
            </div>
          </ListItem>

          <ListItem>
            <ListHeading>Modification</ListHeading>
            <p>
              We may update these Terms. Continued use after changes means you
              accept the new terms.
            </p>
          </ListItem>
        </OrderedList>
      </section>
    </>
  );
}
