import {
  ListHeading,
  ListItem,
  ListSubheading,
  OrderedList,
  UnorderedList,
} from "../components";

export default function PrivacyPage() {
  return (
    <>
      <section className="flex flex-col gap-2">
        <h4 className="font-bold tracking-tight">
          Effective Date: May 11, 2025
        </h4>
        <p>
          This Privacy Policy applies to the website (the “Site”), together with
          the Beamer web application and service (the “Service”), owned and
          operated by Halobyte Technologies (collectively, “Halobyte
          Technologies”, “we”, “us”, or “our”). This Privacy Policy explains how
          Halobyte Technologies collects, uses, and safeguards your information
          when you use our services through the Beamer platform.
        </p>
      </section>

      <section>
        <OrderedList>
          <ListItem>
            <ListHeading>Information We Collect</ListHeading>
            <div>
              <ListSubheading>Personal Information:</ListSubheading>
              <UnorderedList>
                <li>Name, email address, and contact details</li>
              </UnorderedList>
            </div>

            <div>
              <ListSubheading>Campaign Data:</ListSubheading>
              <UnorderedList>
                <li>Email lists (recipients, subject lines, body content)</li>
                <li>Metadata (open rates, bounce rates, etc.)</li>
              </UnorderedList>
            </div>

            <div>
              <ListSubheading>Technical Data:</ListSubheading>
              <UnorderedList>
                <li>IP addresses, browser type, access times</li>
                <li>Usage logs for analytics</li>
              </UnorderedList>
            </div>
          </ListItem>

          <ListItem>
            <ListHeading>How We Use Your Data</ListHeading>
            <div>
              <p>We use your data to:</p>
              <UnorderedList>
                <li>IP addresses, browser type, access times</li>
                <li>Usage logs for analytics</li>
              </UnorderedList>
            </div>
          </ListItem>

          <ListItem>
            <ListHeading>Data Sharing</ListHeading>
            <div>
              <p>We do not sell your data. However, we may share it with:</p>
              <UnorderedList>
                <li>Service providers (e.g., AWS SES, analytics tools)</li>
                <li>Law enforcement (if required by law or court order)</li>
                <li>
                  Authorized personnel within your organization (if applicable)
                </li>
              </UnorderedList>
            </div>
          </ListItem>

          <ListItem>
            <ListHeading>Your Rights</ListHeading>
            <div>
              <p>Depending on your jurisdiction, you may have rights to:</p>
              <UnorderedList>
                <li>Access your data</li>
                <li>Request deletion</li>
                <li>Correct inaccurate information</li>
                <li>Opt out of marketing communication</li>
              </UnorderedList>
            </div>
          </ListItem>

          <ListItem>
            <ListHeading>Data Retention</ListHeading>
            <p>
              We retain data as long as your account is active or as needed to
              comply with legal obligations.
            </p>
          </ListItem>

          <ListItem>
            <ListHeading>Changes</ListHeading>
            <p>
              We may update this policy. Users will be notified via email or
              dashboard notices.
            </p>
          </ListItem>
        </OrderedList>
      </section>
    </>
  );
}
