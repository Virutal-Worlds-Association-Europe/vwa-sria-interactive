# 2f. Applied Artificial Intelligence for Virtual Worlds

## Scope

AI is a cornerstone technology for the development of Virtual Worlds (VW), both in the stage of content creation and in VW operation. Research gaps in this area include the creation and management of digital content, automating processes, improving the quality of virtual experiences, and enabling interoperability. Machine learning techniques must be refined to create more realistic and dynamic virtual entities, from non-player characters to virtual assistants. AI can enhance the development of advanced algorithms that can understand and respond to user behaviour in real-time. By addressing these research challenges, we can harness the power of AI to create more immersive, interactive, and intelligent VW.

---

## AI for Perception and Sensing

Understanding the environment is crucial for enabling immersive and interactive VR/AR/MR applications. AI plays a significant role in interpreting sensory data, but several challenges remain to achieve truly effective perception and sensing in VW applications.

### 2f.1 Artificial Intelligence-Based Computer Vision Methods

**Challenges and opportunities:**
AI in computer vision empowers virtual environments to understand the physical world. This enables capabilities like object recognition, pose estimation, and spatial mapping, allowing virtual elements to inherit semantics and properties from their physical counterparts. This fosters a more realistic blending of physical and digital worlds, enhancing user interaction and context awareness.

**Problem Definition and Research Gap:** Current digital-physical interactions are largely limited to graphical overlays. A truly realistic blending demands AI to capture diverse aspects beyond appearance, including object semantics and contextualisation. These properties must be dynamically captured and updated, with changes in one world reciprocally impacting the other, allowing users to perceive and modify virtual elements based on real-world properties.

**Research and Innovation Objectives:**
- Develop and exploit foundational multimodal models (e.g., vision-language models) for comprehensive scene analysis and information transfer to 3D models
- Advance vision-based AI for accurate semantic and property association with virtual elements from real-time or acquired 3D data
- Ensure dynamic property updates and perceptible real-world reflections in the virtual environment
- Enable egocentric, energy efficient and mobile perception of the scene and user interactions

### 2f.2 AI for Audio Analysis

**Challenges and opportunities:**
AI-based audio analysis enhances real-time speech recognition, which, integrated with Natural Language Processing (NLP) and Large Language Models (LLMs), facilitates more natural interaction with virtual environments (e.g., smart digital assistants). Voice analysis also detects user emotions. Furthermore, audio analysis improves situation awareness by identifying environmental features crucial for seamlessly blending physical and digital worlds.

**Problem Definition and Research Gap:** Human hearing is paramount for communication and environmental awareness. To enable natural user interaction in VW, this fundamental capability must be effectively transferred and replicated digitally. This requires sophisticated AI models to accurately interpret diverse real-world audio cues and translate them into actionable information within the virtual environment, bridging a key sensory immersion gap.

**Research and Innovation Objectives:**
- Develop advanced speech recognition and synthesis technologies, combined with Generative AI and LLMs, to create highly interactive virtual smart digital assistants
- Enable digital assistants to understand user requests and respond verbally, personalising answers based on language, context, and culture
- Utilise audio analysis to enhance situation awareness and identify environmental features for improved physical-digital blending

### 2f.3 AI for Multi-Modal Human-Machine Interaction and Sensor Fusion

**Challenges and opportunities:**
Haptic devices and wearable sensors provide users with multi-sensory perceptions in VW, including touch, temperature, smell, and force feedback. These technologies capture detailed user data, allowing machines to interpret human intention and emotional state. Simultaneously, AI-based sensor fusion of diverse inputs, such as cameras, eye trackers, and bio signals, enhances the accuracy, robustness, and resilience of virtual applications. By leveraging AI to orchestrate and combine sensor data, systems can maintain functionality even if certain inputs fail, making virtual interactions more immersive, adaptive, and reliable.

**Problem Definition and Research Gap:** Advancing the state of the art of sensor fusion and training such AI-models poses several challenges: multimodal datasets must be precisely annotated, data sources must be time-synchronised, and strong coordination is required between individual modality analysis and fusion modules to ensure real-time performance and coherence of the virtual experience.

