# 2a Visualisation, Sensing, Devices and Immersion

The transformative potential of Virtual Worlds (VW) hinges critically upon significant advancements in
Human Machine Interfaces (HMI) to create seamless and effective User Experiences (UX) across the
continuously expanding range of professional and consumer Extended Reality (XR) applications. While
direct view displays like smartphones have a role, our focus here is on near-to-eye 'virtual view' displays,
such as head-mounted displays (HMDs), with future possibilities even extending to 'on-eye' devices or
direct neural interfaces. HMDs—including advanced headsets and smart glasses—are essential to
offering truly immersive modalities and are repeatedly identified as critical enablers across all use cases.
Improving their performance, comfort, and sustainability is a central research and innovation priority to
support the transition to VW. Also, multi-sensory applications are in scope. Defining the next generations
of these physical interfaces for Virtual, Augmented, and Mixed Realities demands a holistic,
transdisciplinary approach, encompassing technological innovation, user-centricity, ethical
considerations, and sustainability. This hardware-oriented chapter envisions the research priorities
needed to build a European industrial and technological roadmap for immersive technologies, with dual
use capabilities (civil and defence applications). They are categorised into four foundational layers:
Visualisation, Sensing, Devices, and Immersion.

Realising the full potential of these immersive experiences faces myriad integrated challenges.
Fundamentally, devices must be user-centric, intuitive, and eventually adaptive or assistive, minimising
learning curves and maximising accessibility for all users, including those with sensory impairments or
disabilities, while rigorously addressing critical safety and health impacts, such as motion sickness and
long-term visual health.

Concurrently, accurate sensing of the user's environment and behaviour is paramount for responsive
and adaptive immersive systems. This requires sophisticated sensors and advanced AI to capture and
interpret both explicit inputs (e.g., voice, gesture, facial expressions) and implicit cues (e.g., attention,
intent, emotion), alongside contextual data. Effective data transmission and reception are vital to handle
the increasing data volume, ensuring smooth and uninterrupted experiences. Within this data-rich
environment, privacy and ethics compliance are fundamental, demanding robust protection of user
data, transparency, and adherence to ethical guidelines to build trust and ensure regulatory approval.

From a hardware perspective, devices must be compact, wearable, and untethered to afford users
mobility and comfort, requiring lightweight, ergonomic designs capable of autonomous operation.
Crucially, energy consumption must be optimised as these wearables become more complex and
resource-intensive, extending portable device usability and reducing environmental impact. A growing
imperative is sustainability, focusing on creating recyclable, reparable hardware aligned with circular
economy principles, and reducing reliance on critical materials.

Furthermore, AI integration is pivotal, enhancing immersive system capabilities from user interaction to
system performance, demanding efficient computing power management for real-time rendering,
sensing, and interaction. Multimodal interactions and multiuser utilisation are essential for fostering
collaborative and social experiences, requiring sensing systems that can accommodate multiple users
simultaneously and provide meaningful shared engagements with effective feedback mechanisms.
Finally, achieving truly immersive, closer-to-reality experiences necessitates integrating all human
senses, moving beyond visual stimuli to include auditory, haptic, olfactory, and gustatory feedback. This
level of immersion, alongside robust interoperability across diverse platforms, devices, and applications,
will ensure seamless, low-latency, and high-fidelity experiences vital for user satisfaction.

Addressing these interconnected global challenges is vital for advancing the development and adoption
of immersive technologies. By strategically focusing on user-centric design, health and safety, hardware
innovation, energy efficiency, sensory integration, interoperability, data management, privacy and ethics,
sustainability, AI integration, and multimodal interactions, Europe can pave the way for a new generation
of engaging, accessible, and sustainable immersive experiences.

<div class="image-invert-light">

![Immersive Technologies](/img/immersive-technologies.png)

</div>

## Research topics for visualisation, sensing and devices

This section explores the critical technology blocks required to develop immersive visualisation
interfaces, advanced multimodal sensors and integrated wearable devices, detailing their significance,
current challenges, and proposing strategic research and innovation objectives.

### Visualisation: Realism in immersive experiences

Visualisation technologies are the primary interface in virtual, augmented, and mixed reality,
fundamentally shaping user engagement and comfort. The core objective is to deliver realistic,
perceptually coherent, and comfortable 3D experiences, necessitating advanced display systems. These
systems must balance high fidelity, compact form factors, and low energy consumption, especially for
wearable devices. Ensuring visual health (topic addressed in 3d Health Aspects Related to VW), safety,
and adaptability to individual needs are also crucial. Strategic research in this domain underpins the
sustainability and inclusiveness of future VW.

<div class="image-invert-light">

![XR Device Topology](/img/xr-device-topology.png)

</div>

### 2a.1 High quality, low energy and safe images

