# 2b. Real-time User Interaction

## Scope

To transform the foundational technologies of immersion, sensing, and visualisation into compelling User Experiences (UX), research must focus on intuitive, real-time user-interaction. This includes the development of real-time simulation technologies that can dynamically respond to user inputs and environmental changes. UX design is another critical area, requiring innovative approaches to create seamless and intuitive interactions within Virtual Worlds (VW). Bridging the gap between technology and UX involves addressing challenges in latency, responsiveness, and the naturalness of interactions.

This chapter addresses the key technological challenges for the design of real-time user interactions. It is divided into two main parts, corresponding to the two main components of the 3D interaction loop: the Virtual Worlds on one side and the users on the other side. Both hardware and software components are needed to provide seamless 3D interaction between users and extended environments. This chapter handles the key technologies needed within the next years for reaching fluid and immersive experiences.

Technologies addressed in this chapter span from 3D interaction techniques and their associated algorithms to architecture and frameworks of immersive environments, gathering the inputs and outputs required for users to interact with various types of Virtual Worlds. Within the context of a human-centric approach, UX is fundamental and key components of its design are also addressed.

One of the key challenges for the design of real-time user interaction is related to the interactivity of the technological solutions that must be built. Most of the time, it requires a challenging technological trade-off between realism of the interactions and computational performance. When entering the UX within the loop, several criteria can be introduced to evaluate it, such as presence, immersion, or naturalness. These criteria can be assessed through dedicated tools and their associated challenges are addressed at the end of this chapter.

---

## Research Topics for Virtual Worlds Creation and Data Integration

This section explores the essential technology blocks required to create, manage, and utilize Virtual Worlds, focusing on their applications in various domains and the integration of real-time data. The section addresses challenges related to the design of interaction models and techniques at the interface between the user and the VW, the design of the VW themselves, and finally the data management during interactions of the user with VW.

### Design of Interaction Models and Techniques

#### 2b.1 Interaction Techniques with Whole Human Body Information

**Challenges and opportunities:**
The evolution from classic Human-Computer Interaction (HCI) to Human-Computer Context Interaction (HCCI) necessitates developing systems that respond not only to explicit commands from 3D interaction devices but also to implicit cues, such as gaze behaviour, emotional state, and environmental conditions. Current 3D interaction techniques are often task-specific, focusing on elements like object selection or navigation, and lack adaptation to the full spectrum of potential user inputs due to an absence of fusion algorithms for diverse physical and physiological measurements.

**Problem Definition and Research Gap:** The diversity of information available from the whole human body calls for 3D interaction models and techniques that adapt in real-time to the user's context by combining multimodal inputs, such as voice, gestures, and eye-tracking, with contextual intelligence. Such techniques can significantly reduce cognitive load and foster intuitive engagement, particularly in XR environments. Furthermore, they could enhance UX by synchronising different sensory modalities into seamless multi-sensory feedback. This direction supports the EU's ambition for human-centric immersive technologies and opens opportunities for adaptive training, accessible navigation systems, and behaviour-driven interaction flows.

**Research and Innovation Objectives:**
- Design 3D interaction techniques that effectively utilise information from the whole body via multiple sensors
- Develop user-adapted sensor fusion algorithms capable of integrating diverse physical and physiological measurements
- Monitor physiological measures of users and synchronise them with sensor information to adapt 3D interaction models to each user, accounting for different sensory modalities
- Design behaviour-driven interaction flows between users to enhance natural and intuitive engagement

#### 2b.2 Runtime Interoperability Across Devices and Platforms

**Challenges and opportunities:**
Despite the establishment of open standards like OpenXR and WebXR, achieving seamless runtime interoperability across devices and platforms remains a significant challenge. The current state of standards and interoperability hinders citizens from meeting seamlessly across various XR devices, personal computers, or social media spaces. Addressing these issues is crucial to fostering a unified XR ecosystem that provides consistent experiences across devices and platforms, thereby promoting wider adoption.

