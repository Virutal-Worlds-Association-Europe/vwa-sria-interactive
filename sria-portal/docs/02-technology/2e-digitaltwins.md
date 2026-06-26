# 2e Digital Twins, assets and people

Virtual Worlds (VW) are populated with Digital Twins (DTs), assets and people. DTs are sophisticated
virtual replicas designed to mirror aspects of their real-world counterparts with relevant fidelity. This
mirroring capability extends to both physical assets and human beings, as well as non-physical but real
processes. Critically, these virtual constructs can be interconnected with their real-world referents,
enabling continuous monitoring, analysis, and even precise control over their behaviour. This section
explores the essential technology blocks required to create, manage, and utilize DTs in their various
forms.

It is important to distinguish DTs from digital assets and avatars. While DTs are intrinsically linked to a
real-world entity (an asset or a person) that they represent, digital assets encompass a broader range of
virtual objects, from game items to cinematic effects, which can be entirely imaginary or representations
of real objects. Similarly, avatars can be representations of real people (e.g., in a social VR space) or
entirely fictional characters. A crucial distinction within the human dimension is the concept of avatars
for AI co-pilots, which are human-like representations of AI engines serving as human-machine
interfaces, distinct from a digital replica of a real or imaginary person.

## Research topics for Digital Twins and assets

The foundational technologies for DTs focus on their applications in diverse domains, their
representativeness and the integration of real-time data. For digital assets, the emphasis is on the
technologies needed to design, create, and manage these virtual objects, highlighting their role in
immersive experiences and the importance of secure ownership and interoperability.

This section delves into critical research topics within the broader DT ecosystem, highlighting existing
gaps and proposing strategic research and innovation objectives crucial for advancing the field.

### Immersion, devices, sensing and visualisation

### 2e.1 Sensors and data for Digital Twins (for assets and humans)

The efficacy of DTs, whether representing a complex industrial asset or a human physiological system, is
intrinsically linked to their ability to accurately reflect real-world conditions. Sensors and advanced data
collection methods provide the indispensable link between physical assets or human bodies and their
digital counterparts, enabling the capture of real-world data. This foundational capability is vital for
accurate monitoring, control, and ultimately, optimizing decision-making and system performance.

Furthermore, by fusing sensor data with ab-initio physics-based models, DTs enable augmented or
virtual sensors which can provide insights into quantities that are otherwise unmeasurable. They also
address the critical challenges of data noise and the overwhelming deluge of information, making multi
source data usable and insightful. High-fidelity (e.g. 3D) models are essential for creating accurate DTs of
assets (e.g., a manufacturing plant) and for facilitating immersive VR experiences (e.g., for training
operators). For Human Digital Twins, sensing technologies allow for personalized healthcare, activity
monitoring, and human-machine interaction. Beyond individual asset or human monitoring, these
technologies enable secure cross-company information sharing, pivotal for initiatives like tracing carbon
footprints in manufacturing processes or enabling personalized production. They also foster production
as-a-service models and establish unified interfaces for continuous integration within heterogeneous
system landscapes. The ability to perform virtual Hardware-in-the-Loop (vHiL) simulations during
engineering phases for validation and verification of system requirements and testing is also a direct
benefit, as is the development of self-descriptive systems for enhanced automation in dynamic system
coupling.

**Problem Definition and Research Gap:**
Despite significant progress, substantial gaps remain in
achieving the full potential of sensor and data integration for DTs. Many real-world processes or human
physiological states remain under-instrumented or rely on outdated sensing technologies. Sensing some
quantities can be intrusive, prohibitively expensive, or, in some cases, currently impossible. A significant
challenge lies in integrating diverse sensor types with varying data rates, potential real-time gaps, and
inherent measurement noise, which is particularly complex for human data due to privacy and variability.
The sheer volume of data necessitates advanced real-time data processing and dimensionality
reduction techniques. Critically, there are current limitations in processing large datasets in real-time at
scale. Beyond hardware and processing, the lack of EU-wide standardisation in DT formats and
implementations, particularly for data exchange, presents a major interoperability hurdle. Furthermore,
inconsistent network connectivity, especially in rural areas, and insufficient interfaces for AI integration
further impede seamless data flow and intelligent decision-making.

**Research and Innovation Objectives:**
- Develop innovative, non-intrusive, and cost-effective augmented sensing technologies for
  challenging or currently unmeasurable physical quantities (for assets) and
  physiological/behavioural parameters (for humans), focusing on robust data acquisition in
  complex and sensitive environments.