Achieving full-colour, high-brightness, and high-resolution images with low energy consumption and a
wide field of view is crucial for enhancing realism and ensuring visibility across various lighting
conditions, particularly for AR. This aims to improve user immersion and peripheral awareness by
minimising geometric aberrations. Additionally, low latency and fast response times are vital for reducing
motion blur and simulator sickness, while comprehensive synchronisation mechanisms (e.g., Genlock,
Vsync) are necessary to match framerates between diverse devices. Ensuring colour accuracy,
uniformity, and dynamic range further supports naturalistic rendering, all while carefully managing
brightness and guaranteeing eye safety for end users.

**Problem Definition and Research Gap:**
For wearable devices, achieving these high-fidelity visual
metrics is severely constrained by form factor and power budgets. Current Virtual Reality (VR) headsets
suffer from insufficient angular resolution and restricted fields of view, especially in the bottom field for
near vision, alongside nasal restrictions that hinder comfortable binocular fusion. Large temporal fields
of view often introduce optical distortions. In optical see-through architectures, the low transfer
efficiency of existing optical combiners necessitates very high-brightness displays. Furthermore,
balancing resolution with frame rate in real-time image processing remains a significant challenge.
Overall, substantial research efforts are needed to optimise performance and overcome practical design constraints.

**Research and Innovation Objectives:**
- Develop and optimise display technologies such as Foveated displays, Micro-OLED, OLED-on
  silicon, and MicroLEDs to deliver high-quality, full-colour, real-time images with enhanced
  brightness and resolution, while achieving low energy consumption and compact light engines.

- Address manufacturing challenges for emerging display technologies like MicroLEDs and
  overcome issues in Laser Beam Scanning (LBS) related to speckle, safety, eye box, and image
  uniformity, to enable compact and lightweight designs suitable for immersive applications.

- Investigate and implement solutions such as local dimming for optical see-through Augmented
  Reality (AR) devices to improve contrast and develop transparent micro displays to eliminate the
  need for external optical combiners and exit pupil expansion, thereby enhancing overall system
  efficiency and UX.

### 2a.2 Optical components

Developing versatile and scalable fabrication technologies for novel optical components is crucial for
achieving compact optical architectures without compromising visual quality or adding excessive weight
to devices. This directly contributes to the miniaturisation of VR, AR and MR headsets, enabling greater
ease of personalisation and significantly reducing manufacturing costs for industrial players. These
advancements are essential for creating more aesthetically pleasing and comfortable wearable immersive technologies.

**Problem Definition and Research Gap:**
The primary problem lies in the inherent bulkiness of traditional
refractive optics, which severely limits the miniaturisation of XR headsets. Existing optical combiners
utilising waveguides are often bulky, heavy, and non-aesthetic. Furthermore, folded optics suffer from
significant optical inefficiencies, with light transmission frequently below 25%. Diffractive optical
elements (DOEs) and holographic optical elements (HOEs) are promising but currently plagued by
chromatic aberrations and limited efficiency, particularly in broadband or full-colour applications. While
Meta optical elements (MOEs) or Metasurfaces offer potential, achieving broadband, full-colour
performance with high efficiency remains a substantial technical challenge. Across DOE, HOE, and MOE
technologies, industrial scalability is identified as a major bottleneck.

**Research and Innovation Objectives:**
- Advance the development of flat optics, metasurfaces, diffractive optical elements, and
  waveguides, focusing on their maturity for use as optical combiners or integrated optics to
  enable compact and high-performance immersive devices.

- Research and implement industrial processes for micro- and nanofabrication of DOEs and
  MOEs, including photolithography, nanoimprint, and 3D printing, to ensure scalability and cost
  effective production of these novel optical components.

- Explore and utilise high refractive index materials with industrial processing means, which are
  essential for manufacturing flat optics or organic optical waveguides that can meet the stringent
  requirements for miniaturisation and visual quality in next-generation XR hardware.

### 2a.3 User centric 3D realistic visualisation

Providing realistic 3D visualisation that prioritises user comfort is critical for enhancing perceptual
realism and depth cues in immersive experiences. Moreover, visualisation systems must accommodate
individual visual needs, such as prescription correction, interpupillary distance (IPD) adjustment, and
age or health-related vision changes. This includes also addressing common issues such as the
vergence-accommodation conflict (VAC), which impacts cognitive performance, fatigue, and cyber
sickness. Enabling a wide range of monocular and motion-based depth cues (e.g., motion parallax,
occlusion, shading, focus blur) is essential for a natural experience. Furthermore, developing optical
architectures that support aesthetic devices and user privacy (avoiding stray light), alongside facilitating
natural and shared spatial understanding in collaborative environments, positions multi-perspective
visualisation as a cornerstone for future immersive systems.

