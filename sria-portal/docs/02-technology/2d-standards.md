# 2d. Standardisation and Interoperability

## Scope

The European Commission's vision for Virtual Worlds (VW) and Web 4.0 underscores a critical need for open standards and global governance. This strategic approach aims to steer the next technological transition towards an open, secure, trustworthy, fair, and inclusive digital environment for all EU citizens, businesses, and public administrations, preventing market dominance by single entities and fostering a more equitable landscape.

Interoperability is the capacity of organisations to interact towards mutually beneficial goals, involving the sharing of information and knowledge through their supporting business processes, facilitated by the exchange of data between their Information and Communication Technology (ICT) systems. A significant impediment to progress in the digital single market is precisely this lack of interoperability.

---

## Foundations for Interoperability

### European Vision and Strategic Imperatives

The European Commission's strategy for Web 4.0 and VW is rooted in the ambition to shape a digital future defined by openness and global governance. This involves actively supporting open standards to ensure fair and equitable governance, preventing large organisations from monopolising the burgeoning digital sphere. Fundamentally, this strategy is designed to create a digital environment that is open, secure, trustworthy, fair, and inclusive, benefiting EU citizens, businesses, and public administrations alike.

These strategic objectives directly align with the overarching goals for Europe's digital future:

1. **Fair and Equal Governance:** Ensuring fair and equal governance through open standards and interoperability is paramount to preventing market dominance, fostering a level playing field, and lowering entry barriers for small and medium-sized enterprises (SMEs) and innovators.

2. **Trustworthy Digital Environment:** Interoperability is a foundational prerequisite for cultivating a digital environment that citizens can trust, ensuring security and privacy by design, promoting fairness in data access and economic participation, and guaranteeing universal inclusivity and accessibility.

3. **Digital Autonomy:** By developing robust European standards and interoperable frameworks, the EU aims to enhance its digital autonomy, reducing dependency on non-EU platforms and technologies, thereby empowering European actors and upholding European values.

### Foundational Challenges for a Cohesive Ecosystem

Addressing the infrastructural challenges inherent in VW is crucial for fostering a cohesive and interconnected ecosystem. Current research gaps include:

- **Common Data Formats and Protocols:** The urgent need for standards that enable seamless information exchange across diverse systems and platforms
- **Digital Twin Exchange:** Mechanisms must be standardised to ensure broad compatibility and effective integration across various applications
- **API Integration:** The development of robust API integration is essential to facilitate communication and interaction among diverse systems within these complex virtual environments

Overcoming these fundamental challenges is key to ensuring that different technologies and platforms can collaborate harmoniously, driving the overall progress and accessibility of VW. This Strategic Research and Innovation Agenda (SRIA) follows the best practices outlined in the European Interoperability Framework (EIF).

### Guiding Principles for European Interoperability

The European Interoperability Framework (EIF), published in 2018, provides a commonly agreed approach to delivering European public services in an interoperable manner. The EIF introduces the concept that interoperability is inherently layered and interdisciplinary, identifying four distinct layers:

1. **Legal Layer:** Legal frameworks and regulations
2. **Organisational Layer:** Business processes and governance structures
3. **Semantic Layer:** Meaning and interpretation of data
4. **Technical Layer:** Technical specifications and protocols

All of these layers require integrated governance. The concept of common European dataspaces, exemplified by reference architectures such as the IDS Reference Architecture Model (IDS-RAM), outlines key roles and components for data ecosystems, including data providers, consumers, and brokers. It defines interactions within a sovereign data-sharing ecosystem, strongly aligning its interoperability mechanisms across all four layers with the principles of the EIF.

It is important to acknowledge the inherent tension between achieving deep semantic richness for specific product functionalities and ensuring broader interoperability through the reuse of existing standard domain models; the value-adding use case must be clearly defined to navigate this balance effectively.

---

## Foundations for Interoperable Standards

### Standards as a Path to Interoperability

Standards serve as a primary method for achieving interoperable systems, with their development typically reliant on consensus among stakeholders. While standards offer the advantage of broad compatibility, there is an inherent tension between striving for the richest possible semantics for a highly specific product and reusing existing standard domain models for the sake of wider interoperability. Products are often designed with maximum specificity, yet successful interoperability often necessitates a clear definition of the value-adding use case to balance specific semantic richness with broader applicability.

### Categorisation of Standards

Standards can be broadly categorised into several high-level types:

