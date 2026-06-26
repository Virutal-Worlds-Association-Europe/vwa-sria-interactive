# 2d Standardisation and interoperability

The European Commission's vision for Virtual Worlds (VW) and Web 4.0 underscores a critical need for
open standards and global governance. This strategic approach aims to steer the next technological
transition towards an open, secure, trustworthy, fair, and inclusive digital environment for all EU citizens,
businesses, and public administrations, preventing market dominance by single entities and fostering a more equitable landscape.

## Foundations for interoperability

### European vision and strategic imperatives

The European Commission's strategy for Web 4.0 and VW is rooted in the ambition to shape a digital
future defined by openness and global governance. This involves actively supporting open standards to
ensure fair and equitable governance, preventing large organisations from monopolising the burgeoning
digital sphere. Fundamentally, this strategy is designed to create a digital environment that is open,
secure, trustworthy, fair, and inclusive, benefiting EU citizens, businesses, and public administrations alike.

These strategic objectives directly align with the overarching goals for Europe's digital future. Firstly,
ensuring fair and equal governance through open standards and interoperability is paramount to
preventing market dominance, fostering a level playing field, and lowering entry barriers for small and
medium-sized enterprises (SMEs) and innovators. Secondly, interoperability is a foundational
prerequisite for cultivating a digital environment that citizens can trust, ensuring security and privacy by
design, promoting fairness in data access and economic participation, and guaranteeing universal
inclusivity and accessibility. Finally, by developing robust European standards and interoperable
frameworks, the EU aims to enhance its digital autonomy, reducing dependency on non-EU platforms
and technologies, thereby empowering European actors and upholding European values.

### Foundational challenges for a cohesive ecosystem

Addressing the infrastructural challenges inherent in VW is crucial for fostering a cohesive and
interconnected ecosystem. Current research gaps include the urgent need for common data formats
and protocols that enable seamless information exchange across diverse systems and platforms.
Specifically, Digital Twin (DT) exchange mechanisms must be standardised to ensure broad compatibility
and effective integration across various applications. Furthermore, the development of robust API
integration is essential to facilitate communication and interaction among diverse systems within these
complex virtual environments. Overcoming these fundamental challenges is key to ensuring that
different technologies and platforms can collaborate harmoniously, driving the overall progress and
accessibility of VW. This document, therefore, establishes a Strategic Research and Innovation Agenda
(SRIA) for building interoperable systems within the context of the VW Programme, diligently following
the best practices outlined in the European Interoperability Framework (EIF). Standards are recognised
as a primary means for achieving interoperable systems, and this agenda elaborates on the
characteristics that define a good standard.

### Guiding principles for European interoperability

The European Interoperability Framework (EIF), published in 2018, articulates interoperability as the
capacity of organisations to interact towards mutually beneficial goals. This interaction involves sharing
information and knowledge through their supporting business processes, facilitated by the exchange of
data between their Information and Communication Technology (ICT) systems. A significant impediment
to progress in the digital single market is precisely this lack of interoperability. By leveraging the EIF to
guide European interoperability initiatives, the aim is to foster a coherent European interoperable
environment, thereby facilitating the seamless delivery of services that operate effectively, both within
and across organisations or domains. The EIF provides a commonly agreed approach to delivering
European public services in an interoperable manner, defining essential interoperability guidelines
through common principles, models, and recommendations.

The EIF also introduces the concept that interoperability is inherently layered and interdisciplinary. In
2018, it formalised this by identifying four distinct layers: the legal, organisational, semantic, and
technical layers, all of which require integrated governance. Furthermore, the concept of common
European dataspaces, exemplified by reference architectures such as the IDS Reference Architecture
Model (IDS-RAM), outlines key roles and components for data ecosystems, including data providers,
consumers, and brokers. It defines interactions within a sovereign data-sharing ecosystem, strongly
aligning its interoperability mechanisms across the semantic, technical, organisational, and legal layers
with the principles of the EIF. It is also important to acknowledge the inherent tension between achieving
deep semantic richness for specific product functionalities and ensuring broader interoperability
through the reuse of existing standard domain models; the value-adding use case must be clearly
defined to navigate this balance effectively.

## Foundations for interoperable standards

### Standards to interoperability