**Problem Definition and Research Gap:**
A significant research gap exists across diverse immersive
technologies (optical see-through, video see-through, VR, contact lenses, large screens) due to their
varied requirements. Most current optical see-through AR devices are monocular with limited fields of
view (20-30°), and existing wearable products poorly manage prescription needs, often relying on add-on
lenses. Achieving effective 3D perception and seamless superposition between virtual images and the
real environment is crucial but challenging, directly impacting the feeling of immersion. Managing cyber
sickness (including VAC) and ensuring user comfort during prolonged wear (e.g., weight, eye strain)
remain significant obstacles. While light field and holographic displays offer potential, they are currently
prohibitively expensive and bulky for widespread deployment. Furthermore, robust multimodal
orchestration is needed for integrating with interaction systems (gestural, vocal, spatial input) across
multiple users, and there is a critical absence of a unified protocol or software layer to support cross
device, cross-platform multi-perspective display technologies.  Overall, this topic has very low technological maturity.

**Research and Innovation Objectives:**
- Develop Spatial Light Modulators, Light Field displays, and holographic displays, alongside the
  use of dynamic optical layers (e.g., Liquid Crystals, metasurfaces) to modulate depth perception
  and mitigate vergence-accommodation conflict (VAC) based on gaze direction or object depth,
  requiring new optically active materials.

- Explore and develop novel technologies and paradigms for real-time multipoint-of-view
  visualisation, including display systems combining directional optics, rear projection, and
  adaptive rendering for multi-user, headset-free 3D visualisation.

- Implement real-time light field rendering with spatial foveation and neural interpolation for
  computational efficiency and integrate low latency multiview user tracking to drive dynamic
  scene recomposition tailored to each observer in collaborative immersive environments.

### Sensing: Bridging physical and digital realities

Sensors are fundamental to interaction between the physical and digital worlds in XR, enabling seamless
integration and immersion. While current sensing modalities exist, significant advancements are needed
for miniaturisation, energy efficiency, and computational efficiency in wearable head-mounted devices.
Multimodal sensing, leveraging techniques like sensor fusion, offers increased accuracy and resilience.
A deeper understanding of user states—attention, cognition, emotion, and intent—is vital for frictionless,
user-tailored interfaces. This necessitates user-specific, privacy-aware multi-modal sensing to realise
optimal future XR experiences.

### 2a.4 Sensing framework for digital environment representations

To effectively augment reality, the physical world must first be accurately sensed and comprehended. It
is crucial to minimise the latency between the physical reality and its digital representation, ensuring a
real-time understanding of the user's environment. The process of generating this digital representation
must also be highly energy-efficient to enable on-device processing close to the sensors, which is vital
for the battery life and practicality of wearable devices. This capability is essential for application
developers who require reliable and low-latency digital representations of the user's surroundings.

**Problem Definition and Research Gap:**
A significant research gap lies in developing adaptive and
resilient sensor fusion frameworks that can dynamically adjust to changing environmental conditions,
providing reliable sensing in open-world scenarios and potentially learning from contextual cues to
optimise performance. There is a need for energy-efficient, real-time digital representations of the user's
surroundings, encompassing not just geometry but also material properties, semantics, and object
interrelations. While current solutions for world representation, such as SLAM and spatial computing in
devices like Meta Quest 3 and Apple Vision Pro, utilise various sensors (global shutter, 3D, inertial,
microphones), further research and development are needed to improve sensor frameworks, data
fusion, and processing for reliable, on-device, and efficient digital representations. Current adoption
rates are low due to the high computational load associated with SLAM and world mesh construction. It
is acknowledged that this research topic benefits from collaboration with the ADRA partnership and that
any double work is to be prevented.

**Research and Innovation Objectives:**
- Develop adaptive and resilient sensor fusion frameworks leveraging multiple modalities for
  robust world representation in diverse and changing environments.

- Investigate novel low-power sensor designs, including neuromorphic and event-based sensing,
  alongside new materials to enhance energy efficiency for on-device operation.

- Research and implement energy-efficient on-device AI processing architectures and algorithms
  for odometry, SLAM, world mesh generation, semantic segmentation, and object segmentation.

### 2a.5 User-tailored sensing of the outer physical state of the user

Low-latency, low-power sensing of the user's outer physical state is essential for developing intuitive and
frictionless human-machine interfaces for head-mounted devices such as smart glasses. Accurate and
real-time tracking of the user's body, head, hands, and gaze is fundamental for enabling natural
interaction, achieving realistic avatar representation, and delivering personalised XR experiences that
respond seamlessly to user input.

