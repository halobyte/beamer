import type {
  DeletedObjectJSON,
  UserJSON,
  WebhookEvent,
} from "@clerk/nextjs/server";
import type { NextApiRequest, NextApiResponse } from "next";
import { verifyWebhook } from "@clerk/nextjs/webhooks";

import { eq } from "@beamer/db";
import { db } from "@beamer/db/client";
import { userTable } from "@beamer/db/schema";

export default async function handleRoute(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  let event: WebhookEvent;
  try {
    event = await verifyWebhook(req);
  } catch (err) {
    console.error(err);
    res.status(400).end();
    return;
  }

  switch (event.type) {
    case "user.created":
      await handleUserCreated(event.data, res);
      break;

    case "user.deleted":
      await handleUserDeleted(event.data, res);
  }
}

async function handleUserCreated(data: UserJSON, res: NextApiResponse) {
  const { first_name: firstName, last_name: lastName } = data;
  if (firstName === null || lastName === null) {
    res.status(401).end();
    return;
  }

  const { email_addresses, primary_email_address_id } = data;
  const emailAddress = email_addresses.find(
    (e) => e.id === primary_email_address_id,
  );
  if (!emailAddress) {
    res.status(401).end();
    return;
  }

  try {
    await db.insert(userTable).values({
      clerkId: data.id,
      email: emailAddress.email_address,
      firstName,
      lastName,
      picture: data.image_url,
    });
  } catch (err) {
    console.error(err);
    res.status(500).end();
    return;
  }
}

async function handleUserDeleted(
  data: DeletedObjectJSON,
  res: NextApiResponse,
) {
  const id = data.id;
  if (!id) {
    res.status(401).end();
    return;
  }

  try {
    await db.delete(userTable).where(eq(userTable.clerkId, id));
  } catch (err) {
    console.error(err);
    res.status(401).end();
  }
}