Standards serve as a primary method for achieving interoperable systems, with their development
typically reliant on consensus among stakeholders. While standards offer the advantage of broad
compatibility, there is an inherent tension between striving for the richest possible semantics for a highly
specific product and reusing existing standard domain models for the sake of wider interoperability.
Products are often designed with maximum specificity, yet successful interoperability often necessitates
a clear definition of the value-adding use case to balance specific semantic richness with broader applicability.

### Categorisation of standards

Standards can be broadly categorised into several high-level types. Domain vocabulary terms constitute
reusable terminology crucial for semantic interoperability, ensuring that organisations interpret concepts
uniformly. Examples of these include the use of UML models, OWL, RDFS, and SKOS. Application
profiles (schema), on the other hand, explain how specific functionality is coded against particular
properties. They enable data providers to understand precisely what data is required for a certain client
to operate effectively. These profiles are consumer-oriented and promote the feature-based reuse of API
patterns, with examples such as ActivityPub and Linked Data Event Streams. Finally, an Implementation
Model is a document designed to assist consumers in picking components in an orthogonal, complementary manner.

### Evolvability and transferability: Cornerstones of resilience

The principles of evolvability and transferability are critical mechanisms for counteracting the
fragmentation caused by a multitude of isolated standards, actively driving their convergence to achieve
truly comprehensive and lasting interoperability.

Evolvability refers to a standard's capacity to adapt and change over time in response to new
technological advancements, evolving user requirements, and emerging use cases, without
necessitating complete overhauls or causing widespread breakage. This involves utilising mechanisms
for versioning, extension, and modularity, which allow components to evolve independently and thereby
ensure the long-term viability and continued relevance of interoperability frameworks.

Transferability, conversely, addresses the ability to apply or adapt standards, knowledge, components,
and best practices from one domain, context, or system to another. This includes the complex process of
merging standards from different domains into a cohesive meta-standard. Both evolvability and
transferability are indispensable for building a resilient and dynamic VW ecosystem capable of effective
growth and integrating diverse contributions efficiently.

### Sustainability: Enduring and inclusive interoperability

Sustainability is essential to ensuring that interoperable systems remain viable over time—technically,
economically, socially, and environmentally. Standardisation promotes sustainability by reducing
duplication, promoting reuse, and enabling more energy-efficient architectures. Efficient-by-design
systems minimise waste—not only in computation but also in infrastructure and development cycles—
supporting lower carbon footprints and longer-lasting technologies. Economically, sustainable
interoperability reduces barriers to entry and long-term maintenance costs. It enables smaller actors
and under-resourced regions to participate without relying on expensive, proprietary platforms. However,
this requires the emergence of new business models that prioritise shared value, service-based
innovation, and long-term collaboration over short-term control or exclusivity. Community-led
ecosystems like Linux or Blender demonstrate how open participation, distributed governance, and
modular standards can support economic resilience and technological longevity. Their models show
how sustainability thrives when economic incentives align with openness, adaptability, and shared
stewardship. Therefore, sustainable interoperability must support building ecosystems that are efficient,
equitable, and capable of evolving without extracting disproportionate social, environmental, or economic cost.

## Research topics for standardisation and interoperability

### Core standardisation and semantic foundations

#### 2d.1 Evolvability and cross-domain transferability

This research topic addresses the critical need for standards to adapt gracefully to continuous
technological advancements and emerging use cases without causing systemic breakage. It also
focuses on enabling the transfer of successful standard features and knowledge across different
domains. This is vital for counteracting fragmentation in the VW ecosystem, fostering convergence
among disparate systems, and ultimately building resilient, future-proof interoperability that can sustain long-term relevance.

**Problem Definition and Research Gap:**
There is a notable absence of formal "meta-standards" or
established methodologies for designing standards that can evolve gracefully, supporting robust
versioning, extension, and deprecation. Current approaches lack systematic methods for transferring
features between existing standards or merging them into more comprehensive "meta-standards,"
thereby hindering reuse and convergence. Furthermore, there is an insufficiency of metrics and
frameworks to quantitatively assess standard evolvability, measure the impact of transferability, or guide
the design of consumer-oriented, composable standards that can be combined flexibly. For example, a
key question is what composability standards (e.g. WebXR extensions) will let disparate studios publish
interactive scenes that interoperate in a shared virtual event.

**Research and Innovation Objectives:**
- Develop formal models and "meta-standards" for specifying standard evolvability, encompassing versioning, defined extension points, and comprehensive lifecycle management protocols
- Establish methodologies and toolkits for systematic cross-domain standard analysis, semantic mapping for feature transfer, and pathways for convergence towards composable "meta-standards"
- Define robust metrics to quantify evolvability and transferability effectiveness, and promote design patterns for modular, consumer-oriented standards and their flexible composition