**Problem Definition and Research Gap:**
The primary research gap involves creating adaptive and
resilient sensor fusion frameworks specifically focused on generating a digital representation of the
user's outer physical state. These frameworks must dynamically adapt to the user and changing
environmental conditions, ensuring sensing reliability in open-world scenarios and potentially learning
from contextual cues to optimise performance. A key challenge is providing an energy-efficient, real-time
digital representation of the user's physical state, including body, head, and eye pose, gaze, hands,
gestures, face, and facial expressions. Current solutions often lack the precision (e.g., sub-millimetre for
gestures), robustness (e.g., handling occlusion, rapid movements), and energy efficiency necessary for
all-day wear and truly natural interaction. While devices like Meta Quest 3 and Apple Vision Pro
incorporate sensors for basic pose, hand, and face tracking, further research into advanced sensor
frameworks, data fusion, and processing is required to achieve reliable, efficient, and on-device digital
representation.

**Research and Innovation Objectives:**
- Develop adaptive and resilient sensor fusion frameworks leveraging multiple modalities for
  robust user state sensing in open-world operations, accommodating changing user and
  environmental conditions.

- Investigate novel low-power sensor designs, including neuromorphic and event-based sensing,
  along with new materials and energy-efficient on-device AI processing architectures and
  algorithms tailored for gesture recognition, hand manipulation, micro-gestures, eye and gaze
  tracking, and head and body pose sensing.

- Research and implement advanced sensing frameworks and power management techniques to
  achieve higher precision, robustness, and energy efficiency for continuous and natural user
  interaction in wearable devices.

### 2a.6 Sensing framework for digital representation of user’s inner state

Developing low-power, low-latency sensing and interpretation frameworks for the user's inner state is
vital for creating truly frictionless human-machine interfaces. Traditional interfaces, such as buttons or
speech prompts, are often unsuitable for head-mounted platforms, as evidenced by current market
devices. A deeper understanding of the user's attention, cognitive and emotional states, and intentions
is needed to facilitate interaction through implicit communication with AI agents. This capability is key to
matching services and interfaces precisely to the user's needs and current state.

**Problem Definition and Research Gap:**
A significant research gap is the lack of unobtrusive, reliable,
and validated (bio)sensors suitable for long-term integration into XR wearables. There is a need to
develop sensors and biosensors that can be seamlessly integrated into head-mounted displays for
improved fit, comfort, and aesthetics. Addressing significant privacy and ethical concerns associated
with collecting and interpreting sensitive inner state data is paramount. Challenges remain in robustly
interpreting complex bio signals (e.g., EEG, ECG, EDA) to accurately infer cognitive states like attention,
workload, or emotional valence, especially outside controlled lab settings. Furthermore, there is a need
to develop user-tailored interfaces and data interpretation methods that preserve user privacy,
potentially through federated learning approaches that keep user-specific knowledge on the device.
User-specific adaptations of interaction and experience based on physiological, physical, and world data
also present a significant research area.

**Research and Innovation Objectives:**
- Develop skin-interfaced biosensors for continuous, unobtrusive physiological monitoring (e.g.,
  EEG, EMG, temperature, hydration) and investigate their integration into smart textiles or
  accessories associated with the XR experience.

- Research and develop sensors and biosensors (e.g., eye-tracking, SWIR sensing, facial
  expression sensors, HR sensors) to provide deeper insights into the user's physiological state,
  including cognitive state, emotional state, biological state, attention, and intent.

- Explore and implement biometric processing directly on sensors or within systems, specifically
  designing solutions that adhere to stringent privacy constraints to protect sensitive user data.

### 2a.7 Sensing suite for understanding of real-world semantics and affordances

To enable AR applications that genuinely react to context, a standardised approach is required for
understanding real-world semantics and affordances. Current world representations, relying solely on
3D geometry reconstruction (e.g., SLAM), are insufficient for developing contextualised applications that
leverage each user's personal environment. A standardised hardware/software solution that provides
structured information about objects (semantics) and their potential uses (affordances), directly
leveraged by application developers from devices, is crucial for truly context-dependent AR experiences
that benefit end users.  

**Problem Definition and Research Gap:**
The primary problem definition and research gap is that current
world representations, largely based on geometric reconstruction, are insufficient for enabling
contextualised applications. There is a need to extend these representations to a higher-level
understanding of real-world semantics and affordances. At present, solutions for achieving this high
level understanding are either non-existent or are at a very early stage.

**Research and Innovation Objectives:**
- Investigate and implement AI solutions, potentially through dedicated AI chips and software, for
  on-device sensing interpretation to derive high-level semantic information and affordances from real-world input.

- Define and develop standardised data formats and Application Programming Interfaces (APIs) for
  semantic information to ensure interoperability across various devices and applications,
  facilitating a shared understanding of the real world for AR applications.

### 2a.8 Privacy-aware sensing and connectivity in Extended Reality

