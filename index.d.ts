/// <reference types="lucia" />
declare global {
  namespace App {
    interface Locals {
      auth: import("lucia").AuthRequest;
    }
  }
}

/// <reference types="lucia" />
declare namespace Lucia {
  type Auth = import("./lib/auth/lucia").Auth;
  type DatabaseUserAttributes = {
    username: string;
    email: string;
  };
  type DatabaseSessionAttributes = {};
}