#### 2d.2 Semantic and data interoperability frameworks

This topic is crucial for enabling structured and consistent knowledge representation across diverse VW
platforms and their ecosystems. It facilitates real-time reasoning, efficient content discovery, dynamic
behavioural consistency, and seamless data exchange, all of which are essential for creating fluid UXs
and ensuring the portability of digital assets within and between virtual environments.

**Problem Definition and Research Gap:**
A significant gap exists due to the lack of universally accepted
semantic frameworks, ontologies, and knowledge graphs capable of effectively capturing temporal
complexities, evolving world states, and dynamic relationships inherent in virtual environments. Current
VW ecosystems are fragmented and isolated, characterised by incompatible data models that hinder
cross-platform interoperability and shared understandability. Additionally, there is insufficient
standardisation for semantic self-description and context-awareness in DT and VW, making it
challenging to interpret data reliably across different systems. One fundamental question is what
minimal, extensible ontology or meta-model will let heterogeneous industrial assets register and sync in
real-time across multiple platforms.

**Research and Innovation Objectives:**
- Develop adaptive, linked ontologies and knowledge graph standards that integrate both symbolic and statistical AI elements for robust knowledge representation
- Foster federated learning and semantic reasoning protocols to enable decentralised knowledge sharing while rigorously preserving data privacy
- Define semantic data schemas and cross-modal retrieval frameworks to ensure unified access to heterogeneous content across VW
- Develop a collaboratively constructed, pan-European glossary for the immersive sector, standardizing terminology across disciplines and stakeholders. This fosters semantic coherence and interdisciplinary communication

#### 2d.3 Standardized interfaces, APIs, and protocols

This research ensures the consistent integration and synchronisation of diverse sensory inputs, including
visual, audio, and physiological data, along with AI-driven components and real-time inference pipelines
across a variety of devices and platforms. This interoperability is foundational for delivering immersive,
low-latency, and scalable extended reality (AR/VR/XR) experiences, making interactions fluid and
responsive.

**Problem Definition and Research Gap:**
Despite advancements, there is an absence of unified
multimodal fusion frameworks and standardised synchronisation protocols, leading to fragmentation in
how different sensory data streams are combined and coordinated. A significant gap exists in runtime
API standards that can orchestrate distributed AI inference effectively across heterogeneous edge-cloud
infrastructures and diverse device hardware accelerators. Furthermore, current standards are
insufficient for cross-modal adaptation and embedding alignment among foundation AI models, which is
crucial for creating cohesive and intelligent virtual environments. A key question here is how to architect
latency-compensated interaction protocols that preserve causality ("who touched what when") in
synchronised audiovisual performances and collaborative tasks.

**Research and Innovation Objectives:**
- Create interoperable data formats, synchronisation methods, and standardised API layers specifically designed for multimodal inputs and AI inference in XR systems
- Develop hybrid AI architectures, such as symbolic-statistical and LSTM-RF hybrids, alongside multimodal adaptation pipelines, supported by open benchmarks for performance evaluation
- Enable cross-platform and cross-device spatial anchoring techniques, coping with differences in sensor fidelity and calibration and possible inconsistent coordinate systems
- Integrate edge-cloud orchestration standards that facilitate dynamic task partitioning and efficient model migration across distributed computing resources

### Infrastructure and system runtime interoperability

#### 2d.4 Runtime interoperability and conformance testing for Extended Reality

This research guarantees consistent UXs and ensures the trustworthy and secure operation of VR/XR
systems. It achieves this by enforcing standardised runtime environments, codecs, identity models, and
interaction models, which are critical for building reliable and scalable immersive ecosystems.

**Problem Definition and Research Gap:**
Despite the existence of standards like OpenXR and WebXR,
fragmentation persists within the XR ecosystem, exacerbated by a lack of comprehensive conformance
and certification frameworks. There are no widespread benchmarking tools that effectively combine
objective technical performance metrics with subjective user-centric measures. The variability in device
implementations significantly impairs seamless interoperability, impacts quality, and erodes user trust in XR experiences.

