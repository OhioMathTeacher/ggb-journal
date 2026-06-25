// NAGJ Article Database
// Single source of truth for all volumes and articles.
// To add a new article: add an entry to the appropriate issue's `articles` array,
// or add a new issue object. The site reads this file to render all pages.
// Enriched fields (abstract, affiliations, keywords, dateIssued, license, articlePage)
// were imported from the legacy OJS metadata + cross-checked against each PDF.

const NAGJ_DATA = {
  "journal": {
    "name": "North American GeoGebra Journal",
    "abbr": "NAGJ",
    "issn": "2162-3856",
    "tagline": "Fostering mathematical understanding through visualization and exploration.",
    "founded": 2012,
    "acceptanceRate": "53%",
    "gradeSpan": "K–16",
    "editorEmail": "james.quinlan@maine.edu",
    "legacyUrl": "https://mathed.miamioh.edu/index.php/ggbj",
    "overleafTemplate": "https://www.overleaf.com/latex/templates/nagj/jjfqhddndkxp",
    "githubTemplate": "https://github.com/jamesquinlan/nagj"
  },
  "issues": [
    {
      "id": "v14n1",
      "volume": 14,
      "number": 1,
      "year": 2026,
      "published": "2026-04-13",
      "title": "North American GeoGebra Journal",
      "subtitle": "Fostering mathematical understanding through visualization and exploration.",
      "legacyId": 19,
      "articles": [
        {
          "id": "273",
          "title": "A Digital Planisphere in GeoGebra",
          "authors": [
            "Santiago Cerisola",
            "Monica López García"
          ],
          "pages": "1–16",
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/273/179",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/273",
          "localPdf": "pdfs/v14n1-cerisola.pdf",
          "articlePage": "articles/v14n1-cerisola.html",
          "abstract": "This article presents a digital celestial planisphere for the northern hemisphere created with GeoGebra. It describes all the necessary elements of this tool and how it is built as a projection of the celestial sphere onto a plane. It also details its construction and presents examples of educational activities that can be implemented in astronomy classrooms and workshops.",
          "keywords": [],
          "dateIssued": "2026-04-13",
          "license": "http://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "Consejería de Educación de la Comunidad de Madrid",
            "Aula de Astronomía de Fuenlabrada"
          ]
        }
      ]
    },
    {
      "id": "v13n1",
      "volume": 13,
      "number": 1,
      "year": 2025,
      "published": "2025-07-03",
      "title": "North American GeoGebra Journal",
      "subtitle": "Fostering mathematical understanding through visualization and exploration.",
      "legacyId": 18,
      "articles": [
        {
          "id": "265",
          "title": "Using a Procedural Color Palette in GeoGebra",
          "authors": [
            "Juan Carlos Ponce Campuzano"
          ],
          "pages": "1–11",
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/265/174",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/265",
          "localPdf": "pdfs/v13n1-campuzano.pdf",
          "articlePage": "articles/v13n1-campuzano.html",
          "abstract": "Creating smooth and aesthetically pleasing color transitions in GeoGebra can be challenging, especially when manually adjusting RGB or HSV values. This paper presents a simple yet powerful procedural color palette function based on cosine transformations, allowing for effortless dynamic color generation. By leveraging this function, users can achieve continuous color variation without the complexity of switching between color spaces. We explore the mathematical foundation of this method and its practical benefits in mathematical visualization.",
          "keywords": [
            "procedural color",
            "GeoGebra scripting",
            "color function",
            "color palettes",
            "trigonometric functions"
          ],
          "dateIssued": "2025-07-03",
          "license": "http://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "School of Environment and Science, Griffith University, Australia"
          ]
        },
        {
          "id": "216",
          "title": "Derivatives and Approximations: The Case of f(x)=exp(x) and the Affine Approximation l(x)=x+1",
          "authors": [
            "Humberto José Bortolossi",
            "Luciana Prado Mouta Pena"
          ],
          "pages": "12–17",
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/216/175",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/216",
          "localPdf": "pdfs/v13n1-bortolossi.pdf",
          "articlePage": "articles/v13n1-bortolossi.html",
          "abstract": "This text explores, from a numerical perspective, the use of the affine function l(x) = x+1 to approximate the function f(x) = exp(x), including values of x not so close to p = 0. The exposition is visually and graphically implemented in GeoGebra, allowing for an interactive understanding of the approximation.",
          "keywords": [],
          "dateIssued": "2025-07-03",
          "license": "http://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "Universidade Federal Fluminense",
            "Universidade Federal Fluminense"
          ]
        },
        {
          "id": "229",
          "title": "A Visual Approach to Group Homomorphisms Using GeoGebra",
          "authors": [
            "Renata Teófilo de Sousa",
            "Francisco Régis Vieira Alves",
            "Ana Paula Florêncio Aires"
          ],
          "pages": "18–26",
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/229/176",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/229",
          "localPdf": "pdfs/v13n1-sousa.pdf",
          "articlePage": "articles/v13n1-sousa.html",
          "abstract": "This article, excerpted from an ongoing doctoral research project, presents a visual approach to the study of group homomorphisms using GeoGebra as a tool for construction and exploration. Focusing on the classical homomorphism from the symmetric group S3 to the cyclic group Z2, the study analyzes two distinct visual representations---one in 2D and the other in 3D. These constructions highlight fundamental algebraic properties such as kernel, image, and cosets, while also illustrating the preservation of operations and offering an intuitive application of the First Isomorphism Theorem.",
          "keywords": [
            "Group Homomorphisms",
            "GeoGebra",
            "Mathematics Visualization"
          ],
          "dateIssued": "2025-07-03",
          "license": "http://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "Ceará State Department of Education",
            "Federal Institute of Education, Science, and Technology of Ceará",
            "University of Trás-os-Montes and Alto Douro – UTAD"
          ]
        },
        {
          "id": "220",
          "title": "Geometry of Equilateral Triangle Symmetries: A Mathematical Perspective for Teacher Training",
          "authors": [
            "Paulo Vitor da Silva Santiago",
            "Francisco Régis Vieira Alves",
            "Maria José Costa dos Santos"
          ],
          "pages": "27–34",
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/220/177",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/220",
          "localPdf": "pdfs/v13n1-santiago.pdf",
          "articlePage": "articles/v13n1-santiago.html",
          "abstract": "This article presents a didactic proposal for teaching the symmetries of the equilateral triangle, grounded in Group Theory and the methodology of the Fedathi Sequence. The focus is on exploring the algebraic properties of rotations and reflections mediated by the GeoGebra software, aiming at both the continuing education of mathematics teachers and the initial training of undergraduate students. The proposal seeks to foster visualization, conceptual understanding, and the articulation between Geometry and Algebra. The approach is also based on the Theory of Objectification, emphasizing the active role of the teacher in the construction of knowledge. It is expected that the described experience will contribute to strengthening abstract reasoning through visual and interactive representations.",
          "keywords": [
            "Symmetry groups",
            "GeoGebra",
            "Visualization",
            "Teacher Education"
          ],
          "dateIssued": "2025-07-03",
          "license": "http://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "Federal University of Ceara",
            "Federal Institute of Education, Science and Technology of Ceará",
            "Federal University of Ceará"
          ]
        },
        {
          "id": "271",
          "title": "On the Brocard Circle",
          "authors": [
            "Manuel M. Aguilera",
            "Joaquin G. Camana"
          ],
          "pages": "35–44",
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/271/178",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/271",
          "localPdf": "pdfs/v13n1-aguilera.pdf",
          "articlePage": "articles/v13n1-aguilera.html",
          "abstract": "The Brocard circle (or seven-point circle) is a circle derived from a given triangle. There have been several discoveries regarding the Brocard circle. In this study, a compilation of existing properties of the Brocard Circle has been presented, along with properties not currently found. These properties were discovered using GeoGebra.",
          "keywords": [
            "Brocard circle",
            "Triangle geometry",
            "GeoGebra"
          ],
          "dateIssued": "2025-07-03",
          "license": "http://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "University of Puerto Rico",
            "Universidad Nacional Mayor de San Marcos"
          ]
        }
      ]
    },
    {
      "id": "v12n1",
      "volume": 12,
      "number": 1,
      "year": 2024,
      "published": "2024-07-17",
      "title": "North American GeoGebra Journal",
      "subtitle": "Fostering mathematical understanding through visualization and exploration.",
      "legacyId": 16,
      "articles": [
        {
          "id": "208",
          "title": "Expanding the Semiotic Scope of GeoGebra by Teaching It to Speak",
          "authors": [
            "Humberto José Bortolossi",
            "Dirce Uesu Pesco",
            "Wanderley Moura Rezende"
          ],
          "pages": "1–8",
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/208/169",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/208",
          "localPdf": "pdfs/v12n1-bortolossi.pdf",
          "articlePage": "articles/v12n1-bortolossi.html",
          "abstract": "This paper discusses the integration of JavaScript and Google's Text-to-Speech (TTS) technology in GeoGebra, adding voice synthesis to enhance the software's educational use. This allows for verbal communication of concepts, increasing interactivity, accessibility, and semiotic range. Such innovation promotes inclusive education, especially for individuals with disabilities, by making learning materials more accessible and engaging. We highlight this advancement with practical examples, underscoring its significant impact on making education more flexible and inclusive through enhanced GeoGebra functionalities.",
          "keywords": [],
          "dateIssued": "2024-07-17",
          "license": "http://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "Universidade Federal Fluminense",
            "Universidade Federal Fluminense",
            "Universidade Federal Fluminense"
          ]
        },
        {
          "id": "210",
          "title": "Modeling the Gyroid in GeoGebra",
          "authors": [
            "Lingguo Bu"
          ],
          "pages": "9–24",
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/210/170",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/210",
          "localPdf": "pdfs/v12n1-bu.pdf",
          "articlePage": "articles/v12n1-bu.html",
          "abstract": "The gyroid is a triply periodic minimal surface (TPMS) with intriguing geometric and aesthetic appeal. However, it is a challenging structure to model in GeoGebra. Starting with the $G*$ implicit equation, we first derive a parametric equation to model the gyroid unit surface patch in light of its intrinsic symmetries. Next, we demonstrate how JavaScript codes and GeoGebra Sequences can be employed to create 3D scatterplots of the gyroid unit cell. Through this process, we showcase the interplay between GeoGebra's capabilities, its limitations, and the computational complexity involved in gyroid modeling.",
          "keywords": [],
          "dateIssued": "2024-07-17",
          "license": "http://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "Southern Illinois University - Carbondale"
          ]
        },
        {
          "id": "212",
          "title": "Rate of Change: Degrees vs. Radians",
          "authors": [
            "Craig Cullen",
            "Lawrence Ssebaggala",
            "Óscar Chávez"
          ],
          "pages": "25–31",
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/212/171",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/212",
          "localPdf": "pdfs/v12n1-cullen.pdf",
          "articlePage": "articles/v12n1-cullen.html",
          "abstract": "In this article, we will discuss using GeoGebra to present and connect multiple representations. The purpose of the activities shared is to help students reflect on the consequences of different units when graphing trigonometric functions. Specifically, the activity should help students compare the consequences, with respect to the rate of change, of using radians or degrees when graphing trigonometric functions.",
          "keywords": [
            "Degrees",
            "radians",
            "multiple representations",
            "trigonometry"
          ],
          "dateIssued": "2024-07-17",
          "license": "http://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "Illinois State University",
            "Dalton State College",
            "Illinois State University"
          ]
        },
        {
          "id": "213",
          "title": "A Dynamic Model to Engage Students in the Triangle's Inherent Similarity",
          "authors": [
            "Richard Kaufman",
            "William Jackson"
          ],
          "pages": "32–41",
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/213/172",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/213",
          "localPdf": "pdfs/v12n1-kaufman.pdf",
          "articlePage": "articles/v12n1-kaufman.html",
          "abstract": "This paper presents a dynamic model created with GeoGebra to explore and demonstrate relationships inherent in triangles, particularly those involving side partitions formed by the triangle's altitudes. These relationships, while not commonly featured in high school geometry curricula, offer a unique opportunity for students to investigate mathematical theorems dynamically. The paper examines the relationships a1b1c1=a2b2c2 and a12+b12+c12=a22+b22+c22, providing an interactive GeoGebra model, formal proofs, and suggested materials for classroom use.",
          "keywords": [
            "triangle similarity",
            "dynamic geometry software",
            "classroom implementation"
          ],
          "dateIssued": "2024-07-17",
          "license": "http://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "Founder of Office Expander",
            "North Shore Community College"
          ]
        }
      ]
    },
    {
      "id": "v11n1",
      "volume": 11,
      "number": 1,
      "year": 2023,
      "published": "2023-01-11",
      "title": "North American GeoGebra Journal",
      "subtitle": "Fostering mathematical understanding through visualization and exploration.",
      "legacyId": 15,
      "articles": [
        {
          "id": "197",
          "title": "Tracing Closed Curves with Epicycles: A Fun Application of the Discrete Fourier Transform",
          "authors": [
            "Juan Carlos Ponce Campuzano"
          ],
          "pages": "1–14",
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/197/159",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/197",
          "localPdf": "pdfs/v11n1-campuzano.pdf",
          "articlePage": "articles/v11n1-campuzano.html",
          "abstract": "The Discrete Fourier Transform has many applications in our modern digital world. In particular, it allows us to approximate periodic functions by means of trigonometric polynomials which provides the required information to define a system of epicycles that can be animated to trace out closed curves. In this paper, I present a method in GeoGebra to create artistic animations consisting of systems of epicycles tracing out closed curves. The geometric construction presented here can also be used as an introductory learning activity to study the Discrete Fourier Transform from a geometric point of view.",
          "keywords": [
            "trigonometric interpolation",
            "Discrete Fourier Transform",
            "scripting",
            "epicycles"
          ],
          "dateIssued": "2023-01-11",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "The University of Queensland"
          ]
        },
        {
          "id": "198",
          "title": "Origami Paper Cup: From Paper Folding to Data Analysis and Algebraic Explorations",
          "authors": [
            "Lingguo Bu",
            "Harvey Henson"
          ],
          "pages": "15–25",
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/198/162",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/198",
          "localPdf": "pdfs/v11n1-bu.pdf",
          "articlePage": "articles/v11n1-bu.html",
          "abstract": "We present the case of an origami paper cup and its extensions to data collection, analysis, and dimensional reasoning in K--12 teacher education, featuring the integration of GeoGebra.&nbsp; The paper cup case has been implemented numerous times in our K--12 mathematics methods classes, targeting a variety of issues of mathematics teaching and learning---multiple representations, mathematical discourse, intuitive perceptions, rational reasoning, data analysis, as well as hands-on engagement and ownership.&nbsp; To implement the instructional tasks, we need an adequate supply of commercial or self-made origami paper, copy paper of various sizes, and a few pounds of pinto beans or similar beans that are safe for classroom use as well as access to GeoGebra.",
          "keywords": [
            "Origami",
            "Data Analysis",
            "Algebraic Reasoning"
          ],
          "dateIssued": "2023-01-11",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "Southern Illinois University -- Carbondale",
            "Southern Illinois University -- Carbondale"
          ]
        },
        {
          "id": "200",
          "title": "Building an Analog Clock with Complex Numbers",
          "authors": [
            "David Glassmeyer",
            "Binita Patel"
          ],
          "pages": "26–34",
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/200/165",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/200",
          "localPdf": "pdfs/v11n1-glassmeyer.pdf",
          "articlePage": "articles/v11n1-glassmeyer.html",
          "abstract": "In this article, we describe a lesson that enabled 10th and 11th grade students to create an analog clock using GeoGebra. This self-directed, exploratory lesson is built on students’ prior knowledge of complex numbers and vector transformation and relies on the technological features of GeoGebra.",
          "keywords": [
            "Complex numbers",
            "modelling",
            "programming",
            "student exploration",
            "vectors"
          ],
          "dateIssued": "2023-01-11",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "Kennesaw State University",
            "Innovation Academy, Fulton County Schools"
          ]
        },
        {
          "id": "199",
          "title": "Filling Vessels: An Exciting Way to Investigate Functional Dependencies",
          "authors": [
            "Laura Sergi",
            "Stefan Götz"
          ],
          "pages": "35–47",
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/199/166",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/199",
          "localPdf": "pdfs/v11n1-sergi.pdf",
          "articlePage": "articles/v11n1-sergi.html",
          "abstract": "When discussing and analyzing functional dependencies, schoolbooks, and teachers often use different filling curves—asking students to match various vessels with their corresponding graphs. After presenting the three basic ideas of functional thinking, the authors demonstrate ways of determining functional equations from analyses of filling data and discuss the use of dynamic applets with students.",
          "keywords": [
            "Filling curves",
            "modeling",
            "mathematical inquiry",
            "functional thinking"
          ],
          "dateIssued": "2023-01-11",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "Studyly LLC, Vienna Austria",
            "Faculty of Mathematics and Centre for Teacher Education, University of Vienna"
          ]
        },
        {
          "id": "205",
          "title": "Challenging Misconceptions about the Coefficient of Determination (R²) with a Dynamic GeoGebra Applet",
          "authors": [
            "Michael Singer Meagher",
            "Michael Todd Edwards",
            "Asli Özgün-Koca"
          ],
          "pages": "48–61",
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/205/167",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/205",
          "localPdf": "pdfs/v11n1-meagher.pdf",
          "articlePage": "articles/v11n1-meagher.html",
          "abstract": "The authors present an applet, R2 Explorer, that can be used to explore how the value of R2 is related to data points and to challenge the misconception that R2 measures “percentage of fit” of a regression line.",
          "keywords": [
            "linear regression",
            "coefficient of determination",
            "multiple linked representations"
          ],
          "dateIssued": "2023-01-11",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "Brooklyn College - CUNY",
            "Miami University",
            "Wayne State University"
          ]
        },
        {
          "id": "206",
          "title": "Projective Geometry: A Historical Overview and Perspectives for Education",
          "authors": [
            "Lucas Cunha Bastos",
            "Francisco Régis Vieira Alves",
            "Paulo César Cavalcante de Oliveira",
            "Renata Teófilo de Sousa"
          ],
          "pages": "62–70",
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/206/168",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/206",
          "localPdf": "pdfs/v11n1-bastos.pdf",
          "articlePage": "articles/v11n1-bastos.html",
          "abstract": "This article aims to bring a discussion focused on the historical evolution of projective geometry and perspectives that aim at its application in the educational context, especially with the use of GeoGebra for the presentation of its concepts. The historical bias of this geometry field was analyzed in the light of the possibilities of its approach in basic education. The research methodology of this work is of a qualitative nature, bibliographic in nature, where we relate materials that bring the evolution of projective geometry from its genesis to the present day. In the meantime, we bring a perspective of transition between the Euclidean-projective geometries, as a way to elucidate some concepts of projective geometry and facilitate its understanding from the visualization with the contribution of GeoGebra.",
          "keywords": [
            "projective geometry",
            "history of mathematics",
            "visualization"
          ],
          "dateIssued": "2023-01-11",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "IFCE",
            "IFCE",
            "URCA",
            "IFCE"
          ]
        }
      ]
    },
    {
      "id": "v10n1",
      "volume": 10,
      "number": 1,
      "year": 2022,
      "published": "2022-02-03",
      "title": "North American GeoGebra Journal",
      "subtitle": "Fostering mathematical understanding through visualization and exploration.",
      "legacyId": 14,
      "articles": [
        {
          "id": "188",
          "title": "Trigonometric Interpolation Using the Discrete Fourier Transform",
          "authors": [
            "Juan Carlos Ponce Campuzano"
          ],
          "pages": "1–13",
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/188/154",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/188",
          "localPdf": "pdfs/v10n1-campuzano.pdf",
          "articlePage": "articles/v10n1-campuzano.html",
          "abstract": "The Fourier transform (and all its versions, discrete/continuous/finite/infinite), covers deep and abstract mathematical concepts, and can easily overwhelm with detail. In this paper I provide some intuitive ideas of how the discrete Fourier transform (and its version with low frequencies) works and how we can use it to approximate real periodic functions and parametric closed curves by means of trigonometric interpolation.",
          "keywords": [
            "trigonometric interpolation",
            "discrete Fourier transform",
            "GeoGebra scripting"
          ],
          "dateIssued": "2022-02-03",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "The University of Queensland"
          ]
        },
        {
          "id": "192",
          "title": "The Arithmetic Average of Altitudes From Vertices of a Parallelogram to a Straight Line: A Sketch and Proof",
          "authors": [
            "Moshe Stupel",
            "David Fraivert"
          ],
          "pages": "14–19",
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/192/155",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/192",
          "localPdf": "pdfs/v10n1-stupel.pdf",
          "articlePage": "articles/v10n1-stupel.html",
          "abstract": "The author illustrates a method for motivating mathematical generalization with students using GeoGebra. Building on student interest in amusement parks, the author connects an initial question about Ferris wheel riders to general quadrilaterals in the plane. In a culminating activity, students construct a rigorous algebraic proof confirming their initial conjectures.",
          "keywords": [
            "Argumentation",
            "Proof",
            "generalization",
            "contexts"
          ],
          "dateIssued": "2022-02-03",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "Shaanan-Academic College of Education and Gordon-Academic College of Education",
            "Department of Mathematics, Shaanan College---Haifa, Israel"
          ]
        },
        {
          "id": "184",
          "title": "Extending, Formulating, and Refining Conjectures with GeoGebra: The Pentagon and Its Medial Pentagon",
          "authors": [
            "José Contreras"
          ],
          "pages": "20–28",
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/184/156",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/184",
          "localPdf": "pdfs/v10n1-contreras.pdf",
          "articlePage": "articles/v10n1-contreras.html",
          "abstract": "In this paper, I describe a classroom experience on how I guided a group of preservice secondary mathematics teachers to extend, formulate, and refine a conjecture about the ratio of the area of a pentagon and the area of its medial pentagon: The ratio of the area of a medial pentagon to the area of the outer pentagon lies between 1/2 and 3/4. The use of GeoGebra facilitated the discovery and visualization of the conjecture.",
          "keywords": [],
          "dateIssued": "2022-02-03",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "Ball State University"
          ]
        },
        {
          "id": "189",
          "title": "A Celestial Sphere Model in GeoGebra",
          "authors": [
            "Mónica López García",
            "Santiago Cerisola"
          ],
          "pages": "29–44",
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/189/157",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/189",
          "localPdf": "pdfs/v10n1-garcia.pdf",
          "articlePage": "articles/v10n1-garcia.html",
          "abstract": "The article presents a celestial sphere model made in GeoGebra. The authors describe the math- ematical tools necessary to model celestial objects using spherical coordinates and the construction of stars, circles, and meridians. They incorporate a brief description of the construction of constellations using GeoGebra through JavaScript. In addition, the article describes the modeling of the ecliptic and the positions of the Sun and the Earth to understand their apparent movements and the concept of the Zodiac.",
          "keywords": [
            "GeoGebra",
            "science",
            "celestial sphere",
            "rotation motion",
            "constellations"
          ],
          "dateIssued": "2022-02-03",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "Elisa Soriano Fischer School",
            "Consejería de Educación de la Comunidad de Madrid"
          ]
        },
        {
          "id": "193",
          "title": "Fair Share of Regular Polygon Pizzas",
          "authors": [
            "Humberto José Bortolossi"
          ],
          "pages": "45–46",
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/193/158",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/193",
          "localPdf": "pdfs/v10n1-bortolossi.pdf",
          "articlePage": "articles/v10n1-bortolossi.html",
          "abstract": "In his article we show how to fair share a regular polygon pizza with p sides between n people The first cut point F on the boundary is given and, as in round pizzas, the cuts are done from the center C to the boundary of the regular polygon; The Proof given is without Words using a Geogebra animation",
          "keywords": [
            "proof without words",
            "fair share",
            "regular polygons",
            "GeoGebra"
          ],
          "dateIssued": "2022-02-03",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "Fluminense Federal University"
          ]
        }
      ]
    },
    {
      "id": "v9n1",
      "volume": 9,
      "number": 1,
      "year": 2021,
      "published": "2021-06-16",
      "title": "North American GeoGebra Journal",
      "subtitle": "Fostering mathematical understanding through visualization and exploration.",
      "legacyId": 13,
      "articles": [
        {
          "id": "177",
          "title": "Examining Possible LU Decompositions",
          "authors": [
            "Ly Jacky Nhiayi",
            "Tuyetdong Phan-Yamada"
          ],
          "pages": "1–7",
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/177/144",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/177",
          "localPdf": "pdfs/v9n1-nhiayi.pdf",
          "articlePage": "articles/v9n1-nhiayi.html",
          "abstract": "LU decomposition is a fundamental in linear algebra. Numerous tools exists that provide this important factorization. The authors present the conditions for a matrix to have none, one, or infinitely many LU factorizations. In the case where no factorization exists, the authors illustrate how to approximate an LU decomposition by considering LU factorization of nearby matrices.",
          "keywords": [
            "GeoGebra, linear algebra, LU decomposition"
          ],
          "dateIssued": "2021-06-16",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "Cal State Los Angeles",
            "CSU Los Angeles"
          ]
        },
        {
          "id": "180",
          "title": "Layering: Showing and Hiding Objects",
          "authors": [
            "Todd Edwards",
            "James Quinlan"
          ],
          "pages": "8–10",
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/180/145",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/180",
          "localPdf": "pdfs/v9n1-edwards.pdf",
          "articlePage": "articles/v9n1-edwards.html",
          "abstract": "All GeoGebra objects are assigned to a layer, which can be made visible or invisible. In this article, the authors highlight this feature by example and suggest four tasks in which layers can be implemented.",
          "keywords": [],
          "dateIssued": "2021-06-16",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "Miami University",
            "University of New England"
          ]
        },
        {
          "id": "183",
          "title": "Volume Invariant Cube Twisting: GeoGebra Modeling and Algebraic Explorations",
          "authors": [
            "Lingguo Bu"
          ],
          "pages": "11–21",
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/183/146",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/183",
          "localPdf": "pdfs/v9n1-bu.pdf",
          "articlePage": "articles/v9n1-bu.html",
          "abstract": "If we take a cube and twist it 90 degrees, mentally or physically, without changing its volume, we obtain a twisted solid that is not only visually appealing but also algebraically entertaining. Starting with GeoGebra simulations, we discuss the algebraic nature of the twisted cube faces, the spiral curves, and further extend GeoGebra-based explorations beyond the cube. Keywords: Cube, Twisting, Algebraic Analysis, Vector Functions, Ruled Surfaces",
          "keywords": [],
          "dateIssued": "2021-06-16",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "Southern Illinois University - Carbondale"
          ]
        },
        {
          "id": "179",
          "title": "On an Inequality Between Side Lengths of Triangles",
          "authors": [
            "Ruti Segal",
            "Moshe Stupel"
          ],
          "pages": "22–24",
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/179/149",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/179",
          "localPdf": "pdfs/v9n1-segal.pdf",
          "articlePage": "articles/v9n1-segal.html",
          "abstract": "The authors, using a proof without words style, explore a lesser known variation of the triangle inequality involving the difference between the sum of the lengths of any two sides and the length of the third side. The authors provide a web applet for further exploration.",
          "keywords": [
            "geogebra",
            "triangle relationships",
            "conjecturing"
          ],
          "dateIssued": "2021-06-16",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "Oranim – Academic College of Education, Tivon, Israel, and Shaanan, Academic College of Education, Haifa, Israel.",
            "Shaanan Academic Education College"
          ]
        },
        {
          "id": "181",
          "title": "On Coloring Different Objects of the Same Class",
          "authors": [
            "Juan Carlos Ponce Campuzano"
          ],
          "pages": "31–35",
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/181/152",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/181",
          "localPdf": "pdfs/v9n1-campuzano.pdf",
          "articlePage": "articles/v9n1-campuzano.html",
          "abstract": "Every object created in GeoGebra has a color property that can be easily changed by the user. This is useful for identifying different objects of the same class. However, if we create lists of objects of the same class (e. g. a list of circles) and try to change the color of this list, then we notice that all the objects change color. How can we create a set of objects of the same class, such that each element has a different color? In this article, I will show an efficient method to color different objects of the same class.",
          "keywords": [],
          "dateIssued": "2021-06-16",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "The University of Queensland"
          ]
        },
        {
          "id": "178",
          "title": "From Semi-Proof to Proof: Motivating Deductive Thinking Through Inductive Exploration",
          "authors": [
            "Moshe Stupel",
            "David Ben-Chaim"
          ],
          "pages": "36–40",
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/178/153",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/178",
          "localPdf": "pdfs/v9n1-stupel.pdf",
          "articlePage": "articles/v9n1-stupel.html",
          "abstract": "In this short article, the authors introduce and prove a geometrical property involving externally tangent circles. Using an applet to model the problem situation, the authors illustrate how GeoGebra applets can serve as an accelerator of understanding, helping aid in the progression from inductive to deductive proof.",
          "keywords": [
            "circles",
            "argumentation",
            "proof",
            "GeoGebra"
          ],
          "dateIssued": "2021-06-16",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "Shaanan-Academic College of Education and Gordon-Academic College of Education",
            "Technion-Israel Institute of Technology"
          ]
        }
      ]
    },
    {
      "id": "v8n1",
      "volume": 8,
      "number": 1,
      "year": 2019,
      "published": "2019-04-18",
      "title": "North American GeoGebra Journal",
      "subtitle": "Fostering mathematical understanding through creative investigation.",
      "legacyId": 12,
      "articles": [
        {
          "id": "152",
          "title": "Creating a Digital Tape Diagram",
          "authors": [
            "S. Asli Ozgun-Koca",
            "Michael Todd Edwards",
            "Michael Meagher"
          ],
          "pages": "1–14",
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/152/135",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/152",
          "localPdf": "pdfs/v8n1-ozgunkoca.pdf",
          "articlePage": "articles/v8n1-ozgunkoca.html",
          "abstract": "The authors describe how tape diagrams created in GeoGebra can be used to foster critical thinking about multiplicative relationships in proportional situations. They describe multiple iterations of applet development and the rationale for various modifications.",
          "keywords": [],
          "dateIssued": "2019-04-18",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "",
            "",
            ""
          ]
        },
        {
          "id": "157",
          "title": "Exploring and Solving Feynman's Triangle Through Multiple Approaches",
          "authors": [
            "Drew Michael Lazar",
            "Kathryn Shafer"
          ],
          "pages": "15–34",
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/157/136",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/157",
          "localPdf": "pdfs/v8n1-lazar.pdf",
          "articlePage": "articles/v8n1-lazar.html",
          "abstract": "It has long been recognized that using multiple approaches to solve problems is essential for students to obtain understanding of mathematical concepts. In view of this, we consider an interesting plane geometry problem with a straightforward formulation, known as the one-seventh area triangle or Feyman's triangle problem. We present solutions using GeoGebra constructions and manipulation, coordinate geometry, Euclidean geometry and linear algebra. This allows students to apply many of the tools they acquired at the secondary level and to make important and crucial connections between them. The linear algebra section can be used as an introduction to the subject. This section can also reinforce the close relationship between linear algebra and geometry which might not receive enough emphasis at the undergraduate level. GeoGeobra diagrams, constructions and computer algebra are used throughout the paper. All explanations are done through questions and answers which allows instructors to easily format the sections into inquiry-based lessons.",
          "keywords": [],
          "dateIssued": "2019-04-18",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "Ball State University",
            "Ball State University"
          ]
        },
        {
          "id": "170",
          "title": "Some Activities in the Style of \"Proof without Words\" Related to Altitudes in a Triangle",
          "authors": [
            "Victor Oxman",
            "Moshe Stupel"
          ],
          "pages": "35–38",
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/170/137",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/170",
          "localPdf": "pdfs/v8n1-oxman.pdf",
          "articlePage": "articles/v8n1-oxman.html",
          "abstract": "In this article, the authors present some activities in the style of \"proof without words” related to altitudes in a triangle. The activity is useful for teachers and students of geometry. Such activities may develop different ways of thinking for students, which may yield unexpected, short, and beautiful solutions that indicate the great wealth of mathematics.",
          "keywords": [],
          "dateIssued": "2019-04-18",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "Western Galilee College",
            "Shaanan College, Haifa, Israel"
          ]
        },
        {
          "id": "171",
          "title": "Modeling an Optimal Trajectory for a Certain Minigolf Station",
          "authors": [
            "Christoph Ableitinger"
          ],
          "pages": "39–45",
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/171/138",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/171",
          "localPdf": "pdfs/v8n1-ableitinger.pdf",
          "articlePage": "articles/v8n1-ableitinger.html",
          "abstract": "Usually a minigolf course comprises a station at which the ball is supposed to enter a net, which is installed about one meter above the ground. The minigolf player uses a ramp for giving the ball the right direction. One may ask, at which velocity the ball has to be driven off in order to enter the net. In this article, we present several ways to use GeoGebra for solving this problem. We will see that the features of GeoGebra can help to visualize the problem, to implement a mathematical model, to work in this model and to validate the results by comparing to empirical data.",
          "keywords": [
            "Modeling",
            "Geometry",
            "tranformations"
          ],
          "dateIssued": "2019-04-18",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "University of Vienna"
          ]
        },
        {
          "id": "175",
          "title": "Modeling the Paths of the Sun Using GeoGebra",
          "authors": [
            "Santiago Cerisola",
            "Azahara López Romero"
          ],
          "pages": "46–57",
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/175/139",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/175",
          "localPdf": "pdfs/v8n1-cerisola.pdf",
          "articlePage": "articles/v8n1-cerisola.html",
          "abstract": "In this document we describe the necessary constructions for modeling the apparent position of the Sun in the sky in GeoGebra. We discuss how to build a planet that moves and rotates about its axis and a way to position the observer at a given latitude from which we will compute the horizontal coordinates of the Sun. Later these computed coordinates are represented in a celestial sphere where the horizon plane for the observer is fixed, giving the apparent track of the Sun at different days of the year.",
          "keywords": [],
          "dateIssued": "2019-04-18",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "IES Pradolongo",
            "Consejería de Educación de la Comunidad de Madrid"
          ]
        },
        {
          "id": "172",
          "title": "Locus of Critical Points for Some Polynomial",
          "authors": [
            "Haotian Xie",
            "Zheng Yang"
          ],
          "pages": "58–65",
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/172/140",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/172",
          "localPdf": "pdfs/v8n1-xie.pdf",
          "articlePage": "articles/v8n1-xie.html",
          "abstract": "Given a polynomial with complex coefficients, the celebrated Gauss-Lucas's theorem and Marden's theorem offer us insights into the geometry of the locus of its critical points. In the following paper, the authors explore the geometry under certain restrictions of the roots of the polynomials. In particular, the authors identify some regions where all critical points do not occur.",
          "keywords": [],
          "dateIssued": "2019-04-18",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "Sichuan University",
            "Sichuan University"
          ]
        },
        {
          "id": "176",
          "title": "Proof Without Words: Fermat-Torricelli Theorem",
          "authors": [
            "Jay M Jahangiri",
            "Moshe Stupel"
          ],
          "pages": "66–68",
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/176/141",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/176",
          "localPdf": "pdfs/v8n1-jahangiri.pdf",
          "articlePage": "articles/v8n1-jahangiri.html",
          "abstract": "The authors explore the Fermat-Torricelli Theorem in a proof without words using GeoGebra. They provide two alternative approaches to the theorem and discuss connections to other geometry problems accessible to secondary level teachers and their students.",
          "keywords": [],
          "dateIssued": "2019-04-18",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "Kent State University - Kent, Geauga and Twinsburg",
            "Gordon Academic College and Shaanan Academic College"
          ]
        },
        {
          "id": "161",
          "title": "Achievement of Dual Language Learners in the Study of Nets",
          "authors": [
            "Ziham Zawawi Mazlan",
            "Chew Cheng Meng",
            "Muhammad Faizul bin Abdul Hamid"
          ],
          "pages": "69–93",
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/161/142",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/161",
          "localPdf": "pdfs/v8n1-mazlan.pdf",
          "articlePage": "articles/v8n1-mazlan.html",
          "abstract": "This study generally aims to study the effects of teaching using the van Hiele phase-based instruction using GeoGebra on Year 2 (8 years old) pupil’s achievement in learning shape and space whom learning mathematics using English language as this is their second language. Samples has been taken from one Dual Language Programme (DLP) school in Penang. 14 boys and 16 girls from one Year 2 DLP school have been involved in this study.&nbsp; The research design is one group pretest - posttest research design using Shape and Space Achievement test (SSAT) as instrument. Interview protocol also has been carried out to sample group that used GeoGebra. Paired samples t-test and the Wilcoxon Signed Rank test were used to analyse the data. The results indicated that: (1) there is a significant effect of teaching using the van Hiele’s phase-based instruction using GeoGebra on Year 2 pupils’ achievement in learning shape and space; (2) there is a significant difference in retention of achievement in the topic of Shape and Space on Year 2 pupils who learned the topic through the van Hiele’s phase-based instruction using GeoGebra. Implications of the study and suggestions are also discussed in this study. Keywords: GeoGebra, the van Hiele Theory, phase-based instruction, Dual Language Programme (DLP)",
          "keywords": [
            "van Hiele, phase-based instruction, Dual Language Programme (DLP), geometry"
          ],
          "dateIssued": "2019-04-18",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "Sekolah Kebangsaan Seberang Jaya, Penang",
            "Sekolah Kebangsaan Seberang Jaya, Penang",
            "Sekolah Kebangsaan Seberang Jaya, Penang"
          ]
        }
      ]
    },
    {
      "id": "v7n1",
      "volume": 7,
      "number": 1,
      "year": 2018,
      "published": "2018-03-15",
      "title": "North American GeoGebra Journal",
      "subtitle": null,
      "legacyId": 10,
      "articles": [
        {
          "id": "126",
          "title": "Transformations and Complex Numbers",
          "authors": [
            "Roberto C Soto",
            "Armando M. Martinez-Cruz"
          ],
          "pages": null,
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/126/119",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/126",
          "localPdf": "pdfs/v7n1-soto.pdf",
          "articlePage": "articles/v7n1-soto.html",
          "abstract": "In this paper, we use complex-number operations to carry out transformations of geometric shapes and establish connections between geometry and algebra in the high-school curriculum.&nbsp; We use dynamic geometry software to visualize the geometric effect of these algebraic operations and connect complex-number operations to translations, rotations, and dilations.&nbsp;",
          "keywords": [
            "GeoGebra",
            "Common Core",
            "Complex Numbers",
            "Algebra",
            "Geometry",
            "Transformations"
          ],
          "dateIssued": "2018-03-15",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "California State University, Fullerton",
            "California State University, Fullerton"
          ]
        },
        {
          "id": "125",
          "title": "Teaching Statistics with GeoGebra",
          "authors": [
            "Tuyetdong Phan-Yamada",
            "Sui Wing Man"
          ],
          "pages": null,
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/125/118",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/125",
          "localPdf": "pdfs/v7n1-phanyamada.pdf",
          "articlePage": "articles/v7n1-phanyamada.html",
          "abstract": "In this article, the author discusses a statistics project that examines the ability of participants to accurately estimate the location of midpoints of various line segments from a GeoGebra sketch. Students explore differences in estimating accuracy for various types of lines among different subgroups of subjects.",
          "keywords": [
            "GeoGebra",
            "Statistics",
            "locating midpoint"
          ],
          "dateIssued": "2018-03-15",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "California State University, Los Angeles",
            "California State University, Los Angeles"
          ]
        },
        {
          "id": "145",
          "title": "GeoGebra Simulations of the Monty Hall Game Show",
          "authors": [
            "Gunhan Caglayan"
          ],
          "pages": null,
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/145/130",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/145",
          "localPdf": "pdfs/v7n1-caglayan.pdf",
          "articlePage": "articles/v7n1-caglayan.html",
          "abstract": "The purpose of this exploratory note is to offer teaching/learning ideas in the exploration of the famous Monty Hall Game Show, Let’s Make a Deal, in an introductory probability theory class using GeoGebra spreadsheets in a computer lab in groups of 2 to 3 people.",
          "keywords": [
            "GeoGebra",
            "Monty Hall Problem",
            "GeoGebra Spreadsheets",
            "Conditional Probability",
            "Bayes Law"
          ],
          "dateIssued": "2018-03-15",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "New Jersey City University"
          ]
        },
        {
          "id": "144",
          "title": "Graph Theory in GeoGebra",
          "authors": [
            "Trevor Kenneth Williams",
            "David E. Brown"
          ],
          "pages": null,
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/144/134",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/144",
          "localPdf": "pdfs/v7n1-williams.pdf",
          "articlePage": "articles/v7n1-williams.html",
          "abstract": "Graph theory is a visual field of mathematics. GeoGebra, although user-friendly, provides no automated way to make or analyze graphs. In the following article, the authors illustrate how JavaScript may be used to extend the capabilities of GeoGebra to build graph theory tools.",
          "keywords": [
            "Graph Theory",
            "Javascript"
          ],
          "dateIssued": "2018-03-15",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "Florida Atlantic University",
            "Utah State University"
          ]
        },
        {
          "id": "148",
          "title": "Using Action-Consequence-Reflection GeoGebra Activities To Make Math Stick",
          "authors": [
            "Karen D. Campe"
          ],
          "pages": null,
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/148/131",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/148",
          "localPdf": "pdfs/v7n1-campe.pdf",
          "articlePage": "articles/v7n1-campe.html",
          "abstract": "In this article, the author discusses the Action-Consequence-Reflection cycle for promoting conceptual understanding with technology in the mathematics classroom, along with some cognitive science research support. Several Geogebra activities are presented that capitalize on this process, covering common curricular topics in secondary math.&nbsp; Throughout, the author shares strategies for classroom implementation that encourage reflection and enhance student learning.",
          "keywords": [
            "GeoGebra",
            "technology",
            "algebra",
            "geometry",
            "precalculus",
            "conceptual understanding"
          ],
          "dateIssued": "2018-03-15",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "Independent Consultant (formerly Instructor, Education Studies Program, Yale University)"
          ]
        },
        {
          "id": "147",
          "title": "Engaging Students with Linear Functions and GeoGebra: An Action Research Study",
          "authors": [
            "Kristen L Soots",
            "Kathryn G Shafer"
          ],
          "pages": null,
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/147/133",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/147",
          "localPdf": "pdfs/v7n1-soots.pdf",
          "articlePage": "articles/v7n1-soots.html",
          "abstract": "Soots completed an action research study with pre-algebra students during a unit on linear functions. The goals of this study were to increase student-led technology engagement and utilize a graphing application that would allow students to make connections between multiple representations of linear functions. The use of GeoGebra combined with a student-led approach to instruction positively impacted the classroom environment, allowed students to make connections between representations of functions, and supported student discovery, especially within the topic of systems of equations.",
          "keywords": [
            "GeoGebra",
            "Action Research",
            "Systems of Equations",
            "Pre-algebra",
            "SAMR Model"
          ],
          "dateIssued": "2018-03-15",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "Ivy Tech Community College",
            "Ball State University"
          ]
        },
        {
          "id": "149",
          "title": "Capabilities and Contributions of the Dynamic Math Software, GeoGebra: A Review",
          "authors": [
            "Yismaw Abera Wassie",
            "Gurju Awgichew Zergaw"
          ],
          "pages": null,
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/149/132",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/149",
          "localPdf": "pdfs/v7n1-wassie.pdf",
          "articlePage": "articles/v7n1-wassie.html",
          "abstract": "In this review, the authors provide a survey of research of the dynamic mathematics software, GeoGebra, in the teaching and learning of school mathematics and related fields---including statistics, physics, chemistry and geography. The authors explore the role of GeoGebra as a tool to foster student achievement and teacher efficacy.",
          "keywords": [
            "Dynamic Mathematics",
            "GeoGebra",
            "Instructional Software",
            "Teaching resources",
            "Technology in Education"
          ],
          "dateIssued": "2018-03-15",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "Bahir Dar University",
            "Bahir Dar University"
          ]
        }
      ]
    },
    {
      "id": "v6n1",
      "volume": 6,
      "number": 1,
      "year": 2017,
      "published": "2017-02-03",
      "title": "North American GeoGebra Journal",
      "subtitle": "Fostering the pursuit of mathematical understanding through creative investigation.",
      "legacyId": 8,
      "articles": [
        {
          "id": "89",
          "title": "Hinged Tilings",
          "authors": [
            "Alfinio Flores"
          ],
          "pages": null,
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/89/99",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/89",
          "localPdf": "pdfs/v6n1-flores.pdf",
          "articlePage": "articles/v6n1-flores.html",
          "abstract": "We present interactive dynamical tilings formed by rigid regular polygons that are hinged to each other leaving polygonal empty spaces to allow for rotations. As one of the hinged tiles is rotated, the other tiles rotate too and the global shape of the tiling is changed. Examples include using tilings made of squares; hexagons and triangles; squares of two sizes; hexagons; octagons and squares; triangles; and three tilings where the polygons are joined by hinged rigid rods.",
          "keywords": [
            "GeoGebra",
            "hinged tilings",
            "regular tilings",
            "dynamical morphing"
          ],
          "dateIssued": "2017-02-03",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "University of Delaware"
          ]
        },
        {
          "id": "108",
          "title": "Exploration of the Sierpinski Triangle with GeoGebra",
          "authors": [
            "Jenna Odom",
            "Taylor Wood"
          ],
          "pages": null,
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/108/113",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/108",
          "localPdf": "pdfs/v6n1-odom.pdf",
          "articlePage": "articles/v6n1-odom.html",
          "abstract": "In this paper, the authors explore using fractals in the classroom to teach more complex ideas. In GeoGebra, the Sierpinski triangle is created using a combination of the midpoint and polygon tools. Once created, the triangle can be used to explore the concept of limits by looking at the decreasing area of the figure. Learners can then engage in open inquiry to find a pattern that describes the decreasing area. After the pattern is found, learners can use the sequence function to summarize their results. The variety of functions in GeoGebra allow fractals to be used in a meaningful way in a high school classroom or any setting in which people are willing to learn and inquire.",
          "keywords": [
            "inquiry",
            "inquiry-based",
            "Common Core"
          ],
          "dateIssued": "2017-02-03",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "Miami University Ohio",
            "Miami University Ohio"
          ]
        },
        {
          "id": "92",
          "title": "Function Fitting to Develop Class Projects: Alcohol Awareness Models in College Algebra",
          "authors": [
            "Thomas Edmond Cooper"
          ],
          "pages": null,
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/92/114",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/92",
          "localPdf": "pdfs/v6n1-cooper.pdf",
          "articlePage": "articles/v6n1-cooper.html",
          "abstract": "In this article, the author shares models that were created for class projects in a section of College Algebra taught as part of a first-year cohort program in which the participating students complete eight introductory college courses as a learning community. Using real-world data and GeoGebra function fitting commands, the author has developed models related to a community engagement project theme of drug and alcohol awareness. Quadratic, rational, exponential, and logistic models are presented along with data and a discussion of how GeoGebra was used to create the models.",
          "keywords": [
            "College Algebra",
            "Modeling",
            "Applications",
            "Quadratic",
            "Exponential",
            "Rational Functions",
            "Function Fitting"
          ],
          "dateIssued": "2017-02-03",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "University of North Georgia"
          ]
        },
        {
          "id": "124",
          "title": "Exploring Euclidean and Taxicab Geometry with GeoGebra",
          "authors": [
            "Erhan Selcuk Haciomeroglu",
            "Janet B Andreasen"
          ],
          "pages": null,
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/124/115",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/124",
          "localPdf": "pdfs/v6n1-haciomeroglu.pdf",
          "articlePage": "articles/v6n1-haciomeroglu.html",
          "abstract": "Technology has changed the nature of mathematics learning and instructional practices (Andreasen&nbsp;and Haciomeroglu, 2013; Edwards, 2015; Haciomeroglu, Bu, Schoen, and Hohenwarter,&nbsp;2011). Dynamic and interactive technology enriches students' learning opportunities and shifts&nbsp;the focus of instruction to understanding and student-centered learning by providing a means&nbsp;of modeling mathematical relationships (Bu and Henson, 2016; Haciomeroglu, Bu, Schoen, and&nbsp;Hohenwarter, 2011). The authors connect Euclidean and non-Euclidean geometries through an&nbsp;exploration of rich tasks of Taxicab geometry, sharing methods for organizing and presenting&nbsp;tasks to enhance students' understanding of geometry concepts.",
          "keywords": [
            "Geometry",
            "mathematics",
            "dynamic mathematics software",
            "education"
          ],
          "dateIssued": "2017-02-03",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "University of Central Florida",
            "University of Central Florida"
          ]
        },
        {
          "id": "137",
          "title": "Models in Demography",
          "authors": [
            "Christoph Ableitinger"
          ],
          "pages": null,
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/137/116",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/137",
          "localPdf": "pdfs/v6n1-ableitinger.pdf",
          "articlePage": "articles/v6n1-ableitinger.html",
          "abstract": "In this article, we present a way to use GeoGebra for working on so called Leslie models. Biomathematicians use these models to describe the demographic development of populations. We have used original statistics on the population of the city of Vienna to provide realistic data. By following the presented tasks students gain insights into the field of demography by starting with the familiar exponential growth model which is successively advanced to a simple Leslie model that takes into consideration the age structure of the population. GeoGebra serves as an ideal tool for implementing these models and allows for some predictions for the future development of the population being considered.",
          "keywords": [
            "Biomathematics",
            "GeoGebra",
            "spreadsheet program",
            "iterative processes",
            "growth models"
          ],
          "dateIssued": "2017-02-03",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "University of Vienna"
          ]
        }
      ]
    },
    {
      "id": "v5n2",
      "volume": 5,
      "number": 2,
      "year": 2016,
      "published": "2016-10-20",
      "title": "Proceedings of the Fourth Annual Southern Connecticut GeoGebra Conference",
      "subtitle": "Proceedings of the Fourth Annual Southern Connecticut GeoGebra Conference",
      "legacyId": 9,
      "isProceedings": true,
      "fullIssuePdf": "https://mathed.miamioh.edu/index.php/ggbj/issue/view/9/6",
      "articles": [
        {
          "id": "105",
          "title": "GeoGebra Tools for the Poincaré Disk",
          "authors": [
            "Joseph Manthey",
            "Kim Ward",
            "Ekaterina Lioutikova",
            "Hong Zhou"
          ],
          "pages": null,
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/105/101",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/105",
          "localPdf": "pdfs/v5n2-manthey.pdf",
          "articlePage": "articles/v5n2-manthey.html",
          "abstract": "ThePoincare Ìdisk model played an important role in the acceptance and development of hyperbolic geometry. Although exceptionally useful, the pedagogical value of the model can be further enhanced via experimentation in a dynamic geometry environment. The focus of this article is on the creation of custom tools in GeoGebra for constructing hyperbolic lines and circles in the Poincare Ì disk. In an effort to make this material accessible to a wider audience, the necessary mathematics is also included.Â",
          "keywords": [
            "Poincare Ì disk",
            "GeoGebra custom tools"
          ],
          "dateIssued": "2016-10-20",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "University of Saint Joseph",
            "Eastern Connecticut State University",
            "University of Saint Joseph",
            "University of Saint Joseph"
          ]
        },
        {
          "id": "106",
          "title": "Visualizing Functions of Complex Numbers Using GeoGebra",
          "authors": [
            "Albert Navetta"
          ],
          "pages": null,
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/106/102",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/106",
          "localPdf": "pdfs/v5n2-navetta.pdf",
          "articlePage": "articles/v5n2-navetta.html",
          "abstract": "This paper explores the use of GeoGebra to enhance understanding of complex numbers and functions of complex variables for students in a course, such as College Algebra or Pre-calculus, where complex numbers are introduced as potential solutions to polynomial equations, or students starting out in an undergraduate Complex Variables course. The paper introduces methods to create interactive worksheets for students seeing complex numbers and functions for the first time and for those who have some experience with them, but struggle to visualize their meaning. Acknowledging limitations of GeoGebra concerning complex functions, we create new learning opportunities as we develop workarounds.",
          "keywords": [
            "complex numbers",
            "GeoGebra"
          ],
          "dateIssued": "2016-10-20",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "University of New Haven"
          ]
        },
        {
          "id": "104",
          "title": "A Geometric Interpretation of Complex Zeros of Quadratic Functions",
          "authors": [
            "Joseph Pastore",
            "Alan Sultan"
          ],
          "pages": null,
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/104/103",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/104",
          "localPdf": "pdfs/v5n2-pastore.pdf",
          "articlePage": "articles/v5n2-pastore.html",
          "abstract": "Most high school mathematics students learn how to determine the zeros of quadratic functions such as f (x) = ax^2 + bx + c, where a, b, and c are real numbers. At some point, students encounter a quadratic function of this form whose zeros are imaginary or complex-valued. Since the graph of such functions do not intersect the x-axis in the xy-plane, students may be left with the impression that complex-valued zeros of quadratics cannot be visualized. The main purpose of this manuscript is to show that if the zeros of a quadratic function with real-valued coefficients are imaginary, the zeros can be seen if we use an appropriate coordinate system. For illustrative purposes, we have used the software program GeoGebra, which allows us to create a three-dimensional Cartesian coordinate system where imaginary zeros can be viewed simultaneously with the graph of the quadratic function they correspond to. To illustrate this, we will apply geometric transformations to the function given by f (x) = x^2 âˆ’ 6x + 13 in order to visualize its zeros, which happen to be complex-valued. Then, we will identify a particular set of complex numbers that can be used as inputs for the function f. Using this set of complex numbers, we can construct the exact image that is produced by the geometric transformations. Then, we may deem the two methods as equivalent ways to ultimately construct the geometric images of complex-valued zeros of quadratic functions with real-valued coefficients.Â",
          "keywords": [
            "Quadratic functions",
            "complex zeros",
            ""
          ],
          "dateIssued": "2016-10-20",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "Queens College",
            "Queens College"
          ]
        },
        {
          "id": "103",
          "title": "Using the Tail of a Sequence to Explore Its Limit",
          "authors": [
            "James Quinlan"
          ],
          "pages": null,
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/103/104",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/103",
          "localPdf": "pdfs/v5n2-quinlan.pdf",
          "articlePage": "articles/v5n2-quinlan.html",
          "abstract": "Graphing sequences is a common approach to explore limits both conceptually and computationally. In the traditional approach, the first terms of the sequence are the primary focus, however, we present a GeoGebra applet that facilitates the determination and understanding of limits by illustrating an inverted perspective that emphasizes the tail of the sequence instead. Additionally, two robust and valuable GeoGebra topics/commands will be highlighted in the applet, in particular Lists and Sequences. Finally, we conclude with a discussion of several issues surrounding the limits and GeoGebra.Â",
          "keywords": [
            "limit of sequence",
            "limits",
            "sequences",
            "convergent"
          ],
          "dateIssued": "2016-10-20",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "University of New England"
          ]
        },
        {
          "id": "102",
          "title": "\"Messing Around\" in GeoGebra: Online Inquiry Through Apps and Games",
          "authors": [
            "Forest Fisher"
          ],
          "pages": null,
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/102/105",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/102",
          "localPdf": "pdfs/v5n2-fisher.pdf",
          "articlePage": "articles/v5n2-fisher.html",
          "abstract": "This article explores a problem solving strategy called \"messing around\" that is particularly apt for online course work in GeoGebra. While traditional math problems may require students to search deliberately for a specific solution, messing around employs a more fortuitous approach. We dissect this approach and examine multiple GeoGebra apps that support messing around by providing students with a sandbox for mathematical experimentation.",
          "keywords": [
            "problem solving",
            "online inquiry",
            "hanging out",
            "messing around",
            "geeking out",
            "GeoGebra"
          ],
          "dateIssued": "2016-10-20",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "Guttman Community College (CUNY)"
          ]
        },
        {
          "id": "107",
          "title": "Surviving On Mars With GeoGebra",
          "authors": [
            "Lindsey States",
            "Jenna Odom"
          ],
          "pages": null,
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/107/106",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/107",
          "localPdf": "pdfs/v5n2-states.pdf",
          "articlePage": "articles/v5n2-states.html",
          "abstract": "In this paper, the authors describe an interdisciplinary lesson focused on determining how long an astronaut can survive on Mars. The lesson utilizes resources provided by NASA within an inquiry-based context and is aligned to the Common Core modeling standard. The authors detail the use of a GeoGebra applet that encourages students to explore their own questions.",
          "keywords": [
            "problem solving",
            "inquiry-based learning",
            "modeling",
            "GeoGebra"
          ],
          "dateIssued": "2016-10-20",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "Miami University",
            "Miami University"
          ]
        }
      ]
    },
    {
      "id": "v5n1",
      "volume": 5,
      "number": 1,
      "year": 2016,
      "published": "2016-01-15",
      "title": "North American GeoGebra Journal",
      "subtitle": "Fostering the pursuit of mathematical understanding through creative investigation.",
      "legacyId": 7,
      "articles": [
        {
          "id": "67",
          "title": "Geometric Translations: An Interactive Approach Based on Students' Concept Images",
          "authors": [
            "Alfinio Flores",
            "H. Bahadir Yanik"
          ],
          "pages": null,
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/67/81",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/67",
          "localPdf": "pdfs/v5n1-flores.pdf",
          "articlePage": "articles/v5n1-flores.html",
          "abstract": "We present activities are based on the nature of middle-school students' concept images of geometric translations. We propose the use of interactive GeoGebra files, prototypical examples, and nonexamples. These are chosen to help students develop their thinking through the natural stages of thinking about translation as a motion. We discuss the importance of geometric transformations in the learning of geometry, and the central role of examples and nonexamples in the learning of mathematical concepts. We describe three stages in middle-school students' thinking about geometric translations as motion translations; and some misconceptions found in research studies. Twelve activities constitute the main body of the article. We discuss more advanced stages in the understanding of geometric translations that will need to be addressed beyond the middle-school. View Article",
          "keywords": [
            "geometric translations",
            "geometric transformations",
            "middle-school geometry"
          ],
          "dateIssued": "2016-01-15",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "University of Delaware",
            "Anadolu University"
          ]
        },
        {
          "id": "73",
          "title": "Euclid, the Game! for Virtual Mathematics Teams",
          "authors": [
            "Joanne Caniglia"
          ],
          "pages": null,
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/73/100",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/73",
          "localPdf": "pdfs/v5n1-caniglia.pdf",
          "articlePage": "articles/v5n1-caniglia.html",
          "abstract": "Euclid, the Game! is capable of providing students carefully structured enironments and motivations to explore and learn from those environments. In addition, the Virtual Mathematics Teams with Geogebra program offers students opportunities to communicate their solutions with other students. The combination of these two environments enhances both the motivational and educational aspects of the activity. View Article",
          "keywords": [
            "Geometry",
            "Proof",
            "Communication"
          ],
          "dateIssued": "2016-01-15",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "Kent State University"
          ]
        },
        {
          "id": "86",
          "title": "Hidden Properties of the Equilateral Triangle",
          "authors": [
            "Moshe Stupel",
            "Ruth Segal",
            "Alfinio Flores"
          ],
          "pages": null,
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/86/97",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/86",
          "localPdf": "pdfs/v5n1-stupel.pdf",
          "articlePage": "articles/v5n1-stupel.html",
          "abstract": "The equilateral triangle provides a rich context for students and teachers to explore and discover geometrical relations using GeoGebra. In this paper, we provide teachers with interactive applets to use in their classrooms to support student conjecturing regarding properties of the equilateral triangle. Proofs of the properties are then presented. Proofs make use of theorems in geometry, trigonometry, coordinate geometry, as well as inequalities about numbers.",
          "keywords": [],
          "dateIssued": "2016-01-15",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "Shaanan, Religious Teachers' College",
            "Shaanan, Religious Teachers' College",
            "University of Delaware"
          ]
        },
        {
          "id": "75",
          "title": "Intersection of Polyhedrons and a Plane with GeoGebra",
          "authors": [
            "Bistra Tsareva",
            "Boyan Zlatanov"
          ],
          "pages": null,
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/75/89",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/75",
          "localPdf": "pdfs/v5n1-tsareva.pdf",
          "articlePage": "articles/v5n1-tsareva.html",
          "abstract": "Using GeoGebra, we present an innovative method for teaching of the intersection of polyhedrons with a plane using infinite points and the swap of finite and infinite points. The method presented is efficient and powerful, allowing one to generate solutions of a whole set of problems by solving one instance and using a pre-made applet at any stage of the solution process.",
          "keywords": [],
          "dateIssued": "2016-01-15",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "Plovdiv University",
            "Plovdiv University"
          ]
        },
        {
          "id": "77",
          "title": "Exploring Conservation of Momentum in Inelastic and Elastic Collisions and Explosions",
          "authors": [
            "Kate Hruby",
            "James Vesenka"
          ],
          "pages": null,
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/77/90",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/77",
          "localPdf": "pdfs/v5n1-hruby.pdf",
          "articlePage": "articles/v5n1-hruby.html",
          "abstract": "A GeoGebra applet was created to supplement lectures and experiments surrounding collisions for AP or introductory college physics. Students can explore two-body one-dimensional conservation of momentum problems in this simulation by manipulating the masses and velocities of two colliding objects. They can compare both vectoral and graphical momentum representations of inelastic and elastic collisions as well as the novel addition of explosions, a special form of inelastic collision. In the following article the importance of momentum representation as a graphical area is explained along with the mathematics of the program, hints for using the applet and how it can be incorporated into the classroom.",
          "keywords": [
            "momentum",
            "conservation of momentum",
            "collisions",
            "elastic",
            "inelastic",
            "explosions",
            "momentum vectors",
            "momentum representations"
          ],
          "dateIssued": "2016-01-15",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "University of New England",
            "University of New England Department of Chemistry and Physics 11 Hills Beach Road Biddeford, ME 04005"
          ]
        },
        {
          "id": "87",
          "title": "Modeling a Total Solar Eclipse Using GeoGebra",
          "authors": [
            "Lingguo Bu",
            "Harvey Henson"
          ],
          "pages": null,
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/87/98",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/87",
          "localPdf": "pdfs/v5n1-bu.pdf",
          "articlePage": "articles/v5n1-bu.html",
          "abstract": "Using a modeling approach, this article discusses how to build a GeoGebra model to help students make sense of a total solar eclipse. A few powerful tools in GeoGebra such as sliders, tangents, animation allow students to explore the mathematical dynamics of a solar eclipse and identify the causes behind a total or partial solar eclipse.",
          "keywords": [
            "Modeling",
            "solar eclipse",
            "sense making"
          ],
          "dateIssued": "2016-01-15",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "Southern Illinois University - Carbondale",
            "Southern Illinois University - Carbondale"
          ]
        }
      ]
    },
    {
      "id": "v4n2",
      "volume": 4,
      "number": 2,
      "year": 2016,
      "published": "2016-02-15",
      "title": "Proceedings of the Third Annual Southern Connecticut GeoGebra Conference",
      "subtitle": "Proceedings of the Third Annual Southern Connecticut GeoGebra Conference",
      "legacyId": 6,
      "isProceedings": true,
      "fullIssuePdf": "https://mathed.miamioh.edu/index.php/ggbj/issue/view/6/1",
      "articles": [
        {
          "id": "80",
          "title": "Fostering Growth in Teacher Content Knowledge Through the Construction of Sketches for Students",
          "authors": [
            "Michael Todd Edwards"
          ],
          "pages": null,
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/80/66",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/80",
          "localPdf": "pdfs/v4n2-edwards.pdf",
          "articlePage": "articles/v4n2-edwards.html",
          "abstract": "In this paper, the author investigates connections between teacher content knowledge and the construction of sketches through an examination of teacher-constructed applets. Specifically, the author analyzes the mathematics that teachers needed to know to design sketches in GeoGebra to support student understanding of a proportional reasoning problem aligned to 6th grade Common Core math standards.",
          "keywords": [
            "pedagogical content knowledge",
            "teacher knowledge",
            "problem solving",
            "proportional thinking",
            "modeling"
          ],
          "dateIssued": "2016-02-15",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "Miami University"
          ]
        },
        {
          "id": "82",
          "title": "Using GeoGebra to Present Kinetic Data and Ligand Binding Data to a Biochemistry Class",
          "authors": [
            "George Dombi",
            "John Golden"
          ],
          "pages": null,
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/82/67",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/82",
          "localPdf": "pdfs/v4n2-dombi.pdf",
          "articlePage": "articles/v4n2-dombi.html",
          "abstract": "There are two hyperbolic functions commonly presented in Biochemistry classes. Both of these functions, the Michaelis-Menten enzyme activity curve and the Scatchard ligand binding isotherm, are routinely re-expressed using a linear transform in order to determine the rate and binding constants inherent in each model. We will demonstrate how these transforms, when presented in GeoGebra, make useful and interactive teaching tools.&nbsp;",
          "keywords": [
            "hyperbolic functions",
            "Biochemistry",
            "Scatchard ligand binding isotherm"
          ],
          "dateIssued": "2016-02-15",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "University of Rhode Island",
            "Grand Valley State University"
          ]
        },
        {
          "id": "81",
          "title": "Visualizing Solids of Revolution in GeoGebra",
          "authors": [
            "Douglas Hoffman"
          ],
          "pages": null,
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/81/68",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/81",
          "localPdf": "pdfs/v4n2-hoffman.pdf",
          "articlePage": "articles/v4n2-hoffman.html",
          "abstract": "Surfaces can be graphed in GeoGebra by either using the Surface command, defining a function f (x, y), or inputting an equation of at most three variables. Some surfaces can be easily graphed using a function of two variables or an equation, but we have more control over the surface if the Surface command is used. We start by graphing surfaces of revolution encountered in single variable calculus class. A surface of revolution can be graphed in GeoGebra provided we can parameterize the circular cross-section. This method of graphing a surface of revolution can be applied to model objects with circular cross-section, like a Hershey's Kiss, in GeoGebra.&nbsp;",
          "keywords": [
            "solids of revolution",
            "modeling",
            "multivariable",
            "GeoGebra",
            "Surface"
          ],
          "dateIssued": "2016-02-15",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "Northwestern Connecticut Community College"
          ]
        },
        {
          "id": "79",
          "title": "An Informal Approach to Linear Least Squares",
          "authors": [
            "James Quinlan"
          ],
          "pages": null,
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/79/69",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/79",
          "localPdf": "pdfs/v4n2-quinlan.pdf",
          "articlePage": "articles/v4n2-quinlan.html",
          "abstract": "Modeling data using the least squares method is used extensively in practice, and is therefore an essential topic for students of data science. This paper describes a GeoGebra applet used to facilitate understanding of the objective and the underlying mathematics of the least squares method. Additionally, lists, one of the most robust and valuable GeoGebra features is highlighted through the use of the Sequence command. The discussion includes ideas for enhancing the applet.",
          "keywords": [
            "least squares",
            "approximation",
            "GeoGebra",
            "lists",
            "Sequence"
          ],
          "dateIssued": "2016-02-15",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "University of New England"
          ]
        }
      ]
    },
    {
      "id": "v4n1",
      "volume": 4,
      "number": 1,
      "year": 2015,
      "published": "2015-03-13",
      "title": "North American GeoGebra Journal",
      "subtitle": "Fostering the pursuit of mathematical understanding through creative investigation.",
      "legacyId": 5,
      "articles": [
        {
          "id": "66",
          "title": "Exploring Cyclic Quadrilaterals with Perpendicular Diagonals",
          "authors": [
            "Alfinio Flores"
          ],
          "pages": null,
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/66/53",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/66",
          "localPdf": "pdfs/v4n1-flores.pdf",
          "articlePage": "articles/v4n1-flores.html",
          "abstract": "High School Students explore three interesting results about cyclical quadrilaterals that have perpendicular diagonals. They explore how to generalize one of the results to any cyclical quadrilateral.",
          "keywords": [
            "cyclical quadrilaterals",
            "coordinate geometry",
            "proof"
          ],
          "dateIssued": "2015-03-13",
          "license": "http://creativecommons.org/licenses/by-sa/4.0",
          "affiliations": [
            "University of Delaware"
          ]
        },
        {
          "id": "65",
          "title": "Fostering Understanding of Monte Carlo Simulations for Estimating Using Dynamic GeoGebra Applets",
          "authors": [
            "Tanja Van Hecke"
          ],
          "pages": null,
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/65/54",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/65",
          "localPdf": "pdfs/v4n1-hecke.pdf",
          "articlePage": "articles/v4n1-hecke.html",
          "abstract": "Simulations of events, using Monte Carlo methods in Geogebra, provide students with opportunities to actively participate in statistical events. Simulations can be used to derive statistical information about underlying distributions. In the following paper, we explore dart throwing and needle drop simulations as vehicles for estimating. Connecting abstract concepts to visually compelling media provides teachers with innovative approaches for teaching probability.",
          "keywords": [
            "statistics",
            "estimation",
            "geometry package",
            "applet",
            "simulation"
          ],
          "dateIssued": "2015-03-13",
          "license": "http://creativecommons.org/licenses/by-sa/4.0",
          "affiliations": [
            "Ghent University Department of Engineering and Architecture"
          ]
        },
        {
          "id": "70",
          "title": "Exploring Lake Erie Algae Growth in an Algebra Class Using GeoGebra",
          "authors": [
            "Marie Nabbout-Cheiban"
          ],
          "pages": null,
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/70/56",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/70",
          "localPdf": "pdfs/v4n1-nabboutcheiban.pdf",
          "articlePage": "articles/v4n1-nabboutcheiban.html",
          "abstract": "The article describes an investigation activity based on the spread of the toxic algae in Lake Erie. Students collect data showing the algae spread over few days, find best fit curve(s) and make predictions for later days. Later on, they compare their predictions with actual data and adjust their models.",
          "keywords": [
            "Best fit curves",
            "algebra",
            "STEM"
          ],
          "dateIssued": "2015-03-13",
          "license": "http://creativecommons.org/licenses/by-sa/4.0",
          "affiliations": [
            "Southern Connecticut State University"
          ]
        }
      ]
    },
    {
      "id": "v3n1",
      "volume": 3,
      "number": 1,
      "year": 2014,
      "published": "2013-11-15",
      "title": "North American GeoGebra Journal",
      "subtitle": "Fostering the pursuit of mathematical understanding through creative investigation.",
      "legacyId": 4,
      "articles": [
        {
          "id": "46",
          "title": "Brownie Points",
          "authors": [
            "Chris Bolognese"
          ],
          "pages": null,
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/46/43",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/46",
          "localPdf": "pdfs/v3n1-bolognese.pdf",
          "articlePage": "articles/v3n1-bolognese.html",
          "abstract": "In this article, we explore an open-ended problem that integrates fair division, geometry, algebra, and its extensions in higher dimensions. &nbsp;GeoGebra is an essential tool used to further investigate this problem through its juxtaposition of algebraic and geometric representations. &nbsp;The reader is invited to try similar activities with his or her own students through the purposeful use of dynamic geometry.",
          "keywords": [
            "fair division",
            "geometry",
            "algebra",
            "constructions",
            "reasoning",
            "math circles"
          ],
          "dateIssued": "2013-11-15",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "Upper Arlington Schools"
          ]
        },
        {
          "id": "48",
          "title": "The Parabola as a Locus: Paving the Way to the CCSS",
          "authors": [
            "Armando Moises Martinez-Cruz",
            "Jose Natividad Contreras"
          ],
          "pages": null,
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/48/45",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/48",
          "localPdf": "pdfs/v3n1-martinezcruz.pdf",
          "articlePage": "articles/v3n1-martinezcruz.html",
          "abstract": "Authors present a teaching activity conducted in a geometry class for prospective secondarymathematics teachers.Â Activity goalÂ is to derive the equation of the parabolagiven the focus and the directrix (CCSS).Â Additionally, students use Geogebra to investigate the effect of thefocus and the directrix on the graph.",
          "keywords": [
            "coordinate geometry",
            "algebraic reasoning"
          ],
          "dateIssued": "2013-11-15",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "CSU Fullerton",
            "Ball State University"
          ]
        },
        {
          "id": "63",
          "title": "Artistic Symmetry: Finding Richness in Tattoo Design",
          "authors": [
            "Lisa Foos"
          ],
          "pages": null,
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/63/46",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/63",
          "localPdf": "pdfs/v3n1-foos.pdf",
          "articlePage": "articles/v3n1-foos.html",
          "abstract": "In this article, I describe my response to the challenge of creating a rich task for my tenth grade geometry course &nbsp;- namely, the creation of an interdisciplinary tattoo project that provides students with opportunities to connect art, symmetry, and transformational geometry in engaging, exploratory, and personally meaningful ways. &nbsp;Links to student worksheets, answer keys, teacher notes, and GeoGebra sketches are provided.&nbsp;",
          "keywords": [
            "symmetric transformations",
            "reflection",
            "rotation"
          ],
          "dateIssued": "2013-11-15",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "Toledo Public Schools"
          ]
        },
        {
          "id": "60",
          "title": "Systems of Inequalities: Using GeoGebra to Plan Your Party",
          "authors": [
            "Karen Ann Noyes"
          ],
          "pages": null,
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/60/48",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/60",
          "localPdf": "pdfs/v3n1-noyes.pdf",
          "articlePage": "articles/v3n1-noyes.html",
          "abstract": "This article provides a brief description of rich tasks, and then features a problem involving the use of Geogebra and Systems of Inequalities to plan a fundraising event as a collaborative effort for High School Algebra students.",
          "keywords": [
            "Systems of Inequalities",
            "systems of equations"
          ],
          "dateIssued": "2013-11-15",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "Ohio Virtual Academy"
          ]
        },
        {
          "id": "54",
          "title": "Building Dynamic Fraction Bar Models with GeoGebra",
          "authors": [
            "Thomas Edmond Cooper"
          ],
          "pages": null,
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/54/50",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/54",
          "localPdf": "pdfs/v3n1-cooper.pdf",
          "articlePage": "articles/v3n1-cooper.html",
          "abstract": "In this article, the author demonstrates how GeoGebra can be used to build fraction bar models for conceptualizing equivalent fractions as well as addition, subtraction, multiplication, and division of fractions. Each construction uses checkboxes and input boxes to allow users to dynamically interact with the constructions and sequences of polygons to create the fraction bars.",
          "keywords": [
            "K-12 Mathematics",
            "Preservice Elementary Teachers",
            "Fraction Bar Models"
          ],
          "dateIssued": "2013-11-15",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "University of North Georgia"
          ]
        },
        {
          "id": "50",
          "title": "The Parabola as the Locus of the Product of Two Lines: Building Functions from Functions",
          "authors": [
            "Armando Moises Martinez-Cruz",
            "Jose Natividad Contreras"
          ],
          "pages": null,
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/50/51",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/50",
          "localPdf": "pdfs/v3n1-martinezcruz-1.pdf",
          "articlePage": "articles/v3n1-martinezcruz-1.html",
          "abstract": "This paper presents another approach to vertical parabolas--namely as the product of two lines. &nbsp;The locus in Geogebra (Hohenwarter, 2002) permits to produce this product and dynamically investigate changes in the parabola and relate them to its linear factors. This approach can be easily generalized to more linear factors, and to horizontal parabolas. &nbsp;This approach relates to the Function Domain -- Building Functions in the CCSS.",
          "keywords": [
            "Functions",
            "locus",
            "factors"
          ],
          "dateIssued": "2013-11-15",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "CSU Fullerton",
            "Ball State University"
          ]
        },
        {
          "id": "58",
          "title": "Where's the Firehouse?",
          "authors": [
            "Ian Callon"
          ],
          "pages": null,
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/58/52",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/58",
          "localPdf": "pdfs/v3n1-callon.pdf",
          "articlePage": "articles/v3n1-callon.html",
          "abstract": "Students will be tasked with finding the best location for a firehouse given houses along a street, which are represented as points on a line. The worksheet and accompanying GeoGebra sketch will not tell students how to approach the task, leading students to practice reasoning skills. &nbsp;In this paper, I will argue that rich tasks such as this one will benefit students more on end of course assessments under the Common Core and PARCC, and in mathematics classes in general.",
          "keywords": [
            "absolute-value",
            "piecewise",
            "rich task"
          ],
          "dateIssued": "2013-11-15",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "Oakwood High School"
          ]
        }
      ]
    },
    {
      "id": "v2n1",
      "volume": 2,
      "number": 1,
      "year": 2013,
      "published": "2013-01-07",
      "title": "North American GeoGebra Journal",
      "subtitle": "Fostering the pursuit of mathematical understanding through creative investigation.",
      "legacyId": 2,
      "articles": [
        {
          "id": "18",
          "title": "Evangelizing Beyond Early Adopters: Developing Materials to Train Teachers in the Use of GeoGebra",
          "authors": [
            "Mike May"
          ],
          "pages": null,
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/18/21",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/18",
          "localPdf": "pdfs/v2n1-may.pdf",
          "articlePage": "articles/v2n1-may.html",
          "abstract": "Abstract: The author has presented 20 workshops teaching high school and college teachers to use GeoGebra. The formats have included one, two, and four hour workshops at professional meetings, all day in service sessions at high schools, and week long on line workshops through the MAA PREP program. One indication of the successfulness of the workshops is that a significant number of participants in the workshops have subsequently made presentations of their own at professional meetings. This paper explores working principles that should inform preparation of training material and gives an outline of material that is already available and what still remains to be developed.",
          "keywords": [
            "Training material",
            "transforming pedagogy"
          ],
          "dateIssued": "2013-01-07",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "Saint Louis University"
          ]
        },
        {
          "id": "25",
          "title": "Investigating the Generalization of a Special Property of Cubic Polynomials to Higher Degree Polynomials",
          "authors": [
            "David Miller"
          ],
          "pages": null,
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/25/30",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/25",
          "localPdf": "pdfs/v2n1-miller.pdf",
          "articlePage": "articles/v2n1-miller.html",
          "abstract": "The article discusses how to use Geogebra to illustrate the generalization of a special property of cubic polynomials. The generalization is discussed for fourth and fifth degree polynomials and illustrated with Geogebra. The article discusses the general formula, a n-2 degree polynomial, for finding the nth zero in terms of n-1 of the zeros of the nth degree polynomial.",
          "keywords": [
            "polynomials",
            "zeros",
            "algebraic poofs",
            "tangent lines"
          ],
          "dateIssued": "2013-01-07",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "West Virginia University"
          ]
        },
        {
          "id": "37",
          "title": "Study of Functions in a GeoGebra Environment During \"Learning Week\"",
          "authors": [
            "Antonio Criscuolo",
            "Adriana Gnudi"
          ],
          "pages": null,
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/37/38",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/37",
          "localPdf": "pdfs/v2n1-criscuolo.pdf",
          "articlePage": "articles/v2n1-criscuolo.html",
          "abstract": "In this paper, the authors summarize their experience using GeoGebra during an intensive, one-week course (i.e., ``learning week''). High school students engaged in collaborative problem-solving activities and explorations involving the limits and derivatives of elementary functions and function graphs. The ``hide and show'' features of GeoGebra were used to conceal (and reveal) analytic function forms from students. The final assessment and evaluation test suggests that GeoGebra is a useful tool in the study of function and calculus concepts. &nbsp;",
          "keywords": [
            "calculus",
            "cooperative learning",
            "study of function"
          ],
          "dateIssued": "2013-01-07",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "University of Bergamo",
            "Bergamo University"
          ]
        },
        {
          "id": "47",
          "title": "GeoGebra as a Frontend to Generating Graphics for LaTeX",
          "authors": [
            "James Quinlan"
          ],
          "pages": null,
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/47/39",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/47",
          "localPdf": "pdfs/v2n1-quinlan.pdf",
          "articlePage": "articles/v2n1-quinlan.html",
          "abstract": "GeoGebra can be used to create graphics which then can be exported for inclusion in LaTeX, documents for presentations, research articles, or classroom materials such as quizzes, exams, and homework. Â Graphics can be exported in various image formats (e.g., png) or by using the combination PGF/TikZ package. This article aims to demonstrates how to export graphics created in GeoGebra and import these graphics into a LaTeX, document.",
          "keywords": [
            "LaTeX",
            "TiKZ"
          ],
          "dateIssued": "2013-01-07",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "University of New England"
          ]
        },
        {
          "id": "23",
          "title": "Volume and Area Ratios with GeoGebra",
          "authors": [
            "Libuse Samkova"
          ],
          "pages": null,
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/23/22",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/23",
          "localPdf": "pdfs/v2n1-samkova.pdf",
          "articlePage": "articles/v2n1-samkova.html",
          "abstract": "This article was motivated by student work in a biological laboratory, where a question was asked about the liquid level corresponding to 1/5 of the volume of a laboratory flask. The authors analyze the issue of volume and area ratios using GeoGebra, presenting various dynamic GeoGebra models including a model of the experiment which initiated the article.",
          "keywords": [
            "volume",
            "area",
            "dynamic models",
            "GeoGebra",
            ""
          ],
          "dateIssued": "2013-01-07",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "University of South Bohemia"
          ]
        },
        {
          "id": "42",
          "title": "GeoGebra as a Tool to Explore, Conjecture, Verify, Justify, and Prove: The Case of a Circle",
          "authors": [
            "Yip-Cheung Chan"
          ],
          "pages": null,
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/42/28",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/42",
          "localPdf": "pdfs/v2n1-chan.pdf",
          "articlePage": "articles/v2n1-chan.html",
          "abstract": "GeoGebra is a good platform for experimentation which supports the development of mathematical concepts and the abilities to explain geometric properties. In this paper, a series of GeoGebra activities which aims at consolidating students’ understandings on the concepts of center and radius and developing the concepts of locus and perpendicular bisector through experiencing the process of exploring, conjecturing, verifying, justifying and proving is described.",
          "keywords": [
            "GeoGebra",
            "circle",
            "exploring",
            "conjecturing",
            "verifying",
            "justifying",
            "proving"
          ],
          "dateIssued": "2013-01-07",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "The Chinese University of Hong Kong"
          ]
        },
        {
          "id": "38",
          "title": "Using GeoGebra to Develop Primary School Students' Understanding of Reflection",
          "authors": [
            "Xenia Xistouri",
            "Demetra Pitta-Pantazi"
          ],
          "pages": null,
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/38/33",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/38",
          "localPdf": "pdfs/v2n1-xistouri.pdf",
          "articlePage": "articles/v2n1-xistouri.html",
          "abstract": "This paper presents a sequence of instructional activities with GeoGebra for the teaching of reflection in primary school. The authors demonstrate a way in which GeoGebra can be used to design an instructional program based on the stages of the 5Es instructional model (engagement, exploration, explanation, elaboration, and evaluation).",
          "keywords": [
            "reflection",
            "primary education",
            "GeoGebra",
            "transformations",
            "dynamic geometry"
          ],
          "dateIssued": "2013-01-07",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "Department of Education, University of Cyprus",
            "Department of Education, University of Cyprus"
          ]
        },
        {
          "id": "40",
          "title": "GeoGebra in Financial Education",
          "authors": [
            "Roman Hasek",
            "Vladimira Petraskova"
          ],
          "pages": null,
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/40/36",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/40",
          "localPdf": "pdfs/v2n1-hasek.pdf",
          "articlePage": "articles/v2n1-hasek.html",
          "abstract": "In this paper, the authors discuss the use of GeoGebra in the teaching of financial issues in basic and secondary schools and in teacher preparation courses. By means of example, the authors illustrate the use of GeoGebra as a vehicle for explaining present-day financial issues while providing students with skills necessary to make well-informed monetary decisions. The dynamic features of GeoGebra encourage experimentation and deep conceptual understanding of the mathematics underpinning various financial formulas.",
          "keywords": [
            "financial education",
            "GeoGebra",
            "spreadsheet"
          ],
          "dateIssued": "2013-01-07",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "University of South Bohemia",
            "University of South Bohemia"
          ]
        }
      ]
    },
    {
      "id": "v1n1",
      "volume": 1,
      "number": 1,
      "year": 2012,
      "published": "2012-05-01",
      "title": "North American GeoGebra Journal",
      "subtitle": "Fostering the pursuit of mathematical understanding through creative investigation.",
      "legacyId": 1,
      "articles": [
        {
          "id": "4",
          "title": "GeoGebra as a Motivational Tool for Teaching and Learning in Slovakia",
          "authors": [
            "Jan Guncaga",
            "Janka Majherova"
          ],
          "pages": null,
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/4/19",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/4",
          "localPdf": "pdfs/v1n1-guncaga.pdf",
          "articlePage": "articles/v1n1-guncaga.html",
          "abstract": "In this article we describe some activities, which we propose to implement within the framework of Slovak GeoGebra Institute. We present several works that use the GeoGebra software and were created by the students of pedagogy at Catholic University in Ružomberok. We describe some pedagogical applications of using GeoGebra in mathematics and computer science. Finally, we suggest some project possibilities for research and application of the GeoGebra in the education and in the work with university students of pedagogy or students at secondary schools.",
          "keywords": [
            "Slovak GeoGebra Wiki",
            "calculus and geometry in GeoGebra",
            "algorithms with graphs in GeoGebra",
            "secondary education"
          ],
          "dateIssued": "2012-05-01",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "Catholic University in Ruzomberok",
            "Catholic University in Ruzomberok"
          ]
        },
        {
          "id": "21",
          "title": "GeoGebra with an Interactive Help System Generates Abductive Argumentation During Proving Process",
          "authors": [
            "Danh Nam Nguyen"
          ],
          "pages": null,
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/21/20",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/21",
          "localPdf": "pdfs/v1n1-nguyen.pdf",
          "articlePage": "articles/v1n1-nguyen.html",
          "abstract": "In this paper, the author provides a pedagogical intervention using GeoGebra in the proving process. This intervention may bridge the gap between argumentation and proof, especially the difficulty in transitioning from abductive argumentation to deductive proof. Heuristic questions and explorative tasks in an interactive help system (IHS) are responsible for sowing the seeds of realizing geometric invariants and generating the ideas for proofs. In order to explain some \"observed facts\" in GeoGebra, students need to make some conjectures and then find data for validating the produced conjectures. These activities provide students with an opportunity to generate abductive argumentation aimed at writing proofs.",
          "keywords": [
            "GeoGebra",
            "dynamic mathematics software",
            "help system",
            "abductive argumentation",
            "Toulmin model",
            "proof",
            "proving process"
          ],
          "dateIssued": "2012-05-01",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "University of Wuerzburg"
          ]
        },
        {
          "id": "6",
          "title": "Computer as the Sole Drawing Tool and School Results in Geometry",
          "authors": [
            "Jiri Vanicek",
            "Josef Lombart"
          ],
          "pages": null,
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/6/13",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/6",
          "localPdf": "pdfs/v1n1-vanicek.pdf",
          "articlePage": "articles/v1n1-vanicek.html",
          "abstract": "A factor that plays a significant role in the effective use of information technologies is the teacher's belief regarding the appropriateness and usefulness of such teaching. The research presented here addresses the following question: How does replacing ruler and compass constructions with constructions using Geogebra impact the geometrical knowledge of school-aged students? Twelve year-old subjects from six different schools worked through identical, 8-day geometry units. After each unit was completed, students took two tests - one focusing on pencil-and-paper drawing (i.e., the drawing test), the other consisting of short answers (i.e., the non-drawing test). We present the content of our teaching experiment while discussing the promise and the perils of an GeoGebra-centered approach to classic geometry constructions. We also share data gathered from a teacher attitudinal survey. Our research suggests that a teacher's perception of efficiency of GeoGebra use depends on beliefs regarding geometry as either practical drawing or, alternatively, as the study of shapes and space in the world.",
          "keywords": [
            "paper and pencil drawing",
            "school geometry",
            "school results"
          ],
          "dateIssued": "2012-05-01",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "University of South Bohemia",
            "University of South Bohemia"
          ]
        },
        {
          "id": "14",
          "title": "GeoGebra Kit in Geometry at Secondary Stage",
          "authors": [
            "Praveen Kumar Chaurasia"
          ],
          "pages": null,
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/14/14",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/14",
          "localPdf": "pdfs/v1n1-chaurasia.pdf",
          "articlePage": "articles/v1n1-chaurasia.html",
          "abstract": "In India through the National Council of Educational Research and Training (NCERT), we are developing GeoGebra Kit in Geometry at Secondary Stage. The broad objective is to develop interactive digital e-content using GeoGebra, LaTeX and a number of other open source software to promote high-quality teaching and learning of mathematics at the secondary stage. Some spoken tutorials with fundamental questions along with applets are also planned. We discuss anticipated features and objectives of the GeoGebra Kit in the following article.",
          "keywords": [
            "GeoGebra",
            "Geometry",
            "Secondary Stage"
          ],
          "dateIssued": "2012-05-01",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "National Council of Educational Research and Training, New Delhi"
          ]
        },
        {
          "id": "12",
          "title": "Numerical Analysis of a Planar Motion; GeoGebra as a Tool of Investigation",
          "authors": [
            "Roman Hasek"
          ],
          "pages": null,
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/12/15",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/12",
          "localPdf": "pdfs/v1n1-hasek.pdf",
          "articlePage": "articles/v1n1-hasek.html",
          "abstract": "The paper is inspired by the method of the numerical approximation of the planetary motion that was used by Richard Feynman in the book &nbsp;The Feynman Lectures on Physics. &nbsp;Using Newton's Second Law and replacing infinitesimally small changes in variables by their very small changes, he arrived at a respectable approximation of the elliptical motion of a planet around the sun. To organize all numerically computed data, which include the sequence of coordinates of the consecutive positions of the planet during its motion around the sun, Richard Feynman used a large table. Then, the plot of the resulting successive positions of the planet was in accordance with Kepler's laws. We show that GeoGebra, which enables a user to combine the spreadsheet with the numerical and graphical tools, is very suitable for grasping such complex tasks based on repetitive numerical computation and graphical planar representation.",
          "keywords": [
            "numerical analysis",
            "planetary motion",
            "spreadsheet",
            "GeoGebra"
          ],
          "dateIssued": "2012-05-01",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "University of South Bohemia, Pedagogical Faculty Jeronymova 10371 15 Ceske Budejovice Czech Republic"
          ]
        },
        {
          "id": "3",
          "title": "A Laboratory Guide for Elementary Geometry Using GeoGebra",
          "authors": [
            "Jack D. Gittinger"
          ],
          "pages": null,
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/3/11",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/3",
          "localPdf": "pdfs/v1n1-gittinger.pdf",
          "articlePage": "articles/v1n1-gittinger.html",
          "abstract": "A Laboratory Guide for Elementary Geometry Using GeoGebra is a free, online collection of interactive, problem-centered, inquiry-based geometry lesson plans for upper elementary students that are based on the Essential Concepts and Skills for Geometry identified in the Common Core State Standards for Mathematics (grades 3-5).",
          "keywords": [
            "elementary",
            "geometry",
            "lesson plans"
          ],
          "dateIssued": "2012-05-01",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "Simpson College"
          ]
        },
        {
          "id": "16",
          "title": "Birth of a Virtual Manipulative",
          "authors": [
            "S. Asli Ozgun-Koca",
            "Michael Meagher"
          ],
          "pages": null,
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/16/9",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/16",
          "localPdf": "pdfs/v1n1-ozgunkoca.pdf",
          "articlePage": "articles/v1n1-ozgunkoca.html",
          "abstract": "In this manuscript, we share the design of a virtual manipulative which aims to bring a hands-on activity to new levels.",
          "keywords": [
            "Trigonometry",
            "Virtual Manipulatives"
          ],
          "dateIssued": "2012-05-01",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "Wayne State University",
            "Brooklyn College - CUNY"
          ]
        },
        {
          "id": "15",
          "title": "Dynamic Illustration of Some Fibonacci Identities",
          "authors": [
            "Amitava Saraswati",
            "Bijendra Singh",
            "Suman Jain"
          ],
          "pages": null,
          "pdfUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/15/18",
          "abstractUrl": "https://mathed.miamioh.edu/index.php/ggbj/article/view/15",
          "localPdf": "pdfs/v1n1-saraswati.pdf",
          "articlePage": "articles/v1n1-saraswati.html",
          "abstract": "We have tried to illustrate some algebraic Fibonacci identities geometrically using GeoGebra the dynamic geometry software.",
          "keywords": [
            "Fibonacci polynomials",
            "Fibonacci and Lucas numbers",
            "Q- matrix",
            "R- matrix",
            "Fibonacci and Lucas vectors"
          ],
          "dateIssued": "2012-05-01",
          "license": "https://creativecommons.org/licenses/by-nc-sa/4.0",
          "affiliations": [
            "St. Paul's H. S. School",
            "School of Studies Dept. of Mathematics Vikram University",
            "Govt. Degree College Barnagar Vikram University"
          ]
        }
      ]
    }
  ]
};