Privacy-aware sensing and robust connectivity are of paramount importance in XR environments,
particularly due to the depth and sensitivity of data collected for world and user understanding. These
elements are crucial not only to ensure effective functionality of XR systems but also to align with
fundamental EU values such as inclusivity, safety, security, and the protection of personal data. Together,
they address the critical need to protect both the user and individuals in their environment from
unwanted data exposure, whether during sensing, communication, or storage in the cloud. They support
the ethical, responsible, and legally compliant deployment of immersive technologies by safeguarding
highly personal AR data throughout its lifecycle.

**Problem Definition and Research Gap:**
Despite the growing ubiquity of AR/VR/XR systems, there is a
fundamental lack of established methodologies for ensuring privacy-aware sensing and secure
connectivity. Current practices rely heavily on cloud-based infrastructure, often hosted outside the EU,
exposing personal data to significant risks during transmission (via Wi-Fi, landline, mobile networks) and
while stored remotely. Moreover, sensing mechanisms typically operate without integrated privacy
protections, resulting in unnecessary propagation of sensitive data. The Technology Readiness Level
(TRL) of existing privacy-preserving techniques in XR remains low, and there is a pressing need for
interoperable, edge-centric architectures that minimize third-party exposure and ensure compliance
with regulations such as GDPR and the Data Act.

**Research and Innovation Objectives:**
- Define and develop standardised methodologies for privacy-aware sensing in XR environments
  that reduce the exposure of sensitive data to third parties, while maintaining sensing
  effectiveness.

- Investigate and embed privacy-enhancing technologies (PETs) directly into sensing hardware
  (e.g. through hardware-based watermarking) and software pipelines, operationalising privacy-by
  design principles from the ground up.

- Develop local edge computing architectures that reduce the need to propagate personal data to
  cloud or non-EU infrastructure, thereby keeping processing near the user.

- Implement low-bandwidth and secure communication protocols and develop sovereign
  wearable OS and connectivity stacks fully aligned with EU privacy standards.

- Investigate and apply confidential computing, hardware/software attestation, and personal data
  stores, ensuring encryption and security across the entire data lifecycle—including during use of
  emerging standards such as 6G.

### 2a.9 Synergies between brain-computer interfaces and Virtual Reality

Exploring the synergies between Brain-Computer Interfaces (BCI) and VR is crucial for transcending the
limitations of traditional input devices. This research promises a more natural and direct connection to
VW, unlocking novel applications across various sectors for professionals in training and rehabilitation,
individuals with motor impairments, and researchers pushing the boundaries of immersive experiences.

**Problem Definition and Research Gap:**
The primary difficulty lies in developing robust, user-friendly,
and highly integrated BCI-driven VR solutions that enable seamless communication between neural
interfaces and VW. Currently, the technology is at a low TRL (2-3), with early-stage academic research
primarily demonstrating proof-of-concept for basic BCI-driven VR interactions and neurofeedback
applications. End-user adoption is nascent, largely confined to specialised research labs and niche
clinical or high-performance training environments, though some gaming applications are beginning to
emerge. This indicates a significant gap in translating foundational research into widely accessible and
reliable integrated systems.

**Research and Innovation Objectives:**
- Integrate advanced neuro-sensing hardware with high-fidelity VR display and haptic feedback
  systems to create comprehensive BCI-driven VR solutions.

- Leverage AI for real-time neural signal processing and to enable adaptive virtual environments
  that respond dynamically to brain activity.

- Conduct extensive neuroscientific studies, develop advanced signal processing techniques, and
  apply machine learning for BCI decoding, alongside human-computer interaction design and
  iterative UX evaluations to refine integrated BCI-driven VR systems.

### Devices: Enabling ubiquitous and sustainable experiences

AR/VR/MR devices serve as interactive terminals, combining visualisation and sensing for immersive
experiences. A key challenge is the absence of ubiquitous, all-day wearable XR devices, starting with
HMDs, largely due to limitations in ergonomics, battery life, and connectivity. Addressing this requires
developing ultra-low power components, high-capacity batteries, and sovereign, privacy-compliant
systems. Miniaturisation, energy efficiency, and sustainability are paramount for mass market
penetration. Advanced photonic integration and packaging techniques are crucial for achieving cost
effective solutions.

### 2a.10 Extended Reality wearable device power consumption and battery life

Minimising the overall power consumption of XR wearable devices and maximising their battery life is
paramount. This directly enables all-day use without frequent recharging, providing uninterrupted
experiences for both consumers and professionals. Overcoming current battery limitations is a key step
towards ubiquitous adoption and practical everyday functionality.

**Problem Definition and Research Gap:**
The primary problem definition is that current wearable XR
devices are unable to sustain continuous visualisation for longer than eight hours on a single battery
charge. This significant limitation hinders the widespread adoption of these devices for all-day use
cases. There is a clear research gap in developing technologies and methodologies that drastically
reduce power consumption across all device components and enhance battery performance.

