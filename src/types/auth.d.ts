declare module 'next-auth' {
  interface Session {
    user: {
      id?: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      roles?: string[];
    };
    accessToken?: string;
  }

  interface User {
    id?: string;
    roles?: string[];
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken?: string;
    roles?: string[];
    userId?: string;
  }
}