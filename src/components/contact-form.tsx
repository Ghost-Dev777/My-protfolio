import { useState } from "react";
import { motion } from "motion/react";
import { Check } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const validate = () => {
    if (!values.name.trim()) return "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      return "Invalid email";
    if (values.message.trim().length < 10) return "Message too short";
    return "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate();
    if (err) return setError(err);

    setLoading(true);
    setError("");
    try {
      const res = await fetch("/send-mail.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError("Failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-start gap-4 rounded-xl border border-border bg-card p-8"
      >
        <span className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check className="size-6" />
        </span>
        <h2 className="text-2xl font-bold tracking-tight">Message sent</h2>
        <p className="text-pretty text-muted-foreground">
          Thanks, {values.name || "there"}. I&apos;ll get back to you at{" "}
          {values.email || "your email"} as soon as I can.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setValues({ name: "", email: "", message: "" });
          }}
          className="text-sm font-medium text-primary transition-transform hover:scale-105"
        >
          Send another →
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={values.name}
          onChange={(e) => setValues({ ...values, name: e.target.value })}
          className="rounded-lg border border-border bg-card px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
          placeholder="Your name"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          className="rounded-lg border border-border bg-card px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
          placeholder="you@example.com"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={values.message}
          onChange={(e) => setValues({ ...values, message: e.target.value })}
          className="resize-none rounded-lg border border-border bg-card px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
          placeholder="Tell me about your project..."
        />
      </div>
      <button
        type="submit"
        className="self-start rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
      >
        {loading ? 'Sending...' : 'Send message'}
      </button>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </form>
  );
}
