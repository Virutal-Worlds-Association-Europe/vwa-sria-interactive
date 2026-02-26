# 2a. Visualisation, Sensing, Devices and Immersion

## Scope

The visualisation, sensing, devices, and immersion domain encompasses the foundational technologies that enable Extended Reality (XR) experiences. This chapter addresses critical hardware and software innovations across display technology, optical components, sensors, wearable devices, and multimodal immersion capabilities. These elements form the technological bedrock for creating compelling, ubiquitous, and sustainable XR experiences.

Key challenges include achieving all-day wearable devices with sufficient battery life, miniaturising components while maintaining performance, ensuring privacy-aware sensing and connectivity, and advancing multimodal immersion through haptics, spatial audio, and emerging sensory interfaces.

---

## Research Topics for Visualisation

### 2a.1 Compact and Efficient Display Technologies

**Challenges and opportunities:**
Developing compact, high-performance near-eye displays is critical for achieving ergonomic, all-day wearable XR devices. Current display technologies face significant constraints in size, power consumption, and optical efficiency, limiting the development of lightweight headsets suitable for extended use.

**Research and Innovation Objectives:**
- Develop ultra-compact microdisplay technologies (microLED, microOLED, LCoS) with enhanced brightness, contrast, and energy efficiency
- Research novel architectures combining multiple display technologies to achieve optimal performance across different use cases
- Advance photonic integration techniques to miniaturise optical components while maintaining display quality
- Explore holographic and light-field display technologies for improved depth perception and reduced vergence-accommodation conflict

### 2a.2 Wide Field-of-View Optical Systems

**Challenges and opportunities:**
Achieving wide field-of-view (FOV) while maintaining compact form factors and high optical quality represents a fundamental challenge in XR optics. Current systems require substantial trade-offs between FOV, image quality, and device size.

**Research and Innovation Objectives:**
- Design advanced optical systems leveraging freeform optics, waveguides, and pancake lenses to expand FOV beyond 120° while reducing device thickness
- Develop varifocal and multifocal display systems to address vergence-accommodation conflict
- Research adaptive optical systems that dynamically adjust to user requirements and environmental conditions
- Advance computational imaging techniques to correct optical aberrations and enhance perceived image quality

### 2a.3 High Resolution and Dynamic Range

**Challenges and opportunities:**
Human visual perception demands extremely high resolution (>60 pixels per degree) and dynamic range to achieve truly convincing XR experiences. Current systems fall short of these requirements, particularly in AR scenarios with varying ambient lighting.

**Research and Innovation Objectives:**
- Develop display technologies capable of delivering retinal resolution across the full field of view
- Research high dynamic range (HDR) display systems suitable for both indoor and outdoor AR applications
- Advance foveated rendering techniques combined with eye-tracking to optimise computational resources
- Explore neuromorphic displays that directly interface with human visual processing

## Research Topics for Sensing

### 2a.4 Advanced Spatial Sensing and Tracking

**Challenges and opportunities:**
Accurate real-time spatial sensing and tracking are fundamental for convincing XR experiences. Current SLAM (Simultaneous Localisation and Mapping) systems require improvements in robustness, accuracy, and computational efficiency.

**Research and Innovation Objectives:**
- Develop next-generation SLAM algorithms capable of operating in challenging environments (low light, dynamic scenes, textureless surfaces)
- Research sensor fusion techniques combining cameras, LiDAR, IMUs, and other modalities for robust tracking
- Advance inside-out tracking systems that eliminate the need for external infrastructure
- Explore AI-powered scene understanding for semantic mapping and real-time environment interpretation

### 2a.5 Eye and Facial Tracking Technologies

**Challenges and opportunities:**
Eye and facial tracking enable critical capabilities including foveated rendering, gaze-based interaction, attention monitoring, and social presence through avatar animation. Current systems lack the precision, robustness, and integration required for seamless XR experiences.