- Advance real-time data fusion, synchronisation, and reduction methodologies capable of
  handling massive, heterogeneous datasets from diverse sensor modalities, integrating
  seamlessly with AI-driven analytics, while addressing privacy concerns for human data.
- Establish and promote open EU-wide standards and interoperability frameworks for DT data
  exchange and communication protocols for both assets and humans, ensuring secure, cross
  company/cross-domain data sharing and integration with emerging data spaces (e.g.,
  Manufacturing-X, Health Data Spaces).

### 2e.2 Digital Twin immersion for perception and systems understanding

DTs, regardless of whether they represent an asset or a human, inherently generate vast and intricate
datasets that are notoriously difficult for human users to comprehend and act upon in real-time.
Immersive tools, such as AR and VR, and spatialized audio (auralisation), provide an intuitive bridge for
users to interpret and interact with this complex data. By enabling a more natural and intuitive
interpretation, these tools facilitate superior decision-making for managing industrial plants or
understanding human health data, foster enhanced collaboration among distributed teams, and enable
proactive maintenance strategies or personalized interventions. This shift from passive data
consumption to active, intuitive engagement is crucial for leveraging the full value of DTs. This also
applies to the interaction with AI co-pilots, where immersive interfaces can make the AI's
"understanding" and recommendations more intuitive and accessible.

**Problem Definition and Research Gap:**
A significant research gap exists in the human-centred
dimension of DT tools. Current solutions often prioritize data acquisition and analytics, overlooking the
critical need for users to intuitively "feel," understand, and navigate data in a natural way. There is a
marked lack of integrated solutions that seamlessly combine real-time data visualisation, auralisation,
and interactive capabilities within truly immersive environments. While early prototypes for combining
DTs and immersive visualisation exist (TRL 4-5), mature, industrially deployable solutions for assets and
clinically relevant solutions for Human DTs remain limited. Adoption by end-users is still nascent (Low to
Medium), with interest largely confined to pilot projects in specific sectors like aerospace,
manufacturing, smart cities, and early medical applications.

**Research and Innovation Objectives:**
- Develop advanced immersive platforms capable of real-time visualisation and auralisation of
  complex DT data (for both assets and humans) within VR/AR environments, ensuring intuitive
  user interaction and multimodal feedback for diverse user roles (e.g., designers, operators,
  clinicians, policy makers).
- Research and implement novel methods for seamlessly integrating heterogeneous data sources
  (sensor fusion, 3D models) into immersive DT environments, focusing on cross-device accessibility 
  and robust integration with existing DT pipelines, including those for Human Digital Twins.
- Co-design with end-users and iterative prototyping and testing in real-world industrial, urban,
  and healthcare contexts to evaluate the impact of immersive DTs on decision-making efficiency,
  situational awareness, and collaborative problem-solving.

### Intuitive, real-time user interaction

### 2e.3  Real-time collaboration around Digital Twins

The potential of DTs for collaborative design, operations, and decision-making is often constrained by
their typical static or single-user nature. Real-time collaboration capabilities are paramount, enabling
multiple stakeholders to synchronously or asynchronously interact with the same digital model. This
significantly improves problem-solving, fosters innovation, and accelerates response times in complex
projects, particularly in dynamic environments. Crucially, addressing real-time collaboration also
involves ensuring data sovereignty for data providers in cross-company data exchange (e.g., on data
space platforms like Catena-X for industrial data) and secure sharing of sensitive human data in
healthcare data spaces. This also extends to collaborative interfaces with AI co-pilots, where human
users can interact with and co-create alongside an AI's digital representation.

**Problem Definition and Research Gap:**
A primary gap lies in the absence of robust multi-user
collaboration features within many current DT platforms. This is further compounded by a lack of
sophisticated Attribute-based Access Control (ABAC) mechanisms, which are essential for managing
varied access rights and ensuring data security and sovereignty in complex, multi-stakeholder
environments. While research prototypes and commercial pilots for multi-user DT collaboration exist
(TRL 4-5), truly immersive, real-time, and multi-scale collaborative DT platforms are still in early
developmental stages. Consequently, widespread integration into operational workflows remains low to
medium, with initial adoption concentrated in select industries (e.g., aerospace, automotive, energy) and
early pilot projects in healthcare.

**Research and Innovation Objectives:**
- Design and develop real-time, multi-user DT platforms supporting asymmetric access (e.g., view,
  comment, edit) and seamless cross-device interaction (e.g., XR headsets, touch displays, mobile
  devices) for both asset and human DT applications.
- Implement advanced Attribute-based Access Control (ABAC) mechanisms and data sovereignty
  frameworks to ensure secure and controlled data exchange in multi-stakeholder, cross
  company, and cross-domain DT collaboration environments, with particular attention to
  sensitive human data.
