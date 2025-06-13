"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  EyeIcon,
  ArrowTopRightOnSquareIcon,
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PlayIcon,
  FilmIcon,
} from "@heroicons/react/24/outline"
import Image from "next/image"

const imageDimensions = {
  1: {
    cover: { width: 1654, height: 1166 },
    gallery: {
      0: { width: 1654, height: 1166 },
      1: { width: 1654, height: 1166 },
      2: { width: 1654, height: 1166 },
      3: { width: 1654, height: 1166 },
      4: { width: 1654, height: 1166 },
      5: { width: 1654, height: 1166 },
      6: { width: 1654, height: 1166 },
      7: { width: 1654, height: 1166 },
    },
  },
  2: {
    cover: { width: 1241, height: 1754 },
    gallery: {
      0: { width: 1241, height: 1754 },
      1: { width: 3417, height: 1500 },
      2: { width: 2709, height: 625 },
      3: { width: 1200, height: 800 },
    },
  },
  3: {
    cover: { width: 800, height: 600 },
    gallery: {},
  },
  4: {
    cover: { width: 600, height: 800 },
  },
}

const getImageDimensions = (projectId: number, type: "cover" | "gallery", galleryIndex?: number) => {
  const projectDimensions = imageDimensions[projectId as keyof typeof imageDimensions]

  if (!projectDimensions) {
    return { width: 800, height: 600 }
  }

  if (type === "cover") {
    return projectDimensions.cover || { width: 800, height: 600 }
  }

  if (type === "gallery" && galleryIndex !== undefined && projectDimensions.gallery) {
    return (
      projectDimensions.gallery[galleryIndex as keyof typeof projectDimensions.gallery] || { width: 800, height: 600 }
    )
  }

  return { width: 800, height: 600 }
}

const projects = [
  {
    id: 1,
    title: "Magazine Stad Kortrijk",
    description:
      "Een modern magazine design voor de stad Kortrijk met focus op lokale verhalen en community engagement.",
    coverImage: "/images/1.png",
    category: "Grafisch Ontwerp",
    tools: ["Adobe InDesign", "Photoshop"],
    type: "gallery",
    gallery: [
      "/images/1.png",
      "/images/2.png",
      "/images/3.png",
      "/images/4.png",
      "/images/5.png",
      "/images/6.png",
      "/images/7.png",
      "/images/8.png",
    ],
  },
  {
    id: 2,
    title: "Affiche G-Sport Kortrijk",
    description: "Dynamische poster voor G-Sport evenement met krachtige visuele impact en duidelijke informatie.",
    coverImage: "/images/9.jpg",
    category: "Grafisch Ontwerp",
    tools: ["Adobe Photoshop", "Illustrator", "InDesign"],
    type: "gallery",
    gallery: ["/images/9.jpg", "/images/10.jpg", "/images/11.jpg"],
  },
  {
    id: 3,
    title: "Video Rommelmarkt Kortrijk",
    description: "Promotionele video voor de rommelmarkt met levendige beelden en dynamische montage.",
    coverImage: "/placeholder.svg?height=800&width=600",
    category: "Videobewerking",
    tools: ["Adobe Premiere Pro", "After Effects"],
    type: "videoGallery",
    videoGallery: [
      {
        title: "Sinksen Kortrijk 2023",
        description: "",
        thumbnail: "/placeholder.svg?height=800&width=600",
        url: "/videos/1.mp4",
      },
      {
        title: "Sociale Media Video",
        description: "",
        thumbnail: "/placeholder.svg?height=800&width=600",
        url: "/videos/2.mp4",
      },
    ],
  },
  {
    id: 4,
    title: "Video Sponsor United Spurs",
    description: "Professionele sponsorvideo voor Spurs met hoogwaardige productiewaarden en storytelling.",
    coverImage: "/placeholder.svg?height=600&width=800",
    category: "Videobewerking",
    tools: ["Adobe Premiere Pro", "After Effects"],
    type: "videoGallery",
    videoGallery: [
      {
        title: "Video Sponsor United Spurs",
        description: "",
        thumbnail: "/placeholder.svg?height=600&width=800",
        url: "/videos/3.mp4",
      },
    ],
  },
  {
    id: 5,
    title: "Feestdagen Animaties",
    description: "Animatievideos voor sociale media account van United Spurs.",
    coverImage: "/placeholder.svg?height=600&width=800",
    category: "Videobewerking",
    tools: ["Adobe Premiere Pro", "After Effects"],
    type: "videoGallery",
    videoGallery: [
      {
        title: "Halloween Animatie",
        description: "",
        thumbnail: "/placeholder.svg?height=600&width=800",
        url: "/videos/4.mp4",
      },
      {
        title: "Pasen Animatie",
        description: "",
        thumbnail: "/placeholder.svg?height=600&width=800",
        url: "/videos/5.mp4",
      },
    ],
  },
  {
    id: 6,
    title: "Verjaardag Animatie",
    description: "Animatievideo voor verjaardag van United Spurs.",
    coverImage: "/placeholder.svg?height=600&width=800",
    category: "Videobewerking",
    tools: ["Adobe Premiere Pro", "After Effects"],
    type: "videoGallery",
    videoGallery: [
      {
        title: "Verjaardag Animatie",
        description: "",
        thumbnail: "/placeholder.svg?height=600&width=800",
        url: "/videos/6.mp4",
      },
    ],
  },
]