**Research and Innovation Objectives:**
- Develop high-precision eye-tracking systems (sub-degree accuracy) with minimal latency for foveated rendering
- Research facial tracking technologies for capturing subtle expressions and emotional states
- Advance integration of tracking systems into compact headset designs without compromising performance
- Explore privacy-preserving tracking methods that process sensitive data on-device

### 2a.6 Physiological and Cognitive State Sensing

**Challenges and opportunities:**
Understanding the user's attention, cognitive state, emotional state, and physiological condition is essential for adaptive XR experiences. However, current biosensors are often obtrusive, unreliable, or unsuitable for integration into wearable devices.

**Problem Definition and Research Gap:** A significant research gap is the lack of unobtrusive, reliable, and validated (bio)sensors suitable for long-term integration into XR wearables. There is a need to develop sensors and biosensors that can be seamlessly integrated into head-mounted displays for improved fit, comfort, and aesthetics. Addressing significant privacy and ethical concerns associated with collecting and interpreting sensitive inner state data is paramount. Challenges remain in robustly interpreting complex bio signals (e.g., EEG, ECG, EDA) to accurately infer cognitive states like attention, workload, or emotional valence, especially outside controlled lab settings. Furthermore, there is a need to develop user-tailored interfaces and data interpretation methods that preserve user privacy, potentially through federated learning approaches that keep user-specific knowledge on the device. User-specific adaptations of interaction and experience based on physiological, physical, and world data also present a significant research area.

**Research and Innovation Objectives:**
- Develop skin-interfaced biosensors for continuous, unobtrusive physiological monitoring (e.g., EEG, EMG, temperature, hydration) and investigate their integration into smart textiles or accessories associated with the XR experience
- Research and develop sensors and biosensors (e.g., eye-tracking, SWIR sensing, facial expression sensors, HR sensors) to provide deeper insights into the user's physiological state, including cognitive state, emotional state, biological state, attention, and intent
- Explore and implement biometric processing directly on sensors or within systems, specifically designing solutions that adhere to stringent privacy constraints to protect sensitive user data

### 2a.7 Sensing Suite for Understanding Real-World Semantics and Affordances

**Challenges and opportunities:**
To enable AR applications that genuinely react to context, a standardised approach is required for understanding real-world semantics and affordances. Current world representations, relying solely on 3D geometry reconstruction (e.g., SLAM), are insufficient for developing contextualised applications that leverage each user's personal environment.

**Problem Definition and Research Gap:** The primary problem is that current world representations, largely based on geometric reconstruction, are insufficient for enabling contextualised applications. There is a need to extend these representations to a higher-level understanding of real-world semantics and affordances. At present, solutions for achieving this high-level understanding are either non-existent or are at a very early stage.

**Research and Innovation Objectives:**
- Investigate and implement AI solutions, potentially through dedicated AI chips and software, for on-device sensing interpretation to derive high-level semantic information and affordances from real-world input
- Define and develop standardised data formats and Application Programming Interfaces (APIs) for semantic information to ensure interoperability across various devices and applications, facilitating a shared understanding of the real world for AR applications

### 2a.8 Privacy-Aware Sensing and Connectivity in Extended Reality

**Challenges and opportunities:**
Privacy-aware sensing and robust connectivity are of paramount importance in XR environments, particularly due to the depth and sensitivity of data collected for world and user understanding. These elements are crucial not only to ensure effective functionality of XR systems but also to align with fundamental EU values such as inclusivity, safety, security, and the protection of personal data.

**Problem Definition and Research Gap:** Despite the growing ubiquity of AR/VR/XR systems, there is a fundamental lack of established methodologies for ensuring privacy-aware sensing and secure connectivity. Current practices rely heavily on cloud-based infrastructure, often hosted outside the EU, exposing personal data to significant risks during transmission (via Wi-Fi, landline, mobile networks) and while stored remotely. Moreover, sensing mechanisms typically operate without integrated privacy protections, resulting in unnecessary propagation of sensitive data. The Technology Readiness Level (TRL) of existing privacy-preserving techniques in XR remains low, and there is a pressing need for interoperable, edge-centric architectures that minimize third-party exposure and ensure compliance with regulations such as GDPR and the Data Act.