- Integrate sophisticated versioning, annotation, and conflict management systems within
  collaborative DT platforms, capable of handling complex, multi-scale data from sensors to
  simulations, and facilitating effective human-AI collaboration via AI co-pilot avatars.

### 2e.4 Real-time interaction with Digital Twins

Real-time interaction with DTs is fundamental for their utility in dynamic, critical, and safety-sensitive
applications. Model Order Reduction (MOR) techniques are critical for allowing complex, high-fidelity
models to run at significantly faster speeds, enabling real-time simulation and interactive virtual
environments. Natural and effective interaction with digital assets within these environments is essential
for usability and immersion in training, design, or collaborative virtual work. This includes sophisticated
hand gesture recognition from egocentric device input, which provides natural, controller-free
interaction in XR, crucial for intuitive wearable control, and for controlling AI co-pilots. Real-time
rendering and feedback are vital for delivering high-quality, immersive visuals, preventing motion
sickness, and enhancing realism. Furthermore, the integration of Explainable AI (XAI), particularly
neurosymbolic AI, is paramount for increasing the trustworthiness of involved AI models, essential for
trust, debugging, adoption, and regulatory compliance, particularly in safety-critical and regulated fields.

**Problem Definition and Research Gap:**
Despite the acknowledged importance, several challenges
persist in real-time interaction with DTs. High-fidelity models are often too slow for real-time use, and
there are gaps in reducing model size while retaining accuracy and stability, especially for nonlinear and
parameter-varying systems. Current methods for interacting with digital assets frequently lack realism or
intuitiveness, necessitating improvements in haptic feedback, precise tracking, and multi-user
consistency. Egocentric view hand tracking is significantly limited by occlusion, motion blur, and visual
clutter, leading to gaps in accuracy, latency, generalisation, and data efficiency. Achieving a balance
between realism and speed for real-time rendering and feedback remains a trade-off, requiring
advancements in rendering fidelity and latency. Finally, AI models often function as "black boxes,"
highlighting significant gaps in interpretability, feature extraction, knowledge integration, and robust trust
metrics. While traditional MOR is high TRL, novel ML-driven MOR approaches are still low TRL, and the
overall "packaging" for end-user adoption often hides this complexity. So called hybrid MOR approaches
combine the best of the two worlds, currently also still at low TRL.

**Research and Innovation Objectives:**
- Develop advanced Model Order Reduction (MOR) techniques, including ML-driven and hybrid
  approaches, capable of reducing the complexity of high-fidelity, nonlinear, and parameter
  varying models while preserving accuracy and stability for real-time DT applications.
- Research and implement novel real-time interaction paradigms for virtual environments,
  focusing on egocentric hand gesture recognition with improved accuracy and robustness, haptic
  feedback integration, and multi-user synchronisation for realistic digital asset manipulation and
  seamless human-AI co-pilot interaction, including development of advanced deep neural
  networks, exploring novel approaches for integrating multi-modal sensor inputs on XR devices
  and development of computational models and optimisation techniques for on-device hand
  tracking and gesture recognition algorithms.
- Advance research into Explainable AI (XAI) and neurosymbolic AI for DTs, developing
  methodologies for improved interpretability, transparency, and trustworthiness of AI-driven
  insights and behaviours in safety-critical and regulated virtual environments, especially for AI co
  pilots in industrial or medical settings.

### 2e.5 Optimisation and Uncertainty Quantification

VW, powered by DTs, provide unparalleled support for scenario-based decision-making by offering real
time insight into multi-attribute performances, based on simulation and data models. As reliance on
model outputs (which are inherently approximations and predictions) grows drastically in VW contexts,
the critical importance of Uncertainty Quantification (UQ) and optimisation becomes evident, especially
for industrial, health and defence use cases. These disciplines contribute significantly to user awareness
of the limitations of model predictions and underpin robust decision-making. By quantifying and
visualizing uncertainty, users can make more informed choices, mitigating risks associated with relying
on potentially imprecise outputs. Optimisation, particularly multi-attribute optimisation, allows for the
exploration of solution spaces, "what-if" scenarios, and automated decision-making support within the
virtual world, ensuring more robust and reliable outcomes.