1. **Domain Vocabulary Terms:** Reusable terminology crucial for semantic interoperability, ensuring that organisations interpret concepts uniformly. Examples include the use of UML models, OWL, RDFS, and SKOS.

2. **Application Profiles (Schema):** Explain how specific functionality is coded against particular properties. They enable data providers to understand precisely what data is required for a certain client to operate effectively. These profiles are consumer-oriented and promote the feature-based reuse of API patterns, with examples such as ActivityPub and Linked Data Event Streams.

3. **Implementation Model:** A document designed to assist consumers in picking components in an orthogonal, complementary manner.

### Evolvability and Transferability: Cornerstones of Resilience

The principles of evolvability and transferability are critical mechanisms for counteracting the fragmentation caused by a multitude of isolated standards, actively driving their convergence to achieve truly comprehensive and lasting interoperability.

**Evolvability** refers to a standard's capacity to adapt and change over time in response to new technological advancements, evolving user requirements, and emerging use cases, without necessitating complete overhauls or causing widespread breakage. This involves utilising mechanisms for versioning, extension, and modularity, which allow components to evolve independently and thereby ensure the long-term viability and continued relevance of interoperability frameworks.

**Transferability** addresses the ability to apply or adapt standards, knowledge, components, and best practices from one domain, context, or system to another. This includes the complex process of merging standards from different domains into a cohesive meta-standard. Both evolvability and transferability are indispensable for building a resilient and dynamic VW ecosystem capable of effective growth and integrating diverse contributions efficiently.

### Sustainability: Enduring and Inclusive Interoperability

Sustainability is essential to ensuring that interoperable systems remain viable over time—technically, economically, socially, and environmentally. Standardisation promotes sustainability by reducing duplication, promoting reuse, and enabling more energy-efficient architectures. Efficient-by-design systems minimise waste—not only in computation but also in infrastructure and development cycles—supporting lower carbon footprints and longer-lasting technologies.

Economically, sustainable interoperability reduces barriers to entry and long-term maintenance costs. It enables smaller actors and under-resourced regions to participate without relying on expensive, proprietary platforms. However, this requires the emergence of new business models that prioritise shared value, service-based innovation, and long-term collaboration over short-term control or exclusivity.

Community-led ecosystems like Linux or Blender demonstrate how open participation, distributed governance, and modular standards can support economic resilience and technological longevity. Their models show how sustainability thrives when economic incentives align with openness, adaptability, and shared stewardship. Therefore, sustainable interoperability must support building ecosystems that are efficient, equitable, and capable of evolving without extracting disproportionate social, environmental, or economic cost.

---

## Research Topics for Standardisation and Interoperability

### Core Standardisation and Semantic Foundations

#### 2d.1 Evolvability and Cross-Domain Transferability

**Challenges and opportunities:**
This research topic addresses the critical need for standards to adapt gracefully to continuous technological advancements and emerging use cases without causing systemic breakage. It also focuses on enabling the transfer of successful standard features and knowledge across different domains. This is vital for counteracting fragmentation in the VW ecosystem, fostering convergence among disparate systems, and ultimately building resilient, future-proof interoperability that can sustain long-term relevance.

**Problem Definition and Research Gap:** There is a notable absence of formal "meta-standards" or established methodologies for designing standards that can evolve gracefully, supporting robust versioning, extension, and deprecation. Current approaches lack systematic methods for transferring features between existing standards or merging them into more comprehensive "meta-standards," thereby hindering reuse and convergence. Furthermore, there is an insufficiency of metrics and frameworks to quantitatively assess standard evolvability, measure the impact of transferability, or guide the design of consumer-oriented, composable standards that can be combined flexibly. For example, a key question is what composability standards (e.g. WebXR extensions) will let disparate studios publish interactive scenes that interoperate in a shared virtual event.

**Research and Innovation Objectives:**
- Develop formal models and "meta-standards" for specifying standard evolvability, encompassing versioning, defined extension points, and comprehensive lifecycle management protocols
- Establish methodologies and toolkits for systematic cross-domain standard analysis, semantic mapping for feature transfer, and pathways for convergence towards composable "meta-standards"
- Define robust metrics to quantify evolvability and transferability effectiveness, and promote design patterns for modular, consumer-oriented standards and their flexible composition

#### 2d.2 Semantic and Data Interoperability Frameworks