**Research and Innovation Objectives:**
- Define and develop standardised methodologies for privacy-aware sensing in XR environments that reduce the exposure of sensitive data to third parties, while maintaining sensing effectiveness
- Investigate and embed privacy-enhancing technologies (PETs) directly into sensing hardware (e.g. through hardware-based watermarking) and software pipelines, operationalising privacy-by-design principles from the ground up
- Develop local edge computing architectures that reduce the need to propagate personal data to cloud or non-EU infrastructure, thereby keeping processing near the user
- Implement low-bandwidth and secure communication protocols and develop sovereign wearable OS and connectivity stacks fully aligned with EU privacy standards
- Investigate and apply confidential computing, hardware/software attestation, and personal data stores, ensuring encryption and security across the entire data lifecycle—including during use of emerging standards such as 6G

### 2a.9 Synergies Between Brain-Computer Interfaces and Virtual Reality

**Challenges and opportunities:**
Exploring the synergies between Brain-Computer Interfaces (BCI) and VR is crucial for transcending the limitations of traditional input devices. This research promises a more natural and direct connection to Virtual Worlds, unlocking novel applications across various sectors for professionals in training and rehabilitation, individuals with motor impairments, and researchers pushing the boundaries of immersive experiences.

**Problem Definition and Research Gap:** The primary difficulty lies in developing robust, user-friendly, and highly integrated BCI-driven VR solutions that enable seamless communication between neural interfaces and Virtual Worlds. Currently, the technology is at a low TRL (2-3), with early-stage academic research primarily demonstrating proof-of-concept for basic BCI-driven VR interactions and neurofeedback applications. End-user adoption is nascent, largely confined to specialised research labs and niche clinical or high-performance training environments, though some gaming applications are beginning to emerge.

**Research and Innovation Objectives:**
- Integrate advanced neuro-sensing hardware with high-fidelity VR display and haptic feedback systems to create comprehensive BCI-driven VR solutions
- Leverage AI for real-time neural signal processing and to enable adaptive virtual environments that respond dynamically to brain activity
- Conduct extensive neuroscientific studies, develop advanced signal processing techniques, and apply machine learning for BCI decoding, alongside human-computer interaction design and iterative UX evaluations to refine integrated BCI-driven VR systems

## Research Topics for Devices

### Overview: Enabling Ubiquitous and Sustainable Experiences

AR/VR/MR devices serve as interactive terminals, combining visualisation and sensing for immersive experiences. A key challenge is the absence of ubiquitous, all-day wearable XR devices, starting with HMDs, largely due to limitations in ergonomics, battery life, and connectivity. Addressing this requires developing ultra-low power components, high-capacity batteries, and sovereign, privacy-compliant systems. Miniaturisation, energy efficiency, and sustainability are paramount for mass market penetration. Advanced photonic integration and packaging techniques are crucial for achieving cost-effective solutions.

### 2a.10 Extended Reality Wearable Device Power Consumption and Battery Life

**Challenges and opportunities:**
Minimising the overall power consumption of XR wearable devices and maximising their battery life is paramount. This directly enables all-day use without frequent recharging, providing uninterrupted experiences for both consumers and professionals. Overcoming current battery limitations is a key step towards ubiquitous adoption and practical everyday functionality.

**Problem Definition and Research Gap:** The primary problem is that current wearable XR devices are unable to sustain continuous visualisation for longer than eight hours on a single battery charge. This significant limitation hinders the widespread adoption of these devices for all-day use cases. There is a clear research gap in developing technologies and methodologies that drastically reduce power consumption across all device components and enhance battery performance.