**Research and Innovation Objectives:**
- Utilise deep machine learning to analyse signals from both haptic and sensing devices
- Employ AI to modulate actuation signals for realistic, individual- and context-adaptive haptic feedback
- Leverage AI to reliably interpret raw sensor signals into higher-level concepts, enhancing user intention and emotion understanding
- Develop and implement machine learning methods, such as hybrid LSTM–Random Forest networks, for effective multi-modal sensor fusion
- Enhance accuracy and robustness in virtual applications by strategically combining heterogeneous sensor data

---

## Edge AI and Distributed Intelligence

Edge AI in VR/XR integrates AI into immersive devices while coordinating with edge nodes and the cloud for optimized performance. This enables real-time, context-aware, and privacy-preserving interactions by distributing tasks across a multi-tiered system. It tackles latency, bandwidth, and security challenges, ensuring smooth and adaptive experiences. Applications span training, simulation, design, healthcare, and entertainment, making Edge AI crucial for next-gen immersive systems.

### 2f.4 On-Device AI for Inference in Headsets, Haptic Devices and Sensors

**Challenges and opportunities:**
On-device AI enables real-time, low-latency, and privacy-preserving interactions in VW without constant cloud connectivity. This is vital for time-sensitive or privacy-critical applications using immersive AR/VR environments. It ensures seamless UX by mitigating delays that could break immersion or cause discomfort, while also reducing energy consumption and data transmission.

**Problem Definition and Research Gap:** Current AI systems often demand too many resources for edge devices constrained by power, memory, and compute capacity. Many existing solutions rely on cloud connectivity, limiting their use in remote or privacy-sensitive scenarios. A key research gap lies in developing AI models, hardware architectures, and interaction pipelines that can operate fully or partially on-device, enabling distributed intelligence across the VW.

**Research and Innovation Objectives:**
- Develop and benchmark machine learning models tailored for resource-constrained devices, focusing on lightweight neural network architectures and model optimisation techniques (quantisation, pruning, distillation)
- Explore hardware acceleration, including custom ASICs and microcontroller-based AI execution, alongside methodologies like hardware/software co-design
- Research edge-based federated learning and continual learning paradigms for local adaptation, ensuring privacy-preserving on-device intelligence

### 2f.5 Federated Learning for Collaborative Training Without Compromising Privacy

**Challenges and opportunities:**
VW systems increasingly collect sensitive user data, such as gaze, motion, and physiological responses. Federated learning (FL) allows valuable insights from this data to improve immersive experiences—like adaptive interfaces and personalised haptics. This method safeguards user privacy while facilitating collaborative model training across distributed edge devices.

**Problem Definition and Research Gap:** Most current VW systems rely on centralised AI models, which limits privacy, increases latency, and hinders scalability. Edge devices in these environments are resource-constrained and manage complex, heterogeneous, and dynamic data streams. Existing FL approaches aren't fully equipped for the real-time, multimodal nature of XR workloads. This necessitates lightweight, context-aware, and privacy-preserving FL mechanisms specifically designed for distributed, real-time VW systems.

**Research and Innovation Objectives:**
- Develop lightweight FL algorithms tailored for streaming, multimodal VW data
- Integrate FL with edge-based privacy-preserving mechanisms, such as secure aggregation and differential privacy
- Research cross-device and cross-user learning approaches that maintain temporal continuity and interactivity, including hierarchical or decentralised FL architectures

### 2f.6 Distributed Intelligence Across Devices, Cloud, and Edge Networks

**Challenges and opportunities:**
VR/XR experiences require ultra-low latency, high throughput, and real-time responsiveness. Distributed intelligence offers a transformative approach by enabling adaptive partitioning of AI tasks across XR devices, edge nodes, and cloud backends. This optimises resource use, ensures high quality of experience (QoE), and provides continuous, context-aware AI support.

**Problem Definition and Research Gap:** Current XR systems lack intelligent orchestration strategies to dynamically allocate tasks across heterogeneous edge environments and offer limited support for collaborative intelligence between co-located or remote devices. Effective edge-centric frameworks must balance latency, energy consumption, privacy, and accuracy, adapting to rapidly changing conditions.