**Research and Innovation Objectives:**
- Develop scalable, automated benchmarking and certification suites that cover key performance aspects such as latency, rendering quality, codec performance, identity management, and multimodal interaction
- Integrate UX (Quality of Experience) metrics through methodologies like Living Labs and large-scale field studies to provide holistic performance assessments
- Promote cooperative initiatives among standard bodies to enforce compliance and drive ecosystem-wide adoption of interoperability standards

#### 2d.5 Standardisation of network and compute infrastructure

Robust, low-latency, and secure network and compute standards are vital for enabling real-time
synchronisation, distributed rendering, and scalable multi-user immersive experiences. This is crucial
across heterogeneous infrastructures, including cloud, edge, and on-device computing, ensuring that
VW and DTs can operate seamlessly and efficiently.

**Problem Definition and Research Gap:**
A significant research gap lies in the currently undefined Quality
of Service (QoS) and latency requirements specifically tailored for DTs and synchronous XR interactions.
There is a fragmentation of cloud-edge compute standards and a lack of effective interoperability layers
between these different computing paradigms. Furthermore, insufficient orchestration protocols exist for
dynamic allocation of resources in real-time XR workflows, hindering scalable and responsive immersive experiences.

**Research and Innovation Objectives:**
- Define comprehensive network and compute performance benchmarks specifically tailored to the demanding requirements of immersive use cases
- Develop interoperable cloud-edge middleware and orchestration standards that facilitate seamless distribution of computation and data
- Create adaptive resource management frameworks capable of ensuring seamless end-to-end performance across distributed VW and Digital Twin deployments

#### 2d.6 Secure, decentralized data sharing and interoperability frameworks

This research is essential for enabling secure, trustworthy, and privacy-preserving data exchange across
industrial, healthcare, and virtual ecosystems. It reduces the risks of vendor lock-in and ensures data
sovereignty, empowering users and organisations with greater control over their information in
interconnected digital environments.

**Problem Definition and Research Gap:**
Centralised data exchanges currently lack sufficient security,
traceability, and interoperability with emerging decentralised frameworks. There are no mature,
standardised protocols that effectively integrate blockchain, distributed ledgers, and semantic AI for
robust cross-domain interoperability. Significant challenges remain in securely blending heterogeneous
data types across organisational boundaries, which is crucial for collaborative and comprehensive data
utilisation. A pertinent question here is whether federated learning over multiple industrial DTs preserve
data privacy while improving cross-company predictive-maintenance models?

**Research and Innovation Objectives:**
- Integrate blockchain-enabled provenance and access control standards into data sharing frameworks to ensure data integrity and user control
- Develop semantic data translation layers and privacy-preserving computation techniques, such as federated learning and edge AI, for secure and efficient data processing
- Advance Web 4.0 protocols to facilitate the linking of real and Virtual Worlds via open, decentralised architectures, promoting data fluidity and sovereignty

### User content and collaborative experience

#### 2d.7 Cross-platform interoperability of avatars and digital humans

This research is vital for enabling seamless digital identity portability, consistent social presence, and
privacy-compliant representation of users through avatars and digital humans across multiple VW and
applications. This fosters user agency and a cohesive digital identity experience.

**Problem Definition and Research Gap:**
A significant research gap is the fragmentation of avatar data
formats, behaviour models, and identity schemas, which severely limits portability and unified
representation across different platforms. There is a lack of interoperable frameworks for multimodal
data fusion, which is essential for integrating motion capture, physiological data, and behavioural
patterns into comprehensive human models. Furthermore, insufficient ethical AI frameworks exist to
ensure privacy, mitigate bias, and provide transparent management of avatar autonomy. A critical
question is which lifecycle-management standards for people-centric twins (avatars, biometrics,
behavioural profiles) guarantee portability, consent management and data sovereignty across platforms.

**Research and Innovation Objectives:**
- Standardise avatar data formats, behaviour control APIs, and interoperable identity management protocols to ensure consistent representation and portability
- Extend Digital Twin standards to incorporate the cognitive and physiological dimensions of digital humans, enabling more holistic digital representations
- Integrate privacy-preserving frameworks and ethical auditing tools directly within avatar platforms to address ethical concerns proactively

#### 2d.8 Collaborative authoring and versioning frameworks

This topic addresses the need to support collaborative, multi-user content creation and scene
management within VW, significantly enhancing productivity. It also enables the seamless sharing,
reuse, and evolution of VW assets across heterogeneous devices and platforms, fostering efficiency and
innovation in content development.