**Problem Definition and Research Gap:** XR technologies offer the potential for embodied, intuitive interaction models, but realising this requires careful design of interface architectures. Hand gestures, spatial navigation, and voice commands need to align with natural motor and cognitive processes. Current research focuses on adaptive XR interfaces that reduce friction, guide user attention, and respect perceptual thresholds, such as motion sickness and fatigue. These insights are especially relevant for inclusive XR, where ease of entry and intuitive onboarding are critical for wide adoption. Evaluating interaction fluency across diverse user profiles is essential to support trusted, user-centric XR deployments. There is a lack of interoperability between XR technologies, for both hardware and software components, preventing combined use of interaction devices and frameworks.

**Research and Innovation Objectives:**
- Facilitate interconnections between various technical building blocks within the XR ecosystem
- Bridge existing standards into a cohesive stack of interconnected interoperability provisions
- Design seamless cross-platform solutions for user interactions, encompassing different connected devices, interfaces, and operating systems

#### 2b.3 Blending of Physical and Digital Components

**Challenges and opportunities:**
A fundamental cornerstone for creating truly immersive experiences is the design and development of augmented and mixed reality scenarios that seamlessly blend physical and digital worlds. Spatial computing enables this integration by providing technologies that allow digital systems to perceive, interpret, and interact with the user's spatial environment in real-time. Advanced spatial understanding contributes to more natural and intuitive interactions by contextualising user behaviour within their environment. This means digital content can respond intelligently not only to user inputs but also to the surrounding physical context, such as lighting conditions or proximity to physical objects. Furthermore, accurate object tracking in XR is crucial for realistic occlusion of digital objects, supporting dynamic movement of real-world objects like furniture or people, which maintains the realism of augmented scenarios.

**Problem Definition and Research Gap:** The rise of hybrid experiences necessitates new models of cross-reality interaction, enabling seamless engagement between users in physical and virtual spaces. This involves real-time coordination between XR users and physical audiences or operators, as seen in hybrid concerts, remote guidance scenarios, or dual-space exhibitions. Such interactions demand tight temporal coupling, responsive feedback loops, and alignment of spatial and social cues. Designing hybrid systems that feel cohesive and intuitive remains a complex challenge, despite the high potential for applications in events, education, and telepresence. It is acknowledged that this research topic benefits from collaboration with the ADRA partnership and that any duplication of work should be prevented.

**Research and Innovation Objectives:**
- Integrate capabilities into XR devices such as spatial mapping, object recognition, and object tracking
- Build a dynamic model of the physical environment, enabling virtual content to be accurately anchored in the real world and manipulated with spatial coherence
- Develop robust spatial anchoring techniques leveraging e.g. SLAM algorithms, capable of managing lighting variations, moving objects, occlusions and sensor drift or noise
- Integrate interaction with physical objects through robust object recognition and tracking
- Design fusion algorithms for integrating user inputs with their physical environment and generating multi-sensory feedback

### Design of Interactive Virtual Worlds

#### 2b.4 Modelling and Animation of 3D Complex Virtual Environments

**Challenges and opportunities:**
Real-time user interaction necessitates the modelling and animation of various components within Virtual Worlds. While graphics technologies have advanced significantly in geometry processing, animation, simulation, and 3D rendering, achieving interactive framerates often requires trade-offs between realism and computational performance. Therefore, the design of complex and realistic dynamic virtual environments remains a key challenge, directly impacting user immersion. From a design perspective, users can co-design VW, manipulate simulations, or generate procedural content with the aid of generative AI models. These co-creative workflows demand interfaces that enable iterative refinement, explainability, and intuitive control.