**Problem Definition and Research Gap:**
While UQ is a well-established research domain, its application
in early VW implementations is often lacking due to complexity and the absence of established
visualisation methods for UQ results. There is a general tendency to neglect uncertainty because it is
perceived as "not attractive" or too complex to integrate. The core problem definition is how to effectively
convey insights into the uncertainty of predictions at scale within VW applications, making it accessible
and actionable for end-users. Although theoretical UQ and optimisation techniques boast high TRL
levels (6-9), the practical visualisation and standardisation of these methods for deployment have low
TRL levels (2-5). Furthermore, novel approaches like Quantum Inspired algorithms are also in early TRL
stages (2-5). Consequently, the current adoption rate by end-users remains low.

**Research and Innovation Objectives:**
- Develop novel methodologies and tools for the intuitive visualisation and communication of
  uncertainty levels in DT predictions, focusing on scalable solutions for complex VW applications.
- Advance applied Uncertainty Quantification and multi-attribute optimisation techniques tailored
  for real-time DT scenarios, including the exploration of Quantum Inspired algorithms for
  enhanced performance in decision-making support.
- Conduct human-computer interaction research to identify effective strategies for making end
  users aware of the inherent uncertainties in suggested solutions and empowering them to make
  robust, risk-aware decisions.

### Authoring and experience design

### 2e.6 3D Object creation for visual representation

The ability to create accurate and visually rich 3D objects is foundational for bridging the gap between
physical and VW. This capability is crucial for DT fidelity. It is also vital for developing compelling
immersive experiences across various sectors. Advanced tools in this area aim to reduce development
time and costs for 3D content creation, democratize 3D modelling, and enable the creation of both
realistic (for DTs) and imaginative objects (for digital assets/avatars). A key aspect is the seamless
integration of physical properties (e.g., textures, mass distribution, plasticity) and semantic properties
(e.g., function, intended usage, or affordance) into digital representations, allowing VW to blend
seamlessly with the physical one. This includes addressing challenges like missing part completion in 3D
models and enabling creative generative tools for personalized design, including new designs for assets or unique avatars.

**Problem Definition and Research Gap:**
Significant limitations persist in the integration of physical and
semantic properties within current 3D modelling systems, hindering the creation of truly "right-fidelity"
DTs. There is a notable gap between high-fidelity modelling and creative, generative approaches, leading
to a lack of comprehensive tools that combine accuracy with creative flexibility. The need for better
semantic understanding in virtual objects is pressing, as is the current limitation of real-time physical
property simulation. Challenges also exist in translating text descriptions into physically plausible
objects (for assets) or highly detailed, plausible human representations (for avatars) and in handling
complex object relationships and interactions. Furthermore, there is limited ability to transfer learned
properties to novel object categories or to create nuanced human representations. The current TRL is
approximately 4, with a low end-user adoption rate, indicating an early stage of market readiness.

**Research and Innovation Objectives:**
- Develop advanced 3D modelling and mesh generation techniques that seamlessly integrate both
  physical (e.g., material properties, dynamics) and semantic (e.g., function, affordance)
  properties into digital representations for high-fidelity DTs of assets and accurate, contextually
  rich avatars for humans or AI co-pilots.
- Research and implement novel AI/ML-driven generative tools (e.g., Text-to-3D, text-to-avatar) for
  co-creation of 3D assets and scenes, focusing on prompt-based interfaces, physics-aware
  representations, and the ability to generate physically plausible objects or expressive human/AI
  representations from high-level descriptions.
- Advance methodologies for automated missing part completion in 3D models and explore
  techniques for style transfer on 3D models and avatars, enabling rapid and efficient creation of
  diverse and accurate digital assets and representations.

### 2e.7 Capturing real world asset and scene information

VW are fundamentally dependent on accurate digital models of the actual world. Therefore, the ability to
capture real-world assets (e.g., machinery, infrastructure), environments (e.g., factories, cities), and
even people (for Human DT) in 3D is a fundamental prerequisite for the realisation of high-fidelity DTs and
immersive VW. This includes addressing the challenge of cost-effectively and accurately capturing large
areas or highly detailed scenes. Advanced 3D reconstruction methods, including radiance and splatting
techniques, are vital for this process, transforming raw sensor data into usable digital representations for a DT.

**Problem Definition and Research Gap:**
The primary complexity in 3D data capturing lies in the
multitude of information sources that need to be merged. This includes both visible (e.g., shapes,
colours) and invisible (e.g., textures, structural details, internal components) information, which can be
collected through diverse means. For Human DTs, capturing goes beyond static 3D forms to include
subtle movements, expressions, and physiological states. The overarching problem definition is how to
develop robust, automated data capturing and merging pipelines that can efficiently and accurately
realize DTs of real-world assets and complex 3D scenes, including dynamic human environments.
Current TRL for these technologies ranges from 3-6, with a low end-user adoption rate, indicating that
significant development is still required for widespread practical implementation.