**Problem Definition and Research Gap:**
Existing authoring tools commonly lack integrated, XR-tailored
version control systems and real-time collaboration features that function effectively across multi
device environments. Proprietary and incompatible content formats and scripting languages fragment
VW ecosystems, severely hindering content portability and reuse. Furthermore, there is limited unified
support for scalable authoring workflows that can accommodate diverse levels of expertise through low
code/no-code solutions and AI-augmented tools.

**Research and Innovation Objectives:**
- Develop expressive versioning systems with XR scene-aware tracking, robust merge and revert functionalities, and integrated privacy controls to support cross-platform collaboration
- Promote open export/import standards for 3D assets and behavioural scripts, such as glTF and OpenXR, to enhance content portability
- Build interoperable, modular authoring frameworks that seamlessly integrate AI assistance and facilitate real-time multi-user editing experiences

#### 2d.9  Interoperability frameworks for collaboration and real-time interaction

This topic focuses on enabling secure, low-latency, and synchronous multi-user experiences, which are
vital for social, educational, industrial, and healthcare applications within VW. Standardisation in this
area facilitates seamless interactions and ensures scalability across diverse networks and devices,
enhancing the overall collaborative potential of virtual environments.

**Problem Definition and Research Gap:**
The landscape of multi-user communication tools is currently
fragmented by proprietary solutions, limiting effective cross-platform collaboration. There are no unified
standards for synchronisation, session management, moderation, and the exchange of multi-modal
interaction data, leading to inconsistent experiences. Significant challenges persist in ensuring Quality of
Service (QoS) and accessibility in heterogeneous and bandwidth-constrained networks, which can
degrade real-time multi-user interactions. A key question is how to architect latency-compensated
interaction protocols that preserve causality ("who touched what when") in synchronised audiovisual performances and collaborative tasks.

**Research and Innovation Objectives:**
- Define open, adaptive communication protocols, potentially extending existing standards like WebRTC and MQTT, specifically tailored for immersive multi-user scenarios
- Develop APIs that support role-based permissions, moderation functionalities, and real-time feedback mechanisms within collaborative virtual environments
- Establish consistent event schemas and data formats for the synchronised exchange of gestures, voice, avatar states, and shared resources in multi-user settings

#### 2d.10 Frameworks for AI-generated content and ethical governance

This research ensures the authenticity, trustworthiness, and ethical compliance of AI-generated content
and avatars within VW, impacting domains such as culture, media, industry, and healthcare. Establishing
these standards is vital for fostering user trust and broad adoption of AI-generated assets.

**Problem Definition and Research Gap:**
There is a significant lack of standardised frameworks for
validation, explainability, provenance tracking, and bias mitigation specifically for AI-generated assets.
Fragmented ethical and governance frameworks currently complicate the adoption and trust of AI
generated content. Furthermore, there is insufficient integration of ethical auditing mechanisms directly
into content creation and curation tools, making it challenging to ensure compliance throughout the
lifecycle of AI-generated assets.

**Research and Innovation Objectives:**
- Develop comprehensive metadata schemas, blockchain-based provenance frameworks, and
  human-in-the-loop validation models for AI-generated content.
- Create ethical AI toolkits that promote fairness, transparency, and privacy, integrated seamlessly
  into both authoring and runtime platforms. 
- Foster participatory governance models and implement continuous compliance auditing
  mechanisms to ensure ongoing ethical adherence for AI-generated content.

#### 2d.11 Accessible and inclusive interoperability standards

This research ensures that VW are accessible to persons with disabilities, older adults, and users from
diverse linguistic and cultural backgrounds, thereby significantly reducing digital inequalities.
Establishing these standards is crucial for fostering an inclusive XR ecosystem.

**Problem Definition and Research Gap:**
A key research gap is the lack of interoperability protocols that
effectively support assistive technologies and alternative access methods within virtual environments.
Current systems often have inadequate multilingual and contextual user guidance, and insufficient
avatar representation standards for comprehensive inclusivity. Furthermore, there is a missing
framework for standardised assessment and certification of accessibility compliance in immersive
content, making it difficult to ensure consistent accessibility across platforms.

**Research and Innovation Objectives:**
- Develop comprehensive accessibility certification standards and integration protocols, including
  robust support for features like subtitles and sign language avatars. 
- Standardise multi-modal authentication and interaction methods that are fully compatible with a
  wide range of assistive devices. 
- Build authoring toolkits and real-time usability testing frameworks designed to ensure consistent
  accessibility compliance across diverse XR platforms. 