**Challenges and opportunities:**
This topic is crucial for enabling structured and consistent knowledge representation across diverse VW platforms and their ecosystems. It facilitates real-time reasoning, efficient content discovery, dynamic behavioural consistency, and seamless data exchange, all of which are essential for creating fluid user experiences and ensuring the portability of digital assets within and between virtual environments.

**Problem Definition and Research Gap:** A significant gap exists due to the lack of universally accepted semantic frameworks, ontologies, and knowledge graphs capable of effectively capturing temporal complexities, evolving world states, and dynamic relationships inherent in virtual environments. Current VW ecosystems are fragmented and isolated, characterised by incompatible data models that hinder cross-platform interoperability and shared understandability. Additionally, there is insufficient standardisation for semantic self-description and context-awareness in Digital Twins and VW, making it challenging to interpret data reliably across different systems. One fundamental question is what minimal, extensible ontology or meta-model will let heterogeneous industrial assets register and sync in real-time across multiple platforms.

**Research and Innovation Objectives:**
- Develop adaptive, linked ontologies and knowledge graph standards that integrate both symbolic and statistical AI elements for robust knowledge representation
- Foster federated learning and semantic reasoning protocols to enable decentralised knowledge sharing while rigorously preserving data privacy
- Define semantic data schemas and cross-modal retrieval frameworks to ensure unified access to heterogeneous content across VW
- Develop a collaboratively constructed, pan-European glossary for the immersive sector, standardizing terminology across disciplines and stakeholders. This fosters semantic coherence and interdisciplinary communication

#### 2d.3 Standardized Interfaces, APIs, and Protocols

**Challenges and opportunities:**
This research ensures the consistent integration and synchronisation of diverse sensory inputs, including visual, audio, and physiological data, along with AI-driven components and real-time inference pipelines across a variety of devices and platforms. This interoperability is foundational for delivering immersive, low-latency, and scalable extended reality (AR/VR/XR) experiences, making interactions fluid and responsive.

**Problem Definition and Research Gap:** Despite advancements, there is an absence of unified multimodal fusion frameworks and standardised synchronisation protocols, leading to fragmentation in how different sensory data streams are combined and coordinated. A significant gap exists in runtime API standards that can orchestrate distributed AI inference effectively across heterogeneous edge-cloud infrastructures and diverse device hardware accelerators. Furthermore, current standards are insufficient for cross-modal adaptation and embedding alignment among foundation AI models, which is crucial for creating cohesive and intelligent virtual environments. A key question here is how to architect latency-compensated interaction protocols that preserve causality ("who touched what when") in synchronised audiovisual performances and collaborative tasks.

**Research and Innovation Objectives:**
- Create interoperable data formats, synchronisation methods, and standardised API layers specifically designed for multimodal inputs and AI inference in XR systems
- Develop hybrid AI architectures, such as symbolic-statistical and LSTM-RF hybrids, alongside multimodal adaptation pipelines, supported by open benchmarks for performance evaluation
- Enable cross-platform and cross-device spatial anchoring techniques, coping with differences in sensor fidelity and calibration and possible inconsistent coordinate systems
- Integrate edge-cloud orchestration standards that facilitate dynamic task partitioning and efficient model migration across distributed computing resources

### Infrastructure and System Runtime Interoperability

#### 2d.4 Runtime Interoperability and Conformance Testing for Extended Reality

**Challenges and opportunities:**
This research guarantees consistent user experiences and ensures the trustworthy and secure operation of VR/XR systems. It achieves this by enforcing standardised runtime environments, codecs, identity models, and interaction models, which are critical for building reliable and scalable immersive ecosystems.

**Problem Definition and Research Gap:** Despite the existence of standards like OpenXR and WebXR, fragmentation persists within the XR ecosystem, exacerbated by a lack of comprehensive conformance and certification frameworks. There are no widespread benchmarking tools that effectively combine objective technical performance metrics with subjective user-centric measures. The variability in device implementations significantly impairs seamless interoperability, impacts quality, and erodes user trust in XR experiences.

**Research and Innovation Objectives:**
- Develop scalable, automated benchmarking and certification suites that cover key performance aspects such as latency, rendering quality, codec performance, identity management, and multimodal interaction
- Integrate UX (Quality of Experience) metrics through methodologies like Living Labs and large-scale field studies to provide holistic performance assessments
- Promote cooperative initiatives among standard bodies to enforce compliance and drive ecosystem-wide adoption of interoperability standards

#### 2d.5 Standardisation of Network and Compute Infrastructure

