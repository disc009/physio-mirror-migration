import { useEffect, useState } from "react";

interface ObfuscatedEmailProps {
  email: string;
  className?: string;
}

export function ObfuscatedEmail({ email, className }: ObfuscatedEmailProps) {
  const [href, setHref] = useState<string>("#");
  const [text, setText] = useState<string>("");

  useEffect(() => {
    // Reconstruct the email client-side so it never appears as plain text in the HTML source
    const [localPart, domain] = email.split("@");
    const reconstructed = `${localPart}@${domain}`;
    setHref(`mailto:${reconstructed}`);
    setText(reconstructed);
  }, [email]);

  // Server-side / initial render: show obfuscated text that humans can read but bots won't harvest
  const obfuscated = email.replace("@", " (at) ").replace(".", " (dot) ");

  return (
    <a className={className} href={href}>
      {text || obfuscated}
    </a>
  );
}