**Research and Innovation Objectives:**
- Develop ultra-low power consumption chip designs and components for XR wearables, alongside high-efficiency optical see-through concepts to reduce power demands
- Investigate and implement advanced energy-harvesting solutions, high-capacity batteries, and novel battery materials/components, including wireless electric charging concepts
- Explore methodologies such as offloading computation-intensive tasks from XR wearables to other local devices with higher battery capacity and implementing low-bandwidth data communication within and to/from the device

### 2a.11 Minimize the Overall Form Factor of Extended Reality Wearables

**Challenges and opportunities:**
Minimising the overall form factor of XR wearables is crucial to enable ergonomic, aesthetic, and cost-effective all-day ubiquitous use for both consumers and professionals. This directly addresses current limitations in device comfort and portability, making them suitable for continuous wear and broader societal integration.

**Problem Definition and Research Gap:** Current XR visualisation wearables are generally too large and heavy for all-day wear and do not meet ergonomic expectations regarding weight, volume, portability, aesthetics, or visual comfort. A significant research gap lies in developing seamless and intuitive input modes for user interaction with visualisation (e.g., voice, unobtrusive gestures, 'thinking') that do not add to the form factor. Furthermore, effectively managing heat dissipation towards the user within a highly miniaturised device remains a key challenge. Current end-user adoption rates are low due to these ergonomic and form factor limitations.

**Research and Innovation Objectives:**
- Develop monolithic and hetero-integration techniques for various photonic components and advanced packaging solutions, such as chiplets, to achieve significant miniaturisation
- Research and design seamless and intuitive input modes, including non-invasive brain-computer interfaces, that allow users to interact with the visualisation without requiring bulky external controls
- Employ user-centric conception methodologies and design for manufacturing and assembly principles to ensure that miniaturisation and ergonomics are inherent to the device's development cycle

### 2a.12 Embodied Artificial Intelligence

**Challenges and opportunities:**
The integration of Embodied AI into XR devices is essential as these wearables increasingly become carriers for AI agents that interact directly with the end-user and other agents in the environment. This ensures devices are prepared to support such agents from both a computational and connectivity perspective. This is particularly significant given the potential for AR glasses to replace smartphones, with user interfaces becoming agentic (e.g., through natural speech), requiring numerous hardware innovations for scalable and fit-for-purpose deployment.

**Problem Definition and Research Gap:** The primary problem centres on the demanding computational requirements for running AI algorithms that enable agents to operate effectively, specifically regarding the high number of floating-point operations per second (FLOPS) and, critically, memory. Determining the optimal cloud-edge continuum hardware/software architecture for diverse use-cases is non-trivial, requiring a careful balance of latency, energy expenditure, data privacy, and cost. While NPUs and other hardware systems exist for agentic systems on smartphones, integrating them into AR devices remains challenging due to constraints on area, cost, energy expenditure, FLOPS, and memory. Current solutions often rely on a companion device (e.g., smartphone) for connectivity, indicating a need for on-device autonomy. End-user adoption of agentic AI is currently low, largely in the prototype phase.

**Research and Innovation Objectives:**
- Introduce edge/embedded AI hardware chips directly into wearable devices to enable real-time processing capabilities for embodied AI
- Design ultra-low power processors specifically with embedded AI accelerators to meet the stringent energy consumption requirements of wearables
- Develop techniques and architectures to enable the deployment of local Large Language Models (LLMs) on wearable devices, reducing reliance on continuous cloud connectivity

### 2a.13 Agentic Artificial Intelligence Compatible Extended Reality Devices

**Challenges and opportunities:**
Making XR devices compatible with Agentic AI at the hardware level is crucial because these devices are increasingly becoming carriers for AI agents that interact directly with users and other agents in their environments. This ensures that AR devices possess the necessary compute and connectivity capabilities to support such agents, paving the way for AR glasses to potentially substitute smartphones, with user interfaces evolving to become primarily agentic (e.g., using natural speech).