**Challenges and opportunities:**
Robust, low-latency, and secure network and compute standards are vital for enabling real-time synchronisation, distributed rendering, and scalable multi-user immersive experiences. This is crucial across heterogeneous infrastructures, including cloud, edge, and on-device computing, ensuring that VW and Digital Twins can operate seamlessly and efficiently.

**Problem Definition and Research Gap:** A significant research gap lies in the currently undefined Quality of Service (QoS) and latency requirements specifically tailored for Digital Twins and synchronous XR interactions. There is a fragmentation of cloud-edge compute standards and a lack of effective interoperability layers between these different computing paradigms. Furthermore, insufficient orchestration protocols exist for dynamic allocation of resources in real-time XR workflows, hindering scalable and responsive immersive experiences.

**Research and Innovation Objectives:**
- Define comprehensive network and compute performance benchmarks specifically tailored to the demanding requirements of immersive use cases
- Develop interoperable cloud-edge middleware and orchestration standards that facilitate seamless distribution of computation and data
- Create adaptive resource management frameworks capable of ensuring seamless end-to-end performance across distributed VW and Digital Twin deployments

#### 2d.6 Secure, Decentralized Data Sharing and Interoperability Frameworks

**Challenges and opportunities:**
This research is essential for enabling secure, trustworthy, and privacy-preserving data exchange across industrial, healthcare, and virtual ecosystems. It reduces the risks of vendor lock-in and ensures data sovereignty, empowering users and organisations with greater control over their information in interconnected digital environments.

**Problem Definition and Research Gap:** Centralised data exchanges currently lack sufficient security, traceability, and interoperability with emerging decentralised frameworks. There are no mature, standardised protocols that effectively integrate blockchain, distributed ledgers, and semantic AI for robust cross-domain interoperability. Significant challenges remain in securely blending heterogeneous data types across organisational boundaries, which is crucial for collaborative and comprehensive data utilisation. A pertinent question here is whether federated learning over multiple industrial Digital Twins can preserve data privacy while improving cross-company predictive-maintenance models.

**Research and Innovation Objectives:**
- Integrate blockchain-enabled provenance and access control standards into data sharing frameworks to ensure data integrity and user control
- Develop semantic data translation layers and privacy-preserving computation techniques, such as federated learning and edge AI, for secure and efficient data processing
- Advance Web 4.0 protocols to facilitate the linking of real and Virtual Worlds via open, decentralised architectures, promoting data fluidity and sovereignty

### User Content and Collaborative Experience

#### 2d.7 Cross-Platform Interoperability of Avatars and Digital Humans

**Challenges and opportunities:**
This research is vital for enabling seamless digital identity portability, consistent social presence, and privacy-compliant representation of users through avatars and digital humans across multiple VW and applications. This fosters user agency and a cohesive digital identity experience.

**Problem Definition and Research Gap:** A significant research gap is the fragmentation of avatar data formats, behaviour models, and identity schemas, which severely limits portability and unified representation across different platforms. There is a lack of interoperable frameworks for multimodal data fusion, which is essential for integrating motion capture, physiological data, and behavioural patterns into comprehensive human models. Furthermore, insufficient ethical AI frameworks exist to ensure privacy, mitigate bias, and provide transparent management of avatar autonomy. A critical question is which lifecycle-management standards for people-centric twins (avatars, biometrics, behavioural profiles) guarantee portability, consent management and data sovereignty across platforms.

**Research and Innovation Objectives:**
- Standardise avatar data formats, behaviour control APIs, and interoperable identity management protocols to ensure consistent representation and portability
- Extend Digital Twin standards to incorporate the cognitive and physiological dimensions of digital humans, enabling more holistic digital representations
- Integrate privacy-preserving frameworks and ethical auditing tools directly within avatar platforms to address ethical concerns proactively

#### 2d.8 Collaborative Authoring and Versioning Frameworks

**Challenges and opportunities:**
This topic addresses the need to support collaborative, multi-user content creation and scene management within VW, significantly enhancing productivity. It also enables the seamless sharing, reuse, and evolution of VW assets across heterogeneous devices and platforms, fostering efficiency and innovation in content development.

**Problem Definition and Research Gap:** Existing authoring tools commonly lack integrated, XR-tailored version control systems and real-time collaboration features that function effectively across multi-device environments. Proprietary and incompatible content formats and scripting languages fragment VW ecosystems, severely hindering content portability and reuse. Furthermore, there is limited unified support for scalable authoring workflows that can accommodate diverse levels of expertise through low-code/no-code solutions and AI-augmented tools.