**Research and Innovation Objectives:**
- Develop advanced sensor fusion and data integration pipelines for seamlessly merging
  heterogeneous data sources to create comprehensive and accurate 3D DT models of real-world
  assets, complex scenes, and human beings.
- Research and implement automated segmentation and reconstruction techniques, including AI
  based methods and Neural Radiance Fields (NeRF) and Gaussian Splatting, for cost-effective
  and highly detailed capture of large areas, complex environments, and dynamic human subjects.
- Focus on methodologies that enhance the semantic enrichment of captured 3D data, enabling
  the automatic extraction and integration of functional and contextual information to create more
  intelligent and usable DT representations.

### 2e.8 Physics based modelling

While generative AI models can today produce visually realistic 3D animations, most applications
demand traceable, accurate, and explainable physics-based calculations of behaviour. Accurate
physics-based (i.e. explainable based on an implementation or discretisation of the laws of physics)
models, including foundational models, enable the solution of real-world problems within VW in an
explainable and rapid manner. This involves model hybridisation, combining both inductive (data-driven)
and deductive (physics-based) models to create robust DTs capable of calculating parameters such as
carbon footprint, offering detailed insights into complex systems, and predicting physiological responses in Human Digital Twins.

**Problem Definition and Research Gap:**
The critical research gap lies in developing scalable, physics
informed simulation frameworks that enable accurate and robust modelling of complex, coupled
systems for real-time DT applications. The challenge is balancing the computational intensity of high
fidelity physics simulations with the need for real-time performance. This necessitates advanced
techniques for reducing computational cost while maintaining predictive accuracy and integrating
diverse physics domains within a unified simulation environment. There is a need for robust frameworks
that can seamlessly combine data-driven approaches with fundamental physics principles, especially
for predictive modelling and optimisation in dynamic systems.

**Research and Innovation Objectives:**
- Develop scalable, physics-informed simulation frameworks that enable accurate and robust
  modelling of complex, coupled systems for real-time DT applications across diverse domains,
  including industrial assets and human physiology, focusing on efficient numerical solvers and
  parallel computing architectures.
- Research and implement advanced model hybridisation techniques that seamlessly combine
  inductive (data-driven) and deductive (physics-based) models to create high-fidelity, predictive
  DTs capable of tasks like carbon footprint calculation, complex system behaviour simulation,
  and personalized physiological prediction.
- Explore and integrate novel methodologies for optimizing the computational cost of physics
  based simulations while maintaining predictive accuracy, enabling their widespread adoption in
  dynamic and safety-critical DT use cases.

### 2e.9 Digital Twin engineering, connectivity to real world assets and updates

DTs are inherently complex software systems that demand sophisticated engineering approaches to
ensure their efficacy, reliability, and longevity. The development of dedicated tools and methods for DT
engineering is crucial for enabling their robust validation, promoting reusability across different
applications, facilitating seamless interoperability with other systems, and ensuring their composability
into larger, more intricate twin ecosystems. Furthermore, effective engineering practices are essential for
managing the continuous evolution and maintenance of DTs throughout their lifecycle, thereby
safeguarding their long-term value and relevance. Without proper engineering foundations, the promise
of DTs as dynamic, adaptable entities cannot be fully realized.

**Problem Definition and Research Gap:**The current landscape of DT implementation is largely
characterized by ad-hoc approaches, which severely restrict their potential for rigorous validation,
widespread reuse, sustainable maintenance, and efficient evolution. This fragmented development also
impedes the opportunistic federation of Digital Twins (DTs), limiting their ability to combine and
collaborate for more comprehensive insights and capabilities. The critical research gap lies in the urgent
need for a comprehensive suite of dedicated tools and methods. This includes the establishment of
robust DT software architectures, the definition of standardized DT interfaces to enable seamless
communication, and the development of intuitive programming abstractions and interfaces for creating
and integrating VW within the DT context. Moreover, there is a pressing need for advanced validation and
verification techniques specifically tailored to the unique complexities of DTs to ensure their accuracy and reliability.

**Research and Innovation Objectives:**
- To develop low-code platforms and advanced modelling concepts and languages that streamline
  the engineering of DTs, fostering rapid prototyping and deployment.
- To establish comprehensive DevOps actions and pipelines for the continuous integration,
  validation, deployment, and evolution of DTs, ensuring agility and responsiveness to change.
- To research and define architectural patterns, quality assurance mechanisms, and deployment
  strategies for DTs, focusing on uncertainty quantification, fidelity assessment, and security considerations.

### 2e.10  Digital Twin verification and (continuous) validation