**Research and Innovation Objectives:**
- Develop ultra-low power consumption chip designs and components for XR wearables,
  alongside high-efficiency optical see-through concepts to reduce power demands.

- Investigate and implement advanced energy-harvesting solutions, high-capacity batteries, and
  novel battery materials/components, including wireless electric charging concepts.

- Explore methodologies such as offloading computation-intensive tasks from XR wearables to
  other local devices with higher battery capacity and implementing low-bandwidth data
  communication within and to/from the device.

### 2a.11 Minimize the overall form factor of Extended Reality wearables

Minimising the overall form factor of XR wearables is crucial to enable ergonomic, aesthetic, and cost
effective all-day ubiquitous use for both consumers and professionals. This directly addresses current
limitations in device comfort and portability, making them suitable for continuous wear and broader societal integration.

**Problem Definition and Research Gap:**
Current XR visualisation wearables are generally too large and
heavy for all-day wear and do not meet ergonomic expectations regarding weight, volume, portability,
aesthetics, or visual comfort. A significant research gap lies in developing seamless and intuitive input
modes for user interaction with visualisation (e.g., voice, unobtrusive gestures, 'thinking') that do not add
to the form factor. Furthermore, effectively managing heat dissipation towards the user within a highly
miniaturised device remains a key challenge. Current end-user adoption rates are low due to these
ergonomic and form factor limitations.

**Research and Innovation Objectives:**
- Develop monolithic and hetero-integration techniques for various photonic components and
  advanced packaging solutions, such as chiplets, to achieve significant miniaturisation.

- Research and design seamless and intuitive input modes, including non-invasive brain-computer
  interfaces, that allow users to interact with the visualisation without requiring bulky external controls.

- Employ user-centric conception methodologies and design for manufacturing and assembly
  principles to ensure that miniaturisation and ergonomics are inherent to the device's
  development cycle.

### 2a.12 Embodied Artificial Intelligence

The integration of Embodied AI into XR devices is essential as these wearables increasingly become
carriers for AI agents that interact directly with the end-user and other agents in the environment. This
ensures devices are prepared to support such agents from both a computational and connectivity
perspective. This is particularly significant given the potential for AR glasses to replace smartphones,
with user interfaces becoming agentic (e.g., through natural speech), requiring numerous hardware
innovations for scalable and fit-for-purpose deployment.

**Problem Definition and Research Gap:**
The primary problem definition and research gap centres on the
demanding computational requirements for running AI algorithms that enable agents to operate
effectively, specifically regarding the high number of floating-point operations per second (FLOPS) and,
critically, memory. Determining the optimal cloud-edge continuum hardware/software architecture for
diverse use-cases is non-trivial, requiring a careful balance of latency, energy expenditure, data privacy,
and cost. While NPU's and other hardware systems exist for agentic systems on smartphones,
integrating them into AR devices remains challenging due to constraints on area, cost, energy
expenditure, FLOPS, and memory. Current solutions often rely on a companion device (e.g., smartphone)
for connectivity, indicating a need for on-device autonomy. End-user adoption of agentic AI is currently
low, largely in the prototype phase.

**Research and Innovation Objectives:**
- Introduce edge/embedded AI hardware chips directly into wearable devices to enable real-time
  processing capabilities for embodied AI.

- Design ultra-low power processors specifically with embedded AI accelerators to meet the
  stringent energy consumption requirements of wearables.

- Develop techniques and architectures to enable the deployment of local Large Language Models
  (LLMs) on wearable devices, reducing reliance on continuous cloud connectivity.

### 2a.13 Agentic Artificial Intelligence compatible Extended Reality devices

Making XR devices compatible with Agentic AI at the hardware level is crucial because these devices are
increasingly becoming carriers for AI agents that interact directly with users and other agents in their
environments. This ensures that AR devices possess the necessary compute and connectivity
capabilities to support such agents, paving the way for AR glasses to potentially substitute smartphones,
with user interfaces evolving to become primarily agentic (e.g., using natural speech). This requires
significant hardware innovations to achieve scalability and fitness-for-purpose.

**Problem Definition and Research Gap:**
The problem definition and research gap revolve around the
substantial computational demands of running algorithms for agent operation, requiring significant
FLOPS and, critically, memory. A non-trivial challenge lies in identifying the correct cloud-edge
continuum hardware/software architecture for different use-cases, balancing requirements such as
latency, energy expenditure, data privacy, and cost. While NPUs and other hardware systems exist for
agentic systems on smartphones, integrating them into AR devices remains very difficult due to
constraints in area, cost, energy expenditure, FLOPS, and memory. Connectivity is often handled via a
companion device (e.g., smartphone), indicating a need for more autonomous device connectivity.
Agentic AI is emerging but remains largely in the prototype phase (TRL 6).