**Research and Innovation Objectives:**
- Develop expressive versioning systems with XR scene-aware tracking, robust merge and revert functionalities, and integrated privacy controls to support cross-platform collaboration
- Promote open export/import standards for 3D assets and behavioural scripts, such as glTF and OpenXR, to enhance content portability
- Build interoperable, modular authoring frameworks that seamlessly integrate AI assistance and facilitate real-time multi-user editing experiences

#### 2d.9 Interoperability Frameworks for Collaboration and Real-Time Interaction

**Challenges and opportunities:**
This topic focuses on enabling secure, low-latency, and synchronous multi-user experiences, which are vital for social, educational, industrial, and healthcare applications within VW. Standardisation in this area facilitates seamless interactions and ensures scalability across diverse networks and devices, enhancing the overall collaborative potential of virtual environments.

**Problem Definition and Research Gap:** The landscape of multi-user communication tools is currently fragmented by proprietary solutions, limiting effective cross-platform collaboration. There are no unified standards for synchronisation, session management, moderation, and the exchange of multi-modal interaction data, leading to inconsistent experiences. Significant challenges persist in ensuring Quality of Service (QoS) and accessibility in heterogeneous and bandwidth-constrained networks, which can degrade real-time multi-user interactions. A key question is how to architect latency-compensated interaction protocols that preserve causality ("who touched what when") in synchronised audiovisual performances and collaborative tasks.

**Research and Innovation Objectives:**
- Define open, adaptive communication protocols, potentially extending existing standards like WebRTC and MQTT, specifically tailored for immersive multi-user scenarios
- Develop APIs that support role-based permissions, moderation functionalities, and real-time feedback mechanisms within collaborative virtual environments
- Establish consistent event schemas and data formats for the synchronised exchange of gestures, voice, avatar states, and shared resources in multi-user settings

---

## Strategic Recommendations

### For Industry and Developers
1. **Adopt open standards:** Implement OpenXR, WebXR, glTF, and other open standards to ensure cross-platform compatibility and reduce vendor lock-in
2. **Design for interoperability:** Build modular, extensible systems that can evolve gracefully and integrate with diverse platforms and services
3. **Participate in standardisation:** Engage actively in European and international standardisation bodies to shape standards that reflect industry needs
4. **Implement conformance testing:** Use automated benchmarking and certification suites to verify compliance with interoperability standards

### For Research Institutions
1. **Develop meta-standards:** Research formal models for evolvable, composable standards that can adapt to technological change
2. **Advance semantic frameworks:** Create adaptive ontologies and knowledge graphs that capture the complexity of Virtual Worlds
3. **Build evaluation tools:** Develop metrics and frameworks to assess standard evolvability, transferability, and interoperability effectiveness
4. **Foster cross-domain collaboration:** Facilitate knowledge transfer and standard convergence across different application domains

### For Policymakers
1. **Mandate open standards:** Require adoption of open, interoperable standards in public sector XR deployments and EU-funded projects
2. **Support standardisation bodies:** Fund European participation in international standardisation efforts and establish governance frameworks
3. **Promote digital sovereignty:** Invest in European-led initiatives for data spaces, identity management, and sovereign infrastructure
4. **Ensure sustainability:** Incorporate environmental and social sustainability criteria into standardisation processes

### For Standardisation Bodies
1. **Accelerate convergence:** Facilitate the merging of fragmented standards into cohesive, composable meta-standards
2. **Enable evolution:** Design standards with versioning, extension points, and lifecycle management from the outset
3. **Provide certification:** Develop comprehensive conformance testing and certification programs for XR interoperability
4. **Foster collaboration:** Create mechanisms for cross-domain knowledge transfer and feature reuse across standards

### Cross-References
- **2a. Visualisation, Sensing, Devices and Immersion:** For hardware and sensor interoperability
- **2b. Real-time User Interaction:** For interaction protocols and cross-platform UX
- **2c. Authoring and Experience Design:** For content format standards and collaborative authoring
- **2e. Digital Twins, Assets, and People:** For Digital Twin and avatar interoperability
- **2f. Applied Artificial Intelligence:** For AI model integration and standardised inference APIs
- **3b. Governance and Law Enforcement:** For legal frameworks supporting standardisation
- **3e. Trust and Human Oversight:** For privacy-preserving data sharing standards
- **4a. Data Governance, Analytics:** For data space architectures and semantic interoperability
