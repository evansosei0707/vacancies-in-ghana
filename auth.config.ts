import github from "next-auth/providers/github";
import linkedIn from "next-auth/providers/linkedin"

import type { NextAuthConfig } from "next-auth";

export default {
    providers: [github, linkedIn],
} satisfies NextAuthConfig