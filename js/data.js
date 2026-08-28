const CAREERS = [
  {
    id: "electrician",
    title: "Electrician",
    emoji: "⚡",
    tagline: "Wire homes, schools, and solar panels — a foundational trade with strong union wages across the Bay Area.",
    category: "Construction & Energy",
    demandLocal: "high",
    openingsAnnualUS: 81000,
    timeToJob: "1 year (certificate) or 5 years (apprenticeship)",
    timeMonths: 12,
    salaryEntry: 39430, salaryMid: 62350, salaryTop: 106030,
    salaryNote: "National BLS figures shown above. CA/Bay Area electricians often earn more — regional EDD/O*NET data suggests roughly $55k–$182k, though we couldn't independently re-verify the top figure directly on bls.gov. (Source: BLS Occupational Outlook Handbook, May 2024 data; EDD/O*NET regional wage data)",
    licenseRequired: true,
    licenseBody: "California DIR Electrician Certification (DLSE)",
    paths: [
      { name: "College of San Mateo — Apprenticeship: Electrical Technology (Inside Wireman)", type: "apprenticeship", school: "College of San Mateo", location: "San Mateo", duration: "Certificate of Achievement (35 units) or AS degree (60 units), taken alongside indenture", cost: "CA community college tuition (~$46/unit)", link: "https://catalog.collegeofsanmateo.edu/current/programs/apprenticeship-electrical-technology-inside-wireman-as.php", notes: "Coursework runs alongside indenture in the San Mateo County Electrical JATC apprenticeship — not a standalone path to licensure." },
      { name: "IBEW Local 617 / San Mateo County Electrical JATC Apprenticeship", type: "apprenticeship", school: "IBEW Local 617", location: "San Mateo, CA", duration: "5 years (~8,000 OJT hours)", cost: "Free — paid apprenticeship", link: "https://smjatc617.org/apprenticeship/", notes: "Union apprenticeship leading to CA electrical certification, full health/pension benefits." }
    ],
    steps: [
      { text: "Before you graduate, get hands-on exposure through Aragon High School's MC3 program", detail: "This on-campus program (San Mateo Union High School District) teaches construction-trade fundamentals and is backed by IBEW Local 617 — no age minimum, open to any enrolled student.", link: "https://ahs.smuhsd.org/academics/career-technical-education-cte/engineering-architecture-pathway/cte-engineering-technology-trade-mc3-program" },
      { text: "Finish high school or GED", detail: "Employers and apprenticeship programs require proof of a diploma or GED before you can apply." },
      { text: "Take a semester of algebra — helpful for apprenticeship applications", detail: "IBEW Local 617 looks for a passing grade of C or better in algebra as part of its aptitude screening, so a community college or adult-ed course works fine if it wasn't on your high school transcript." },
      { text: "Apply to the IBEW Local 617 / San Mateo County Electrical JATC apprenticeship, or enroll in CSM's Inside Wireman coursework alongside it", detail: "Applications typically include an aptitude test and an interview; CSM's coursework is designed to run in parallel with the apprenticeship, not replace it." },
      { text: "Complete the 5-year, ~8,000-hour apprenticeship while earning union wages", detail: "Pay rises in steps as you log hours — apprentices typically start around 40–50% of journeyman scale and reach full pay by the final year." },
      { text: "Pass the CA electrician certification exam (DIR/DLSE)", detail: "The exam covers the National Electrical Code and California's amendments to it; most apprentices sit for it near the end of their program." },
      { text: "Optional: pursue a C-10 contractor license to run your own business", detail: "The C-10 requires four years of verified journeyman experience plus passing law and trade exams through the CSLB." }
    ],
    localEmployers: ["PG&E", "Rosendin Electric", "Cupertino Electric", "City/County of San Mateo facilities"],
    growthOutlook: "BLS projects +9% growth (2024–2034, \"much faster than average\"), about 81,000 openings each year nationally — demand is rising partly due to solar and EV-infrastructure work. (Source: BLS Occupational Outlook Handbook)",
    quoteType: "quote",
    quoteText: "I don't owe anybody anything. If I stop, the checks go to zero.",
    quoteAuthor: "Jacob Palmer, 23, electrician (Charlotte, NC — not California-specific)",
    quoteSourceLabel: "Fortune",
    quoteSourceUrl: "https://fortune.com/2025/09/14/meet-23-year-old-electrician-gen-z-skipped-college-his-own-boss-6-figures",
    skills: ["Problem-solving", "Math", "Physical stamina", "Detail orientation", "Code compliance"],
    quizTraits: { handsOn: 5, helpingPeople: 2, tech: 4, outdoors: 3, fastStart: 3, creative: 1, computers: 2, precision: 4, animals: 1, food: 1, calmUnderPressure: 3, machinery: 3, teamwork: 3, leadership: 3, structure: 4 },
    indeedQuery: "electrician+apprentice",
    indeedLocation: "San+Mateo%2C+CA",
    es: {
      title: "Electricista",
      tagline: "Instala cableado en casas, escuelas y paneles solares — un oficio fundamental con salarios sindicales sólidos en toda el Área de la Bahía.",
      timeToJob: "1 año (certificado) o 5 años (aprendizaje)",
      salaryNote: "Cifras nacionales del BLS mostradas arriba. Los electricistas en CA/Área de la Bahía suelen ganar más — datos regionales de EDD/O*NET sugieren aproximadamente $55,000–$182,000, aunque no pudimos verificar de forma independiente la cifra más alta directamente en bls.gov. (Fuente: BLS Occupational Outlook Handbook, datos de mayo de 2024; datos salariales regionales de EDD/O*NET)",
      licenseBody: "Certificación de Electricista del DIR de California (DLSE)",
      growthOutlook: "El BLS proyecta un crecimiento del +9% (2024–2034, \"mucho más rápido que el promedio\"), con cerca de 81,000 vacantes cada año a nivel nacional — la demanda está aumentando en parte por el trabajo de infraestructura solar y de vehículos eléctricos. (Fuente: BLS Occupational Outlook Handbook)",
      quoteText: "No le debo nada a nadie. Si me detengo, los cheques se van a cero.",
      quoteAuthor: "Jacob Palmer, 23 años, electricista (Charlotte, Carolina del Norte — no es específico de California)",
      skills: ["Resolución de problemas", "Matemáticas", "Resistencia física", "Atención al detalle", "Cumplimiento del código eléctrico"],
      steps: [
        { text: "Antes de graduarte, obtén experiencia práctica a través del programa MC3 de Aragon High School", detail: "Este programa dentro del horario escolar (San Mateo Union High School District) enseña fundamentos de los oficios de construcción y está respaldado por IBEW Local 617 — sin edad mínima, abierto a cualquier estudiante inscrito.", link: "https://ahs.smuhsd.org/academics/career-technical-education-cte/engineering-architecture-pathway/cte-engineering-technology-trade-mc3-program" },
        { text: "Termina la preparatoria o el GED", detail: "Los empleadores y los programas de aprendizaje exigen comprobante de diploma o GED antes de poder solicitar." },
        { text: "Toma un semestre de álgebra — útil para las solicitudes de aprendizaje", detail: "IBEW Local 617 busca una calificación aprobatoria de C o más en álgebra como parte de su evaluación de aptitud, así que un curso de universidad comunitaria o educación para adultos funciona si no lo tomaste en la preparatoria." },
        { text: "Solicita el aprendizaje de IBEW Local 617 / San Mateo County Electrical JATC, o inscríbete en los cursos de Inside Wireman de CSM junto con él", detail: "Las solicitudes suelen incluir un examen de aptitud y una entrevista; los cursos de CSM están diseñados para tomarse junto con el aprendizaje, no en su lugar." },
        { text: "Completa el aprendizaje de 5 años y ~8,000 horas mientras ganas salario sindical", detail: "El salario aumenta por etapas conforme acumulas horas — los aprendices suelen comenzar alrededor del 40–50% de la escala de oficial y llegan al salario completo en el último año." },
        { text: "Aprueba el examen de certificación de electricista de CA (DIR/DLSE)", detail: "El examen cubre el Código Eléctrico Nacional y las modificaciones de California; la mayoría de los aprendices lo presentan cerca del final de su programa." },
        { text: "Opcional: obtén una licencia de contratista C-10 para tener tu propio negocio", detail: "La C-10 requiere cuatro años de experiencia verificada como oficial, además de aprobar los exámenes de ley y de oficio de la CSLB." }
      ],
      paths: [
        { duration: "Certificado de Logro (35 unidades) o título AS (60 unidades), cursado junto con el aprendizaje", cost: "Colegiatura de universidad comunitaria de CA (~$46/unidad)", notes: "Los cursos se realizan junto con el aprendizaje del San Mateo County Electrical JATC — no es una vía independiente hacia la licencia." },
        { duration: "5 años (~8,000 horas de capacitación en el trabajo)", cost: "Gratis — aprendizaje pagado", notes: "Aprendizaje sindical que conduce a la certificación eléctrica de CA, con beneficios completos de salud y pensión." }
      ]
    },
  },
  {
    id: "hvac",
    title: "HVAC Technician",
    emoji: "❄️",
    tagline: "Install and maintain heating and cooling systems — demand is climbing as Bay Area buildings go electric.",
    category: "Construction & Energy",
    demandLocal: "high",
    openingsAnnualUS: 40100,
    timeToJob: "Weeks (EPA 608 + helper hire) up to 5 years (apprenticeship for journeyman status)",
    timeMonths: 6,
    salaryEntry: 39130, salaryMid: 59810, salaryTop: 91020,
    salaryNote: "National BLS figures shown above. CA/Bay Area regional data suggests roughly $49k–$129k locally — not independently re-verified directly on bls.gov. (Source: BLS Occupational Outlook Handbook, May 2024 data)",
    licenseRequired: true,
    licenseBody: "EPA Section 608 Certification (refrigerant handling, federally required)",
    paths: [
      { name: "UA Local 467 Apprenticeship (Plumbers, Steamfitters & HVACR Service Techs)", type: "apprenticeship", school: "UA Local 467", location: "Burlingame, CA", duration: "5 years (8,000+ OJT hours, 1,200+ classroom hours)", cost: "Free — paid apprenticeship", link: "https://www.ualocal467.org/apprenticeship.aspx", notes: "The union serving San Mateo County for HVAC/pipe trades — UA Local 393 actually covers Santa Clara/San Benito counties instead. Quarterly application windows." },
      { name: "EPA Section 608 Certification", type: "certificate", school: "EPA-approved provider (online or in-person)", location: "Anywhere", duration: "Days to a few weeks of self-study", cost: "~$20–$150 exam fee", link: "https://www.epa.gov/section608/section-608-technician-certification-requirements", notes: "Federally required to legally handle refrigerants. Many techs start as a helper with this cert while pursuing a full apprenticeship — no San Mateo County community college currently offers a dedicated HVAC program." }
    ],
    steps: [
      { text: "Before you graduate, get hands-on exposure through Aragon High School's MC3 program", detail: "This on-campus program (San Mateo Union High School District) teaches construction-trade fundamentals and is backed in part by Sheet Metal Workers Local 104 — no age minimum, open to any enrolled student.", link: "https://ahs.smuhsd.org/academics/career-technical-education-cte/engineering-architecture-pathway/cte-engineering-technology-trade-mc3-program" },
      { text: "Finish high school or GED", detail: "No specific coursework is required, though basic math and physics concepts help with understanding refrigeration cycles." },
      { text: "Study for and pass the EPA Section 608 certification exam (required to legally handle refrigerants)", detail: "The exam has separate types (I, II, and Universal); Universal is the most versatile since it covers every refrigerant category." },
      { text: "Get hired as an HVAC helper, or apply to the UA Local 467 apprenticeship in Burlingame", detail: "Helper roles skip the apprenticeship's formal application process, making this the fastest way to start earning while you build experience." },
      { text: "Complete the 5-year, 8,000+ hour apprenticeship for journeyman status", detail: "The program combines paid on-the-job training with roughly 1,200 hours of classroom instruction on controls, refrigeration, and code." },
      { text: "Optional: build toward a CA C-20 HVAC contractor license if going independent", detail: "Like most CSLB contractor licenses, the C-20 requires four years of documented journeyman experience before you can sit for the exams." }
    ],
    localEmployers: ["Western Allied Mechanical", "ACCO Engineered Systems", "Bay Area HVAC contractors", "Hospital/data-center facilities teams"],
    growthOutlook: "BLS projects +8% growth (2024–2034, \"much faster than average\"), about 40,100 openings each year nationally. (Source: BLS Occupational Outlook Handbook)",
    quoteType: "fact",
    quoteText: "HVAC technicians are projected to see about 40,100 job openings every year through 2034, driven partly by building-electrification and heat-pump adoption.",
    quoteSourceLabel: "BLS Occupational Outlook Handbook",
    quoteSourceUrl: "https://www.bls.gov/ooh/installation-maintenance-and-repair/heating-air-conditioning-and-refrigeration-mechanics-and-installers.htm",
    skills: ["Mechanical aptitude", "Attention to detail", "Customer service", "Physical fitness", "Troubleshooting"],
    quizTraits: { handsOn: 5, helpingPeople: 3, tech: 4, outdoors: 2, fastStart: 5, creative: 1, computers: 2, precision: 3, animals: 1, food: 1, calmUnderPressure: 3, machinery: 2, teamwork: 3, leadership: 2, structure: 3 },
    indeedQuery: "HVAC+technician",
    indeedLocation: "San+Mateo%2C+CA",
    es: {
      title: "Técnico de HVAC",
      tagline: "Instala y da mantenimiento a sistemas de calefacción y aire acondicionado — la demanda está creciendo mientras los edificios del Área de la Bahía se electrifican.",
      timeToJob: "Semanas (EPA 608 + contratación como ayudante) hasta 5 años (aprendizaje para ser oficial)",
      salaryNote: "Cifras nacionales del BLS mostradas arriba. Datos regionales de CA/Área de la Bahía sugieren aproximadamente $49,000–$129,000 localmente — no verificados de forma independiente directamente en bls.gov. (Fuente: BLS Occupational Outlook Handbook, datos de mayo de 2024)",
      licenseBody: "Certificación EPA Sección 608 (manejo de refrigerantes, requerida a nivel federal)",
      growthOutlook: "El BLS proyecta un crecimiento del +8% (2024–2034, \"mucho más rápido que el promedio\"), con cerca de 40,100 vacantes cada año a nivel nacional. (Fuente: BLS Occupational Outlook Handbook)",
      quoteText: "Se proyecta que los técnicos de HVAC tendrán cerca de 40,100 vacantes de empleo cada año hasta 2034, impulsadas en parte por la electrificación de edificios y la adopción de bombas de calor.",
      skills: ["Aptitud mecánica", "Atención al detalle", "Servicio al cliente", "Aptitud física", "Solución de problemas"],
      steps: [
        { text: "Antes de graduarte, obtén experiencia práctica a través del programa MC3 de Aragon High School", detail: "Este programa dentro del horario escolar (SMUHSD) enseña fundamentos de los oficios de construcción y está respaldado en parte por Sheet Metal Workers Local 104 — sin edad mínima, abierto a cualquier estudiante inscrito.", link: "https://ahs.smuhsd.org/academics/career-technical-education-cte/engineering-architecture-pathway/cte-engineering-technology-trade-mc3-program" },
        { text: "Termina la preparatoria o el GED", detail: "No se requiere ningún curso específico, aunque las matemáticas y la física básicas ayudan a entender los ciclos de refrigeración." },
        { text: "Estudia y aprueba el examen de certificación EPA Sección 608 (necesario para manejar refrigerantes legalmente)", detail: "El examen tiene tipos separados (I, II y Universal); Universal es el más versátil porque cubre todas las categorías de refrigerantes." },
        { text: "Consigue trabajo como ayudante de HVAC, o solicita el aprendizaje de UA Local 467 en Burlingame", detail: "Los puestos de ayudante evitan el proceso formal de solicitud del aprendizaje, así que es la forma más rápida de empezar a ganar mientras acumulas experiencia." },
        { text: "Completa el aprendizaje de 5 años y más de 8,000 horas para convertirte en oficial", detail: "El programa combina capacitación pagada en el trabajo con cerca de 1,200 horas de clases sobre controles, refrigeración y código." },
        { text: "Opcional: trabaja hacia una licencia de contratista de HVAC C-20 de CA si vas a independizarte", detail: "Como la mayoría de las licencias de contratista de la CSLB, la C-20 requiere cuatro años de experiencia documentada como oficial antes de poder presentar los exámenes." }
      ],
      paths: [
        { duration: "5 años (más de 8,000 horas de capacitación en el trabajo, más de 1,200 horas de clases)", cost: "Gratis — aprendizaje pagado", notes: "El sindicato que atiende al Condado de San Mateo para los oficios de HVAC/tuberías — UA Local 393 en realidad cubre los condados de Santa Clara/San Benito. Ventanas de solicitud trimestrales." },
        { duration: "Días a algunas semanas de autoestudio", cost: "~$20–$150 de cuota de examen", notes: "Requerida a nivel federal para manejar refrigerantes legalmente. Muchos técnicos comienzan como ayudantes con esta certificación mientras buscan un aprendizaje completo — actualmente ningún colegio comunitario del Condado de San Mateo ofrece un programa dedicado de HVAC." }
      ]
    },
  },
  {
    id: "medical-assistant",
    title: "Medical Assistant",
    emoji: "🩺",
    tagline: "Work alongside doctors and nurses — one of the fastest-hiring roles in healthcare, no state license required.",
    category: "Healthcare",
    demandLocal: "high",
    openingsAnnualUS: 112300,
    timeToJob: "9–12 months",
    timeMonths: 10,
    salaryEntry: 39290, salaryMid: 49660, salaryTop: 77300,
    salaryNote: "California-specific wage data (O*NET OnLine, 2025). The national median is lower, around $44,200/yr. (Source: BLS Occupational Outlook Handbook; O*NET OnLine, CA)",
    licenseRequired: false,
    licenseBody: "No state license required; CMA (AAMA) / RMA (AMT) / CCMA (NHA) certification is voluntary but preferred by employers",
    paths: [
      { name: "Cañada College — Medical Assisting", type: "certificate", school: "Cañada College", location: "Redwood City", duration: "~9–12 months", cost: "CA community college tuition (~$46/unit)", link: "https://canadacollege.edu/medicalassisting/", notes: "Cañada's own program page cites 24% projected growth in San Mateo County medical assisting jobs by 2027." },
      { name: "San Mateo Adult & Career Education — Clinical Medical Assistant Training", type: "certificate", school: "San Mateo Union High School District", location: "Burlingame, CA", duration: "Includes a 160-hour clinical externship", cost: "Financial aid/payment plans available", link: "https://sanmateoadulted.org/programs/career-education/healthcare-education/clinical-medical-assistant/", notes: "Open to high school grads/GED holders — no prior college required." }
    ],
    steps: [
      { text: "Before you graduate, explore healthcare through your school's Health Science pathway or a hospital volunteer program", detail: "Sequoia High School's Health Career Academy (with a HOSA chapter) and hospital teen volunteer programs at Kaiser Permanente and Sutter Health's Mills-Peninsula (both starting at age 16) build real healthcare exposure early.", link: "https://www.sequoiahs.org/DEPARTMENT/Health-Career-Academy/index.html" },
      { text: "Finish high school or GED (biology and math helpful)", detail: "Programs use basic biology and dosage math in coursework, so a foundation here makes the first term easier." },
      { text: "Enroll in Cañada College's Medical Assisting program or San Mateo Adult & Career Education's Clinical MA program", detail: "Both accept students directly out of high school with no prior college credit required." },
      { text: "Complete required clinical externship hours at a local clinic", detail: "The externship — 160 hours in the San Mateo Adult & Career Education program — is where most students land their first job offer." },
      { text: "Optionally sit for a CMA (AAMA), RMA (AMT), or CCMA (NHA) certification exam — not state-required but preferred by employers", detail: "Certification often shows up as a preferred qualification in job postings and can support a higher starting wage even though it's not legally required." },
      { text: "Apply to Kaiser Permanente, San Mateo Medical Center, or other local health systems", detail: "Large health systems often have structured new-grad onboarding, while smaller private practices may offer more varied hands-on experience sooner." }
    ],
    localEmployers: ["Kaiser Permanente", "San Mateo Medical Center (County of San Mateo Health System)", "Stanford Health Care", "Sutter Health / Mills-Peninsula"],
    growthOutlook: "BLS projects +12% growth (2024–2034, \"much faster than average\"), about 112,300 openings each year — one of the faster-growing healthcare support roles. (Source: BLS Occupational Outlook Handbook)",
    quoteType: "quote",
    quoteText: "I would not get through my day without my CMA. She wears many hats throughout the day and is a great asset to our practice.",
    quoteAuthor: "Dr. Laura Boyd, MD, primary care physician (Chicago, IL — not California-specific)",
    quoteSourceLabel: "American Association of Medical Assistants",
    quoteSourceUrl: "https://www.aama-ntl.org/employers",
    skills: ["Empathy", "Attention to detail", "Multitasking", "Communication", "Science aptitude"],
    quizTraits: { handsOn: 3, helpingPeople: 5, tech: 2, outdoors: 1, fastStart: 5, creative: 1, computers: 2, precision: 4, animals: 1, food: 1, calmUnderPressure: 4, machinery: 1, teamwork: 4, leadership: 2, structure: 4 },
    indeedQuery: "medical+assistant",
    indeedLocation: "San+Mateo%2C+CA",
    es: {
      title: "Asistente Médico",
      tagline: "Trabaja junto a médicos y enfermeras — uno de los roles de contratación más rápida en el sector salud, sin necesidad de licencia estatal.",
      timeToJob: "9–12 meses",
      salaryNote: "Datos salariales específicos de California (O*NET OnLine, 2025). La mediana nacional es menor, alrededor de $44,200/año. (Fuente: BLS Occupational Outlook Handbook; O*NET OnLine, CA)",
      licenseBody: "No se requiere licencia estatal; la certificación CMA (AAMA) / RMA (AMT) / CCMA (NHA) es voluntaria pero preferida por los empleadores",
      growthOutlook: "El BLS proyecta un crecimiento del +12% (2024–2034, \"mucho más rápido que el promedio\"), con cerca de 112,300 vacantes cada año — uno de los roles de apoyo en salud de más rápido crecimiento. (Fuente: BLS Occupational Outlook Handbook)",
      quoteText: "No podría terminar mi día sin mi asistente médica certificada (CMA). Ella cumple muchas funciones a lo largo del día y es un gran activo para nuestra consulta.",
      quoteAuthor: "Dra. Laura Boyd, médica de atención primaria (Chicago, IL — no es específico de California)",
      skills: ["Empatía", "Atención al detalle", "Multitarea", "Comunicación", "Aptitud científica"],
      steps: [
        { text: "Antes de graduarte, explora el sector salud a través del programa de Ciencias de la Salud de tu escuela o un programa de voluntariado hospitalario", detail: "El Health Career Academy de Sequoia High School (con un capítulo de HOSA) y los programas de voluntariado juvenil de Kaiser Permanente y Mills-Peninsula de Sutter Health (ambos desde los 16 años) brindan experiencia real en el sector salud desde temprano.", link: "https://www.sequoiahs.org/DEPARTMENT/Health-Career-Academy/index.html" },
        { text: "Termina la preparatoria o el GED (la biología y las matemáticas ayudan)", detail: "Los programas usan biología básica y cálculo de dosis en los cursos, así que tener esa base facilita el primer semestre." },
        { text: "Inscríbete en el programa de Asistente Médico de Cañada College o en el programa Clinical MA de San Mateo Adult & Career Education", detail: "Ambos aceptan estudiantes recién egresados de la preparatoria, sin necesidad de créditos universitarios previos." },
        { text: "Completa las horas de práctica clínica requeridas en una clínica local", detail: "La práctica — 160 horas en el programa de San Mateo Adult & Career Education — es donde la mayoría de los estudiantes consiguen su primera oferta de trabajo." },
        { text: "Opcionalmente, presenta un examen de certificación CMA (AAMA), RMA (AMT) o CCMA (NHA) — no es requerido por el estado, pero es preferido por los empleadores", detail: "La certificación suele aparecer como calificación preferida en las ofertas de empleo y puede ayudar a obtener un salario inicial más alto, aunque no sea obligatoria por ley." },
        { text: "Solicita empleo en Kaiser Permanente, San Mateo Medical Center u otros sistemas de salud locales", detail: "Los grandes sistemas de salud suelen tener una inducción estructurada para nuevos graduados, mientras que las consultas privadas más pequeñas pueden ofrecer experiencia práctica más variada desde el inicio." }
      ],
      paths: [
        { duration: "~9–12 meses", cost: "Colegiatura de universidad comunitaria de CA (~$46/unidad)", notes: "La propia página del programa de Cañada cita un crecimiento proyectado del 24% en empleos de asistente médico en el Condado de San Mateo para 2027." },
        { duration: "Incluye una práctica clínica de 160 horas", cost: "Ayuda financiera/planes de pago disponibles", notes: "Abierto a graduados de preparatoria/GED — no se requiere universidad previa." }
      ]
    },
  },
  {
    id: "plumber",
    title: "Plumber",
    emoji: "🔧",
    tagline: "Critical infrastructure work with some of the highest union wages among the skilled trades.",
    category: "Construction & Energy",
    demandLocal: "moderate",
    openingsAnnualUS: 44000,
    timeToJob: "5 years (apprenticeship)",
    timeMonths: 60,
    salaryEntry: 47350, salaryMid: 72830, salaryTop: 131100,
    salaryNote: "California-specific wage data (O*NET OnLine, 2025). The national median is lower, around $62,970/yr. (Source: BLS Occupational Outlook Handbook; O*NET OnLine, CA)",
    licenseRequired: false,
    licenseBody: "No individual license to work as an employee; a CA C-36 Contractor License is required to run your own plumbing business",
    paths: [
      { name: "UA Local 467 Plumbing Apprenticeship", type: "apprenticeship", school: "UA Local 467", location: "Burlingame, CA", duration: "5 years (8,000+ OJT hours, 1,200+ classroom hours)", cost: "Free — paid ($26–$48/hr range typical while training)", link: "https://www.ualocal467.org/apprenticeship.aspx", notes: "The correct union local for San Mateo County — UA Local 393 actually covers Santa Clara/San Benito counties instead." }
    ],
    steps: [
      { text: "Before you graduate, get general construction-trade exposure through Aragon High School's MC3 program", detail: "It's not plumbing-specific, but this on-campus, union-backed program teaches the tool use, safety, and math fundamentals shared across building trades — open to any enrolled student, no age minimum.", link: "https://ahs.smuhsd.org/academics/career-technical-education-cte/engineering-architecture-pathway/cte-engineering-technology-trade-mc3-program" },
      { text: "Finish high school or GED", detail: "There's no separate entrance testing before applying — the apprenticeship's own exam covers that instead." },
      { text: "Apply to the UA Local 467 plumbing apprenticeship (minimum age 18)", detail: "Applications typically open on a periodic cycle and include an aptitude test and interview." },
      { text: "Complete the 5-year, 8,000+ hour paid apprenticeship", detail: "You'll rotate through residential, commercial, and industrial job sites while attending required classroom sessions on code and blueprint reading." },
      { text: "Pass the journeyman plumber exam", detail: "This state-administered trade exam covers plumbing code, safety, and materials knowledge." },
      { text: "After 4+ years as journeyman: apply for a CA C-36 contractor license if starting your own business", detail: "The CSLB requires proof of four years of verified journeyman-level experience plus passing law and trade exams." }
    ],
    localEmployers: ["Mr. Rooter Plumbing", "Bay Area union contractors", "City/County public works"],
    growthOutlook: "BLS projects +4% growth (2024–2034, \"about as fast as average\"), about 44,000 openings each year, mostly from workers retiring or changing careers. (Source: BLS Occupational Outlook Handbook)",
    quoteType: "fact",
    quoteText: "About 44,000 plumber, pipefitter, and steamfitter job openings are projected each year through 2034.",
    quoteSourceLabel: "BLS Occupational Outlook Handbook",
    quoteSourceUrl: "https://www.bls.gov/ooh/construction-and-extraction/plumbers-pipefitters-and-steamfitters.htm",
    skills: ["Problem-solving", "Physical stamina", "Math", "Blueprint reading", "Customer service"],
    quizTraits: { handsOn: 5, helpingPeople: 2, tech: 3, outdoors: 3, fastStart: 1, creative: 1, computers: 1, precision: 3, animals: 1, food: 1, calmUnderPressure: 2, machinery: 3, teamwork: 2, leadership: 3, structure: 3 },
    indeedQuery: "plumber+apprentice",
    indeedLocation: "San+Mateo%2C+CA",
    es: {
      title: "Plomero",
      tagline: "Trabajo de infraestructura esencial con algunos de los salarios sindicales más altos entre los oficios calificados.",
      timeToJob: "5 años (aprendizaje)",
      salaryNote: "Datos salariales específicos de California (O*NET OnLine, 2025). La mediana nacional es menor, alrededor de $62,970/año. (Fuente: BLS Occupational Outlook Handbook; O*NET OnLine, CA)",
      licenseBody: "No se requiere licencia individual para trabajar como empleado; se requiere una Licencia de Contratista C-36 de CA para tener tu propio negocio de plomería",
      growthOutlook: "El BLS proyecta un crecimiento del +4% (2024–2034, \"tan rápido como el promedio\"), con cerca de 44,000 vacantes cada año, principalmente por jubilaciones o cambios de carrera. (Fuente: BLS Occupational Outlook Handbook)",
      quoteText: "Se proyectan cerca de 44,000 vacantes de empleo para plomeros, instaladores de tuberías y de calefacción a vapor cada año hasta 2034.",
      skills: ["Resolución de problemas", "Resistencia física", "Matemáticas", "Lectura de planos", "Servicio al cliente"],
      steps: [
        { text: "Antes de graduarte, obtén exposición general a los oficios de construcción a través del programa MC3 de Aragon High School", detail: "No es específico de plomería, pero este programa dentro del horario escolar, respaldado por sindicatos, enseña el uso de herramientas, seguridad y matemáticas compartidas entre los oficios de construcción — abierto a cualquier estudiante inscrito, sin edad mínima.", link: "https://ahs.smuhsd.org/academics/career-technical-education-cte/engineering-architecture-pathway/cte-engineering-technology-trade-mc3-program" },
        { text: "Termina la preparatoria o el GED", detail: "No hay un examen de ingreso separado antes de solicitar — el propio examen del aprendizaje se encarga de eso." },
        { text: "Solicita el aprendizaje de plomería de UA Local 467 (edad mínima 18 años)", detail: "Las solicitudes suelen abrirse en ciclos periódicos e incluyen un examen de aptitud y una entrevista." },
        { text: "Completa el aprendizaje pagado de 5 años y más de 8,000 horas", detail: "Rotarás por obras residenciales, comerciales e industriales mientras asistes a las clases obligatorias sobre código y lectura de planos." },
        { text: "Aprueba el examen de oficial plomero", detail: "Este examen de oficio, administrado por el estado, cubre el código de plomería, la seguridad y el conocimiento de materiales." },
        { text: "Después de 4+ años como oficial: solicita una licencia de contratista C-36 si vas a iniciar tu propio negocio", detail: "La CSLB exige comprobar cuatro años de experiencia verificada como oficial, además de aprobar los exámenes de ley y de oficio." }
      ],
      paths: [
        { duration: "5 años (más de 8,000 horas de capacitación en el trabajo, más de 1,200 horas de clases)", cost: "Gratis — pagado (rango típico de $26–$48/hora durante la capacitación)", notes: "El sindicato local correcto para el Condado de San Mateo — UA Local 393 en realidad cubre los condados de Santa Clara/San Benito." }
      ]
    },
  },
  {
    id: "dental-hygienist",
    title: "Dental Hygienist",
    emoji: "🦷",
    tagline: "High pay, flexible hours — a two-year degree and one of the highest-paid trades in California.",
    category: "Healthcare",
    demandLocal: "high",
    openingsAnnualUS: 15300,
    timeToJob: "2 years (competitive, waitlisted)",
    timeMonths: 24,
    salaryEntry: 66470, salaryMid: 94260, salaryTop: 120060,
    salaryNote: "National BLS figures shown above. California's statewide median is even higher, around $118,330/yr — the 2nd-highest of any state. (Source: BLS Occupational Outlook Handbook, May 2024 data)",
    licenseRequired: true,
    licenseBody: "CA Registered Dental Hygienist (RDH) license — Dental Hygiene Board of California",
    paths: [
      { name: "Cabrillo College — Dental Hygiene A.S.", type: "associate", school: "Cabrillo College", location: "Aptos, CA (Santa Cruz County)", duration: "2 years; new cohort every other year (20 students)", cost: "~$21,264 total for the 2-year program", link: "https://www.cabrillo.edu/dental-hygiene/", notes: "Nearest accredited program — College of San Mateo's own dental hygiene program has been on indefinite hold since 2010 due to state budget constraints, and CSM's website directs applicants to Cabrillo instead. CODA-accredited; competitive and often waitlisted." }
    ],
    steps: [
      { text: "Before you graduate, explore healthcare through your school's Health Science pathway or a hospital volunteer program", detail: "There's no dental-specific youth program confirmed locally, but Sequoia High School's Health Career Academy and hospital teen volunteer programs at Kaiser, Sutter, and Stanford build the healthcare exposure that helps later.", link: "https://www.sequoiahs.org/DEPARTMENT/Health-Career-Academy/index.html" },
      { text: "Finish high school — biology, chemistry, and anatomy help", detail: "These courses aren't formal prerequisites, but they make the program's science-heavy first year easier." },
      { text: "Complete required prerequisite coursework (anatomy, microbiology, English)", detail: "Most applicants complete these at a community college before applying, since they're graded competitively as part of admission." },
      { text: "Apply to Cabrillo College's Dental Hygiene A.S. program (competitive, ~20 spots every other year)", detail: "Because Cabrillo only enrolls a new cohort every other year, planning your application a year in advance is common." },
      { text: "Complete the 2-year program, including clinical rotations", detail: "Rotations put you in a real dental clinic under supervision well before graduation." },
      { text: "Pass the National Board Dental Hygiene Exam and the CA RDH clinical/licensing exam", detail: "The national exam is written; California's exam adds a hands-on clinical component specific to state licensing." },
      { text: "Apply at dental practices throughout San Mateo County", detail: "Many hygienists find they can negotiate a condensed 3–4 day work week at full-time-equivalent pay once licensed." }
    ],
    localEmployers: ["Kaiser Permanente Dental", "Western Dental", "Independent Bay Area dental practices"],
    growthOutlook: "BLS projects +7% growth (2024–2034, \"faster than average\"), about 15,300 openings each year nationally. (Source: BLS Occupational Outlook Handbook)",
    quoteType: "fact",
    quoteText: "Most dental hygiene programs take about three years to complete, and many hygienists work condensed 3–4 day-a-week schedules at full-time-equivalent pay.",
    quoteSourceLabel: "trade-schools.net",
    quoteSourceUrl: "https://www.trade-schools.net/health-care/dental-hygienist",
    skills: ["Precision", "Empathy", "Manual dexterity", "Communication", "Science aptitude"],
    quizTraits: { handsOn: 4, helpingPeople: 5, tech: 2, outdoors: 1, fastStart: 2, creative: 1, computers: 1, precision: 5, animals: 1, food: 1, calmUnderPressure: 3, machinery: 1, teamwork: 3, leadership: 2, structure: 5 },
    indeedQuery: "dental+hygienist",
    indeedLocation: "San+Mateo%2C+CA",
    es: {
      title: "Higienista Dental",
      tagline: "Buen salario, horarios flexibles — un título de dos años y uno de los oficios mejor pagados de California.",
      timeToJob: "2 años (competitivo, con lista de espera)",
      salaryNote: "Cifras nacionales del BLS mostradas arriba. La mediana estatal de California es incluso más alta, alrededor de $118,330/año — la segunda más alta de cualquier estado. (Fuente: BLS Occupational Outlook Handbook, datos de mayo de 2024)",
      licenseBody: "Licencia de Higienista Dental Registrado (RDH) de CA — Dental Hygiene Board of California",
      growthOutlook: "El BLS proyecta un crecimiento del +7% (2024–2034, \"más rápido que el promedio\"), con cerca de 15,300 vacantes cada año a nivel nacional. (Fuente: BLS Occupational Outlook Handbook)",
      quoteText: "La mayoría de los programas de higiene dental toman alrededor de tres años en completarse, y muchos higienistas trabajan horarios condensados de 3 a 4 días a la semana con salario equivalente a tiempo completo.",
      skills: ["Precisión", "Empatía", "Destreza manual", "Comunicación", "Aptitud científica"],
      steps: [
        { text: "Antes de graduarte, explora el sector salud a través del programa de Ciencias de la Salud de tu escuela o un programa de voluntariado hospitalario", detail: "No se confirmó ningún programa juvenil específico de odontología a nivel local, pero el Health Career Academy de Sequoia High School y los programas de voluntariado juvenil en Kaiser, Sutter y Stanford brindan la exposición al sector salud que ayuda más adelante.", link: "https://www.sequoiahs.org/DEPARTMENT/Health-Career-Academy/index.html" },
        { text: "Termina la preparatoria — la biología, química y anatomía ayudan", detail: "Estos cursos no son prerrequisitos formales, pero facilitan el primer año del programa, que tiene mucha carga científica." },
        { text: "Completa los cursos prerrequisitos requeridos (anatomía, microbiología, inglés)", detail: "La mayoría de los solicitantes los toma en una universidad comunitaria antes de aplicar, ya que se califican de forma competitiva como parte de la admisión." },
        { text: "Solicita el programa de Higiene Dental A.S. de Cabrillo College (competitivo, ~20 lugares cada dos años)", detail: "Como Cabrillo solo inscribe una nueva cohorte cada dos años, es común planear la solicitud con un año de anticipación." },
        { text: "Completa el programa de 2 años, incluyendo rotaciones clínicas", detail: "Las rotaciones te ponen en una clínica dental real bajo supervisión mucho antes de graduarte." },
        { text: "Aprueba el Examen Nacional de la Junta de Higiene Dental y el examen clínico/de licencia RDH de CA", detail: "El examen nacional es escrito; el examen de California agrega un componente clínico práctico específico para la licencia estatal." },
        { text: "Solicita empleo en consultorios dentales en todo el Condado de San Mateo", detail: "Muchos higienistas logran negociar una semana laboral condensada de 3 a 4 días con salario equivalente a tiempo completo una vez licenciados." }
      ],
      paths: [
        { duration: "2 años; nueva cohorte cada dos años (20 estudiantes)", cost: "~$21,264 en total por el programa de 2 años", notes: "El programa acreditado más cercano — el propio programa de higiene dental de College of San Mateo ha estado suspendido indefinidamente desde 2010 debido a restricciones presupuestarias estatales, y el sitio web de CSM dirige a los solicitantes a Cabrillo. Acreditado por CODA; competitivo y a menudo con lista de espera." }
      ]
    },
  },
  {
    id: "solar-installer",
    title: "Solar & EV Installer",
    emoji: "☀️",
    tagline: "One of the fastest-growing jobs in the country — Bay Area rooftops and EV chargers need installers now.",
    category: "Clean Energy",
    demandLocal: "very-high",
    openingsAnnualUS: 4100,
    timeToJob: "3–6 months",
    timeMonths: 4,
    salaryEntry: 41600, salaryMid: 51860, salaryTop: 79970,
    salaryNote: "National BLS figures shown above; Bay Area pay is often higher but we couldn't independently verify exact local figures directly on bls.gov. (Source: BLS Occupational Outlook Handbook, May 2024 data)",
    licenseRequired: false,
    licenseBody: "No state license required; NABCEP PV Installation Professional certification is voluntary but valued by employers",
    paths: [
      { name: "Skyline College — Solar Installation Certificate", type: "certificate", school: "Skyline College", location: "San Bruno", duration: "1 semester (Career Certificate) up to Certificate of Achievement", cost: "~$46/unit (CA resident)", link: "https://catalog.skylinecollege.edu/current/programs/solar-installation-cc.php", notes: "Includes ELEC 410 Introduction to Solar Installation and Integration; a Solar Technology & Business Certificate is also offered." },
      { name: "IBEW Local 617 Electrical Apprenticeship", type: "apprenticeship", school: "IBEW Local 617", location: "San Mateo County", duration: "5 years", cost: "Free — paid apprenticeship", link: "https://smjatc617.org/apprenticeship/", notes: "No separate \"solar apprenticeship\" is documented on IBEW 617's site — PV/solar work is covered within the general electrical apprenticeship." }
    ],
    steps: [
      { text: "Before you graduate, get hands-on exposure through Aragon High School's MC3 program, or ask about dual enrollment in Skyline's Solar Installation certificate", detail: "MC3 is backed in part by IBEW Local 617 and covers electrical-adjacent trade basics with no age minimum; ask your counselor whether Skyline College's Solar Installation courses are available through dual enrollment (CCAP) at your school.", link: "https://ahs.smuhsd.org/academics/career-technical-education-cte/engineering-architecture-pathway/cte-engineering-technology-trade-mc3-program" },
      { text: "Finish high school or GED", detail: "No specific prerequisite coursework is required to enroll in the certificate program." },
      { text: "Enroll in Skyline College's Solar Installation certificate program", detail: "The program includes ELEC 410, which covers PV system design, wiring, and integration basics." },
      { text: "Get an OSHA 10 safety card (often included in program training)", detail: "This general construction safety card is frequently required by employers before you're allowed on a job site." },
      { text: "Apply to solar companies or the IBEW Local 617 electrical apprenticeship", detail: "Going the apprenticeship route folds solar work into the broader electrical trade rather than treating it as a separate specialty." },
      { text: "Work toward NABCEP PV Installation Professional certification (58 hours of advanced training plus documented experience)", detail: "NABCEP typically requires documented field experience on top of the coursework, so most installers earn it a year or more into the job." }
    ],
    localEmployers: ["Tesla Energy", "SunPower", "Sunrun", "Bay Area electrical contractors"],
    growthOutlook: "BLS projects +42% growth (2024–2034) — officially one of the fastest-growing occupations in the country, though it's a smaller field overall (~4,100 openings/year). (Source: BLS Occupational Outlook Handbook)",
    quoteType: "fact",
    quoteText: "U.S. solar capacity grew more than 45% from 2022 to 2023, and over 279,000 Americans worked in solar in 2023.",
    quoteSourceLabel: "trade-schools.net (via U.S. Department of Energy / National Solar Jobs Census)",
    quoteSourceUrl: "https://www.trade-schools.net/environmental/solar-energy",
    skills: ["Heights comfort", "Physical fitness", "Electrical basics", "Safety mindset", "Fast learner"],
    quizTraits: { handsOn: 5, helpingPeople: 2, tech: 4, outdoors: 5, fastStart: 5, creative: 1, computers: 2, precision: 3, animals: 1, food: 1, calmUnderPressure: 2, machinery: 3, teamwork: 3, leadership: 2, structure: 3 },
    indeedQuery: "solar+installer",
    indeedLocation: "San+Mateo%2C+CA",
    es: {
      title: "Instalador Solar y de Vehículos Eléctricos",
      tagline: "Uno de los empleos de más rápido crecimiento en el país — los techos y cargadores de vehículos eléctricos del Área de la Bahía necesitan instaladores ahora.",
      timeToJob: "3–6 meses",
      salaryNote: "Cifras nacionales del BLS mostradas arriba; el salario en el Área de la Bahía suele ser más alto, pero no pudimos verificar cifras locales exactas de forma independiente en bls.gov. (Fuente: BLS Occupational Outlook Handbook, datos de mayo de 2024)",
      licenseBody: "No se requiere licencia estatal; la certificación NABCEP PV Installation Professional es voluntaria pero valorada por los empleadores",
      growthOutlook: "El BLS proyecta un crecimiento del +42% (2024–2034) — oficialmente una de las ocupaciones de más rápido crecimiento en el país, aunque es un campo más pequeño en general (~4,100 vacantes/año). (Fuente: BLS Occupational Outlook Handbook)",
      quoteText: "La capacidad solar de EE. UU. creció más del 45% entre 2022 y 2023, y más de 279,000 estadounidenses trabajaron en energía solar en 2023.",
      skills: ["Comodidad con las alturas", "Aptitud física", "Conceptos básicos de electricidad", "Mentalidad de seguridad", "Aprendizaje rápido"],
      steps: [
        { text: "Antes de graduarte, obtén experiencia práctica a través del programa MC3 de Aragon High School, o pregunta sobre inscripción dual en el certificado de Instalación Solar de Skyline", detail: "MC3 está respaldado en parte por IBEW Local 617 y cubre fundamentos de oficios relacionados con la electricidad sin edad mínima; pregunta a tu consejero si los cursos de Instalación Solar de Skyline College están disponibles mediante inscripción dual (CCAP) en tu escuela.", link: "https://ahs.smuhsd.org/academics/career-technical-education-cte/engineering-architecture-pathway/cte-engineering-technology-trade-mc3-program" },
        { text: "Termina la preparatoria o el GED", detail: "No se requiere ningún curso prerrequisito específico para inscribirte en el programa de certificado." },
        { text: "Inscríbete en el programa de certificado de Instalación Solar de Skyline College", detail: "El programa incluye ELEC 410, que cubre el diseño de sistemas fotovoltaicos, el cableado y los conceptos básicos de integración." },
        { text: "Obtén una tarjeta de seguridad OSHA 10 (a menudo incluida en la capacitación del programa)", detail: "Esta tarjeta general de seguridad en construcción es exigida con frecuencia por los empleadores antes de permitirte trabajar en la obra." },
        { text: "Solicita empleo en empresas solares o en el aprendizaje eléctrico de IBEW Local 617", detail: "La vía del aprendizaje incorpora el trabajo solar dentro del oficio eléctrico general en lugar de tratarlo como una especialidad aparte." },
        { text: "Trabaja hacia la certificación NABCEP PV Installation Professional (58 horas de capacitación avanzada más experiencia documentada)", detail: "NABCEP normalmente exige experiencia de campo documentada además de las horas de clase, así que la mayoría de los instaladores la obtienen un año o más después de empezar a trabajar." }
      ],
      paths: [
        { duration: "1 semestre (Certificado de Carrera) hasta Certificado de Logro", cost: "~$46/unidad (residente de CA)", notes: "Incluye ELEC 410 Introducción a la Instalación e Integración Solar; también se ofrece un Certificado de Tecnología y Negocios Solares." },
        { duration: "5 años", cost: "Gratis — aprendizaje pagado", notes: "No hay un \"aprendizaje solar\" separado documentado en el sitio de IBEW 617 — el trabajo fotovoltaico/solar está cubierto dentro del aprendizaje eléctrico general." }
      ]
    },
  },
  {
    id: "welder",
    title: "Welder",
    emoji: "🔥",
    tagline: "Fuse and cut metal to build and repair everything from ships to pipelines — steady demand, hands-on daily.",
    category: "Construction & Energy",
    demandLocal: "moderate",
    openingsAnnualUS: 45600,
    timeToJob: "1 year (certificate) or 4 years (apprenticeship)",
    timeMonths: 12,
    salaryEntry: 38130, salaryMid: 51000, salaryTop: 75850,
    salaryNote: "National BLS figures. Bay Area job listings suggest higher local pay, but we couldn't independently verify exact figures on bls.gov. (Source: BLS Occupational Outlook Handbook / OEWS, May 2024 data)",
    licenseRequired: false,
    licenseBody: "No state license required; AWS certification is voluntary but a de facto requirement at most Bay Area shops",
    paths: [
      { name: "Chabot College — Welding Technology", type: "certificate", school: "Chabot College", location: "Hayward, CA", duration: "Certificate of Proficiency in Welding, or Inspection & Pipe Welding; AS degree also offered", cost: "~$46/unit CA resident (~$770 tuition + ~$1,917 books/supplies for the Inspection & Pipe Welding certificate)", link: "https://www.chabotcollege.edu/academics/applied-technology-business/welding/program.php", notes: "Nearest community college welding program — none of the three San Mateo County colleges currently offer one." },
      { name: "Ironworkers Local 377 Apprenticeship", type: "apprenticeship", school: "Ironworkers Local 377", location: "SF Bay Area & North Coast", duration: "4 years", cost: "Free — paid apprenticeship", link: "https://www.ironworkers377.com/en", notes: "Structural ironworking apprenticeship that includes welding training." }
    ],
    steps: [
      { text: "Before you graduate, get general construction-trade exposure through Aragon High School's MC3 program", detail: "It's not welding-specific, but this on-campus, union-backed program (partnered in part with Sheet Metal Workers Local 104) teaches shared building-trade fundamentals — open to any enrolled student, no age minimum.", link: "https://ahs.smuhsd.org/academics/career-technical-education-cte/engineering-architecture-pathway/cte-engineering-technology-trade-mc3-program" },
      { text: "Finish high school or GED", detail: "No specific coursework prerequisites are required for either the certificate program or the apprenticeship." },
      { text: "Enroll in Chabot College's Welding Technology certificate program, or apply to the Ironworkers Local 377 apprenticeship", detail: "The certificate route is faster and self-paced; the apprenticeship pays you while you train but runs on a fixed 4-year schedule." },
      { text: "Learn core processes (MIG/TIG/stick) and blueprint reading", detail: "Most programs rotate you through all three processes before you specialize, since different employers standardize on different methods." },
      { text: "Pursue AWS certification (e.g., D1.1 structural code) — voluntary but expected by most shops", detail: "Certification is process- and position-specific, so welders often end up holding several certifications for different joints and materials." },
      { text: "Apply to shipyards, fabrication shops, or construction contractors", detail: "Shipyard and structural work often pays a premium for welders willing to work in tighter or elevated positions." }
    ],
    localEmployers: ["Bay Ship & Yacht Co.", "EBARA HG", "Bay Area fabrication shops"],
    growthOutlook: "BLS projects a modest +2% growth (2024–2034, \"slower than average\"), but still about 45,600 openings each year nationally, mostly from workers retiring. (Source: BLS Occupational Outlook Handbook)",
    quoteType: "quote",
    quoteText: "My membership helps me stay cutting edge on all the new technology and standards that industry uses. It has benefited me in my career by constantly giving me the gift of knowledge.",
    quoteAuthor: "Brian Wall, Certified Welding Inspector & Educator",
    quoteSourceLabel: "American Welding Society",
    quoteSourceUrl: "https://www.aws.org/membership/individuals/member/",
    skills: ["Blueprint reading", "MIG/TIG/stick technique", "Metal fabrication & fitting", "Code compliance", "Shop safety & PPE"],
    quizTraits: { handsOn: 5, helpingPeople: 1, tech: 3, outdoors: 3, fastStart: 4, creative: 2, computers: 1, precision: 5, animals: 1, food: 1, calmUnderPressure: 3, machinery: 3, teamwork: 2, leadership: 2, structure: 4 },
    indeedQuery: "welder",
    indeedLocation: "San+Mateo%2C+CA",
    es: {
      title: "Soldador",
      tagline: "Une y corta metal para construir y reparar de todo, desde barcos hasta tuberías — demanda constante, trabajo práctico todos los días.",
      timeToJob: "1 año (certificado) o 4 años (aprendizaje)",
      salaryNote: "Cifras nacionales del BLS. Los anuncios de empleo en el Área de la Bahía sugieren un salario local más alto, pero no pudimos verificar cifras exactas en bls.gov. (Fuente: BLS Occupational Outlook Handbook / OEWS, datos de mayo de 2024)",
      licenseBody: "No se requiere licencia estatal; la certificación AWS es voluntaria pero un requisito de facto en la mayoría de los talleres del Área de la Bahía",
      growthOutlook: "El BLS proyecta un modesto crecimiento del +2% (2024–2034, \"más lento que el promedio\"), pero aún así cerca de 45,600 vacantes cada año a nivel nacional, principalmente por jubilaciones. (Fuente: BLS Occupational Outlook Handbook)",
      quoteText: "Mi membresía me ayuda a mantenerme a la vanguardia de toda la nueva tecnología y los estándares que usa la industria. Me ha beneficiado en mi carrera al darme constantemente el regalo del conocimiento.",
      quoteAuthor: "Brian Wall, Inspector y Educador Certificado en Soldadura",
      skills: ["Lectura de planos", "Técnica MIG/TIG/electrodo", "Fabricación y ajuste de metal", "Cumplimiento de códigos", "Seguridad del taller y EPP"],
      steps: [
        { text: "Antes de graduarte, obtén exposición general a los oficios de construcción a través del programa MC3 de Aragon High School", detail: "No es específico de soldadura, pero este programa dentro del horario escolar, respaldado por sindicatos (en parte por Sheet Metal Workers Local 104), enseña fundamentos compartidos entre los oficios de construcción — abierto a cualquier estudiante inscrito, sin edad mínima.", link: "https://ahs.smuhsd.org/academics/career-technical-education-cte/engineering-architecture-pathway/cte-engineering-technology-trade-mc3-program" },
        { text: "Termina la preparatoria o el GED", detail: "No se requieren cursos prerrequisito específicos ni para el programa de certificado ni para el aprendizaje." },
        { text: "Inscríbete en el programa de certificado de Tecnología de Soldadura de Chabot College, o solicita el aprendizaje de Ironworkers Local 377", detail: "La vía del certificado es más rápida y a tu propio ritmo; el aprendizaje te paga mientras te capacitas, pero sigue un calendario fijo de 4 años." },
        { text: "Aprende los procesos principales (MIG/TIG/electrodo) y la lectura de planos", detail: "La mayoría de los programas te hacen rotar por los tres procesos antes de especializarte, ya que distintos empleadores usan métodos diferentes como estándar." },
        { text: "Obtén la certificación AWS (por ejemplo, código estructural D1.1) — voluntaria, pero esperada en la mayoría de los talleres", detail: "La certificación es específica según el proceso y la posición de soldadura, así que los soldadores suelen terminar con varias certificaciones para distintas uniones y materiales." },
        { text: "Solicita empleo en astilleros, talleres de fabricación o contratistas de construcción", detail: "El trabajo en astilleros y estructuras metálicas suele pagar un extra a los soldadores dispuestos a trabajar en posiciones más cerradas o elevadas." }
      ],
      paths: [
        { duration: "Certificado de Competencia en Soldadura, o en Inspección y Soldadura de Tuberías; también se ofrece un título AS", cost: "~$46/unidad para residentes de CA (~$770 de colegiatura + ~$1,917 de libros/materiales para el certificado de Inspección y Soldadura de Tuberías)", notes: "El programa de soldadura de universidad comunitaria más cercano — ninguno de los tres colegios del Condado de San Mateo lo ofrece actualmente." },
        { duration: "4 años", cost: "Gratis — aprendizaje pagado", notes: "Aprendizaje de estructuras metálicas que incluye capacitación en soldadura." }
      ]
    },
  },
  {
    id: "automotive-technician",
    title: "Automotive Technician",
    emoji: "🚗",
    tagline: "Diagnose and repair the increasingly computerized systems inside modern vehicles.",
    category: "Automotive",
    demandLocal: "moderate",
    openingsAnnualUS: 70000,
    timeToJob: "1 semester up to 2 years (AS degree)",
    timeMonths: 6,
    salaryEntry: 33660, salaryMid: 49670, salaryTop: 80850,
    salaryNote: "National BLS figures. Bay Area aggregator estimates run higher (~$64k–$70k/yr), but that's not an official BLS figure. (Source: BLS Occupational Outlook Handbook, May 2024 data)",
    licenseRequired: false,
    licenseBody: "No general state license; ASE certification is voluntary. CA does require a separate state license for Smog Check and Vehicle Safety Systems Inspection technicians specifically.",
    paths: [
      { name: "Skyline College — Automotive Technology", type: "certificate", school: "Skyline College", location: "San Bruno", duration: "Entry-Level Certificate (7 units) up to AS degree (60 units); 7 stackable Certificates of Achievement", cost: "~$800/semester tuition & fees, plus ~$900 for required tools in the first semester", link: "https://skylinecollege.edu/automotive/", notes: "Reports 100% employment after program completion and 91% retention. Industry partners include Subaru, Audi, Nissan/Infiniti, Ford, and Mercedes-Benz training academies." }
    ],
    steps: [
      { text: "Before you graduate, ask your counselor about dual enrollment in Skyline College's Automotive Technology program", detail: "San Mateo County high schools have active dual-enrollment (CCAP) agreements with the county's community colleges, letting juniors and seniors take courses tuition-free — confirm with your school whether Automotive Technology is included.", link: "https://skylinecollege.edu/careerandworkforce/highschoolpartnerships.php" },
      { text: "Finish high school or GED", detail: "Basic computer literacy is increasingly assumed, since diagnostics on most vehicles now run through software." },
      { text: "Enroll in Skyline College's Automotive Technology program, starting with the Entry-Level Certificate", detail: "The Entry-Level Certificate is only 7 units, so it's designed to get you job-ready quickly before you decide whether to keep stacking credentials." },
      { text: "Complete stackable Certificates of Achievement (engine performance, brakes, drivetrain, electrical) or the full AS degree", detail: "Each certificate targets a specific system, so you can specialize while still working toward the full AS degree if you want it." },
      { text: "Pursue ASE certification once employed — voluntary but widely expected by dealerships", detail: "ASE offers separate tests for each vehicle system; passing enough of them earns the ASE Master Technician title." },
      { text: "Optional: pursue a state license for Smog Check or Vehicle Safety Systems Inspection work", detail: "These are the only automotive repair specialties in California that legally require a state license, separate from ASE's voluntary certifications." }
    ],
    localEmployers: ["City Toyota (Daly City)", "Capitol Toyota", "San Francisco Honda Acura", "Victory Honda of San Bruno"],
    growthOutlook: "BLS projects +4% growth (2024–2034, \"about as fast as average\"), about 70,000 openings each year nationally. (Source: BLS Occupational Outlook Handbook)",
    quoteType: "quote",
    quoteText: "I've always set high standards for myself and take pride in doing the job right the first time. World Class status represents excellence, professionalism, and a commitment to staying on top of my craft.",
    quoteAuthor: "Nicholas Rispoli, ASE World Class Technician, Elitek Vehicle Services (Indiana — not California-specific)",
    quoteSourceLabel: "Auto Care Association",
    quoteSourceUrl: "https://www.autocare.org/networking-and-development/awards-and-scholarships/world-class-technician",
    skills: ["Engine & electrical diagnostics", "Computerized scan tools", "Brake/suspension/drivetrain repair", "Technical service manuals", "Customer communication"],
    quizTraits: { handsOn: 5, helpingPeople: 2, tech: 4, outdoors: 2, fastStart: 4, creative: 1, computers: 3, precision: 4, animals: 1, food: 1, calmUnderPressure: 2, machinery: 3, teamwork: 2, leadership: 2, structure: 3 },
    indeedQuery: "automotive+technician",
    indeedLocation: "San+Mateo%2C+CA",
    es: {
      title: "Técnico Automotriz",
      tagline: "Diagnostica y repara los sistemas cada vez más computarizados de los vehículos modernos.",
      timeToJob: "1 semestre hasta 2 años (título AS)",
      salaryNote: "Cifras nacionales del BLS. Las estimaciones de agregadores del Área de la Bahía son más altas (~$64,000–$70,000/año), pero esa no es una cifra oficial del BLS. (Fuente: BLS Occupational Outlook Handbook, datos de mayo de 2024)",
      licenseBody: "No se requiere licencia estatal general; la certificación ASE es voluntaria. CA sí requiere una licencia estatal separada específicamente para técnicos de Smog Check y de Inspección de Sistemas de Seguridad Vehicular.",
      growthOutlook: "El BLS proyecta un crecimiento del +4% (2024–2034, \"tan rápido como el promedio\"), con cerca de 70,000 vacantes cada año a nivel nacional. (Fuente: BLS Occupational Outlook Handbook)",
      quoteText: "Siempre me he fijado altos estándares y me enorgullezco de hacer el trabajo bien desde la primera vez. El estatus World Class representa excelencia, profesionalismo y un compromiso de mantenerme al día en mi oficio.",
      quoteAuthor: "Nicholas Rispoli, Técnico ASE World Class, Elitek Vehicle Services (Indiana — no es específico de California)",
      skills: ["Diagnóstico de motor y eléctrico", "Herramientas de escaneo computarizadas", "Reparación de frenos/suspensión/transmisión", "Manuales técnicos de servicio", "Comunicación con el cliente"],
      steps: [
        { text: "Antes de graduarte, pregunta a tu consejero sobre la inscripción dual en el programa de Tecnología Automotriz de Skyline College", detail: "Las preparatorias del Condado de San Mateo tienen acuerdos activos de inscripción dual (CCAP) con las universidades comunitarias del condado, que permiten a estudiantes de penúltimo y último año tomar cursos sin costo — confirma con tu escuela si Tecnología Automotriz está incluido.", link: "https://skylinecollege.edu/careerandworkforce/highschoolpartnerships.php" },
        { text: "Termina la preparatoria o el GED", detail: "Cada vez se asume más un conocimiento básico de computación, ya que el diagnóstico de la mayoría de los vehículos ahora se hace mediante software." },
        { text: "Inscríbete en el programa de Tecnología Automotriz de Skyline College, comenzando con el Certificado de Nivel de Entrada", detail: "El Certificado de Nivel de Entrada es de solo 7 unidades, diseñado para que estés listo para trabajar rápidamente antes de decidir si sigues acumulando más certificados." },
        { text: "Completa los Certificados de Logro apilables (rendimiento del motor, frenos, transmisión, sistema eléctrico) o el título AS completo", detail: "Cada certificado se enfoca en un sistema específico, así que puedes especializarte mientras avanzas hacia el título AS completo si lo deseas." },
        { text: "Obtén la certificación ASE una vez empleado — voluntaria, pero ampliamente esperada por los concesionarios", detail: "ASE ofrece exámenes separados para cada sistema del vehículo; aprobar suficientes te da el título de Técnico Maestro ASE." },
        { text: "Opcional: obtén una licencia estatal para trabajos de Smog Check o Inspección de Sistemas de Seguridad Vehicular", detail: "Estas son las únicas especialidades de reparación automotriz en California que legalmente requieren una licencia estatal, aparte de las certificaciones voluntarias de ASE." }
      ],
      paths: [
        { duration: "Certificado de Nivel de Entrada (7 unidades) hasta título AS (60 unidades); 7 Certificados de Logro apilables", cost: "~$800/semestre de colegiatura y cuotas, más ~$900 en herramientas requeridas el primer semestre", notes: "Reporta 100% de empleo tras completar el programa y 91% de retención. Los socios de la industria incluyen las academias de capacitación de Subaru, Audi, Nissan/Infiniti, Ford y Mercedes-Benz." }
      ]
    },
  },
  {
    id: "pharmacy-technician",
    title: "Pharmacy Technician",
    emoji: "💊",
    tagline: "Support pharmacists in preparing and dispensing medications — fast entry with a clear state licensing path.",
    category: "Healthcare",
    demandLocal: "high",
    openingsAnnualUS: 49000,
    timeToJob: "9 months",
    timeMonths: 9,
    salaryEntry: 35100, salaryMid: 43460, salaryTop: 59450,
    salaryNote: "National BLS figures. Bay Area techs may earn more — one source citing BLS OEWS data puts the SF-Oakland-Hayward metro mean around $59k/yr, not independently re-verified. (Source: BLS Occupational Outlook Handbook, May 2024 data)",
    licenseRequired: true,
    licenseBody: "CA Pharmacy Technician License — California State Board of Pharmacy",
    paths: [
      { name: "City College of San Francisco — Entry-Level Pharmacy Technician", type: "certificate", school: "City College of San Francisco", location: "San Francisco, CA", duration: "9 months (2 semesters, 34 units, includes practicum)", cost: "~$46/unit CA resident (~$1,564 for 34 units, plus books/supplies)", link: "https://www.ccsf.edu/degrees-certificates/pharmacy-technician", notes: "Nearest program — none of the three San Mateo County colleges currently offer a pharmacy technician program." }
    ],
    steps: [
      { text: "Before you graduate, explore healthcare through your school's Health Science pathway or a hospital volunteer program", detail: "There's no pharmacy-specific youth program confirmed locally, but Sequoia High School's Health Career Academy and hospital teen volunteer programs at Kaiser, Sutter, and Stanford build healthcare experience that helps later.", link: "https://www.sequoiahs.org/DEPARTMENT/Health-Career-Academy/index.html" },
      { text: "Finish high school or GED", detail: "Strong basic math skills help, since pharmacy technicians calculate dosages and conversions daily." },
      { text: "Complete a CA Board of Pharmacy-qualifying pathway — e.g. City College of San Francisco's 9-month Entry-Level Pharmacy Technician certificate", detail: "The program includes a hands-on practicum inside a real pharmacy before you graduate." },
      { text: "Pass a national certification exam (PTCB's CPhT or NHA's ExCPT)", detail: "This national exam is separate from your state license — you'll need both to legally work as a pharmacy technician in California." },
      { text: "Apply for your CA Pharmacy Technician License through the State Board of Pharmacy (background check/fingerprinting required)", detail: "Processing typically takes several weeks once your background check clears, so it's worth applying as soon as you pass your certification exam." },
      { text: "Apply to Kaiser Permanente, Walgreens, CVS, or local hospital pharmacies", detail: "Retail pharmacies tend to hire faster, while hospital pharmacy roles often pay more but may want some retail experience first." }
    ],
    localEmployers: ["Kaiser Permanente", "Walgreens", "CVS Pharmacy", "Stanford Health Care", "Sutter Health / Mills-Peninsula"],
    growthOutlook: "BLS projects +6% growth (2024–2034, \"faster than average\"), about 49,000 openings each year nationally. (Source: BLS Occupational Outlook Handbook)",
    quoteType: "quote",
    quoteText: "Certification provides great opportunities for technicians to function at a higher level of practice.",
    quoteAuthor: "Gregory Gonzales, CPhT",
    quoteSourceLabel: "Pharmacy Technician Certification Board",
    quoteSourceUrl: "https://www.ptcb.org/viewpoints",
    skills: ["Prescription accuracy & dispensing", "Pharmacy math & dosage calculation", "Inventory & insurance processing", "Sterile compounding basics", "Patient communication"],
    quizTraits: { handsOn: 2, helpingPeople: 4, tech: 2, outdoors: 1, fastStart: 4, creative: 1, computers: 2, precision: 5, animals: 1, food: 1, calmUnderPressure: 3, machinery: 1, teamwork: 3, leadership: 1, structure: 5 },
    indeedQuery: "pharmacy+technician",
    indeedLocation: "San+Mateo%2C+CA",
    es: {
      title: "Técnico de Farmacia",
      tagline: "Apoya a los farmacéuticos en la preparación y entrega de medicamentos — ingreso rápido con una vía clara de licencia estatal.",
      timeToJob: "9 meses",
      salaryNote: "Cifras nacionales del BLS. Los técnicos del Área de la Bahía podrían ganar más — una fuente que cita datos de BLS OEWS indica una media de aproximadamente $59,000/año en el área metropolitana de SF-Oakland-Hayward, no verificada de forma independiente. (Fuente: BLS Occupational Outlook Handbook, datos de mayo de 2024)",
      licenseBody: "Licencia de Técnico de Farmacia de CA — California State Board of Pharmacy",
      growthOutlook: "El BLS proyecta un crecimiento del +6% (2024–2034, \"más rápido que el promedio\"), con cerca de 49,000 vacantes cada año a nivel nacional. (Fuente: BLS Occupational Outlook Handbook)",
      quoteText: "La certificación brinda excelentes oportunidades para que los técnicos funcionen en un nivel más alto de práctica.",
      quoteAuthor: "Gregory Gonzales, CPhT",
      skills: ["Precisión y entrega de recetas", "Matemáticas de farmacia y cálculo de dosis", "Procesamiento de inventario y seguros", "Conceptos básicos de mezcla estéril", "Comunicación con el paciente"],
      steps: [
        { text: "Antes de graduarte, explora el sector salud a través del programa de Ciencias de la Salud de tu escuela o un programa de voluntariado hospitalario", detail: "No se confirmó ningún programa juvenil específico de farmacia a nivel local, pero el Health Career Academy de Sequoia High School y los programas de voluntariado juvenil en Kaiser, Sutter y Stanford brindan experiencia en salud que ayuda más adelante.", link: "https://www.sequoiahs.org/DEPARTMENT/Health-Career-Academy/index.html" },
        { text: "Termina la preparatoria o el GED", detail: "Tener buenas habilidades básicas de matemáticas ayuda, ya que los técnicos de farmacia calculan dosis y conversiones a diario." },
        { text: "Completa una vía calificada por la CA Board of Pharmacy — por ejemplo, el certificado de Técnico de Farmacia de Nivel de Entrada de 9 meses de City College of San Francisco", detail: "El programa incluye una práctica dentro de una farmacia real antes de graduarte." },
        { text: "Aprueba un examen de certificación nacional (CPhT de PTCB o ExCPT de NHA)", detail: "Este examen nacional es distinto de tu licencia estatal — necesitarás ambos para trabajar legalmente como técnico de farmacia en California." },
        { text: "Solicita tu Licencia de Técnico de Farmacia de CA a través de la State Board of Pharmacy (se requiere verificación de antecedentes/huellas dactilares)", detail: "El trámite suele tardar varias semanas una vez que se aprueba la verificación de antecedentes, así que conviene solicitarla apenas apruebes tu examen de certificación." },
        { text: "Solicita empleo en Kaiser Permanente, Walgreens, CVS o farmacias de hospitales locales", detail: "Las farmacias minoristas suelen contratar más rápido, mientras que los puestos en farmacias hospitalarias pagan más pero a veces piden experiencia previa en el sector minorista." }
      ],
      paths: [
        { duration: "9 meses (2 semestres, 34 unidades, incluye práctica)", cost: "~$46/unidad para residentes de CA (~$1,564 por 34 unidades, más libros/materiales)", notes: "El programa más cercano — ninguno de los tres colegios del Condado de San Mateo ofrece actualmente un programa de técnico de farmacia." }
      ]
    },
  },
  {
    id: "dental-assistant",
    title: "Dental Assistant",
    emoji: "🪥",
    tagline: "Work chairside with dentists on patient care, x-rays, and sterilization — licensed in under a year.",
    category: "Healthcare",
    demandLocal: "high",
    openingsAnnualUS: 52900,
    timeToJob: "10 months",
    timeMonths: 10,
    salaryEntry: 36190, salaryMid: 47300, salaryTop: 61780,
    salaryNote: "National BLS figures shown above. College of San Mateo's own program page cites a $75,000/yr median for Registered Dental Assistants in this region. (Source: BLS Occupational Outlook Handbook, May 2024 data; CSM program page)",
    licenseRequired: true,
    licenseBody: "CA Registered Dental Assistant (RDA) — Dental Board of California (an entry-level unlicensed DA tier also exists)",
    paths: [
      { name: "College of San Mateo — Dental Assisting", type: "certificate", school: "College of San Mateo", location: "San Mateo", duration: "~10 months (2 semesters); Certificate of Achievement or AS degree", cost: "~$2,000–$3,000 (registration, books, supplies, uniforms)", link: "https://collegeofsanmateo.edu/dentalassisting/", notes: "Prepares graduates for both the CA RDA exam and the national CDA exam; CSM cites a strong Bay Area dental-office placement network." }
    ],
    steps: [
      { text: "Before you graduate, explore healthcare through your school's Health Science pathway or a hospital volunteer program", detail: "Sequoia High School's Health Career Academy (with a HOSA chapter) and hospital teen volunteer programs at Kaiser, Sutter's Mills-Peninsula, and Stanford build real healthcare exposure while you're still in high school.", link: "https://www.sequoiahs.org/DEPARTMENT/Health-Career-Academy/index.html" },
      { text: "Finish high school or GED", detail: "No specific science prerequisites are required to enroll in College of San Mateo's program." },
      { text: "Enroll in College of San Mateo's Dental Assisting certificate program (~10 months)", detail: "The program is structured to prepare you for both the state RDA exam and the national CDA exam by graduation." },
      { text: "Complete required infection-control, radiation-safety, and Dental Practice Act coursework", detail: "These courses are mandated by the Dental Board of California and must be completed within five years of applying for your RDA." },
      { text: "Pass the Dental Board of California exam to become a Registered Dental Assistant (RDA)", detail: "Passing moves you from the entry-level unlicensed assistant tier to RDA, which qualifies you for expanded duties like coronal polishing." },
      { text: "Apply to dental practices, Kaiser Permanente Dental, or Western Dental in San Mateo County", detail: "CSM cites a strong placement network with Bay Area dental offices, which can shorten the post-graduation job search." }
    ],
    localEmployers: ["Kaiser Permanente Dental", "Western Dental", "Pacific Dental Services offices", "Independent Bay Area dental practices"],
    growthOutlook: "BLS projects +6% growth (2024–2034, \"faster than average\"), about 52,900 openings each year nationally. (Source: BLS Occupational Outlook Handbook)",
    quoteType: "quote",
    quoteText: "The best thing about being a dental assistant is the amazing growth opportunities I've had.",
    quoteAuthor: "Jill, CDA",
    quoteSourceLabel: "Dental Assisting National Board",
    quoteSourceUrl: "https://www.danb.org/news-blog/detail/blog/3-reasons-to-love-dental-assisting",
    skills: ["Chairside assisting & instrument prep", "Sterilization & infection control", "Dental x-ray positioning", "Patient scheduling & records", "Coronal polishing (RDA level)"],
    quizTraits: { handsOn: 4, helpingPeople: 5, tech: 2, outdoors: 1, fastStart: 5, creative: 1, computers: 1, precision: 4, animals: 1, food: 1, calmUnderPressure: 3, machinery: 1, teamwork: 4, leadership: 1, structure: 4 },
    indeedQuery: "dental+assistant",
    indeedLocation: "San+Mateo%2C+CA",
    es: {
      title: "Asistente Dental",
      tagline: "Trabaja al lado del dentista en la atención al paciente, radiografías y esterilización — con licencia en menos de un año.",
      timeToJob: "10 meses",
      salaryNote: "Cifras nacionales del BLS mostradas arriba. La propia página del programa de College of San Mateo cita una mediana de $75,000/año para Asistentes Dentales Registrados en esta región. (Fuente: BLS Occupational Outlook Handbook, datos de mayo de 2024; página del programa de CSM)",
      licenseBody: "Asistente Dental Registrado (RDA) de CA — Dental Board of California (también existe un nivel de asistente dental sin licencia de nivel inicial)",
      growthOutlook: "El BLS proyecta un crecimiento del +6% (2024–2034, \"más rápido que el promedio\"), con cerca de 52,900 vacantes cada año a nivel nacional. (Fuente: BLS Occupational Outlook Handbook)",
      quoteText: "Lo mejor de ser asistente dental son las increíbles oportunidades de crecimiento que he tenido.",
      quoteAuthor: "Jill, CDA",
      skills: ["Asistencia junto al sillón dental y preparación de instrumentos", "Esterilización y control de infecciones", "Posicionamiento de radiografías dentales", "Programación y expedientes de pacientes", "Pulido coronal (nivel RDA)"],
      steps: [
        { text: "Antes de graduarte, explora el sector salud a través del programa de Ciencias de la Salud de tu escuela o un programa de voluntariado hospitalario", detail: "El Health Career Academy de Sequoia High School (con un capítulo de HOSA) y los programas de voluntariado juvenil en Kaiser, Mills-Peninsula de Sutter y Stanford brindan experiencia real en salud mientras aún estás en la preparatoria.", link: "https://www.sequoiahs.org/DEPARTMENT/Health-Career-Academy/index.html" },
        { text: "Termina la preparatoria o el GED", detail: "No se requieren prerrequisitos específicos de ciencias para inscribirte en el programa de College of San Mateo." },
        { text: "Inscríbete en el programa de certificado de Asistencia Dental de College of San Mateo (~10 meses)", detail: "El programa está diseñado para prepararte tanto para el examen estatal RDA como para el examen nacional CDA al graduarte." },
        { text: "Completa los cursos requeridos de control de infecciones, seguridad radiológica y la Ley de Práctica Dental", detail: "Estos cursos son exigidos por la Dental Board of California y deben completarse dentro de los cinco años previos a solicitar tu RDA." },
        { text: "Aprueba el examen de la Dental Board of California para convertirte en Asistente Dental Registrado (RDA)", detail: "Aprobarlo te lleva del nivel de asistente sin licencia al nivel RDA, que te habilita para funciones ampliadas como el pulido coronal." },
        { text: "Solicita empleo en consultorios dentales, Kaiser Permanente Dental o Western Dental en el Condado de San Mateo", detail: "CSM destaca una sólida red de colocación con consultorios dentales del Área de la Bahía, lo que puede acortar la búsqueda de empleo tras graduarte." }
      ],
      paths: [
        { duration: "~10 meses (2 semestres); Certificado de Logro o título AS", cost: "~$2,000–$3,000 (inscripción, libros, materiales, uniformes)", notes: "Prepara a los graduados tanto para el examen RDA de CA como para el examen nacional CDA; CSM destaca una sólida red de colocación en consultorios dentales del Área de la Bahía." }
      ]
    },
  },
  {
    id: "cosmetologist",
    title: "Cosmetologist",
    emoji: "💇",
    tagline: "Turn a passion for hair and beauty into a licensed career — build your own book of clients.",
    category: "Beauty & Wellness",
    demandLocal: "high",
    openingsAnnualUS: 84200,
    timeToJob: "About 9 months (1,000 hours)",
    timeMonths: 9,
    salaryEntry: 24600, salaryMid: 35260, salaryTop: 70200,
    salaryNote: "Formal BLS wage data typically doesn't capture tips, which can add meaningfully to take-home pay for stylists with an established clientele. San Francisco-San Mateo-Redwood City has been reported as the top-paying metro nationally for this occupation. (Source: BLS Occupational Outlook Handbook, May 2024 data)",
    licenseRequired: true,
    licenseBody: "CA Cosmetology License — Board of Barbering and Cosmetology (1,000 training hours + state exam)",
    paths: [
      { name: "College of San Mateo — Cosmetology A.A.", type: "associate", school: "College of San Mateo", location: "San Mateo", duration: "1,000 state-mandated training hours across a 60-unit AA degree", cost: "CA community college tuition (~$46/unit)", link: "https://collegeofsanmateo.edu/cosmetology/", notes: "Prepares students for the CA Board of Barbering and Cosmetology licensing exam." },
      { name: "Skyline College — Cosmetology Certificate of Achievement", type: "certificate", school: "Skyline College", location: "San Bruno", duration: "1,000 hours over 2 semesters", cost: "~$4,000", link: "https://skylinecollege.edu/cosmetology/cosmetology.php", notes: "Day track starts in January, evening track starts in August." }
    ],
    steps: [
      { text: "Some California cosmetology schools accept students as young as 16 (after 10th grade) to begin training hours", detail: "The state licensing exam itself requires a minimum age of 17. Confirm current age requirements directly with a school, like College of San Mateo's Cosmetology program, before enrolling.", link: "https://collegeofsanmateo.edu/cosmetology/" },
      { text: "Finish high school or GED", detail: "No cosmetology-specific coursework is required before enrolling." },
      { text: "Enroll in College of San Mateo's or Skyline College's Cosmetology program", detail: "Skyline runs both a day track (January start) and an evening track (August start), so scheduling around a part-time job is possible." },
      { text: "Complete the state-mandated 1,000 training hours", detail: "This is roughly half of what California required before a 2022 law (SB 803) cut the previous 1,600-hour requirement." },
      { text: "Pass the CA Board of Barbering and Cosmetology licensing exam", detail: "The exam includes both a written portion and a practical skills demonstration." },
      { text: "Build a client book at a salon like Ulta Beauty, Drybar, or an independent studio", detail: "Much of a stylist's real income comes from tips and repeat clients, which take time to build after licensing." }
    ],
    localEmployers: ["Ulta Beauty (San Mateo)", "L Salon & Color Group (San Mateo)", "Drybar", "SmartStyle"],
    growthOutlook: "BLS projects +5% growth (2024–2034, \"faster than average\"), about 84,200 openings each year nationally. (Source: BLS Occupational Outlook Handbook)",
    quoteType: "fact",
    quoteText: "About 84,200 openings for barbers, hairstylists, and cosmetologists are projected each year, on average, over the decade.",
    quoteSourceLabel: "BLS Occupational Outlook Handbook",
    quoteSourceUrl: "https://www.bls.gov/ooh/personal-care-and-service/barbers-hairstylists-and-cosmetologists.htm",
    skills: ["Hair cutting/coloring/styling technique", "Client consultation & customer service", "Sanitation & safety protocols", "Time management", "Retail/product sales"],
    quizTraits: { handsOn: 4, helpingPeople: 4, tech: 1, outdoors: 1, fastStart: 4, creative: 5, computers: 1, precision: 3, animals: 1, food: 1, calmUnderPressure: 2, machinery: 1, teamwork: 2, leadership: 4, structure: 2 },
    indeedQuery: "cosmetologist",
    indeedLocation: "San+Mateo%2C+CA",
    es: {
      title: "Cosmetólogo(a)",
      tagline: "Convierte tu pasión por el cabello y la belleza en una carrera con licencia — construye tu propia cartera de clientes.",
      timeToJob: "Cerca de 9 meses (1,000 horas)",
      salaryNote: "Los datos salariales formales del BLS normalmente no incluyen las propinas, que pueden aumentar significativamente el ingreso neto de los estilistas con una clientela establecida. Se ha reportado que San Francisco-San Mateo-Redwood City es el área metropolitana mejor pagada del país para esta ocupación. (Fuente: BLS Occupational Outlook Handbook, datos de mayo de 2024)",
      licenseBody: "Licencia de Cosmetología de CA — Board of Barbering and Cosmetology (1,000 horas de capacitación + examen estatal)",
      growthOutlook: "El BLS proyecta un crecimiento del +5% (2024–2034, \"más rápido que el promedio\"), con cerca de 84,200 vacantes cada año a nivel nacional. (Fuente: BLS Occupational Outlook Handbook)",
      quoteText: "Se proyectan cerca de 84,200 vacantes para barberos, estilistas y cosmetólogos cada año, en promedio, durante la década.",
      skills: ["Técnica de corte/tinte/peinado de cabello", "Consulta con el cliente y servicio al cliente", "Protocolos de sanitización y seguridad", "Gestión del tiempo", "Venta al por menor de productos"],
      steps: [
        { text: "Algunas escuelas de cosmetología de California aceptan estudiantes desde los 16 años (tras terminar el 10º grado) para comenzar a acumular horas de capacitación", detail: "El examen estatal de licencia requiere una edad mínima de 17 años. Confirma las reglas de edad vigentes directamente con una escuela, como el programa de Cosmetología de College of San Mateo, antes de inscribirte.", link: "https://collegeofsanmateo.edu/cosmetology/" },
        { text: "Termina la preparatoria o el GED", detail: "No se requiere ningún curso específico de cosmetología antes de inscribirte." },
        { text: "Inscríbete en el programa de Cosmetología de College of San Mateo o de Skyline College", detail: "Skyline ofrece un horario diurno (inicio en enero) y uno vespertino (inicio en agosto), lo que permite organizarte con un trabajo de medio tiempo." },
        { text: "Completa las 1,000 horas de capacitación exigidas por el estado", detail: "Esto es casi la mitad de lo que California exigía antes de que una ley de 2022 (SB 803) redujera el requisito anterior de 1,600 horas." },
        { text: "Aprueba el examen de licencia de la CA Board of Barbering and Cosmetology", detail: "El examen incluye una parte escrita y una demostración práctica de habilidades." },
        { text: "Construye tu cartera de clientes en un salón como Ulta Beauty, Drybar o un estudio independiente", detail: "Gran parte del ingreso real de un estilista viene de las propinas y los clientes que regresan, algo que toma tiempo construir después de obtener la licencia." }
      ],
      paths: [
        { duration: "1,000 horas de capacitación exigidas por el estado dentro de un título AA de 60 unidades", cost: "Colegiatura de universidad comunitaria de CA (~$46/unidad)", notes: "Prepara a los estudiantes para el examen de licencia de la CA Board of Barbering and Cosmetology." },
        { duration: "1,000 horas en 2 semestres", cost: "~$4,000", notes: "El horario diurno comienza en enero, el horario vespertino comienza en agosto." }
      ]
    },
  },
  {
    id: "it-support-specialist",
    title: "IT Support Specialist",
    emoji: "💻",
    tagline: "Troubleshoot hardware, software, and networks — and use certifications to climb from help desk to network admin.",
    category: "Technology",
    demandLocal: "moderate",
    openingsAnnualUS: 50500,
    timeToJob: "3–6 months (A+) up to 18 months (network cert)",
    timeMonths: 4,
    salaryEntry: 38780, salaryMid: 60340, salaryTop: 98010,
    salaryNote: "Figures shown are for Computer User Support Specialists (help desk). Computer Network Support Specialists — a common next step — have a higher national median of about $73,340/yr. (Source: BLS Occupational Outlook Handbook, May 2024 data)",
    licenseRequired: false,
    licenseBody: "No state license required; CompTIA A+ / Network+ certifications are voluntary but widely preferred by employers",
    paths: [
      { name: "Skyline College — Network Engineering Technology", type: "certificate", school: "Skyline College", location: "San Bruno", duration: "Certificate of Achievement (3 semesters) or AS degree", cost: "Tuition + ~$300 for required tools/materials", link: "https://skylinecollege.edu/networkengineeringtech/", notes: "Covers LAN/WAN, routing & switching, security, server administration, and PC repair; evening/Saturday schedule available." },
      { name: "College of San Mateo — Computer Science Applications & Development / Enterprise Cybersecurity", type: "certificate", school: "College of San Mateo", location: "San Mateo", duration: "Certificate or AS degree", cost: "CA community college tuition (~$46/unit)", link: "https://collegeofsanmateo.edu/cis/", notes: "Alternative path covering end-user, hardware, and systems support." }
    ],
    steps: [
      { text: "Before you graduate, start studying for CompTIA A+, or ask about dual enrollment in Skyline's Network Engineering program", detail: "Anyone can self-study and sit for the CompTIA A+ exam at any age; separately, ask your counselor whether Skyline College's networking courses are available through dual enrollment (CCAP) at your school.", link: "https://www.comptia.org/en-us/explore-careers/job-roles/tech-support-specialist/" },
      { text: "Finish high school or GED", detail: "No specific coursework is required — CompTIA A+ has no formal prerequisites either." },
      { text: "Study for and pass the CompTIA A+ certification exam (Core 1 & 2) — no prerequisites required", detail: "It's actually two exams covering hardware, networking, operating systems, and troubleshooting." },
      { text: "Apply for entry-level help desk or IT support roles", detail: "Employers often value the A+ credential as proof of baseline knowledge even without prior job experience." },
      { text: "Add CompTIA Network+ and enroll in Skyline College's Network Engineering certificate to move toward network/systems administration", detail: "Network+ builds directly on A+ material, making it a natural next certification before committing to the longer college program." },
      { text: "Apply to local employers like the County of San Mateo, Bay Area MSPs, or in-house IT teams", detail: "Managed service providers (MSPs) tend to expose you to a wider variety of systems faster than a single in-house IT team does." }
    ],
    localEmployers: ["County of San Mateo", "TruAdvantage", "Stanford University", "IXL Learning"],
    growthOutlook: "BLS actually projects a slight -3% decline (2024–2034) for this occupation as basic troubleshooting becomes automated — but replacement needs still create about 50,500 openings each year, and techs who add networking or cybersecurity skills see better prospects. (Source: BLS Occupational Outlook Handbook)",
    quoteType: "fact",
    quoteText: "Employers posted more than 194,000 U.S. job listings for tech support roles in the last 12 months, with a median salary around $62,000.",
    quoteSourceLabel: "CompTIA",
    quoteSourceUrl: "https://www.comptia.org/en-us/explore-careers/job-roles/tech-support-specialist/",
    skills: ["Hardware/software troubleshooting", "Windows & macOS end-user support", "Networking fundamentals (LAN/WAN)", "Customer service & communication", "Ticketing systems & documentation"],
    quizTraits: { handsOn: 2, helpingPeople: 3, tech: 3, outdoors: 1, fastStart: 3, creative: 2, computers: 5, precision: 2, animals: 1, food: 1, calmUnderPressure: 3, machinery: 1, teamwork: 2, leadership: 2, structure: 3 },
    indeedQuery: "IT+support+specialist",
    indeedLocation: "San+Mateo%2C+CA",
    es: {
      title: "Especialista en Soporte de TI",
      tagline: "Soluciona problemas de hardware, software y redes — y usa certificaciones para avanzar de la mesa de ayuda a la administración de redes.",
      timeToJob: "3–6 meses (A+) hasta 18 meses (certificado de redes)",
      salaryNote: "Las cifras mostradas son para Especialistas en Soporte al Usuario de Computadoras (mesa de ayuda). Los Especialistas en Soporte de Redes de Computadoras — un siguiente paso común — tienen una mediana nacional más alta, de aproximadamente $73,340/año. (Fuente: BLS Occupational Outlook Handbook, datos de mayo de 2024)",
      licenseBody: "No se requiere licencia estatal; las certificaciones CompTIA A+ / Network+ son voluntarias pero ampliamente preferidas por los empleadores",
      growthOutlook: "El BLS en realidad proyecta una ligera disminución del -3% (2024–2034) para esta ocupación, ya que la resolución básica de problemas se está automatizando — pero las necesidades de reemplazo aún crean cerca de 50,500 vacantes cada año, y los técnicos que agregan habilidades de redes o ciberseguridad tienen mejores perspectivas. (Fuente: BLS Occupational Outlook Handbook)",
      quoteText: "Los empleadores publicaron más de 194,000 vacantes de empleo en EE. UU. para roles de soporte técnico en los últimos 12 meses, con un salario medio de alrededor de $62,000.",
      skills: ["Solución de problemas de hardware/software", "Soporte al usuario final en Windows y macOS", "Fundamentos de redes (LAN/WAN)", "Servicio al cliente y comunicación", "Sistemas de tickets y documentación"],
      steps: [
        { text: "Antes de graduarte, empieza a estudiar para CompTIA A+, o pregunta sobre inscripción dual en el programa de Ingeniería de Redes de Skyline", detail: "Cualquiera puede autoestudiar y presentar el examen CompTIA A+ a cualquier edad; por separado, pregunta a tu consejero si los cursos de redes de Skyline College están disponibles mediante inscripción dual (CCAP) en tu escuela.", link: "https://www.comptia.org/en-us/explore-careers/job-roles/tech-support-specialist/" },
        { text: "Termina la preparatoria o el GED", detail: "No se requiere ningún curso específico — CompTIA A+ tampoco tiene prerrequisitos formales." },
        { text: "Estudia y aprueba el examen de certificación CompTIA A+ (Core 1 y 2) — no se requieren prerrequisitos", detail: "En realidad son dos exámenes que cubren hardware, redes, sistemas operativos y solución de problemas." },
        { text: "Solicita puestos de mesa de ayuda o soporte de TI de nivel inicial", detail: "Los empleadores suelen valorar la credencial A+ como prueba de conocimiento básico, incluso sin experiencia laboral previa." },
        { text: "Agrega CompTIA Network+ e inscríbete en el certificado de Ingeniería de Redes de Skyline College para avanzar hacia la administración de redes/sistemas", detail: "Network+ se basa directamente en el contenido de A+, por lo que es la siguiente certificación natural antes de comprometerte con el programa universitario más largo." },
        { text: "Solicita empleo en empleadores locales como el Condado de San Mateo, proveedores de servicios administrados del Área de la Bahía, o equipos de TI internos", detail: "Los proveedores de servicios administrados (MSP) suelen exponerte a una mayor variedad de sistemas más rápido que un solo equipo de TI interno." }
      ],
      paths: [
        { duration: "Certificado de Logro (3 semestres) o título AS", cost: "Colegiatura + ~$300 en herramientas/materiales requeridos", notes: "Cubre LAN/WAN, enrutamiento y conmutación, seguridad, administración de servidores y reparación de PC; horario vespertino/sabatino disponible." },
        { duration: "Certificado o título AS", cost: "Colegiatura de universidad comunitaria de CA (~$46/unidad)", notes: "Vía alternativa que cubre soporte al usuario final, hardware y sistemas." }
      ]
    },
  },
  {
    id: "carpenter",
    title: "Carpenter",
    emoji: "🪚",
    tagline: "Build homes, offices, and skylines from the ground up — a hands-on trade with steady demand across the Bay Area.",
    category: "Construction & Energy",
    demandLocal: "moderate",
    openingsAnnualUS: 74100,
    timeToJob: "4 years (apprenticeship)",
    timeMonths: 48,
    salaryEntry: 38760, salaryMid: 59310, salaryTop: 98370,
    salaryNote: "National BLS figures shown above. Bay Area estimates run notably higher (~$59k–$133k per regional wage aggregators), not independently verified directly on bls.gov. (Source: BLS Occupational Outlook Handbook, May 2024 data)",
    licenseRequired: false,
    licenseBody: "No state license required; NCCER credentials and union journeyman cards are voluntary but industry-recognized",
    paths: [
      { name: "Northern California Carpenters Training (CTCNC) / Carpenters Local 217 Apprenticeship", type: "apprenticeship", school: "Northern California Carpenters Regional Council", location: "Local 217, Foster City, CA — training centers in Fairfield & Morgan Hill", duration: "4 years, paid apprenticeship (starts ~40% of journeyman wage, rising to 80%+)", cost: "Free — paid apprenticeship", link: "https://www.ctcnc.org/", notes: "None of the three San Mateo County colleges currently offer a dedicated carpentry program — this union apprenticeship is the verified local path. Carpenters Local 217 is based in Foster City and explicitly serves San Mateo County." }
    ],
    steps: [
      { text: "Before you graduate, get hands-on exposure through Aragon High School's MC3 program", detail: "It's not carpentry-specific, but this on-campus, union-backed program teaches shared building-trade fundamentals — tools, safety, construction math — open to any enrolled student, no age minimum.", link: "https://ahs.smuhsd.org/academics/career-technical-education-cte/engineering-architecture-pathway/cte-engineering-technology-trade-mc3-program" },
      { text: "Finish high school or GED", detail: "No specific coursework is required before applying to the apprenticeship." },
      { text: "Apply to the Northern California Carpenters Training (CTCNC) pre-apprenticeship or directly to Carpenters Local 217", detail: "The pre-apprenticeship option gives you basic tool and safety training before you're indentured, which can strengthen your application." },
      { text: "Get indentured as an apprentice — start earning ~40% of journeyman wage immediately", detail: "Indenture is the formal step that puts you on the union's paid wage progression from day one." },
      { text: "Complete the 4-year paid apprenticeship, with wages rising toward 80%+ of journeyman pay", detail: "Wage increases are typically tied to accumulated hours and completed training milestones, not just time served." },
      { text: "Earn your union journeyman/Training Verification Card", detail: "This card is recognized across the entire Northern California Carpenters Regional Council's jurisdiction, not just San Mateo County." },
      { text: "Optional: pursue NCCER credentials or move into a foreman/lead role", detail: "Foreman roles typically go to journeymen who show strong scheduling and crew-management skills on top of their trade skills." }
    ],
    localEmployers: ["S+B James Construction", "S.E.A. Construction (San Mateo)", "S.R. Freeman, Inc.", "San Mateo Union High School District (in-house carpenters)"],
    growthOutlook: "BLS projects +4% growth (2024–2034, \"about as fast as average\"), about 74,100 openings each year nationally. (Source: BLS Occupational Outlook Handbook)",
    quoteType: "quote",
    quoteText: "Jordyn is an excellent apprentice, she always shows up early, follows instructions, grasps the skills provided during on-the-job training, and is very safety conscientious.",
    quoteAuthor: "Noah Teegarden, S+B James Construction Foreman, on apprentice Jordyn Martinez (Sacramento region — same NorCal apprenticeship system that covers San Mateo County)",
    quoteSourceLabel: "California Department of Industrial Relations",
    quoteSourceUrl: "https://www.dir.ca.gov/DAS/e-News/2024/Hammering-Out-Her-Future.html",
    skills: ["Blueprint reading & construction math", "Framing & layout", "Hand/power tool operation", "Finish carpentry & cabinetry", "Jobsite safety & building-code awareness"],
    quizTraits: { handsOn: 5, helpingPeople: 2, tech: 2, outdoors: 4, fastStart: 3, creative: 3, computers: 1, precision: 4, animals: 1, food: 1, calmUnderPressure: 2, machinery: 3, teamwork: 3, leadership: 3, structure: 3 },
    indeedQuery: "carpenter",
    indeedLocation: "San+Mateo%2C+CA",
    es: {
      title: "Carpintero(a)",
      tagline: "Construye casas, oficinas y rascacielos desde cero — un oficio práctico con demanda constante en toda el Área de la Bahía.",
      timeToJob: "4 años (aprendizaje)",
      salaryNote: "Cifras nacionales del BLS mostradas arriba. Las estimaciones del Área de la Bahía son notablemente más altas (~$59,000–$133,000 según agregadores de salarios regionales), no verificadas de forma independiente directamente en bls.gov. (Fuente: BLS Occupational Outlook Handbook, datos de mayo de 2024)",
      licenseBody: "No se requiere licencia estatal; las credenciales NCCER y las tarjetas de oficial sindical son voluntarias pero reconocidas por la industria",
      growthOutlook: "El BLS proyecta un crecimiento del +4% (2024–2034, \"tan rápido como el promedio\"), con cerca de 74,100 vacantes cada año a nivel nacional. (Fuente: BLS Occupational Outlook Handbook)",
      quoteText: "Jordyn es una aprendiz excelente, siempre llega temprano, sigue instrucciones, domina las habilidades que se le enseñan durante la capacitación en el trabajo, y es muy consciente de la seguridad.",
      quoteAuthor: "Noah Teegarden, capataz de S+B James Construction, sobre la aprendiz Jordyn Martinez (región de Sacramento — el mismo sistema de aprendizaje del norte de California que cubre el Condado de San Mateo)",
      skills: ["Lectura de planos y matemáticas de construcción", "Enmarcado y trazado", "Uso de herramientas manuales/eléctricas", "Carpintería de acabados y gabinetes", "Seguridad en la obra y conocimiento del código de construcción"],
      steps: [
        { text: "Antes de graduarte, obtén experiencia práctica a través del programa MC3 de Aragon High School", detail: "No es específico de carpintería, pero este programa dentro del horario escolar, respaldado por sindicatos, enseña fundamentos compartidos entre los oficios de construcción — herramientas, seguridad, matemáticas de construcción — abierto a cualquier estudiante inscrito, sin edad mínima.", link: "https://ahs.smuhsd.org/academics/career-technical-education-cte/engineering-architecture-pathway/cte-engineering-technology-trade-mc3-program" },
        { text: "Termina la preparatoria o el GED", detail: "No se requiere ningún curso específico antes de solicitar el aprendizaje." },
        { text: "Solicita el pre-aprendizaje de Northern California Carpenters Training (CTCNC), o directamente a Carpenters Local 217", detail: "La opción de pre-aprendizaje te da capacitación básica en herramientas y seguridad antes de que firmes tu contrato de aprendiz, lo cual puede fortalecer tu solicitud." },
        { text: "Comienza tu aprendizaje formal — empieza ganando ~40% del salario de oficial de inmediato", detail: "Firmar el contrato de aprendiz es el paso formal que te coloca desde el primer día en la progresión salarial pagada del sindicato." },
        { text: "Completa el aprendizaje pagado de 4 años, con el salario aumentando hacia más del 80% del salario de oficial", detail: "Los aumentos salariales suelen estar ligados a las horas acumuladas y a los hitos de capacitación completados, no solo al tiempo transcurrido." },
        { text: "Obtén tu tarjeta de oficial sindical/Training Verification Card", detail: "Esta tarjeta es reconocida en toda la jurisdicción del Northern California Carpenters Regional Council, no solo en el Condado de San Mateo." },
        { text: "Opcional: obtén credenciales NCCER o avanza a un puesto de capataz o líder", detail: "Los puestos de capataz suelen ir a oficiales que demuestran, además de sus habilidades de oficio, capacidad para programar tareas y dirigir cuadrillas." }
      ],
      paths: [
        { duration: "4 años, aprendizaje pagado (comienza en ~40% del salario de oficial, aumentando a más del 80%)", cost: "Gratis — aprendizaje pagado", notes: "Ninguno de los tres colegios del Condado de San Mateo ofrece actualmente un programa dedicado de carpintería — este aprendizaje sindical es la vía local verificada. Carpenters Local 217 tiene su sede en Foster City y atiende explícitamente al Condado de San Mateo." }
      ]
    },
  },
  {
    id: "heavy-equipment-operator",
    title: "Heavy Equipment Operator",
    emoji: "🏗️",
    tagline: "Run the bulldozers, excavators, and cranes that build the Bay Area's roads, homes, and infrastructure.",
    category: "Construction & Energy",
    demandLocal: "moderate",
    openingsAnnualUS: 46200,
    timeToJob: "Weeks (entry hire) up to a multi-year union apprenticeship for journeyman status",
    timeMonths: 3,
    salaryEntry: 39850, salaryMid: 58320, salaryTop: 99930,
    salaryNote: "National BLS figures shown above (Construction Equipment Operators). Bay Area estimates run notably higher (~$61k–$149k per regional wage aggregators), not independently verified directly on bls.gov. (Source: BLS Occupational Outlook Handbook, May 2024 data)",
    licenseRequired: false,
    licenseBody: "No general state license; operating a crane specifically requires NCCCO certification under federal OSHA rule (29 CFR 1926.1427)",
    paths: [
      { name: "Operating Engineers Local 3 (OE3) Apprenticeship", type: "apprenticeship", school: "IUOE Local 3", location: "Alameda/Concord, CA offices — training center at Rancho Murieta", duration: "Multi-year paid apprenticeship with a graduated wage scale (exact length varies by track)", cost: "Free — employer-paid training", link: "https://www.oe3.org/", notes: "OE3 is the largest construction-trades local in the U.S. and covers all of Northern California; we couldn't confirm a San Mateo-specific district office, but its stated jurisdiction includes the county. None of the three San Mateo County colleges offer a heavy equipment program." }
    ],
    steps: [
      { text: "Before you graduate, get general construction-trade exposure through Aragon High School's MC3 program", detail: "No heavy-equipment-specific youth program was found locally, but MC3's construction fundamentals (safety, tools, math) give a head start — open to any enrolled student, no age minimum.", link: "https://ahs.smuhsd.org/academics/career-technical-education-cte/engineering-architecture-pathway/cte-engineering-technology-trade-mc3-program" },
      { text: "Finish high school or GED", detail: "No specific coursework is required to apply." },
      { text: "Get a Commercial Driver's License (CDL) if you don't already have one", detail: "A CDL is often expected even for equipment that stays on-site, since operators frequently need to move machinery between job locations." },
      { text: "Apply to the Operating Engineers Local 3 (OE3) apprenticeship, or get hired as a laborer/entry operator to start building hours", detail: "Starting as a laborer lets you build a work history and industry contacts while you wait for an apprenticeship application window." },
      { text: "Train at OE3's Rancho Murieta facility on excavators, dozers, graders, and cranes", detail: "The Rancho Murieta training center, near Sacramento, is OE3's dedicated hands-on campus, so expect some travel for training blocks." },
      { text: "If operating cranes specifically, earn NCCCO certification (federally required for that work)", detail: "This certification is a federal OSHA requirement specifically for crane operation, not for other heavy equipment." },
      { text: "Progress through OE3's graduated apprentice wage scale to journeyman operator pay", detail: "Like other building-trades apprenticeships, pay rises in steps tied to hours logged and skills demonstrated." }
    ],
    localEmployers: ["County of San Mateo Parks Department", "Bay Area general contractors", "Regional site-development and paving contractors"],
    growthOutlook: "BLS projects +4% growth (2024–2034, \"about as fast as average\"), about 46,200 openings each year nationally. (Source: BLS Occupational Outlook Handbook)",
    quoteType: "fact",
    quoteText: "IUOE Local 3 is the largest construction-trades local union in the United States, representing roughly 35,000–37,000 members across California, Nevada, Utah, and Hawaii.",
    quoteSourceLabel: "Operating Engineers Local 3",
    quoteSourceUrl: "https://www.oe3.org/",
    skills: ["Heavy machine operation (excavators, loaders, dozers, graders)", "Grade-checking & site prep", "Equipment maintenance basics", "Safety/OSHA compliance", "CDL driving competency"],
    quizTraits: { handsOn: 5, helpingPeople: 1, tech: 3, outdoors: 5, fastStart: 4, creative: 1, computers: 1, precision: 3, animals: 1, food: 1, calmUnderPressure: 3, machinery: 5, teamwork: 2, leadership: 2, structure: 4 },
    indeedQuery: "heavy+equipment+operator",
    indeedLocation: "San+Mateo%2C+CA",
    es: {
      title: "Operador(a) de Maquinaria Pesada",
      tagline: "Opera las excavadoras, bulldozers y grúas que construyen las carreteras, casas e infraestructura del Área de la Bahía.",
      timeToJob: "Semanas (contratación de nivel inicial) hasta un aprendizaje sindical de varios años para convertirte en oficial",
      salaryNote: "Cifras nacionales del BLS mostradas arriba (Operadores de Equipo de Construcción). Las estimaciones del Área de la Bahía son notablemente más altas (~$61,000–$149,000 según agregadores de salarios regionales), no verificadas de forma independiente directamente en bls.gov. (Fuente: BLS Occupational Outlook Handbook, datos de mayo de 2024)",
      licenseBody: "No se requiere licencia estatal general; operar una grúa específicamente requiere la certificación NCCCO bajo la regla federal de OSHA (29 CFR 1926.1427)",
      growthOutlook: "El BLS proyecta un crecimiento del +4% (2024–2034, \"tan rápido como el promedio\"), con cerca de 46,200 vacantes cada año a nivel nacional. (Fuente: BLS Occupational Outlook Handbook)",
      quoteText: "IUOE Local 3 es el sindicato local de oficios de construcción más grande de Estados Unidos, con aproximadamente 35,000–37,000 miembros en California, Nevada, Utah y Hawái.",
      skills: ["Operación de maquinaria pesada (excavadoras, cargadoras, bulldozers, motoniveladoras)", "Verificación de niveles y preparación del sitio", "Conceptos básicos de mantenimiento de equipo", "Cumplimiento de seguridad/OSHA", "Competencia de manejo con licencia CDL"],
      steps: [
        { text: "Antes de graduarte, obtén exposición general a los oficios de construcción a través del programa MC3 de Aragon High School", detail: "No se encontró ningún programa juvenil específico de maquinaria pesada a nivel local, pero los fundamentos de construcción de MC3 (seguridad, herramientas, matemáticas) te dan una ventaja — abierto a cualquier estudiante inscrito, sin edad mínima.", link: "https://ahs.smuhsd.org/academics/career-technical-education-cte/engineering-architecture-pathway/cte-engineering-technology-trade-mc3-program" },
        { text: "Termina la preparatoria o el GED", detail: "No se requiere ningún curso específico para solicitar." },
        { text: "Obtén una Licencia de Conducir Comercial (CDL) si aún no la tienes", detail: "Suele exigirse una CDL incluso para equipo que permanece en un solo sitio, ya que los operadores con frecuencia deben trasladar maquinaria entre ubicaciones." },
        { text: "Solicita el aprendizaje de Operating Engineers Local 3 (OE3), o consigue trabajo como obrero/operador de nivel inicial para comenzar a acumular horas", detail: "Comenzar como obrero te permite acumular historial laboral y contactos en la industria mientras esperas una ventana de solicitud para el aprendizaje." },
        { text: "Entrena en las instalaciones de OE3 en Rancho Murieta con excavadoras, bulldozers, motoniveladoras y grúas", detail: "El centro de capacitación de Rancho Murieta, cerca de Sacramento, es el campus práctico dedicado de OE3, así que espera cierto traslado durante los bloques de entrenamiento." },
        { text: "Si operas grúas específicamente, obtén la certificación NCCCO (requerida a nivel federal para ese trabajo)", detail: "Esta certificación es un requisito federal de OSHA específicamente para operar grúas, no para otro tipo de maquinaria pesada." },
        { text: "Avanza a través de la escala salarial gradual de aprendiz de OE3 hasta el salario de operador oficial", detail: "Como en otros aprendizajes de oficios de construcción, el salario aumenta por etapas según las horas acumuladas y las habilidades demostradas." }
      ],
      paths: [
        { duration: "Aprendizaje pagado de varios años con una escala salarial gradual (la duración exacta varía según la especialidad)", cost: "Gratis — capacitación pagada por el empleador", notes: "OE3 es el sindicato local de construcción más grande de EE. UU. y cubre todo el norte de California; no pudimos confirmar una oficina distrital específica del Condado de San Mateo, pero su jurisdicción declarada incluye al condado. Ninguno de los tres colegios del Condado de San Mateo ofrece un programa de maquinaria pesada." }
      ]
    },
  },
  {
    id: "diesel-technician",
    title: "Diesel Technician",
    emoji: "🚚",
    tagline: "Keep trucks, buses, and heavy equipment running — a hands-on trade with steady demand and no four-year degree required.",
    category: "Automotive",
    demandLocal: "moderate",
    openingsAnnualUS: 26500,
    timeToJob: "1 semester up to 2 years (AS degree)",
    timeMonths: 6,
    salaryEntry: 41670, salaryMid: 60640, salaryTop: 85980,
    salaryNote: "National BLS figures. California is among the top-paying states for this trade (~$69k–$71k median per regional aggregators), not independently verified directly on bls.gov. (Source: BLS Occupational Outlook Handbook, May 2024 data)",
    licenseRequired: false,
    licenseBody: "No state license required; ASE T-Series certification is voluntary. A Commercial Driver's License (CDL) is typically needed to road-test heavy trucks, and EPA Section 609 certification is required for A/C system work",
    paths: [
      { name: "Las Positas College — Automotive Light Duty Diesel", type: "certificate", school: "Las Positas College", location: "Livermore, CA", duration: "Certificate of Achievement or AS degree (exact duration depends on course load — confirm with the college)", cost: "CA community college tuition (~$46/unit); confirm exact program cost directly with Las Positas", link: "https://laspositascollege.edu/catalog/current/auto/automotivelightdutydiesel-ca.php", notes: "Nearest verified program — none of the three San Mateo County colleges offer a diesel-specific program." }
    ],
    steps: [
      { text: "Before you graduate, ask your counselor about automotive/diesel coursework or dual enrollment options", detail: "No diesel-specific youth program was confirmed locally — the most realistic path is general auto-shop CTE coursework at your high school, or dual enrollment (CCAP) in a nearby college's automotive program if it's offered.", link: "https://collegeofsanmateo.edu/dualenrollment/" },
      { text: "Finish high school or GED", detail: "Basic computer literacy is increasingly important, since modern diesel engines rely heavily on electronic diagnostics." },
      { text: "Enroll in Las Positas College's Automotive Light Duty Diesel certificate or AS program", detail: "This is the nearest program to San Mateo County — confirm the current cost and schedule directly with the college, since these can change by term." },
      { text: "Get EPA Section 609 certification for A/C system work, and a CDL if the job requires road-testing trucks", detail: "These are separate, narrower certifications from the general ASE credentials — many shops require both before you can work unsupervised." },
      { text: "Apply to truck dealerships or fleet shops for an entry-level diesel tech role", detail: "Dealership service departments often provide manufacturer-specific training on top of what you learn in school." },
      { text: "Pursue voluntary ASE T-Series certification (T1–T8) after 2 years of experience", detail: "Passing enough of the eight T-Series tests earns the ASE Master Medium/Heavy Truck Technician title." }
    ],
    localEmployers: ["Golden Gate Truck Center (Oakland)", "California Truck Centers", "Regional Peterbilt/Freightliner dealerships"],
    growthOutlook: "BLS projects a modest +2% growth (2024–2034, \"slower than average\"), but still about 26,500 openings each year nationally, mostly from workers retiring. (Source: BLS Occupational Outlook Handbook)",
    quoteType: "fact",
    quoteText: "About 26,500 openings for diesel service technicians and mechanics are projected each year, on average, over the decade.",
    quoteSourceLabel: "BLS Occupational Outlook Handbook",
    quoteSourceUrl: "https://www.bls.gov/ooh/installation-maintenance-and-repair/diesel-service-technicians-and-mechanics.htm",
    skills: ["Computerized diagnostics", "Engine disassembly & rebuild", "Brake/transmission/suspension repair", "Emissions systems knowledge", "Welding basics"],
    quizTraits: { handsOn: 5, helpingPeople: 2, tech: 4, outdoors: 2, fastStart: 4, creative: 1, computers: 2, precision: 4, animals: 1, food: 1, calmUnderPressure: 2, machinery: 4, teamwork: 2, leadership: 2, structure: 3 },
    indeedQuery: "diesel+technician",
    indeedLocation: "San+Mateo%2C+CA",
    es: {
      title: "Técnico(a) Diésel",
      tagline: "Mantén en funcionamiento camiones, autobuses y maquinaria pesada — un oficio práctico con demanda constante y sin necesidad de título universitario de 4 años.",
      timeToJob: "1 semestre hasta 2 años (título AS)",
      salaryNote: "Cifras nacionales del BLS. California está entre los estados mejor pagados para este oficio (mediana de ~$69,000–$71,000 según agregadores regionales), no verificadas de forma independiente directamente en bls.gov. (Fuente: BLS Occupational Outlook Handbook, datos de mayo de 2024)",
      licenseBody: "No se requiere licencia estatal; la certificación ASE serie T es voluntaria. Por lo general se necesita una Licencia de Conducir Comercial (CDL) para probar camiones pesados en carretera, y se requiere la certificación EPA Sección 609 para trabajos en sistemas de aire acondicionado",
      growthOutlook: "El BLS proyecta un modesto crecimiento del +2% (2024–2034, \"más lento que el promedio\"), pero aún así cerca de 26,500 vacantes cada año a nivel nacional, principalmente por jubilaciones. (Fuente: BLS Occupational Outlook Handbook)",
      quoteText: "Se proyectan cerca de 26,500 vacantes para técnicos y mecánicos de servicio diésel cada año, en promedio, durante la década.",
      skills: ["Diagnóstico computarizado", "Desarmado y reconstrucción de motores", "Reparación de frenos/transmisión/suspensión", "Conocimiento de sistemas de emisiones", "Conceptos básicos de soldadura"],
      steps: [
        { text: "Antes de graduarte, pregunta a tu consejero sobre cursos de automotriz/diésel o inscripción dual", detail: "No se confirmó ningún programa juvenil específico de diésel a nivel local — la vía más realista es tomar cursos generales de taller automotriz en tu preparatoria, o inscripción dual (CCAP) en el programa automotriz de una universidad cercana si está disponible.", link: "https://collegeofsanmateo.edu/dualenrollment/" },
        { text: "Termina la preparatoria o el GED", detail: "Los conocimientos básicos de computación son cada vez más importantes, ya que los motores diésel modernos dependen mucho del diagnóstico electrónico." },
        { text: "Inscríbete en el certificado o título AS de Diésel de Servicio Ligero Automotriz de Las Positas College", detail: "Es el programa más cercano al Condado de San Mateo — confirma el costo y el horario actuales directamente con el colegio, ya que pueden cambiar según el semestre." },
        { text: "Obtén la certificación EPA Sección 609 para trabajos de aire acondicionado, y una CDL si el trabajo requiere probar camiones en carretera", detail: "Son certificaciones separadas y más específicas que las credenciales generales de ASE — muchos talleres exigen ambas antes de dejarte trabajar sin supervisión." },
        { text: "Solicita empleo en concesionarios de camiones o talleres de flotillas para un puesto de técnico diésel de nivel inicial", detail: "Los departamentos de servicio de los concesionarios suelen ofrecer capacitación específica de cada marca, además de lo que aprendes en la escuela." },
        { text: "Obtén la certificación voluntaria ASE serie T (T1–T8) después de 2 años de experiencia", detail: "Aprobar suficientes de los ocho exámenes de la serie T te da el título de Técnico Maestro ASE en Camiones Medianos/Pesados." }
      ],
      paths: [
        { duration: "Certificado de Logro o título AS (la duración exacta depende de la carga de cursos — confirma con el colegio)", cost: "Colegiatura de universidad comunitaria de CA (~$46/unidad); confirma el costo exacto del programa directamente con Las Positas", notes: "El programa verificado más cercano — ninguno de los tres colegios del Condado de San Mateo ofrece un programa específico de diésel." }
      ]
    },
  },
  {
    id: "surgical-technologist",
    title: "Surgical Technologist",
    emoji: "🏥",
    tagline: "Work at the surgeon's side in the operating room — a fast-entry healthcare career with strong national demand.",
    category: "Healthcare",
    demandLocal: "high",
    openingsAnnualUS: 8700,
    timeToJob: "About 1.5 years (competitive admission)",
    timeMonths: 18,
    salaryEntry: 43290, salaryMid: 62830, salaryTop: 90700,
    salaryNote: "National BLS figures. Bay Area aggregator estimates run much higher (~$97k–$105k), not independently verified directly on bls.gov. (Source: BLS Occupational Outlook Handbook, May 2024 data)",
    licenseRequired: false,
    licenseBody: "No CA state license or mandated certification; the national Certified Surgical Technologist (CST) credential (NBSTSA) is the de facto standard most CA hospitals require",
    paths: [
      { name: "Skyline College — Surgical Technology A.S.", type: "associate", school: "Skyline College", location: "San Bruno", duration: "Minimum 4 terms (~1.5 years); fall-only admission, 20 seats/year", cost: "~$3,700 total (tuition, fees, books, supplies)", link: "https://skylinecollege.edu/surgicaltechnology/", notes: "CAAHEP-accredited; competitive admission (application window Jan 15–May 1) requiring anatomy, microbiology, and medical terminology prerequisites. Graduates are eligible to sit for the national CST exam." }
    ],
    steps: [
      { text: "Before you graduate, explore healthcare through a hospital teen volunteer program or your school's Health Science pathway", detail: "Stanford Health Care's Junior Summer Program (age 16+) and Sequoia High School's Health Career Academy both give early healthcare exposure — note hospital volunteer roles for teens are typically administrative, not clinical shadowing.", link: "https://stanfordhealthcare.org/events/volunteer-services-junior-summer-program.html" },
      { text: "Finish high school — biology and anatomy help", detail: "A strong science background makes the program's anatomy-heavy coursework more manageable." },
      { text: "Complete required prerequisites (anatomy, microbiology, medical terminology)", detail: "These are graded prerequisites for Skyline's program, so your grades matter for the competitive admission process." },
      { text: "Apply to Skyline College's Surgical Technology A.S. program (competitive, 20 seats/year, Jan 15–May 1 application window)", detail: "With only 20 seats a year and a fixed application window, applying as early as possible in the cycle matters." },
      { text: "Complete the ~1.5-year program, including clinical rotations in Bay Area hospitals", detail: "Clinical rotations put you in real operating rooms under supervision, which is where many students get noticed by future employers." },
      { text: "Pass the national Certified Surgical Technologist (CST) exam", detail: "Most CA hospitals treat this national credential as a de facto requirement even though the state itself doesn't mandate it." },
      { text: "Apply to Stanford Health Care, Kaiser Permanente, or Sutter Health/Mills-Peninsula", detail: "Larger hospital systems often have specific surgical specialties, like cardiovascular or orthopedic, you can aim for once you have some experience." }
    ],
    localEmployers: ["Stanford Health Care", "Kaiser Permanente (Redwood City)", "Sutter Health / Mills-Peninsula Medical Center (San Mateo)", "San Mateo Surgery Center"],
    growthOutlook: "BLS projects +5% growth (2024–2034, \"faster than average\"), about 8,700 openings each year nationally. (Source: BLS Occupational Outlook Handbook)",
    quoteType: "quote",
    quoteText: "I've been doing this job for 24 years, and I work in the CVOR. I still love it. Where else can you wear scrubs, listen to music, and provide care to a patient in the OR?",
    quoteAuthor: "Surgical technologist, in an Association of Surgical Technologists member publication (individual not further identified in the source excerpt)",
    quoteSourceLabel: "Association of Surgical Technologists (ASTSA News)",
    quoteSourceUrl: "https://www.ast.org/Resource/ASTSANews/Summer_2015/files/assets/common/downloads/publication.pdf",
    skills: ["Sterile technique", "Surgical instrument prep & handling", "Anticipating surgeon needs", "Patient positioning & safety", "Composure under pressure in the OR"],
    quizTraits: { handsOn: 4, helpingPeople: 5, tech: 3, outdoors: 1, fastStart: 3, creative: 1, computers: 2, precision: 5, animals: 1, food: 1, calmUnderPressure: 5, machinery: 1, teamwork: 5, leadership: 1, structure: 5 },
    indeedQuery: "surgical+technologist",
    indeedLocation: "San+Mateo%2C+CA",
    es: {
      title: "Tecnólogo(a) Quirúrgico(a)",
      tagline: "Trabaja al lado del cirujano en el quirófano — una carrera de salud de ingreso rápido con fuerte demanda a nivel nacional.",
      timeToJob: "Cerca de 1.5 años (admisión competitiva)",
      salaryNote: "Cifras nacionales del BLS. Las estimaciones de agregadores del Área de la Bahía son mucho más altas (~$97,000–$105,000), no verificadas de forma independiente directamente en bls.gov. (Fuente: BLS Occupational Outlook Handbook, datos de mayo de 2024)",
      licenseBody: "No hay licencia estatal de CA ni certificación obligatoria; la credencial nacional de Tecnólogo Quirúrgico Certificado (CST) (NBSTSA) es el estándar de facto que exigen la mayoría de los hospitales de CA",
      growthOutlook: "El BLS proyecta un crecimiento del +5% (2024–2034, \"más rápido que el promedio\"), con cerca de 8,700 vacantes cada año a nivel nacional. (Fuente: BLS Occupational Outlook Handbook)",
      quoteText: "He hecho este trabajo durante 24 años, y trabajo en el CVOR. Todavía lo amo. ¿Dónde más puedes usar bata quirúrgica, escuchar música y brindar atención a un paciente en el quirófano?",
      quoteAuthor: "Tecnólogo(a) quirúrgico(a), en una publicación para miembros de la Association of Surgical Technologists (la persona no fue identificada más a fondo en el extracto de la fuente)",
      skills: ["Técnica estéril", "Preparación y manejo de instrumentos quirúrgicos", "Anticipar las necesidades del cirujano", "Posicionamiento y seguridad del paciente", "Compostura bajo presión en el quirófano"],
      steps: [
        { text: "Antes de graduarte, explora el sector salud a través de un programa de voluntariado hospitalario o el programa de Ciencias de la Salud de tu escuela", detail: "El Junior Summer Program de Stanford Health Care (16 años en adelante) y el Health Career Academy de Sequoia High School dan exposición temprana al sector salud — nota que los puestos de voluntariado hospitalario para adolescentes suelen ser administrativos, no de observación clínica.", link: "https://stanfordhealthcare.org/events/volunteer-services-junior-summer-program.html" },
        { text: "Termina la preparatoria — la biología y la anatomía ayudan", detail: "Una base sólida en ciencias facilita el contenido del programa, que tiene mucha carga de anatomía." },
        { text: "Completa los prerrequisitos requeridos (anatomía, microbiología, terminología médica)", detail: "Son prerrequisitos calificados para el programa de Skyline, así que tus calificaciones importan para el proceso de admisión competitivo." },
        { text: "Solicita el programa de Tecnología Quirúrgica A.S. de Skyline College (competitivo, 20 lugares al año, ventana de solicitud del 15 de enero al 1 de mayo)", detail: "Con solo 20 lugares al año y una ventana de solicitud fija, aplicar lo antes posible en el ciclo es importante." },
        { text: "Completa el programa de ~1.5 años, incluyendo rotaciones clínicas en hospitales del Área de la Bahía", detail: "Las rotaciones clínicas te ponen en quirófanos reales bajo supervisión, que es donde muchos estudiantes llaman la atención de futuros empleadores." },
        { text: "Aprueba el examen nacional de Tecnólogo Quirúrgico Certificado (CST)", detail: "La mayoría de los hospitales de CA tratan esta credencial nacional como un requisito de facto, aunque el estado en sí no lo exija." },
        { text: "Solicita empleo en Stanford Health Care, Kaiser Permanente o Sutter Health/Mills-Peninsula", detail: "Los sistemas hospitalarios más grandes suelen tener especialidades quirúrgicas específicas, como cardiovascular u ortopédica, a las que puedes aspirar una vez que tengas algo de experiencia." }
      ],
      paths: [
        { duration: "Mínimo 4 trimestres (~1.5 años); admisión solo en otoño, 20 lugares/año", cost: "~$3,700 en total (colegiatura, cuotas, libros, materiales)", notes: "Acreditado por CAAHEP; admisión competitiva (ventana de solicitud del 15 de enero al 1 de mayo) que requiere prerrequisitos de anatomía, microbiología y terminología médica. Los graduados son elegibles para presentar el examen nacional CST." }
      ]
    },
  },
  {
    id: "respiratory-therapist",
    title: "Respiratory Therapist",
    emoji: "🫁",
    tagline: "Help patients breathe easier — from newborn ICUs to sleep labs — with a two-year degree and a stable healthcare career.",
    category: "Healthcare",
    demandLocal: "high",
    openingsAnnualUS: 8800,
    timeToJob: "2 years",
    timeMonths: 24,
    salaryEntry: 61900, salaryMid: 80450, salaryTop: 108820,
    salaryNote: "National BLS figures shown above. A California-specific median of about $95,540/yr has been cited elsewhere but couldn't be independently verified directly on bls.gov. (Source: BLS Occupational Outlook Handbook, May 2024 data)",
    licenseRequired: true,
    licenseBody: "CA Respiratory Care Practitioner (RCP) License — Respiratory Care Board of California (requires an RRT credential plus an accredited associate degree)",
    paths: [
      { name: "Skyline College — Respiratory Care A.S.", type: "associate", school: "Skyline College", location: "San Bruno", duration: "2 years (~60 units); fall-only admission, ~25 seats/year", cost: "CA community college tuition (~$46/unit)", link: "https://skylinecollege.edu/respiratorycare/", notes: "CoARC-accredited (Program #200147); includes 800+ clinical hours at San Francisco/San Mateo County hospitals. Graduates must also pass the RRT exam and an RCB-approved law/ethics course to get licensed." }
    ],
    steps: [
      { text: "Before you graduate, explore healthcare through the Stanford Medicine Youth Science Program or a hospital volunteer program", detail: "SMYSP is a free summer research program at Stanford for low-income/first-generation rising seniors from Northern California, including San Mateo County; Sequoia High School's Health Career Academy is another local option.", link: "https://smysp.spcs.stanford.edu/admissions" },
      { text: "Finish high school — chemistry, biology, and math help", detail: "These subjects show up directly in the program's physiology and pharmacology coursework." },
      { text: "Complete required prerequisites (statistics/math, English, medical terminology, chemistry, anatomy, physiology, microbiology)", detail: "Skyline's program requires a broad prerequisite list, so plan on a year or more of prep coursework before applying." },
      { text: "Apply to Skyline College's Respiratory Care A.S. program (fall-only admission, ~25 seats/year)", detail: "Admission is fall-only with roughly 25 seats a year, so timing your prerequisites to finish before the deadline matters." },
      { text: "Complete the 2-year program, including 800+ clinical hours at Bay Area hospitals", detail: "Clinical rotations expose you to settings from newborn ICUs to sleep labs, which helps you find the specialty you like best." },
      { text: "Pass the NBRC exam to earn your RRT credential, plus an RCB-approved law/ethics course", detail: "You need the RRT specifically — an older CRT-only credential doesn't meet California's current licensing bar unless it was obtained before 2015." },
      { text: "Apply for your CA Respiratory Care Practitioner (RCP) license and apply to local hospitals", detail: "California is one of the few states that layers its own RCP license on top of the national RRT credential, so budget time for that extra step." }
    ],
    localEmployers: ["Kaiser Permanente", "Stanford / Lucile Packard Children's Hospital", "El Camino Hospital (Mountain View)", "Sutter Health (Burlingame)", "County of San Mateo Health System"],
    growthOutlook: "BLS projects +12% growth (2024–2034, \"much faster than average\"), about 8,800 openings each year nationally. (Source: BLS Occupational Outlook Handbook)",
    quoteType: "fact",
    quoteText: "There are about 133,900 respiratory therapists working nationally, and licensing is required in every U.S. state except Alaska.",
    quoteSourceLabel: "American Association for Respiratory Care",
    quoteSourceUrl: "https://www.aarc.org/your-rt-career/why-be-an-rt/quick-facts-respiratory-therapists/",
    skills: ["Cardiopulmonary diagnostics & ventilator management", "Patient assessment across age groups", "Emergency response (code teams, intubation support)", "Respiratory equipment operation", "Clear communication under pressure"],
    quizTraits: { handsOn: 3, helpingPeople: 5, tech: 3, outdoors: 1, fastStart: 2, creative: 1, computers: 2, precision: 4, animals: 1, food: 1, calmUnderPressure: 5, machinery: 1, teamwork: 4, leadership: 2, structure: 4 },
    indeedQuery: "respiratory+therapist",
    indeedLocation: "San+Mateo%2C+CA",
    es: {
      title: "Terapeuta Respiratorio(a)",
      tagline: "Ayuda a los pacientes a respirar mejor — desde UCI neonatales hasta laboratorios del sueño — con un título de dos años y una carrera de salud estable.",
      timeToJob: "2 años",
      salaryNote: "Cifras nacionales del BLS mostradas arriba. Se ha citado en otras fuentes una mediana específica de California de aproximadamente $95,540/año, pero no pudimos verificarla de forma independiente directamente en bls.gov. (Fuente: BLS Occupational Outlook Handbook, datos de mayo de 2024)",
      licenseBody: "Licencia de Practicante de Cuidado Respiratorio (RCP) de CA — Respiratory Care Board of California (requiere una credencial RRT más un título asociado acreditado)",
      growthOutlook: "El BLS proyecta un crecimiento del +12% (2024–2034, \"mucho más rápido que el promedio\"), con cerca de 8,800 vacantes cada año a nivel nacional. (Fuente: BLS Occupational Outlook Handbook)",
      quoteText: "Hay cerca de 133,900 terapeutas respiratorios trabajando a nivel nacional, y se requiere licencia en todos los estados de EE. UU. excepto Alaska.",
      skills: ["Diagnóstico cardiopulmonar y manejo de ventiladores", "Evaluación de pacientes de todas las edades", "Respuesta a emergencias (equipos de código, apoyo en intubación)", "Operación de equipo respiratorio", "Comunicación clara bajo presión"],
      steps: [
        { text: "Antes de graduarte, explora el sector salud a través del Stanford Medicine Youth Science Program o un programa de voluntariado hospitalario", detail: "SMYSP es un programa gratuito de investigación de verano en Stanford para estudiantes de bajos ingresos/primera generación que están por cursar su último año, del norte de California, incluyendo el Condado de San Mateo; el Health Career Academy de Sequoia High School es otra opción local.", link: "https://smysp.spcs.stanford.edu/admissions" },
        { text: "Termina la preparatoria — la química, biología y matemáticas ayudan", detail: "Estas materias aparecen directamente en los cursos de fisiología y farmacología del programa." },
        { text: "Completa los prerrequisitos requeridos (estadística/matemáticas, inglés, terminología médica, química, anatomía, fisiología, microbiología)", detail: "El programa de Skyline exige una lista amplia de prerrequisitos, así que planea un año o más de cursos preparatorios antes de solicitar." },
        { text: "Solicita el programa de Cuidado Respiratorio A.S. de Skyline College (admisión solo en otoño, ~25 lugares/año)", detail: "La admisión es solo en otoño con alrededor de 25 lugares al año, así que sincronizar tus prerrequisitos para terminarlos antes de la fecha límite es importante." },
        { text: "Completa el programa de 2 años, incluyendo más de 800 horas clínicas en hospitales del Área de la Bahía", detail: "Las rotaciones clínicas te exponen a entornos que van desde UCI neonatales hasta laboratorios del sueño, lo que te ayuda a encontrar la especialidad que más te gusta." },
        { text: "Aprueba el examen de NBRC para obtener tu credencial RRT, más un curso de ley/ética aprobado por RCB", detail: "Necesitas específicamente la credencial RRT — una credencial CRT antigua por sí sola no cumple con el requisito actual de licencia de California, salvo que se haya obtenido antes de 2015." },
        { text: "Solicita tu licencia de Practicante de Cuidado Respiratorio (RCP) de CA y postúlate en hospitales locales", detail: "California es uno de los pocos estados que exige su propia licencia RCP además de la credencial nacional RRT, así que reserva tiempo para ese paso adicional." }
      ],
      paths: [
        { duration: "2 años (~60 unidades); admisión solo en otoño, ~25 lugares/año", cost: "Colegiatura de universidad comunitaria de CA (~$46/unidad)", notes: "Acreditado por CoARC (Programa #200147); incluye más de 800 horas clínicas en hospitales de San Francisco/Condado de San Mateo. Los graduados también deben aprobar el examen RRT y un curso de ley/ética aprobado por RCB para obtener la licencia." }
      ]
    },
  },
  {
    id: "massage-therapist",
    title: "Massage Therapist",
    emoji: "💆",
    tagline: "Turn hands-on healing into a career — flexible hours and a licensing path that can take well under a year.",
    category: "Beauty & Wellness",
    demandLocal: "high",
    openingsAnnualUS: 24700,
    timeToJob: "About 6–9 months (500+ hour program)",
    timeMonths: 7,
    salaryEntry: 33280, salaryMid: 57950, salaryTop: 97450,
    salaryNote: "National BLS figures shown above. California-specific aggregator data suggests a lower state median (~$48k/yr) but the highest total employment of any state; figures not independently verified directly on bls.gov. (Source: BLS Occupational Outlook Handbook, May 2024 data)",
    licenseRequired: false,
    licenseBody: "CAMTC (California Massage Therapy Council) certification is voluntary at the state level but required by most employers/cities — needs 500+ hours from a CAMTC-approved school plus the MBLEx or BCTMB exam",
    paths: [
      { name: "San Francisco School of Massage & Bodywork", type: "certificate", school: "San Francisco School of Massage & Bodywork", location: "San Francisco, CA", duration: "600-hour program, rolling start dates", cost: "Tuition not published; financing available", link: "https://www.sfsm.edu/", notes: "CAMTC-approved school (ID SCH0056). None of the three San Mateo County colleges offer a massage therapy program." },
      { name: "National Holistic Institute", type: "certificate", school: "National Holistic Institute", location: "Emeryville, CA", duration: "800–900 hour program", cost: "Not published on program page", link: "https://nhi.edu/massage-therapy-schools/emeryville-massage-training", notes: "CAMTC-approved school (ID SCH0045)." }
    ],
    steps: [
      { text: "This career realistically can't start hands-on training before 18 — but you can still explore it", detail: "California requires massage therapists to be 18 to certify, so there's no real apprenticeship-style path for minors. Informational interviews with licensed therapists and anatomy/physiology coursework through your school's health science pathway are the honest starting points.", link: "https://www.camtc.org/requirements-to-certify/" },
      { text: "Finish high school or GED", detail: "No specific prerequisite coursework is required to enroll in a CAMTC-approved program." },
      { text: "Enroll in a CAMTC-approved program — e.g. San Francisco School of Massage & Bodywork (600 hours) or National Holistic Institute in Emeryville (800–900 hours)", detail: "Only CAMTC-approved schools count toward certification, so confirm a program's approval status before enrolling." },
      { text: "Complete the required hours (500+ minimum) in anatomy, technique, and business practice", detail: "The business-practice component matters — a large share of massage therapists end up self-employed rather than working for a single employer." },
      { text: "Pass the MBLEx or BCTMB exam and get CAMTC-certified", detail: "CAMTC certification is technically voluntary at the state level, but most cities and employers require it in practice." },
      { text: "Apply to spas, chiropractic/PT clinics, or hospital wellness centers, or start building your own client base", detail: "Building an independent client base takes longer to ramp up but can offer more schedule control than working for a spa." }
    ],
    localEmployers: ["Bay Area spas and wellness centers", "Chiropractic and physical therapy clinics", "Hotel/resort spas", "Self-employment (43% of massage therapists nationally are self-employed)"],
    growthOutlook: "BLS projects +15% growth (2024–2034, \"much faster than average\"), about 24,700 openings each year nationally. (Source: BLS Occupational Outlook Handbook)",
    quoteType: "fact",
    quoteText: "82% of massage therapists say massage therapy was not their first career — making it one of the more common career-change paths into a licensed trade.",
    quoteSourceLabel: "American Massage Therapy Association",
    quoteSourceUrl: "https://www.amtamassage.org/publications/massage-profession-research-report/",
    skills: ["Swedish/deep-tissue/sports massage technique", "Functional anatomy & physiology knowledge", "Client intake & communication", "Physical stamina & body mechanics", "Small-business/self-employment skills"],
    quizTraits: { handsOn: 5, helpingPeople: 5, tech: 1, outdoors: 1, fastStart: 4, creative: 3, computers: 1, precision: 3, animals: 1, food: 1, calmUnderPressure: 2, machinery: 1, teamwork: 1, leadership: 4, structure: 2 },
    indeedQuery: "massage+therapist",
    indeedLocation: "San+Mateo%2C+CA",
    es: {
      title: "Masoterapeuta",
      tagline: "Convierte la sanación práctica en una carrera — horarios flexibles y una vía de licencia que puede tomar bastante menos de un año.",
      timeToJob: "Cerca de 6–9 meses (programa de 500+ horas)",
      salaryNote: "Cifras nacionales del BLS mostradas arriba. Datos de agregadores específicos de California sugieren una mediana estatal más baja (~$48,000/año), pero el mayor empleo total de cualquier estado; cifras no verificadas de forma independiente directamente en bls.gov. (Fuente: BLS Occupational Outlook Handbook, datos de mayo de 2024)",
      licenseBody: "La certificación CAMTC (California Massage Therapy Council) es voluntaria a nivel estatal, pero requerida por la mayoría de los empleadores/ciudades — necesita 500+ horas de una escuela aprobada por CAMTC más el examen MBLEx o BCTMB",
      growthOutlook: "El BLS proyecta un crecimiento del +15% (2024–2034, \"mucho más rápido que el promedio\"), con cerca de 24,700 vacantes cada año a nivel nacional. (Fuente: BLS Occupational Outlook Handbook)",
      quoteText: "El 82% de los masoterapeutas dice que la masoterapia no fue su primera carrera — lo que la convierte en una de las vías de cambio de carrera más comunes hacia un oficio con licencia.",
      skills: ["Técnica de masaje sueco/de tejido profundo/deportivo", "Conocimiento funcional de anatomía y fisiología", "Recepción y comunicación con el cliente", "Resistencia física y mecánica corporal", "Habilidades de negocio propio/trabajo independiente"],
      steps: [
        { text: "Esta carrera realmente no se puede comenzar de forma práctica antes de los 18 años — pero aún puedes explorarla", detail: "California exige que los masoterapeutas tengan 18 años para certificarse, así que no existe una vía real de aprendizaje práctico para menores. Las entrevistas informativas con terapeutas con licencia y los cursos de anatomía/fisiología a través del programa de ciencias de la salud de tu escuela son los puntos de partida honestos.", link: "https://www.camtc.org/requirements-to-certify/" },
        { text: "Termina la preparatoria o el GED", detail: "No se requiere ningún curso prerrequisito específico para inscribirte en un programa aprobado por CAMTC." },
        { text: "Inscríbete en un programa aprobado por CAMTC — por ejemplo, San Francisco School of Massage & Bodywork (600 horas) o National Holistic Institute en Emeryville (800–900 horas)", detail: "Solo las escuelas aprobadas por CAMTC cuentan para la certificación, así que confirma el estatus de aprobación de un programa antes de inscribirte." },
        { text: "Completa las horas requeridas (mínimo 500+) en anatomía, técnica y práctica de negocios", detail: "El componente de práctica de negocios importa — una gran parte de los masoterapeutas terminan trabajando de forma independiente en lugar de para un solo empleador." },
        { text: "Aprueba el examen MBLEx o BCTMB y obtén la certificación CAMTC", detail: "La certificación de CAMTC es técnicamente voluntaria a nivel estatal, pero la mayoría de las ciudades y empleadores la exigen en la práctica." },
        { text: "Solicita empleo en spas, clínicas de quiropráctica/fisioterapia o centros de bienestar de hospitales, o comienza a construir tu propia cartera de clientes", detail: "Construir una cartera de clientes independiente toma más tiempo en arrancar, pero puede ofrecer más control sobre tu horario que trabajar para un spa." }
      ],
      paths: [
        { duration: "Programa de 600 horas, con fechas de inicio continuas", cost: "Colegiatura no publicada; financiamiento disponible", notes: "Escuela aprobada por CAMTC (ID SCH0056). Ninguno de los tres colegios del Condado de San Mateo ofrece un programa de masoterapia." },
        { duration: "Programa de 800–900 horas", cost: "No publicado en la página del programa", notes: "Escuela aprobada por CAMTC (ID SCH0045)." }
      ]
    },
  },
  {
    id: "veterinary-technician",
    title: "Veterinary Technician",
    emoji: "🐾",
    tagline: "Assist veterinarians with hands-on animal care — bloodwork, anesthesia monitoring, and surgery support — in a two-year path to licensure.",
    category: "Animal Care",
    demandLocal: "high",
    openingsAnnualUS: 14300,
    timeToJob: "2 years (competitive, 32 seats/cohort)",
    timeMonths: 24,
    salaryEntry: 32120, salaryMid: 45980, salaryTop: 60880,
    salaryNote: "National BLS figures shown above. Bay Area aggregator estimates run notably higher (~$55k–$87k), not independently verified directly on bls.gov. (Source: BLS Occupational Outlook Handbook, May 2024 data)",
    licenseRequired: true,
    licenseBody: "CA Registered Veterinary Technician (RVT) — California Veterinary Medical Board (requires an accredited degree plus passing the VTNE)",
    paths: [
      { name: "Foothill College — Veterinary Technology A.S.", type: "associate", school: "Foothill College", location: "Los Altos Hills, CA", duration: "2 years; cohort of 32 students/year", cost: "~$6,000 total (tuition ~$2,852 for 92 units, plus fees/books/vaccines/exam)", link: "https://foothill.edu/veterinary-technology/index.html", notes: "The only AVMA-CVTEA-accredited program in the greater SF Bay Area. Reports an 89% VTNE pass rate and 100% job placement for recent cohorts. None of the three San Mateo County colleges offer this program." }
    ],
    steps: [
      { text: "Before you graduate, get hands-on animal care experience through Peninsula Humane Society's Junior Volunteer Program", detail: "Open to ages 13–17 (13–15 need a parent alongside), about 2 hours a week for at least 6 months — real, direct animal-care experience while still in high school.", link: "https://phs-spca.org/volunteer/positions/junior/" },
      { text: "Finish high school — biology and chemistry help", detail: "These subjects form the foundation of the program's animal anatomy and pharmacology courses." },
      { text: "Apply to Foothill College's Veterinary Technology A.S. program (competitive, 32 seats/year)", detail: "It's the only AVMA-CVTEA-accredited program in the greater Bay Area, so demand for its 32 annual seats is high." },
      { text: "Complete the 2-year program, including hands-on clinical training", detail: "Clinical training includes real patient care under supervision, not just classroom labs." },
      { text: "Pass the Veterinary Technician National Exam (VTNE)", detail: "Foothill's graduates pass at an 89% first-attempt rate, well above many programs nationally." },
      { text: "Apply for your CA Registered Veterinary Technician (RVT) credential through the state Veterinary Medical Board", detail: "The RVT title is legally protected in California — you can work in a clinic without it, but you can't use the title or perform certain regulated tasks." },
      { text: "Apply to local veterinary hospitals or humane societies", detail: "Specialty and emergency hospitals often pay more but expect faster-paced, higher-stress caseloads than a general practice." }
    ],
    localEmployers: ["SAGE Redwood City", "Pets In Need (Redwood City)", "Burlingame Family Pet Hospital", "Beacon Veterinary Specialists (Fremont)", "Peninsula Humane Society (San Mateo)"],
    growthOutlook: "BLS projects +9% growth (2024–2034, \"much faster than average\"), about 14,300 openings each year nationally. (Source: BLS Occupational Outlook Handbook)",
    quoteType: "fact",
    quoteText: "Veterinary technicians have one of the highest rates of injuries and illnesses of any occupation, according to BLS — a realistic factor to weigh alongside the rewarding hands-on animal care work.",
    quoteSourceLabel: "BLS Occupational Outlook Handbook",
    quoteSourceUrl: "https://www.bls.gov/ooh/healthcare/veterinary-technologists-and-technicians.htm",
    skills: ["Animal restraint & handling", "Phlebotomy & lab diagnostics", "Anesthesia monitoring", "Radiography", "Client communication"],
    quizTraits: { handsOn: 4, helpingPeople: 5, tech: 2, outdoors: 2, fastStart: 3, creative: 1, computers: 1, precision: 4, animals: 5, food: 1, calmUnderPressure: 4, machinery: 1, teamwork: 4, leadership: 1, structure: 4 },
    indeedQuery: "veterinary+technician",
    indeedLocation: "San+Mateo%2C+CA",
    es: {
      title: "Técnico(a) Veterinario(a)",
      tagline: "Asiste a los veterinarios con el cuidado práctico de animales — análisis de sangre, monitoreo de anestesia y apoyo en cirugías — en una vía de dos años hacia la licencia.",
      timeToJob: "2 años (competitivo, 32 lugares por cohorte)",
      salaryNote: "Cifras nacionales del BLS mostradas arriba. Las estimaciones de agregadores del Área de la Bahía son notablemente más altas (~$55,000–$87,000), no verificadas de forma independiente directamente en bls.gov. (Fuente: BLS Occupational Outlook Handbook, datos de mayo de 2024)",
      licenseBody: "Técnico Veterinario Registrado (RVT) de CA — California Veterinary Medical Board (requiere un título acreditado más aprobar el VTNE)",
      growthOutlook: "El BLS proyecta un crecimiento del +9% (2024–2034, \"mucho más rápido que el promedio\"), con cerca de 14,300 vacantes cada año a nivel nacional. (Fuente: BLS Occupational Outlook Handbook)",
      quoteText: "Los técnicos veterinarios tienen una de las tasas más altas de lesiones y enfermedades de cualquier ocupación, según el BLS — un factor realista a considerar junto con el gratificante trabajo práctico de cuidado animal.",
      skills: ["Sujeción y manejo de animales", "Flebotomía y diagnóstico de laboratorio", "Monitoreo de anestesia", "Radiografía", "Comunicación con el cliente"],
      steps: [
        { text: "Antes de graduarte, obtén experiencia práctica con animales a través del Programa de Voluntariado Juvenil de Peninsula Humane Society", detail: "Abierto a edades 13–17 (13–15 deben ir acompañados de un padre), cerca de 2 horas por semana durante al menos 6 meses — experiencia real y directa de cuidado animal mientras aún estás en la preparatoria.", link: "https://phs-spca.org/volunteer/positions/junior/" },
        { text: "Termina la preparatoria — la biología y química ayudan", detail: "Estas materias forman la base de los cursos de anatomía animal y farmacología del programa." },
        { text: "Solicita el programa de Tecnología Veterinaria A.S. de Foothill College (competitivo, 32 lugares/año)", detail: "Es el único programa acreditado por AVMA-CVTEA en toda el Área de la Bahía, así que la demanda por sus 32 lugares anuales es alta." },
        { text: "Completa el programa de 2 años, incluyendo capacitación clínica práctica", detail: "La capacitación clínica incluye atención real a pacientes bajo supervisión, no solo prácticas de laboratorio en el aula." },
        { text: "Aprueba el Examen Nacional para Técnicos Veterinarios (VTNE)", detail: "Los graduados de Foothill aprueban en su primer intento el 89% de las veces, muy por encima de muchos programas a nivel nacional." },
        { text: "Solicita tu credencial de Técnico Veterinario Registrado (RVT) de CA a través de la junta estatal de medicina veterinaria", detail: "El título de RVT está legalmente protegido en California — puedes trabajar en una clínica sin él, pero no puedes usar el título ni realizar ciertas tareas reguladas." },
        { text: "Solicita empleo en hospitales veterinarios o sociedades humanitarias locales", detail: "Los hospitales de especialidad y de emergencia suelen pagar más, pero esperan casos de ritmo más acelerado y mayor estrés que una práctica general." }
      ],
      paths: [
        { duration: "2 años; cohorte de 32 estudiantes/año", cost: "~$6,000 en total (colegiatura de ~$2,852 por 92 unidades, más cuotas/libros/vacunas/examen)", notes: "El único programa acreditado por AVMA-CVTEA en toda el Área de la Bahía. Reporta una tasa de aprobación del VTNE del 89% y 100% de colocación laboral en las cohortes recientes. Ninguno de los tres colegios del Condado de San Mateo ofrece este programa." }
      ]
    },
  },
  {
    id: "line-cook",
    title: "Line Cook",
    emoji: "🍳",
    tagline: "Learn knife skills, station management, and food safety to work the line in professional kitchens.",
    category: "Culinary & Hospitality",
    demandLocal: "high",
    openingsAnnualUS: 432200,
    timeToJob: "Days (food handler card + hire) up to 2 years (AS degree)",
    timeMonths: 1,
    salaryEntry: 28700, salaryMid: 37390, salaryTop: 47900,
    salaryNote: "Median figure is for the broader \"Cooks\" category; entry/experienced figures are for the \"Cooks, Restaurant\" subcategory specifically, so treat this range as approximate. Bay Area line cooks often earn $20–23/hr (~$42k–$46k/yr) per job-listing aggregators. (Source: BLS Occupational Outlook Handbook, May 2024 data)",
    licenseRequired: false,
    licenseBody: "No state license required; a California Food Handler Card (e.g. via ServSafe) is required within 30 days of hire",
    paths: [
      { name: "City College of San Francisco — Culinary Arts and Hospitality Studies", type: "certificate", school: "City College of San Francisco", location: "San Francisco, CA", duration: "AS degree (60+ units, 4 semesters) or shorter certificates (e.g. Baking & Pastry, 2 semesters)", cost: "Tuition free for SF residents via Free City; otherwise ~$46/unit, plus ~$300 knives/tools and ~$200 uniform/shoes", link: "https://www.ccsf.edu/degrees-certificates/culinary-arts", notes: "Nearest formal program — none of the three San Mateo County colleges offer a dedicated culinary arts program. Worth noting: BLS says no formal education is actually required to become a cook; many line cooks train entirely on the job." }
    ],
    steps: [
      { text: "Before you graduate, ask your school if it offers ProStart", detail: "ProStart is a real two-year, in-school culinary and hospitality management program used by public high schools statewide — ask your school's CTE office, or contact the California Restaurant Foundation to find a participating school near you.", link: "https://chooserestaurants.org/programs/prostart/" },
      { text: "Get a California Food Handler Card (e.g. via ServSafe) — required within 30 days of hire", detail: "This is the one credential California actually requires by law, so get it before or immediately after you're hired." },
      { text: "Apply for an entry-level kitchen or line cook position — BLS notes no formal education is actually required to start", detail: "Many kitchens hire based on a trial shift rather than a formal interview, so be ready to show your knife skills in person." },
      { text: "Optional: enroll in City College of San Francisco's Culinary Arts program for structured training and faster advancement", detail: "Because BLS confirms formal schooling isn't required, this step is about accelerating your advancement, not a prerequisite to start working." },
      { text: "Build skills across stations (prep, sauté, grill, pastry) through on-the-job experience", detail: "Rotating stations is usually how kitchens informally decide who's ready for a sous chef or lead line role." },
      { text: "Pursue a certificate, AS degree, or American Culinary Federation certification to move toward sous chef or head chef roles", detail: "ACF certification is one of the few credentials that's portable and recognized across different restaurant groups, unlike an individual restaurant's internal promotion track." }
    ],
    localEmployers: ["Truffle Poke Bar (Burlingame)", "Hyatt Regency San Francisco Airport (Burlingame)", "Curry Up Now (San Mateo)", "Bay Area restaurants generally"],
    growthOutlook: "BLS projects +5% growth (2024–2034) for cooks overall, with a very large number of openings — about 432,200 each year nationally, reflecting high turnover in the field. (Source: BLS Occupational Outlook Handbook)",
    quoteType: "fact",
    quoteText: "Although no formal education is required, some cooks attend culinary school; line cooks typically work assigned stations equipped with the stoves, grills, pans, and ingredients they need.",
    quoteSourceLabel: "BLS Occupational Outlook Handbook",
    quoteSourceUrl: "https://www.bls.gov/ooh/food-preparation-and-serving/cooks.htm",
    skills: ["Knife skills & prep", "Station/line management under time pressure", "Food safety & sanitation", "Recipe execution & consistency", "Teamwork in high-pressure kitchens"],
    quizTraits: { handsOn: 4, helpingPeople: 3, tech: 1, outdoors: 1, fastStart: 5, creative: 5, computers: 1, precision: 3, animals: 1, food: 5, calmUnderPressure: 4, machinery: 1, teamwork: 4, leadership: 3, structure: 2 },
    indeedQuery: "line+cook",
    indeedLocation: "San+Mateo%2C+CA",
    es: {
      title: "Cocinero(a) de Línea",
      tagline: "Aprende técnicas de cuchillo, manejo de estaciones y seguridad alimentaria para trabajar en la línea de cocinas profesionales.",
      timeToJob: "Días (tarjeta de manejo de alimentos + contratación) hasta 2 años (título AS)",
      salaryNote: "La cifra media corresponde a la categoría más amplia de \"Cocineros\"; las cifras de nivel inicial y con experiencia corresponden específicamente a la subcategoría \"Cocineros, Restaurante\", así que trata este rango como aproximado. Los cocineros de línea del Área de la Bahía suelen ganar $20–23/hora (~$42,000–$46,000/año) según agregadores de anuncios de empleo. (Fuente: BLS Occupational Outlook Handbook, datos de mayo de 2024)",
      licenseBody: "No se requiere licencia estatal; se requiere una Tarjeta de Manejador de Alimentos de California (por ejemplo, a través de ServSafe) dentro de los 30 días de la contratación",
      growthOutlook: "El BLS proyecta un crecimiento del +5% (2024–2034) para los cocineros en general, con una gran cantidad de vacantes — cerca de 432,200 cada año a nivel nacional, lo que refleja una alta rotación en el campo. (Fuente: BLS Occupational Outlook Handbook)",
      quoteText: "Aunque no se requiere educación formal, algunos cocineros asisten a escuelas culinarias; los cocineros de línea normalmente trabajan en estaciones asignadas equipadas con las estufas, parrillas, sartenes e ingredientes que necesitan.",
      skills: ["Técnicas de cuchillo y preparación", "Manejo de estación/línea bajo presión de tiempo", "Seguridad alimentaria y sanitización", "Ejecución y consistencia de recetas", "Trabajo en equipo en cocinas de alta presión"],
      steps: [
        { text: "Antes de graduarte, pregunta en tu escuela si ofrecen ProStart", detail: "ProStart es un programa real de dos años, dentro de la escuela, de administración culinaria y de hospitalidad, usado por preparatorias públicas en todo el estado — pregunta en la oficina de CTE de tu escuela, o contacta a la California Restaurant Foundation para encontrar una escuela participante cerca de ti.", link: "https://chooserestaurants.org/programs/prostart/" },
        { text: "Obtén una Tarjeta de Manejador de Alimentos de California (por ejemplo, a través de ServSafe) — requerida dentro de los 30 días de la contratación", detail: "Es la única credencial que California realmente exige por ley, así que consíguela antes de que te contraten o inmediatamente después." },
        { text: "Solicita un puesto de cocina de nivel inicial o de cocinero de línea — el BLS señala que no se requiere educación formal para comenzar", detail: "Muchas cocinas contratan según un turno de prueba en lugar de una entrevista formal, así que prepárate para mostrar tus habilidades con el cuchillo en persona." },
        { text: "Opcional: inscríbete en el programa de Artes Culinarias de City College of San Francisco para una capacitación estructurada y un avance más rápido", detail: "Como el BLS confirma que no se requiere educación formal, este paso sirve para acelerar tu avance, no es un prerrequisito para empezar a trabajar." },
        { text: "Desarrolla habilidades en distintas estaciones (preparación, salteado, parrilla, repostería) a través de la experiencia en el trabajo", detail: "Rotar por las estaciones suele ser la forma informal en que las cocinas deciden quién está listo para un puesto de sous chef o de línea líder." },
        { text: "Obtén un certificado, título AS o la certificación de la American Culinary Federation para avanzar hacia puestos de sous chef o chef ejecutivo", detail: "La certificación de la ACF es una de las pocas credenciales portátiles y reconocidas entre distintos grupos de restaurantes, a diferencia de la ruta de ascenso interna de un solo restaurante." }
      ],
      paths: [
        { duration: "Título AS (60+ unidades, 4 semestres) o certificados más cortos (por ejemplo, Repostería y Panadería, 2 semestres)", cost: "Colegiatura gratuita para residentes de SF a través de Free City; de lo contrario ~$46/unidad, más ~$300 en cuchillos/herramientas y ~$200 en uniforme/calzado", notes: "El programa formal más cercano — ninguno de los tres colegios del Condado de San Mateo ofrece un programa dedicado de artes culinarias. Vale la pena notar: el BLS indica que en realidad no se requiere educación formal para ser cocinero; muchos cocineros de línea se forman completamente en el trabajo." }
      ]
    },
  }
];