### Domain-specific interoperability
#### 2d.12 Interoperability standards for Digital Twins and their ecosystems

The development of open, interoperable DT standards is essential for enabling cross-domain integration,
real-time synchronisation, federated system composition, and collaborative workflows. These
capabilities are fundamental for the widespread adoption and effectiveness of VW in critical sectors
such as industry, healthcare, urban planning, and cultural heritage, fostering efficiency and innovation.

**Problem Definition and Research Gap:**
A significant research gap is the lack of comprehensive, domain
agnostic DT standards that adequately cover their architecture, semantics, and lifecycle management.
Current approaches are characterised by fragmented modelling techniques and limited formal
frameworks for validation, verification, and continuous updates, hindering their reliability and long-term
utility. Furthermore, there is insufficient interoperability between established data sources like BIM, CAD,
IoT, and simulation data with emerging VW platforms. Key questions include how a versioned schema
evolution mechanism can be designed so factories and warehouses can upgrade their DTs without
breaking shared simulations, and how to certify and audit the fidelity and privacy compliance of hosted
patient twins when they move between care-provider systems or research platforms. Another pertinent
question is what minimal, extensible ontology or meta-model can be defined to let heterogeneous
enterprise systems (ERP, MES, CRM, BPM engines) register and synchronize real-time digital-twin data
and business-process state.

#### 2d.13 Interoperability standards in urban and public administration contexts

The integration and standardisation across city DTs, virtual planning tools, public services, and AI-driven
decision support systems are crucial. This enhances sustainable urban management, promotes
participatory governance by citizens, and improves the accessibility of public services within virtual
environments.

**Problem Definition and Research Gap:**
Urban data is often fragmented across siloed systems, hindering
the creation of interoperable city DTs and effective virtual planning tools. There is a lack of open
standards for civic avatars, public service workflows, identity management, and the integration of
services across multiple platforms. Furthermore, insufficient explainability, fairness, and privacy
guarantees exist in municipal AI and data sharing environments, posing risks to trust and public
acceptance. Key questions include which spatio-temporal data standards (CityGML, SensorThings) can
harmonise IoT streams, GIS layers and citizen-generated content into a single city-scale DT, and what
semantic interoperability layers let urban planners, first responders and public users query and annotate
the same city DT. Additionally, how to architect streaming pipelines that keep an urban DT "live" (traffic,
utilities, crowd flows) while respecting data-privacy and anonymisation laws, is a critical concern.

**Research and Innovation Objectives:**
- Develop open, modular data standards combining existing frameworks like CityGML, IFC, and
  OpenXR with semantic data models specifically for urban DTs. 
- Build interoperable identity frameworks aligned with eIDAS, supporting robust avatar
  authentication and ensuring user privacy within public virtual services. 
- Implement privacy-preserving APIs, develop participatory XR citizen platforms, and create
  explainable AI pipelines with human-in-the-loop feedback mechanisms for municipal
  applications. 

#### 2d.14 Interoperability for cultural and arts applications

This research topic enables the scalable sharing, reuse, and participatory co-creation of cultural
heritage content across various platforms. This supports inclusivity, ensures digital preservation of
valuable assets, and fosters sustainable innovation within the cultural and arts sectors in virtual
environments.

**Problem Definition and Research Gap:**
A significant research gap is the absence of widely adopted
standards for cultural content formats, metadata, avatar behaviour, and interaction models within VW.
There is insufficient integration with existing domain-specific standards like BIM, CIDOC CRM, and the
European common data space for cultural heritage, leading to isolated cultural content. Furthermore, a
lack of open, modular authoring tools that are interoperable with cultural heritage institutions and their
existing systems hinders broader adoption and collaborative content creation.

**Research and Innovation Objectives:**
- Define shared metadata, interaction, and avatar behaviour standards specifically aligned with established cultural data frameworks to ensure consistency and interoperability. 
- Establish open APIs for content migration, collaboration, and multi-device XR experiences
  tailored for cultural applications.
- Promote community-driven consensus-building initiatives that actively engage cultural institutions and
  XR developers to foster widespread adoption of these standards. 
- Advance the standardisation of Asset Administration Shell (AAS), semantic web technologies,
  and DT orchestration protocols to create a unified framework. 
- Develop model-driven engineering approaches, comprehensive verification pipelines, robust
  versioning mechanisms, and automated calibration methods for DTs. 