**Problem Definition and Research Gap:** Computer graphics methodologies allow the creation of increasingly immersive virtual, augmented, and XR environments. Although several graphics engines have been developed to faithfully simulate physics, manage data formats, and enable novel visualisations like 3D holograms, immersive contexts still lack components with sufficiently complex geometries and behaviours, hindering natural and seamless interactions. Addressing this challenge is crucial for democratising immersive communication, enabling everyday users, educators, creators, and professionals to seamlessly and affordably enter Virtual Worlds. The technical barrier requires immediate research focused on creating solutions leveraging innovations in depth-sensing cameras, AI-based reconstruction algorithms, efficient compression techniques, 3D animation algorithms, physics-based simulations, photorealistic rendering and advanced real-time processing capabilities of consumer-grade hardware.

**Research and Innovation Objectives:**
- Build 3D geometry processing algorithms (capture and reconstruction, modelling) that exploit the power of graphics cards and engines
- Manage 3D geometrical models for interactive manipulation within virtual environments
- Animate Virtual Worlds that encompass diverse physics-based behaviours through powerful, physics-law-based simulations
- Explore AI-based models for generating 3D Virtual Worlds, supporting co-creative workflows
- Visualise virtual environments for multiple users and multiple display devices, rendering photorealistic virtual scenes

#### 2b.5 Representation of the Self: Avatars, Sense of Embodiment, Social Presence

**Challenges and opportunities:**
Virtual Worlds are emerging as environments where new social fabrics are formed, allowing humans to manifest their personalities and make individual choices about how they present themselves via selected avatars, and to what extent these features represent their real identity. The construction of identities with specific digital signatures, previews, and integrity can be anonymous or offer connections with the physical person. Potentially, each person can represent their choices or themselves with multiple avatars, leading to multiple identities and personalities.

**Problem Definition and Research Gap:** A key aspect of user-centric XR design is the cultivation of social presence – the subjective experience of being with others in a shared virtual space. While advances in avatar realism, synchronised gestures, and spatial audio contribute to this sense of co-presence, current research needs to go beyond technical realism. Empathic interaction is increasingly relevant: immersive environments can evoke emotional resonance by simulating human affect, mirroring user behaviour, or fostering shared rituals and feedback. These features hold particular promise in domains such as remote therapy, collaborative learning, and social storytelling. Designing for social presence requires both technological innovation and a deep understanding of interpersonal dynamics in virtual contexts. There is a high demand for accurate avatar representation, yet limited knowledge on its impact on users.

**Research and Innovation Objectives:**
- Mirror user states and adapt avatar behaviour through the integration of real-time sensor inputs, such as facial expression capture, physiological monitoring, and gesture recognition
- Develop cross-platform standards for avatar embodiment, ensuring consistent representation
- Adapt virtual humans in real-time based on user signals to enable new directions for personalisation, accessibility, and emotional engagement
- Study the impact of avatar representation on the physical real world, including how virtual socialisation transforms physical socialisation, changes in work, and the significance of virtual identities
- Explore and enhance social presence within Virtual Worlds
- Handle the management of new types of data and digital content, including avatar data, emotional data, social data, and spatial and spatio-temporal data

### Data Integration

#### 2b.6 Data Management

**Challenges and opportunities:**
Effective data management is a cornerstone of user-centric and interoperable virtual environments. Video-based point cloud compression (V-PCC) and Geometry-based point cloud compression (G-PCC) are pivotal formats for the efficient transmission of volumetric data. However, their widespread adoption faces challenges due to limited hardware acceleration support. Furthermore, there is a lack of complete frameworks of tools for creating and manipulating point cloud data to support the full workflow from capturing to editing and compression using these standards. Uncompressed point-clouds, even after reconstruction, can exceed 1 Gb/s; state-of-the-art codecs struggle with quality versus framerate and require new compression pipelines. Without efficient codecs and advanced compression pipelines, XR cannot run over today's broadband or mobile links.

