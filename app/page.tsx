"use client"

import type React from "react"
import Image from "next/image"
import { useState } from "react"

export default function App() {
  // Quiz state management
  const [quizStep, setQuizStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [email, setEmail] = useState("")
  const [showResult, setShowResult] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [showDetailedServices, setShowDetailedServices] = useState(false)
  const [showConsultationModal, setShowConsultationModal] = useState(false)
  const [showQuoteModal, setShowQuoteModal] = useState(false)
  const [showScheduleModal, setShowScheduleModal] = useState(false)

  const quizQuestions = [
    {
      question: "Do you have a digital survey plan for your property?",
      options: ["Yes", "No", "Not sure"],
      painPoint: "Lack of modern survey data leads to disputes.",
    },
    {
      question: "How long did your last land registration process take?",
      options: ["Less than 6 months", "6 months to 2 years", "Over 2 years", "Never registered"],
      painPoint: "Delays in registration cause financial losses.",
    },
    {
      question: "Have you faced boundary disputes with neighbors?",
      options: ["Yes, unresolved", "Yes, resolved", "No", "Not applicable"],
      painPoint: "70% of property issues in Nigeria stem from boundary disputes.",
    },
    {
      question: "Are you aware of modern surveying tools like GIS or drones?",
      options: ["Yes, I use them", "Heard of them but don't use", "Not aware"],
      painPoint: "Low tech adoption hinders efficiency.",
    },
    {
      question: "Have you encountered demands for unofficial fees during land processes?",
      options: ["Yes, often", "Yes, once", "No"],
      painPoint: "Corruption erodes trust in land administration.",
    },
  ]

  const handleAnswer = (questionIndex: number, answer: string) => {
    setAnswers({ ...answers, [questionIndex]: answer })
    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1)
    } else {
      setShowResult(true)
    }
  }

  const calculateRiskScore = () => {
    let score = 0
    if (answers[0] !== "Yes") score += 20 // No digital survey
    if (answers[1] === "Over 2 years" || answers[1] === "Never registered") score += 20 // Long delays
    if (answers[2] === "Yes, unresolved") score += 20 // Unresolved disputes
    if (answers[3] !== "Yes, I use them") score += 20 // Low tech awareness
    if (answers[4] !== "No") score += 20 // Corruption exposure
    return score
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate lead capture (integrate with Mailchimp API in production)
    console.log("Lead captured:", { email, answers, riskScore: calculateRiskScore() })
    setSubmitted(true)
  }

  const handleConsultationClick = () => {
    setShowConsultationModal(true)
  }

  const handleQuoteClick = () => {
    setShowQuoteModal(true)
  }

  const handleEmailContact = () => {
    window.location.href =
      "mailto:chevalmappingconsult@gmail.com?subject=Free Consultation Request&body=Hello, I would like to schedule a free consultation for surveying services."
  }

  const handleSMSContact = () => {
    window.location.href =
      "sms:+234-916-917-7955?body=Hello, I would like to schedule a free consultation for surveying services."
  }

  const handleWhatsAppContact = () => {
    window.open(
      "https://wa.me/2349169179550?text=Hello, I would like to schedule a free consultation for surveying services.",
      "_blank",
    )
  }

  const handleQuoteEmailContact = () => {
    window.location.href =
      "mailto:chevalmappingconsult@gmail.com?subject=Quote Request&body=Hello, I would like to request a quote for surveying services."
  }

  const handleQuoteSMSContact = () => {
    window.location.href = "sms:+234-916-917-7955?body=Hello, I would like to request a quote for surveying services."
  }

  const handleQuoteWhatsAppContact = () => {
    window.open(
      "https://wa.me/2349169179550?text=Hello, I would like to request a quote for surveying services.",
      "_blank",
    )
  }

  const handleScheduleClick = () => {
    setShowScheduleModal(true)
  }

  const handleCalendlySchedule = () => {
    window.open("https://calendly.com/chevalmappingconsult/consultation", "_blank")
  }

  const handleScheduleWhatsAppContact = () => {
    window.open(
      "https://wa.me/2349169179550?text=Hello, I would like to schedule a consultation for surveying services.",
      "_blank",
    )
  }

  const handleCalComSchedule = () => {
    window.open("https://cal.com/remi-osoba/consultation", "_blank")
  }

  const handleGoogleCalendar = () => {
    const startDate = new Date()
    startDate.setDate(startDate.getDate() + 1) // Tomorrow
    startDate.setHours(10, 0, 0, 0) // 10 AM

    const endDate = new Date(startDate)
    endDate.setHours(11, 0, 0, 0) // 11 AM (1 hour duration)

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Surveying Consultation - Che-val Mapping Consult&dates=${startDate.toISOString().replace(/[-:]/g, "").split(".")[0]}Z/${endDate.toISOString().replace(/[-:]/g, "").split(".")[0]}Z&details=Free consultation with Che-val Mapping Consult regarding surveying services. Please contact chevalmappingconsult@gmail.com or +234-916-917-7955 to confirm.&location=Virtual Meeting&sf=true&output=xml`

    window.open(googleCalendarUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 to-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-white text-green-900 py-6 border-b-8 border-green-600">
        <div className="flex flex-col items-center justify-center gap-4 px-4">
          <Image
            src="/images/logo-n-large.jpg"
            alt="Che-val Mapping Consult Logo"
            width={280}
            height={280}
            className="object-contain"
            priority
          />
          <div className="text-center">
            <p className="text-xl font-medium">Precision Surveying for Nigeria's Future</p>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold text-green-900 mb-4">
              Professional Land Survey Services in Lagos, Nigeria
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Using state-of-the-art surveying equipment and cutting-edge technology, we deliver precise measurements
              and accurate mapping solutions for all your land surveying needs across Lagos and Nigeria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleConsultationClick}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                Get Free Consultation
              </button>
              <button
                onClick={() => setShowDetailedServices(!showDetailedServices)}
                className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-50 transition-colors"
              >
                {showDetailedServices ? "Hide Services" : "View Our Services"}
              </button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <Image
              src="/images/surveying-equipment.jpg"
              alt="Professional surveying equipment - total station on tripod at construction site"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {showConsultationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold text-green-900 mb-4">Get Free Consultation</h3>
            <p className="text-gray-700 mb-6">Choose how you'd like to contact us for your free consultation:</p>

            <div className="space-y-4">
              <button
                onClick={handleEmailContact}
                className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Email: chevalmappingconsult@gmail.com
              </button>

              <button
                onClick={handleWhatsAppContact}
                className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp: +234 916 917 9550
              </button>

              <button
                onClick={() => setShowConsultationModal(false)}
                className="w-full border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {showQuoteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold text-green-900 mb-4">Request Quote</h3>
            <p className="text-gray-700 mb-6">Choose how you'd like to contact us for your quote request:</p>

            <div className="space-y-4">
              <button
                onClick={handleQuoteEmailContact}
                className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Email: chevalmappingconsult@gmail.com
              </button>

              <button
                onClick={handleQuoteWhatsAppContact}
                className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp: +234 916 917 9550
              </button>

              <button
                onClick={() => setShowQuoteModal(false)}
                className="w-full border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {showScheduleModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold text-green-900 mb-4">Schedule Consultation</h3>
            <p className="text-gray-700 mb-6">Choose your preferred scheduling method:</p>

            <div className="space-y-4">
              <button
                onClick={handleCalendlySchedule}
                className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Schedule with Calendly
              </button>

              <button
                onClick={handleScheduleWhatsAppContact}
                className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Chat on WhatsApp: +234 916 917 9550
              </button>

              <button
                onClick={() => setShowScheduleModal(false)}
                className="w-full border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {showDetailedServices && (
        <section className="py-16 px-4 bg-white border-t-4 border-green-600">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-green-900 mb-4">Our Surveying Services - Complete Details</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                We provide professional surveying and geospatial solutions designed to support property ownership,
                infrastructure development, and sustainable land use using state-of-the-art technology and industry best
                practices.
              </p>
            </div>

            <div className="space-y-12">
              {/* Land & Property Surveys */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-green-900 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                    1
                  </span>
                  Land & Property Surveys
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Boundary & Cadastral Surveys</h4>
                    <p className="text-gray-600 mb-4">
                      Accurate determination and demarcation of property boundaries for title documentation, land
                      registration, and legal purposes. Ensures clarity in land ownership and dispute resolution.
                    </p>
                    <p className="text-gray-600">
                      Determination and demarcation of property boundaries for title documentation, land registration,
                      and ownership verification. Ensures legal compliance and minimizes boundary disputes.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Topographic Surveys</h4>
                    <p className="text-gray-600 mb-4">
                      Detailed mapping of natural and man-made features of the terrain, providing essential data for
                      architectural design, urban planning, infrastructure development, and environmental management.
                    </p>
                    <p className="text-gray-600">
                      High-precision mapping of terrain features—both natural and built—to provide essential data for
                      architectural design, housing, infrastructure, and community planning.
                    </p>
                  </div>
                </div>
              </div>

              {/* Engineering & Construction Surveys */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-green-900 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                    2
                  </span>
                  Engineering & Construction Surveys
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Construction / Engineering Surveys</h4>
                    <p className="text-gray-600">
                      Precision setting-out of design structures on the ground, including layout, alignments,
                      elevations, and control points to guide contractors during construction and ensure designs are
                      built as planned. Precision setting-out of design structures on-site, including layout,
                      alignments, elevations, and control points to ensure construction accuracy.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Site Planning & Environmental Analysis</h4>
                    <p className="text-gray-600">
                      In-depth site investigations and feasibility studies, including environmental impact assessments,
                      drainage analysis, and suitability evaluations to support informed project decision-making.
                      Comprehensive site evaluations including feasibility studies, drainage analysis, and environmental
                      impact assessments to guide sustainable development decisions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Land Development & Planning Support */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-green-900 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                    3
                  </span>
                  Land Development & Planning Support
                </h3>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Land Planning & Development Support</h4>
                  <p className="text-gray-600 mb-4">
                    Professional assistance in land-use planning, subdivision design, zoning compliance, and development
                    feasibility to optimize land potential and support sustainable growth.
                  </p>
                  <p className="text-gray-600">
                    Professional guidance in land-use planning, subdivision layout, and zoning compliance, enabling
                    optimized land utilization and streamlined development approvals.
                  </p>
                </div>
              </div>

              {/* Geospatial & Control Surveys */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-green-900 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                    4
                  </span>
                  Geospatial, Remote Sensing & Control Surveys
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Geodetic & GPS Control Surveys</h4>
                    <p className="text-gray-600">
                      Establishment of highly accurate geospatial reference frameworks using GPS/GNSS and geodetic
                      techniques for mapping, infrastructure monitoring, and large-scale engineering projects.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Drone (UAV) Surveys</h4>
                    <p className="text-gray-600">
                      Use of Unmanned Aerial Vehicles (drones) equipped with high-resolution cameras, LiDAR, and
                      photogrammetry software to capture detailed aerial imagery and 3D models. Provides fast,
                      cost-effective, and accurate mapping for land development, construction monitoring, agriculture,
                      and environmental studies.
                    </p>
                  </div>
                </div>
              </div>

              {/* Water & Environmental Surveys */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-green-900 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                    5
                  </span>
                  Water & Environmental Surveys
                </h3>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Hydrographic & Bathymetric Surveys</h4>
                  <p className="text-gray-600">
                    Comprehensive measurement and mapping of water bodies—rivers, lakes, reservoirs, and coastal
                    zones—for navigation safety, marine engineering, dredging, and environmental studies. Detailed
                    measurement and mapping of rivers, lakes, reservoirs, and coastal areas for navigation, dredging,
                    marine construction, and environmental studies.
                  </p>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-green-900 text-white rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Why Choose Us</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Accuracy & Reliability</h4>
                    <p className="text-green-100">
                      We leverage advanced surveying instruments, GPS/GNSS systems, and geospatial software to ensure
                      dependable results.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Industry Expertise</h4>
                    <p className="text-green-100">
                      Our team combines technical know-how with practical field experience across multiple industries.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Client-Centered Approach</h4>
                    <p className="text-green-100">
                      We tailor every project to meet client objectives, regulatory standards, and sustainability goals.
                    </p>
                  </div>
                </div>
              </div>

              {/* Closing Statement */}
              <div className="text-center bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-green-900 mb-4">Our Commitment</h3>
                <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                  At the core of our work is a commitment to precision, innovation, and client satisfaction. Whether for
                  property ownership, infrastructure development, or environmental management, we provide the insights
                  and data that help you build with confidence.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
                  Request Quote
                </button>
                <button
                  onClick={handleScheduleClick}
                  className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors font-semibold"
                >
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Mission Section */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">Our Mission</h2>
        <p className="text-lg text-center">
          At Che-val Mapping Consult, our mission is to deliver precise, accurate, reliable, and innovative land survey
          services in Lagos and across Nigeria. We use cutting-edge technologies that surpass client expectations while
          upholding the highest standards of professionalism and integrity, addressing land disputes, streamlining
          processes, and promoting efficient land management in Nigeria's evolving landscape.
        </p>
      </section>

      {/* Vision Section */}
      <section className="py-12 px-4 bg-white max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">Our Vision</h2>
        <p className="text-lg text-center">
          To become the leading provider of land survey services in Lagos, Nigeria and beyond, serving high-end clients
          and underserved communities alike in resolving land matters. We aim to empower communities, foster sustainable
          development, and drive economic growth through reliable, innovative, and environmentally conscious surveying
          practices.
        </p>
      </section>

      {/* Core Values Section */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">Our Core Values</h2>
        <ul className="list-disc list-inside space-y-4 text-lg">
          <li>
            <strong>Accuracy and Precision:</strong> Delivering high-quality, error-free survey data and results for
            land survey services in Lagos to minimize disputes and ensure reliable land management.
          </li>
          <li>
            <strong>Integrity and Professionalism:</strong> Upholding ethical standards, honesty, and professionalism in
            every interaction and deliverable to combat corruption and build trust.
          </li>
          <li>
            <strong>Innovation and Excellence:</strong> Adopting advanced technologies, methods, and best practices to
            overcome outdated systems and achieve superior outcomes.
          </li>
          <li>
            <strong>Customer Focus:</strong> Prioritizing client needs, satisfaction, and success across all business
            aspects, including timely service to reduce delays.
          </li>
          <li>
            <strong>Collaboration and Teamwork:</strong> Fostering open communication and teamwork to achieve shared
            goals, addressing silos and unhealthy competition in the industry.
          </li>
          <li>
            <strong>Safety and Responsibility:</strong> Ensuring the well-being of employees, clients, equipment, and
            the environment in all operations.
          </li>
          <li>
            <strong>Continuous Education:</strong> Investing in ongoing training to keep pace with technological
            advancements and bridge skill gaps in surveying.
          </li>
          <li>
            <strong>Transparency and Accountability:</strong> Promoting openness in processes and holding ourselves
            accountable to enhance public confidence and streamline administration.
          </li>
        </ul>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-900 mb-4">Our Land Survey Services in Lagos</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We provide professional land survey services in Lagos and geospatial solutions designed to support
              property ownership, infrastructure development, and sustainable land use using state-of-the-art technology
              and industry best practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Land & Property Surveys */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.6 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-green-900">Land & Property Survey Services</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Boundary & Cadastral Surveys in Lagos</h4>
                  <p className="text-gray-600 text-sm">
                    Accurate determination and demarcation of property boundaries for title documentation, land
                    registration, and ownership verification in Lagos. Ensures legal compliance and minimizes boundary
                    disputes.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Topographic Surveys Lagos</h4>
                  <p className="text-gray-600 text-sm">
                    High-precision mapping of terrain features—both natural and built—to provide essential data for
                    architectural design, housing, infrastructure, and community planning in Lagos.
                  </p>
                </div>
              </div>
            </div>

            {/* Engineering & Construction Surveys */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-green-900">Engineering & Construction Survey Services</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Construction Surveys Lagos</h4>
                  <p className="text-gray-600 text-sm">
                    Precision setting-out of design structures on-site in Lagos, including layout, alignments,
                    elevations, and control points to ensure construction accuracy.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Site Planning & Environmental Analysis</h4>
                  <p className="text-gray-600 text-sm">
                    Comprehensive site evaluations in Lagos including feasibility studies, drainage analysis, and
                    environmental impact assessments to guide sustainable development decisions.
                  </p>
                </div>
              </div>
            </div>

            {/* Land Development & Planning */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-green-900">Land Development Support Lagos</h3>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Land Planning & Subdivision Design</h4>
                <p className="text-gray-600 text-sm">
                  Professional guidance in land-use planning, subdivision layout, and zoning compliance in Lagos,
                  enabling optimized land utilization and streamlined development approvals.
                </p>
              </div>
            </div>

            {/* Geospatial & Control Surveys */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 012 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-green-900">Geospatial & GPS Survey Services</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Geodetic & GPS Control Surveys</h4>
                  <p className="text-gray-600 text-sm">
                    Establishment of highly accurate geospatial reference frameworks using GPS/GNSS and geodetic
                    techniques for mapping, infrastructure monitoring, and large-scale engineering projects in Lagos.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Drone (UAV) Survey Services Lagos</h4>
                  <p className="text-gray-600 text-sm">
                    Use of Unmanned Aerial Vehicles (drones) equipped with high-resolution cameras, LiDAR, and
                    photogrammetry software to capture detailed aerial imagery and 3D models in Lagos. Provides fast,
                    cost-effective, and accurate mapping for land development, construction monitoring, agriculture, and
                    environmental studies.
                  </p>
                </div>
              </div>
            </div>

            {/* Water & Environmental Surveys */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-green-900">Water & Environmental Survey Services</h3>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Hydrographic & Bathymetric Surveys</h4>
                <p className="text-gray-600 text-sm">
                  Detailed measurement and mapping of rivers, lakes, reservoirs, and coastal areas in Lagos for
                  navigation, dredging, marine construction, and environmental studies.
                </p>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-green-900 text-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-700 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Why Choose Our Land Survey Services in Lagos</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-1">Accuracy & Reliability</h4>
                  <p className="text-green-100 text-sm">
                    Advanced surveying instruments, GPS/GNSS systems, and geospatial software ensure dependable results
                    for all land survey services in Lagos.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Industry Expertise</h4>
                  <p className="text-green-100 text-sm">
                    Our team combines technical know-how with practical field experience across multiple industries in
                    Lagos and Nigeria.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Client-Centered Approach</h4>
                  <p className="text-green-100 text-sm">
                    We tailor every land survey project in Lagos to meet client objectives, regulatory standards, and
                    sustainability goals.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 mb-6">
              At the core of our work is a commitment to precision, innovation, and client satisfaction. Whether for
              property ownership, infrastructure development, or environmental management in Lagos, we provide the
              insights and data that help you build with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleQuoteClick}
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
              >
                Request Quote
              </button>
              <button
                onClick={handleScheduleClick}
                className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors font-semibold"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-12 px-4 bg-white max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">Our Value Proposition</h2>
        <ul className="list-disc list-inside space-y-4 text-lg">
          <li>
            <strong>Trusted Partners for Tailored Solutions:</strong> We serve as reliable land survey partners in
            Lagos, offering innovative, cost-effective, and sustainable solutions customized to clients' unique needs,
            helping navigate Nigeria's complex land administration challenges.
          </li>
          <li>
            <strong>Reliable and Timely Services:</strong> Providing accurate, dependable, and prompt surveying services
            that enable informed decision-making, accelerate project timelines, and resolve land disputes efficiently.
          </li>
          <li>
            <strong>Expertise for Optimal Outcomes:</strong> Delivering precise data through expert solutions that
            mitigate risks, enhance project efficiency, and support sustainable development in construction,
            infrastructure, and urban planning.
          </li>
        </ul>
      </section>

      {/* Land Guardian Quest Section */}
      <section className="py-12 px-4 max-w-4xl mx-auto bg-green-50">
        <h2 className="text-3xl font-semibold text-center mb-6">Land Guardian Quest: Protect Your Property in Lagos</h2>
        <p className="text-lg text-center mb-8">
          Take our free interactive quiz to assess your land's risks and learn how to safeguard your property in Lagos
          and Nigeria's complex landscape!
        </p>

        {!showResult ? (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">{quizQuestions[quizStep].question}</h3>
            <p className="text-sm text-gray-600 mb-4">{quizQuestions[quizStep].painPoint}</p>
            <div className="space-y-2">
              {quizQuestions[quizStep].options.map((option, index) => (
                <button
                  key={index}
                  className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
                  onClick={() => handleAnswer(quizStep, option)}
                >
                  {option}
                </button>
              ))}
            </div>
            <p className="mt-4 text-sm">
              Question {quizStep + 1} of {quizQuestions.length}
            </p>
          </div>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            {!submitted ? (
              <>
                <h3 className="text-xl font-bold mb-4">Your Land Risk Score: {calculateRiskScore()}%</h3>
                <p className="mb-4">
                  Enter your email to receive a detailed report with tailored tips to protect your property!
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition-colors"
                  >
                    Get Full Report
                  </button>
                </form>
              </>
            ) : (
              <div>
                <h3 className="text-xl font-bold mb-4">Thank You!</h3>
                <p>
                  Your personalized Land Guardian Report has been sent to {email}. Check your inbox for expert tips to
                  secure your property!
                </p>
                <p className="mt-4">
                  Want to learn more?{" "}
                  <a href="#contact" className="text-green-600 underline hover:text-green-800">
                    Book a free consultation
                  </a>{" "}
                  with Che-val Mapping Consult.
                </p>
              </div>
            )}
          </div>
        )}
        <p className="mt-4 text-sm text-center text-gray-600">
          To integrate with Mailchimp, add your form action URL to the form tag. Sign up for a free Mailchimp account at
          mailchimp.com and follow their form integration guide.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-6 text-center">
        <p>&copy; 2025 Che-val Mapping Consult. All rights reserved.</p>
        <p id="contact">Contact us: chevalmappingconsult@gmail.com | +234-916-917-7955</p>
      </footer>
    </div>
  )
}