- Design middleware and APIs that enable federated, semantic, and spatio-temporal data
  exchange across diverse DT ecosystems. 
- 
### Governance, economy and trust
#### 2d.15 Open standards for identity, governance, and portability

Establishing open standards for user control over digital identities, assets, and data across virtual
ecosystems is paramount. This enhances trust, promotes inclusivity, ensures data sovereignty, and
facilitates compliance with EU regulations such as GDPR and the Data Act. Robust governance
frameworks are crucial for responsible data sharing and fostering economic fairness within virtual economies.

**Problem Definition and Research Gap:**
Current solutions for privacy-preserving, cross-platform identity
management and asset portability are limited, creating significant barriers to user agency. Centralised
architectural approaches often hinder user control and transparency in governance. Furthermore, there
is a lack of interoperable stewardship models that effectively integrate legal and ethical compliance
frameworks into VW operations, making robust governance challenging. A crucial question is which
lifecycle-management standards for people-centric twins (avatars, biometrics, behavioural profiles)
guarantee portability, consent management and data sovereignty across platforms.

**Research and Innovation Objectives:**
- Research and develop decentralised identity protocols (e.g., blockchain or DID-based) and data
  governance frameworks to ensure user-centric control over personal data. 
- Design standardised APIs for asset and avatar portability that inherently support traceability and
  consent management across various platforms. 
- Develop transparent data stewardship frameworks that align with EU legal requirements and
  principles of digital sovereignty, fostering trust and compliance. 

#### 2d.16 Decentralized and cross-company business collaboration

Open and interoperable standards for decentralised business networks and cross-company
collaboration are essential. They enable secure, efficient workflows and cooperative innovation beyond
organisational boundaries, fostering multi-party trust, synchronised processes, and new digital
marketplaces in VW. This is crucial for scaling business ecosystems and enabling seamless interactions across enterprises.

**Problem Definition and Research Gap:**
Existing business networks and collaboration tools are often
siloed, proprietary, and fragmented, lacking a universal open protocol for ensuring synchronisation,
confidentiality, auditability, and consistent multi-enterprise workflow execution. This significantly limits
secure, persistent, multi-organisation interactions and hampers the integration of enterprise data and
workflows into virtual environments. A key question is what minimal, extensible ontology or meta-model
can be defined to let heterogeneous enterprise systems (ERP, MES, CRM, BPM engines) register and
synchronize real-time digital-twin data and business-process state.

**Research and Innovation Objectives:**
 - Advance open standards for multi-party process synchronisation and secure workflow
   automation across decentralised networks. 
 - Define interoperable session management protocols, shared virtual environment standards, and
   cross-domain access control models for business collaboration. 
 - Standardise interfaces and data schemas for transaction automation, auditability, and real-time
   business process orchestration compatible with existing enterprise workflow systems. 
 - Develop interoperable identity and trust frameworks that facilitate cross-company collaboration
   and support joint asset ownership. 
 - Investigate standardised economic and incentive models designed to support open
   decentralised business ecosystems. 

#### 2d.17 Digital asset ownership, payment systems, services for interoperability

Consistent and interoperable standards for digital asset ownership, payment mechanisms, and reusable
platform services are crucial. They enable commerce, facilitate asset mobility, and reduce friction across
VW and platforms, thereby enhancing user trust and supporting royalties and economic interactions.
Additionally, these standards reduce redundant development efforts by promoting modular
infrastructure.

**Problem Definition and Research Gap:**
Digital asset standards are currently fragmented, and
incompatible protocols limit cross-platform transfer, validation, provenance tracking, and commercial
use of virtual goods. Diverse payment mechanisms lack standardised integration with enterprise
financial systems, leading to usability issues. Furthermore, the absence of commonly adopted modular
platform services results in inconsistent ecosystem experiences, hindering seamless interoperability
and the growth of virtual economies.

**Research and Innovation Objectives:**
- Establish standardised frameworks for digital asset metadata, provenance, ownership tracking,
  lifecycle management, and commercial interactions.
- Define interoperability protocols that enable secure asset transfer and validation across
  heterogeneous ledgers and registries.
- Develop standardised APIs and protocols for integrating various digital payment methods with
  financial and enterprise platforms, including models for cross-border payments that minimise
  currency conversion risks.
- Create modular, open platform services, such as identity management, digital asset handling,
  and wallet services, based on open standards with well-defined APIs bridging immersive
  technologies, web platforms, and enterprise applications. 