**Research and Innovation Objectives:**
- Design distributed inference pipelines split across headsets, controllers, edge nodes, and the cloud, supported by dynamic orchestration and AI model migration based on context
- Implement edge-native caching and prefetching for predictive rendering and interaction, leveraging 5G/6G for low-latency task offloading and synchronisation
- Integrate AI accelerators across tiers for seamless collaboration, using methodologies like hierarchical task scheduling and cross-layer optimisation

---

## AI for Content Creation

Generative AI extends beyond prediction to creation, generating novel samples that follow training data distributions while remaining distinct. These technologies hold great potential for design, creation and editing of 3D VW. This includes the generation of assets such as geometry, textures, animations, and entire scenes—enabling faster iteration cycles and lowering barriers for creative professionals and developers alike.

### 2f.7 Generative AI for Virtual Content Creation and Multi-Scale 3D Asset Generation

**Challenges and opportunities:**
AI content creation tools accelerate production workflows and reduce the barrier to entry for non-expert creators. Furthermore, multi-scale spatial and temporal data integration empowers the accurate reconstruction and simulation of real-world phenomena in virtual environments. Simultaneously, advances in 3D object generation and novel view synthesis allow for realistic and interactive 3D content creation from limited input, enhancing immersion and streamlining the design process across industries.

**Problem Definition and Research Gap:** Despite their promise, current diffusion models lack the ability to generate actionable assets in standardized 3D formats required for integration into modern content creation pipelines, limiting their utility in professional environments. Additionally, existing AI models often struggle with integrating heterogeneous datasets across spatial and temporal dimensions, which hinders accurate prediction and simulation of dynamic real-world scenarios. In 3D generation, the need remains for methods that produce high-fidelity, physically plausible objects and views from sparse data while maintaining compatibility with industry-standard graphics workflows—challenges that must be addressed for scalable, real-world deployment.

**Research and Innovation Objectives:**
- Integrate generative models into existing production pipelines to improve content creation efficiency
- Design AI systems for multi-scale data fusion using temporal attention and generative reconstruction of missing data
- Create models capable of spatio-temporal prediction from heterogeneous sources, improving realism and coherence in virtual environments
- Build 3D object generation frameworks using diffusion and GAN architectures, integrating priors like Neural Radiance Fields and Gaussian splatting
- Enable advanced features such as scene relighting, material editing, and novel view synthesis while ensuring compatibility with graphics engines

### 2f.8 Physics-Enabled Content Generation

**Challenges and opportunities:**
Physics-enabled content generation is crucial for creating realistic and interactive virtual environments. For designers, simulation developers, and XR content creators, this ensures physical plausibility and natural behaviour of generated elements, which are essential for achieving deep immersion and high usability within VW.

**Problem Definition and Research Gap:** A key challenge is that current generative models struggle to produce physically accurate results. There is a notable absence of AI models capable of incorporating fundamental physical laws, such as gravity, fluid dynamics, and object continuity, into the content they generate, limiting the realism and fidelity of virtual environments.

**Research and Innovation Objectives:**
- Develop generative models, including diffusion models and physics-informed neural networks, that embed physical constraints
- Implement simulation-guided learning techniques for creating content with inherent physical accuracy

### 2f.9 Storytelling and Application Workflows

**Challenges and opportunities:**
Integrating AI into storytelling and application workflows enables the creation of dynamic, personalised narratives within VW. This enhances user engagement, streamlines content creation processes, and allows for the scalable production of interactive experiences, benefiting narrative designers, game developers, and educators.

**Problem Definition and Research Gap:** Traditional storytelling workflows are often linear and resource-intensive, limiting adaptability and scalability. There is a need for AI-driven systems capable of generating and managing complex narratives in real-time, adapting to user interactions, and significantly reducing manual content creation efforts.

**Research and Innovation Objectives:**
- Develop AI frameworks combining natural language processing, procedural content generation, and user interaction data for adaptive storytelling
- Create tools that facilitate real-time narrative generation and seamless integration with existing content pipelines

### 2f.10 Multi-Modality, Sounds, Audio, and Alignment of Modalities