The trustworthiness and utility of a DT are intrinsically linked to its accuracy and credibility as a
representation of its physical counterpart. DT verification and continuous validation are paramount in
ensuring that this alignment is maintained throughout the entire lifespan of the asset. This research area
focuses on developing robust methods and tools to validate and verify that the virtual environments
within a DT are not only safe and accurate but also consistently reflect the real-world system's state and
behaviour. By continuously monitoring and adapting the DT, these efforts ensure that it remains a reliable
source of information. Furthermore, automated validation processes reduce manual effort, enhance
efficiency, and enable early detection of system changes, which is critical for maintaining the twin's
value and preventing erroneous conclusions. The ability of DTs to accurately track spatio-temporal
dynamics and quantify fidelity is also crucial for advanced analytics, safety protocols, and the anchoring
of AR applications, thereby expanding their utility across various industrial and operational contexts.

**Problem Definition and Research Gap:**
Despite the critical importance of accuracy, current DT
development significantly lacks rigorous validation frameworks, making it challenging to confidently rely
on their outputs. A major research gap exists in developing comprehensive methodologies for validating
DTs that are continuously evolving and increasingly driven by AI, necessitating new approaches for
benchmarking and standardisation. The current state of model updating often involves labour-intensive
manual processes, highlighting a critical need for research into reliable online identification and model
updating techniques to ensure real-time accuracy and adaptability, including enhanced estimation
approaches for DT parameters and structures. Furthermore, achieving high-precision indoor localisation
and effective spatio-temporal data management remains a significant challenge, requiring
advancements in sensor fusion and algorithms. Finally, there is a clear need for robust methods to
quantify the fidelity of a DT, providing a clear measure of how closely it replicates reality. It is
acknowledged that this research topic benefits from collaboration with the ADRA partnership and that
any double work is to be prevented.

**Research and Innovation Objectives:**
- To develop adaptive system parameter/input/load identification methods, real-time data
  assimilation techniques, and machine learning models for drift detection and automated, safe updates of DT models.
- To create advanced spatio-temporal localisation algorithms, including SLAM and geospatial
  databases, coupled with fusion methods for high-precision indoor tracking and trajectory analysis.
- To define robust key performance indicators and develop automated testing frameworks,
  statistical methods, and machine learning approaches for continuously assessing DT fidelity and uncertainty.

### Interoperability and standardisation

### 2e.11 Open standards for Digital Twins

The proliferation and effective utilisation of DTs across diverse industries are fundamentally dependent
on the establishment and widespread adoption of open standards. These standards provide a crucial
common language and a shared set of protocols and specifications, guiding the design and development
of DT solutions. By ensuring robust data and model interoperability, integrity, and consistency, open
standards overcome the current fragmentation, enabling seamless exchange of information and
collaboration. Furthermore, the development of standards that incorporate mechanisms for integrating
diverse Digital Twins (DTs), progressing towards a "DT of Digital Twins," and for assessing the quality of a
DT solution is vital for fostering a coherent and scalable ecosystem. Standardized domain-specific
languages are essential to ensure the semantic meaning of data across exchanges, allowing the VW to
contain structured data for direct processing and enabling DTs to provide semantic self-descriptions for
dynamic system coupling, thus facilitating the creation of adaptive Systems-of-Systems.

**Problem Definition and Research Gap:**
A significant impediment to the widespread adoption and
integration of DTs is the pervasive lack of universally recognized standards related to DT terms and
architectures. This deficiency severely hampers the interoperability of data and models among different
DTs. The intricate problem of integrating disparate DTs, a challenge that extends far beyond mere model
integration, has received insufficient exploration. This complexity is compounded by the interdisciplinary
nature of DTs leading to a profound heterogeneity of underlying technologies. While certain standardized
technologies like Functional Mock-up Unit / Functional Mock-up Interface (FMU/FMI), OPC Unified
Architecture (OPC UA) and the Asset Administration Shell (AAS) serve as foundational enablers for
specific components of a DT's architecture, they do not encompass the full spectrum of DT functionality.
Moreover, these technologies are often confined to specific fields, whereas the DT concept is inherently
domain-agnostic, necessitating broader and more comprehensive standardisation efforts.

**Research and Innovation Objectives:**
- To advance the international standardisation of the Asset Administration Shell (AAS), FMU/FMI,
  OPC UA and their associated sub model templates, ensuring comprehensive coverage of DT
  architectural aspects and promoting industry-wide adoption.
- To research and develop semantic technologies, including ontologies and knowledge graphs, and
  leverage large language models to enable robust semantic representation, integration, and
  cross-modal information retrieval for DTs.
