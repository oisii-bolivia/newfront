import * as context from "next/headers";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";
import { auth } from "../../../../../lib/auth/lucia";
import { LuciaError } from "lucia";

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const email = body.email;
  const username = body.name;
  const password = body.password;
  console.log(email, username, password);

  if (
    typeof password !== "string" ||
    password.length < 6 ||
    password.length > 255
  ) {
    return NextResponse.json(
      {
        error: "Invalid password",
      },
      {
        status: 400,
      }
    );
  }
  try {
    const user = await auth.createUser({
      key: {
        providerId: "email",
        providerUserId: email,
        password,
      },
      attributes: {
        username,
        email,
      },
    });
    const session = await auth.createSession({
      userId: user.userId,
      attributes: {},
    });
    const authRequest = auth.handleRequest(request.method, context);
    authRequest.setSession(session);
    return new Response(null, {
      status: 200,
    });
  } catch (e) {
    if (e instanceof LuciaError && e.message === "AUTH_DUPLICATE_KEY_ID") {
      return NextResponse.json(
        {
          error: "email already taken",
        },
        {
          status: 400,
        }
      );
    }

    return NextResponse.json(
      {
        error: "An unknown error occurred",
      },
      {
        status: 500,
      }
    );
  }
};