**Challenges and opportunities:**
This area enables the generation of synchronised talking avatars or human-like faces directly from audio, drastically reducing the need for video data and manual animation. For VW developers and communication platform engineers, it enhances realism, supports ultra-low-bandwidth applications like synthetic video conferencing, and increases accessibility in storytelling, education, and assistive technologies.

**Problem Definition and Research Gap:** Current systems struggle to produce realistic and expressive human videos purely from audio, particularly in maintaining consistency in lip sync, facial emotion, and head movement across diverse speakers and acoustic conditions. There is a need for models that not only align modalities accurately but also generate high-fidelity talking avatars or human faces from speech alone with minimal input data.

**Research and Innovation Objectives:**
- Integrate speech-driven generative models, such as audio-conditioned diffusion models and deformable neural avatars, for realistic rendering from audio signals
- Focus on real-time performance and deployment on lightweight devices for practical application

### 2f.11 AI for Inclusion and Cultural Awareness

**Challenges and opportunities:**
Virtual environments must support diverse users across cultures and abilities to ensure immersive, inclusive, and globally relevant experiences. For XR developers and accessibility tool providers, AI enables real-time multilingual communication, cultural sensitivity, and adaptive interfaces, enhancing engagement and broadening participation in VW.

**Problem Definition and Research Gap:** Current platforms lack cultural adaptation and accessibility, leading to exclusion and reduced immersion. There is a need for AI systems that support culturally aware interactions and accommodate diverse user needs through real-time adaptation and barrier-free design principles embedded from the start.

**Research and Innovation Objectives:**
- Develop AI models for real-time language translation, sentiment analysis, and cultural understanding
- Enable seamless and respectful communication in virtual spaces through integrated AI solutions
- Create adaptive interfaces and assistive tools for users with varying abilities
- Build content creation tools that incorporate accessibility by design to ensure inclusive virtual experiences

### 2f.12 Semantic AI, Knowledge Graphs and Knowledge Modelling

**Challenges and opportunities:**
World models help AI evolve from perception to deep understanding in virtual environments through structured knowledge representation. They tackle semantic interoperability, real-time reasoning, and accessibility challenges, benefiting developers, researchers, and policymakers. This approach also enhances language interaction, content generation, personalized learning, and digital inclusion, creating a smarter and more accessible virtual world.

**Problem Definition and Research Gap:** VW pose challenges in handling evolving objects and relationships over time. Semantic interoperability is limited by isolated ecosystems and incompatible data models, making data integration and consistency difficult. A key research gap is developing knowledge models that learn from continuous data streams, capture causal relationships, and enable real-time reasoning in dynamic environments.

**Research and Innovation Objectives:**
- Develop adaptive knowledge graphs that evolve based on observed interactions, enabling robust ontologies and semantic reasoning
- Advance data-driven knowledge modelling by combining symbolic and statistical methods for learning from VW data streams
- Improve natural language understanding for intuitive interaction through speech and text, integrating hybrid symbolic-neural approaches and federated learning

---

## Foundational Models for Virtual Worlds

### 2f.13 Adaptation and Specialisation of Foundation Models

**Challenges and opportunities:**
XR experiences demand tailored interactions matching individual cognitive, physical, and contextual user profiles. Current foundation models, trained on generic data, lack the specificity and adaptability required for specialised immersive scenarios like skill training or rehabilitation. For application designers and UX researchers, this research addresses the need for personalised, context-aware interactions in VW.

**Problem Definition and Research Gap:** Integrating domain-specific knowledge into foundation models is difficult, as expert data is often locked in proprietary multimodal sources. Key challenges include developing efficient multi-modal fine-tuning and Retrieval-Augmented Generation (RAG) methods with limited data. Current models also struggle with personalisation that adapts to user history, behavior, and spatial context with proper semantic grounding.

**Research and Innovation Objectives:**
- Develop methods for multi-modal fine-tuning of foundation models using limited domain-specific data
- Create efficient Retrieval-Augmented Generation (RAG) pipelines to integrate structured and unstructured domain knowledge
- Enable model personalisation that adapts to individual usage history, behaviour, and spatial context, ensuring robust semantic grounding

### 2f.14 Foundation Models for Reasoning, Planning, and Tool Use