- To establish standards for assessing DT quality and fidelity, and to investigate middleware
  solutions for robust real-virtual synchronisation, facilitating seamless integration and
  coordination of complex DT systems.

## Research topics for digital human representations

The evolution of digital human representations, encompassing human DTs, avatars, and humanistic
agents, marks a significant frontier in our digital future. These distinct virtual representations of humans
offer profound opportunities, from revolutionizing personalized medicine and product design to
enhancing virtual interactions and serving as intuitive interfaces for AI. While their potential is immense,
unlocking their full capabilities requires dedicated investment in addressing fundamental research gaps.
This section outlines critical areas for research and innovation, emphasizing their importance to both
researchers and policymakers, and paving the way for a new era of human-centric digital experiences.

### Immersion, devices, sensing and Visualisation

### 2e.12 Sensing systems for human behaviour
Accurate and comprehensive human behaviour sensing is foundational for creating truly immersive
digital humans. Full-body motion tracking enables natural, intuitive interactions in virtual environments,
seamlessly bridging the physical and digital for AR/VR experiences. Non-invasive wearable sensors
continuously capture physiological and movement data, allowing early detection of subtle health
changes and facilitating personalized wellness feedback. Moreover, virtual sensing, a crucial
advancement, infers hidden states (e.g., pain levels, internal forces, fatigue) by fusing physics-based
models with sensor inputs, extending human sensing for safer decision-making in virtual environments
and enhancing real-world health monitoring.

**Problem Definition and Research Gap:**
Achieving high-fidelity 3D human pose estimation without
cumbersome suits or markers remains challenging. Camera-based tracking often suffers from
occlusions and environmental dependencies, while current VR solutions lack full-body motion capture.
There's a critical gap in reliable, affordable, and minimally intrusive real-time whole-body tracking.
Integrating data from diverse sensors (e.g., IMUs, depth cameras) is complex, with noise and calibration
issues demanding robust multi-sensor fusion algorithms for precise motion tracking in everyday settings.
Non-invasive wearables, while valuable, often provide limited data streams and can be unreliable,
necessitating research into expanding gatherable bio-signals and improving derived metric reliability.
Critically, interpreting continuous wearable data into meaningful health insights and DT updates is
underdeveloped. Finally, collecting sensitive human data via cameras and always-on wearables raises
significant privacy concerns, requiring advancements in data security, continuous user consent, and
robust governance frameworks for biometric data.

**Research and Innovation Objectives:**
- Develop advanced deep learning models and hybrid AI frameworks for marker-less motion
  capture, combining data-driven pose predictions with kinematic models for enhanced stability
  and accuracy across diverse environments.
- Create lightweight sensor suits and sophisticated sensor fusion algorithms integrating various
  technologies (e.g., IMUs, electromagnetic trackers, ultrasound) for comprehensive, always
  available motion data, with solutions exploring mobile implementations of pose estimation.
- Design and implement virtual sensing technology leveraging non-invasive wearable data with
  physiological models to estimate unmeasured factors, providing richer health insights and
  exploring on-device processing and secure enclaves for privacy-preserving data management.

### 2e.13 Data acquisition for human Digital Twin creation

The utility of a human DT is directly proportional to its data richness and quality. Acquiring diverse data -
from genomic information to daily activity logs - creates a comprehensive individual view, paramount for
precision medicine. This integrated approach moves beyond "one-size-fits-all" healthcare, enabling
personalized models reflecting unique biological and lifestyle characteristics. Multi-source data
integration facilitates early health issue detection and timely interventions. Rich data feeds are essential
for safe "what-if" simulations, allowing clinicians to virtually test drug responses or therapy reactions
without patient risk. Crucially, this data acquisition directly addresses health data silos by creating
robust frameworks to link disparate datasets into a coherent, unified representation, enhancing patient
care and accelerating biomedical research. Technology development will strongly support activities
described in application section 1b.

**Problem Definition and Research Gap:**
A research gap is seamlessly combining disparate data types
into a single, coherent human DT model. There's a pressing need for standardized protocols and
advanced algorithms to fuse these multimodal data streams in real-time for consistent twin updates.
Furthermore, human DTs demand high-quality data, but real-world inputs often have incompleteness,
noise, or gaps. Robust methods are needed to handle missing or uncertain data, ensuring twin
functionality. Continuous data curation and rigorous validation protocols are also lacking. Aggregating
sensitive personal data raises significant privacy and security concerns. Research must create
innovative governance frameworks and technical solutions to utilize data while meticulously preserving
privacy, alongside transparent consent mechanisms to build patient trust. Many existing health IT
systems aren't designed for continuous data flows, highlighting a gap in creating real-time pipelines from
devices/EHRs to the twin. Aligning data of different frequencies and determining optimal update
frequencies are significant research questions. Lastly, efficiently generating personalized baseline
models from raw data remains an underdeveloped area.

