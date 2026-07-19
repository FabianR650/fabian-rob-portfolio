"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const ContactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export default function ContactModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(ContactSchema),
  });

  async function onSubmit(data: z.infer<typeof ContactSchema>) {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      alert("Message sent!");
      reset();
      setOpen(false);
    }
  }

  // ESC closes modal
  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [open, setOpen]);

  // LOCK BODY SCROLL
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  if (!open) return null;

  return (
    <div
  className="fixed inset-0 z-[999] bg-black/40 backdrop-blur-sm flex items-start justify-center p-4 pointer-events-auto"
  onClick={() => setOpen(false)}
>
      <div
    className="relative pointer-events-auto overflow-y-auto w-[95vw] md:w-[90vw] max-w-5xl max-h-[85vh] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden animate-fadeIn animate-fadeOut"
    onClick={(e) => e.stopPropagation()}
  >
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="
            absolute top-4 right-4
            text-slate-600 dark:text-slate-300
            text-xl hover:text-red-500
            z-20
          "
        >
          ✕
        </button>

        {/* Split Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">

          {/* LEFT PANEL */}
          <div
            className="
              p-6 sm:p-10
              bg-gray-300 dark:bg-slate-800
              overflow-y-auto
              animate-slideInLeft
            "
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Let’s Connect
            </h2>

            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg mb-6">
              I'm Fabian, a frontend engineer based in Virginia.
              I build modern, clinical, recruiter‑ready web experiences with premium UI and animation fidelity.
              If you’d like to collaborate, discuss opportunities, or just say hello — I’d love to hear from you.
            </p>

            <div className="flex flex-wrap gap-3 mt-4">
              {["HTML", "CSS", "JS", "TS", "React", "Tailwind", "Framer", "Next.js"].map((tech) => (
                <span
                  key={tech}
                  className="
                    px-3 py-1 rounded-lg
                    bg-slate-500 dark:bg-slate-700
                    text-sm font-medium
                    text-slate-800 dark:text-slate-100
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div
            className="
              p-6 sm:p-10
              bg-white dark:bg-slate-900
              overflow-y-auto
              animate-slideInRight
            "
          >
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Name
                </label>
                <input
                  {...register("name")}
                  className="
                    w-full px-4 py-3 rounded-lg
                    bg-slate-300 dark:bg-slate-800
                    text-slate-900 dark:text-white
                    outline-none focus:ring-2 focus:ring-cyan-500
                  "
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Email
                </label>
                <input
                  {...register("email")}
                  className="
                    w-full px-4 py-3 rounded-lg
                    bg-slate-300 dark:bg-slate-800
                    text-slate-900 dark:text-white
                    outline-none focus:ring-2 focus:ring-cyan-500
                  "
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  {...register("message")}
                  className="
                    w-full px-4 py-3 rounded-lg
                    bg-slate-300 dark:bg-slate-800
                    text-slate-900 dark:text-white
                    outline-none focus:ring-2 focus:ring-cyan-500
                  "
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  mt-2 w-full py-3 rounded-lg
                  bg-cyan-600 hover:bg-cyan-700
                  text-white font-semibold
                  transition disabled:opacity-50
                "
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