**Challenges and opportunities:**
XR systems need autonomous agents for user assistance, task planning, and adaptation. While foundation models excel in text, they struggle with contextual planning, memory, and tool use. Integrating structured reasoning with external tools like scene graphs, physics engines, and 3D interfaces is key to enabling real-time intelligent assistance, benefiting developers, immersive learning designers, and Digital Twin integrators.

**Problem Definition and Research Gap:** XR tasks require contextual and sequential reasoning, including memory, long-horizon planning, and 3D grounding. Key gaps include weak task planning in foundation models, limited scene understanding and spatial memory integration, and inadequate frameworks for using external tools like 3D viewers and spatial databases.

**Research and Innovation Objectives:**
- Combine language reasoning with spatial mapping and planning APIs, such as using Chain of Thought (CoT) prompting with 3D graph search
- Develop multi-agent architectures for collaborative XR environments using foundation models
- Integrate external tool APIs, like physics simulators and CAD libraries, into foundation model workflows
- Design memory-augmented architectures for consistent, history-aware interactions and experiences in XR

---

## AI for Avatars

Creating lifelike, expressive avatars is key to VW but presents major AI challenges. Current methods are slow, costly, and can reinforce biases, limiting inclusion and diverse expression. AI's advanced capabilities also raise concerns about impersonation and realistic fakes, threatening trust and psychological safety in virtual interactions.

### 2f.15 AI for Avatar Design and Creation

**Challenges and opportunities:**
AI for avatar design and creation empowers users to express themselves authentically and creatively in digital spaces. It supports diverse representation and democratises avatar creation across various technical and creative skill levels. This addresses the critical need for inclusive, accessible, and safe digital identities within virtual environments, benefiting end users, designers, developers, and accessibility advocates.

**Problem Definition and Research Gap:** Current AI avatar tools often lack diversity in representation, may perpetuate algorithmic bias, and can be challenging for non-experts to use. There is a pressing need for AI-driven solutions that ensure inclusivity, prevent the creation of harmful or misleading avatars, and provide accessible, intuitive interfaces for a wide range of users, including those with diverse abilities.

**Research and Innovation Objectives:**
- Develop generative AI models, such as diffusion and GANs, with explicit controls for diversity in ethnicity, gender, age, body type, and ability
- Integrate bias detection and mitigation modules, along with safety filters, into avatar creation pipelines
- Design user-friendly interfaces with features like real-time customisation and accessibility functionalities (e.g., voice-guided creation, templates for low-vision users)

### 2f.16 AI for Avatar Control and Autonomy

**Challenges and opportunities:**
AI enables avatars to shift between user-driven and autonomous control, enhancing immersion, expression, and believability in virtual environments. It supports adaptive, emotionally expressive interactions while improving engagement and accessibility. Intuitive interfaces help users manage avatar autonomy, ensuring comfort and psychological safety, benefiting developers, designers, and end users.

**Problem Definition and Research Gap:** Current avatar systems lack robust, explainable AI for nuanced behaviour and context adaptation. There is limited support for seamless transitions between user control and autonomy, and absence of intuitive user interfaces for managing it. Existing models frequently fail to provide deep contextual awareness or believable independent action, particularly in complex, multi-agent VW, creating a significant research gap.

**Research and Innovation Objectives:**
- Develop explainable AI models for behaviour modelling, leveraging reinforcement learning, imitation learning, and cognitive architectures
- Integrate deep contextual awareness of geometry, objects, and other avatars to enable adaptive behaviour
- Design intuitive user interfaces for live control and customisation of avatar autonomy, ensuring clear user oversight mechanisms

### 2f.17 Conversational AI and Autonomous Non-Player Characters

**Challenges and opportunities:**
Conversational AI and Large Language Model (LLM)-driven autonomous Non-Player Characters (NPCs) enable the creation of engaging, believable, and interactive NPCs and avatars that can hold natural, contextually relevant conversations. This enhances immersion, player satisfaction, and the overall quality of virtual experiences, benefiting game developers, VW designers, and educators.

**Problem Definition and Research Gap:** Current NPCs often lack comprehensive contextual awareness, persistent memory, and the ability to conduct coherent, emotionally intelligent dialogues. There is a need for models that can ground conversations in the virtual world, maintain consistent personalities, remember past interactions, and understand complex user intents and emotions.