- Foster cross-industry alignment of device, communication protocols, and governance
  frameworks to ensure coherent interoperability and ecosystem development.

### Sustainability, inclusion and long-term resilience
#### 2d.18 Economically sustainable standardisation and interoperability

Economically sustainable standards lower the cost of compliance, integration, and maintenance,
enabling broad participation from SMEs, open-source communities, and public sector actors. This
inclusivity fosters innovation, mitigates monopolisation, and supports a fair, profitable ecosystem driven
by shared economic value. New business models aligned with open standards are essential for
sustaining long-term engagement and ensuring a viable return on investment (ROI) for all contributors.

**Problem Definition and Research Gap:**
Current standardisation processes are often shaped by large
industry players due to high technical complexity, licensing barriers, and the absence of economic
incentives for smaller actors. Fragmented cross-sector efforts lead to duplicated investments and
inefficiencies. There is a lack of practical guidance on business models that reward participation in open
standardisation and demonstrate measurable economic benefit. ROI remains unclear for many
stakeholders, particularly those outside of dominant commercial ecosystems.

**Research and Innovation Objectives:**
- Design modular, low-overhead standards to reduce implementation costs and support
  incremental adoption. 
- Promote open licensing and hybrid public-private funding models to ensure economic inclusivity
  in standard development and maintenance. 
- Develop business model frameworks and toolkits that quantify cost-benefit ratios and long-term
  economic value of adopting and contributing to open standards. 
- Support cross-sector standardisation alignment to reduce redundancy and unlock new
  economic efficiencies. 
- Explore new monetisation strategies (e.g. service-based, data-sharing, reputation-based) tied to
  open and interoperable ecosystems. 

#### 2d.19 Environmentally sustainable standards and interoperability frameworks

Sustainable standards can significantly reduce the environmental impact of digital infrastructure by
promoting energy-efficient design, hardware reuse, and responsible data practices. As digital
ecosystems grow, environmentally aware interoperability frameworks are essential for minimising
carbon footprints, supporting hardware longevity, and aligning with climate goals through green-by design architectures.

**Problem Definition and Research Gap:**
Most existing standards neglect environmental performance,
leading to energy-intensive systems and computational inefficiencies. There is no shared methodology
for assessing or benchmarking environmental impact in digital ecosystems. Green interoperability
principles, lightweight data protocols, and hardware-aware design are underrepresented in current
efforts. Lifecycle sustainability, especially regarding DTs and virtual assets, lacks standardisation and practical guidance.

**Research and Innovation Objectives:**
- Embed eco-design principles and carbon impact metrics directly into interoperability and standardisation frameworks.
- Develop lightweight, energy-efficient protocols and data formats suitable for low-power devices and legacy infrastructure.
- Standardise lifecycle-aware practices for digital assets, including reuse, recycling, and end-of life management.
- Create open benchmarking tools and certification schemes for green compliance in virtual ecosystems and dataspaces.
- Foster sector-specific green standards and best practices across cloud computing, edge infrastructure, and XR systems.

#### 2d.20 Technically and community sustainable standardisation and interoperability

Technically robust and community-supported standards are essential for long-term interoperability.
Sustainability here means not only durable, maintainable technical architectures, but also the active
involvement of diverse communities (including open-source contributors, academia, and civic
organisations) who ensure resilience, innovation, and collective ownership.

**Problem Definition and Research Gap:**
Many standards become stagnant due to limited community
involvement, weak governance, and lack of supporting tooling. Dominance by a few large entities
restricts the diversity of contributions and perspectives. Poor onboarding, opaque decision-making, and
lack of documentation hinder adoption and adaptation. Technical standards often evolve faster than
their ecosystems (e.g. reference implementations, testbeds, and documentation), impeding real-world usage.

**Research and Innovation Objectives:**
- Establish long-term sustainability guidelines for standard lifecycle management, versioning, and
  maintenance practices. 
-  Invest in tooling, open reference implementations, conformance suites, and publicly available
   testbeds to encourage adoption. 
- Promote inclusive governance models that enable meaningful participation from a wide range of
  stakeholders. 
- Draw from proven community models (e.g. Linux Foundation, Blender) to define contributor
  pathways, decision frameworks, and stewardship roles. 
- Support long-term funding strategies, including consortium-based approaches and civic tech
  grants, to ensure ongoing standard evolution and community health.