**Research and Innovation Objectives:**
- Develop advanced computing hardware solutions, including chiplets and vertical memory data
  lanes, potentially leveraging CMOS 2.0 technologies, to meet the high computational demands of
  agentic AI within compact AR devices.

- Research and implement next-generation wireless connectivity solutions, such as Ultra
  Wideband (UWB), Bluetooth 6, and 6G, to ensure seamless and high-bandwidth communication
  for on-device and distributed agentic AI operations.

- Investigate and design hardware/software architectures that efficiently balance the
  computational burden between the device and the cloud, optimising for latency, energy
  consumption, data privacy, and overall system cost for various agentic AI use cases.

## Research Topics for Immersion

This section delves into critical research topics within the technological layer of multimodal immersion,
highlighting existing gaps and proposing strategic research and innovation objectives crucial for
achieving intuitive, real-time and seamless user interactions.

### Immersion: Deepening engagement and presence

Immersion in VW is achieved by blending real and virtual information, significantly enhanced by
multisensory feedback. While visual input has been dominant, peripheral devices now offer diverse
sensory modalities for interaction. A critical challenge lies in synchronising these various sensory inputs
across the user's body and within multi-user environments. This demands sophisticated device design
and algorithms for seamless spatial and temporal feedback. Advancing these capabilities is key to
deeper, more coherent immersive experiences.

### 2a.14 Multimodal immersive collaboration

As digital collaboration becomes increasingly spatial, remote, and device-diverse, the inability to
coordinate UX across heterogeneous devices hinders fluidity, limits accessibility, and creates friction in
co-creation, learning, and decision-making processes. This research directly addresses these
challenges by enabling seamless coordination across a fragmented landscape of devices, transforming
individual sensory depth into a shared, coherent experience distributed among diverse interfaces,
benefiting designers, engineers, educators, and decision-makers in hybrid environments.

**Problem Definition and Research Gap:**
Currently, no existing framework allows for the seamless
orchestration of multimodal experiences across the fragmented landscape of devices, leading to
isolated interactions and a lack of coherence in shared digital contexts (e.g., design reviews, hybrid
classrooms, collaborative planning). The research gap involves fundamentally redefining immersion to
mean a shared, coherent experience distributed among heterogeneous devices, rather than solely
individual sensory depth. Current approaches are at TRL 3-5, with partial or vertical solutions that lack
generalisability, adaptability, standardisation, and cross-platform integration. End-user adoption is low
to moderate due to technical complexity, poor onboarding, and a lack of open, replicable solutions.

**Research and Innovation Objectives:**
- Explore a distributed, device-agnostic architecture capable of dynamic, role-sensitive, and
  context-aware rendering of shared content and interactions across XR headsets, mobile devices,
  and projected environments.

- Develop methodologies combining iterative prototyping, user-centred design, and in-situ
  experiments within co-creative, educational, or hybrid professional contexts.

- Evaluate the usability, scalability, and user adoption of proposed orchestration layers in practical
  collaborative settings.

### 2a.15 Multi-sensory telepresence for remote collaboration

Achieving high-fidelity telepresence using XR, volumetric capture, spatial audio, advanced haptics, and
AI is crucial for enabling remote collaboration that genuinely mimics physical presence. This technology
promises to reduce travel, facilitate rich and human-centred remote interaction, improve remote team
productivity, enhance cross-border collaboration, and ultimately foster greater inclusion across various
sectors.

**Problem Definition and Research Gap:**
The primary research gap lies in the absence of any current
system that seamlessly integrates real-time holography, multimodal feedback, network optimisation,
and a human-centred experience into a single scalable solution. Technologies like holoportation, 3D
avatars, and haptic clothing are currently fragmented and immature, typically existing only as lab
prototypes (TRL 3-4). Scaling these solutions to a broader audience requires breakthroughs in hardware
design, edge computing and 6G communication. End-user adoption is extremely low, limited to research
and demonstrations, with no solution currently available for the general public, despite high interest across sectors.

**Research and Innovation Objectives:**
- Develop technologies for real-time 3D capture and mixed reality display systems, integrated with
  ultra-low latency streaming for seamless remote interaction.

- Design modular multisensory systems that include advanced haptics and privacy-by-design
  principles, utilising AI-driven compression and translation for efficient data handling.

- Conduct exploratory system integration, evaluate Quality of Experience (QoE) for multi-sensory
  devices, implement emotion-aware UX design, and develop open standards for edge/cloud
  architecture and security audits.

### 2a.16 Multimodal haptic design

