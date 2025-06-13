"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { ExternalLinkIcon } from "lucide-react"
import { LinkedinIcon } from "lucide-react"
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  PaperAirplaneIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline"
import { sendContactEmail } from "../actions/send-email"

const formSchema = z.object({
  name: z.string().min(2, { message: "Naam moet minstens 2 karakters bevatten." }),
  email: z.string().email({ message: "Voer een geldig e-mailadres in." }),
  message: z.string().min(10, { message: "Bericht moet minstens 10 karakters bevatten." }),
})

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error"; message: string } | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const formData = new FormData()
      formData.append("name", values.name)
      formData.append("email", values.email)
      formData.append("message", values.message)

      const result = await sendContactEmail(formData)

      if (result.success) {
        setSubmitStatus({ type: "success", message: result.message })
        form.reset()
      } else {
        setSubmitStatus({ type: "error", message: result.message })
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Er is een onverwachte fout opgetreden. Probeer het later opnieuw.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="bg-background py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Background orbs - smaller on mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -bottom-14 sm:-bottom-28 left-5 sm:left-10 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-br from-primary/16 to-blue-400/12 rounded-full blur-2xl sm:blur-3xl"
          animate={{
            scale: [1, 1.4, 1.1, 1],
            opacity: [0.12, 0.32, 0.2, 0.12],
            x: [0, 20, -5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-18 sm:-bottom-36 right-8 sm:right-16 w-36 h-36 sm:w-52 sm:h-52 bg-gradient-to-br from-green-400/14 to-primary/18 rounded-full blur-2xl sm:blur-3xl"
          animate={{
            scale: [1.1, 1, 1.3, 1.1],
            opacity: [0.1, 0.28, 0.16, 0.1],
            y: [0, -15, -8, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 3,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4">Neem Contact Op</h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Heb je een project in gedachten of wil je gewoon een praatje maken? Ik hoor graag van je!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8">Contact Informatie</h3>

            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              <motion.div
                className="flex items-center gap-3 sm:gap-4 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-2 sm:p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                  <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-muted-foreground">Telefoon</p>
                  <p className="text-foreground font-medium text-sm sm:text-base">+32 468 211 449</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-3 sm:gap-4 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-2 sm:p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                  <EnvelopeIcon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>

                <a
                  href="mailto:dekeerle.luka2005@gmail.com"
                  className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors min-w-0 flex-1"
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm text-muted-foreground">E-mail</p>
                    <p className="text-foreground font-medium text-sm sm:text-base truncate">
                      dekeerle.luka2005@gmail.com
                    </p>
                  </div>
                  <ExternalLinkIcon className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                </a>
              </motion.div>

              <motion.div
                className="flex items-center gap-3 sm:gap-4 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-2 sm:p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                  <MapPinIcon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-muted-foreground">Locatie</p>
                  <p className="text-foreground font-medium text-sm sm:text-base">Kortrijk, België</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-3 sm:gap-4 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-2 sm:p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                  <LinkedinIcon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>

                <a
                  href="https://www.linkedin.com/in/luka-dekeerle-412b7334b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors min-w-0 flex-1"
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm text-muted-foreground">LinkedIn</p>
                    <p className="text-foreground font-medium text-sm sm:text-base">Luka Dekeerle</p>
                  </div>
                  <LinkedinIcon className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                </a>
              </motion.div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-4 sm:p-6 rounded-2xl border border-primary/20">
              <h4 className="font-semibold text-foreground mb-2 sm:mb-3 text-sm sm:text-base">Beschikbaarheid</h4>
              <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm">
                Ik ben beschikbaar voor projecten, stages en samenwerkingen. Neem gerust contact op om de mogelijkheden
                te bespreken!
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 lg:order-2"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8">Stuur een Bericht</h3>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm sm:text-base">Naam *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Je naam"
                          {...field}
                          className="rounded-xl border-border/50 focus:border-primary text-sm sm:text-base h-10 sm:h-12"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm sm:text-base">E-mail *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="je@email.com"
                          {...field}
                          className="rounded-xl border-border/50 focus:border-primary text-sm sm:text-base h-10 sm:h-12"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm sm:text-base">Bericht *</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Vertel me over je project of vraag..."
                          className="min-h-[100px] sm:min-h-[120px] rounded-xl border-border/50 focus:border-primary resize-none text-sm sm:text-base"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Status Message */}
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center gap-2 p-3 rounded-xl ${
                      submitStatus.type === "success"
                        ? "bg-green-50 text-green-700 border border-green-200"
                        : "bg-red-50 text-red-700 border border-red-200"
                    }`}
                  >
                    {submitStatus.type === "success" ? (
                      <CheckCircleIcon className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <XCircleIcon className="w-5 h-5 flex-shrink-0" />
                    )}
                    <p className="text-sm">{submitStatus.message}</p>
                  </motion.div>
                )}

                <Button
                  type="submit"
                  className="w-full rounded-xl bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg inline-flex items-center gap-2 py-3 sm:py-3.5 text-sm sm:text-base font-medium h-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Versturen...
                    </>
                  ) : (
                    <>
                      <PaperAirplaneIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                      Verstuur Bericht
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