**Research and Innovation Objectives:**
- Develop integrated platforms and advanced algorithms to ingest and synthesize diverse data
  streams into scalable infrastructures, ensuring real-time updates through sensor fusion techniques.
- Create automated toolchains for constructing individual-specific models from raw data,
  encompassing image processing, patient-specific geometry setup, and automated parameter
  identification to streamline personalisation.
- Establish robust data governance frameworks and technical solutions for privacy preservation,
  including automated data quality checks, cross-validation mechanisms, and comprehensive
  twin validation suites to certify trustworthiness and accuracy.

### Intuitive, real-time user interaction

### 2e.14 Behavioural modelling

Multimodal emotion recognition and stress detection are crucial for building
sophisticated, responsive digital humans, significantly enhancing our ability to understand user states
and intentions. This leads to more natural, engaging, and effective virtual interactions. By detecting
emotional cues and stress levels, digital humans can adapt responses and the virtual environment,
improv user satisfaction and build trust. This is vital in applications requiring real-time understanding of
user feelings, such as education, healthcare (therapeutic interventions), or disaster management where
timely, adaptive interventions are essential. Sensing and responding to emotional states contribute to
greater situational awareness and enables personalized, empathetic digital interactions.

**Problem Definition and Research Gap:**
A primary research gap in multimodal emotion recognition and
stress detection is the challenge of accurately and swiftly recognizing emotions across diverse cultures
and contexts while rigorously preserving user privacy. Integrating multiple modalities (e.g., visual, audio,
physiological signals) promises performance improvement but introduces complexities in data
collection and input synchronisation. Robust algorithms are needed to interpret subtle emotional cues
from various sensory data streams and generalize across different demographics and situations.
Furthermore, the sensitive nature of emotional and physiological data necessitates advanced privacy
preserving techniques, ensuring ethical use with appropriate anonymisation or pseudonymisation of training data.

**Research and Innovation Objectives:**
- Develop advanced models that effectively combine visual (facial expressions, eye tracking),
  audio, and physiological sensor signals for robust multimodal emotion and stress detection
  across diverse user populations and contexts.
- Research and implement early and late fusion techniques for integrating multimodal data
  streams, optimizing synchronisation and leveraging complementary information for improved
  accuracy in emotion recognition.
- Design and validate privacy-preserving prediction model generation methods, including
  anonymisation and pseudonymisation of training data, to ensure ethical and secure handling of
  sensitive user emotional data.

### Authoring and experience design

### 2e.15 Human Digital Twin modelling

Human DTs represent a transformative approach in healthcare, enabling the creation of dynamic, high
fidelity digital replicas of individual patients. These twins integrate multimodal data—ranging from
genomics and imaging to real-time physiological signals—to simulate and predict health outcomes,
optimize treatment plans, and support surgical planning. By allowing clinicians to test interventions
virtually before applying them in real life, human DTs promise to enhance precision medicine, reduce
risks, and improve patient outcomes. Their potential spans from personalized drug response prediction
to virtual surgery rehearsals, offering a paradigm shift in how care is delivered and optimized.

**Problem Definition and Research Gap:**
Despite their promise, human DTs face critical challenges in
achieving the necessary accuracy, adaptability, and clinical trustworthiness. The primary research gap
lies in the development of scalable and clinically validated DT frameworks that can accurately reflect the
complexity and variability of human physiology. This includes integrating heterogeneous data sources,
ensuring model interpretability, and maintaining up-to-date representations of the patient’s state.
Furthermore, ethical and regulatory frameworks must evolve to address the implications of using such
detailed personal models in clinical decision-making. The field requires robust methodologies for
validation, personalisation, and secure deployment of human DTs in real-world healthcare
environments.

**Research and Innovation Objectives:**
- Develop integrated frameworks for multimodal data fusion (e.g., imaging, genomics, bio signals)
  to construct and continuously update high-fidelity Human DTs.
- Advance predictive modelling techniques that enable personalized simulation of treatment
  outcomes and surgical scenarios, ensuring clinical relevance and interpretability.
- Establish rigorous clinical validation pipelines and regulatory pathways to ensure the safety,
  efficacy, and ethical deployment of HDTs in healthcare settings.
- Investigate privacy-preserving architectures and ethical governance models to manage consent,
  data ownership, and the societal implications of HDT use in medicine.