**Problem Definition and Research Gap:** One of the key challenges in designing real-time extended worlds is enabling collective experiences that span multiple physical locations. Emerging use cases, such as live concerts with interactive remote audiences or multiplayer XR simulations in connected venues, require ultra-low latency, synchronised data processing, and edge computing capabilities. These scenarios demand robust frameworks for co-presence, real-time responsiveness through data processing, and interaction smoothness across geographically distributed users. Successful implementation will expand what is possible in hybrid entertainment, education, and public participation experiences, supporting Europe's ambition for interconnected virtual ecosystems. Ensuring that the total head-motion-to-photon delay remains below 20 ms, ideally between 7-15 ms, is also crucial to avoid motion sickness and maintain immersion.

**Research and Innovation Objectives:**
- Efficiently combine different computation paradigms, including high-performance computing, distributed computing, edge computing, and cloud computing
- Develop high-performance computing and high-speed networks to supply highly demanding functions in real-time, such as visual rendering, data synchronisation, and motion tracking and capturing
- Minimise latency, data transfer, and processor load through the optimisation and parallelisation of computations over complex and distributed architectures
- Develop future mobile communication technologies to facilitate ubiquitous services to users, enabling remote and real-time persistent connections between real and Virtual Worlds
- Create legal and technical frameworks for the portability of avatars and digital assets across Virtual Worlds

---

## Research Topics for User Experience Design

This section delves into the needs for creating and managing UX design. It describes technologically agnostic challenges focusing on human perception, and addresses research needs linked to metrics and methodologies for designing and evaluating UX.

### Metrics for User Experience

#### 2b.7 Measuring and Optimising Cognitive Load During 3D Interaction

**Challenges and opportunities:**
Optimising cognitive load is a key factor in ensuring smooth and effective interaction within immersive environments. XR systems must carefully balance the amount and complexity of sensory, informational, and decision-related input presented to users. This directly impacts user engagement and performance.

**Problem Definition and Research Gap:** Excessive visual clutter, non-intuitive navigation, or unclear task structures can quickly lead to cognitive overload, reducing engagement and impairing performance. Motion sickness and disengagement from virtual tasks are critical behaviours that prevent the widespread use of virtual applications for a general audience. Adapting XR technologies to each user by personalising inputs and outputs between the user and the Virtual World is fundamental for achieving general adoption of XR applications. This constitutes a significant research gap in ensuring accessible and comfortable immersive experiences.

**Research and Innovation Objectives:**
- Leverage neuroscientific insights into attention, working memory, and information processing
- Gain a deeper understanding of the neuroscientific impact of 3D interaction within Virtual Worlds and the various criteria involved in cognitive load
- Develop adaptive systems that respond to users' mental workload in real-time. Techniques could include progressive information disclosure, contextual highlighting, and multimodal redundancy, for example, combining visual cues with spatial audio
- Personalise interaction complexity to the user's current state through dynamic adaptation based on biometric signals, such as pupil dilation or gaze fixation, to increase both usability and inclusivity

#### 2b.8 Longitudinal Effects of Immersive Environments on User Well-being

**Challenges and opportunities:**
While immersive environments offer compelling short-term engagement, their longitudinal effects on user well-being are still insufficiently understood. Extended XR usage may induce digital fatigue, disrupt spatial orientation, or alter social behaviour. To ensure healthy adoption, XR systems should incorporate features like break reminders, adaptive pacing, and cognitive load monitoring.

**Problem Definition and Research Gap:** Current studies are beginning to examine the cognitive toll of prolonged immersion, as well as patterns of escapism or dissociation that may emerge from extended engagement with virtual environments. However, a comprehensive understanding of these long-term impacts, particularly on user well-being, remains a significant research gap. Without this understanding, it is challenging to develop guidelines and features that promote healthy and sustainable interaction with immersive technologies.

**Research and Innovation Objectives:**
- Design longitudinal studies to assess how immersive technologies reshape attention, presence, and social norms over time
- Design ethical frameworks to regulate the use of immersive environments, ensuring user well-being in the long term

### Methodologies for User Studies