**Problem Definition and Research Gap:** The problem revolves around the substantial computational demands of running algorithms for agent operation, requiring significant FLOPS and, critically, memory. A non-trivial challenge lies in identifying the correct cloud-edge continuum hardware/software architecture for different use-cases, balancing requirements such as latency, energy expenditure, data privacy, and cost. While NPUs and other hardware systems exist for agentic systems on smartphones, integrating them into AR devices remains very difficult due to constraints in area, cost, energy expenditure, FLOPS, and memory. Connectivity is often handled via a companion device (e.g., smartphone), indicating a need for more autonomous device connectivity. Agentic AI is emerging but remains largely in the prototype phase (TRL 6).

**Research and Innovation Objectives:**
- Develop advanced computing hardware solutions, including chiplets and vertical memory data lanes, potentially leveraging CMOS 2.0 technologies, to meet the high computational demands of agentic AI within compact AR devices
- Research and implement next-generation wireless connectivity solutions, such as Ultra-Wideband (UWB), Bluetooth 6, and 6G, to ensure seamless and high-bandwidth communication for on-device and distributed agentic AI operations
- Investigate and design hardware/software architectures that efficiently balance the computational burden between the device and the cloud, optimising for latency, energy consumption, data privacy, and overall system cost for various agentic AI use cases

## Research Topics for Immersion

### Overview: Deepening Engagement and Presence

Immersion in Virtual Worlds is achieved by blending real and virtual information, significantly enhanced by multisensory feedback. While visual input has been dominant, peripheral devices now offer diverse sensory modalities for interaction. A critical challenge lies in synchronising these various sensory inputs across the user's body and within multi-user environments. This demands sophisticated device design and algorithms for seamless spatial and temporal feedback. Advancing these capabilities is key to deeper, more coherent immersive experiences.

### 2a.14 Multimodal Immersive Collaboration

**Challenges and opportunities:**
As digital collaboration becomes increasingly spatial, remote, and device-diverse, the inability to coordinate UX across heterogeneous devices hinders fluidity, limits accessibility, and creates friction in co-creation, learning, and decision-making processes. This research directly addresses these challenges by enabling seamless coordination across a fragmented landscape of devices, transforming individual sensory depth into a shared, coherent experience distributed among diverse interfaces.

**Problem Definition and Research Gap:** Currently, no existing framework allows for the seamless orchestration of multimodal experiences across the fragmented landscape of devices, leading to isolated interactions and a lack of coherence in shared digital contexts (e.g., design reviews, hybrid classrooms, collaborative planning). The research gap involves fundamentally redefining immersion to mean a shared, coherent experience distributed among heterogeneous devices, rather than solely individual sensory depth. Current approaches are at TRL 3-5, with partial or vertical solutions that lack generalisability, adaptability, standardisation, and cross-platform integration. End-user adoption is low to moderate due to technical complexity, poor onboarding, and a lack of open, replicable solutions.

**Research and Innovation Objectives:**
- Explore a distributed, device-agnostic architecture capable of dynamic, role-sensitive, and context-aware rendering of shared content and interactions across XR headsets, mobile devices, and projected environments
- Develop methodologies combining iterative prototyping, user-centred design, and in-situ experiments within co-creative, educational, or hybrid professional contexts
- Evaluate the usability, scalability, and user adoption of proposed orchestration layers in practical collaborative settings

### 2a.15 Multi-Sensory Telepresence for Remote Collaboration

**Challenges and opportunities:**
Achieving high-fidelity telepresence using XR, volumetric capture, spatial audio, advanced haptics, and AI is crucial for enabling remote collaboration that genuinely mimics physical presence. This technology promises to reduce travel, facilitate rich and human-centred remote interaction, improve remote team productivity, enhance cross-border collaboration, and ultimately foster greater inclusion across various sectors.