**Research and Innovation Objectives:**
- Develop LLM-based conversational agents with multimodal input (text, voice, gesture, facial expression) and robust world grounding
- Implement persistent memory, personality modelling, and emotion recognition capabilities in these agents
- Integrate ethical alignment frameworks to ensure safe and inclusive interactions

### 2f.18 AI for Social Avatar Behaviour

**Challenges and opportunities:**
AI for social interaction, crowd simulation, and emergent dynamics enhances the realism and vibrancy of virtual environments by enabling avatars to engage in believable social interactions and group behaviours. This significantly improves user immersion and psychological safety, benefiting game developers, VR designers, social scientists, and urban planners.

**Problem Definition and Research Gap:** Existing models often lack the capability to generate nuanced non-verbal communication, such as gaze, posture, and gestures, and struggle to effectively align multimodal interaction cues. Additionally, simulating emergent crowd behaviours that adhere to social norms and contribute positively to virtual environments remains a complex challenge, limiting the authenticity of virtual social spaces.

**Research and Innovation Objectives:**
- Develop AI models capable of generating nuanced non-verbal communication and aligning multimodal interaction cues
- Research and implement methodologies for simulating emergent crowd behaviours that adhere to social norms within virtual environments
- Explore agent-based modelling, deep reinforcement learning, and Large Language Models for realistic social dynamics

---

## AI for User Interaction and Human-AI Collaboration

Creating intuitive and adaptive AI interactions in VW is challenging. Real-time user modelling—tracking state, skills, preferences, and cognitive load—is essential but complex. Current systems struggle with predicting behaviour and intentions in dynamic environments where goals shift rapidly. While VW offer accessibility potential, developing AI that seamlessly adapts content in real-time remains a significant task.

### 2f.19 Human-AI Collaboration Frameworks and Interaction Paradigms

**Challenges and opportunities:**
Integrating AI into virtual environments can augment human capabilities, address individual limitations, and enhance accessibility. This includes real-time content adaptations, such as colour adjustments for colour-blind users, dynamic text simplification, language translation, and sign language interpretation. Such advancements benefit VR developers, accessibility advocates, and end-users with diverse needs.

**Problem Definition and Research Gap:** Current virtual environments often lack systems to adapt to diverse user needs, leading to suboptimal UX. There is a need for frameworks that enable AI to seamlessly collaborate with humans, providing personalised assistance and enhancing interaction intuitiveness, thereby improving the overall human-AI partnership.

**Research and Innovation Objectives:**
- Develop AI-driven frameworks that augment human strengths and compensate for limitations through real-time content transformation and assistive features
- Align expectations and build mutual understanding between humans and AI agents via transparent information visualisation
- Enable natural and intuitive multimodal interactions with AI agents, assisting in complex tasks like data exploration, collaborative design, and guided learning
- Leverage LLMs' capability to process and generate multimodal information (visual and verbal) for new interaction paradigms such as virtual instructors/tutors and cognitive companions in decision support

### 2f.20 Intelligent Multi-Agent Systems for Dynamic and Coherent Interactions

**Challenges and opportunities:**
Interactivity of virtual environments should be enhanced by enabling agents to collaborate effectively, exhibit emergent intelligent behaviours, and provide a coherent UX. This helps game developers and VR designers in creating dynamic, responsive, and engaging VW with believable autonomous entities.

**Problem Definition and Research Gap:** Existing multi-agent systems often lack the ability to coordinate dynamically and coherently in virtual environments, leading to disjointed interactions and reduced immersion. There is a need for decentralised coordination mechanisms, shared understanding among agents, and strategies for managing collective behaviour in complex settings, which is crucial for creating truly immersive VW.

**Research and Innovation Objectives:**
- Develop decentralised coordination frameworks for multi-agent systems in virtual environments
- Integrate machine learning for adaptive behaviours and implement communication protocols for shared understanding among agents
- Design algorithms for emergent collective behaviours to create more dynamic and realistic virtual interactions

### 2f.21 Explainable AI for Extended Reality Interactions and Decision Support

