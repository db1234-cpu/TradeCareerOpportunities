// ─────────────────────────────────────────────────
// YOUTH PATHWAY PROGRAMS
// Real, verified programs that let San Mateo County high schoolers
// (under 18, before graduation) gain hands-on experience or a head
// start toward a career. Every entry links to its official source —
// nothing here is invented. "general: true" programs apply broadly
// across multiple sectors and always show at the top of the list.
// ─────────────────────────────────────────────────
const YOUTH_PROGRAMS = [
  {
    id: "ccap-dual-enrollment",
    general: true,
    categories: [],
    name: "Dual Enrollment (CCAP) — College of San Mateo, Skyline College & Cañada College",
    tagline: "San Mateo County high school juniors and seniors can take community college CTE courses tuition-free, earning high school and college credit at the same time.",
    ageNote: "Juniors & seniors at partner districts (San Mateo Union, Sequoia Union, Jefferson Union, South San Francisco Unified, La Honda-Pescadero)",
    link: "https://collegeofsanmateo.edu/dualenrollment/",
    sourceLabel: "College of San Mateo",
    es: {
      name: "Inscripción Dual (CCAP) — College of San Mateo, Skyline College y Cañada College",
      tagline: "Los estudiantes de penúltimo y último año en el Condado de San Mateo pueden tomar cursos universitarios de CTE sin costo, obteniendo crédito de preparatoria y universidad al mismo tiempo.",
      ageNote: "Estudiantes de penúltimo/último año en distritos asociados (San Mateo Union, Sequoia Union, Jefferson Union, South San Francisco Unified, La Honda-Pescadero)",
    }
  },
  {
    id: "aragon-mc3",
    general: false,
    categories: ["Construction & Energy", "Clean Energy"],
    name: "Aragon High School — MC3 Program",
    tagline: "An on-campus, day-school program teaching construction-trade fundamentals (tools, construction math, OSHA-10, financial literacy), backed by IBEW Local 617, Sheet Metal Workers Local 104, and Painters/Drywall Finishers Local 913.",
    ageNote: "Open to any enrolled Aragon High School student (SMUHSD) — no age minimum",
    link: "https://ahs.smuhsd.org/academics/career-technical-education-cte/engineering-architecture-pathway/cte-engineering-technology-trade-mc3-program",
    sourceLabel: "San Mateo Union High School District",
    es: {
      name: "Aragon High School — Programa MC3",
      tagline: "Un programa dentro del horario escolar que enseña fundamentos de los oficios de construcción (herramientas, matemáticas de construcción, OSHA-10, educación financiera), respaldado por IBEW Local 617, Sheet Metal Workers Local 104 y Painters/Drywall Finishers Local 913.",
      ageNote: "Abierto a cualquier estudiante inscrito en Aragon High School (SMUHSD) — sin edad mínima",
    }
  },
  {
    id: "ace-mentor",
    general: false,
    categories: ["Construction & Energy", "Clean Energy"],
    name: "ACE Mentor Program of the Bay Area",
    tagline: "Free after-school mentoring in architecture, construction, and engineering, with industry professionals guiding student teams through real design/build projects.",
    ageNote: "Grades 9–12; Peninsula-area schools participate as part of the SF Bay Area affiliate — contact the affiliate to join or start a team",
    link: "https://www.acementor.org/affiliates/san-francisco-ca/",
    sourceLabel: "ACE Mentor Program",
    es: {
      name: "ACE Mentor Program del Área de la Bahía",
      tagline: "Mentoría gratuita después de clases en arquitectura, construcción e ingeniería, con profesionales de la industria guiando a equipos de estudiantes en proyectos reales de diseño y construcción.",
      ageNote: "Grados 9–12; las escuelas del área de la Península participan como parte de la filial del Área de la Bahía de SF — contacta a la filial para unirte o iniciar un equipo",
    }
  },
  {
    id: "sequoia-health-academy",
    general: false,
    categories: ["Healthcare"],
    name: "Sequoia High School — Health Career Academy & HOSA Chapter",
    tagline: "A dedicated health-science small learning community (grades 10–12) with hospital tours, internships, and a HOSA – Future Health Professionals chapter.",
    ageNote: "Sequoia Union HSD students, typically opted into during course selection",
    link: "https://www.sequoiahs.org/DEPARTMENT/Health-Career-Academy/index.html",
    sourceLabel: "Sequoia High School",
    es: {
      name: "Sequoia High School — Health Career Academy y Capítulo de HOSA",
      tagline: "Una comunidad de aprendizaje enfocada en ciencias de la salud (grados 10–12) con visitas a hospitales, pasantías y un capítulo de HOSA – Future Health Professionals.",
      ageNote: "Estudiantes de Sequoia Union HSD, normalmente elegido durante la selección de cursos",
    }
  },
  {
    id: "kaiser-redwood-city-volunteer",
    general: false,
    categories: ["Healthcare"],
    name: "Kaiser Permanente Redwood City — Student Volunteer Program",
    tagline: "A real hospital volunteer role for teens — about 4 hours a week for a 6-month commitment, no Kaiser membership required.",
    ageNote: "Ages 16–17",
    link: "https://volunteer-ncal.kaiserpermanente.org/",
    sourceLabel: "Kaiser Permanente",
    es: {
      name: "Kaiser Permanente Redwood City — Programa de Voluntariado Estudiantil",
      tagline: "Un puesto real de voluntariado hospitalario para adolescentes — cerca de 4 horas por semana con un compromiso de 6 meses, no se requiere membresía de Kaiser.",
      ageNote: "Edades 16–17",
    }
  },
  {
    id: "mills-peninsula-youth-volunteer",
    general: false,
    categories: ["Healthcare"],
    name: "Mills-Peninsula Medical Center — Youth Volunteer Program (Sutter Health)",
    tagline: "Applications open May 1–15 and Nov 1–15 each year; requires parent and teacher consent forms plus an interview, about 3–4 hours a week for a 1-year minimum.",
    ageNote: "Ages 16–17",
    link: "https://www.sutterhealth.org/volunteering/opportunities/youth-volunteer-at-mills-peninsula-medical-center-1096205778",
    sourceLabel: "Sutter Health",
    es: {
      name: "Mills-Peninsula Medical Center — Programa de Voluntariado Juvenil (Sutter Health)",
      tagline: "Las solicitudes se abren del 1 al 15 de mayo y del 1 al 15 de noviembre cada año; requiere formularios de consentimiento de padres y maestros más una entrevista, cerca de 3–4 horas por semana con un compromiso mínimo de 1 año.",
      ageNote: "Edades 16–17",
    }
  },
  {
    id: "stanford-junior-summer",
    general: false,
    categories: ["Healthcare"],
    name: "Stanford Health Care — Junior Summer Program",
    tagline: "A hospital volunteer program in administrative roles (gift shop, information desk) — good exposure to how a hospital runs, though not clinical shadowing.",
    ageNote: "Age 16+",
    link: "https://stanfordhealthcare.org/events/volunteer-services-junior-summer-program.html",
    sourceLabel: "Stanford Health Care",
    es: {
      name: "Stanford Health Care — Programa de Verano Junior",
      tagline: "Un programa de voluntariado hospitalario en roles administrativos (tienda de regalos, mostrador de información) — buena exposición a cómo funciona un hospital, aunque no es observación clínica.",
      ageNote: "16 años en adelante",
    }
  },
  {
    id: "el-camino-junior-auxiliary",
    general: false,
    categories: ["Healthcare"],
    name: "El Camino Health — Junior Auxiliary / Teen Summer Volunteer",
    tagline: "The Junior Auxiliary is a 1-year minimum commitment; a lower-commitment Teen Summer Volunteer (craft/kit-making) option is also open to grades 6–12.",
    ageNote: "Junior Auxiliary: minimum age 14, must have completed 8th grade",
    link: "https://www.elcaminohealth.org/community/volunteer/auxiliary/applications",
    sourceLabel: "El Camino Health",
    es: {
      name: "El Camino Health — Junior Auxiliary / Voluntariado de Verano para Adolescentes",
      tagline: "El Junior Auxiliary requiere un compromiso mínimo de 1 año; también existe una opción de menor compromiso, el Voluntariado de Verano para Adolescentes (elaboración de manualidades/kits), abierta a los grados 6–12.",
      ageNote: "Junior Auxiliary: edad mínima 14 años, haber terminado 8vo grado",
    }
  },
  {
    id: "smmc-volunteer",
    general: false,
    categories: ["Healthcare"],
    name: "San Mateo Medical Center — Volunteer Program",
    tagline: "Long-term or seasonal volunteer roles with a virtual interview and health clearance (TB test, immunizations) required; at least 4 hours a week.",
    ageNote: "Age 15+ with parental consent",
    link: "https://www.smchealth.org/smmc-volunteer",
    sourceLabel: "County of San Mateo Health System",
    es: {
      name: "San Mateo Medical Center — Programa de Voluntariado",
      tagline: "Puestos de voluntariado a largo plazo o temporal, con entrevista virtual y autorización médica (prueba de tuberculosis, vacunas) requeridas; al menos 4 horas por semana.",
      ageNote: "15 años en adelante, con consentimiento de los padres",
    }
  },
  {
    id: "smysp",
    general: false,
    categories: ["Healthcare"],
    name: "Stanford Medicine Youth Science Program (SMYSP)",
    tagline: "A free, full-time summer research program at Stanford for low-income and/or first-generation rising seniors from Northern California, including San Mateo County.",
    ageNote: "Rising seniors (current juniors)",
    link: "https://smysp.spcs.stanford.edu/admissions",
    sourceLabel: "Stanford Medicine",
    es: {
      name: "Stanford Medicine Youth Science Program (SMYSP)",
      tagline: "Un programa de investigación de verano gratuito y de tiempo completo en Stanford para estudiantes de bajos ingresos y/o primera generación que están por cursar su último año, del norte de California, incluyendo el Condado de San Mateo.",
      ageNote: "Estudiantes que están por cursar el último año (actualmente penúltimo año)",
    }
  },
  {
    id: "kp-launch",
    general: false,
    categories: ["Healthcare"],
    name: "KP LAUNCH (Kaiser Permanente)",
    tagline: "A paid summer jobs/internship program for underrepresented, low-income high school students exploring healthcare careers, running since 1968.",
    ageNote: "High school students, Northern California-wide",
    link: "https://kplaunch.kaiserpermanente.org/",
    sourceLabel: "Kaiser Permanente",
    es: {
      name: "KP LAUNCH (Kaiser Permanente)",
      tagline: "Un programa pagado de empleo/pasantía de verano para estudiantes de preparatoria de bajos ingresos y de grupos subrepresentados que exploran carreras de salud, en operación desde 1968.",
      ageNote: "Estudiantes de preparatoria, en todo el norte de California",
    }
  },
  {
    id: "redcross-cpr",
    general: false,
    categories: ["Healthcare"],
    name: "American Red Cross — CPR & First Aid Certification",
    tagline: "A real first credential many healthcare-bound teens earn early; valid for 2 years. Use the Red Cross \"Find a Class\" tool for local pricing and to confirm whether a parent needs to be present for minors.",
    ageNote: "Open to teens (confirm minor policy with your local class)",
    link: "https://www.redcross.org/take-a-class/cpr/cpr-training/cpr-classes",
    sourceLabel: "American Red Cross",
    es: {
      name: "Cruz Roja Americana — Certificación de RCP y Primeros Auxilios",
      tagline: "Una primera credencial real que muchos adolescentes interesados en salud obtienen temprano; válida por 2 años. Usa la herramienta \"Find a Class\" de la Cruz Roja para conocer precios locales y confirmar si se requiere la presencia de un padre para menores.",
      ageNote: "Abierto a adolescentes (confirma la política para menores con tu clase local)",
    }
  },
  {
    id: "phs-junior-volunteer",
    general: false,
    categories: ["Animal Care"],
    name: "Peninsula Humane Society & SPCA — Junior Volunteer Program",
    tagline: "Real, hands-on animal care: dog walking, cat socialization, and enrichment. About 2 hours a week for a 6-month minimum commitment (small volunteer-pack fee applies).",
    ageNote: "Ages 13–17 (ages 13–15 must be accompanied by a parent/guardian)",
    link: "https://phs-spca.org/volunteer/positions/junior/",
    sourceLabel: "Peninsula Humane Society & SPCA",
    es: {
      name: "Peninsula Humane Society & SPCA — Programa de Voluntariado Juvenil",
      tagline: "Cuidado real y práctico de animales: paseo de perros, socialización de gatos y enriquecimiento. Cerca de 2 horas por semana con un compromiso mínimo de 6 meses (aplica una pequeña cuota por el paquete de voluntario).",
      ageNote: "Edades 13–17 (edades 13–15 deben ir acompañados de un padre/tutor)",
    }
  },
  {
    id: "prostart",
    general: false,
    categories: ["Culinary & Hospitality"],
    name: "ProStart",
    tagline: "A real two-year, in-school culinary and hospitality management program (National Restaurant Association Educational Foundation), used by public high schools statewide, leading to industry certificates.",
    ageNote: "Enrolled high schoolers — ask your school's CTE office if it's offered, or contact the California Restaurant Foundation to find a participating school",
    link: "https://chooserestaurants.org/programs/prostart/",
    sourceLabel: "California Restaurant Foundation",
    es: {
      name: "ProStart",
      tagline: "Un programa real de dos años, dentro de la escuela, de administración culinaria y de hospitalidad (National Restaurant Association Educational Foundation), usado por preparatorias públicas en todo el estado, que conduce a certificados de la industria.",
      ageNote: "Estudiantes de preparatoria inscritos — pregunta en la oficina de CTE de tu escuela si lo ofrecen, o contacta a la California Restaurant Foundation para encontrar una escuela participante",
    }
  },
  {
    id: "csm-cosmetology-info",
    general: false,
    categories: ["Beauty & Wellness"],
    name: "College of San Mateo — Cosmetology (early-start info)",
    tagline: "Some California cosmetology schools accept students as young as 16 (after completing 10th grade) to begin accruing training hours, though the state licensing exam itself requires a minimum age of 17 — confirm current age rules directly with a school before enrolling.",
    ageNote: "Varies by school — confirm directly",
    link: "https://collegeofsanmateo.edu/cosmetology/",
    sourceLabel: "College of San Mateo",
    es: {
      name: "College of San Mateo — Cosmetología (información para empezar temprano)",
      tagline: "Algunas escuelas de cosmetología de California aceptan estudiantes desde los 16 años (tras terminar el 10º grado) para comenzar a acumular horas de capacitación, aunque el examen estatal de licencia requiere una edad mínima de 17 años — confirma las reglas de edad vigentes directamente con una escuela antes de inscribirte.",
      ageNote: "Varía según la escuela — confirma directamente",
    }
  },
  {
    id: "comptia-selfstudy",
    general: false,
    categories: ["Technology"],
    name: "CompTIA A+ (self-study)",
    tagline: "No school, program, or age requirement — any student can start studying for the CompTIA A+ exam on their own schedule, well before graduating.",
    ageNote: "No age minimum — fully self-directed",
    link: "https://www.comptia.org/en-us/explore-careers/job-roles/tech-support-specialist/",
    sourceLabel: "CompTIA",
    es: {
      name: "CompTIA A+ (autoestudio)",
      tagline: "No requiere escuela, programa ni edad mínima — cualquier estudiante puede empezar a estudiar para el examen CompTIA A+ a su propio ritmo, mucho antes de graduarse.",
      ageNote: "Sin edad mínima — completamente autodirigido",
    }
  },
];