Multimodal programmable haptics is vital for enhancing realism and skill transfer in XR-based training
through multisensory feedback. Combining several haptic stimuli improves precision, builds confidence,
and reduces cognitive load in complex tasks. This capability is also indispensable for remote operation
scenarios in hazardous or inaccessible environments, providing appropriate haptic feedback that
simulates real-world interactions. The development of context-aware haptic interfaces integrated into XR
systems is crucial for simulating complex haptic interactions in industrial training, robotics, or remote manipulation.

**Problem Definition and Research Gap:**
Current haptic feedback systems are largely limited to basic
vibrations or simple force feedback. There is a significant research gap in developing context-sensitive,
scalable, and wearable haptic systems capable of simulating complex properties like material textures,
nuanced tool interactions, or fine motor gestures. While lab demonstrations exist for technologies such
as wearable exoskeletons, ultrasonic haptics, and electro tactile interfaces (TRL 3-5), their real-time
integration into XR workflows remains immature. End-user adoption is very low, primarily due to the high
cost, bulkiness, or complexity of current haptic devices, although there is strong interest from advanced industrial sectors.

**Research and Innovation Objectives:**
- Develop modular, wearable, low-latency haptic systems (e.g., gloves, vests, handheld tools) with
  programmable feedback profiles that can be linked to DT and XR simulations.
- Research and implement real-time coupling between haptic systems and physics engines,
  alongside AI, to accurately simulate resistance, textures, and event-driven haptic sensations.
- Conduct comprehensive haptic signal modelling and material simulation, focusing on hardware
  miniaturisation and wearable ergonomics, while performing usability studies and psychophysics
  validation for applications.

### 2a.17 Spatial and adaptive sound design

Sound is a critical driver of presence, realism, and cognitive focus within XR environments. It enhances
situational awareness, emotional engagement, and action timing, yet its potential is often secondary in
XR design. In safety-critical or educational contexts, sophisticated acoustic cues can effectively guide
user behaviour, reduce visual overload, and significantly improve learning outcomes. One key challenge
is to develop real-time 3D spatial audio systems and adaptive sound perception models that improve
immersion, user orientation, and task performance in XR.

**Problem Definition and Research Gap:**
Most XR systems currently rely on simple stereo or non
contextual spatial audio. There is a significant research gap in designing and integrating real-time,
personalised, and dynamic soundscapes, as these remain difficult to achieve and are poorly integrated
into existing systems. A key limitation is the lack of models associated with appropriate devices that can
adapt audio feedback to a user's position, task, and environment, especially in shared XR spaces. Core
technologies (e.g., ambisonics, binaural rendering, spatial audio engines) exist at TRL 4-5, but their
seamless integration into XR workflows, multi-user setups, and adaptive models is limited. Few tools
currently bridge the gap between sound design principles and live XR interactivity. End-user adoption
remains low to medium, primarily confined to high-end VR games and simulations, due to complexity
and lack of awareness and tools.

**Research and Innovation Objectives:**
- Integrate interactive sound engines with XR platforms, leveraging head tracking, gesture
  recognition, scene analysis, and AI to dynamically adjust audio cues in real-time.
- Include auditory icons, voice spatialisation, acoustic AR, and multimodal synchronisation within
  immersive sound design.
- Develop methodologies encompassing acoustic scene modelling, psychoacoustics, user
  testing, and sound design prototyping, alongside adaptive feedback loops and cross-modal
  attention studies.

### 2a.18 Olfactory interfaces for scent-driven interaction

Developing compact, programmable olfactory systems and scent-based interaction models for XR
applications is crucial for enhancing immersion through scent-driven interaction. Smell is profoundly
linked to emotion, memory, and realism, yet it is largely absent from current digital experiences. In XR,
olfactory cues can significantly deepen presence, aid learning, and enable multisensory storytelling. For
specific applications like safety training, food sciences, or cultural heritage, olfaction can recreate
essential contextual information, benefiting museums, educators, healthcare professionals, perfumers,
and game developers alike.

**Problem Definition and Research Gap:**
Current olfactory systems are generally bulky, offer a limited
range of scents, suffer from slow diffusion, and exhibit poor synchronisation with visual and other
sensory feedback. There is no standardised interface for olfactory output within XR. Integration with
digital scenes and user interaction remains minimal, alongside a critical lack of user studies and
frameworks for olfactory UX. These technologies are currently at a low TRL (2-4), with early prototypes
existing but no widely usable or standardised platform. End-user adoption is extremely low, confined
mostly to niche art installations or experimental labs, hindered by cost, hardware complexity, hygiene
concerns, and challenges in content design.

**Research and Innovation Objectives:**
- Develop wearable or headset-mounted olfactory modules, alongside digital scent libraries and
  authoring tools, to enable precise triggering, synchronisation, and personalisation of scent delivery.
- Conduct extensive research into odour diffusion modelling, hardware miniaturisation, and user
  centred olfactory UX design, coupled with psychophysical studies and cross modal perception
  research to understand and optimise scent-based interactions.