**Problem Definition and Research Gap:** The primary research gap lies in the absence of any current system that seamlessly integrates real-time holography, multimodal feedback, network optimisation, and a human-centred experience into a single scalable solution. Technologies like holoportation, 3D avatars, and haptic clothing are currently fragmented and immature, typically existing only as lab prototypes (TRL 3-4). Scaling these solutions to a broader audience requires breakthroughs in hardware design, edge computing and 6G communication. End-user adoption is extremely low, limited to research and demonstrations, with no solution currently available for the general public, despite high interest across sectors.

**Research and Innovation Objectives:**
- Develop technologies for real-time 3D capture and mixed reality display systems, integrated with ultra-low latency streaming for seamless remote interaction
- Design modular multisensory systems that include advanced haptics and privacy-by-design principles, utilising AI-driven compression and translation for efficient data handling
- Conduct exploratory system integration, evaluate Quality of Experience (QoE) for multi-sensory devices, implement emotion-aware UX design, and develop open standards for edge/cloud architecture and security audits

### 2a.16 Multimodal Haptic Design

**Challenges and opportunities:**
Multimodal programmable haptics is vital for enhancing realism and skill transfer in XR-based training through multisensory feedback. Combining several haptic stimuli improves precision, builds confidence, and reduces cognitive load in complex tasks. This capability is also indispensable for remote operation scenarios in hazardous or inaccessible environments, providing appropriate haptic feedback that simulates real-world interactions.

**Problem Definition and Research Gap:** Current haptic feedback systems are largely limited to basic vibrations or simple force feedback. There is a significant research gap in developing context-sensitive, scalable, and wearable haptic systems capable of simulating complex properties like material textures, nuanced tool interactions, or fine motor gestures. While lab demonstrations exist for technologies such as wearable exoskeletons, ultrasonic haptics, and electro tactile interfaces (TRL 3-5), their real-time integration into XR workflows remains immature. End-user adoption is very low, primarily due to the high cost, bulkiness, or complexity of current haptic devices, although there is strong interest from advanced industrial sectors.

**Research and Innovation Objectives:**
- Develop modular, wearable, low-latency haptic systems (e.g., gloves, vests, handheld tools) with programmable feedback profiles that can be linked to Digital Twins and XR simulations
- Research and implement real-time coupling between haptic systems and physics engines, alongside AI, to accurately simulate resistance, textures, and event-driven haptic sensations
- Conduct comprehensive haptic signal modelling and material simulation, focusing on hardware miniaturisation and wearable ergonomics, while performing usability studies and psychophysics validation for applications

### 2a.17 Spatial and Adaptive Sound Design

**Challenges and opportunities:**
Sound is a critical driver of presence, realism, and cognitive focus within XR environments. It enhances situational awareness, emotional engagement, and action timing, yet its potential is often secondary in XR design. In safety-critical or educational contexts, sophisticated acoustic cues can effectively guide user behaviour, reduce visual overload, and significantly improve learning outcomes.

**Problem Definition and Research Gap:** Most XR systems currently rely on simple stereo or non-contextual spatial audio. There is a significant research gap in designing and integrating real-time, personalised, and dynamic soundscapes, as these remain difficult to achieve and are poorly integrated into existing systems. A key limitation is the lack of models associated with appropriate devices that can adapt audio feedback to a user's position, task, and environment, especially in shared XR spaces. Core technologies (e.g., ambisonics, binaural rendering, spatial audio engines) exist at TRL 4-5, but their seamless integration into XR workflows, multi-user setups, and adaptive models is limited. End-user adoption remains low to medium, primarily confined to high-end VR games and simulations, due to complexity and lack of awareness and tools.

**Research and Innovation Objectives:**
- Integrate interactive sound engines with XR platforms, leveraging head tracking, gesture recognition, scene analysis, and AI to dynamically adjust audio cues in real-time
- Include auditory icons, voice spatialisation, acoustic AR, and multimodal synchronisation within immersive sound design
- Develop methodologies encompassing acoustic scene modelling, psychoacoustics, user testing, and sound design prototyping, alongside adaptive feedback loops and cross-modal attention studies