#### 2b.9 Frameworks and Tools

**Challenges and opportunities:**
The evolution of immersive virtual environments necessitates robust methodologies to assess and enhance user interaction, focusing on Quality of Experience (QoE), acceptability, and trustworthiness. QoE encompasses users' holistic perceptions of system performance, integrating technical metrics with subjective experiences. Acceptability pertains to users' willingness to engage with and adopt new technologies, influenced by factors such as usability, perceived value, and cultural relevance. Trustworthiness involves users' confidence in the system's reliability, data security, and ethical standards.

**Problem Definition and Research Gap:** Current methodologies often lack the capacity to capture the complexity of user experiences in real-world settings. Living Labs offer a solution by providing user-centric, co-creative environments where innovations are tested and refined in real-life contexts. These settings facilitate iterative feedback loops between developers and users, enhancing the relevance and efficacy of technological solutions. To systematically evaluate QoE, frameworks have been proposed that integrate objective performance indicators with subjective user feedback, enabling a comprehensive understanding of user satisfaction. Assessing acceptability requires methodologies that consider ethicality, intervention coherence, and opportunity costs, among other factors. Trustworthiness assessments benefit from tools that evaluate transparency, accountability, and data protection measures, ensuring alignment with users' expectations and regulatory standards.

**Research and Innovation Objectives:**
- Develop integrated frameworks that combine technical performance metrics with user-centric evaluations to comprehensively assess Quality of Experience
- Create standardised tools and protocols for measuring acceptability across diverse user groups and cultural contexts
- Implement Living Lab initiatives to facilitate real-world testing and iterative development of immersive technologies
- Establish benchmarking systems to compare and improve user study methodologies across different applications and sectors

#### 2b.10 Tools for Analysing the User Experience

**Challenges and opportunities:**
The advancement of immersive virtual environments necessitates sophisticated analytical tools to assess user interactions, physiological responses, and behavioural patterns. These tools encompass data analytics, physiological monitoring, human behaviour analysis, and both laboratory-based and real-life testing methodologies.

**Problem Definition and Research Gap:** Data analytics in Virtual Worlds involves the collection and interpretation of vast datasets generated by user interactions within immersive environments. This includes tracking movement patterns, decision-making processes, and engagement levels, providing insights into user behaviour and system performance. Such analytics are crucial for optimising UX and ensuring the effectiveness of virtual applications.

Physiological data monitoring, through wearable sensors and biometric devices, enables the assessment of users' physical responses to virtual stimuli. Metrics such as heart rate, galvanic skin response, and eye movement offer valuable information on user engagement, stress levels, and overall well-being during virtual interactions. This data is instrumental in tailoring virtual experiences to individual needs and ensuring user safety.

Human behaviour analysis within virtual environments allows for the study of social interactions, decision-making, and behavioural responses in controlled yet realistic settings. This facilitates research in psychology, sociology, and human-computer interaction, contributing to the development of more intuitive and user-friendly virtual systems.

Laboratory-based testing using CAVE (Computer Animated Virtual Environment) infrastructure provides immersive, high-resolution simulations for evaluating user interactions and system functionalities. These controlled environments are essential for iterative design processes, usability testing, and the refinement of virtual applications.

Real-life testing and validation involve deploying virtual applications in actual operational settings to assess performance, user acceptance, and practical utility. Such field evaluations are critical for identifying potential issues, ensuring reliability, and facilitating the integration of virtual technologies into everyday contexts. Benchmarking and evaluation tools are essential to ensure the effectiveness and reliability of immersive technologies, with emphasis on robust testing and experimentation facilities to support innovation and ensure the development of trustworthy digital environments.

**Research and Innovation Objectives:**
- Develop advanced data analytics platforms specifically tailored for immersive virtual environments
- Integrate physiological monitoring systems into virtual applications for real-time user assessment
- Establish standardised protocols for human behaviour analysis within virtual settings
- Enhance CAVE infrastructure across research institutions for comprehensive laboratory-based testing
- Implement large-scale real-life testing and validation programs to facilitate the adoption of virtual technologies in various sectors
- Develop benchmarking and evaluation tools to assess the performance and reliability of immersive technologies