const categories = ["Alle", "Grafisch Ontwerp", "Videobewerking"]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
  exit: {
    opacity: 0,
    y: -30,
    scale: 0.9,
    transition: {
      duration: 0.3,
    },
  },
}

export default function PortfolioGrid() {
  const [filter, setFilter] = useState("Alle")
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  const filteredProjects = filter === "Alle" ? projects : projects.filter((project) => project.category === filter)

  const openProject = (project: (typeof projects)[0]) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
    setCurrentVideoIndex(0)

    document.documentElement.style.overflow = "hidden"
    document.body.style.overflow = "hidden"
    document.body.style.top = `-${window.scrollY}px`
    document.body.style.width = "100%"
  }

  const closeProject = () => {
    const scrollY = document.body.style.top
    document.documentElement.style.overflow = ""
    document.body.style.overflow = ""
    document.body.style.top = ""
    document.body.style.width = ""

    if (scrollY) {
      window.scrollTo(0, Number.parseInt(scrollY || "0") * -1)
    }

    setSelectedProject(null)
    setCurrentImageIndex(0)
    setCurrentVideoIndex(0)
  }

  const nextImage = () => {
    if (selectedProject && selectedProject.type === "gallery" && selectedProject.gallery) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.gallery.length)
    }
  }

  const prevImage = () => {
    if (selectedProject && selectedProject.type === "gallery" && selectedProject.gallery) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.gallery.length) % selectedProject.gallery.length)
    }
  }

  const goToImage = (index: number) => {
    setCurrentImageIndex(index)
  }

  const nextVideo = () => {
    if (selectedProject && selectedProject.type === "videoGallery" && selectedProject.videoGallery) {
      setCurrentVideoIndex((prev) => (prev + 1) % selectedProject.videoGallery.length)
    }
  }

  const prevVideo = () => {
    if (selectedProject && selectedProject.type === "videoGallery" && selectedProject.videoGallery) {
      setCurrentVideoIndex(
        (prev) => (prev - 1 + selectedProject.videoGallery.length) % selectedProject.videoGallery.length,
      )
    }
  }

  const goToVideo = (index: number) => {
    setCurrentVideoIndex(index)
  }

  return (
    <>
      <section id="work" className="py-16 sm:py-24 lg:py-32 bg-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4">Mijn Portfolio</h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Een overzicht van mijn creatieve projecten en realisaties.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 sm:px-8 py-2 sm:py-3 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                  filter === category
                    ? "bg-primary text-white shadow-lg hover:shadow-xl"
                    : "bg-card text-foreground hover:bg-card/80 border border-border/50 hover:border-primary/30"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => {
                const coverDimensions = getImageDimensions(project.id, "cover")

                return (
                  <motion.div
                    key={project.id}
                    layout
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="group bg-card rounded-2xl shadow-lg overflow-hidden transition-all duration-500 border border-border/50 hover:border-primary/30 hover:shadow-2xl cursor-pointer flex flex-col"
                    onClick={() => openProject(project)}
                  >
                    <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                      {project.type === "video" || project.type === "videoGallery" ? (
                        <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5"></div>
                          <div className="relative z-10 text-center">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto group-hover:bg-white/30 transition-colors duration-300">
                              {project.type === "videoGallery" ? (
                                <FilmIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                              ) : (
                                <PlayIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1" />
                              )}
                            </div>
                            <p className="text-white/80 text-xs sm:text-sm font-medium">{project.category}</p>
                            {project.type === "videoGallery" && (
                              <p className="text-white/60 text-xs mt-1">
                                {project.videoGallery?.length}{" "}
                                {project.videoGallery?.length === 1 ? "video" : "video's"}
                              </p>
                            )}
                          </div>
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                        </div>
                      ) : (
                        <Image
                          src={project.coverImage || "/placeholder.svg"}
                          alt={project.title}
                          width={coverDimensions.width}
                          height={coverDimensions.height}
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                        />
                      )}

                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center p-4 sm:p-6"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <motion.button
                          className="bg-white/20 backdrop-blur-sm text-white px-3 sm:px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-white/30 transition-colors text-xs sm:text-sm"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <EyeIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                          {project.type === "gallery"
                            ? "Bekijk Galerij"
                            : project.type === "videoGallery"
                              ? `Bekijk ${project.videoGallery?.length === 1 ? "Video" : "Video's"}`
                              : "Bekijk Video"}
                          <ArrowTopRightOnSquareIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                        </motion.button>
                      </motion.div>
                    </div>
                    <div className="p-4 sm:p-6 flex flex-col flex-1">
                      <div className="text-xs sm:text-sm font-medium text-primary mb-2">{project.category}</div>
                      <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1 sm:gap-2 mt-auto">
                        {project.tools.map((tool, toolIndex) => (
                          <span
                            key={toolIndex}
                            className="text-xs bg-primary/10 text-primary px-2 sm:px-3 py-1 rounded-full border border-primary/20"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
          <div className="h-[2px] bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
        </div>
      </section>

      {/* Modal - Mobile Optimized */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProject}
          >
            <motion.div
              className="bg-background rounded-2xl overflow-hidden shadow-2xl w-full max-w-5xl max-h-[95vh] flex flex-col"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-3 sm:p-4 border-b border-border/50 flex-shrink-0">
                <div className="min-w-0 flex-1 mr-4">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground truncate">{selectedProject.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{selectedProject.category}</p>
                </div>
                <motion.button
                  onClick={closeProject}
                  className="p-2 hover:bg-muted rounded-lg transition-colors flex-shrink-0"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <XMarkIcon className="w-5 h-5 text-foreground" />
                </motion.button>
              </div>

              <div className="flex-1 overflow-y-auto p-3 sm:p-4">
                {selectedProject.type === "gallery" && selectedProject.gallery && selectedProject.gallery.length > 0 ? (
                  <div className="space-y-3 sm:space-y-4">
                    <div className="relative">
                      {(() => {
                        const galleryDimensions = getImageDimensions(selectedProject.id, "gallery", currentImageIndex)
                        const aspectRatio = galleryDimensions.width / galleryDimensions.height

                        return (
                          <div
                            className="bg-gray-100 rounded-lg overflow-hidden mx-auto"
                            style={{
                              aspectRatio: aspectRatio,
                              maxWidth: "100%",
                              maxHeight: "60vh",
                            }}
                          >
                            <Image
                              src={selectedProject.gallery[currentImageIndex] || "/placeholder.svg"}
                              alt={`${selectedProject.title} - Afbeelding ${currentImageIndex + 1}`}
                              width={galleryDimensions.width}
                              height={galleryDimensions.height}
                              className="w-full h-full object-contain rounded-lg"
                            />
                          </div>
                        )
                      })()}

                      {selectedProject.gallery.length > 1 && (
                        <>
                          <button
                            onClick={prevImage}
                            className="absolute left-1 sm:left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 sm:p-2 rounded-full transition-colors"
                          >
                            <ChevronLeftIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                          </button>
                          <button
                            onClick={nextImage}
                            className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 sm:p-2 rounded-full transition-colors"
                          >
                            <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                          </button>
                        </>
                      )}

                      <div className="absolute bottom-1 sm:bottom-2 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
                        {currentImageIndex + 1} / {selectedProject.gallery.length}
                      </div>
                    </div>

                    {selectedProject.gallery.length > 1 && (
                      <div className="flex gap-1 sm:gap-2 overflow-x-auto pb-2 px-1">
                        {selectedProject.gallery.map((image, index) => {
                          const thumbDimensions = getImageDimensions(selectedProject.id, "gallery", index)

                          return (
                            <button
                              key={index}
                              onClick={() => goToImage(index)}
                              className={`flex-shrink-0 w-12 h-9 sm:w-16 sm:h-12 rounded-lg overflow-hidden border-2 transition-all ${
                                index === currentImageIndex
                                  ? "border-primary shadow-lg"
                                  : "border-border/50 hover:border-primary/50"
                              }`}
                            >
                              <Image
                                src={image || "/placeholder.svg"}
                                alt={`Thumbnail ${index + 1}`}
                                width={thumbDimensions.width}
                                height={thumbDimensions.height}
                                className="w-full h-full object-cover"
                              />
                            </button>
                          )
                        })}
                      </div>
                    )}

                    <div className="pt-3 sm:pt-4 border-t border-border/50">
                      <p className="text-muted-foreground leading-relaxed mb-3 text-xs sm:text-sm">
                        {selectedProject.description}
                      </p>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {selectedProject.tools.map((tool, index) => (
                          <span
                            key={index}
                            className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full border border-primary/20"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : selectedProject.type === "videoGallery" && selectedProject.videoGallery ? (
                  <div className="space-y-3 sm:space-y-4">
                    <div className="relative">
                      <div className="aspect-video bg-black rounded-lg overflow-hidden max-h-[60vh] mx-auto">
                        <video
                          controls
                          className="w-full h-full object-contain"
                          poster={
                            selectedProject.videoGallery[currentVideoIndex]?.thumbnail ||
                            "/placeholder.svg?height=400&width=600"
                          }
                          key={selectedProject.videoGallery[currentVideoIndex]?.url}
                          autoPlay
                        >
                          <source src={selectedProject.videoGallery[currentVideoIndex]?.url} type="video/mp4" />
                          Je browser ondersteunt geen video.
                        </video>
                      </div>

                      {selectedProject.videoGallery.length > 1 && (
                        <>
                          <button
                            onClick={prevVideo}
                            className="absolute left-1 sm:left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 sm:p-2 rounded-full transition-colors"
                          >
                            <ChevronLeftIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                          </button>
                          <button
                            onClick={nextVideo}
                            className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 sm:p-2 rounded-full transition-colors"
                          >
                            <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                          </button>
                        </>
                      )}

                      <div className="absolute bottom-1 sm:bottom-2 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
                        {currentVideoIndex + 1} / {selectedProject.videoGallery.length}
                      </div>
                    </div>

                    <div className="pt-2">
                      <h4 className="font-semibold text-foreground text-sm sm:text-base">
                        {selectedProject.videoGallery[currentVideoIndex]?.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {selectedProject.videoGallery[currentVideoIndex]?.description}
                      </p>
                    </div>

                    {selectedProject.videoGallery.length > 1 && (
                      <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 px-1">
                        {selectedProject.videoGallery.map((video, index) => (
                          <button
                            key={index}
                            onClick={() => goToVideo(index)}
                            className={`flex-shrink-0 w-24 sm:w-32 rounded-lg overflow-hidden border-2 transition-all ${
                              index === currentVideoIndex
                                ? "border-primary shadow-lg"
                                : "border-border/50 hover:border-primary/50"
                            }`}
                          >
                            <div className="relative aspect-video">
                              <Image
                                src={video.thumbnail || "/placeholder.svg"}
                                alt={`Video ${index + 1}`}
                                width={320}
                                height={180}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                                <PlayIcon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                              </div>
                            </div>
                            <div className="p-1.5 sm:p-2 bg-card/80">
                              <p className="text-xs font-medium truncate">{video.title}</p>
                            </div>
                          </button>
                        ))}
                      </div>
                    )}

                    <div className="pt-3 sm:pt-4 border-t border-border/50">
                      <p className="text-muted-foreground leading-relaxed mb-3 text-xs sm:text-sm">
                        {selectedProject.description}
                      </p>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {selectedProject.tools.map((tool, index) => (
                          <span
                            key={index}
                            className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full border border-primary/20"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 sm:py-12">
                    <p className="text-muted-foreground text-sm">Geen content beschikbaar voor dit project.</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