### 2a.18 Olfactory Interfaces for Scent-Driven Interaction

**Challenges and opportunities:**
Developing compact, programmable olfactory systems and scent-based interaction models for XR applications is crucial for enhancing immersion through scent-driven interaction. Smell is profoundly linked to emotion, memory, and realism, yet it is largely absent from current digital experiences. In XR, olfactory cues can significantly deepen presence, aid learning, and enable multisensory storytelling. For specific applications like safety training, food sciences, or cultural heritage, olfaction can recreate essential contextual information.

**Problem Definition and Research Gap:** Current olfactory systems are generally bulky, offer a limited range of scents, suffer from slow diffusion, and exhibit poor synchronisation with visual and other sensory feedback. There is no standardised interface for olfactory output within XR. Integration with digital scenes and user interaction remains minimal, alongside a critical lack of user studies and frameworks for olfactory UX. These technologies are currently at a low TRL (2-4), with early prototypes existing but no widely usable or standardised platform. End-user adoption is extremely low, confined mostly to niche art installations or experimental labs, hindered by cost, hardware complexity, hygiene concerns, and challenges in content design.

**Research and Innovation Objectives:**
- Develop wearable or headset-mounted olfactory modules, alongside digital scent libraries and authoring tools, to enable precise triggering, synchronisation, and personalisation of scent delivery
- Conduct extensive research into odour diffusion modelling, hardware miniaturisation, and user-centred olfactory UX design, coupled with psychophysical studies and cross modal perception research to understand and optimise scent-based interactions

---

## Strategic Recommendations

### For Industry and Developers
1. **Invest in miniaturisation and energy efficiency:** Prioritise the development of ultra-low power components and advanced battery technologies to enable all-day wearable XR devices
2. **Adopt privacy-by-design principles:** Integrate privacy-enhancing technologies from the ground up, ensuring compliance with EU regulations and building user trust
3. **Embrace multimodal interaction:** Develop systems that seamlessly integrate visual, auditory, haptic, and emerging sensory modalities for richer immersive experiences
4. **Leverage AI for adaptive experiences:** Integrate embodied and agentic AI capabilities to create intelligent, context-aware XR systems

### For Research Institutions
1. **Focus on cross-disciplinary collaboration:** Address the complex challenges in visualisation, sensing, and immersion through partnerships spanning engineering, neuroscience, human-computer interaction, and design
2. **Advance fundamental technologies:** Conduct research into novel display technologies, sensing mechanisms, and interaction paradigms that push beyond current limitations
3. **Develop standardised frameworks:** Create open standards and APIs for semantic information, sensor data, and multimodal experiences to enable interoperability

### For Policymakers
1. **Support sustainable XR development:** Encourage research and innovation in energy-efficient, long-lasting devices aligned with circular economy principles
2. **Ensure privacy and data protection:** Establish clear regulatory frameworks for the collection, processing, and storage of sensitive physiological and biometric data in XR contexts
3. **Foster European technological sovereignty:** Invest in sovereign OS, connectivity stacks, and edge computing architectures to reduce dependence on non-EU infrastructure
4. **Promote inclusive design:** Ensure that XR technologies are accessible and beneficial to all citizens, regardless of abilities or backgrounds

### Cross-References
- **2b. Real-time User Interaction:** For integration of sensing data into interaction models
- **2c. Authoring and Experience Design:** For content creation tools leveraging advanced visualisation capabilities
- **2f. Applied Artificial Intelligence:** For AI-driven sensing interpretation and adaptive systems
- **3a. Human Rights, Safety, Participation:** For ethical considerations in physiological sensing
- **3e. Trust and Human Oversight:** For privacy-aware sensing and data governance