#### 2b.11 Handling Inclusivity, Diversity, and User Skills

**Challenges and opportunities:**
Immersive technologies such as VR, AR, XR, and MR offer transformative potential across various sectors. However, to fully realise this potential, it is imperative to address inclusivity and diversity in both the design and utilisation of these technologies. This entails ensuring that immersive experiences are accessible to all individuals, regardless of their abilities, backgrounds, or socio-economic status.

**Problem Definition and Research Gap:** Recent studies have highlighted significant accessibility barriers in AR/VR technologies, particularly for individuals with disabilities. These barriers include challenges related to physical, cognitive, visual, and auditory impairments, which can hinder full engagement with immersive environments. To overcome these challenges, a user-centred design approach is essential, involving diverse user groups in the development process to ensure that technologies meet a wide range of needs.

Moreover, the adoption of immersive technologies necessitates specific user skills, including digital literacy, spatial awareness, and the ability to navigate complex virtual environments. Research indicates a need for comprehensive training programs to equip users with these skills, thereby promoting equitable access and participation.

**Research and Innovation Objectives:**
- Develop inclusive design frameworks that prioritise accessibility and user diversity in immersive technology development
- Implement participatory design methodologies that involve users from diverse backgrounds, including those with disabilities, in the creation of immersive experiences
- Create standardised training programs to enhance user skills necessary for effective interaction with VR/AR/XR technologies
- Establish evaluation metrics to assess inclusivity and accessibility in immersive environments, ensuring continuous improvement and accountability

---

## Strategic Recommendations

### For Industry and Developers
1. **Prioritise interoperability:** Implement open standards like OpenXR and WebXR to ensure seamless experiences across devices and platforms
2. **Invest in user-centric design:** Develop adaptive systems that respond to individual user needs, cognitive load, and physiological states
3. **Enable cross-reality experiences:** Create solutions that seamlessly blend physical and digital worlds through spatial computing and robust tracking
4. **Optimise data management:** Implement efficient compression and streaming technologies to enable real-time collaborative experiences over current networks

### For Research Institutions
1. **Advance interaction techniques:** Develop multimodal interaction models that leverage whole-body information and contextual intelligence
2. **Study long-term effects:** Conduct longitudinal studies on user well-being, cognitive impacts, and social effects of extended XR use
3. **Establish Living Labs:** Create real-world testing environments for iterative development and validation of immersive technologies
4. **Develop evaluation frameworks:** Create standardised tools and protocols for measuring Quality of Experience, acceptability, and trustworthiness

### For Policymakers
1. **Promote accessibility:** Ensure regulations mandate inclusive design practices that accommodate users with diverse abilities and backgrounds
2. **Support digital literacy:** Fund training programs to equip citizens with skills necessary for effective XR interaction
3. **Enable data portability:** Establish legal frameworks for seamless transfer of digital identities and assets across Virtual Worlds
4. **Foster collaboration:** Encourage partnerships between research institutions, industry, and user communities to address complex UX challenges

### Cross-References
- **2a. Visualisation, Sensing, Devices and Immersion:** For foundational technologies enabling interaction
- **2c. Authoring and Experience Design:** For content creation tools supporting interactive Virtual Worlds
- **2d. Standardisation and Interoperability:** For technical standards enabling cross-platform experiences
- **2e. Digital Twins, Assets, and People:** For avatar systems and digital identity management
- **2f. Applied Artificial Intelligence:** For AI-driven adaptive systems and co-creative workflows
- **3a. Human Rights, Safety, Participation:** For ethical considerations in user data collection and well-being
- **3e. Trust and Human Oversight:** For trustworthiness and data protection frameworks