**Challenges and opportunities:**
Explainable AI (XAI) enhances transparency and trust in AI-driven XR applications by providing users with clear explanations of AI decisions. For XR developers, UX designers, and end-users in immersive environments, this improves user engagement and decision-making, fostering confidence and acceptance of AI assistance.

**Problem Definition and Research Gap:** Existing XR systems often lack mechanisms to explain AI-driven actions in a user-friendly manner, potentially leading to mistrust and reduced user engagement. There is a need for XAI techniques tailored for XR environments, including real-time, context-aware, and non-intrusive explanations that maintain immersion.

**Research and Innovation Objectives:**
- Develop frameworks and methodologies that integrate XAI into XR platforms
- Focus on real-time, context-aware explanations that are non-intrusive and enhance user understanding without disrupting immersion

### 2f.22 AI-Enhanced Information Visualisation and Visual Analytics

**Challenges and opportunities:**
Complex datasets and AI model outputs need to be converted into intuitive, interactive, and spatially grounded visualisations. For data scientists, business analysts, and VW developers, this facilitates insight discovery, supports decision-making and addresses the challenge of making data accessible and actionable in VW, while ensuring inclusivity for users with diverse perceptual abilities.

**Problem Definition and Research Gap:** Current visualisation and analytics tools are primarily designed for 2D screens and do not fully leverage the unique affordances of immersive 3D environments. There is a lack of AI-driven techniques that can automatically adapt, personalise, and spatially anchor visualisations in VW, especially with built-in accessibility features for diverse user needs, which is a key barrier to widespread adoption.

**Research and Innovation Objectives:**
- Develop AI models that automatically generate, adapt, and personalise visualisations for 3D environments
- Integrate spatial analytics, interactive exploration, and multi-sensory data representation (e.g., haptics, audio)
- Emphasise accessibility, including customisable visual encodings and alternative sensory outputs for diverse user requirements

---

## Strategic Recommendations

### For Industry and Developers
1. **Implement on-device AI:** Develop lightweight models and hardware acceleration for real-time, privacy-preserving XR experiences
2. **Adopt federated learning:** Enable collaborative model training while protecting sensitive user data
3. **Integrate generative AI:** Leverage AI for content creation, physics-enabled generation, and adaptive storytelling
4. **Ensure explainability:** Build transparent AI systems with clear, context-aware explanations for user trust

### For Research Institutions
1. **Advance edge AI:** Research distributed intelligence architectures optimising latency, energy, and privacy
2. **Develop inclusive AI:** Create culturally aware, accessible AI systems supporting diverse user needs
3. **Explore foundation models:** Adapt and specialise large models for XR-specific reasoning, planning, and tool use
4. **Study human-AI collaboration:** Investigate frameworks for intuitive, augmentative AI assistance in immersive environments

### For Policymakers
1. **Promote privacy-preserving AI:** Support development of federated learning and on-device processing to protect user data
2. **Ensure AI transparency:** Require explainable AI in high-risk XR applications per EU AI Act
3. **Support diverse representation:** Fund research on bias mitigation and inclusive avatar design
4. **Enable open innovation:** Invest in European foundation models and open-source AI tools for VW

### For Content Creators
1. **Leverage generative AI:** Use AI-assisted tools for 3D asset generation, animation, and scene creation
2. **Ensure physical plausibility:** Integrate physics-informed models into content generation workflows
3. **Design for diversity:** Create culturally aware, linguistically diverse, and accessible virtual experiences
4. **Build intelligent NPCs:** Develop conversational AI and autonomous characters for engaging narratives

### Cross-References
- **2a. Visualisation, Sensing, Devices and Immersion:** For AI-powered sensing and adaptive displays
- **2b. Real-time User Interaction:** For AI-driven interaction models and cognitive load optimisation
- **2c. Authoring and Experience Design:** For AI-assisted authoring tools and workflows
- **2d. Standardisation and Interoperability:** For AI model integration standards and semantic frameworks
- **2e. Digital Twins, Assets, and People:** For AI in DT creation, validation, and human modelling
- **3a. Human Rights, Safety, Participation:** For ethical AI, bias mitigation, and inclusive design
- **3e. Trust and Human Oversight:** For explainable AI and transparency requirements