const DEMAND_LABELS = {
  "very-high": { label: "Very High Demand", color: "#1A7A2E", bg: "#E8F5E9" },
  "high":      { label: "High Demand",      color: "#D35400", bg: "#FEF3E2" },
  "moderate":  { label: "Moderate Demand",  color: "#1A4F8A", bg: "#E8F2FB" },
};

// ── Quiz questions ──────────────────────────────────────────────────────────
const QUIZ_QUESTIONS = [
  {
    id: "handsOn",
    question: "How much do you enjoy working with your hands — building, fixing, or installing physical things?",
    question_es: "¿Cuánto disfrutas trabajar con las manos — construir, reparar o instalar cosas físicas?",
    options: [
      { label: "I love it — I'd rather be doing than sitting",        label_es: "Me encanta — prefiero estar haciendo algo que sentado(a) sin hacer nada", score: 5 },
      { label: "It's fine, I don't mind physical work",               label_es: "Está bien, no me molesta el trabajo físico", score: 3 },
      { label: "I prefer desk or computer work",                       label_es: "Prefiero trabajo de escritorio o computadora", score: 1 },
    ]
  },
  {
    id: "helpingPeople",
    question: "How important is it that your job directly helps individual people (patients, clients, neighbors)?",
    question_es: "¿Qué tan importante es que tu trabajo ayude directamente a personas individuales (pacientes, clientes, vecinos)?",
    options: [
      { label: "Very important — I want to see the impact on people",  label_es: "Muy importante — quiero ver el impacto en las personas", score: 5 },
      { label: "Somewhat — I'd like it but it's not required",         label_es: "Algo importante — me gustaría, pero no es indispensable", score: 3 },
      { label: "Not a priority — I care more about the work itself",   label_es: "No es prioridad — me importa más el trabajo en sí", score: 1 },
    ]
  },
  {
    id: "tech",
    question: "How interested are you in technology, electronics, or systems that involve wiring and controls?",
    question_es: "¿Qué tan interesado(a) estás en la tecnología, la electrónica o los sistemas que involucran cableado y controles?",
    options: [
      { label: "Very — I like understanding how systems work",         label_es: "Mucho — me gusta entender cómo funcionan los sistemas", score: 5 },
      { label: "Somewhat — I don't mind learning tech skills",         label_es: "Algo — no me molesta aprender habilidades técnicas", score: 3 },
      { label: "Not really — I prefer straightforward physical tasks", label_es: "No mucho — prefiero tareas físicas sencillas", score: 1 },
    ]
  },
  {
    id: "outdoors",
    question: "How much do you want to work outside or on-site (not in an office or clinic)?",
    question_es: "¿Cuánto te gustaría trabajar al aire libre o en el lugar de trabajo (no en una oficina o clínica)?",
    options: [
      { label: "Definitely — I don't want to be stuck inside all day", label_es: "Definitivamente — no quiero estar encerrado(a) todo el día", score: 5 },
      { label: "Either is fine — I'm flexible",                        label_es: "Cualquiera está bien — soy flexible", score: 3 },
      { label: "I prefer climate-controlled indoor environments",       label_es: "Prefiero ambientes interiores con clima controlado", score: 1 },
    ]
  },
  {
    id: "fastStart",
    question: "How quickly do you want to start earning full pay? (vs. a longer apprenticeship with higher ceiling)",
    question_es: "¿Qué tan rápido quieres empezar a ganar el salario completo? (en comparación con un aprendizaje más largo con mayor potencial)",
    options: [
      { label: "ASAP — I want to be earning within 6–12 months",      label_es: "Lo antes posible — quiero estar ganando dentro de 6 a 12 meses", score: 5 },
      { label: "I'm okay waiting 2–3 years for the right career",     label_es: "Está bien esperar de 2 a 3 años por la carrera correcta", score: 3 },
      { label: "I'll invest 4–5 years if it means the best outcome",  label_es: "Invertiré de 4 a 5 años si eso significa el mejor resultado", score: 1 },
    ]
  },
  {
    id: "creative",
    question: "How much do you want your job to involve creativity, personal style, or artistic expression?",
    question_es: "¿Cuánto quieres que tu trabajo involucre creatividad, estilo personal o expresión artística?",
    options: [
      { label: "A lot — I want to create looks, designs, or things people notice", label_es: "Mucho — quiero crear looks, diseños o cosas que la gente note", score: 5 },
      { label: "Some — I like a bit of creative flexibility",                       label_es: "Algo — me gusta tener algo de flexibilidad creativa", score: 3 },
      { label: "Not much — I'd rather follow a clear technical process",            label_es: "No mucho — prefiero seguir un proceso técnico claro", score: 1 },
    ]
  },
  {
    id: "computers",
    question: "How comfortable and interested are you in working with computers, software, and troubleshooting tech systems (screens and code — not wiring)?",
    question_es: "¿Qué tan cómodo(a) e interesado(a) estás en trabajar con computadoras, software y resolver problemas de sistemas tecnológicos (pantallas y código, no cableado)?",
    options: [
      { label: "Very — I like solving problems on a screen",                label_es: "Mucho — me gusta resolver problemas en una pantalla", score: 5 },
      { label: "Somewhat — I can handle basic tech troubleshooting",        label_es: "Algo — puedo resolver problemas técnicos básicos", score: 3 },
      { label: "Not really — I'd rather work with physical tools and equipment", label_es: "No mucho — prefiero trabajar con herramientas y equipo físico", score: 1 },
    ]
  },
  {
    id: "precision",
    question: "How much do you enjoy precise, detail-focused work where small mistakes really matter (exact measurements, following exact specs)?",
    question_es: "¿Cuánto disfrutas el trabajo preciso y detallado donde los pequeños errores realmente importan (medidas exactas, seguir especificaciones exactas)?",
    options: [
      { label: "A lot — I like getting things exactly right",       label_es: "Mucho — me gusta hacer las cosas exactamente bien", score: 5 },
      { label: "Some — I can focus in when it's needed",             label_es: "Algo — puedo concentrarme cuando es necesario", score: 3 },
      { label: "Not really — I prefer big-picture, flexible work",   label_es: "No mucho — prefiero un trabajo flexible y de panorama general", score: 1 },
    ]
  },
  {
    id: "animals",
    question: "How much do you want your work to involve caring for or handling animals?",
    question_es: "¿Cuánto quieres que tu trabajo involucre cuidar o manejar animales?",
    options: [
      { label: "A lot — working with animals is a big draw for me",   label_es: "Mucho — trabajar con animales me atrae mucho", score: 5 },
      { label: "I wouldn't mind it now and then",                     label_es: "No me molestaría de vez en cuando", score: 3 },
      { label: "Not a factor — I'd rather not work with animals",     label_es: "No es un factor — prefiero no trabajar con animales", score: 1 },
    ]
  },
  {
    id: "food",
    question: "How interested are you in food, cooking, or the culinary arts?",
    question_es: "¿Qué tan interesado(a) estás en la comida, la cocina o las artes culinarias?",
    options: [
      { label: "Very — I'd love a job built around food",             label_es: "Mucho — me encantaría un trabajo centrado en la comida", score: 5 },
      { label: "Somewhat — I enjoy it but it's not a priority",       label_es: "Algo — lo disfruto, pero no es prioridad", score: 3 },
      { label: "Not really — cooking isn't my thing",                 label_es: "No mucho — cocinar no es lo mío", score: 1 },
    ]
  },
  {
    id: "calmUnderPressure",
    question: "How comfortable are you working in fast-paced, high-stakes environments (operating rooms, emergencies, tight deadlines)?",
    question_es: "¿Qué tan cómodo(a) te sientes trabajando en ambientes acelerados y de alta presión (quirófanos, emergencias, plazos ajustados)?",
    options: [
      { label: "Very comfortable — I stay steady under pressure",     label_es: "Muy cómodo(a) — me mantengo firme bajo presión", score: 5 },
      { label: "It's okay occasionally, not as a constant thing",     label_es: "Está bien ocasionalmente, no como algo constante", score: 3 },
      { label: "I'd rather have a calm, predictable pace",            label_es: "Prefiero un ritmo tranquilo y predecible", score: 1 },
    ]
  },
  {
    id: "machinery",
    question: "How comfortable are you operating large vehicles or heavy machinery?",
    question_es: "¿Qué tan cómodo(a) te sientes operando vehículos grandes o maquinaria pesada?",
    options: [
      { label: "Very — I'd enjoy operating big equipment",            label_es: "Mucho — disfrutaría operar equipo grande", score: 5 },
      { label: "I'm open to it with proper training",                 label_es: "Estoy abierto(a) con la capacitación adecuada", score: 3 },
      { label: "Not for me — I'd rather avoid heavy machinery",       label_es: "No es para mí — prefiero evitar la maquinaria pesada", score: 1 },
    ]
  },
  {
    id: "teamwork",
    question: "Do you prefer working closely as part of a team, or more independently?",
    question_es: "¿Prefieres trabajar de cerca como parte de un equipo, o de forma más independiente?",
    options: [
      { label: "Team-focused — I like working closely with others",   label_es: "Enfocado(a) en equipo — me gusta trabajar de cerca con otros", score: 5 },
      { label: "A mix of both is ideal",                               label_es: "Una mezcla de ambos es ideal", score: 3 },
      { label: "Independent — I prefer working solo",                 label_es: "Independiente — prefiero trabajar solo(a)", score: 1 },
    ]
  },
  {
    id: "leadership",
    question: "How much do you want to eventually lead a team, run your own crew, or own your own business?",
    question_es: "¿Cuánto quieres, eventualmente, liderar un equipo, dirigir tu propia cuadrilla o tener tu propio negocio?",
    options: [
      { label: "A lot — I want to lead or run my own thing someday",  label_es: "Mucho — quiero liderar o tener mi propio negocio algún día", score: 5 },
      { label: "Maybe eventually, but it's not a priority",           label_es: "Tal vez eventualmente, pero no es prioridad", score: 3 },
      { label: "Not really — I'd rather not manage others",           label_es: "No mucho — prefiero no dirigir a otras personas", score: 1 },
    ]
  },
  {
    id: "structure",
    question: "How much do you prefer clear rules, safety protocols, and established procedures over open-ended, flexible work?",
    question_es: "¿Cuánto prefieres reglas claras, protocolos de seguridad y procedimientos establecidos, en lugar de un trabajo abierto y flexible?",
    options: [
      { label: "A lot — I like clear procedures to follow",           label_es: "Mucho — me gusta tener procedimientos claros que seguir", score: 5 },
      { label: "Some structure is good, but I want flexibility too",  label_es: "Algo de estructura es bueno, pero también quiero flexibilidad", score: 3 },
      { label: "Not much — I prefer open-ended, flexible work",       label_es: "No mucho — prefiero un trabajo abierto y flexible", score: 1 },
    ]
  },
];
